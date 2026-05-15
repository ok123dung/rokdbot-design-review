-- Fix: orders.updated_at not auto-bumped on UPDATE.
-- Symptom found 2026-05-15: 14 cancelled orders all had updated_at = created_at
-- exactly, because admin manual cancel via /admin UI did not set updated_at.
-- This breaks analytics (can't tell when admin cancelled vs created).

CREATE OR REPLACE FUNCTION public.bump_orders_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at := NOW();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS bump_orders_updated_at_trigger ON public.orders;

CREATE TRIGGER bump_orders_updated_at_trigger
BEFORE UPDATE ON public.orders
FOR EACH ROW
EXECUTE FUNCTION public.bump_orders_updated_at();
