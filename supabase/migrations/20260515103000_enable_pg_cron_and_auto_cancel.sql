-- Enable pg_cron + auto-cancel pending orders > 20 minutes.
--
-- Supersedes 20260320120003_v2_auto_cancel_cron.sql which silently failed
-- because pg_cron extension was never enabled on this project. Audit
-- 2026-05-15 found pg_cron missing despite the original migration claiming
-- to create the schedule.
--
-- Interval changed 5 min → 20 min: frontend PaymentModal has 15-min
-- countdown (COUNTDOWN_SECONDS = 900). 5-min auto-cancel would race with
-- legitimate customer transfers (older bank apps + interbank routing can
-- take 5-10 min). 20 min = 15-min UI window + 5-min buffer.

CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA pg_catalog;

CREATE OR REPLACE FUNCTION public.cancel_expired_orders()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE public.orders
  SET status = 'cancelled'
  WHERE status = 'pending'
  AND created_at < NOW() - INTERVAL '20 minutes';
END;
$$;

-- Unschedule any existing job with same name (idempotent re-runs)
DO $$
BEGIN
  PERFORM cron.unschedule('cancel-expired-orders');
EXCEPTION WHEN OTHERS THEN
  NULL;
END $$;

SELECT cron.schedule(
  'cancel-expired-orders',
  '*/1 * * * *',
  $$SELECT public.cancel_expired_orders();$$
);
