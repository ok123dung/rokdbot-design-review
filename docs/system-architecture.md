# System Architecture — rokdbot.com

## Stack

- **Frontend**: Vite + React 18 + TypeScript + Tailwind + shadcn/ui
- **Routing**: React Router DOM v6 (SPA, vercel.json catch-all rewrite)
- **Database / Auth**: Supabase (project `inondhimzqiguvdhyjng`, region `ap-southeast-1`)
- **Hosting**: Vercel (project `prj_BlPVAk4pBQL29WVm0ZG7hSRLMS8y`, team `team_GIXfwBE7NpQiIo52xNtwVwdS`)
- **CDN**: Cloudflare (Web Analytics beacon active)
- **Domains**: `rokdbot.com`, `www.rokdbot.com`, `shop.rokdbot.com`

## Source Structure

```
src/
├── components/
│   ├── shop/
│   │   ├── HeroBanner.tsx        — Live Dashboard variant B
│   │   ├── FeaturesSection.tsx   — Bento 12 cells (3 cụm Combat/Farm/Safety)
│   │   ├── PackageGrid.tsx       — 5-column (Trial/V1/V2★/V3/Premium VIP)
│   │   ├── PackageCard.tsx
│   │   ├── ShopFooter.tsx
│   │   └── ...
│   ├── admin/                    — Admin dashboard
│   └── SEO.tsx                   — Single source of truth meta + JSON-LD
├── integrations/supabase/
│   └── client.ts                 — VITE_SUPABASE_URL + VITE_SUPABASE_PUBLISHABLE_KEY
├── pages/
│   ├── blog/
│   │   ├── blogTypes.ts          — BlogPost interface + ISODate brand
│   │   ├── blogData.ts           — Aggregator (36 lines)
│   │   ├── BlogList.tsx          — Index page
│   │   ├── BlogPost.tsx          — Article renderer (custom markdown)
│   │   └── posts/                — 11 per-article files
│   ├── Index.tsx                 — Homepage
│   └── ...
└── index.css                     — Aurora design system (1.310 lines, pre-existing)
```

## Database Schema (Supabase public)

Key tables:

- **`service_packages`** — 5 tiers (Trial 150k / V1 750k / V2 900k / V3 1.2M / Premium VIP 3M)
  - Columns: `id`, `name`, `slug`, `description`, `price`, `duration_days`, `features` (jsonb), `is_active`, `stock`, `sold_count`
- **`orders`** — 10 rows, FK → `service_packages`
- **`payments`** — VietQR transactions
- **`users`** — NextAuth schema (text/cuid IDs)
- **`profiles`** — Supabase Auth schema (uuid IDs)
- **`staff`** + **`user_roles`** — RBAC
- 25+ tables tổng cộng, all RLS enabled

## Deploy Flow (CRITICAL)

`framework: null` quirk: Git push deploy → CANCELED 0ms. Must use CLI prebuilt + promote.

```bash
# 1. Build local with env baked
npm run build
mkdir -p .vercel/output/static
cp -r dist/. .vercel/output/static/
echo '{"version":3,"routes":[{"handle":"filesystem"},{"src":"/(.*)","dest":"/index.html"}]}' > .vercel/output/config.json

# 2. Deploy + promote (custom domain alias)
vercel deploy --prebuilt --prod --yes
vercel promote <deployment-id>   # required to swap rokdbot.com alias
```

Documented in: `~/.claude/projects/C--Users-admin-Desktop-web/memory/project_rokdbot_vercel_deploy.md`

## Environment Variables

Required in Vercel project `dist`:

- `VITE_SUPABASE_URL=https://inondhimzqiguvdhyjng.supabase.co`
- `VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_A2Z1z9c34frOkdXlvsEanQ_0m4oR1VB`

## Service Worker

`public/sw.js` — Kill switch (commit `06ea4d3`) để rescue browsers với stale SW cache from previous broken deploys. Self-unregister + clear caches + reload tabs.

## Asset Hosting

- **Game screenshots**: `public/blog-images/auto-rally/` — 16 PNG game screenshots từ customer (anonymized)
- **Brand**: `public/og-image.png` (1200×630), `public/favicon-{192,512}.png`

## Routing (vercel.json)

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

SPA — all routes serve `index.html`, React Router handles client-side routing.
