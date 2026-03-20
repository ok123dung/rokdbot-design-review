---
title: "Phase 1: Security + DB Migration"
status: pending
priority: CRITICAL
days: 1-2
---

# Phase 1: Security + DB Migration

## Overview

Fix security gaps and restructure DB for anonymous purchasing model. Must complete before any other phase.

## Context Links

- [Plan Overview](./plan.md)
- [Brainstorm Report](../reports/brainstorm-rokdbot-v2-redesign.md)
- [Original Security Research](../260320-rokdbot-improvement/research/researcher-02-supabase-security.md)

## Requirements

### Functional
- All tables have RLS enabled
- Orders work without customer auth (user_id nullable)
- Game info columns removed from orders
- Payment code generated server-side (DB trigger)
- Stock tracking on service_packages
- .env removed from git tracking

### Non-Functional
- RLS must not degrade query performance
- Zero downtime during migration
- Existing orders preserved (data migration safe)

## DB Schema Changes

### orders table
```sql
-- Make anonymous-friendly
ALTER TABLE public.orders ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE public.orders ALTER COLUMN user_id SET DEFAULT NULL;

-- Remove game info (customer provides via Discord/Zalo after payment)
ALTER TABLE public.orders DROP COLUMN IF EXISTS game_account_id;
ALTER TABLE public.orders DROP COLUMN IF EXISTS game_server;
ALTER TABLE public.orders DROP COLUMN IF EXISTS game_kingdom;
```

### service_packages table
```sql
-- Add stock tracking
ALTER TABLE public.service_packages
  ADD COLUMN IF NOT EXISTS stock INTEGER DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS sold_count INTEGER DEFAULT 0;
```

### is_admin() function
```sql
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE;
```

### RLS Policies (Anonymous-Friendly)
```sql
-- ORDERS: anonymous can read own order by payment_code
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Public: lookup by payment_code (for order-lookup page)
CREATE POLICY orders_public_lookup ON public.orders
  FOR SELECT USING (true);
  -- Note: create-order Edge Function uses service_role_key (bypasses RLS)
  -- Public SELECT is safe: only exposes order status, not sensitive data
  -- Alternatively restrict: payment_code = current_setting('request.headers')::json->>'x-payment-code'

-- Admin: full access
CREATE POLICY orders_admin ON public.orders
  FOR ALL USING (is_admin());

-- Insert: only via Edge Function (service_role_key bypasses RLS)
-- No anon insert policy needed

-- PAYMENTS
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY payments_admin ON public.payments FOR ALL USING (is_admin());

-- SERVICE_PACKAGES: public read active, admin full
ALTER TABLE public.service_packages ENABLE ROW LEVEL SECURITY;
CREATE POLICY packages_public ON public.service_packages
  FOR SELECT USING (is_active = true);
CREATE POLICY packages_admin ON public.service_packages
  FOR ALL USING (is_admin());

-- USER_ROLES: admin only
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY roles_select ON public.user_roles
  FOR SELECT USING (user_id = auth.uid() OR is_admin());
CREATE POLICY roles_admin ON public.user_roles
  FOR ALL USING (is_admin());

-- PROFILES: admin only (no customer profiles in v2)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY profiles_admin ON public.profiles
  FOR ALL USING (is_admin());
```

### Payment Code DB Trigger
```sql
CREATE OR REPLACE FUNCTION generate_payment_code()
RETURNS TRIGGER AS $$
DECLARE
  chars TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  code TEXT := '';
  i INTEGER;
  attempts INTEGER := 0;
  code_exists BOOLEAN;
BEGIN
  LOOP
    code := '';
    FOR i IN 1..6 LOOP
      code := code || substr(chars, floor(random() * length(chars) + 1)::int, 1);
    END LOOP;
    SELECT EXISTS(
      SELECT 1 FROM public.orders WHERE payment_code = code AND status = 'pending'
    ) INTO code_exists;
    EXIT WHEN NOT code_exists OR attempts > 10;
    attempts := attempts + 1;
  END LOOP;
  NEW.payment_code := code;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_payment_code
  BEFORE INSERT ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION generate_payment_code();
```

### Performance Indexes
```sql
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id_role ON public.user_roles(user_id, role);
CREATE INDEX IF NOT EXISTS idx_orders_payment_code ON public.orders(payment_code);
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON public.payments(order_id);
```

## Related Code Files

### Modify
- `.gitignore` — add .env, .env.*

### Create
- `supabase/migrations/YYYYMMDD_v2_schema_changes.sql` — all schema changes
- `supabase/migrations/YYYYMMDD_v2_rls_policies.sql` — all RLS policies
- `supabase/migrations/YYYYMMDD_v2_payment_code_trigger.sql` — payment code trigger

### No Code Changes Yet
- Frontend changes deferred to Phase 3 (all at once)

## Implementation Steps

### Step 1: .gitignore (.env)
1. Add `.env`, `.env.*`, `.env.local` to `.gitignore`
2. `git rm --cached .env`
3. Commit

### Step 2: DB Schema Migration
1. Create migration: drop game columns, nullable user_id, stock columns
2. Apply via Supabase CLI or Dashboard SQL Editor

### Step 3: is_admin() + Indexes
1. Create SECURITY DEFINER function
2. Add performance indexes

### Step 4: RLS Policies
1. Enable RLS on all 5 tables
2. Create policies per table
3. Test with anon, user, admin roles

### Step 5: Payment Code Trigger
1. Create trigger function
2. Test: INSERT into orders -> payment_code auto-generated

## Todo List

- [ ] Add .env to .gitignore
- [ ] Remove .env from git tracking
- [ ] Create schema migration (drop game columns, nullable user_id, stock)
- [ ] Create is_admin() function
- [ ] Add performance indexes
- [ ] Enable RLS on orders + policy
- [ ] Enable RLS on payments + policy
- [ ] Enable RLS on service_packages + policies
- [ ] Enable RLS on user_roles + policies
- [ ] Enable RLS on profiles + policy
- [ ] Create payment_code trigger
- [ ] Test: anon can lookup order by payment_code
- [ ] Test: anon cannot insert/update/delete orders
- [ ] Test: admin has full access to all tables
- [ ] Test: payment_code auto-generated on INSERT
- [ ] Test: Edge Functions still work (service_role_key bypasses RLS)

## Success Criteria

- All 5 tables have RLS enabled
- Anonymous order lookup works by payment_code
- Payment code generated server-side only
- .env not in git tracking
- No existing data lost
- Edge Functions (sepay-webhook, send-order-notification) still work

## Risk Assessment

| Risk | Severity | Mitigation |
|------|----------|------------|
| RLS blocks Edge Functions | LOW | service_role_key bypasses RLS |
| Dropping game columns loses data | MEDIUM | Existing orders keep data until DROP; backup first |
| Public SELECT on orders exposes data | LOW | Orders only contain: status, amount, payment_code, timestamps |
