---
title: "Phase 2: Backend — SePay + Edge Functions"
status: pending
priority: HIGH
days: 3-5
depends_on: phase-01
---

# Phase 2: Backend — SePay + Edge Functions

## Overview

Simplify create-order Edge Function for anonymous purchases. Deploy SePay webhook (already built). Add auto-cancel cron. Create Telegram bot for order lookup + admin alerts.

## Context Links

- [Plan Overview](./plan.md)
- [Phase 1: Security + DB](./phase-01-security-db.md)
- [Original Payment Research](../260320-rokdbot-improvement/research/researcher-01-payment-apis.md)

## Requirements

### Functional
- Anonymous order creation: package_id only, no auth needed
- Dynamic VietQR URL with embedded amount + payment code
- SePay webhook auto-confirms payment (already implemented)
- Auto-cancel pending orders after 5 minutes
- Telegram bot: /order {code} lookup + admin payment alerts
- Rate limiting: max 5 orders/hour per IP

### Non-Functional
- Order creation < 2 seconds
- 90%+ orders auto-verified within 60 seconds

## Architecture

### Simplified create-order Flow
```
Frontend POST /functions/v1/create-order
  body: { package_id: "uuid" }
  |
  v
Edge Function:
  1. Validate package_id exists + is_active + stock available
  2. Rate limit check (IP-based)
  3. INSERT order (no user_id, trigger generates payment_code)
  4. INSERT payment record
  5. Decrement stock (if not unlimited)
  6. Build VietQR URL
  7. Return { order_id, payment_code, qr_url, amount, package_name }
```

### Auto-Cancel (pg_cron)
```sql
-- Every minute: cancel orders pending > 5 minutes
UPDATE orders SET status = 'cancelled'
WHERE status = 'pending'
AND created_at < NOW() - INTERVAL '5 minutes';
```

### Telegram Bot
```
/start -> welcome + commands list
/order ABC123 -> lookup order status by payment_code
/status ABC123 -> same as /order

Admin notification (from sepay-webhook):
  -> "Payment received: ROK {CODE}, {AMOUNT}d"
```

## Related Code Files

### Create
- `supabase/functions/create-order/index.ts` — simplified, no JWT
- `supabase/functions/telegram-bot/index.ts` — bot webhook handler
- `supabase/migrations/YYYYMMDD_v2_auto_cancel_cron.sql`

### Modify
- `supabase/functions/sepay-webhook/index.ts` — add Telegram admin notification
- `supabase/config.toml` — add create-order + telegram-bot function stubs

### Keep As-Is
- `supabase/functions/send-order-notification/index.ts`

## Implementation Steps

### Step 1: create-order Edge Function

Key differences from v1:
- NO JWT validation (anonymous)
- NO game info fields
- Rate limit by IP (X-Forwarded-For header)
- Stock decrement (atomic)
- VietQR URL generation

Bank info:
- HD Bank BIN: `970437`
- Account: `0915966853`
- Holder: `NGUYEN HUU DUNG`

### Step 2: Update config.toml

```toml
[functions.create-order]
verify_jwt = false

[functions.telegram-bot]
verify_jwt = false
```

### Step 3: pg_cron auto-cancel

```sql
CREATE EXTENSION IF NOT EXISTS pg_cron;

CREATE OR REPLACE FUNCTION cancel_expired_orders()
RETURNS void AS $$
BEGIN
  UPDATE public.orders
  SET status = 'cancelled', updated_at = NOW()
  WHERE status = 'pending'
  AND created_at < NOW() - INTERVAL '5 minutes';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

SELECT cron.schedule('cancel-expired-orders', '*/1 * * * *',
  $$SELECT cancel_expired_orders();$$);
```

### Step 4: Add Telegram notification to sepay-webhook

After payment confirmation, send Telegram message to admin chat.

### Step 5: Telegram bot Edge Function

Handle /start, /order, /status commands. Use service_role_key for DB queries.

### Step 6: Test end-to-end

1. POST to create-order -> get QR URL
2. Simulate SePay webhook -> order auto-confirmed
3. Verify Telegram admin notification fires
4. Verify auto-cancel after 5 minutes
5. Test rate limiting
6. Test Telegram bot /order lookup

## Todo List

- [ ] Create create-order Edge Function (anonymous, no JWT)
- [ ] Add VietQR URL generation
- [ ] Add IP-based rate limiting
- [ ] Add stock decrement logic
- [ ] Update config.toml with new functions
- [ ] Create pg_cron auto-cancel migration
- [ ] Add Telegram notification to sepay-webhook
- [ ] Create telegram-bot Edge Function
- [ ] Set Telegram secrets (BOT_TOKEN, ADMIN_CHAT_ID)
- [ ] Set Telegram webhook URL
- [ ] Test: create order anonymously
- [ ] Test: VietQR URL renders correct QR
- [ ] Test: SePay webhook auto-confirms
- [ ] Test: Telegram admin notification
- [ ] Test: auto-cancel after 5 minutes
- [ ] Test: rate limit blocks spam
- [ ] Test: Telegram bot /order lookup
- [ ] Test: stock decrements on purchase

## Success Criteria

- Anonymous order creation works without auth
- Dynamic QR code with correct amount + payment code
- SePay auto-confirms 90%+ payments
- Expired orders auto-cancelled
- Telegram bot responds to commands
- Admin gets Telegram payment alerts
- Rate limit prevents abuse
