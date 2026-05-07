# Code Review — Port SEO Schemas + Assets

**Plan:** `plans/260505-1530-port-seo-from-design-pack/plan.md`
**Reviewed:** 2026-05-06
**Scope:** 5 files (4 modified + 1 added). Pre-existing `src/index.css` modification is unrelated and out of scope.

## Summary

Implementation is **functionally correct**: the right schemas are added in the right places, and the de-duplication of inline JSON-LD on `Index.tsx` is a clean win. However, **two of the speakable `cssSelector` entries reference classes that do not exist in the React app**, which means the WebPage Speakable schema is essentially advertising selectors that match nothing. There are also a few smaller correctness bugs around language detection, hreflang URL form, and a pre-existing FAQPage / visible-content drift that the port did not introduce but should be flagged.

**Status:** `DONE_WITH_CONCERNS`

## Critical Issues

None. Nothing blocks merge or is a security/data-loss risk.

## High Priority

### H1. Speakable `cssSelector` references nonexistent classes — `index.html:114`

```json
"cssSelector": ["h1", ".hero-sub", ".usp-pill"]
```

Verified by `Grep` across `src/`: **`.hero-sub` and `.usp-pill` do not exist anywhere** in the React codebase. They were ported from `design-pack-7aX5qLgmmE/.../hero.jsx` (which does use those classes) but the React `HeroBanner.tsx` is built on Tailwind utility classes, with no equivalent. The hero subtitle is `<p className="text-lg md:text-xl text-[#9db0ca] ...">` and the USP pill is `<div className="inline-flex items-center gap-2 bg-[#fb7185]/10 ...">`.

**Impact:** Google's Speakable structured data extracts text from the matched selectors and reads it via Google Assistant. With two of three selectors matching nothing, only the `h1` content (currently `Bot Farm Rise of Kingdoms`) is voice-search-eligible — losing the most informative paragraph (the subtitle and USP). Per Schema.org, missing selectors are silently ignored — no error, just degraded value.

**Fix options** (do not apply now per instructions):
- Add stable hook classes `hero-sub` and `usp-pill` alongside the existing Tailwind on `HeroBanner.tsx`, OR
- Update `index.html` selectors to match what is rendered, e.g. `["h1", ".hero-banner p", ".hero-banner .inline-flex span"]` — but tying selectors to layout chains is brittle.

Recommended: add stable semantic class hooks. They cost nothing and decouple SEO from layout refactors.

### H2. `urlTemplate` for SearchAction points to a route that does not exist — `index.html:97`

```json
"urlTemplate": "https://rokdbot.com/tra-cuu?ma={search_term_string}"
```

`Grep` confirms no `/tra-cuu` route in `App.tsx` (`src/App.tsx`) or anywhere in `src/`. The closest functionality is the `OrderLookupModal` opened by a `Navbar` button — a modal, not a route.

**Will Google complain?**
- Google's Rich Results Test will pass — SearchAction has no requirement that the target URL be live.
- However, when a user actually triggers the sitelinks search box (only granted to high-authority sites and not guaranteed even then), it will navigate to `https://rokdbot.com/tra-cuu?ma=ABC123` and 404 (or fall back to `<NotFound>`). The `<NotFound>` route is configured (`<Route path="*" element={<NotFound />} />`).
- Sitelinks search is rare for new domains; pragmatic to keep this in place if `/tra-cuu` is on the roadmap. Otherwise, point to a route that exists (e.g. `/?lookup=...` if you can wire the modal to open from a query param) or remove SearchAction entirely.

**Recommendation:** add a TODO comment in `index.html` near the SearchAction noting that the `/tra-cuu` route is not yet implemented, so a future engineer doesn't assume it works.

### H3. `i18n.language` BCP-47 tag may break locale checks — `src/components/SEO.tsx:74,116`

```tsx
content={currentLang === "vi" ? "vi_VN" : currentLang === "en" ? "en_US" : currentLang === "ko" ? "ko_KR" : "zh_CN"}
// ...
inLanguage: currentLang === "vi" ? "vi-VN" : "en-US",
```

`src/i18n/index.ts` configures `i18next-browser-languagedetector` with `order: ['localStorage', 'navigator']` but **does not set `load: 'languageOnly'` or `supportedLngs`**. The navigator detector returns the full BCP-47 tag (e.g. `en-US`, `vi-VN`, `zh-CN`). With no normalization, `i18n.language` for a Vietnamese visitor whose browser is `vi-VN` is `"vi-VN"`, not `"vi"`.

**Effects:**
- Line 74: a `vi-VN` user falls through every branch and gets `og:locale = "zh_CN"` — wrong.
- Line 116: a `vi-VN` user gets `inLanguage = "en-US"` on `BlogPosting` — wrong.
- After the user manually toggles language to `vi` (via i18next's `changeLanguage("vi")`, if such UI exists), the value normalizes to `vi` and the checks work. So this only manifests for first-time visitors before any explicit selection.

**Fix options** (out of scope, but flag):
- Add `load: 'languageOnly'` and `supportedLngs: ['vi','en','zh','ko']` in `i18n/index.ts` (preferred, fixes globally).
- Or use `i18n.resolvedLanguage` (which respects `supportedLngs`) instead of `i18n.language` in SEO.tsx.
- Or compare with `currentLang.startsWith("vi")` etc. in SEO.tsx — narrower fix but more brittle.

This is a pre-existing latent bug that the port surfaces because the new `BlogPosting.inLanguage` makes the impact more visible to crawlers.

### H4. Hreflang URLs use `?lang=xx` but the app has no query-param routing for language — `src/components/SEO.tsx:84-91`

```tsx
{languages.map((lang) => (
  <link rel="alternate" hrefLang={lang}
        href={`${canonicalUrl}${canonicalUrl.includes("?") ? "&" : "?"}lang=${lang}`} />
))}
```

There is no router or component that reads `?lang=` from the URL and switches `i18n.language` accordingly. `i18n` resolves from `localStorage` and `navigator` only. So the hreflang URLs Google will be told about (`https://rokdbot.com/?lang=ko`) all serve identical content to whatever the visitor's local detection yields. Google's hreflang requires that the alternate URLs return content actually localized to that language, otherwise it ignores them or treats them as duplicate-content noise.

This is **pre-existing in `SEO.tsx`** (the port did not introduce it), but worth flagging since the speakable port made me re-read the file. Either:
- Implement query-param locale switching in the app, or
- Drop hreflang entirely until per-locale routes exist (the design pack pattern is `/en/` path prefix, which would be cleaner).

## Medium Priority

### M1. FAQPage schema in `index.html` does not match visible FAQ on page

The site-wide `FAQPage` schema in `index.html:208-255` lists 5 Vietnamese Q&As (e.g. "RokdBot là gì?"). The actual visible FAQ in `src/components/shop/FAQSection.tsx` lists 6 different Q&As (e.g. "Bot có an toàn không? Account có bị ban không?"). Google's FAQ structured data rules require: *"the question text and the answer text must match the question and answer text on the page"* — failing this can lead to manual action.

This is a **pre-existing issue**, not introduced by the port. But the port consolidated FAQPage into `index.html` (good), so this is the right time to surface it. Either:
- Update `FAQSection.tsx` to render the same 5 Q&As that are in the schema, or
- Move the FAQPage schema into `<SEO>` on `Index.tsx` and feed it from the same `faqs` array used by `FAQSection`.

The second option is the right factoring. Keep FAQPage out of `index.html` (it is page-specific, only shown on `/`).

### M2. FAQPage schema is emitted on every route — `index.html`

Because all the JSON-LD blocks (Organization, WebSite, WebPage, BreadcrumbList, Service, SoftwareApplication, FAQPage) live in `<head>`, they are present on `/blog`, `/blog/:slug`, `/disclaimer`, `/privacy`, `/terms`, and `/admin`. For most schemas this is fine (Organization, WebSite are intended to be site-wide). But:
- **WebPage with `@id` `https://rokdbot.com/#webpage`** is emitted on `/blog/:slug` too, and points to the homepage URL `https://rokdbot.com/`. Google may treat this as a misdeclared page identity for blog posts. Same for **BreadcrumbList** which only declares the homepage breadcrumb path even on blog post URLs.
- **FAQPage** appearing on `/disclaimer` etc. is a structured-data violation: FAQPage MUST only mark up content that is actually present on that page (Google FAQ guidelines).

**Impact:** likely low (Google is fairly tolerant), but technically incorrect. Safer factoring:
- Keep `Organization`, `WebSite` in `index.html` (site-wide is fine).
- Move `WebPage` (homepage), `BreadcrumbList` (homepage), `Service`, `SoftwareApplication`, `FAQPage` into `<SEO>` on `Index.tsx`, gated by route or by an `isHome` prop.

### M3. `wordCount` includes markdown punctuation — `src/pages/blog/BlogPost.tsx:57`

```tsx
wordCount: post.content.trim().split(/\s+/).length,
```

For the first blog post, this returns `348` tokens; stripping markdown punctuation (`#`, `*`, `|`, `-`) reduces to `328` — about 6% inflation. Markdown headings like `## Gem Là Gì` count `##` as a token. Tables (`| col |`) count each `|` as a token.

**Recommendation:** strip markdown syntax before counting:

```tsx
wordCount: post.content
  .replace(/[#*`|]+/g, " ")
  .replace(/!\[.*?\]\(.*?\)/g, "") // images
  .replace(/\[(.*?)\]\(.*?\)/g, "$1") // link text only
  .trim().split(/\s+/).filter(Boolean).length
```

Not a blocker — Google does not enforce strict word counts — but the value should reflect prose, not syntax.

### M4. SVG `publisher.logo` may downgrade rich-result eligibility — `src/components/SEO.tsx:114`

```tsx
publisher: { ..., logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.svg` } }
```

Schema.org `ImageObject` accepts SVG as a `contentUrl`/`url` value, and Google Rich Results validator no longer rejects SVG outright (this changed circa 2022). However, Google's AMP and "Article rich result" guidelines still recommend a **raster (PNG/JPG) logo of at least 112×112 px** with documented `width`/`height` properties. Some Google validators emit a *warning* on SVG without dimensions: *"Logo dimensions could not be determined."*

The SVG at `public/favicon.svg` is `viewBox="0 0 64 64"` — 64px, below the 112px minimum even when rasterized.

**Recommendations:**
- Use the existing PNG `og-image.png` (which is 1200×630 per typical OG conventions) or ship a dedicated logo.png at >= 112×112, OR
- Add explicit `width: 112, height: 112` to the `ImageObject` (SVG scales, so this is honest), AND ensure the visual mark is recognizable at that size.

The `Organization` schema in `index.html:69` uses `"logo": "https://rokdbot.com/favicon.ico"` — also undersized and a `.ico`. Worth a separate fix.

### M5. `BlogPosting.image` defaults to OG image, not a per-post hero — `src/components/SEO.tsx:107`

```tsx
image,  // implicit shorthand for `image: image`, where `image = DEFAULT_IMAGE`
```

When `BlogPost.tsx` calls `<SEO ... />` without an `image` prop, the BlogPosting `image` is the homepage's `og-image.png`. Google's Article rich result guidelines require an article-relevant image, ideally 1200×675 with `1.91:1` aspect ratio. Using the same OG image across all blog posts may degrade rich result eligibility (Google may show a generic preview).

`blogData.ts` does not have an image field on `BlogPost`. To remediate, add `coverImage?: string` to `BlogPost`, default to a curated per-post image, and pass via `<SEO image={...} article={...} />`.

This is an enhancement, not a regression. Out of port scope per plan. Logging for follow-up.

### M6. `BlogPosting.author` is an Organization, not a Person — `src/components/SEO.tsx:110`

```tsx
author: { "@type": "Organization", name: article.author ?? "RokdBot" },
```

Schema.org allows `Organization` as `author`, but Google's Article guidelines [strongly recommend](https://developers.google.com/search/docs/appearance/structured-data/article#author) `Person` (with `name`, optional `url`, `sameAs`). Using `Organization` is technically valid; just less ideal for E-E-A-T signals.

If the blog has no individual author, `Organization` is acceptable — but if it does, `Person` is preferred. Pre-existing scope decision; flag only.

## Low Priority

### L1. Schema redundancy: `Service` (in index.html) vs `SoftwareApplication.offers` (in index.html)

Both blocks declare the same 4 packages with the same prices. Not invalid, but Google will pick one and ignore the other. Could trim one. Out of scope.

### L2. `keywords` meta is dead — pre-existing — `index.html:8`, `src/components/SEO.tsx:46`

Google has not used `<meta name="keywords">` since ~2009. Bing dropped it too. The keywords list adds page weight without ranking benefit. Not introduced by this port. Out of scope.

### L3. JSON-LD `@id` consistency on blog posts

`SEO.tsx:103` sets `@id: "${canonicalUrl}#article"` but `mainEntityOfPage.@id: canonicalUrl` (no fragment). Both correct, just noting that the `@id` reference graph chains from `index.html`'s `Organization @id` and `WebSite @id` are not extended on blog posts (no `isPartOf: { @id: WebSite }`, no `publisher: { @id: Organization }`). Could improve graph linking. Minor.

## Edge Cases Found

1. **`<html lang>` conflict:** `index.html:2` hardcodes `<html lang="vi">`; `SEO.tsx:95` does `<html lang={currentLang} />`. Helmet will win at runtime, but during the initial paint (before React hydrates), search-engine-rendered prerender may see `vi`. After hydration, may flip to `vi-VN` or `en-US`. Not a real problem (Helmet is the source of truth for crawlers using JS rendering), but be aware.
2. **Index.tsx schema removal correctness:** The 3 deleted `<script>` blocks (WebSite EN, Organization EN, FAQPage EN) were inferior to the Vietnamese versions in `index.html` — agreed. No regression: the deleted FAQPage had 4 EN questions; the kept VN FAQPage has 5 questions (still mismatched with visible UI per M1, but that's pre-existing).
3. **`react-helmet-async` ordering:** Helmet emits scripts AFTER static `<head>` content. Blog post pages will have BOTH the site-wide `WebPage` schema (from `index.html`) AND the new `BlogPosting` schema (from `<SEO>`). Two distinct types, no duplication — that's fine. But `WebPage @id="https://rokdbot.com/#webpage"` on a blog post URL is technically misdeclared (M2).
4. **`OrderLookupModal` semantic gap:** The `tra-cuu` route does not exist, but `OrderLookupModal` provides similar functionality. Not a schema bug, just a UX/semantic note: when a search engine sends a SearchAction click to `/tra-cuu`, the user can't lookup an order. Until /tra-cuu route is built or the modal is wired to a query param, the SearchAction is aspirational.
5. **TypeScript escape hatches in `ArticleMeta`:** No `any`, no `as`. Optional fields are properly modeled. All fields are typed. ✓ No type-safety holes.
6. **Word count zero-guard:** `post.content.trim().split(/\s+/).length` on empty content returns `1` (split of empty string is `[""]`). If a blog post ever has empty content, schema emits `"wordCount": 1` — semantically misleading but not a crash. Edge case; not worth fixing for static `blogData.ts`.

## Positive Observations

- Clean separation: site-wide schemas in `index.html`, page-specific in `<SEO>`. Single source of truth.
- Removing the duplicate inline scripts on `Index.tsx` is the right call — the deleted EN versions were strictly weaker than the VN ones in `index.html`.
- `SEO.tsx` `article` prop is well-typed via `ArticleMeta` interface; conditionally rendered.
- Use of object spread for optional fields (`...(article.section ? { articleSection: ... } : {})`) is idiomatic and avoids emitting `undefined`/`null` in JSON.
- `dateModified` defaults to `datePublished` when absent — correct behavior for not-yet-edited posts.
- Favicon switch (SVG primary, ICO fallback) is correct best practice and matches the design pack.
- `mainEntityOfPage` is included on BlogPosting — Google requires this for the Article rich result.
- `canonicalUrl` is consistent across `og:url`, `canonical`, and `BlogPosting.@id` reference — no drift.

## Recommended Actions

In rough priority order, none required for this port to ship:

1. **(H1)** Add stable `.hero-sub` / `.usp-pill` classes to `HeroBanner.tsx`, OR update `index.html` speakable selectors to match real DOM. Otherwise speakable schema is mostly inert.
2. **(H3)** Set `load: 'languageOnly'` and `supportedLngs` in `src/i18n/index.ts`, OR switch `SEO.tsx` to `i18n.resolvedLanguage`. Fixes incorrect og:locale and BlogPosting.inLanguage for first-time non-`localStorage` visitors.
3. **(M2 + M1)** Move `WebPage`, `BreadcrumbList`, `Service`, `SoftwareApplication`, `FAQPage` from `index.html` to `<SEO>` on `Index.tsx`. Source FAQ entries from the same array as `FAQSection.tsx` so visible content matches markup.
4. **(M3)** Strip markdown syntax before computing `wordCount`.
5. **(H2)** Either implement `/tra-cuu` route or comment-flag the SearchAction urlTemplate.
6. **(M4)** Use a >= 112×112 raster (or SVG with explicit dimensions) for `publisher.logo`.
7. **(H4)** Decide on hreflang strategy — implement query-param/locale routes or drop hreflang.
8. **(M5)** Add `coverImage` to `BlogPost`, plumb through to `<SEO image>`.

## Metrics

- Files reviewed: 5 (`index.html`, `src/components/SEO.tsx`, `src/pages/blog/BlogPost.tsx`, `src/pages/Index.tsx`, `public/favicon.svg`)
- New TS code: ~30 lines in `SEO.tsx`, ~7 lines in `BlogPost.tsx`
- Type safety: clean — no `any`, no `as`, all optional fields properly handled
- New runtime errors introduced: 0
- Pre-existing issues surfaced (not introduced): 4 (H4, M1, M2, M4 second sentence)

## Status

`DONE_WITH_CONCERNS`

**Concerns:**
- H1 (speakable selectors don't match React DOM) is the highest-impact issue introduced by this port — mostly nullifies the value of the new WebPage Speakable schema.
- H3 (BCP-47 language tag handling) and H4 (hreflang) are pre-existing latent bugs that the port makes more visible.
- Pre-existing: FAQPage schema does not match visible FAQ content, and FAQPage schema is emitted on every route (including `/disclaimer`, `/admin`).

None block merge. All recommended fixes can be batched into a follow-up SEO refinement task.

## Unresolved Questions

1. Is `/tra-cuu` on the near-term roadmap, or should the SearchAction urlTemplate be removed/changed?
2. Should the FAQ source-of-truth be the markup or the visible UI? Either is fine, but they must match.
3. Per-locale routes (`/en/`, `/ko/`, etc.) — planned, or stick with client-side i18n only? Decision impacts hreflang strategy.
