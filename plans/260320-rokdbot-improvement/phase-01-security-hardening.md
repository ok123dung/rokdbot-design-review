# Phase 1: Security Hardening

## Context Links

- [Plan Overview](./plan.md)
- [Supabase Security Research](./research/researcher-02-supabase-security.md)
- [Brainstorm Report](../reports/brainstorm-rokdbot-improvement.md)

## Overview

- **Days:** 1-2
- **Priority:** CRITICAL -- must complete before any other phase
- **Status:** pending
- **Description:** Fix all security vulnerabilities: remove .env from git, add RLS to all tables, move sensitive logic server-side, audit input validation

## Key Insights

- `.env` is committed and `.gitignore` does NOT list it -- Supabase URL + anon key exposed in git history
- Zero RLS policies exist -- any authenticated user can read/write ALL rows in every table
- `generatePaymentCode()` in Order.tsx (line 37-44) runs client-side -- attackers can predict or forge codes
- Admin check in AdminDashboard.tsx (line 135-154) queries `user_roles` from client -- any user can read this table and potentially spoof admin access
- PackagesManagement.tsx (line 93-108) does unrestricted CRUD on `service_packages`
- Research recommends `SECURITY DEFINER` functions for role checks to avoid nested subqueries in RLS policies

## Requirements

### Functional
- All tables must have RLS enabled with appropriate policies
- Admin-only operations must be enforced at DB level
- Payment code generation must happen server-side only
- `.env` must be removed from git history entirely

### Non-Functional
- RLS policies must not degrade query performance (use indexed columns, security definer functions)
- Existing functionality must not break (test each role: anon, user, admin)
- Zero downtime during migration

## Architecture

### RLS Policy Design

```
is_admin() function (SECURITY DEFINER)
  └─ SELECT EXISTS(SELECT 1 FROM user_roles WHERE user_id = auth.uid() AND role = 'admin')

orders:
  SELECT: user_id = auth.uid() OR is_admin()
  INSERT: user_id = auth.uid()  (users create own orders)
  UPDATE: is_admin()            (only admin updates status)
  DELETE: is_admin()

payments:
  SELECT: EXISTS(SELECT 1 FROM orders WHERE orders.id = payments.order_id AND (orders.user_id = auth.uid() OR is_admin()))
  INSERT: EXISTS(SELECT 1 FROM orders WHERE orders.id = payments.order_id AND orders.user_id = auth.uid())
  UPDATE: is_admin()
  DELETE: is_admin()

profiles:
  SELECT: user_id = auth.uid() OR is_admin()
  INSERT: user_id = auth.uid()
  UPDATE: user_id = auth.uid() OR is_admin()
  DELETE: NONE

service_packages:
  SELECT: is_active = true (public) OR is_admin() (all)
  INSERT/UPDATE/DELETE: is_admin()

user_roles:
  SELECT: user_id = auth.uid() (own role) OR is_admin()
  INSERT/UPDATE/DELETE: is_admin()
```

### Payment Code Generation (DB Trigger)

```
ON INSERT to orders:
  1. Generate random 6-char alphanumeric code
  2. Check uniqueness against pending orders
  3. Set payment_code = generated code
  4. Client no longer sets payment_code
```

## Related Code Files

### Modify
- `.gitignore` -- add `.env`, `.env.*`
- `src/pages/Order.tsx` -- remove `generatePaymentCode()`, remove client-side payment_code from insert, read payment_code from response
- `src/pages/AdminDashboard.tsx` -- remove client-side admin check (RLS handles authorization; keep check for UI gating only, not security)
- `src/pages/Dashboard.tsx` -- admin check is fine for UI, RLS enforces data access
- `src/components/admin/PackagesManagement.tsx` -- no code changes needed if RLS is in place; operations will fail for non-admins

### Create
- `supabase/migrations/YYYYMMDD_add_rls_policies.sql` -- all RLS policies
- `supabase/migrations/YYYYMMDD_add_payment_code_trigger.sql` -- DB trigger for payment_code generation

### Delete
- None (`.env` removed from git history, not deleted from disk)

## Implementation Steps

### Step 1: Remove .env from git (Day 1, ~30 min)

1. Add `.env` and `.env.*` to `.gitignore`:
   ```
   # Environment
   .env
   .env.*
   .env.local
   .env.production
   ```

2. Remove `.env` from git tracking:
   ```bash
   git rm --cached .env
   git commit -m "chore: remove .env from tracking"
   ```

3. Remove `.env` from entire git history using BFG or git filter-repo:
   ```bash
   # Option A: BFG (simpler)
   bfg --delete-files .env
   git reflog expire --expire=now --all && git gc --prune=now --aggressive

   # Option B: git filter-repo
   git filter-repo --path .env --invert-paths
   ```

4. Force push to remote (coordinate with team):
   ```bash
   git push --force-with-lease
   ```

5. **Immediately rotate Supabase anon key** in Supabase Dashboard > Settings > API

6. Update local `.env` with new key

### Step 2: Create is_admin() function (Day 1, ~15 min)

Create migration file `supabase/migrations/YYYYMMDD_add_rls_policies.sql`:

```sql
-- Reusable admin check function
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Performance index
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id_role
  ON public.user_roles(user_id, role);

CREATE INDEX IF NOT EXISTS idx_orders_user_id
  ON public.orders(user_id);

CREATE INDEX IF NOT EXISTS idx_orders_payment_code
  ON public.orders(payment_code);

CREATE INDEX IF NOT EXISTS idx_payments_order_id
  ON public.payments(order_id);

CREATE INDEX IF NOT EXISTS idx_profiles_user_id
  ON public.profiles(user_id);
```

### Step 3: Enable RLS and create policies (Day 1, ~1 hr)

Continue in same migration file:

```sql
-- ============ ORDERS ============
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY orders_select ON public.orders
  FOR SELECT USING (user_id = auth.uid() OR is_admin());

CREATE POLICY orders_insert ON public.orders
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY orders_update ON public.orders
  FOR UPDATE USING (is_admin());

CREATE POLICY orders_delete ON public.orders
  FOR DELETE USING (is_admin());

-- ============ PAYMENTS ============
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY payments_select ON public.payments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE orders.id = payments.order_id
      AND (orders.user_id = auth.uid() OR is_admin())
    )
  );

CREATE POLICY payments_insert ON public.payments
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.orders
      WHERE orders.id = payments.order_id
      AND orders.user_id = auth.uid()
    )
  );

CREATE POLICY payments_update ON public.payments
  FOR UPDATE USING (is_admin());

CREATE POLICY payments_delete ON public.payments
  FOR DELETE USING (is_admin());

-- ============ PROFILES ============
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY profiles_select ON public.profiles
  FOR SELECT USING (user_id = auth.uid() OR is_admin());

CREATE POLICY profiles_insert ON public.profiles
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY profiles_update ON public.profiles
  FOR UPDATE USING (user_id = auth.uid() OR is_admin());

-- No delete policy -- profiles should not be deleted

-- ============ SERVICE_PACKAGES ============
ALTER TABLE public.service_packages ENABLE ROW LEVEL SECURITY;

CREATE POLICY packages_select ON public.service_packages
  FOR SELECT USING (is_active = true OR is_admin());

CREATE POLICY packages_insert ON public.service_packages
  FOR INSERT WITH CHECK (is_admin());

CREATE POLICY packages_update ON public.service_packages
  FOR UPDATE USING (is_admin());

CREATE POLICY packages_delete ON public.service_packages
  FOR DELETE USING (is_admin());

-- ============ USER_ROLES ============
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY roles_select ON public.user_roles
  FOR SELECT USING (user_id = auth.uid() OR is_admin());

CREATE POLICY roles_insert ON public.user_roles
  FOR INSERT WITH CHECK (is_admin());

CREATE POLICY roles_update ON public.user_roles
  FOR UPDATE USING (is_admin());

CREATE POLICY roles_delete ON public.user_roles
  FOR DELETE USING (is_admin());
```

### Step 4: Create payment_code DB trigger (Day 1, ~30 min)

Create migration file `supabase/migrations/YYYYMMDD_add_payment_code_trigger.sql`:

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
      SELECT 1 FROM public.orders
      WHERE payment_code = code AND status = 'pending'
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

### Step 5: Update Order.tsx (Day 2, ~30 min)

In `src/pages/Order.tsx`:

1. **Remove** the `generatePaymentCode` function (lines 37-44)
2. **Remove** `const newPaymentCode = generatePaymentCode();` from `handleSubmit` (line 188)
3. **Remove** `setPaymentCode(newPaymentCode);` (line 189)
4. **Remove** `payment_code: newPaymentCode` from the insert object (line 203)
5. **Read** payment_code from the insert response: `setPaymentCode(order.payment_code);`

The trigger will auto-generate payment_code on INSERT.

### Step 6: Input validation audit (Day 2, ~1 hr)

1. Order.tsx already has Zod validation for game info fields with maxLength constraints -- verify these are sufficient
2. Audit `notes` field -- add sanitization to prevent stored XSS:
   - Strip HTML tags before storing
   - Or use DOMPurify on display
3. Audit AdminDashboard.tsx search field -- ensure no injection possible (Supabase parameterizes queries, so SQL injection is not a risk; focus on XSS in display)
4. Audit PackagesManagement.tsx form inputs -- add server-side validation in RLS or check constraint

### Step 7: Test all RLS policies (Day 2, ~1 hr)

Test matrix (use Supabase SQL editor or test client):

| Table | Anon | User (own) | User (other) | Admin |
|-------|------|-----------|-------------|-------|
| orders SELECT | DENY | own only | DENY | ALL |
| orders INSERT | DENY | own only | DENY | ALL |
| orders UPDATE | DENY | DENY | DENY | ALL |
| payments SELECT | DENY | via order | DENY | ALL |
| profiles SELECT | DENY | own only | DENY | ALL |
| profiles UPDATE | DENY | own only | DENY | ALL |
| service_packages SELECT | active only | active only | active only | ALL |
| service_packages INSERT | DENY | DENY | DENY | ALL |
| user_roles SELECT | DENY | own only | DENY | ALL |
| user_roles INSERT | DENY | DENY | DENY | ALL |

## Todo List

- [ ] Add .env to .gitignore
- [ ] Remove .env from git tracking
- [ ] Remove .env from git history (BFG or filter-repo)
- [ ] Rotate Supabase anon key in dashboard
- [ ] Update local .env with new key
- [ ] Create is_admin() SECURITY DEFINER function
- [ ] Add performance indexes (user_id, payment_code, order_id)
- [ ] Enable RLS on orders table + 4 policies
- [ ] Enable RLS on payments table + 4 policies
- [ ] Enable RLS on profiles table + 3 policies
- [ ] Enable RLS on service_packages table + 4 policies
- [ ] Enable RLS on user_roles table + 4 policies
- [ ] Create payment_code DB trigger
- [ ] Remove generatePaymentCode from Order.tsx
- [ ] Update handleSubmit to read payment_code from response
- [ ] Audit input validation (notes, game fields, admin search)
- [ ] Test RLS with anon role
- [ ] Test RLS with regular user role
- [ ] Test RLS with admin role
- [ ] Verify Edge Functions still work (they use service_role_key, bypasses RLS)

## Success Criteria

- `.env` not in git history or tracking
- Supabase keys rotated
- All 5 tables have RLS enabled with appropriate policies
- Non-admin users cannot read other users' orders/profiles
- Non-admin users cannot modify service_packages or user_roles
- Payment code is generated server-side only
- All existing functionality works as before (no regressions)

## Risk Assessment

| Risk | Severity | Mitigation |
|------|----------|------------|
| RLS too restrictive breaks existing features | HIGH | Test each policy with real user scenarios before deploying |
| Edge Functions use service_role_key | LOW | service_role_key bypasses RLS -- existing functions unaffected |
| Force push breaks team members' local repos | MEDIUM | Coordinate timing, have everyone re-clone |
| Missing index causes slow RLS queries | MEDIUM | Add indexes in same migration, monitor query performance |

## Security Considerations

- **Credential rotation**: Must rotate anon key BEFORE deploying frontend with new key
- **Service role key**: Only used in Edge Functions (server-side) -- never exposed to client
- **RLS bypass**: Supabase client SDK always respects RLS. Direct DB connections with service_role do not.
- **Payment code predictability**: Moving to DB trigger with `random()` is cryptographically weaker than `crypto.getRandomValues()` but sufficient for 6-char codes with uniqueness check

## Next Steps

- After RLS is deployed, proceed to [Phase 2: Auto Payment](./phase-02-auto-payment-sepay.md)
- Phase 2 depends on payment_code trigger being in place
- Phase 2's `create-order` Edge Function will replace client-side order creation entirely
