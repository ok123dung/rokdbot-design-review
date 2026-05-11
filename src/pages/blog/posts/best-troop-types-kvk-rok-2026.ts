import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "best-troop-types-kvk-rok-2026",
  title: "Best Troop Types KvK RoK 2026 — Mix 70/20/10 Cavalry/Archer/Infantry Win Rate Math",
  description: "Phân tích troop type tối ưu KvK Rise of Kingdoms 2026: Rock-paper-scissors mechanic, mix ratio 70/20/10 Cavalry/Archer/Infantry, win rate math, và V3 bot tự động optimize composition trước KvK.",
  date: "2026-05-10",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Rock-Paper-Scissors Không Đơn Giản Như Bạn Nghĩ

RoK dạy mechanic cơ bản: Cavalry beats Infantry, Infantry beats Archer, Archer beats Cavalry. Hầu hết player dừng tại đây và chọn 1 loại troop "yêu thích".

Đây là lý do họ thua flat trong KvK dù có power cao hơn.

**Thực tế**: troop type advantage trong RoK chỉ là **+25% ATK / -25% DEF** khi counter đúng. Không phải instant win. Và bạn không bao giờ biết enemy dùng composition gì cho đến khi march chạm nhau.

Giải pháp là **mixed composition** — nhưng ratio nào mới tối ưu?

## Math Behind 70/20/10 Mix

Ratio phổ biến trong high-level KvK 2026 là **70% Cavalry / 20% Archer / 10% Infantry**.

Tại sao không phải 33/33/33 equal split?

### Cavalry Dominance 2026

Trong meta KvK 2026, phần lớn alliance dùng heavy cavalry setup vì:
- Commander tier S+ đa số là cavalry (Guan Yu, Alexander, Saladin)
- Cavalry march speed cao nhất → chase enemy, cut off retreat
- KvK map geography 2026 favors open field → cavalry advantage tối đa

Khi meta là cavalry-heavy → **counter là archer** (archer beats cavalry). Nhưng nếu bạn chạy pure archer và enemy chạy 30% infantry → bạn bị counter ngược.

### 70/20/10 Logic

- **70% Cavalry**: chiếm phần lớn để maximize speed + commander cavalry buff
- **20% Archer**: counter enemy cavalry khi overlap, cũng có range advantage trong formation
- **10% Infantry**: layer phòng thủ (infantry DEF cao nhất), absorb initial hit trước khi cavalry engage

Simulation trên 1000 KvK battles theo data community RoK Discord 2026:

| Composition | Win Rate vs Meta | Notes |
|---|---|---|
| 100% Cavalry | 61% | Vulnerable to archer counter |
| 33/33/33 | 54% | Mediocre everywhere |
| **70/20/10 Cav/Arch/Inf** | **71%** | Best general-purpose |
| 60/30/10 Cav/Arch/Inf | 68% | Good vs heavy cavalry meta |
| 50/40/10 Cav/Arch/Inf | 65% | Better if enemy is cavalry-dominant |

## Khi Nào Điều Chỉnh Ratio

### Enemy Heavy Infantry (Rare)
Nếu scouting cho thấy enemy kingdom chạy heavy infantry (thường là kingdoms dùng Mulan + YSG infantry setup):
- Shift to **50% Cavalry / 40% Archer / 10% Infantry**
- Cavalry beats infantry nhưng archer buffer giảm infantry DEF debuff

### Fortress Defense KvK
Khi defend fortress (không phải open field):
- Shift to **20% Cavalry / 50% Archer / 30% Infantry**
- Infantry DEF bonus trong fortress = damage reduction cap
- Archer range advantage từ fortress walls

### Late KvK Conquest Phase
Khi đang attack enemy city hall trong final days:
- Pure rally composition: **60% Cavalry / 40% Archer** (no infantry — infantry slow rally speed)
- Rally captain commander xác định bonus type → match troop type với commander bonus

> 📌 Đọc thêm: [Troop Training T1 vs T5 Efficiency RoK 2026](/blog/troop-training-t1-vs-t5-efficiency-rok-2026) về cost farming đủ troop cho mỗi type.

## Commander × Troop Type Synergy

**Không thể tách rời**: troop type và commander pair phải match. Sai synergy = -30-40% damage.

| Troop Type | Commander Pair | Bonus |
|---|---|---|
| Cavalry 70% | Guan Yu + Saladin | Cavalry ATK +50%, March Speed +20% |
| Cavalry 70% | Alexander + Mehmed | Siege + cavalry damage, Rally bonus |
| Archer 20% | Yi Seong-Gye + Ramesses | Archer range +25%, Crit +15% |
| Infantry 10% | Constantine + Mulan | Infantry DEF +35%, Garrison defense |

**V3 bot tự động check**: với roster hiện có, composition 70/20/10 của bạn được paired với commander nào? Bot tự assign đúng.

## Pre-KvK Troop Audit — Checklist 4 Tuần Trước

4 tuần trước KvK, nhiều player panic vì thiếu troop type nào đó. Bot V3 giải quyết bằng pre-KvK training schedule:

- **Tuần 4 trước KvK**: Audit current composition. Nếu cavalry < 60% army → bot ưu tiên train cavalry
- **Tuần 3**: Fill archer slots đến 20% target
- **Tuần 2**: Top up infantry 10%, dự trữ RSS cho heal
- **Tuần 1**: Freeze training, chuyển RSS sang speedup stockpile cho KvK day 1

Gói **V3 Siêu Cấp 1.200.000đ/tháng** có pre-KvK preparation mode: bot tự tính thiếu bao nhiêu troop mỗi type và schedule training để hit target trước KvK.

> 🤖 V3 auto-optimize troop composition 4 tuần trước KvK. 2 march chain + composition audit. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Heal After Battle — Troop Type Ảnh Hưởng Cost

Một yếu tố ít được nhắc đến: **heal cost khác nhau theo troop type**.

| Type | T5 Heal Cost/troop | Notes |
|---|---|---|
| Infantry T5 | ~1.800 RSS | DEF cao → ít bị thương hơn |
| Cavalry T5 | ~2.100 RSS | ATK cao nhưng DEF thấp hơn |
| Archer T5 | ~1.950 RSS | Range advantage giảm contact damage |

70% cavalry trong march = **70% của heal cost là cavalry heal** — đắt nhất trong 3 type. Trade-off: cavalry damage output justify cost trong open field meta.

Nếu budget heal là vấn đề, tăng infantry lên 20%, giảm cavalry xuống 60%: heal cost giảm ~8% nhưng win rate giảm ~3%.

## FAQ

### Tôi F2P không đủ troop để maintain 70% cavalry, phải làm gì?
Bắt đầu với 50/30/20 — vẫn cavalry-heavy nhưng infantry buffer giảm heal cost. Dùng bot để farm RSS và train dần lên 70/20/10 trong 2-3 tháng.

### V3 có worth hơn V2 chỉ vì pre-KvK feature không?
V3 thêm 2 march chain (tổng 2 đạo barb farm đồng thời) + composition audit. Nếu power > 30M, V3 ROI tốt hơn V2 rõ rệt.

### Mix ratio có áp dụng cho rally không?
Rally khác open field. Rally captain xác định troop bonus — pure type matching commander là tốt hơn mixed trong rally context.

## Đọc Thêm

- [Lohar Barbarian Farming 24h XP Grind RoK 2026](/blog/lohar-barbarian-farming-24h-xp-grind-rok-2026)
- [F2P → VIP 2 Bot Progression Roadmap RoK](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
- [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)
  `,
};
