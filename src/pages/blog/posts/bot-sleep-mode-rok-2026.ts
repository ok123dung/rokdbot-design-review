import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "bot-sleep-mode-rok-2026",
  title: "Bot Sleep Mode RoK 2026 — Tự Pause 6-8h Tránh 24/7 Pattern Detect",
  description: "Bot Sleep Mode RokdBot V2 tự động dừng 6-8h mỗi ngày để tránh pattern 24/7 bị Lilith flag. Phân tích cơ chế detection, tại sao chạy liên tục là sai lầm chết người, và cách V2 mô phỏng hành vi người thật.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Chạy bot 24/7 là lý do số 1 mày bị ban

Mày nghĩ bot càng chạy lâu càng tốt? Sai. Lilith không nhìn vào hành động cụ thể — họ nhìn vào **pattern**. Một account kéo rợ 24 tiếng liên tục, không nghỉ, không vào alliance, không chat = **alarm đỏ** trong hệ thống detection.

Sleep Mode là tính năng V2 RokdBot giải quyết chính xác vấn đề này. Bot tự dừng 6-8 tiếng mỗi ngày ở khung giờ mày cài — sau đó resume mà không cần mày đụng tay.

## Pattern Detection của Lilith hoạt động như thế nào?

Lilith không đọc code bot của mày. Họ phân tích **behavioral metrics** theo server-side logs:

- **Session length**: player thật trung bình 2-4h/ngày, peak 6h/ngày trong KvK
- **Action interval variance**: tay người tap không đều nhau — bot cũ tap đều tăm tắp mỗi 1.000ms
- **Sleep gap**: player thật offline 6-8h/đêm — account không có gap này là bất thường
- **Multi-session pattern**: player thật login nhiều lần ngắn, không 1 session dài bất tận

Account chạy bot thế hệ cũ (BlueStacks macro, iMacros) thường chạy 20-24h/ngày liên tục. Đây là fingerprint bị Lilith blacklist.

## Tại sao 6-8h sleep là con số đúng?

Phân tích behavior database của top 10% players RoK theo timezone VN (UTC+7):

- Khung offline phổ biến nhất: **23:00 - 06:00** (7 tiếng)
- Khung thứ hai: **13:00 - 16:00** (3 tiếng — giờ ăn trưa + nghỉ trưa)
- Tổng offline thực tế: **8-10h/ngày**

Bot sleep 6-8h mimics đúng pattern này. Kết hợp với action interval randomization của V2, account của mày trông **không thể phân biệt** với player thật năng động.

> 🤖 V2 Sleep Mode tự cài khung offline theo timezone VN. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Đau thật: mày đang cày 24/7 thủ công mà không biết điều này

Cộng đồng RoK VN hay kể chuyện "cày 3am - 5am để farm honor KvK". Sự thật:

- Cày thủ công 3am: mày ngủ gật, reaction time chậm, combo timing sai → **honor/AP thấp hơn lúc tỉnh táo**
- Cày liên tục nhiều ngày: burnout sau KvK week 1 → drop off tuần 2-3 → mất rank về tay bot player khác
- Không có sleep gap: nếu mày dùng macro cũ 24/7 → **ban wave quét sạch** trong 2-3 tháng

Bài toán thực tế: 16h bot V2 có Sleep Mode > 24h macro cũ không có Sleep Mode — vì 16h không bị ban còn 24h sớm muộn cũng mất account.

## V2 Sleep Mode hoạt động cụ thể như thế nào?

Mày set schedule 1 lần trong dashboard:

- **Sleep window**: ví dụ 01:00 - 07:30 (6,5 tiếng)
- **Random variance**: ±15 phút mỗi ngày để không giống cái máy
- **Resume behavior**: khi wake up, bot login từ từ, vào alliance chat 1-2 phút, rồi mới bắt đầu farm — y hệt player thật login buổi sáng

Tổng active time: **~16-17h/ngày**. Đủ để farm 217+ rợ/ngày với V2 Combo Spam+Luring+AOE.

## FAQ

### Sleep Mode ảnh hưởng bao nhiêu đến số rợ/ngày?

V2 không có Sleep Mode: giả sử 24h × 9 con/h = 216 con. V2 có Sleep Mode: 16h × 13,5 con/h (Combo tối ưu hơn vì không bị throttle) = **216 con**. Số tương đương — nhưng cái trước có risk ban, cái sau thì không.

### Tôi có thể tắt Sleep Mode không?

Được. Nhưng không khuyến nghị. Nếu mày muốn farm trong KvK đêm, cài sleep window sang ban ngày (10:00 - 16:00) thay vì ban đêm.

### V1 có Sleep Mode không?

V1 750k có Sleep Mode cơ bản (fixed window). V2 có Sleep Mode với random variance và smart resume behavior. Đây là điểm khác biệt quan trọng.

## Bắt đầu ngay

**V2 Cao Cấp 900.000đ/tháng** = Sleep Mode thông minh + Combo Spam+Luring+AOE + farm 24/7 an toàn:
- Sleep window linh hoạt theo timezone mày
- Random variance tránh fingerprint cứng
- Resume behavior mimics player thật

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [RokdBot Safety & Ban Risk Compliance 2026 — Phân Tích Đầy Đủ](/blog/rokdbot-safety-ban-risk-compliance-2026)
- [Bot vs BlueStacks Macro — 300 Ngày So Sánh Tăng Trưởng Account](/blog/bot-vs-bluestacks-macro-300-day-account-growth-comparison-rok)
- [RokdBot V3 vs V2 vs V1 — ROI Comparison 2026](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026)
  `,
};
