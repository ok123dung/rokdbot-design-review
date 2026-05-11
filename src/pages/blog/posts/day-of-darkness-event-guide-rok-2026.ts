import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "day-of-darkness-event-guide-rok-2026",
  title: "Day of Darkness Event Guide RoK 2026 — Eclipse Buff + Kill Strategy",
  description: "Day of Darkness event RoK 2026: eclipse buff mechanics, kill point strategy, reward threshold, và cách bot V2 tận dụng eclipse window để maximize kill points trong thời gian buff active.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Day of Darkness — 6 Tiếng Buff Mà 90% Player Ngủ Qua

Day of Darkness mở 1-2 lần trong KvK. Eclipse window: **6 tiếng** mỗi lần. Trong 6 tiếng đó:

- Kill points tăng **+50%**
- Honor từ barb chết tăng **+30%**
- Troop attack buff: **+20%**

6 tiếng × 3 buff stack = window đặc biệt nhất của cả KvK. Ai farm tích cực trong 6 tiếng này có thể lật ngược honor board.

Vấn đề: eclipse window thường rơi vào 2am-8am giờ VN (Lilith set theo giờ UTC, thường không thuận tiện cho player Việt). Manual player: ngủ qua. Bot: không biết ngủ.

## Eclipse Buff — Mechanics Chi Tiết

### Trigger Condition

Day of Darkness eclipse không phải manual trigger. Lilith set thời gian cố định — thường **ngày 7-8 KvK** (giữa Phase 2). Eclipse kéo dài chính xác 360 phút.

Countdown xuất hiện trên event panel 2h trước.

### Buff Stack Calculation

Với bot V2 đang chạy combo spam luring AOE trong eclipse:

- Base kill points: 1 barb lv30 = ~300 honor
- Eclipse honor bonus +30%: 300 × 1,3 = **390 honor/barb**
- Attack buff +20%: kill speed tăng, barb chết nhanh hơn ~20%

Effective honor/giờ trong eclipse vs ngoài eclipse:

| Scenario | Barb/giờ | Honor/giờ |
|---|---|---|
| Ngoài eclipse (V2) | ~9 | ~2.700 |
| Trong eclipse (V2) | ~11 | ~4.290 |
| **Delta eclipse** | +22% | **+59%** |

6 tiếng eclipse = **25.740 honor thêm** cho V2 so với 6 tiếng thường — chỉ từ eclipse timing.

> 🤖 V2 tự detect eclipse window và tăng chain intensity — honor/giờ spike 59% trong 6 tiếng. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Kill Strategy Trong Eclipse

### Ưu Tiên 1: Barb Chain Full Speed

Eclipse window: KHÔNG rally fort, KHÔNG gather rss. Tất cả dồn vào barb chain — từng phút có giá trị.

Bot V2 tự switch từ balanced mode sang **pure chain mode** khi detect eclipse active. Gather march recalled, hospital on standby, 100% AP vào barb chain.

### Ưu Tiên 2: Barb Fort Rally (Nếu Có Rally Captain)

Barb fort lv5-6 trong eclipse: honor spike **lên đến 13.000** per rally (base 8.000 × 1,3 eclipse bonus × alliance bonus).

Nếu alliance có rally captain available: 1 rally fort lv6 trong eclipse = 13.000 honor. Bot tự reinforce rally khi captain trigger.

### Ưu Tiên 3: Enemy Kill

PvP kill trong eclipse: honor multiplier 1,5x × eclipse 1,3x = **1,95x honor per enemy troop killed**. Nhưng PvP risk cao — mày có thể mất troops đắt tiền.

Khuyên: PvP trong eclipse chỉ nếu target rõ ràng (enemy không shield, march không có rally backup). Bot không tự initiate PvP — đây là human decision.

## Day of Darkness Reward Structure

Ngoài eclipse buff, Day of Darkness có separate reward track:

| Milestone | Kill Points | Reward |
|---|---|---|
| Basic | 5.000 | 500 gem + speedup 3h |
| Intermediate | 15.000 | 1.000 gem + speedup 8h × 3 |
| Advanced | 30.000 | 2.000 gem + gold key × 5 |
| Elite | 60.000 | 4.000 gem + commander sculpture |
| **Ultimate** | **100.000** | **8.000 gem + legendary equipment** |

Kill points trong Day of Darkness = honor từ tất cả combat trong event window (không chỉ eclipse 6h).

V2 bot trong event window 24h:
- Eclipse 6h: ~25.740 honor
- Non-eclipse 18h: ~2.700 × 18 = ~48.600 honor
- **Tổng: ~74.340 honor/day** — gần Elite threshold từ 1 ngày

> 🤖 V2 farm kill points cả ngày Day of Darkness — spike trong eclipse, maintain pace ngoài eclipse. [Xem V2 →](/#packages).

## Pre-Eclipse Preparation

### 2h Trước Eclipse

1. **Hospital clear**: heal tất cả wounded troops trước eclipse — không để hospital đầy khi eclipse mở
2. **AP stockpile**: check AP regen, dùng AP potion nếu có để start eclipse với full AP
3. **Commander check**: confirm pair đang dùng là optimal cho peacekeeping

Bot V2 tự execute preparation checklist này khi detect eclipse countdown < 2h.

### Trong Eclipse (Hour-by-Hour)

**Giờ 1**: Full throttle barb chain — streak counter build up
**Giờ 2-4**: Streak max (+25% bonus thêm), duy trì pace
**Giờ 5**: Bắt đầu monitor AP — nếu low, trigger AP potion reserve
**Giờ 6**: Final push — dump tất cả AP còn lại

Bot không cần human intervention trong 6 tiếng này.

## Eclipse Miss Penalty

Nếu ngủ qua eclipse (6 tiếng không active):

- Honor miss: ~25.740 honor (V2 rate)
- Kill points miss: 25.740 points → có thể miss Advanced → Elite tier jump
- Reward miss: ~1.000-2.000 gem khác biệt giữa tiers

25.740 honor trong 6 tiếng = **~1,5 ngày farming thường** để bù lại. Miss 1 eclipse = cần 1,5 ngày làm bù.

Bot: không miss eclipse bất kể múi giờ.

## FAQ

### Day of Darkness có kết hợp với Light & Darkness KvK không?
Có. Trong Light & Darkness KvK, Day of Darkness eclipse ở Darkness Zone nhân thêm 1,8x zone multiplier — tổng honor multiplier: **1,3 × 1,8 = 2,34x**. Cực kỳ mạnh.

### Bot có tự dùng AP potion trong eclipse không?
Bot V2 có thể configured để auto-use AP potion trong eclipse window nếu AP < threshold. Default: không auto-use — mày set inventory threshold.

### Kill points từ event có count về cuối KvK không?
Day of Darkness kill points là separate event track — không cộng vào KvK personal honor rank. Nhưng barb chain honor vẫn count vào KvK honor board.

## Bắt Đầu Day of Darkness Với V2

**V2 Cao Cấp 900.000đ/tháng**:
- Auto-detect eclipse window, switch pure chain mode
- +59% honor/giờ trong 6h eclipse
- Auto heal + resume — không break stride

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [KvK Phase 2 Field of Honor Strategy RoK 2026](/blog/kvk-phase-2-field-of-honor-strategy-rok-2026)
- [Mightiest Governor Event Setup RoK 2026](/blog/mightiest-governor-event-setup-rok-2026)
- [Light & Darkness KvK Guide RoK 2026](/blog/light-darkness-kvk-guide-rok-2026)
  `,
};
