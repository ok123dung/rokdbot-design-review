-- =============================================
-- RokdBot V2: Run all migrations in one go
-- Paste this entire script into Supabase SQL Editor
-- =============================================

-- ============ 1. SCHEMA CHANGES ============

-- Make user_id optional (anonymous purchases)
ALTER TABLE public.orders ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE public.orders ALTER COLUMN user_id SET DEFAULT NULL;

-- Drop game info columns (customer provides via Discord/Zalo after payment)
ALTER TABLE public.orders DROP COLUMN IF EXISTS game_account_id;
ALTER TABLE public.orders DROP COLUMN IF EXISTS game_server;
ALTER TABLE public.orders DROP COLUMN IF EXISTS game_kingdom;

-- Add stock tracking to service_packages
ALTER TABLE public.service_packages
  ADD COLUMN IF NOT EXISTS stock INTEGER DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS sold_count INTEGER DEFAULT 0;

-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_orders_payment_code ON public.orders(payment_code);
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON public.payments(order_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id_role ON public.user_roles(user_id, role);
CREATE INDEX IF NOT EXISTS idx_service_packages_active ON public.service_packages(is_active) WHERE is_active = true;


-- ============ 2. HELPER FUNCTION ============

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE;


-- ============ 3. RLS POLICIES ============

-- ORDERS
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any (safe to ignore errors)
DROP POLICY IF EXISTS orders_public_select ON public.orders;
DROP POLICY IF EXISTS orders_admin_insert ON public.orders;
DROP POLICY IF EXISTS orders_admin_update ON public.orders;
DROP POLICY IF EXISTS orders_admin_delete ON public.orders;

CREATE POLICY orders_public_select ON public.orders
  FOR SELECT USING (true);
CREATE POLICY orders_admin_insert ON public.orders
  FOR INSERT WITH CHECK (is_admin());
CREATE POLICY orders_admin_update ON public.orders
  FOR UPDATE USING (is_admin());
CREATE POLICY orders_admin_delete ON public.orders
  FOR DELETE USING (is_admin());

-- PAYMENTS
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS payments_admin ON public.payments;
CREATE POLICY payments_admin ON public.payments
  FOR ALL USING (is_admin());

-- SERVICE_PACKAGES
ALTER TABLE public.service_packages ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS packages_public_select ON public.service_packages;
DROP POLICY IF EXISTS packages_admin ON public.service_packages;
CREATE POLICY packages_public_select ON public.service_packages
  FOR SELECT USING (is_active = true);
CREATE POLICY packages_admin ON public.service_packages
  FOR ALL USING (is_admin());

-- USER_ROLES
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS roles_own_select ON public.user_roles;
DROP POLICY IF EXISTS roles_admin ON public.user_roles;
CREATE POLICY roles_own_select ON public.user_roles
  FOR SELECT USING (user_id = auth.uid());
CREATE POLICY roles_admin ON public.user_roles
  FOR ALL USING (is_admin());

-- PROFILES
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS profiles_admin ON public.profiles;
DROP POLICY IF EXISTS profiles_own_select ON public.profiles;
DROP POLICY IF EXISTS profiles_own_update ON public.profiles;
CREATE POLICY profiles_admin ON public.profiles
  FOR ALL USING (is_admin());
CREATE POLICY profiles_own_select ON public.profiles
  FOR SELECT USING (user_id = auth.uid());
CREATE POLICY profiles_own_update ON public.profiles
  FOR UPDATE USING (user_id = auth.uid());


-- ============ 4. PAYMENT CODE TRIGGER ============

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

DROP TRIGGER IF EXISTS set_payment_code ON public.orders;
CREATE TRIGGER set_payment_code
  BEFORE INSERT ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION generate_payment_code();


-- ============ 5. AUTO-CANCEL CRON ============
-- NOTE: pg_cron requires Supabase Pro plan
-- If on free plan, skip this section

-- Uncomment below if on Pro plan:
-- CREATE EXTENSION IF NOT EXISTS pg_cron;
--
-- CREATE OR REPLACE FUNCTION cancel_expired_orders()
-- RETURNS void AS $$
-- BEGIN
--   UPDATE public.orders
--   SET status = 'cancelled', updated_at = NOW()
--   WHERE status = 'pending'
--   AND created_at < NOW() - INTERVAL '5 minutes';
-- END;
-- $$ LANGUAGE plpgsql SECURITY DEFINER;
--
-- SELECT cron.schedule(
--   'cancel-expired-orders',
--   '*/1 * * * *',
--   $$SELECT cancel_expired_orders();$$
-- );


-- ============ DONE ============
-- Verify: SELECT * FROM pg_policies WHERE tablename IN ('orders','payments','service_packages','user_roles','profiles');
