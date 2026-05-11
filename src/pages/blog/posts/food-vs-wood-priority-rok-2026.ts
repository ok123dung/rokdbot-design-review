import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "food-vs-wood-priority-rok-2026",
  title: "Food vs Wood Priority RoK 2026 — Khi Nào Stockpile Cái Nào",
  description: "Food vs Wood priority RoK 2026: khi nào stockpile food, khi nào ưu tiên wood, phase game ảnh hưởng priority thế nào, và bot V1 auto-switch gather type theo build queue + train queue của bạn.",
  date: "2026-05-10",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Câu Hỏi Mà Mọi Player Tự Hỏi Ít Nhất 1 Lần Mỗi Tuần

"Mình nên farm food hay wood bây giờ?"

Không có câu trả lời đúng tuyệt đối. Có **framework đúng** để quyết định. Và phần lớn player không có framework đó — họ farm theo quán tính, không theo data.

Kết quả: warehouse food 9M/10M cap đang chảy máu, trong khi build queue stuck vì thiếu wood. Hoặc ngược lại: wood đầy, hospital cần heal 500.000 troops nhưng không có food.

## Food: Khi Nào Nó Là King

Food là resource **most consumed** trong 3 use case:

### 1. Troop Training

Mỗi T4 troop tốn khoảng **4.500-5.500 food** tùy race. Train 100.000 T4 = **450-550M food**. Đây là food sink lớn nhất game.

Nếu bạn đang phase **active training** (trước KvK, sau KvK recover), food priority phải là #1.

### 2. Hospital Healing

Heal troop tốn food. Với 500.000 wounded troops sau 1 KvK battle: khoảng **200-300M food** để heal full. Miss food = troops stay wounded = power drop = không train được thêm vì hospital cap.

> 📌 Xem thêm: [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026) để biết heal cycle và food requirement chính xác.

### 3. Barbarian Farming

Tấn công barb tốn AP, AP restore tốn food. Nếu đang farm Honor tích cực: **food drain từ AP restore** là đáng kể.

**Food priority: HIGH khi** training active, healing post-battle, farming barb intensive.

## Wood: Khi Nào Nó Là Priority

Wood là resource **most consumed cho building và research**:

### 1. Building Queue

Từ City Hall 16 trở lên, mỗi upgrade tốn **50-200M wood** tùy building type. Farm build có nhiều wood requirement hơn food ở late game.

> 📌 Xem thêm: [T5 Unlock Requirements RoK 2026](/blog/t5-unlock-requirements-rok-2026) để biết exact cost wood/food cho City Hall 25.

### 2. Research Queue

Academy research cũng tốn wood đáng kể, đặc biệt economy branch và military branch tier cao.

### 3. Training Wood Cost

T5 troop training tốn **nhiều wood hơn T4** (tỷ lệ wood:food đảo ngược so với T4). Nếu đang rush T5: wood priority lên cao đột ngột.

**Wood priority: HIGH khi** build queue active, research rushing, training T5.

## Phase-Based Priority Framework

| Phase Game | Food Priority | Wood Priority | Lý Do |
|---|---|---|---|
| Early game (CH 1-15) | HIGH | HIGH | Cả hai đều cần cân bằng |
| Mid game (CH 16-20) | MEDIUM | HIGH | Building rush cần wood nhiều |
| Pre-KvK | HIGH | MEDIUM | Train max troops cần food |
| KvK active | HIGH | LOW | Heal + AP restore, không build |
| Post-KvK recover | HIGH | MEDIUM | Heal troops + resume build |
| T5 unlock phase | MEDIUM | HIGH | T5 research + training wood heavy |

## Stone và Gold — Đừng Quên

Food và wood là priority debate chính, nhưng:

- **Stone**: critical cho wall + watchtower trong KvK. Mid game neglect stone = late game pay dearly.
- **Gold**: hardest to farm, always bottleneck research. Never let gold tile go unwatched.

> 📌 Xem thêm: [RSS Market Trade Strategy RoK 2026](/blog/rss-market-trade-strategy-rok-2026) — khi nào nên trade thay vì tự farm từng loại.

## Warehouse Cap — The Silent Killer

Warehouse cap 10M/resource (có thể upgrade). Khi cap full, tile tiếp tục produce nhưng **không vào warehouse** — lost production.

Math kinh khủng: tile Lv 5 produce 330.000 food/giờ. Warehouse full food, bạn ngủ 8 tiếng = **2.64M food mất trắng** vào không khí.

Giải pháp: luôn giữ warehouse của resource bạn KHÔNG đang ưu tiên ở 50-60% cap để có buffer cho night farm. Bot V1 monitor warehouse và auto-switch gather type khi một loại đạt 80% cap.

## Bot V1 Auto-Switch Gather Type

Gói **V1 750.000đ/tháng** config được:

- **Build queue reader**: detect building đang queue cần resource gì → ưu tiên gather resource đó
- **Train queue reader**: detect train queue cần food/wood → auto-shift march allocation
- **Warehouse cap monitor**: khi food 80% cap và wood 40% → shift 2 food march sang wood
- **Hospital reader**: troops vào hospital → auto-increase food gather priority

Bạn không cần manually check và switch mỗi ngày. Bot tự làm theo context.

> 🤖 V1 auto-switch food/wood gather theo build queue và train queue real-time. [Xem V1 →](/#packages) · 750.000đ/tháng.

## FAQ

### Tôi nên giữ bao nhiêu food trong warehouse?

Minimum buffer: đủ heal 100% hospital capacity 1 lần + 2 ngày training. Với hospital 200.000 capacity và T4 training 5.000 food/troop × 10.000 train/ngày = cần minimum **1.5-2M food buffer**.

### Nếu warehouse full cả food lẫn wood thì sao?

Trade surplus sang alliance member (xem RSS Market Trade Strategy) hoặc speed-train troops để tiêu food. Full warehouse = wasted gathering time.

### V1 có tự động trade khi warehouse full không?

Không tự trade mà không có config. V1 có warehouse alert và auto-pause gather loại đã full, chuyển sang loại khác. Trade phải được config riêng.

## Bắt Đầu

Food vs wood không phải câu trả lời cố định — đó là **dynamic allocation** theo game state. Bot V1 đọc game state liên tục và thực hiện allocation đó 24/7 thay bạn.

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [RSS Market Trade Strategy RoK 2026](/blog/rss-market-trade-strategy-rok-2026)
- [Farm 1.000.000 RSS/Giờ Setup RoK 2026](/blog/farm-1000-rss-per-hour-setup-rok-2026)
- [Troop Training T1 vs T5 Efficiency RoK 2026](/blog/troop-training-t1-vs-t5-efficiency-rok-2026)
- [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026)
  `,
};
