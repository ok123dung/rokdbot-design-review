# Phase 2: Auto Payment -- SePay Integration

## Context Links

- [Plan Overview](./plan.md)
- [Phase 1: Security Hardening](./phase-01-security-hardening.md) (dependency)
- [Payment APIs Research](./research/researcher-01-payment-apis.md)
- [Supabase Security Research](./research/researcher-02-supabase-security.md)

## Overview

- **Days:** 3-6
- **Priority:** HIGH -- biggest operational impact, eliminates manual admin verification
- **Status:** pending
- **Description:** Replace manual payment flow with automated SePay webhook + VietQR dynamic QR codes. User sees dynamic QR with embedded amount/code, transfers via bank app, SePay webhook auto-confirms, Supabase Realtime notifies frontend.

## Key Insights

- `sepay-webhook/index.ts` already fully implemented -- has API key validation, payment_code extraction via regex, amount verification, order/payment status updates, email+Discord notification triggers
- `send-order-notification/index.ts` already fully implemented -- Resend email + Discord webhook with rich embeds
- `config.toml` already has both functions configured with `verify_jwt = false`
- **Missing piece**: `create-order` Edge Function (server-side order creation)
- **Missing piece**: Dynamic VietQR URL generation (currently static QR image)
- **Missing piece**: 5-min countdown + auto-cancel logic
- Order.tsx currently does client-side insert (lines 180-239) -- must be replaced with Edge Function call
- HD Bank account: `0915966853`, holder: `NGUYEN HUU DUNG`
- HD Bank BIN for VietQR: `970437`

## Requirements

### Functional
- User selects package -> Edge Function creates order with server-side payment_code -> returns VietQR URL
- Dynamic QR embeds exact amount + payment code in addInfo field
- Frontend shows QR + 5-min countdown
- SePay webhook auto-verifies payment (already implemented)
- Supabase Realtime notifies frontend of payment confirmation (already works)
- Auto-cancel orders after 5 min if unpaid
- Admin retains manual "mark as paid" button as fallback

### Non-Functional
- Order creation latency < 2 seconds (Edge Function cold start ~200ms)
- 90%+ orders auto-verified within 60 seconds of bank transfer
- Idempotent webhook handling (already implemented -- checks order status before updating)

## Architecture

### New Payment Flow

```
User selects package + enters game info
  |
  v
Frontend calls: supabase.functions.invoke('create-order', { body: {...} })
  |
  v
create-order Edge Function:
  1. Validate JWT (auth.uid())
  2. Validate package_id exists + is_active
  3. INSERT order (trigger generates payment_code)
  4. INSERT payment record
  5. Build VietQR URL with amount + "ROK {payment_code}"
  6. Return { order_id, payment_code, qr_url, amount }
  |
  v
Frontend displays:
  - Dynamic VietQR QR code (large, centered)
  - Amount + payment code
  - 5-min countdown timer
  - Copy button for transfer content
  |
  v
User scans QR -> transfers via bank app
  |
  v
Bank -> SePay detects transfer -> POST webhook
  |
  v
sepay-webhook Edge Function (ALREADY BUILT):
  1. Validate API key
  2. Extract "ROK XXXXXX" from content
  3. Find pending order by payment_code
  4. Verify amount >= expected
  5. Update order status -> "paid"
  6. Update payment status -> "verified"
  7. Trigger email + Discord notification
  |
  v
Supabase Realtime -> Frontend receives UPDATE event
  |
  v
Frontend shows "Payment Confirmed!" -> redirect to order detail
```

### Auto-Cancel Architecture

```
pg_cron job (every 1 minute):
  UPDATE orders SET status = 'cancelled'
  WHERE status = 'pending'
  AND created_at < NOW() - INTERVAL '5 minutes';
```

## Related Code Files

### Create
- `supabase/functions/create-order/index.ts` -- server-side order creation + VietQR URL
- `supabase/migrations/YYYYMMDD_add_auto_cancel_cron.sql` -- pg_cron job

### Modify
- `src/pages/Order.tsx` -- replace client-side insert with Edge Function call, dynamic QR, countdown, simplify to 2 steps
- `src/pages/AdminDashboard.tsx` -- already has realtime subscription (line 100-133); no changes needed
- `supabase/config.toml` -- add `[functions.create-order]` section

### Existing (No Changes Needed)
- `supabase/functions/sepay-webhook/index.ts` -- fully implemented
- `supabase/functions/send-order-notification/index.ts` -- fully implemented

## Implementation Steps

### Step 1: Create `create-order` Edge Function (Day 3, ~2 hr)

Create `supabase/functions/create-order/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.89.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// HD Bank BIN for VietQR
const BANK_BIN = "970437";
const BANK_ACCOUNT = "0915966853";
const BANK_ACCOUNT_NAME = "NGUYEN HUU DUNG";
const QR_TEMPLATE = "compact2";

interface CreateOrderRequest {
  package_id: string;
  game_account_id: string;
  game_server: string;
  game_kingdom: string;
  notes?: string;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // 1. Authenticate user via JWT
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

    // Verify user JWT
    const supabaseAuth = createClient(supabaseUrl, supabaseAnonKey);
    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabaseAuth.auth.getUser(token);

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: "Invalid token" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // 2. Parse and validate request body
    const body: CreateOrderRequest = await req.json();

    if (!body.package_id || !body.game_account_id || !body.game_server || !body.game_kingdom) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Sanitize inputs (strip HTML)
    const sanitize = (s: string) => s.replace(/<[^>]*>/g, "").trim();
    const gameAccountId = sanitize(body.game_account_id).slice(0, 100);
    const gameServer = sanitize(body.game_server).slice(0, 50);
    const gameKingdom = sanitize(body.game_kingdom).slice(0, 50);
    const notes = body.notes ? sanitize(body.notes).slice(0, 2000) : null;

    // 3. Validate package exists and is active
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

    const { data: pkg, error: pkgError } = await supabaseAdmin
      .from("service_packages")
      .select("id, price, is_active, name")
      .eq("id", body.package_id)
      .single();

    if (pkgError || !pkg || !pkg.is_active) {
      return new Response(
        JSON.stringify({ error: "Package not found or inactive" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // 4. Check for existing pending order (prevent duplicates)
    const { data: existingOrder } = await supabaseAdmin
      .from("orders")
      .select("id, payment_code")
      .eq("user_id", user.id)
      .eq("status", "pending")
      .maybeSingle();

    if (existingOrder) {
      // Return existing pending order instead of creating new one
      const qrUrl = buildVietQrUrl(pkg.price, existingOrder.payment_code);
      return new Response(
        JSON.stringify({
          order_id: existingOrder.id,
          payment_code: existingOrder.payment_code,
          qr_url: qrUrl,
          amount: pkg.price,
          package_name: pkg.name,
        }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // 5. Create order (payment_code generated by DB trigger from Phase 1)
    const { data: order, error: orderError } = await supabaseAdmin
      .from("orders")
      .insert({
        user_id: user.id,
        package_id: body.package_id,
        game_account_id: gameAccountId,
        game_server: gameServer,
        game_kingdom: gameKingdom,
        notes: notes,
        total_amount: pkg.price,
        status: "pending",
      })
      .select("id, payment_code")
      .single();

    if (orderError || !order) {
      console.error("Order creation failed:", orderError);
      return new Response(
        JSON.stringify({ error: "Failed to create order" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // 6. Create payment record
    await supabaseAdmin.from("payments").insert({
      order_id: order.id,
      amount: pkg.price,
      method: "bank_transfer",
      status: "pending",
    });

    // 7. Build VietQR URL
    const qrUrl = buildVietQrUrl(pkg.price, order.payment_code);

    return new Response(
      JSON.stringify({
        order_id: order.id,
        payment_code: order.payment_code,
        qr_url: qrUrl,
        amount: pkg.price,
        package_name: pkg.name,
      }),
      { status: 201, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in create-order:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});

function buildVietQrUrl(amount: number, paymentCode: string): string {
  const addInfo = encodeURIComponent(`ROK ${paymentCode}`);
  const accountName = encodeURIComponent(BANK_ACCOUNT_NAME);
  return `https://img.vietqr.io/image/${BANK_BIN}-${BANK_ACCOUNT}-${QR_TEMPLATE}.png?amount=${amount}&addInfo=${addInfo}&accountName=${accountName}`;
}
```

### Step 2: Update supabase/config.toml (Day 3, ~5 min)

Add to `supabase/config.toml`:

```toml
[functions.create-order]
verify_jwt = false
```

Note: `verify_jwt = false` because we handle JWT verification manually inside the function (need to extract user from token). The Supabase client SDK automatically passes the Authorization header.

### Step 3: Create pg_cron auto-cancel job (Day 3, ~30 min)

Create `supabase/migrations/YYYYMMDD_add_auto_cancel_cron.sql`:

```sql
-- Enable pg_cron extension (if not already)
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Function to cancel expired pending orders
CREATE OR REPLACE FUNCTION cancel_expired_orders()
RETURNS void AS $$
BEGIN
  UPDATE public.orders
  SET status = 'cancelled',
      updated_at = NOW()
  WHERE status = 'pending'
  AND created_at < NOW() - INTERVAL '5 minutes';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Run every minute
SELECT cron.schedule(
  'cancel-expired-orders',
  '*/1 * * * *',
  $$SELECT cancel_expired_orders();$$
);
```

### Step 4: Rewrite Order.tsx frontend (Day 4-5, ~4 hr)

Major changes to `src/pages/Order.tsx`:

1. **Remove** `generatePaymentCode` function entirely
2. **Simplify** from 4 steps to 2 steps:
   - Step 1: Select package + enter game info (combine current steps 1-2)
   - Step 2: QR payment + realtime confirmation (combine steps 3-4)
3. **Replace** direct Supabase insert with Edge Function call:

```typescript
// OLD (client-side insert):
const { data: order } = await supabase.from("orders").insert({...}).select().single();

// NEW (Edge Function):
const { data, error } = await supabase.functions.invoke("create-order", {
  body: {
    package_id: selectedPackage,
    game_account_id: gameAccountId,
    game_server: gameServer,
    game_kingdom: gameKingdom,
    notes,
  },
});
const result = await data.json(); // or data directly if using newer SDK
```

4. **Replace** static QR image with dynamic VietQR URL from response:

```typescript
// OLD:
<img src="/assets/qr-bank.jpg" alt="QR Code" />

// NEW:
<img src={qrUrl} alt="Payment QR Code" className="w-64 h-64" />
```

5. **Add** 5-min countdown timer:

```typescript
const [countdown, setCountdown] = useState(300); // 5 minutes in seconds

useEffect(() => {
  if (step !== 2 || !createdOrderId || isPaymentConfirmed) return;

  const timer = setInterval(() => {
    setCountdown((prev) => {
      if (prev <= 1) {
        clearInterval(timer);
        // Order auto-cancelled by pg_cron, show message
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, [step, createdOrderId, isPaymentConfirmed]);

// Display:
const minutes = Math.floor(countdown / 60);
const seconds = countdown % 60;
// Show: {minutes}:{seconds.toString().padStart(2, '0')}
```

6. **Keep** existing Realtime subscription for payment confirmation (lines 84-118 -- this already works perfectly)

### Step 5: Update Step 2 QR payment UI (Day 5, ~2 hr)

Design the full-screen QR payment experience:

```
+----------------------------------+
|        Payment QR Code           |
|                                  |
|     +--------------------+       |
|     |                    |       |
|     |   [Dynamic QR]     |       |
|     |    from VietQR     |       |
|     |                    |       |
|     +--------------------+       |
|                                  |
|     Amount: 150,000d             |
|                                  |
|     Transfer content:            |
|     ROK ABC123  [Copy]           |
|                                  |
|     HD Bank: 0915966853          |
|     NGUYEN HUU DUNG              |
|                                  |
|     Time remaining: 4:32         |
|     [pulse animation on timer]   |
|                                  |
|     [spinner] Waiting for        |
|     payment confirmation...      |
+----------------------------------+
```

### Step 6: Test end-to-end flow (Day 6, ~2 hr)

1. Create test order via new flow
2. Verify VietQR URL renders correct QR
3. Simulate SePay webhook with test payload:
   ```bash
   curl -X POST https://{project}.supabase.co/functions/v1/sepay-webhook \
     -H "Authorization: Apikey {SEPAY_API_KEY}" \
     -H "Content-Type: application/json" \
     -d '{
       "id": 99999,
       "gateway": "HDBank",
       "transactionDate": "2026-03-20 10:30:00",
       "accountNumber": "0915966853",
       "transferType": "in",
       "transferAmount": 150000,
       "content": "ROK ABC123",
       "referenceCode": "TEST123",
       "accumulated": 5000000
     }'
   ```
4. Verify order status updates to "paid"
5. Verify Realtime notification reaches frontend
6. Verify email + Discord notifications fire
7. Test countdown expiration + auto-cancel
8. Test duplicate order prevention (existing pending order)

### Step 7: Admin manual verify fallback (Day 6, ~30 min)

AdminDashboard.tsx already has status update buttons (line 544-556) that include "paid". No additional changes needed -- admin can manually mark orders as paid if SePay webhook fails.

Optionally add a prominent "Verify Payment" button that only appears for pending orders:
```typescript
{selectedOrder?.status === "pending" && (
  <Button
    onClick={() => updateOrderStatus(selectedOrder.id, "paid")}
    className="bg-green-600 hover:bg-green-700 text-white"
  >
    Verify Payment Manually
  </Button>
)}
```

## Todo List

- [ ] Create `supabase/functions/create-order/index.ts`
- [ ] Add `[functions.create-order]` to `config.toml`
- [ ] Deploy create-order Edge Function
- [ ] Set bank info as Supabase secrets (BANK_BIN, BANK_ACCOUNT, etc.) or hardcode in function
- [ ] Create pg_cron auto-cancel migration
- [ ] Deploy auto-cancel cron job
- [ ] Rewrite Order.tsx: remove client-side insert, call create-order function
- [ ] Replace static QR with dynamic VietQR URL
- [ ] Add 5-min countdown timer with pulse animation
- [ ] Simplify order flow from 4 steps to 2 steps
- [ ] Test: create order via Edge Function
- [ ] Test: VietQR URL renders correct QR code
- [ ] Test: simulate SePay webhook -> order auto-confirmed
- [ ] Test: Realtime notification reaches frontend
- [ ] Test: email + Discord notifications fire
- [ ] Test: countdown expiry + auto-cancel
- [ ] Test: duplicate pending order prevention
- [ ] Test: admin manual verify fallback

## Success Criteria

- Orders created via Edge Function, not client-side
- Dynamic QR code displays correct amount and payment code
- SePay webhook auto-confirms 90%+ of payments within 60 seconds
- Admin manual intervention < 10% of orders
- 5-min auto-cancel works for unpaid orders
- Existing email + Discord notifications continue working

## Risk Assessment

| Risk | Severity | Mitigation |
|------|----------|------------|
| SePay webhook delayed/missed | MEDIUM | Admin manual verify fallback; SePay auto-retries |
| Edge Function cold start slow | LOW | ~200ms cold start acceptable; SePay retries if timeout |
| VietQR image service down | LOW | Fallback to static QR + manual transfer content display |
| HD Bank BIN incorrect | HIGH | Verify via VietQR bank list API before deployment |
| Duplicate payment (user pays twice) | MEDIUM | Check order status !== 'pending' in webhook (already implemented) |

## Security Considerations

- `create-order` Edge Function validates JWT server-side
- Input sanitization (strip HTML) before DB insert
- Service role key only used server-side in Edge Functions
- SePay webhook authenticated via API key header
- Amount verification prevents underpayment attacks
- Idempotent webhook handling prevents double-processing

## Next Steps

- After auto-payment works, proceed to [Phase 3: UI/UX](./phase-03-ui-ux-improvements.md)
- Monitor SePay webhook success rate for first week
- Keep manual flow as parallel option for 1 week, then deprecate static QR images
