-- Conversion funnel measurement. Tracks the two stages we don't already
-- have rows for: modal opens (intent) and contact submissions (commit
-- to QR step). Order created / customer_reported_paid_at / paid_at are
-- already on the orders table, so the full funnel is the join of these
-- two stages with orders.

CREATE TABLE public.funnel_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL CHECK (event_type IN ('modal_opened', 'contact_submitted')),
  session_id text NOT NULL,
  package_id uuid REFERENCES public.service_packages(id) ON DELETE SET NULL,
  order_id uuid REFERENCES public.orders(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_funnel_events_event_type_created_at
  ON public.funnel_events(event_type, created_at DESC);

CREATE INDEX idx_funnel_events_session
  ON public.funnel_events(session_id, created_at DESC);

-- No public RLS policies — only service_role (edge fn) inserts.
ALTER TABLE public.funnel_events ENABLE ROW LEVEL SECURITY;
