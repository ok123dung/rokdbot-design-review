-- ============================================================================
-- Recovery SQL: 14 pending orders stuck since SePay webhook never fired
-- Generated 2026-05-14
-- ============================================================================
--
-- HOW TO USE:
--   1. Get HD Bank 0915966853 statement for March-May 2026 from Internet Banking
--   2. For each ROK XXXXXX code below, check if statement has matching
--      incoming transfer with that exact content + matching amount
--   3. Uncomment the UPDATE for each MATCHED transaction below
--   4. Run via: Supabase SQL Editor OR psql with service_role connection
--   5. For UNMATCHED orders older than 7 days, uncomment the bulk cancel
--
-- DO NOT run this script blindly. Each UPDATE must be verified against
-- real bank statement first.
-- ============================================================================

-- ─── REFERENCE: Current pending orders ──────────────────────────────────────
-- Run this first to see current state:

SELECT
  o.payment_code,
  sp.name AS package,
  o.total_amount::int AS amount_vnd,
  o.created_at::date AS order_date,
  o.customer_contact,
  CASE WHEN o.customer_reported_paid_at IS NOT NULL THEN 'YES' ELSE '' END AS customer_reported
FROM orders o
JOIN service_packages sp ON sp.id = o.package_id
WHERE o.status = 'pending'
ORDER BY o.total_amount DESC, o.created_at DESC;

-- ─── BULK RECOVER: Mark verified orders as paid ─────────────────────────────
-- Uncomment for each order that has matching bank transaction.
-- Replace 'FT...' with actual reference code from HD Bank statement.

/*
-- Template: each MATCHED order
UPDATE orders SET
  status = 'paid',
  paid_at = '2026-05-09 10:30:00+07',  -- actual transfer timestamp from statement
  notes = COALESCE(notes, '') || E'\nManual recovery 2026-05-14: matched bank statement'
WHERE payment_code = 'PQUGGP' AND status = 'pending';

UPDATE payments SET
  status = 'verified',
  transaction_id = 'FT12345678',  -- bank reference code
  verified_at = '2026-05-09 10:30:00+07'
WHERE order_id IN (SELECT id FROM orders WHERE payment_code = 'PQUGGP');
*/

-- ─── BATCH TEMPLATE (copy + modify for each matched order) ─────────────────
-- The 14 currently pending codes (as of 2026-05-14):
--
--   PQUGGP - 900,000đ - Cao Cấp - 2026-05-14
--   MRBAU2 - 3,000,000đ - Premium VIP - 2026-05-12
--   4GHSQD - 900,000đ - Cao Cấp - 2026-05-10
--   KBWPEX - 3,000,000đ - Premium VIP - 2026-05-09
--   GG72AL - 1,200,000đ - Siêu Cấp - 2026-05-09
--   LWYXDA - 900,000đ - Cao Cấp - 2026-05-09
--   AUHX9A - 150,000đ - Dùng Thử - 2026-04-28
--   ESXMBH - 900,000đ - Cao Cấp - 2026-04-18
--   9MLMU7 - 1,200,000đ - Siêu Cấp - 2026-04-18
--   2B4EHL - 900,000đ - Cao Cấp - 2026-04-18
--   EW9PTW - 750,000đ - Cơ Bản - 2026-04-11
--   2SPX27 - 150,000đ - Dùng Thử - 2026-03-24
--   6KGGTW - 750,000đ - Cơ Bản - 2026-03-20
--   CY7LQL - 150,000đ - Dùng Thử - 2026-03-20

-- ─── CANCEL ABANDONED ORDERS ────────────────────────────────────────────────
-- After verifying which orders did NOT pay (no matching bank transaction),
-- cancel them to clean up DB state. Old orders (>30 days) without
-- customer_reported_paid_at are almost certainly abandoned.

/*
UPDATE orders SET
  status = 'cancelled',
  notes = COALESCE(notes, '') || E'\nCancelled 2026-05-14: no matching bank transaction found, abandoned'
WHERE status = 'pending'
  AND created_at < NOW() - INTERVAL '30 days'
  AND customer_reported_paid_at IS NULL;
*/

-- ─── VERIFICATION AFTER RECOVERY ────────────────────────────────────────────
-- Run this after applying updates to confirm state:

/*
SELECT
  status,
  COUNT(*) AS count,
  SUM(total_amount)::int AS total_vnd
FROM orders
GROUP BY status
ORDER BY status;
*/
