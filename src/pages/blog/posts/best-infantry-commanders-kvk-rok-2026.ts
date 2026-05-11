import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "best-infantry-commanders-kvk-rok-2026",
  title: "Top 7 Infantry Commanders KvK 2026 — Charles Martel, Richard I, Trajan + Pet Pairing",
  description: "7 infantry commanders tốt nhất KvK RoK 2026: tier S+ đến A, pet pairing tối ưu, open field vs garrison, và bot V3 rotation tự động cho max honor farming.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## 3 đêm KvK bị wipe liên tục vì dùng sai infantry commander — đây là bài học

Một player power 42M kể: KvK Season 8 mở, đạo infantry của anh dùng Constantine + Leonidas — pair S+ từ năm ngoái. 3 đêm liên tục bị cavalry Mehmed II đối phương wipe sạch trước khi kịp cast skill.

Lý do? Season 8 thay đổi counter system: cavalry giờ có damage bonus 15% vs infantry khi infantry troop count dưới 30%. Pair Constantine + Leonidas thiếu healing passive → troop count drop nhanh → cavalry counter stack → wipe.

Đây là tier list infantry **đúng cho Season 8**.

## Top 7 Infantry Commanders 2026

### #1 — Charles Martel (S+)
**Tại sao S+**: Passive shield hấp thụ 10% damage mỗi 5 giây — không infantry nào có survivability cao hơn. Active skill 4-target AOE kèm defense buff 2 vòng.

- **Pair tốt nhất**: Richard I (double healing), Trajan (tank AOE)
- **Pet pairing**: Troll (+12% infantry defense) — không pair Hawk/Dragon vào infantry build
- **Dùng khi**: Defend flag KvK, chặn cavalry wave tier 5

### #2 — Richard I (S+)
**Đặc điểm**: Healing passive mạnh nhất infantry — 8% per 10s. Troops sống lâu hơn 40% trong sustained combat. Active skill debuff target defense 25%.

- **Pair tốt nhất**: Charles Martel (double tank), Sun Tzu (damage + debuff)
- **Pet pairing**: Troll (+12% defense) hoặc không pet (economize)
- **Dùng khi**: Open field sustained fight, KvK phase 3 attrition war

### #3 — Trajan (S)
**Điểm mạnh Season 8**: AOE skill range tăng sau buff tháng 3 — giờ đứng S thay vì A. Trajan + Theodora là pair tốt nhất cho F2P infantry (không cần whale).

- **Pair tốt nhất**: Theodora (AOE synergy), Charles Martel (tank + AOE)
- **F2P factor**: Expertise Trajan cần 90 ngày farm barb — khả thi với bot V3 24/7

> 🤖 Bot V3 farm rợ 24/7 để expertise Trajan trong 90 ngày thay vì 270 ngày. [Xem V3 →](/#packages) · 1.200.000đ/tháng.

### #4 — Sun Tzu (S)
F2P commander mạnh nhất game — universal pair với mọi infantry S+ tier. Active skill AOE medium, debuff defense stack với Richard passive.

| Pair | Damage | Survival | Farm rợ | KvK |
|---|---|---|---|---|
| Martel + Richard | A | S+ | A | S+ |
| Trajan + Theodora | B | A | S | A |
| Sun Tzu + Martel | S | S | S+ | S |
| Richard + Sun Tzu | A | S+ | A | S |

### #5 — Mulan (A)
Season 8 thêm female commander buff: +8% attack khi pair với female commander khác. Mulan + Wu Zetian = pair niche nhưng damage burst cực cao trong 30 giây đầu combat.

### #6 — Leonidas I (A)
Garrison specialist — khi defend flag, passive +20% defense stacks infinitely với troop attrition. **Không dùng open field** (passive không trigger khi attack).

### #7 — Scipio Africanus (A)
New Season 8 pick: passive debuff enemy cavalry defense 12% khi infantry đang combat. Dùng specifically để counter Mehmed + Cao Pi pair.

## Pet Pairing cho Infantry 2026

| Pet | Stat | Infantry Fit |
|---|---|---|
| Troll | +12% infantry defense | S+ — luôn dùng |
| Hawk | +15% skill range | C — không synergy |
| Dragon | +20% rage gen | B — optional |
| Bear | +8% infantry attack | A — open field build |

**Kết luận**: Troll là pet infantry mandatory. Nếu chưa có Troll, Bear là option thứ 2.

> 🤖 Bot V3 AI Rotation nhận diện pet + commander → điều chỉnh timing cast tự động. Không config tay. [Dùng thử →](/#packages).

## Infantry vs Cavalry meta Season 8: Sự thật

Season 8 cavalry meta KHÔNG có nghĩa infantry vô dụng. Infantry là **must-have** trong 2 situation:

1. **KvK phase 2-3 (attrition)**: Cavalry burn AP quá nhanh, infantry sustained fight tiết kiệm 35% AP cùng combat time
2. **Defend flag + garrison**: Infantry passive defense + Leonidas/Martel shield = cavalry không crack được trong 10 phút

Bot V3 tự nhận diện phase KvK và switch rotation infantry/cavalry phù hợp.

## F2P Path đến S+ Infantry

- **Ngày 1-30**: Farm expertise Sun Tzu + Trajan bằng barb chain basic
- **Ngày 31-60**: Unlock Richard I qua silver chest (500 medals)
- **Ngày 61-90**: Charles Martel expertise — cần bot V3 24/7 farm 90 ngày liên tục

Với bot V3 chạy 2 đạo barb chain 24/7, expertise timeline giảm còn 60 ngày thay vì 180 ngày.

## Đọc tiếp:
- [AI Commander V3 Talent Tree Optimization Meta 2026](/blog/ai-commander-v3-talent-tree-optimization-meta-2026)
- [Mixed Army Commander Setup RoK 2026](/blog/mixed-army-commander-setup-rok-2026)
- [F2P to VIP2 Bot Progression Roadmap](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
  `,
};
