# CLAUDE.md — rokdbot-design-review
Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

## What this project is

Single-page shop selling **Rise of Kingdoms automation bot service**. Vietnamese market, primary entry via SEO blog → 5-tier package pricing → VietQR payment → manual bot activation within 24h.

- **Production**: https://rokdbot.com
- **Admin**: https://rokdbot.com/admin
- **Discord**: discord.gg/UPuFYCw4JG · **Zalo**: zalo.me/g/rqgqyd878

## Tech stack

| Layer | Tech |
|---|---|
| Frontend | React 18 + Vite + TypeScript + Tailwind + shadcn/ui |
| Backend | Supabase (Postgres + Edge Functions + Realtime broadcast) |
| Hosting | Vercel (project name: `dist`) |
| Cron | `pg_cron` (DB-side) + GitHub Actions (Discord digest) |
| Payment | VietQR (manual flow currently) — SePay webhook pending setup |

## Quick orientation — read these first

- `docs/SEPAY_SETUP.md` — full SePay integration spec + current env state
- `docs/SEPAY_QUICK_START.md` — 15-min user-driven setup walkthrough
- `docs/PAYMENT_RECOVERY_REPORT.md` — revenue audit baseline (0 paid / 14 cancelled in 2 months)
- `docs/development-roadmap.md`, `docs/project-changelog.md` — phase/changelog state

Auto-memory: `~/.claude/projects/C--Users-admin-Desktop-web-rokdbot-design-review/memory/` — persistent context across sessions (SePay status, BIDV pivot, side bugs).

## Architecture (current)

```
Customer → /#packages → PackageCard.onBuy() → PaymentModal (5 states)
                                                  ↓
                                            create-order edge fn (BANK_BIN hardcoded)
                                                  ↓
                                            DB: orders (status='pending') + payments
                                                  ↓
                                            QR rendered (VietQR API)
                                                  ↓
                            [BROKEN PATH] sepay-webhook (waiting SEPAY_API_KEY)
                                                  ↓
                            [WORKING] customer self-report → report-payment-received → admin Discord alert
                                                  ↓
                            admin /admin → manual mark paid → send-order-notification fires
```

### Edge functions (5 active)

- `create-order` — POST entry from PaymentModal; rate-limit 5/hr per IP; HD Bank hardcoded in `BANK_BIN`/`BANK_ACCOUNT`/`BANK_ACCOUNT_NAME` (pivot to BIDV pending)
- `sepay-webhook` — receives SePay incoming-transfer payloads; validates `Apikey <key>` header against `SEPAY_API_KEY`; matches `ROK XXXXXX` regex from content → marks order paid
- `report-payment-received` — customer self-reports they paid; sets `customer_reported_paid_at`; fires admin Discord alert
- `send-order-notification` — fires Discord + email when order status flips to paid (called by sepay-webhook + admin UI)
- `send-discord-digest-now` — daily 08:00 VN pending-orders digest (GH Actions cron, bootstrap token fallback for auth)

### DB schema (key tables)

- `orders` — status enum (pending/paid/processing/running/completed/cancelled), payment_code (6-char), customer_contact{,_method}, customer_reported_paid_at, paid_at
- `payments` — links to order_id, transaction_id (filled by sepay-webhook), method, status
- `service_packages` — 5 active (Trial 150k / Cơ Bản 750k / Cao Cấp 900k / Siêu Cấp 1.2M / Premium VIP 3M)

### Triggers + cron

- BEFORE INSERT orders: `set_payment_code` (generate unique 6-char ROK code)
- BEFORE UPDATE orders: `bump_orders_updated_at_trigger` (added 2026-05-15 — admin UI cancel was leaving updated_at = created_at)
- AFTER UPDATE orders: `orders_broadcast_paid_trigger` (Realtime broadcast on status change → frontend polling fallback)
- pg_cron `cancel-expired-orders` (every 1 min): pending >20 min → cancelled

## CRITICAL gotchas — read before changing anything

### 🚨 Deploy is NOT auto

**Git push does NOT deploy to rokdbot.com.** Vercel project has `framework: null` → push triggers CANCELED deploys.

Always: `bash scripts/safe-deploy.sh`

Script handles a Vite gotcha where `vercel pull`/`vercel build` creates `.vercel/.env.production.local` with empty strings for Encrypted secrets, which Vite then prioritizes over real `.env.production` → blank page. Script removes the bad file + verifies bundle has Supabase URL baked before swinging alias.

### 🚨 SePay webhook NOT configured

`SEPAY_API_KEY` env var is missing. sepay-webhook returns 401 for every call. **The auto-verify path advertised on the site does not currently work.** Customer flow falls back to manual self-report → admin verifies via HD Bank statement → admin clicks paid in `/admin`.

### 🚨 HD Bank pivoting to BIDV

HD Bank is NOT on SePay's primary API partner list (verified at https://sepay.vn/ngan-hang.html). It only supports manual sao kê upload, not real-time webhook. Primary partners: NAPAS, VPB, TPB, ACB, ICB, MSB, KLB, OCB, MB, **BIDV**.

User has BIDV account → pivot pending. `create-order` edge function still hardcodes HD Bank until BIDV account number + holder name pasted into chat.

### 🚨 Conversion baseline = 0%

14 orders cancelled, 0 paid in 2 months (Mar–May 2026). Customers reach QR step then abandon. Trust panel + chat-first CTA shipped 2026-05-15 — measurement window opens now.

## Conventions

| Topic | Rule |
|---|---|
| Commit messages | Conventional (feat/fix/docs/chore/test/refactor). No AI references. |
| File size | Keep code files under 200 lines. Split focused components. |
| Naming | kebab-case for file names. Descriptive enough to skip opening for Grep. |
| Edits | Edit existing files, do NOT create `*-enhanced.tsx` siblings. |
| Branching | Work on `main` directly for shop iterations. Open PR for risky refactors. |
| Comments | Write WHY (constraint/invariant/workaround) not WHAT. Self-documenting code preferred. |

## Active state (snapshot 2026-05-15)

- ✅ Trust panel + honest auto-confirm copy + chat-first CTA shipped (commits 199a005, d065aee, 422334d, bbdb7a9, aa70849)
- ✅ Audit fixes: hero "Đơn hoàn thành" → "Lượt đặt đơn", FAQ 60s → 30 min, stats wall 4→5 gói, pricing 1.2M→3M
- ✅ Side bugs cleaned: pg_cron enabled + auto-cancel active, legacy `pending-orders-digest` + `send-admin-state-now` functions deleted
- ⏸ BIDV pivot blocked on user paste of BIDV account number + holder name
- ⏸ Full SePay setup (Bước 1–5 in `SEPAY_QUICK_START.md`) is multi-hour user task
- ⏸ Auto-delivery of bot service post-payment (currently admin manual within 24h)
- 🎯 Goal #5 (per docs roadmap, next month if volume increases): multi-bank support, subscriptions, customer dashboard
