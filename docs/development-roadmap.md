# Development Roadmap — rokdbot.com

Living document tracking project phases, milestones, and progress.

## Current Phase: Content & Conversion

**Goal**: Drive organic traffic + conversion từ SEO blog cluster → 5 package tiers

**Status**: ✅ Phase 1 complete (8 SEO articles deployed)

### Phase 1 — SEO Blog Cluster Launch (DONE)
- ✅ 8 per-feature articles published
- ✅ Cross-link cluster (mỗi article link 2-3 khác)
- ✅ Tier-aware CTA per article
- ✅ Premium VIP 3M tier added vào Supabase
- ✅ Markdown renderer support full syntax
- ✅ Custom cover image hero per article

### Phase 2 — Content expansion (PENDING)
- [ ] Capture ảnh fortress + sanctum + rally panel → swap vào Auto Rally article
- [ ] Cập nhật log file customer mới nhất → refresh số liệu Honor Farming
- [ ] English translation `/en/blog/...` cho international traffic
- [ ] Add 4-5 articles tiếp: Pet system + Rally lead + KvK strategy + Commander pairing meta + Free vs Pay-to-win comparison

### Phase 3 — Add-on SKU products (PENDING)
- [ ] Gem Mining add-on cho Premium VIP customer (gem mining không bao gồm trong gói)
- [ ] Multi-account add-on cho V2 (currently V3+ only)
- [ ] Custom commander rotation config service

### Phase 4 — Performance + UX (PENDING)
- [ ] Lazy-load article chunks per-route (currently all imported in BlogList)
- [ ] Image optimization (WebP + responsive srcset)
- [ ] Schema.org rich snippet validation

## Success Metrics

| Metric | Current | Target Q3 2026 |
|---|---|---|
| Organic /blog traffic | TBD baseline | 5.000 visitors/month |
| Blog → /#packages conversion | TBD baseline | ≥3% |
| Article published | 11 | 20 |
| Top 7 Vietnamese keywords ranked | TBD | "kéo man rợ", "auto rally rok", "bot rise of kingdoms" trong top 10 |

## Tech Debt Backlog

| Item | Priority | Effort |
|---|---|---|
| `index.css` 1.310 lines (pre-existing) violates 200-line rule | LOW | Significant refactor (4-6h) |
| DRY: 5-tier comparison table duplicated 6 times | MEDIUM | 30 min |
| Code-split blog articles per route | LOW | 1h |
| Add `is_featured` DB column thay regex detect | LOW | 15 min |
