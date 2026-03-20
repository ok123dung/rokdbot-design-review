# Brainstorm Report: RokdBot V2 — Full Redesign

**Date:** 2026-03-20
**Status:** Agreed — Ready for implementation plan

---

## Problem Statement

RokdBot v1 (React + Supabase, Lovable-generated) has fundamental UX friction:
- Forced customer registration/login for a simple bot farm purchase
- 4-step order flow requiring game info upfront
- Generic Lovable UI — doesn't match competitor quality
- Manual payment verification bottleneck
- Security gaps (no RLS, client-side payment codes, .env exposed)

**Competitor benchmark:** sumistore.me — anonymous 1-click shop, 29,792 orders, auto-payment via VietQR/SePay, Telegram bot, dark aurora theme. Proves the model works at scale.

**Decision:** Scrap the multi-page auth-heavy approach. Rebuild as anonymous one-page shop with sumistore.me aesthetics.

---

## What Changes (v1 vs v2)

| Aspect | v1 (Current) | v2 (Target) |
|---|---|---|
| Customer auth | Email/password registration required | None — anonymous purchasing |
| Order flow | 4 steps: auth -> dashboard -> order -> payment | 2 steps: select package -> QR payment modal |
| Game info | Required before purchase | Not needed — customer contacts Discord after |
| Payment | Static QR, manual admin verify | Dynamic VietQR + SePay auto-verify |
| Delivery | Show in dashboard (auth required) | Order code displayed on screen + Discord contact |
| UI theme | Generic Lovable light/dark | sumistore.me-style dark aurora |
| Site structure | Multi-page SPA (landing/auth/dashboard/order/admin) | One-page shop + admin panel |
| Admin panel | Functional but generic | Redesigned dark theme, matching aesthetic |
| Order tracking | Customer dashboard (auth) | Order lookup by code (anonymous) + Telegram bot |

## Pages to DELETE

- `/auth` — no customer registration/login
- `/dashboard` — no customer dashboard
- `/order` — replaced by inline payment modal
- `/orders` — replaced by order lookup
- `/orders/:id` — replaced by order lookup
- `/profile` — no user profiles for customers
- `/forgot-password` — no customer auth
- `/reset-password` — no customer auth

**Files to delete:**
- `src/pages/Auth.tsx`
- `src/pages/Dashboard.tsx`
- `src/pages/Order.tsx`
- `src/pages/Orders.tsx`
- `src/pages/OrderDetail.tsx`
- `src/pages/Profile.tsx`
- `src/pages/ForgotPassword.tsx`
- `src/pages/ResetPassword.tsx`
- `src/contexts/AuthContext.tsx` (customer auth context)
- `src/components/skeletons/DashboardSkeleton.tsx`
- `src/components/skeletons/OrdersSkeleton.tsx`
- `src/components/skeletons/ProfileSkeleton.tsx`

## Pages to KEEP (modified)

- `/` — landing page = shop (full rewrite to sumistore.me style)
- `/admin` — admin dashboard (full redesign)
- `/login` — admin-only login
- `/order-lookup` — anonymous order tracking by code (NEW)
- `/disclaimer`, `/privacy`, `/terms` — keep as-is

---

## New Architecture

### Customer Flow (Anonymous)

```
Homepage (one-page shop)
  |
  v
Package cards displayed with prices, stock counts, "Buy" buttons
  |
  v
Click "Buy" -> Payment modal overlay opens
  |
  v
Modal shows:
  - Dynamic VietQR code (amount + payment code embedded)
  - Amount to pay
  - Transfer content: "ROK {6-char code}" with copy button
  - Bank info (HD Bank / MoMo)
  - 5-minute countdown timer
  - "Waiting for payment..." spinner
  |
  v
Customer scans QR -> transfers via bank app
  |
  v
SePay webhook detects transfer -> auto-confirms order
  |
  v
Modal updates: "Payment confirmed!"
  - Shows order code prominently
  - "Contact us on Discord or Zalo with this code to start your bot"
  - Discord invite link button
  - Zalo group link button
  - Copy order code button
  |
  v
Customer contacts via Discord or Zalo -> sends order code -> admin starts bot
```

### Order Lookup (Anonymous)

```
/order-lookup page (or modal on homepage)
  |
  v
Enter payment code (ROK XXXXXX)
  |
  v
Shows: order status, package name, amount, date
No auth required — code is the auth token
```

### Admin Flow

```
/login -> admin username/password (Supabase Auth, admin role only)
  |
  v
/admin -> redesigned dashboard
  - Order management (list, filter, status update)
  - Package management (CRUD)
  - Payment analytics chart
  - Telegram notifications on new orders/payments
  - CSV export
  - Discount codes (optional Phase 2)
```

### Database Changes

**Tables to KEEP (modified):**
- `orders` — remove user_id requirement (nullable), remove game_* fields, add `buyer_contact` (optional)
- `payments` — keep as-is
- `service_packages` — keep as-is
- `user_roles` — keep for admin auth only

**Tables to DROP or IGNORE:**
- `profiles` — no customer profiles needed (keep table for admin profile, but no customer data)

**Schema changes:**
```sql
-- Make orders work without auth
ALTER TABLE public.orders ALTER COLUMN user_id DROP NOT NULL;
ALTER TABLE public.orders DROP COLUMN IF EXISTS game_account_id;
ALTER TABLE public.orders DROP COLUMN IF EXISTS game_server;
ALTER TABLE public.orders DROP COLUMN IF EXISTS game_kingdom;

-- Add stock tracking to packages
ALTER TABLE public.service_packages
  ADD COLUMN IF NOT EXISTS stock INTEGER DEFAULT NULL,  -- NULL = unlimited
  ADD COLUMN IF NOT EXISTS sold_count INTEGER DEFAULT 0;
```

**RLS changes:**
- `orders` SELECT: public can read own order by payment_code (no auth needed)
- `orders` INSERT: allow anon inserts (from Edge Function only, via service_role_key)
- All other admin-only policies remain

### Edge Functions

**Keep:**
- `sepay-webhook/index.ts` — already built, works perfectly
- `send-order-notification/index.ts` — keep for Discord/email notifications

**Modify:**
- `create-order/index.ts` — remove JWT requirement, remove game info fields, simplify to: package_id only

**New:**
- `telegram-bot/index.ts` — order lookup + admin notifications
- `order-lookup/index.ts` — public order status by payment code (or just client-side Supabase query with RLS)

---

## Tech Stack (Unchanged)

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS + shadcn/ui (re-themed to dark aurora) |
| Backend | Supabase Edge Functions (Deno) |
| Database | Supabase PostgreSQL |
| Auth | Supabase Auth (admin only) |
| Payment | SePay webhook + VietQR dynamic QR |
| Realtime | Supabase Realtime (payment confirmation) |
| i18n | i18next (vi primary, en/ko/zh secondary) |
| Hosting | Lovable |

---

## Revised Phase Plan

### Phase 1: Security + DB Migration (Day 1-2) — CRITICAL

Same as original Phase 1, with modifications:
1. Add .env to .gitignore (keys already rotated)
2. Enable RLS on all tables with new anonymous-friendly policies
3. Payment code DB trigger (server-side generation)
4. Simplify orders table (drop game_* columns, make user_id nullable)
5. Add stock/sold_count to service_packages

### Phase 2: Backend — SePay + Edge Functions (Day 3-5) — HIGH

1. Simplify `create-order` Edge Function (no JWT, no game info, just package_id)
2. Deploy sepay-webhook (already built)
3. Add pg_cron auto-cancel for expired orders
4. Create order-lookup endpoint or RLS policy
5. Test full payment flow end-to-end
6. Add Telegram bot (order lookup + admin notifications)

### Phase 3: Frontend — Full Redesign (Day 6-12) — HIGH

1. Delete all customer auth pages and components
2. Rewrite landing page as one-page shop (sumistore.me style):
   - Dark aurora theme (CSS custom properties, gradient backgrounds)
   - Package cards grid with prices, stock badges, "Buy" buttons
   - Category navigation (if multiple package types)
   - Stats banner (total orders served, etc.)
   - Payment modal overlay (QR + countdown + realtime confirmation)
   - Order confirmation with Discord contact CTA
   - Order lookup section/modal
   - Footer with Discord/Zalo/Telegram links
3. Redesign admin panel:
   - Dark theme matching shop aesthetic
   - Sidebar navigation
   - Orders table with filters, search, pagination
   - Package CRUD management
   - Payment analytics chart
   - CSV export
4. Admin login page (simple, dark themed)
5. Mobile responsive audit

### Phase 4: Polish + Features (Day 13-14) — LOW

1. Discount codes system
2. Flash sale badges on packages
3. SEO optimization
4. Performance audit (QueryClient config, lazy loading)
5. Error boundaries

---

## Risk Assessment

| Risk | Severity | Mitigation |
|---|---|---|
| Anonymous orders = spam/abuse | HIGH | Rate limit by IP in Edge Function + CAPTCHA on buy button |
| Order code as sole "auth" — brute-forceable | MEDIUM | 6-char alphanumeric = 1.07B combinations, sufficient; add rate limit on lookup |
| Lovable AI editor conflicts with manual changes | MEDIUM | Don't use Lovable AI editor after manual code changes begin |
| Full redesign takes longer than 14 days | MEDIUM | Phase 3 is the biggest risk; prioritize payment modal over admin redesign |
| SePay webhook delay/miss | LOW | Admin manual verify fallback stays; admin gets Telegram notification |
| Removing auth breaks existing customer orders | LOW | Existing orders stay in DB; just won't be accessible via old dashboard |

## Success Metrics

- **Payment:** 90%+ orders auto-verified within 60 seconds
- **Conversion:** Order completion from homepage to payment < 2 minutes
- **UX:** 2-step flow (select -> pay), zero registration required
- **Admin:** < 10% orders need manual intervention
- **Design:** Visually comparable to sumistore.me quality

## Key Differences from sumistore.me

| sumistore.me | RokdBot v2 |
|---|---|
| Sells digital accounts (instant delivery) | Sells bot farm time (manual delivery via Discord) |
| Auto-delivers account data on payment | Shows order code + "contact Discord" |
| Multiple product categories (13+) | Single category: RoK bot farm packages |
| Flask backend (Python) | Supabase + Edge Functions (TypeScript) |
| Telegram bot for small orders | Telegram bot for order lookup + admin alerts |
| Built-in 2FA/email tools | Not needed |

## Dependencies

- SePay account + API key (READY)
- Supabase project (READY, keys rotated)
- VietQR API (free, no registration)
- Telegram Bot token (via @BotFather)
- Discord server invite link
- Lovable hosting (current)

---

## Next Steps

-> Create detailed implementation plan with phase files in `plans/` directory
-> Phase 3 (frontend redesign) is the largest effort — consider splitting into 3a (shop) and 3b (admin)
