---
title: "RokdBot V2 — Full Redesign"
description: "Anonymous one-page shop (sumistore.me style), SePay auto-payment, admin redesign"
status: in_progress
priority: P0
effort: 14d
branch: main
tags: [redesign, anonymous-shop, sepay, vietqr, sumistore, dark-theme, supabase]
created: 2026-03-20
---

# RokdBot V2 — Full Redesign

## Context

Redesign RokdBot from auth-heavy multi-page SPA to anonymous one-page shop inspired by sumistore.me. Remove all customer auth. Keep admin-only login. Auto-payment via SePay/VietQR. Customer contacts Discord/Zalo after payment with order code.

**Brainstorm Report:** [brainstorm-rokdbot-v2-redesign.md](../reports/brainstorm-rokdbot-v2-redesign.md)

## Architecture

| Layer | Current | Target |
|-------|---------|--------|
| Customer auth | Email/password required | None (anonymous) |
| Order flow | 4 steps + auth | 2 steps: select -> pay (modal) |
| Game info | Required at checkout | Not needed (via Discord/Zalo after) |
| Payment | Static QR, manual verify | Dynamic VietQR + SePay auto-verify |
| UI theme | Generic Lovable | Dark aurora (sumistore.me style) |
| Site structure | 8+ pages | One-page shop + admin |
| Contact | None | Discord + Zalo buttons |

## Phase Overview

| # | Phase | Days | Priority | Status | File |
|---|-------|------|----------|--------|------|
| 1 | Security + DB Migration | 1-2 | CRITICAL | pending | [phase-01](./phase-01-security-db.md) |
| 2 | Backend: SePay + Edge Functions | 3-5 | HIGH | pending | [phase-02](./phase-02-backend-sepay.md) |
| 3a | Frontend: Shop Redesign | 6-9 | HIGH | pending | [phase-03a-frontend-shop.md](./phase-03a-frontend-shop.md) |
| 3b | Frontend: Admin Redesign | 10-12 | HIGH | pending | [phase-03b-frontend-admin.md](./phase-03b-frontend-admin.md) |
| 4 | Polish + Features | 13-14 | LOW | pending | [phase-04](./phase-04-polish.md) |

## Key Dependencies

- SePay account + API key (READY)
- Supabase project (READY, keys rotated)
- VietQR API (free)
- Telegram Bot token (via @BotFather)
- Discord invite link + Zalo group link

## Pages to Delete

- Auth, Dashboard, Order, Orders, OrderDetail, Profile, ForgotPassword, ResetPassword
- AuthContext, skeleton components

## Pages to Keep/Create

- `/` — One-page shop (rewrite)
- `/login` — Admin login only
- `/admin` — Admin dashboard (redesign)
- `/order-lookup` — Anonymous order tracking (new)
- `/disclaimer`, `/privacy`, `/terms` — Keep as-is
