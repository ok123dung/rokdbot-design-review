import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "light-darkness-kvk-guide-rok-2026",
  title: "Light & Darkness KvK Guide RoK 2026 — Phase Mechanics + Top 7 Kingdom Strategy",
  description: "Light & Darkness KvK RoK 2026: giải thích cơ chế Light/Dark zone, honor multiplier per zone, strategy Top 7 kingdom, và cách bot pre-schedule barb chain để maximize honor trong cả 2 zone.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Light & Darkness — KvK Khó Nhất Season 2026

Nếu mày đã qua 3-4 KvK thông thường và nghĩ biết hết mechanics — Light & Darkness sẽ phủ nhận điều đó.

Event này tách map thành **2 zone song song**: Light Zone và Darkness Zone, mỗi zone có honor multiplier và cơ chế riêng. Đội nào không đọc kỹ sẽ farm honor zone sai, mất cơ hội x2 multiplier, và tụt rank từ ngày 5.

## Cơ Chế Zone Cụ Thể

### Light Zone
- Honor multiplier: **1x base**
- Barb fort lv1-4 xuất hiện dày đặc hơn
- Civ bonus: civilization light-aligned nhận +10% combat buff trong zone
- Thích hợp: F2P, player power thấp, early phase honor grind

### Darkness Zone
- Honor multiplier: **1,8x** (gần gấp đôi!)
- Barb fort lv5-6 tập trung tại đây
- Terrain: narrow river crossing → chokepoint defense dễ hơn
- Thích hợp: high-power player, rally captain, Phase 2-3 push

### Zone Transition Mechanics
Sau mỗi 48h, Light/Dark zone **shift vị trí** — territory mày vừa chiếm có thể chuyển zone. Alliance cần re-evaluate migration mỗi 2 ngày một lần.

> 🤖 Bot V3 tự động adapt barb chain vào Darkness Zone khi zone shift — không cần config lại. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Top 7 Kingdom Strategy

Light & Darkness KvK chỉ có **7 slot Top Kingdom** thay vì 10 như thường. Competition khắc nghiệt hơn 30%.

### Phase 1 (Ngày 1-3): Establish Zone Control
- Toàn alliance migrate vào **Darkness Zone** trước tiên — multiplier 1,8x từ phút đầu
- Chiếm tile lv5 quanh Darkness Zone center
- Barb chain bắt đầu ngay: 1,8x multiplier = mỗi rợ chết trong Dark Zone cho gần gấp đôi honor

### Phase 2 (Ngày 4-8): Rally Fort + Zone Defend
- Rally barb fort lv5-6 trong Darkness Zone: honor/rally x3 so với Light Zone lv4
- Khi zone shift: migrate nhanh (< 4h) — alliance nào lag migration mất 2 ngày honor
- Bot duy trì barb chain 24/7 trong zone — không break dù 3am hay zone shift

### Phase 3 (Ngày 9-14): Final Honor Push
- Sau zone shift lần 3, map stabilize — không còn shift trong 3 ngày cuối
- Tập trung toàn lực vào Lost Temple trong Darkness Zone (honor x1,8 × combat bonus)
- Bot vẫn chạy barb chain parallel trong khi army chính đánh Temple

## Honor Calculation Light vs Darkness

| Target | Light Zone | Darkness Zone | Delta |
|---|---|---|---|
| Barb lv25 chết | ~200 honor | ~360 honor | +80% |
| Barb Fort lv5 rally win | ~5.000 honor | ~9.000 honor | +80% |
| Enemy city battle | ~1.200 honor | ~2.160 honor | +80% |

Với bot V3 2 đạo chain trong Darkness Zone: **~430 rợ/ngày × 360 honor = 154.800 honor/ngày**. So với Light Zone: ~88.000 honor/ngày. Delta = **+76% honor thuần chỉ từ zone selection**.

## Ai Nên Ở Light Zone?

Không phải tất cả đều ở Darkness Zone:

- Player power < 15M: Light Zone an toàn hơn, barb fort lv1-3 dễ hơn
- R3 mới chơi: Light Zone barb chain tập dượt, ít bị enemy raid
- Shield generator: cần player ở Light Zone canh tile supply chain

Bot V1/V2 → Light Zone. Bot V3/Premium VIP → Darkness Zone theo default config.

> 🤖 V3 tự động detect zone và optimize barb chain path. [Xem V3 →](/#packages).

## Migration Speed — Yếu Tố Ẩn

Zone shift mỗi 48h. Alliance **chậm migration > 6h** = mất 6h honor multiplier 1,8x. Với bot V3 đang chạy, migration gap tạo ra:

**6h × 154.800 honor/ngày ÷ 24h = ~38.700 honor mất trắng** chỉ vì migration chậm.

R5 cần pre-announce migration ít nhất **3h trước zone shift**. Bot tự migrate account ngay khi R5 set lệnh — không chờ player tự bật máy.

## FAQ

### Light & Darkness có barb fort riêng không?
Barb fort vẫn là lv1-6 thông thường, nhưng **phân bố khác nhau theo zone**. Darkness Zone tập trung lv5-6, Light Zone tập trung lv1-4.

### Bot có tự chọn zone không?
Bot V3 follow R5 migration lệnh. Sau khi alliance migrate, bot tự adjust barb chain path vào zone mới — không cần config lại từ đầu.

### Top 7 cần bao nhiêu honor tổng?
Season 2026 threshold dao động 800k-1,2M honor/player trong 14 ngày. Bot V3 2 đạo = ~150k/ngày → **2,1M/14 ngày** — an toàn margin.

## Bắt Đầu Light & Darkness Với V3

**V3 Siêu Cấp 1.200.000đ/tháng**:
- 2 đạo Darkness Zone chain → 154k honor/ngày
- Auto migrate khi R5 lệnh
- Auto heal + train xuyên suốt 14 ngày

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [KvK Season 8 Complete Guide RoK 2026](/blog/kvk-season-8-complete-guide-rok-2026)
- [Lost Kingdom KvK Strategy RoK 2026](/blog/lost-kingdom-kvk-strategy-rok-2026)
- [Rally Attack vs Defense KvK RoK 2026](/blog/rally-attack-vs-defense-kvk-rok-2026)
  `,
};
