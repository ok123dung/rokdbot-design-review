-- RokdBot V2: Schema changes for anonymous purchasing model
-- Drop game info columns (customer provides via Discord/Zalo after payment)
-- Make user_id nullable (anonymous orders)
-- Add stock tracking to service_packages

-- ============ ORDERS: Remove game info, make anonymous-friendly ============

-- Make user_id optional (anonymous purchases)
ALTER TABLE public.orders ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE public.orders ALTER COLUMN user_id SET DEFAULT NULL;

-- Drop game info columns (no longer needed at checkout)
ALTER TABLE public.orders DROP COLUMN IF EXISTS game_account_id;
ALTER TABLE public.orders DROP COLUMN IF EXISTS game_server;
ALTER TABLE public.orders DROP COLUMN IF EXISTS game_kingdom;

-- ============ SERVICE_PACKAGES: Add stock tracking ============

ALTER TABLE public.service_packages
  ADD COLUMN IF NOT EXISTS stock INTEGER DEFAULT NULL,       -- NULL = unlimited
  ADD COLUMN IF NOT EXISTS sold_count INTEGER DEFAULT 0;

-- ============ PERFORMANCE INDEXES ============

CREATE INDEX IF NOT EXISTS idx_orders_payment_code ON public.orders(payment_code);
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON public.payments(order_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id_role ON public.user_roles(user_id, role);
CREATE INDEX IF NOT EXISTS idx_service_packages_active ON public.service_packages(is_active) WHERE is_active = true;
