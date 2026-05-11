import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "defense-troop-composition-garrison-rok-2026",
  title: "Defense Troop Composition Garrison RoK 2026 — 60/30/10 Match Counter",
  description: "Garrison troop composition RoK 2026: tại sao 60/30/10 Infantry/Archer/Cavalry là defensive optimal, counter composition theo enemy rally type, và V3 bot auto-recompose garrison theo intelligence địch.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Garrison Composition — Không Phải "Đổ Hết Vào Defend"

Mày bị rally. Panic. Đổ hết troops vào garrison không quan tâm loại. 200.000 cavalry trong garrison khi địch dùng archer rally = cavalry bị counter 1.3× thiệt hại.

Garrison không phải "nhiều = tốt." Đó là **composition equation** — sai loại troop trong garrison có thể tệ hơn ít troop nhưng đúng loại.

## Rock-Paper-Scissors Garrison — Mechanics

Troop counter trong RoK garrison:

- **Infantry counter Cavalry**: Infantry nhận damage từ Cavalry thấp hơn ~25-30%
- **Cavalry counter Archer**: Cavalry kháng Archer hit đáng kể
- **Archer counter Infantry**: Archer gây thêm damage lên Infantry blocks

Garrison composition lý tưởng: **không để địch có counter advantage hoàn toàn** vào bất kỳ troop type nào của mày.

## 60/30/10 — Tại Sao Là Standard

Ratio Infantry/Archer/Cavalry = 60/30/10 cho garrison defense tạo:

1. **Infantry 60%**: bulk HP, highest defense stat, tank rally frontline
2. **Archer 30%**: ranged damage không bị counter bởi cavalry rally (vì cavalry trong garrison ít)
3. **Cavalry 10%**: counter archer sub-march trong rally, đủ để không bị ignored

Địch rally bằng cavalry: counter mày 10% cavalry thôi, nhưng infantry 60% tank tốt.
Địch rally bằng archer: archer 30% của mày không bị counter, infantry 60% absorb.
Địch rally bằng infantry: cavalry 10% counter infantry, archer 30% punish.

**Không có composition nào bị counter hoàn toàn** khi dùng 60/30/10.

> 📌 Xem thêm: [City Hall 25 Speedrun RoK 2026](/blog/city-hall-25-speedrun-rok-2026) — CH 25 unlock troop training slots cần cho composition đủ đầy.

## Counter Composition Theo Enemy Intelligence

Bot V3 intelligence: detect rally type của địch trước khi rally hit → auto-adjust garrison.

| Enemy Rally Type | Optimal Counter Garrison |
|---|---|
| Cavalry heavy (Mehmed, Attila) | Tăng Infantry lên 70%, giảm Cavalry xuống 5% |
| Archer heavy (YSG, Ramesses) | Tăng Cavalry lên 20-25%, giảm Infantry xuống 50% |
| Infantry heavy (Guan Yu, Trajan) | Tăng Archer lên 40%, giảm Infantry xuống 45% |
| Mixed (multiple commanders) | Giữ 60/30/10 standard |

> 📌 Xem thêm: [T4 vs T5 Mix Troop Strategy RoK 2026](/blog/t4-vs-t5-mix-troop-strategy-rok-2026) — garrison nên ưu tiên tier nào.

## Troop Tier Trong Garrison — T4 hay T5?

**Garrison recommend: mix T4/T5.**

Lý do: khi garrison bị đánh, troops wounded → vào hospital. Hospital capacity fixed. Nếu 100% T5 trong garrison → heal cost per wound rất cao.

Mix T4/T5 garrison:
- T5 làm core tanker (high HP/Def)
- T4 làm filler (nhiều hơn, hospital cost thấp hơn)

Khi garrison bị break một phần: T4 bị wound trước → T5 core vẫn còn chiến.

> 📌 Xem thêm: [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026) — garrison loss → heal demand tính trước.

## Commander Garrison Setup — Pair Theo Troop Type

| Garrison Commander | Troop Type Boost | Best Pair |
|---|---|---|
| Charles Martel | Infantry Defense +35% | Constantine (support) |
| Trajan | Mixed Defense | Richard I |
| Richard I | Infantry HP + Defense | Trajan |
| Constantine | Healing + Defense | Charles Martel |

**Standard garrison pair: Charles Martel + Constantine** — infantry defense phối healing aura. Free pair F2P, không cần whale.

Pair whale: **Richard I + Trajan** — max Defense tổng cho garrison với mixed troop type. +20% over Martel + Constantine trong long rally defense.

> 📌 Xem thêm: [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026) — garrison defense dài = hospital drain, plan food trước.

> 🤖 Bot V3 detect rally type incoming, auto-recompose garrison troop trong 30-60 giây trước rally hit. Không cần mày online 3am khi địch rally. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Wall Garrison vs Open Field Garrison

Khi defend city: **garrison troop là tất cả**, vì mày không ra ngoài fight.

Khi defend flag/holy site: troop composition khác — cần thêm cavalry march speed để reinforce nhanh. 60/30/10 vẫn đúng cho troop trong garrison, nhưng march đến reinforce nên ưu tiên cavalry.

> 📌 Xem thêm: [City Hall Levels 16/21/25 Guide RoK 2026](/blog/city-hall-levels-16-21-25-guide-rok-2026) — garrison capacity tăng theo CH level.

## FAQ

### Nếu không có đủ infantry cho 60%, làm gì?

Tạm thời: tăng archer lên bù, không để garrison dưới 50K troops. Nhưng ưu tiên train infantry ngay. Infantry là trụ cột garrison — không có infantry đủ = garrison yếu bất kể composition ratio.

### Có thể dùng cavalry làm garrison chính không?

Không recommended. Cavalry garrison bị archer rally counter nặng. Cavalry tốt nhất là open field và reinforcement speed — không phải static garrison defender.

### Garrison capacity có giới hạn không?

Có — wall level quyết định max garrison capacity. Wall lv 25 = garrison tối đa. Troop vượt capacity không vào được garrison, đứng ngoài thành → bị kill trước khi vào defend.

## Bắt Đầu

Garrison composition: 60% Infantry / 30% Archer / 10% Cavalry. Commander pair: Charles Martel + Constantine (F2P) hoặc Richard I + Trajan (whale). Bot V3 tự động adjust theo rally type incoming.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [T4 vs T5 Mix Troop Strategy RoK 2026](/blog/t4-vs-t5-mix-troop-strategy-rok-2026)
- [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026)
- [City Hall Levels 16/21/25 Guide RoK 2026](/blog/city-hall-levels-16-21-25-guide-rok-2026)
  `,
};
