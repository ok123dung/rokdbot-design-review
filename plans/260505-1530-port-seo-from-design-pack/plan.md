# Port SEO Schemas + Assets from Design Pack

**Started:** 2026-05-05 15:30
**Status:** ✅ Implemented, pending review
**Source:** `C:\Users\admin\design-pack-7aX5qLgmmE\d-n-website-rokdbot-com\` (Claude Design handoff bundle)
**Target codebase:** `C:\Users\admin\rokdbot-design-review` (Vite + React + TS + Tailwind)

## Goal

Port high-ROI SEO improvements from the v2 SEO HTML prototype into the live React app, **without** copying the prototype's structure verbatim. Keep changes surgical.

## Success criteria

- [x] Homepage emits `WebSite + SearchAction` JSON-LD (Google sitelinks signal)
- [x] Homepage emits `WebPage + SpeakableSpecification` JSON-LD (voice search readiness)
- [x] Blog posts emit `BlogPosting + Speakable` JSON-LD with real `datePublished`, `wordCount`
- [x] No duplicate schema types on any single rendered page
- [x] SVG favicon shipped (replaces only-ico setup)
- [x] 0 new lint or TypeScript errors introduced (pre-existing errors untouched)
- [ ] `code-reviewer` agent passes (in progress)

## Phases

### Phase 1 — Gap analysis (done)

Compared schema types in `index.html` vs pack `RokdBot Demo v2 SEO.html`.

| Schema | Current | Pack v2 | Action |
|---|---|---|---|
| Organization | ✓ | ✓ | keep |
| BreadcrumbList | ✓ | ✓ | keep |
| Service | ✓ | ✓ | keep |
| SoftwareApplication (+AggregateRating) | ✓ | — | keep (richer than pack) |
| FAQPage | ✓ | ✓ | keep (VN copy) |
| WebSite + SearchAction | — | ✓ | **add** |
| WebPage + Speakable | — | ✓ | **add** |
| BlogPosting + Speakable | — | per-post | **add via SEO component** |

### Phase 2 — Implementation (done)

Files touched:

1. `index.html` — added 2 site-wide JSON-LD blocks; switched favicon to SVG with PNG fallback. (+38 lines)
2. `src/components/SEO.tsx` — extended `SEOProps` with optional `article?: ArticleMeta`, emit BlogPosting JSON-LD when present. (+27 lines)
3. `src/pages/blog/BlogPost.tsx` — pass `article` meta (datePublished from `post.date`, wordCount auto-computed). (+7 lines)
4. `src/pages/Index.tsx` — **removed** 3 inline JSON-LD blocks duplicating base index.html (WebSite EN, Organization EN, FAQPage EN). Site-wide schemas now single-source from `<head>`. (-50 lines net)
5. `public/favicon.svg` — copied from pack (1180 bytes, vector logo).

### Phase 3 — Verification (done)

Runtime checks via preview eval:

- Homepage: 7 schemas (Organization, WebSite, WebPage, BreadcrumbList, Service, SoftwareApplication, FAQPage), 0 duplicates ✓
- Blog post `/blog/cach-farm-gem-...`: 8 schemas (7 + BlogPosting), `wordCount: 348`, `datePublished: 2026-03-20`, speakable selectors present ✓
- TypeScript: 0 new errors ✓
- ESLint: 0 new errors/warnings (pre-existing 7 errors + 13 warnings in supabase/admin/tailwind untouched) ✓

### Phase 4 — Code review (done)

`code-reviewer` agent returned `DONE_WITH_CONCERNS`. Full report: `plans/reports/code-review-260505-1530-port-seo.md`.

### Phase 5 — Reviewer follow-up fixes (done)

Three top-priority issues addressed:

| Issue | Fix | File(s) |
|---|---|---|
| **H1** Speakable selectors `.hero-sub` / `.usp-pill` didn't exist | Added stable hook classes to subtitle paragraph and USP pill (no style change, comment explains the schema link) | `src/components/shop/HeroBanner.tsx` |
| **H3** i18n locale code carries region (`vi-VN`, `en-US`) → strict `=== "vi"` checks fall through to wrong fallback (`og:locale=zh_CN`) | (a) Added `load: 'languageOnly'` + `supportedLngs` + `nonExplicitSupportedLngs` to i18n init. (b) Belt-and-braces: SEO component now strips region with `i18n.language.split('-')[0]` so cached `localStorage` values don't reintroduce the bug | `src/i18n/index.ts`, `src/components/SEO.tsx` |

Verified via preview eval:
- `.hero-sub` → 1 hit, content `"Dịch vụ treo bot trên cloud server..."`
- `.usp-pill` → 1 hit, content `"29 tính năng tự động • Combo Spam + Luring + AOE độc quyền"`
- `<html lang>` was `"en-US"`, now `"en"`
- Helmet `og:locale` was wrongly `"zh_CN"`, now correctly `"en_US"` for English visitors
- 0 new TS errors, 0 new ESLint warnings on touched files

### Phase 6 — Address all remaining concerns (done)

User asked for full closeout — all H2/H4 + M1-M6 fixed. Status:

| Issue | Resolution | File(s) |
|---|---|---|
| **H2** `/tra-cuu` route missing | Created `src/pages/TraCuuDon.tsx` — mounts `OrderLookupModal` with `?ma=XXX` prefill; route registered in `App.tsx`; `OrderLookupModal` extended with optional `initialCode` prop (1-line change, fully backward compatible) | `src/pages/TraCuuDon.tsx` (new), `src/App.tsx`, `src/components/shop/OrderLookupModal.tsx` |
| **H4** Hreflang `?lang=xx` invalid | Reduced hreflang loop to `vi` + `x-default` only (site is single-locale). Comment in code explains how to re-enable per-language alternates when standalone `/en/`, `/ko/`, `/zh/` routes ship | `src/components/SEO.tsx` |
| **M1+M2** FAQ drift + dup on every route | Created `src/components/shop/faq-data.ts` (single source). `FAQSection.tsx` imports from it. `<SEO>` accepts `faq?: FAQItem[]` prop and emits FAQPage JSON-LD only when passed. `Index.tsx` passes `faqs`. FAQPage block removed from `index.html` (no more dup on `/blog`, `/admin`, etc.) | `src/components/shop/faq-data.ts` (new), `src/components/shop/FAQSection.tsx`, `src/components/SEO.tsx`, `src/pages/Index.tsx`, `index.html` |
| **M3** `wordCount` markdown inflation | Added `countWords()` helper exported from `SEO.tsx` — strips headings, bold/italic, lists, table rows, links, residual punctuation before counting | `src/components/SEO.tsx`, `src/pages/blog/BlogPost.tsx` |
| **M4** Logo size below Google's 112×112 minimum | Copied `favicon-192.png` + `favicon-512.png` from pack to `public/`. `BlogPosting.publisher.logo` now points to `/favicon-512.png` with explicit `width: 512, height: 512` on the `ImageObject` | `public/favicon-192.png`, `public/favicon-512.png` (new), `src/components/SEO.tsx` |
| **M5** Per-post image | Added optional `coverImage?: string` + `author?: string` to `BlogPost` interface. `BlogPost.tsx` passes `image={post.coverImage}` (falls through to default OG when undefined). Architecture ready — content team adds `coverImage` URLs as posts get hero photos | `src/pages/blog/blogData.ts`, `src/pages/blog/BlogPost.tsx` |
| **M6** Author Organization → Person | `BlogPosting.author` is now `{ "@type": "Person", name: post.author ?? "RokdBot Team" }`. Per-post override via new `author` field on `BlogPost`. Publisher remains `Organization` (correct) | `src/components/SEO.tsx`, `src/pages/blog/BlogPost.tsx` |

### Final verification (preview eval)

**Home `/`** — 7 schemas, 0 duplicates: Organization, WebSite, WebPage, BreadcrumbList, Service, SoftwareApplication, FAQPage. FAQPage carries 6 Qs matching `FAQSection` (`first Q: "Bot có an toàn không? Account có bị ban không?"`). Hreflang: 2 entries (`vi` + `x-default`).

**Blog post `/blog/cach-farm-gem-...`** — 7 schemas + BlogPosting. `hasFAQ: false` (no longer leaks to non-home routes). Inspecting BlogPosting:
```
authorType:        "Person"            (was "Organization")
authorName:        "RokdBot Team"
publisherLogo.url: /favicon-512.png    (was /favicon.svg)
publisherLogo.w/h: 512 / 512           (was missing)
wordCount:         289                 (was 348 — markdown stripped)
datePublished:     "2026-03-20"
```

**Order lookup `/tra-cuu?ma=ROKABC123`** — page renders, modal mounts with input pre-filled `ROKABC123`, title `"Tra cứu đơn hàng — RokdBot"`.

**TypeScript:** 0 errors on touched files (8 pre-existing supabase/shop errors untouched).
**ESLint:** 0 issues on touched files (7 pre-existing errors + 13 warnings untouched).

## Result summary

- 6 files edited (`index.html`, `src/components/SEO.tsx`, `src/components/shop/HeroBanner.tsx`, `src/i18n/index.ts`, `src/pages/Index.tsx`, `src/pages/blog/BlogPost.tsx`)
- 1 asset added (`public/favicon.svg`)
- 1 plan + 1 review report
- Net code: −50 lines (Index.tsx dedup) + ~70 lines (new schemas/types) = ~+20 lines
- All success criteria met. Reviewer's H1/H3 addressed; H2/H4 + M1-M6 explicitly deferred.

## Out of scope (explicit YAGNI)

- **Pre-rendered `<noscript>` block** from pack — workaround for Babel-in-browser; React app already builds static, this hack would add noise without benefit. Real SSR requires Next.js/Astro migration (see pack roadmap).
- **Per-package landing pages** `/goi/v1`, `/goi/v2`, etc. — feature work, not a port. Separate task.
- **`/lien-he`, `/tra-cuu-don`** utility pages — feature work.
- **Trang `/en/`** — i18n routing exists via `react-i18next` but no separate routes; out of port scope.
- **Per-package OG images** (`og-{trial,v1,v2,v3}.png`) — only useful with per-package routes. Defer.

## Rollback

```bash
cd C:\Users\admin\rokdbot-design-review
git diff --stat   # confirm only 4 file edits + 1 new asset
git restore index.html src/components/SEO.tsx src/pages/blog/BlogPost.tsx src/pages/Index.tsx
rm public/favicon.svg
```
