---
title: "RokdBot Website Improvement"
description: "4-phase improvement: security hardening, auto payment (SePay), UI/UX, new features"
status: pending
priority: P1
effort: 14d
branch: main
tags: [security, payment, sepay, vietqr, ui-ux, telegram, supabase]
created: 2026-03-20
---

# RokdBot Website Improvement Plan

## Context

RokdBot (rokdbot.com) is a Rise of Kingdoms bot farm service built with React + Supabase. Current state has critical security gaps, manual payment verification, suboptimal UX, and missing automation features. This plan addresses all four areas across 14 working days.

**Brainstorm Report:** [brainstorm-rokdbot-improvement.md](../reports/brainstorm-rokdbot-improvement.md)
**Research Reports:** [research/](./research/)

## Architecture Overview

| Layer | Current | Target |
|-------|---------|--------|
| Auth/Security | No RLS, client-side admin check | RLS on all tables, server-side auth |
| Payment | Static QR, manual admin verify | Dynamic VietQR + SePay webhook auto-verify |
| Order Flow | 4 steps, client-side insert | 2 steps, Edge Function create-order |
| Notifications | Email only (partial) | Email + Discord (done) + Telegram (new) |

## Phase Overview

| # | Phase | Days | Priority | Status | File |
|---|-------|------|----------|--------|------|
| 1 | Security Hardening | 1-2 | CRITICAL | pending | [phase-01](./phase-01-security-hardening.md) |
| 2 | Auto Payment (SePay) | 3-6 | HIGH | pending | [phase-02](./phase-02-auto-payment-sepay.md) |
| 3 | UI/UX Improvements | 7-10 | MEDIUM | pending | [phase-03](./phase-03-ui-ux-improvements.md) |
| 4 | New Features | 11-14 | LOW | pending | [phase-04](./phase-04-new-features.md) |

## Key Dependencies

- SePay account registration + API key (Phase 2 blocker)
- Supabase Pro plan for Edge Functions + Realtime
- VietQR API (free, no registration)
- Telegram Bot token via @BotFather (Phase 4)
- Resend API key for email (already configured)
- Discord webhook URL (already configured)

## Existing Infrastructure (Already Built)

- `supabase/functions/sepay-webhook/index.ts` -- fully implemented with API key auth, payment code matching, amount verification, order status update, email+Discord notifications
- `supabase/functions/send-order-notification/index.ts` -- fully implemented with Resend email + Discord webhook integration
- `supabase/config.toml` -- function stubs configured with `verify_jwt = false`

## Critical Findings

1. `.env` committed to git, NOT in `.gitignore` -- contains Supabase credentials
2. No RLS policies on any table -- all data accessible to any authenticated user
3. Payment code generated client-side (Order.tsx:37-44) -- predictable, spoofable
4. Admin role checked client-side (AdminDashboard.tsx:135-154) -- bypassable
5. PackagesManagement.tsx does CRUD with no RLS protection
6. QueryClient created with zero configuration (no staleTime/cacheTime)
7. ServicesSection.tsx uses hardcoded services array instead of DB

## Risk Mitigation

- Keep manual payment flow as fallback during Phase 2 rollout
- Test each RLS policy with anon/user/admin roles before deploying
- Rotate Supabase keys immediately after removing .env from git
