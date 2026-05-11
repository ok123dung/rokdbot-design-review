import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "bot-how-to-setup-first-day-rok-2026",
  title: "Bot Setup Ngày Đầu RoK 2026 — Từ Đăng Ký Đến Bot Chạy Trong 24h",
  description: "Hướng dẫn từng bước setup RokdBot Trial từ đăng ký đến bot chạy trong 24h. Không cần kỹ thuật, không cần cài phần mềm. Checklist đầy đủ cho ngày đầu tiên — tránh 5 lỗi phổ biến nhất của người mới.",
  date: "2026-05-11",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Ngày đầu dùng bot: 90% người mới làm sai bước này

Không phải bước kỹ thuật phức tạp. Là bước **cung cấp thông tin account**. Người mới hay hoảng loạn ở đây — sợ mất account, không biết share gì, không share gì, rồi bot không chạy được.

Bài này walkthrough chính xác từng bước. Từ lúc mày quyết định mua Trial 150k đến lúc bot đang chạy và mày đi ngủ.

## Checklist trước khi đăng ký

Chuẩn bị trước — đừng bắt đầu mà thiếu cái này:

- Account RoK của mày đang active (đang ở kingdom nào, power bao nhiêu)
- Biết commander đang dùng cho farm rợ là ai (nếu chưa có commander peacekeeping, đọc note bên dưới)
- Kết nối internet ổn định (bot cần download profile ban đầu)
- Zalo hoặc Telegram để liên lạc support

Commander peacekeeping tối thiểu cho Trial: **Lohar** (miễn phí, mọi người có). Nếu chưa có Lohar, unlock Lohar trước — đây là commander starter cho peacekeeping/barb farm.

> 🤖 Trial 150.000đ — chạy thử 7 ngày, không cần kỹ thuật. [Đăng ký Trial →](/#packages)

## Bước 1: Đăng ký Trial (10 phút)

- Vào trang rokdbot.com → chọn gói **Trial 150k**
- Điền thông tin: email + số điện thoại Zalo
- Thanh toán (chuyển khoản ngân hàng hoặc Momo)
- Nhận xác nhận qua Zalo trong vòng 30 phút (giờ hành chính)

Lưu ý: Trial 150k = 7 ngày. Nếu chạy hài lòng, upgrade lên V1/V2/V3 trong dashboard — không cần setup lại từ đầu.

## Bước 2: Cung cấp thông tin account (15 phút)

Sau khi payment confirmed, support gửi form qua Zalo. Điền:

- **Server number** (kingdom ID): tìm trong game, góc trên trái màn hình city
- **Governor name** (tên nhân vật)
- **Commander farm**: tên commander mày muốn dùng farm rợ
- **Timezone**: chọn VN (UTC+7) nếu mày ở Việt Nam
- **Sleep window**: khung giờ mày muốn bot nghỉ (mặc định 01:00 - 07:00 VN)

Không cần share password game. Bot operate qua cloud simulation — không đăng nhập vào account mày theo nghĩa truyền thống.

## Bước 3: Bot sync và config (30-60 phút)

Support team config bot theo profile mày. Trong thời gian này:
- Đừng online RoK (để bot capture initial state sạch)
- Đừng đổi tên nhân vật hoặc commander setup

Mày nhận notification qua Zalo khi bot ready.

## Bước 4: Verify bot đang chạy (5 phút)

Sau khi nhận notification:

- Mở RoK → xem march của commander đang di chuyển
- Commander đang đánh rợ gần city → bot đang chạy đúng
- Kiểm tra Victory counter sau 1 tiếng — nếu tăng thêm 5-10 con = xác nhận hoạt động

Nếu march không di chuyển sau 30 phút: nhắn support ngay qua Zalo.

## 5 lỗi phổ biến nhất ngày đầu

**Lỗi 1 — Online trong khi bot đang sync**: làm conflict state, bot không capture được baseline. Fix: offline hoàn toàn trong 1h đầu.

**Lỗi 2 — Commander đang trong march khác**: nếu commander đang rally hoặc reinforce, bot không thể dùng. Fix: recall march, đưa commander về city trước khi bot bắt đầu.

**Lỗi 3 — Troops quá ít**: Trial cần tối thiểu 10.000 T1-T2 troops để farm liên tục. Ít hơn → troops hết trong 30 phút, bot idle.

**Lỗi 4 — City under shield và shield hết**: nếu shield hết giữa chừng và city bị tấn công → bot không xử lý được combat situation. Cài shield ít nhất 7 ngày trước khi bắt đầu Trial.

**Lỗi 5 — Không set sleep window**: bot chạy 24/7 không nghỉ ngày đầu → risk detection. Luôn set sleep window dù là Trial.

## FAQ

### Trial 150k có đủ để đánh giá không?

7 ngày là đủ để thấy: bot có chạy ổn định không, số rợ/ngày là bao nhiêu, có lỗi kỹ thuật gì không. Đủ để quyết định upgrade hay không.

### Tôi không có Zalo thì sao?

Support cũng có Telegram. Nhắn khi đăng ký để được chuyển sang kênh Telegram.

### Bot có chạy khi tôi đang online không?

Không nên vừa online vừa để bot chạy — có thể conflict action (mày tap 1 chỗ, bot tap chỗ khác). Best practice: offline khi bot đang chạy, online khi bot đang trong sleep window.

## Bắt đầu ngay

**Trial RokdBot 150.000đ** = 7 ngày chạy thử, không cần kỹ thuật, support Zalo 24/7:
- Setup xong trong vòng 24h từ lúc đăng ký
- Không cần cài phần mềm gì trên máy
- Upgrade lên V1/V2/V3 trong 1 click nếu hài lòng

[→ Xem 5 gói cước](/#packages) (**Trial 150k** · V1 750k · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [RokdBot V3 vs V2 vs V1 — ROI Comparison 2026](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026)
- [Bot Config Priority Guide RoK 2026 — Setup Combat / Farm / Build Schedule](/blog/bot-config-priority-guide-rok-2026)
- [Tại Sao Mid-Tier Players Chọn RokdBot V2 Combo 2026](/blog/why-mid-tier-players-choose-rokdbot-v2-combo-2026)
  `,
};
