-- RokdBot V2: RLS policies for anonymous shop + admin panel
-- Anonymous users can: view active packages, lookup orders by payment_code
-- Admin users can: full CRUD on all tables
-- Order creation handled by Edge Function (service_role_key bypasses RLS)

-- ============ HELPER FUNCTION ============

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- ============ ORDERS ============
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Public can lookup order by payment_code (for anonymous order tracking)
CREATE POLICY orders_public_select ON public.orders
  FOR SELECT USING (true);

-- Admin: full access
CREATE POLICY orders_admin_insert ON public.orders
  FOR INSERT WITH CHECK (is_admin());

CREATE POLICY orders_admin_update ON public.orders
  FOR UPDATE USING (is_admin());

CREATE POLICY orders_admin_delete ON public.orders
  FOR DELETE USING (is_admin());

-- Note: anonymous order INSERT is done via Edge Function with service_role_key (bypasses RLS)

-- ============ PAYMENTS ============
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Admin only
CREATE POLICY payments_admin ON public.payments
  FOR ALL USING (is_admin());

-- Note: payment INSERT by Edge Function uses service_role_key

-- ============ SERVICE_PACKAGES ============
ALTER TABLE public.service_packages ENABLE ROW LEVEL SECURITY;

-- Public: read active packages
CREATE POLICY packages_public_select ON public.service_packages
  FOR SELECT USING (is_active = true);

-- Admin: full access (including inactive packages)
CREATE POLICY packages_admin ON public.service_packages
  FOR ALL USING (is_admin());

-- ============ USER_ROLES ============
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Own role check (for admin login verification)
CREATE POLICY roles_own_select ON public.user_roles
  FOR SELECT USING (user_id = auth.uid());

-- Admin: full access
CREATE POLICY roles_admin ON public.user_roles
  FOR ALL USING (is_admin());

-- ============ PROFILES ============
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Admin only (no customer profiles in v2)
CREATE POLICY profiles_admin ON public.profiles
  FOR ALL USING (is_admin());

-- Own profile (for admin user)
CREATE POLICY profiles_own_select ON public.profiles
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY profiles_own_update ON public.profiles
  FOR UPDATE USING (user_id = auth.uid());
