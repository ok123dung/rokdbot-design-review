-- RokdBot V2: Auto-cancel pending orders after 5 minutes
-- Requires Supabase Pro plan for pg_cron

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

SELECT cron.schedule(
  'cancel-expired-orders',
  '*/1 * * * *',
  $$SELECT cancel_expired_orders();$$
);
