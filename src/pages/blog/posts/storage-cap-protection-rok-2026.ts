import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "storage-cap-protection-rok-2026",
  title: "Storage Cap Protection RoK 2026 — Warehouse Safe Amount Tránh Bị Cướp",
  description: "Storage cap protection RoK 2026: warehouse safe amount theo level, pillage mechanics, cách tính resource nào cần consume trước để tránh mất, và V1 bot tự động spend resource đúng thời điểm.",
  date: "2026-05-10",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Mày Đang Nuôi Địch Không Biết

Địch attack city mày. Sau battle, một phần resource trong city bị pillage. Mày nghĩ: "ít thôi, không sao".

Nhưng nếu mày có 10.000.000 food trong city, chỉ 1.200.000 được warehouse protect → địch lấy **8.800.000 food** trong 1 rally.

Đó là ~11 ngày farm RSS tile mất trong 4 phút battle.

Bài này cho mày cách tính chính xác: bao nhiêu resource an toàn, resource nào cần spend trước, và bot manage thế nào để không bị pillage.

## Pillage Mechanics: Địch Lấy Được Gì?

Khi địch rally city mày và win:
- Pillage rate: **~30%** của tổng resource trên city (không phải protected amount)
- Protected amount: warehouse capacity của mày
- Pillage chỉ lấy resource **vượt quá** warehouse protection

### Công Thức Pillage

**Resource bị lấy = (Total resource - Warehouse cap) × 30%**

Ví dụ:
- Food trong city: 10.000.000
- Warehouse lv25 food cap: 1.200.000
- Unprotected food: 10.000.000 - 1.200.000 = 8.800.000
- Pillage amount: 8.800.000 × 30% = **2.640.000 food bị lấy mỗi rally win**

Nếu địch rally 3 lần liên tiếp → mày mất **7.920.000 food** = gần cạn sạch.

## Warehouse Cap Theo Level

| Warehouse Level | Protected (mỗi loại RSS) |
|---|---|
| Lv15 | ~400.000 |
| Lv20 | ~800.000 |
| Lv22 | ~1.000.000 |
| Lv25 | ~1.200.000 |

**Lv25 = 1.200.000 mỗi loại** (food, wood, stone, gold). Tổng protected: **4.800.000 resource** nếu đủ 4 loại.

## Safe Amount: Không Bao Giờ Để Vượt Cap

**Rule đơn giản nhất**: không bao giờ để bất kỳ resource nào **vượt quá warehouse cap** khi mày không có peace shield.

Practical target:
- Warehouse lv25: giữ ≤1.200.000 mỗi loại nếu không shield
- Bất kỳ lúc nào vượt cap → spend ngay hoặc shield

Điều này nghe dễ nhưng khó thực hiện manual vì resource tự động tích lũy từ:
- RSS tile gather
- Building completion reward
- Event reward
- KvK kill reward

Bot V1 có **auto-spend mechanism**: khi resource chạm ngưỡng gần cap, bot tự động trigger training, build, hoặc research để consume resource xuống dưới safe zone.

> 🤖 V1 auto-manage resource consumption — không bao giờ để resource vượt warehouse cap. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Resource Priority: Spend Gì Trước?

Không phải mọi resource đều cần lo như nhau. Pillage amount khác nhau:

| Resource Type | Pillage Priority Của Địch | Lý Do |
|---|---|---|
| Food | Cao nhất | Địch cần food train troops |
| Wood | Cao | Build + train intensive |
| Stone | Trung bình | Build-heavy dùng nhiều |
| Gold | Thấp | Ít dùng hơn địch |

**Spend order khi sắp vượt cap**: Food → Wood → Stone → Gold.

Cách spend resource nhanh nhất:
1. Train troops (consume food + wood + stone + gold)
2. Build/upgrade buildings (consume wood + stone)
3. Research (consume food + wood + stone)
4. Healing troops (consume food)

## Gems Có Bị Pillage Không?

**Không**. Gems là premium currency không bị pillage. Nếu mày có nhiều RSS vượt cap → convert sang action có gem reward (chỉ 1 chiều — gems không convert thành RSS).

Resource gold cũng không bị pillage theo mechanics mới của Lilith (từ update 2024). Nhưng food và wood vẫn bị.

## KvK: Resource Management Thay Đổi Hoàn Toàn

Trong KvK, resource usage rate tăng gấp 5-10x do:
- Healing troops liên tục (food consumption)
- Training replacement troops (all resource)
- Build upgrade queue (wood + stone)

Kết quả: resource cap ít khi bị vượt quá trong KvK vì consumption tự nhiên cao.

**Thời điểm nguy hiểm nhất**: giữa 2 KvK season khi không có battle nhưng resource tích lũy vẫn chạy từ gather + passive income.

### Pre-KvK Surge Protection

2 tuần trước KvK start → resource tích lũy peak:
- Mày gather gấp để stock
- Event reward lớn
- Alliance gift tích lũy

Đây là lúc cần nhất peace shield + spend active nhất để không vượt cap.

## Troop Training Là Best Resource Sink

Khi resource sắp vượt cap, training troops là consumption tốt nhất:
- Tiêu hết resource ngay lập tức
- Troops sẽ dùng trong KvK tới
- Training time bot V1 tự manage

**Trap cần tránh**: spend resource vào healing wounded troops khi không có battle sắp tới. Heal cost cao (50% training cost), nhưng troops đó nếu không dùng KvK thì lãng phí.

**Ưu tiên**: train fresh > heal wounded khi resource cần consume khẩn.

> 🤖 V1 auto-train troops khi resource gần cap, auto-heal khi battle cycle active. [Xem V1 →](/#packages) · 750.000đ/tháng.

## Quick Checklist: Safe City Khi Offline

Trước khi tắt game (đặc biệt KvK season):

1. Check resource vs warehouse cap — consume nếu vượt
2. Kích hoạt peace shield nếu KvK đang active phase
3. Confirm march về city (không để march gather ngoài tile khi KvK)
4. Troops trong hospital → heal trước khi offline (không để wounded cap đầy)

Bot V1 tự động làm 3/4 điều này. Chỉ cần mày set shield manually (bot không tự shield — đó là quyết định của player).

## FAQ

### Warehouse lv20 vs lv25 khác nhau nhiều không?

800k vs 1.2M protected per resource = 50% increase. Trong early-mid game = đáng kể. Late game khi mày có hàng triệu resource tích lũy → difference lớn hơn.

### Bot V1 có tự động shield không?

Không. Shield là quyết định chiến lược, không tự động hóa. Bot auto-build, auto-train, auto-heal — không auto-shield.

### Resource trong hospital bị pillage không?

Không. Heal cost đã được "locked" trong hospital queue. Địch không pillage resource đang trong healing queue.

Đọc kèm:
- [City Hall 25 Speedrun RoK 2026](/blog/city-hall-25-speedrun-rok-2026)
- [Auto Build Research RoK VIP Template](/blog/auto-build-research-rok-vip-template)
- [Library Tech Tree Must Have RoK 2026](/blog/library-tech-tree-must-have-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)
  `,
};
