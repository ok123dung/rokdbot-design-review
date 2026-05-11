import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "pause-bot-vacation-mode-rok-2026",
  title: "Pause Bot Vacation Mode RokdBot 2026 — Khi Đi Du Lịch Setup Sao",
  description: "Đi du lịch 1-2 tuần mà bot vẫn chạy không giám sát — rủi ro gì? Setup Vacation Mode đúng để bot auto-pause an toàn, bảo toàn subscription, và resume không mất ngày. Hướng dẫn thực tế trước khi lên máy bay.",
  date: "2026-05-11",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Đi Đà Nẵng 10 Ngày, Bot Chạy Không Có Người Trông — Chuyện Gì Xảy Ra?

Kịch bản thực tế: mày book vé máy bay 2 tuần trước. KvK vừa kết thúc. Đây là window hoàn hảo để đi chơi.

Nhưng subscription V1 còn 10 ngày. Để bot chạy không giám sát — nếu có event đột ngột, nếu server có biến, nếu bot lỗi và bắt đầu hành động lạ — không có ai xử lý.

**Để bot chạy mù quáng 10 ngày không phải lựa chọn tốt.** Vacation Mode là giải pháp đúng.

## Vacation Mode Là Gì

Vacation Mode = **pause toàn bộ hoạt động bot** có kiểm soát:

- Bot dừng mọi action (march, skill, gather, train)
- Account vẫn login để giữ VIP daily login bonus (nếu V2+)
- **Subscription clock dừng** trong thời gian pause — mày không mất ngày subscription khi bot không chạy
- Resume tự động vào ngày mày chỉ định, hoặc resume thủ công khi về

Khác với tắt app hoặc bỏ bot tự chạy — Vacation Mode là intentional pause với subscription protection.

## Rủi Ro Nếu Không Dùng Vacation Mode

### Bot chạy không giám sát 10 ngày

- Nếu game update client-side (Lilith hay push patch) → bot có thể loop action lỗi → unusual pattern → flag risk
- Nếu hospital đầy và bot không có logic xử lý → troops chết không hồi → wasted AP
- Nếu có barb event đặc biệt mà bot config cũ không handle → bỏ lỡ reward tier

### Dừng hẳn không có Vacation Mode

- Subscription vẫn chạy (mày trả tiền ngày không dùng)
- Resume lại = config có thể cần reset

> 🤖 V1 và V2 đều có Vacation Mode. Đi du lịch yên tâm — subscription dừng khi bot dừng. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Setup Vacation Mode Trước Khi Đi

### Thực Hiện 24h Trước Khi Lên Máy Bay

**Bước 1** — Vào dashboard RokdBot, tìm mục "Vacation Mode" trong Settings.

**Bước 2** — Chọn ngày bắt đầu và ngày kết thúc dự kiến (có thể điều chỉnh sau).

**Bước 3** — Chọn mode:
- **Full Pause**: dừng hoàn toàn, không login
- **Passive Keep-Alive** (V2+): bot chỉ login collect daily login bonus, không farm, không march. Giữ VIP streak.

**Bước 4** — Confirm. Hệ thống ghi nhận và subscription clock paused.

**Bước 5** — Check lại trước khi đi: troop health = 100%, hospital empty, resource storage không overflow.

### Checklist Trước Khi Activate Vacation Mode

- [ ] Troops về thành, không có march đang đi
- [ ] Hospital empty (healed hết)
- [ ] Resource không gần overflow (consume bằng speedup research/build trước)
- [ ] Alliance notified mày đi nghỉ (không bị kick vì inactive)

## Khi Về — Resume Đúng Cách

Đừng resume rồi để bot chạy ngay ở max intensity. Sau 10 ngày pause:

**Bước 1** — Resume Vacation Mode từ dashboard.

**Bước 2** — Kiểm tra game state trước: có event mới không? Server có update không?

**Bước 3** — Run bot ở **Low Intensity 30%** trong 2-3 giờ đầu để warm up pattern.

**Bước 4** — Restore full intensity sau khi confirm mọi thứ bình thường.

Cách tiếp cận này giảm thiểu bất kỳ anomaly nào từ sudden resume sau gap dài.

## FAQ

### Nếu về sớm hơn dự kiến, resume giữa chừng được không?

Có. Vacation Mode có thể cancel bất cứ lúc nào từ dashboard. Subscription clock resume ngay lập tức từ thời điểm đó.

### V1 có Passive Keep-Alive không hay chỉ Full Pause?

V1 chỉ có Full Pause. Passive Keep-Alive (giữ VIP streak daily login) là tính năng V2 trở lên. Nếu mày quan trọng VIP streak — đây là 1 lý do nâng V2 trước khi đi. Xem [so sánh ROI V1/V2](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026).

### Trong thời gian Vacation Mode, alliance có kick mình vì inactive không?

Tùy alliance rules. Nên báo R4/R5 trước. Nếu alliance nghiêm ngặt về activity — dùng Passive Keep-Alive V2 để giữ login streak visible.

## Mùa Hè, Tết, Lễ — Vacation Mode Là Bắt Buộc

Đừng để subscription chạy mà không có output. Vacation Mode đảm bảo mày chỉ trả tiền cho những ngày bot thật sự làm việc.

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Bot Setup Ngày Đầu RoK 2026](/blog/bot-how-to-setup-first-day-rok-2026)
- [Chính Sách Hoàn Tiền RokdBot 2026](/blog/refund-policy-rokdbot-2026)
- [Returning Player Guide RoK 2026](/blog/returning-player-guide-rok-2026)
  `,
};
