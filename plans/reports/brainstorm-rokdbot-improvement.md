# Brainstorm Report: RokdBot Website Improvement

**Date:** 2026-03-20
**Status:** Agreed — Ready for implementation plan

---

## Problem Statement

RokdBot (rokdbot.com) — dịch vụ bot farm Rise of Kingdoms — hiện có nhiều bottleneck:
- Payment flow hoàn toàn thủ công (admin verify từng đơn)
- Security gaps: no RLS, client-side admin check, .env committed, client-side payment code generation
- UI/UX chưa tối ưu: 4-step order flow quá dài, thiếu real-time feedback
- Thiếu automation: no Telegram bot, no email notifications, no discount system

### Reference: SumiStore.me Analysis
SumiStore.me (Flask-based digital goods shop) được phân tích làm benchmark:
- Auto payment via VietQR webhook — 5 min timeout, auto cancel
- 1-click ordering flow
- Telegram bot cho đơn nhỏ 24/7
- Built-in utilities (2FA generator, email code fetcher)
- 28,346 đơn thành công — chứng minh model hoạt động

---

## Current Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + TypeScript + Vite SPA |
| Styling | Tailwind CSS + shadcn/ui (Radix) |
| Backend | Supabase (BaaS) — no custom backend |
| Database | Supabase PostgreSQL |
| Auth | Supabase Auth (email/password) |
| Payment | Static QR + manual admin verify |
| Realtime | Supabase Realtime (postgres_changes) |
| i18n | i18next (vi/en/ko/zh) |
| Hosting | Lovable → Vercel/Netlify |

### Database Tables
- `orders` — order_status enum: pending/paid/processing/running/completed/cancelled
- `payments` — amount, method, proof_url, status
- `profiles` — user info, balance, social contacts
- `service_packages` — name, price, duration_days, features (JSON)
- `user_roles` — app_role enum: admin/moderator/user

---

## Evaluated Approaches

### Backend Strategy
| Approach | Pros | Cons | Verdict |
|---|---|---|---|
| Supabase Edge Functions | No extra infra, deploy with Supabase, Deno runtime | Cold start ~200ms, limited runtime | **CHOSEN** |
| Custom Node.js server | Full control, any npm package | Extra hosting cost, maintain 2 systems | Overkill for current scale |
| Client-only (current) | Simple | No webhook, no server-side validation | **REJECTED** — security risk |

### Payment Provider
| Provider | Pros | Cons | Verdict |
|---|---|---|---|
| SePay | Free, webhook auto-verify, popular VN | Requires business registration | **CHOSEN** |
| Casso | Similar features, good API | Monthly fee | Backup option |
| Manual verify | No setup needed | Admin bottleneck, doesn't scale | **REJECTED** for primary flow |

---

## Agreed Solution: 4-Phase Roadmap

### Phase 1: Security Hardening (Day 1-2)
**Priority: CRITICAL — Must do first**

1. Remove `.env` from git history + rotate Supabase keys
2. Add RLS policies for all tables (orders, payments, profiles, service_packages, user_roles)
3. Move payment code generation to DB trigger or Edge Function
4. Fix admin authorization: server-side role check via RLS
5. Add rate limiting for order creation (Supabase pg function or Edge Function)
6. Input sanitization audit on all forms

**Files to modify:**
- `supabase/` — RLS policies, DB triggers
- `src/pages/Order.tsx` — remove client-side payment code gen
- `src/pages/AdminDashboard.tsx` — remove client-side admin check (rely on RLS)
- `.gitignore` — ensure .env listed

### Phase 2: Auto Payment — SePay Integration (Day 3-6)
**Priority: HIGH — Biggest impact on operations**

1. Register SePay account + get API credentials
2. Create Edge Function: `handle-sepay-webhook` — receive payment notifications
3. Create Edge Function: `create-order` — server-side order creation + payment code
4. Replace static QR with dynamic VietQR URL (embed amount + code)
5. Implement 5-min timeout + auto-cancel via pg_cron or Edge Function
6. Keep manual fallback button for admin (backward compatible)
7. Test end-to-end: order → QR → transfer → webhook → auto-confirm → realtime notify

**New payment flow:**
```
User → Select package → Edge Function creates order + payment_code
  → Generate VietQR URL: https://img.vietqr.io/image/{bank}-{account}-{template}.png?amount={X}&addInfo=ROK%20{code}
  → Display dynamic QR → User transfers
  → Bank → SePay webhook → Edge Function matches payment_code
  → Update order status to "paid" → Supabase Realtime notifies client
  → Admin receives push/telegram notification
```

**Files to create:**
- `supabase/functions/handle-sepay-webhook/index.ts`
- `supabase/functions/create-order/index.ts`

**Files to modify:**
- `src/pages/Order.tsx` — dynamic QR, 5-min countdown, call Edge Function
- `src/pages/AdminDashboard.tsx` — add manual verify fallback

### Phase 3: UI/UX Improvements (Day 7-10)
**Priority: MEDIUM — Polish after core works**

1. Simplify order flow: 4 steps → 2-3 steps
2. Full-screen QR payment page with countdown timer + pulse animation
3. Dashboard: add pagination, configure QueryClient staleTime/cacheTime
4. Add React Error Boundary wrapper
5. Landing page: live order counter, trust badges
6. Mobile responsive audit + fixes
7. Add proper loading states for all async operations

**Files to modify:**
- `src/pages/Order.tsx` — step consolidation
- `src/pages/Dashboard.tsx` — pagination, caching
- `src/App.tsx` — error boundary, QueryClient config
- `src/components/landing/*` — social proof, animations

### Phase 4: New Features (Day 11-14)
**Priority: LOW — Only after core is stable**

1. Telegram Bot: order lookup, status notifications, admin alerts
2. Email notifications via Edge Function (order confirm, payment received, service status)
3. Discount codes: new `discount_codes` table + validation in checkout
4. Admin: CSV export, analytics improvements
5. Referral system (optional, if time permits)

**Files to create:**
- `supabase/functions/telegram-bot/index.ts`
- `supabase/functions/send-notification/index.ts`
- DB migration for `discount_codes` table

---

## Risk Assessment

| Risk | Severity | Mitigation |
|---|---|---|
| SePay webhook miss/delay | Medium | Manual fallback + admin notification + retry logic |
| Edge Functions cold start | Low | 10s timeout, SePay retries automatically |
| Breaking change during payment refactor | High | Keep manual flow parallel for 1 week |
| RLS too strict blocks features | Medium | Test each policy with anon/user/admin roles |
| Supabase free tier limits | Medium | Monitor usage, upgrade plan if needed |

## Success Metrics

- **Phase 1**: No security vulnerabilities in client-side code, all tables have RLS
- **Phase 2**: 90%+ orders auto-verified within 60 seconds, admin intervention < 10%
- **Phase 3**: Order completion rate increases, avg time-to-order decreases
- **Phase 4**: 50%+ users receive email/telegram notifications, discount code redemption works

## Dependencies

- SePay account registration + API key
- Supabase Pro plan (Edge Functions + Realtime)
- VietQR API (free, no registration needed)
- Telegram Bot token (via @BotFather)

---

## Next Steps

→ Create detailed implementation plan with `/plan` command
→ Phase files in `plans/` directory with TODO checklists
