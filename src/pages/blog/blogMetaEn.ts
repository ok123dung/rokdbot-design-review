import type { BlogPost } from "./blogTypes";

/** English metadata-only index. Lazy article content via ./posts/en/<slug>.ts. */
export type BlogPostMeta = Omit<BlogPost, "content">;

export const blogMetaEn: BlogPostMeta[] = [
  { slug: "commander-tier-list-cavalry-rok-2026", title: "Cavalry Commander Tier List RoK 2026 — Top S+ KvK Season 8 (Cao Pi, Mehmed II, Saladin)", description: "Complete cavalry commander tier list RoK Season 8 2026: S+ through B, open field vs rally analysis, pet pairing, and how bot V3 auto-rotates to maximize honor per AP barbarian farming.", date: "2026-05-10", readTime: "7 min", coverImage: "/og-image.png" },
  { slug: "kvk-season-8-complete-guide-rok-2026", title: "KvK Season 8 Complete Guide RoK 2026 — Daily Schedule + Bot Config From Day 1 to Day 14", description: "KvK Season 8 complete guide: 14-day phase breakdown, commander prep, Honor farming target, bot V3 config per phase. From pre-KvK 48h prep to final Field of Honor Day 14. Includes Top 30 alliance contribution target.", date: "2026-05-10", readTime: "10 min", coverImage: "/og-image.png" },
  { slug: "auto-honor-farming-kvk-rok-2026", title: "Auto Honor Farming RoK 2026 — 17-Month FREE AP Customer Case Study: 98M Power, City Hall 25, 8-Year Speedup", description: "Real customer data from 17 months continuous bot operation (NO AP spending, NO VIP boost purchase). Updated 2026-05-09: Power 98.1M, VIP 18, City Hall 25, 24K T15 troops, 28.2B total RSS, 3,005 days (8.2 years) speedup. ROI exceeds 50x service cost.", date: "2026-05-09", readTime: "7 min", coverImage: "/blog-images/auto-rally/img-13-17SAkQMt.png" },
  { slug: "f2p-to-vip2-bot-progression-roadmap-rok-2026", title: "F2P to VIP 2 in 45 Days Using Bot — Roadmap Without Spending 1 Cent (Budget 150k → 900k)", description: "Reach VIP 2 as F2P in 45 days using bot — no gem purchase. 3-phase roadmap: 7-day Trial → V1 750k/month → V2 900k/month. Manual equivalent: 120+ days same path. Per-phase gem and Honor accumulation analysis.", date: "2026-05-09", readTime: "7 min", coverImage: "/og-image.png" },
  { slug: "rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026", title: "RokdBot V1 vs V2 vs V3 vs Premium VIP — Which Package Pays For Itself In 2 Weeks? (ROI 2026)", description: "Compare ROI across 5 RokdBot packages 2026: kills/day, gems/day, Honor/day, break-even time. V2 900k recovers cost after 2 weeks of Honor farm. V3 1.2M offers best ROI per march. Complete pricing comparison for every budget.", date: "2026-05-09", readTime: "8 min", coverImage: "/og-image.png" },
  { slug: "bot-rise-of-kingdoms-co-an-toan-khong", title: "Is Rise of Kingdoms Bot Safe? The Truth in 2026", description: "Detailed analysis of RoK bot safety. Account ban risks, mitigation strategies, and why RokdBot is safer than alternatives.", date: "2026-03-20", readTime: "7 min" },
];

// Build-time slug uniqueness check
const _seenEn = new Set<string>();
for (const p of blogMetaEn) {
  if (_seenEn.has(p.slug)) throw new Error(`Duplicate English blog slug: "${p.slug}"`);
  _seenEn.add(p.slug);
}
