import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "farm-1000-rss-per-hour-setup-rok-2026",
  title: "Farm 1.000.000 RSS/Giờ Setup RoK 2026 — Tile Lv 5 + Alliance Buff + 4 March Bot",
  description: "Công thức farm 1 triệu RSS/giờ trên Rise of Kingdoms 2026: Tile Lv 5 + alliance gathering buff + 4 march đồng thời. Tính toán throughput thực tế, commander pair tốt nhất, và bot V2 tự động hóa toàn bộ vòng lặp 24/7.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## 1 triệu RSS/giờ — con số thật hay marketing?

Hầu hết hướng dẫn farm RSS trên YouTube đều dùng con số đẹp mà không kèm điều kiện. Bài này làm ngược lại: **tính từ mechanic**, sau đó chứng minh con số 1.000.000/giờ là hoàn toàn khả thi — nhưng chỉ khi bạn có đúng 3 yếu tố song song.

Nếu thiếu 1 trong 3, throughput giảm xuống còn 300.000-500.000/giờ. Phần lớn player F2P đang ở ngưỡng đó và không biết tại sao.

## Yếu tố 1 — Tile Level 5 (không thương lượng)

Tile resource trên bản đồ RoK có 5 cấp độ. Yield khác nhau hoàn toàn:

| Tile Lv | RSS / lần gather | Thời gian gather | RSS/giờ (1 march) |
|---|---|---|---|
| Lv 1 | ~15.000 | 20 phút | 45.000 |
| Lv 3 | ~85.000 | 35 phút | 145.000 |
| **Lv 5** | **~280.000** | **45 phút** | **373.000** |

Lv 5 cho **8,3x** yield so với Lv 1 với chỉ 2,25x thời gian. Đây là lý do bản đồ có tranh chấp tile Lv 5 — giá trị thật sự là vậy.

Vấn đề: **tile Lv 5 hiếm và tranh chấp**. Alliance tech "Gathering" tăng số lượng tile Lv 5 spawn. Không có alliance tech tốt → không có tile Lv 5 → không có 1M/giờ, dù bot chạy 24/7.

## Yếu tố 2 — Alliance Gathering Buff (x1,3 → x1,5 yield)

Alliance có 2 buff liên quan gathering:

- **Alliance Flag** đặt gần tile: +15-25% gathering speed (rút ngắn thời gian/tile)
- **Alliance Tech "Gathering"** maxed: +20-30% gathering capacity (tăng yield/tile)

Kết hợp cả hai: 1 tile Lv 5 từ 280.000 → **~364.000-420.000 RSS/lần**. Thời gian gather giảm xuống còn ~35-38 phút.

Alliance mạnh = tiếp cận buff này = throughput nhân đôi so với solo. **Không có alliance tốt → cap tại 500.000/giờ dù có 4 march.**

## Yếu tố 3 — 4 March Đồng Thời

Math đơn giản nhất: 4 march × 373.000 RSS/lần × ~1,3 lần/giờ ≈ **1.940.000 RSS/giờ** tối đa lý thuyết.

Thực tế sau điều chỉnh (tile không phải lúc nào cũng available, march travel time):

> **4 march đồng thời + tile Lv 5 + alliance buff ≈ 900.000 – 1.200.000 RSS/giờ**

Con số 1M/giờ là **ngưỡng mid** của setup này — hoàn toàn khả thi.

Vấn đề: **duy trì 4 march liên tục thủ công cần player online 100% thời gian**. Mỗi march xong ~40 phút, cần resend ngay. 4 march × 40 phút = bạn cần check lại mỗi 40 phút, 24/7, kể cả 3am.

Ai làm được điều đó?

## Tại sao manual gather thất bại sau ngày đầu

Gather thủ công hoạt động tốt trong 2-3 ngày đầu khi hứng khởi. Sau đó:

- **Bỏ lỡ tile Lv 5** vì wake up muộn → người khác lấy trước
- **March ngồi không** sau khi gather xong vì không kịp resend → mất 30-40% throughput
- **Miss alliance buff window** — alliance buff thường active trong giờ cụ thể, miss = farm không buff
- **Burnout** — check game mỗi 40 phút / 24h không bền sau 1 tuần

Kết quả thực tế: player gather thủ công đạt **200.000-400.000 RSS/giờ bình quân** khi tính cả thời gian idle.

## Bot V2 giải quyết vòng lặp này như thế nào

Gói **V2 Cao Cấp 900.000đ/tháng** tự động hóa toàn bộ gathering loop:

- **Scan tile liên tục** — phát hiện tile Lv 5 available ngay khi spawn, gửi march trong vài giây
- **4 march đồng thời** — V2 quản lý tối đa 4 march gather song song, không march nào ngồi không
- **Alliance buff sync** — bot biết khi nào buff active, ưu tiên gather trong window đó
- **Auto resend** — khi march về, bot lập tức scan tile mới và gửi tiếp, không delay
- **Chạy 24/7** — 3am sáng, 12am đêm, trong KvK — bot không nghỉ

Throughput thực tế được báo cáo bởi user V2: **850.000 – 1.100.000 RSS/giờ** bình quân, bao gồm cả thời gian travel và tile tranh chấp.

> 🤖 V2 hỗ trợ 4 march gather đồng thời + tile scan + alliance buff sync. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Commander Pair Tốt Nhất Cho Gathering

Commander ảnh hưởng đến **gathering capacity** và **march speed** — cả hai đều quan trọng cho throughput.

### F2P Tier
- **Constance + Sarka** — Constance tăng gathering capacity +25%, Sarka tăng march speed gathering +15%. Pair tốt nhất cho F2P không có limited commander.
- **Joan of Arc + Sarka** — Joan giảm march cost AP, Sarka speed. Phù hợp khi AP là vấn đề.

### Mid Tier
- **Sarka + Constance** (full skill) — Constance maxed = +30% capacity. Throughput tăng ~30% so với no gathering commander.
- **Trung Quốc civilization bonus** — bonus gathering speed passive +5% thêm vào commander.

> 📌 Đọc thêm: [Auto Farm 4 RSS Tile Level 5 RoK](/blog/auto-farm-4-rss-tile-level-5-rok) để xem chi tiết tile routing.

### Bot V2 Auto-select Commander
Bot V2 tự nhận diện commander pair gathering tốt nhất trong roster của bạn và assign đúng. Không cần config thủ công.

## Setup Checklist Trước Khi Bật Bot

Trước khi kỳ vọng 1M/giờ, verify đủ 3 điều kiện:

- [ ] Alliance có Tech "Gathering" level ≥ 15 (unlock capacity bonus)
- [ ] Alliance đặt Flag gần farming zone thường xuyên
- [ ] City Hall ≥ 21 (unlock 4th march slot)
- [ ] Constance + Sarka skill ≥ 3/4 (không cần maxed ngay)
- [ ] Gem storage đủ cho 30 ngày bot V2 (nếu farm gem đồng thời)

Thiếu City Hall 21 → chỉ có 3 march → throughput giảm 25%. Đây là blocker phổ biến nhất.

## ROI Thực Tế: 1M RSS/Giờ Đáng Bao Nhiêu?

1.000.000 RSS/giờ × 24 giờ = **24.000.000 RSS/ngày**. Trong KvK:

- 1 T5 troop cost ~300 RSS × 5 loại = ~1.500 RSS/troop
- 24M RSS/ngày = **đủ train ~16.000 T5/ngày** (nếu không bị bottle-neck training)
- Hoặc đủ build/research liên tục mà không cần mua RSS

Với V2 900k/tháng, farm 24M RSS/ngày × 30 ngày = **720M RSS/tháng**. Giá thị trường RSS (tính theo gem conversion) ≈ 720M RSS × 0,5đ/RSS = **360.000.000đ giá trị in-game** từ 900.000đ bot.

> ⚡ 4 march gather bot chạy 24/7 — không cần online. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng, kích hoạt trong 24h.

## FAQ

### Tile Lv 5 bị player khác lấy hết thì sao?
Bot V2 có logic fallback: nếu không có tile Lv 5, ưu tiên Lv 4, sau đó Lv 3. Throughput giảm nhưng march không bao giờ ngồi không.

### Bot có bị ban khi gather không?
Gather là hành động bình thường, ít risk nhất trong bot spectrum. Tỷ lệ ban V2 <0,1% qua 8 KvK season.

### Cần City Hall mấy để chạy 4 march?
City Hall 21 unlock march slot thứ 4. Nếu chưa đến, V2 vẫn chạy 3 march — throughput 75%.

## Đọc Thêm

- [Cách Farm Gem Hiệu Quả Rise of Kingdoms](/blog/cach-farm-gem-hieu-qua-rise-of-kingdoms)
- [Auto Build Research RoK VIP Template](/blog/auto-build-research-rok-vip-template)
- [F2P → VIP 5 Roadmap RoK 2026](/blog/f2p-to-vip-5-roadmap-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)
  `,
};
