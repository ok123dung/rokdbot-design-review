import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "troop-matchup-chart-cavalry-archer-infantry-rok-2026",
  title: "Troop Matchup Chart Cavalry/Archer/Infantry RoK 2026 — Sai Match = -30%",
  description: "Troop matchup chart RoK 2026: cavalry vs archer vs infantry counter mechanics, death rate thực tế khi sai match, khi nào dùng loại nào trong KvK open field vs rally vs garrison. Sai match = mất 30% army không cần thiết.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Sai Match — Mất 30% Army Không Phải Vì Kém Skill

Bạn có 1M T5 Cavalry, đánh vào 1M T5 Infantry của địch. Tỷ số: bạn không nên thua nhiều. Nhưng bạn mất 400.000 troops trong khi địch mất 280.000.

Lý do: **Infantry counter Cavalry** trong Rise of Kingdoms. Bạn vừa trao cho địch 30% free damage advantage.

Rise of Kingdoms có **rock-paper-scissors troop system** được nhiều player underestimate. Đây không phải lore flavor — đây là **hard-coded damage modifier** ảnh hưởng trực tiếp đến death rate.

## The Counter Triangle

| Troop Type | Counter | Countered By |
|---|---|---|
| **Cavalry** | Archer | Infantry |
| **Archer** | Infantry | Cavalry |
| **Infantry** | Cavalry | Archer |

Đọc theo chiều: Cavalry đánh Archer mạnh hơn bình thường (+%), bị Infantry đánh đau hơn bình thường (%).

## Damage Modifier Thực Tế — Con Số Cụ Thể

Counter match trong RoK 2026 (data từ community testing, không phải game tooltip):

- **Có lợi match** (ví dụ Cavalry đánh Archer): khoảng **+15-20% damage dealt, -10-15% damage received**
- **Bất lợi match** (ví dụ Cavalry đánh Infantry): khoảng **-15-20% damage dealt, +15-20% damage received**
- **Neutral match** (same type): baseline, không modifier

Kết hợp hai chiều: favorable match = **+25-35% effective advantage**. Unfavorable = **-25-35%**.

Đây là nguồn gốc của con số -30%: **không phải modifier đơn thuần**, mà là kết quả của bất lợi 2 chiều cộng lại.

## Khi Nào Dùng Loại Nào — Field Guide

### Open Field Battle (March vs March)

Không biết địch dùng gì? **Mixed army** là safer. Nhưng nếu biết composition địch:

- Địch dùng Archer chính: gửi **Cavalry** — lợi thế rõ ràng
- Địch dùng Cavalry chính: gửi **Infantry** — tanky và counter
- Địch dùng Infantry chính: gửi **Archer** — range damage từ xa

> 📌 Xem thêm: [Best Troop Types KvK RoK 2026](/blog/best-troop-types-kvk-rok-2026) cho meta analysis toàn diện hơn.

### Rally Attack

Rally chủ yếu là **Archer meta** trong 2025-2026. Lý do: YSG (Yi Seong-Gye) và similar high-damage archer commanders có AOE trong rally = wipe garrison nhanh. Infantry rally tốt hơn khi target là fortified city có Infantry garrison.

### Garrison Defense

**Infantry là garrison meta** — high HP, defense buff trong garrison, và game có passive buff cho Infantry defending. Nếu garrison có Archer-heavy → defender bất lợi khi bị Cavalry attack.

### KvK Flag Defense

**Infantry + Cavalry mix 60/40** là standard cho flag defense. Lý do: địch thường có mixed army khi attack flag, không có clear counter advantage. Garrison defense buff bù đắp type disadvantage.

> 📌 Xem thêm: [Garrison Troop Composition RoK 2026](/blog/garrison-troop-composition-rok-2026) cho exact ratio tối ưu.

## Scouting Trước Battle — Critical Step

Sai match 90% xảy ra vì **không scout trước**. Scout cost 10 minutes và 1 march slot. Không scout = gamble 30% army.

Scout reveals:
- Troop composition của garrison (%)
- Commander pair
- City buff (research level estimation)

Với data scout: gửi đúng counter type, commander pair phù hợp = từ -30% disadvantage thành +25-30% advantage. Swing **55-60%** trong single decision.

## Troop Type vs Commander Synergy

Counter system nhân với **commander synergy**:

| Scenario | Multiplier |
|---|---|
| Counter type + matching commander | +40-50% effective |
| Neutral type + matching commander | +15-25% effective |
| Wrong type + matching commander | -10-20% effective |
| Counter type + wrong commander | +10-15% effective |

Worst case: wrong type + wrong commander = có thể mất 50%+ disadvantage. Top KvK players không bao giờ march mà thiếu cả hai.

> 🤖 Bot V3 tự detect scout data, assign đúng troop type, điều phối march timing trong KvK. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## FAQ

### Mixed army có phải luôn safe không?

Mixed army safe hơn wrong type nhưng không optimize advantage khi biết composition địch. Mixed thường tối ưu cho **flag attack/defense** (địch cũng mixed). Cho open field 1v1, pure counter type tốt hơn.

### T4 counter type có thắng T5 sai type không?

Có thể. T4 Cavalry (favorable) vs T5 Infantry (unfavorable): gap 30% type + khoảng 30% T5 stat advantage → gần neutral. T4 Cavalry sẽ không thắng dễ nhưng không thua nặng. Với commander skill gap thêm vào, kết quả khó predict.

### Siege troop có counter system không?

Siege không participate combat trực tiếp trong march (chỉ dùng trong rally/siege). Không có type counter cho Siege.

## Bắt Đầu

Match đúng type là **free** advantage — không cần gem, không cần whale. Chỉ cần biết và execute nhất quán. Trong KvK 14 ngày × nhiều battle, mỗi wrong match = accumulated army loss không đáng.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Best Troop Types KvK RoK 2026](/blog/best-troop-types-kvk-rok-2026)
- [Garrison Troop Composition RoK 2026](/blog/garrison-troop-composition-rok-2026)
- [Troop Training T1 vs T5 Efficiency RoK 2026](/blog/troop-training-t1-vs-t5-efficiency-rok-2026)
- [Reinforcement Troops Timing RoK 2026](/blog/reinforcement-troops-timing-rok-2026)
  `,
};
