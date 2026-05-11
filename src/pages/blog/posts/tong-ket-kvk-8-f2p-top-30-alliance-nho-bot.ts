import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "tong-ket-kvk-8-f2p-top-30-alliance-nho-bot",
  title: "Tổng Kết KvK Season 8: F2P Top 30 Alliance Nhờ Bot — Hành Trình 14 Ngày Của Mình",
  description: "KvK 8 vừa kết thúc. Mình F2P, VIP 14, Power 78M, không nạp 1 đồng — và vẫn Top 30 alliance contribution với 178,000 Honor. Mình share full timeline 14 ngày, config bot từng phase, mistake và lesson learned.",
  date: "2026-05-11",
  readTime: "9 phút",
  content: `
## KvK 8 Kết Thúc — Stats Của Mình

KvK Season 8 vừa close hôm qua. Đây là kết quả 14 ngày của mình:

- **Honor accumulated**: 178,400
- **Alliance contribution rank**: Top 30 (target: Top 50)
- **Barbarians killed**: 6,840
- **Rally captured**: 47 (rally lead 12 lần)
- **Field of Honor kills**: 1,240
- **Troops lost**: 18,000 (target: <25,000) ✓
- **Speedup spent**: 320 hours
- **Time mình active**: 30-45 phút/ngày, trung bình 8 tiếng/14 ngày

So với KvK 7 (cùng setup nhưng config khác): KvK 7 mình Top 60. Lần này Top 30 = improvement 50%.

Mình share full timeline + config + mistake bên dưới.

## Pre-KvK Prep (48h Trước)

### Hôm -2 ngày (T+0h)

- 21h: open Discord RokdBot support, double-check V2 config:
  - ✅ Auto barb chain (Combo Spam + Luring + AOE)
  - ✅ Auto heal threshold 60%
  - ✅ Auto build + research (KvK military research priority)
  - ✅ Daily quest auto claim
  - ✅ Anti-captcha (V2 không có, mình phải tự handle)

- 23h: đi ngủ. Bot tự running.

### Hôm -1 ngày (T+24h)

- 7h sáng: check Discord, không có alert. OK.
- 12h trưa: alliance HQ placement meeting. R4 quyết định migrate HQ sang vị trí tốt hơn (cover 3 holy sites).
- 18h: troops training queue full T5.
- 21h: heal speedup stock 200+ hours ✓.
- 23h: đi ngủ. KvK opens 9h sáng hôm sau.

## Phase 1: Gather Phase (Day 1-3)

### Day 1

- 9h: KvK opens. Bot tự switch sang Phase 1 config (4 march gather + 1 march barb).
- 12h: alliance HQ migration triggered. Bot pause 30 phút để stable.
- 15h: alliance gather 50M RSS. Mình contribute 4M.
- 21h: log cuối ngày. Honor day 1: **520**.

### Day 2

- 7h: dậy, check Discord. Không có alert.
- 12h: lần đầu rally call alliance — fortress Tier 5 đối thủ. Mình join.
- 18h: mình notice — bot đang gather trên tile Lv 5 đúng schedule. 4 march full.
- 21h: log day 2. Honor: **640**.

### Day 3

- 14h: alliance leader đăng strategy Phase 2. Mình save vào Discord pin.
- 21h: log day 3. Honor: **710**.

**Phase 1 total**: 1,870 Honor. Hơi chậm so với plan (target 2,400) — vì alliance HQ migration mất 1 ngày.

## Phase 2: Combat Phase (Day 4-9)

### Day 4 — Phase Transition

- 9h: bot detect Phase 2 active. Switch sang config:
  - 2 march barb chain (Combo)
  - 1 march rally support
  - 1 march gather backup
- 15h: lần đầu Combo Spam + Luring + AOE active trong KvK. Bot kill 7 barb per cast trên tile Lv 4 barb.
- 21h: log day 4. Honor: **2,840**. Đã tăng 4x so với Day 3.

### Day 5-7 — Peak Honor Farming

3 ngày tốt nhất KvK 8 của mình:

- Day 5: **3,120** Honor
- Day 6: **3,280** Honor (peak)
- Day 7: **2,940** Honor

Bot chạy 24/7 không nghỉ. Mình chỉ check 5 phút mỗi sáng + 5 phút mỗi tối.

### Day 8 — Mistake Lớn Nhất

Mình muốn switch commander pair từ archer-heavy sang anti-cavalry (vì matched kingdom kéo cavalry rally tới fortress của alliance mình).

**Sai lầm**: mình switch pair giữa lúc bot đang chain barb. Bot bị disrupt 4 tiếng. Mất ~600 Honor.

Lesson: **không bao giờ swap commander pair trong khi bot active chain**. Phải pause bot trước, swap, sau đó resume.

Discord support fix trong 30 phút.

### Day 9 — Anti-Cavalry Phase

Sau khi swap pair (Seondeok + Belisarius), Honor giảm xuống 2,100/ngày. Lower throughput nhưng counter cavalry rally → alliance lose battle giảm 60%.

- Day 8: **2,180** Honor (sau swap)
- Day 9: **2,310** Honor

**Phase 2 total**: 16,670 Honor.

## Phase 3: Field of Honor (Day 10-14)

### Day 10 — Opening FoH

- 9h: FoH zones open. Bot auto-position troops trong zone Mid (alliance assignment).
- 12h: first FoH kill. 2x Honor multiplier active.
- 18h: lần đầu kill enemy player T5 troop = 240 Honor (single kill).
- 21h: log day 10. Honor: **5,440** (huge jump nhờ FoH 2x).

### Day 11-13 — Peak FoH

3 ngày tốt nhất của toàn KvK:

- Day 11: **6,820** Honor
- Day 12: **7,140** Honor (best day)
- Day 13: **6,480** Honor

Bot V2 auto-rally khi alliance captain call, auto-heal sau combat. Mình chỉ pin alliance Discord voice chat để follow strategy.

### Day 14 — Final Push

- 9h: final FoH window. Alliance leader push everyone "all in".
- 15h: mình lose 3,400 troops trong 1 enemy rally counter. Hospital full T5.
- 18h: bot tự burn 80 hour healing speedup để re-train T5.
- 23h: KvK closes. Final Honor day 14: **5,580**.

**Phase 3 total**: 31,460 Honor.

## Mistakes Lesson Recap

1. **Day 1 alliance migration timing** — nên migrate 48h trước KvK, không phải day 1. Mất 1 ngày Phase 1.

2. **Day 8 commander swap during chain** — phải pause bot trước. Mất 600 Honor.

3. **Không setup anti-captcha** (V2 không có) — bị restrict 1 lần ngày 12, mất 3 tiếng farm. Lần sau nâng V3 cho KvK 9.

4. **Không brief alliance Discord voice chat từ Day 1** — Day 5 mình mới join voice, miss 4 ngày coordination opportunity.

## Tổng Honor Breakdown

| Phase | Days | Total Honor | Avg/day |
|---|---|---|---|
| Phase 1 (Gather) | Day 1-3 | 1,870 | 623 |
| Phase 2 (Combat) | Day 4-9 | 16,670 | 2,778 |
| Phase 3 (FoH) | Day 10-14 | 31,460 | 6,292 |
| Rally Honor bonus | All | 12,800 | — |
| Alliance contribute bonus | All | 4,200 | — |
| **Total** | **14 days** | **178,400** | **12,743** |

Top 30 alliance contribution achieved ✓.

## So Sánh Với Manual F2P

Alliance mình có 5 manual F2P (không dùng bot). Stats trung bình của họ KvK 8:

- Honor: 32,000-58,000
- Time active: 5-8 giờ/ngày trong KvK
- Burnout rate: 4/5 báo burnout sau Day 10

So với mình: 3.1x Honor, 1/10 thời gian, không burnout.

## Cost-Benefit Analysis KvK 8

- Bot V2 cost trong 14 ngày KvK: 900k × 14/30 = **420k**
- Bundle value gained từ Honor:
  - Gold commander chest: 3 chest = 840k
  - Sculpture stack: 12k = 240k
  - KvK rank reward: 580k
  - **Total gained**: ~1.66M

**Net**: 1.24M positive cho 14 ngày KvK = ~88k/ngày net.

## Kế Hoạch KvK 9

- ✅ Upgrade V2 → V3 trong KvK 9 (anti-captcha + AI rotation)
- ✅ Pre-migrate alliance HQ 72h trước (không phải 48h)
- ✅ Join alliance voice từ Day 0
- ✅ Pre-config commander pair swap script (avoid Day 8 mistake)
- Target: Top 15 alliance contribution

## Đọc Tiếp

- [KvK Season 8 Complete Guide — Bot Config Theo Từng Phase](/blog/kvk-season-8-complete-guide-rok-2026)
- [Tâm Sự 1 Năm Dùng Bot — Hành Trình Của Mình](/blog/tam-su-mot-nam-dung-bot-rok-quit-quay-lai)
- [Hỏi Anh Em — FAQ 10 Câu Hay Bị Hỏi](/blog/hoi-anh-em-bot-rok-co-bi-ban-khong-kinh-nghiem-2-nam)

Anh em có Top alliance contribution KvK 8 không? Share Honor stats để mình so sánh.
  `,
};
