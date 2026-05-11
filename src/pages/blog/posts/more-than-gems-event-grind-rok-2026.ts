import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "more-than-gems-event-grind-rok-2026",
  title: "More Than Gems Event Grind RoK 2026 — Stage 1-50 + Auto Reward Claim",
  description: "More Than Gems event RoK 2026: stage 1-50 grind breakdown, reward tier value analysis, gem equivalent math, và cách bot V2 auto-clear + auto-claim để không bỏ sót reward nào trong event window.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## More Than Gems — Tên Misleading, Reward Thật

More Than Gems nghe như event gem. Thực ra đây là một trong số ít event cho **commander sculptures, legendary equipment pieces, và speedup bundle** — tất cả trong 1 event window.

Tên "More Than Gems" ý là rewards vượt xa gem thông thường. Đúng. Nhưng chỉ đúng nếu mày grind đủ stages. Dừng ở stage 20? Chỉ nhận gem thường. Push stage 40+? Legendary equipment.

Vấn đề: 50 stages, reset hàng ngày, trong event window 7-10 ngày. Manual clear không thể sustain toàn bộ window.

## Stage Structure — 1 đến 50

More Than Gems chia 5 difficulty bracket:

| Bracket | Stages | Reward Per Clear | AP Cost | Reset/Ngày |
|---|---|---|---|---|
| Novice | 1-10 | Gem 200-500 | 20 AP | 5 lần |
| Apprentice | 11-20 | Gem 500-1.000 + speedup | 40 AP | 3 lần |
| Veteran | 21-30 | Gold key + gem 1.000 | 70 AP | 2 lần |
| Expert | 31-40 | Epic sculpture fragment + 2.000 gem | 120 AP | 1 lần |
| Elite | 41-50 | Legendary equipment chest + 4.000 gem | 200 AP | 1 lần |

**Elite bracket (stage 41-50) là mục tiêu chính** — legendary equipment chest ở đây không có trong event nào khác trong season.

> 🤖 V2 auto-clear tất cả brackets, ưu tiên Elite stages, auto-claim mỗi lần unlock — không bỏ sót legendary chest. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Gem Equivalent Math

More Than Gems không chỉ cho gem — reward tất cả quy về gem equivalent:

| Reward | Gem Market Value |
|---|---|
| Legendary equipment chest | ~30.000 gem |
| Epic sculpture × 1 | ~4.000 gem |
| Speedup 8h × 10 | ~4.000 gem |
| Gold key × 10 | ~3.000 gem |
| Gem trực tiếp | 1:1 |

**1 lần clear stage 50**: legendary chest (~30.000) + 4.000 gem = **~34.000 gem value từ 200 AP**.

AP/gem ratio stage 50: 34.000 gem / 200 AP = **170 gem/AP**. Đây là AP ROI cao nhất trong toàn bộ game content.

So sánh: barb chain thường cho ~2-5 gem/AP từ loot drop. Stage 50 = **34-85x ROI** so với barb chain về gem value.

## Daily Grind Plan — Maximizing Stage Resets

Tổng AP cost để clear tất cả stages đủ số lần trong 1 ngày:

- Novice × 5: 20 × 5 × 10 stages = 1.000 AP
- Apprentice × 3: 40 × 3 × 10 stages = 1.200 AP
- Veteran × 2: 70 × 2 × 10 stages = 1.400 AP
- Expert × 1: 120 × 10 stages = 1.200 AP
- Elite × 1: 200 × 10 stages = 2.000 AP

**Tổng: 6.800 AP/ngày** để full clear tất cả.

AP regen tự nhiên: ~1.200 AP/ngày. Gap: 5.600 AP/ngày cần từ AP potion hoặc tradeoff.

### Realistic Priority Plan

Không đủ AP cho tất cả → ưu tiên theo ROI:

1. **Elite stages (41-50)**: 2.000 AP — ROI cao nhất
2. **Expert stages (31-40)**: 1.200 AP — sculpture fragments
3. **Veteran stages (21-30)**: 1.400 AP — gold keys
4. **Apprentice stages (11-20)**: chỉ nếu AP còn dư
5. **Novice stages (1-10)**: skip nếu AP thiếu

Bot V2 prioritize theo thứ tự này mặc định — không phải manual decision mỗi ngày.

> 🤖 V2 auto-prioritize Elite → Expert stages khi AP limited — không waste AP vào Novice bracket. [Xem V2 →](/#packages).

## Auto Reward Claim — Tại Sao Quan Trọng

More Than Gems có **milestone reward ngoài stage clear**:

| Milestone | Condition | Reward | Expire |
|---|---|---|---|
| 100 stages total | Tích lũy clear count | 2.000 gem + sculpture | 24h |
| 250 stages total | Tích lũy | Epic sculpture × 2 | 24h |
| 500 stages total | Tích lũy | Legendary chest | 48h |
| 1.000 stages total | Tích lũy | Legendary equipment + 10.000 gem | 48h |

Milestone rewards **expire** nếu không claim — 24h hoặc 48h tùy tier. Manual player thường miss vì không check event panel đủ thường xuyên.

Stage count accumulate kể cả khi mày ngủ (nếu có bot). Khi wake up, milestone đã hit nhưng có thể đã expire nếu bot không auto-claim.

Bot V2: claim ngay khi milestone hit — không để expire dù 1 lần.

## Power Requirement Check

Elite stages (41-50) cần troop power:

- Stage 41-45: **2M+ troop power** per march
- Stage 46-50: **4M+ troop power** per march

Bot V2 check power trước khi attempt mỗi stage. Nếu thiếu:
- Fall back xuống Expert/Veteran để grind cumulative count
- Alert user về power threshold
- Không waste AP vào failed attempt

## Event Window Compound Effect

Với 10 ngày event window và bot V2 full priority plan:

| Ngày | Elite Clears | Expert Clears | Legendary Chests |
|---|---|---|---|
| Ngày 1-3 | 10/ngày | 10/ngày | 30 |
| Ngày 4-7 | 10/ngày | 10/ngày | 40 |
| Ngày 8-10 | 10/ngày | 10/ngày | 30 |
| **Tổng** | **100** | **100** | **100 chests** |

100 legendary chests × ~30.000 gem equivalent = **3.000.000 gem value** trong 1 event. Dù 90% chests cho "lower legendary" drops, expected value vẫn là con số không ai bỏ qua.

Manual player: realistically 20-30 elite clears toàn event. **5x gap vs bot V2**.

## FAQ

### More Than Gems có hàng tháng không?
Thường 2-3 lần/năm, thường trùng với KvK season lớn. Bot auto-detect và bắt đầu grind khi event mở.

### Legendary equipment chest drop rate thế nào?
Lilith không publicize drop rate. Community estimate: ~5-10% legendary, 30-40% epic, còn lại là rare/uncommon. Nhưng với 100 chests, số lượng bù đắp rate thấp.

### V3 có tốt hơn V2 cho event này không?
Stage clear cần 1 march per stage — V3 2 đạo không giúp thêm ở đây. V2 đủ optimal. V3 advantage là barb chain song song khi waiting stage cooldown.

## Bắt Đầu More Than Gems Với V2

**V2 Cao Cấp 900.000đ/tháng**:
- Auto-clear Elite → Expert priority mỗi ngày
- Auto-claim milestone reward khi hit — không expire
- Barb chain song song trong stage cooldown window

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Karuak Ceremony Event Guide RoK 2026](/blog/karuak-ceremony-event-guide-rok-2026)
- [Wheel of Fortune Event Timing RoK 2026](/blog/wheel-of-fortune-timing-rok-2026)
- [Mightiest Governor Event Setup RoK 2026](/blog/mightiest-governor-event-setup-rok-2026)
  `,
};
