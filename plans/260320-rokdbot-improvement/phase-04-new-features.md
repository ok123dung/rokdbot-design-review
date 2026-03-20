# Phase 4: New Features

## Context Links

- [Plan Overview](./plan.md)
- [Phase 3: UI/UX Improvements](./phase-03-ui-ux-improvements.md) (dependency)
- [Brainstorm Report](../reports/brainstorm-rokdbot-improvement.md)

## Overview

- **Days:** 11-14
- **Priority:** LOW -- only after core is stable
- **Status:** pending
- **Description:** Add Telegram bot for order lookup/notifications, discount code system, admin CSV export. These are value-add features that don't affect core payment flow.

## Key Insights

- `send-order-notification/index.ts` already sends email + Discord notifications -- Telegram would be a third channel
- `config.toml` has `[functions.send-order-notification]` stub -- Telegram bot needs its own function
- No discount system exists -- need new `discount_codes` table + validation in `create-order` Edge Function
- Admin CSV export can be client-side (simple, no backend needed) since admin already has all order data loaded

## Requirements

### Functional
- Telegram bot responds to /start, /order {code}, /status {code}
- Telegram bot sends admin notifications on new orders and payments
- Discount codes: fixed amount or percentage, max uses, expiry date
- Discount validation in create-order Edge Function
- Admin can export filtered orders as CSV

### Non-Functional
- Telegram bot latency < 3 seconds
- Discount validation atomic (no race conditions on usage count)
- CSV export handles 10,000+ rows without browser freeze

## Architecture

### Telegram Bot Flow

```
User sends /order ABC123 to @RokdBot_bot
  |
  v
Telegram API -> webhook POST -> supabase/functions/telegram-bot/index.ts
  |
  v
Edge Function:
  1. Parse command from message.text
  2. /start -> return welcome message
  3. /order {code} -> look up order by payment_code, return status
  4. /status {code} -> same as /order

Admin notifications (triggered from sepay-webhook):
  1. After marking order as paid, call Telegram sendMessage
  2. Target admin chat_id (configured as secret)
  3. Message: "New payment received: ROK {CODE}, {AMOUNT}d"
```

### Discount Code Schema

```sql
CREATE TABLE public.discount_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(20) UNIQUE NOT NULL,
  discount_type VARCHAR(10) NOT NULL CHECK (discount_type IN ('percent', 'fixed')),
  discount_value NUMERIC NOT NULL CHECK (discount_value > 0),
  max_uses INTEGER DEFAULT NULL,           -- NULL = unlimited
  used_count INTEGER DEFAULT 0,
  min_order_amount NUMERIC DEFAULT 0,
  valid_from TIMESTAMPTZ DEFAULT NOW(),
  valid_until TIMESTAMPTZ DEFAULT NULL,    -- NULL = no expiry
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE public.discount_codes ENABLE ROW LEVEL SECURITY;

CREATE POLICY discount_codes_select ON public.discount_codes
  FOR SELECT USING (is_active = true AND (valid_until IS NULL OR valid_until > NOW()));

CREATE POLICY discount_codes_admin ON public.discount_codes
  FOR ALL USING (is_admin());
```

### Discount Validation in create-order

```
1. Receive discount_code in request body (optional)
2. SELECT from discount_codes WHERE code = input AND is_active
3. Validate: not expired, used_count < max_uses, min_order_amount met
4. Calculate discount: percent -> amount * (1 - value/100), fixed -> amount - value
5. Ensure final_amount >= 0
6. Atomically increment used_count
7. Store discount_code_id and discount_amount on order
```

## Related Code Files

### Create
- `supabase/functions/telegram-bot/index.ts` -- Telegram webhook handler
- `supabase/migrations/YYYYMMDD_add_discount_codes.sql` -- discount_codes table + RLS

### Modify
- `supabase/functions/create-order/index.ts` -- add discount code validation
- `supabase/functions/sepay-webhook/index.ts` -- add Telegram admin notification after payment
- `supabase/config.toml` -- add `[functions.telegram-bot]`
- `src/pages/Order.tsx` -- add discount code input field
- `src/pages/AdminDashboard.tsx` -- add CSV export button, discount codes management tab
- `src/components/admin/PackagesManagement.tsx` -- no changes (discount codes are separate)

## Implementation Steps

### Step 1: Telegram Bot setup (Day 11, ~2 hr)

1. Create bot via @BotFather -> get bot token
2. Set webhook URL:
   ```bash
   curl "https://api.telegram.org/bot{TOKEN}/setWebhook?url=https://{project}.supabase.co/functions/v1/telegram-bot"
   ```
3. Store secrets:
   ```bash
   supabase secrets set TELEGRAM_BOT_TOKEN=your_token
   supabase secrets set TELEGRAM_ADMIN_CHAT_ID=your_chat_id
   ```

4. Create `supabase/functions/telegram-bot/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.89.0";

const BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN") ?? "";
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

interface TelegramUpdate {
  message?: {
    chat: { id: number };
    text?: string;
    from?: { first_name?: string };
  };
}

serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("OK", { status: 200 });
  }

  try {
    const update: TelegramUpdate = await req.json();
    const message = update.message;
    if (!message?.text) return new Response("OK", { status: 200 });

    const chatId = message.chat.id;
    const text = message.text.trim();

    if (text === "/start") {
      await sendMessage(chatId,
        "Welcome to RokdBot!\n\n" +
        "Commands:\n" +
        "/order {CODE} - Look up order by payment code\n" +
        "/status {CODE} - Check order status"
      );
    } else if (text.startsWith("/order") || text.startsWith("/status")) {
      const code = text.split(/\s+/)[1]?.toUpperCase();
      if (!code) {
        await sendMessage(chatId, "Usage: /order ABC123");
        return new Response("OK", { status: 200 });
      }

      const supabase = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
      );

      const { data: order } = await supabase
        .from("orders")
        .select("id, status, total_amount, created_at, payment_code, service_packages(name)")
        .eq("payment_code", code)
        .maybeSingle();

      if (!order) {
        await sendMessage(chatId, `No order found for code: ${code}`);
      } else {
        const statusEmoji: Record<string, string> = {
          pending: "⏳", paid: "💰", processing: "⚙️",
          running: "🚀", completed: "✅", cancelled: "❌"
        };
        await sendMessage(chatId,
          `Order: #${order.id.slice(0, 8).toUpperCase()}\n` +
          `Status: ${statusEmoji[order.status] || "📦"} ${order.status}\n` +
          `Package: ${(order.service_packages as any)?.name || "N/A"}\n` +
          `Amount: ${Number(order.total_amount).toLocaleString()}d\n` +
          `Created: ${new Date(order.created_at).toLocaleString("vi-VN")}`
        );
      }
    } else {
      await sendMessage(chatId, "Unknown command. Try /start for help.");
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Telegram bot error:", error);
    return new Response("OK", { status: 200 }); // Always 200 to Telegram
  }
});

async function sendMessage(chatId: number, text: string) {
  await fetch(`${TELEGRAM_API}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
  });
}
```

5. Add to `config.toml`:
```toml
[functions.telegram-bot]
verify_jwt = false
```

### Step 2: Telegram admin notifications (Day 11, ~1 hr)

Add to `supabase/functions/sepay-webhook/index.ts`, after the email notification block (around line 157-175):

```typescript
// Send Telegram notification to admin
try {
  const telegramToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
  const adminChatId = Deno.env.get("TELEGRAM_ADMIN_CHAT_ID");

  if (telegramToken && adminChatId) {
    const telegramMsg =
      `💰 Payment Received!\n\n` +
      `Code: ROK ${paymentCode}\n` +
      `Amount: ${receivedAmount.toLocaleString()}d\n` +
      `Order: #${order.id.slice(0, 8).toUpperCase()}`;

    await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: adminChatId,
        text: telegramMsg,
      }),
    });
  }
} catch (tgError) {
  console.error("Telegram notification failed:", tgError);
}
```

### Step 3: Discount codes table (Day 12, ~30 min)

Create `supabase/migrations/YYYYMMDD_add_discount_codes.sql`:

```sql
CREATE TABLE public.discount_codes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(20) UNIQUE NOT NULL,
  discount_type VARCHAR(10) NOT NULL CHECK (discount_type IN ('percent', 'fixed')),
  discount_value NUMERIC NOT NULL CHECK (discount_value > 0),
  max_uses INTEGER DEFAULT NULL,
  used_count INTEGER DEFAULT 0,
  min_order_amount NUMERIC DEFAULT 0,
  valid_from TIMESTAMPTZ DEFAULT NOW(),
  valid_until TIMESTAMPTZ DEFAULT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add discount columns to orders
ALTER TABLE public.orders
  ADD COLUMN IF NOT EXISTS discount_code_id UUID REFERENCES public.discount_codes(id),
  ADD COLUMN IF NOT EXISTS discount_amount NUMERIC DEFAULT 0;

-- RLS
ALTER TABLE public.discount_codes ENABLE ROW LEVEL SECURITY;

-- Public: can check if a code is valid (for frontend validation)
CREATE POLICY discount_codes_public_select ON public.discount_codes
  FOR SELECT USING (
    is_active = true
    AND (valid_until IS NULL OR valid_until > NOW())
    AND (max_uses IS NULL OR used_count < max_uses)
  );

-- Admin: full access
CREATE POLICY discount_codes_admin_all ON public.discount_codes
  FOR ALL USING (is_admin());

-- Index
CREATE INDEX idx_discount_codes_code ON public.discount_codes(code);
```

### Step 4: Discount validation in create-order (Day 12, ~1.5 hr)

Add to `supabase/functions/create-order/index.ts`:

1. Accept optional `discount_code` in request body
2. Before creating order, validate discount:

```typescript
let discountAmount = 0;
let discountCodeId: string | null = null;

if (body.discount_code) {
  const { data: discount, error: discountError } = await supabaseAdmin
    .from("discount_codes")
    .select("*")
    .eq("code", body.discount_code.toUpperCase().trim())
    .eq("is_active", true)
    .maybeSingle();

  if (!discount) {
    return new Response(
      JSON.stringify({ error: "Invalid discount code" }),
      { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  // Validate expiry
  if (discount.valid_until && new Date(discount.valid_until) < new Date()) {
    return new Response(
      JSON.stringify({ error: "Discount code expired" }),
      { status: 400, headers: { ...corsHeaders } }
    );
  }

  // Validate usage limit
  if (discount.max_uses !== null && discount.used_count >= discount.max_uses) {
    return new Response(
      JSON.stringify({ error: "Discount code fully redeemed" }),
      { status: 400, headers: { ...corsHeaders } }
    );
  }

  // Validate minimum order amount
  if (pkg.price < discount.min_order_amount) {
    return new Response(
      JSON.stringify({ error: `Minimum order amount: ${discount.min_order_amount}d` }),
      { status: 400, headers: { ...corsHeaders } }
    );
  }

  // Calculate discount
  if (discount.discount_type === "percent") {
    discountAmount = Math.floor(pkg.price * (discount.discount_value / 100));
  } else {
    discountAmount = Math.min(discount.discount_value, pkg.price);
  }

  discountCodeId = discount.id;

  // Atomically increment used_count
  await supabaseAdmin.rpc("increment_discount_usage", { discount_id: discount.id });
}

const finalAmount = Math.max(0, pkg.price - discountAmount);
```

3. Add the RPC function in migration:

```sql
CREATE OR REPLACE FUNCTION increment_discount_usage(discount_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE public.discount_codes
  SET used_count = used_count + 1
  WHERE id = discount_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

4. Include discount fields in order insert:
```typescript
.insert({
  ...
  total_amount: finalAmount,
  discount_code_id: discountCodeId,
  discount_amount: discountAmount,
})
```

### Step 5: Discount code input in Order.tsx (Day 13, ~1 hr)

Add to Step 1 of the order flow, below the game info form:

```typescript
const [discountCode, setDiscountCode] = useState("");
const [discountStatus, setDiscountStatus] = useState<"idle" | "valid" | "invalid">("idle");

// In the form:
<div className="mt-4">
  <Label htmlFor="discountCode">{t("order.discountCode")}</Label>
  <div className="flex gap-2 mt-1">
    <Input
      id="discountCode"
      placeholder="Enter code"
      value={discountCode}
      onChange={(e) => {
        setDiscountCode(e.target.value.toUpperCase());
        setDiscountStatus("idle");
      }}
      maxLength={20}
    />
  </div>
</div>
```

Pass `discount_code` to the Edge Function call:
```typescript
body: { ..., discount_code: discountCode || undefined }
```

Display discount result from response:
```typescript
// If response includes discount_amount > 0, show:
<p>Discount: -{discountAmount.toLocaleString()}d</p>
<p>Final: {finalAmount.toLocaleString()}d</p>
```

### Step 6: Admin CSV export (Day 13, ~1.5 hr)

Add to `src/pages/AdminDashboard.tsx`:

```typescript
const exportToCSV = () => {
  const headers = ["Order ID", "Customer", "Phone", "Package", "Governor ID", "Server", "Kingdom", "Amount", "Status", "Created"];
  const rows = filteredOrders.map(order => [
    order.id.slice(0, 8).toUpperCase(),
    order.profiles?.full_name || "N/A",
    order.profiles?.phone || "N/A",
    order.service_packages?.name || "N/A",
    order.game_account_id,
    order.game_server,
    order.game_kingdom,
    order.total_amount,
    order.status,
    new Date(order.created_at).toLocaleDateString("vi-VN"),
  ]);

  const csv = [headers, ...rows]
    .map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");

  const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `rokdbot-orders-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
};
```

Add button next to filters:
```typescript
<Button variant="outline" onClick={exportToCSV}>
  <Download className="w-4 h-4 mr-2" />
  Export CSV
</Button>
```

Note: For large datasets (10k+ orders), consider streaming or server-side CSV generation. Client-side is fine for current scale.

### Step 7: Admin discount codes management (Day 14, ~2 hr)

Add a new tab in AdminDashboard.tsx for discount codes management:

1. New tab trigger: "Discount Codes"
2. Table showing all discount codes with columns: Code, Type, Value, Used/Max, Valid Until, Active, Actions
3. Create/Edit dialog similar to PackagesManagement
4. Toggle active/inactive
5. Delete with confirmation

This follows the same pattern as `PackagesManagement.tsx` -- CRUD against `discount_codes` table with RLS enforcing admin-only access.

## Todo List

- [ ] Create Telegram bot via @BotFather
- [ ] Create `supabase/functions/telegram-bot/index.ts`
- [ ] Set Telegram secrets (TELEGRAM_BOT_TOKEN, TELEGRAM_ADMIN_CHAT_ID)
- [ ] Set Telegram webhook URL
- [ ] Add `[functions.telegram-bot]` to config.toml
- [ ] Add Telegram admin notification to sepay-webhook
- [ ] Create discount_codes table migration
- [ ] Add discount columns to orders table
- [ ] Create increment_discount_usage RPC function
- [ ] Add discount validation to create-order Edge Function
- [ ] Add discount code input field in Order.tsx
- [ ] Display discount amount in payment summary
- [ ] Add CSV export button in AdminDashboard
- [ ] Implement CSV export function
- [ ] Add discount codes management tab in admin
- [ ] Test Telegram bot /start, /order, /status commands
- [ ] Test Telegram admin notification on payment
- [ ] Test discount code: valid percent
- [ ] Test discount code: valid fixed amount
- [ ] Test discount code: expired
- [ ] Test discount code: fully redeemed
- [ ] Test CSV export with filters applied

## Success Criteria

- Telegram bot responds to all commands within 3 seconds
- Admin receives Telegram notification within 5 seconds of payment
- Discount codes correctly reduce order amount
- Discount usage count increments atomically
- CSV export downloads correctly with Vietnamese characters (BOM + UTF-8)
- All new features work with existing RLS policies

## Risk Assessment

| Risk | Severity | Mitigation |
|------|----------|------------|
| Telegram API rate limits | LOW | Bot serves individual lookups, low volume |
| Discount code race condition | MEDIUM | Atomic increment via RPC function; re-check after increment |
| CSV export crashes browser for huge datasets | LOW | Current scale < 1000 orders; add server-side export later if needed |
| Telegram bot token leaked | MEDIUM | Store in Supabase secrets, never in code |

## Security Considerations

- Telegram bot uses service_role_key -- only responds to valid commands, no data mutation
- Discount codes: public can only SELECT valid codes (RLS restricts); only admin can create/modify
- CSV export: admin-only page (gated by UI + RLS on data queries)
- Telegram webhook: no JWT (webhook from Telegram), validate update structure
- Discount increment RPC is SECURITY DEFINER -- runs as admin regardless of caller

## Next Steps

- After Phase 4, monitor all systems for 1 week
- Gather user feedback on Telegram bot usefulness
- Consider: referral system (new table, complex logic -- defer to v2)
- Consider: webhook retry dashboard for failed SePay webhooks
- Consider: A/B test discount codes impact on conversion
