import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "alliance-hq-placement-strategy-rok-2026",
  title: "Alliance HQ Placement Strategy RoK 2026 — Territory Expansion Math",
  description: "Alliance HQ placement RoK 2026: territory expansion math, optimal positioning per KvK phase, holy site coverage radius, và cách bot V3 tự động tối ưu HQ migration timing.",
  date: "2026-05-11",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Alliance HQ đặt sai vị trí — toàn bộ strategy của mày sụp đổ

Alliance HQ không phải chỉ là điểm tập kết. Nó là **trung tâm của territory expansion, supply chain cho march, và radius cover holy site**. Đặt HQ sai vị trí đầu KvK = cả 14 ngày bị drag theo vị trí sai đó, không cải thiện được.

90% alliances VN đặt HQ "gần nhau cho an toàn" — nhưng "gần nhau" không phải là criteria đúng. Criteria đúng là **maximal territory coverage + minimal march time to all objectives**.

## Math territory expansion của HQ

Alliance territory expand xung quanh HQ theo vòng tròn radius:

| HQ Level | Territory Radius | Tiles covered |
|---|---|---|
| HQ lv 1 | 3 tiles | ~28 tiles |
| HQ lv 3 | 5 tiles | ~78 tiles |
| HQ lv 5 | 7 tiles | ~154 tiles |
| HQ lv 8 | 10 tiles | ~314 tiles |

**Key insight:** territory chỉ expand khi có member building trong radius. Empty territory ngoài radius không claim được. Nếu HQ ở góc map, **50% radius bị lãng phí vào unclaimed terrain** (mountain, water, edge).

Optimal placement: **HQ at geometric center** của cluster member cities + holy sites target. Không phải center của map — center của objectives.

## Phase-based HQ positioning

KvK có 3 phase với objectives khác nhau, đòi HQ position khác nhau:

**Phase 1 (Lost Kingdom entry):** HQ gần spawn zone của kingdom để gather member. Priority: **cluster rally point**, không cần holy site proximity.

**Phase 2 (Holy site race):** Di chuyển HQ về **giữa cluster holy sites** mà alliance target. Mỗi 2 tiles HQ gần holy site = march time giảm 15-20 giây → critical trong capture window.

**Phase 3 (Altar / Final battle):** HQ di chuyển về **phía Altar**, tạo supply chain cho rally march. HQ quá xa = troops heal tốn gấp đôi time.

Bot V3 tự tính HQ optimal position theo phase và gợi ý migration timing.

## Pain: placement sai không thể recover trong KvK

**HQ migration cost** — di chuyển HQ tốn Speedup + Resources. Migration lần 1: rẻ. Migration lần 2-3: đắt dần. Alliance ít resource không thể reposition nhiều lần trong KvK.

**Territory lost khi HQ move** — khi HQ di chuyển, territory không theo — nó expand lại từ HQ mới. Alliance phải rebuild territory từ đầu ở vị trí mới. **Mất 8-12 tiếng territory rebuild sau mỗi HQ move**.

**Holy site out of range** — nếu HQ >10 tiles khỏi target holy site, march time quá dài để capture trong window. Alliance phải chọn: ignore holy site hoặc risk march xa.

**Không có data để quyết định** — placement đúng đòi track vị trí 20-30 member city, vị trí 10-15 holy site target, và predict địch attack direction. Manual analysis = không thực tế.

## Bot V3 tự động optimize HQ placement

Gói **V3 Siêu Cấp 1.200.000đ/tháng** có territory intelligence module:

- **Member city cluster analysis** — tính centroid của tất cả member city hiện tại, suggest HQ position cho coverage tối đa
- **Holy site proximity score** — score từng vị trí HQ tiềm năng dựa trên march time đến target holy sites
- **Phase transition alert** — thông báo khi cần migrate HQ theo KvK phase shift
- **Migration cost calculator** — ước tính resource cost trước khi confirm migration
- **Enemy pressure mapping** — nhận diện direction địch đang push, recommend HQ position tránh direct path

> 🤖 V3 tính optimal HQ position theo realtime data — không đặt bằng cảm tính nữa. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Expansion math thực tế: case study

Alliance 40 member, HQ lv 5, target 3 holy sites (A, B, C):

**Placement A — HQ ở góc, gần cluster member:**
- Coverage: 154 tiles, nhưng 60 tiles vào edge = lãng phí
- March time đến holy site A: 4 phút 30 giây
- Miss capture window rate: 65%

**Placement B — HQ ở centroid giữa member + holy site:**
- Coverage: 154 tiles, 90% effective tiles
- March time đến holy site A: 2 phút 45 giây
- Miss capture window rate: 12%

Chênh lệch đặt HQ = miss rate từ 65% xuống 12% — không thay đổi gì khác ngoài vị trí HQ.

## Holy site coverage radius rule

Một rule đơn giản: **HQ phải trong 8 tiles của target holy site** để capture march khả thi trong window 10 phút. Nếu HQ >8 tiles = march 3+ phút = chỉ còn 7 phút capture window sau khi march đến = quá rủi ro.

Xem thêm: [Holy Site Capture Timing Per Kingdom RoK 2026](/blog/holy-site-capture-timing-per-kingdom-rok-2026).

> 🤖 V3 đảm bảo HQ luôn trong range optimal của holy site target — tự động reposition theo phase. [V3 →](/#packages)

## FAQ

### Alliance nhỏ (20 member) có cần tối ưu HQ placement không?
Càng nhỏ càng quan trọng — alliance nhỏ không có resource dư để migrate nhiều lần. Đặt HQ đúng từ đầu giúp tiết kiệm 2-3 lần migration cost trong KvK.

### HQ có thể đặt trên resource tile không?
Không — HQ cần đặt trên trống tile, không thể đặt chồng resource tile hoặc barb tile. Bot V3 tự filter ra valid placement tiles khi suggest position.

### Migrate HQ giữa KvK có bị penalize không?
Không bị penalize từ game mechanic, nhưng tốn cost. Trade-off: migration cost vs territory rebuild time. Nếu vị trí mới tăng holy site coverage >30%, migration thường worth it.

## Bắt đầu ngay

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Holy Site Capture Timing Per Kingdom RoK 2026](/blog/holy-site-capture-timing-per-kingdom-rok-2026)
- [KvK Season 8 Complete Guide RoK 2026](/blog/kvk-season-8-complete-guide-rok-2026)
- [KvK 1 Lost Kingdom Specific Guide RoK 2026](/blog/kvk-1-lost-kingdom-specific-guide-rok-2026)
- [Alliance Help Button Optimization — Tăng 200% help speed cho alliance](/blog/alliance-help-button-optimization-rok-2026)
- [Constantine Garrison Master Guide — Defense commander OP cho HQ](/blog/constantine-garrison-master-guide-rok-2026)
  `,
};
