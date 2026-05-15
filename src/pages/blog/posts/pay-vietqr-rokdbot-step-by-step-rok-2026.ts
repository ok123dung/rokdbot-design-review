import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "pay-vietqr-rokdbot-step-by-step-rok-2026",
  title: "Pay VietQR RokdBot Step by Step 2026 — Hướng Dẫn Chuyển Khoản Tự Động",
  description: "Chuyển khoản VietQR kích hoạt RokdBot trong 3 phút — không cần admin xác nhận thủ công. Hướng dẫn từng bước: quét mã, ghi nội dung đúng, bot tự kích hoạt. Tránh 3 lỗi phổ biến khiến bot không nhận tiền.",
  date: "2026-05-11",
  readTime: "5 phút",
  coverImage: "/og-image.png",
  content: `
## Mày Đã Quét Mã Mà Bot Vẫn Không Lên — Đây Là Lý Do

3 giờ sáng. KvK đang chạy. Mày vừa đăng ký Trial, quét QR, chuyển tiền xong — nhưng bot vẫn offline. Không có gì xảy ra.

Không phải hệ thống hỏng. Không phải bị scam. **Gần 80% trường hợp lỗi kích hoạt đều do 1 nguyên nhân**: nội dung chuyển khoản sai format.

Bài này hướng dẫn đúng từ A đến Z — để lần đầu làm là xong.

## VietQR Hoạt Động Như Thế Nào Với RokdBot

RokdBot dùng hệ thống **auto-verify webhook**: mỗi giao dịch ngân hàng gửi về webhook server, server parse nội dung chuyển khoản, so khớp với order ID của mày, kích hoạt gói tự động.

Không có người ngồi xác nhận thủ công. Không cần nhắn tin cho admin. Toàn bộ là automation — **nên nội dung chuyển khoản phải khớp 100%**.

## Các Bước Thực Tế

### Bước 1 — Chọn Gói Và Tạo Order

Vào [trang gói cước](/#packages), chọn **Trial 150.000đ/7 ngày** nếu lần đầu. Nhấn "Đăng ký ngay". Điền Gmail và tên account RoK. Hệ thống tạo **Order ID** dạng: RKD-XXXXX.

Lưu Order ID này. Mày sẽ cần nó ở bước kế.

> 🤖 Lần đầu dùng bot? Trial 7 ngày 150k là đủ để thấy kết quả thực tế. [Đăng ký Trial →](/#packages)

### Bước 2 — Quét Mã VietQR

Mở app ngân hàng (Vietcombank / MB Bank / Techcombank / BIDV / bất kỳ ngân hàng nào hỗ trợ VietQR). Vào tính năng **Quét mã QR** hoặc **Chuyển khoản → QR**.

Quét mã hiển thị trên trang thanh toán. Số tài khoản và tên người nhận sẽ tự điền — **không cần nhập tay**.

### Bước 3 — Nhập Số Tiền Đúng

Nhập đúng số tiền theo gói đã chọn:
- Trial: **150.000đ**
- V1 Cơ Bản: **750.000đ**
- V2 Cao Cấp: **900.000đ**
- V3 Siêu Cấp: **1.200.000đ**
- Premium VIP: **3.000.000đ**

Sai 1 đồng — webhook không khớp, kích hoạt fail.

### Bước 4 — Nội Dung Chuyển Khoản (QUAN TRỌNG NHẤT)

Đây là bước hầu hết mọi người làm sai.

Nội dung phải là **Order ID đúng format**: ví dụ RKD-28471

Không thêm khoảng trắng. Không thêm chữ khác. Không viết "thanh toan" hay "nap tien". Chỉ Order ID.

Một số app ngân hàng tự điền nội dung mặc định — **xóa hết và chỉ giữ Order ID**.

### Bước 5 — Xác Nhận Và Chờ

Nhấn chuyển khoản. Trong vòng **1-3 phút**, hệ thống webhook nhận giao dịch, verify, và gửi email xác nhận kích hoạt.

Bot bắt đầu chạy từ thời điểm email tới. Không cần làm thêm gì.

## 3 Lỗi Phổ Biến Nhất

| Lỗi | Hậu quả | Fix |
|---|---|---|
| Nội dung sai / thiếu Order ID | Webhook không match | Chuyển lại đúng nội dung |
| Số tiền lẻ (vd: 149.500đ) | Amount mismatch | Chuyển đúng số tròn |
| Quét QR cũ (đã hết hạn) | Sai tài khoản thụ hưởng | Tạo order mới, lấy QR mới |

## FAQ

### Chuyển rồi không thấy email kích hoạt sau 5 phút — làm gì?

Kiểm tra spam folder trước. Nếu không có — chụp màn hình giao dịch (có mã tham chiếu ngân hàng) và gửi vào Zalo (zalo.me/g/rqgqyd878) hoặc Discord (discord.gg/UPuFYCw4JG) support. Admin verify thủ công trong 30 phút.

### Có thể chuyển khoản thường (không QR) không?

Có. Nhập tay số tài khoản và tên ngân hàng như hiển thị trên trang thanh toán. Nội dung vẫn phải là Order ID đúng format.

### Gói Trial có auto-renew không?

Không. Trial là 7 ngày one-time. Hết hạn mày tự gia hạn hoặc nâng cấp. Xem [chính sách hoàn tiền RokdBot 2026](/blog/refund-policy-rokdbot-2026) nếu có vấn đề phát sinh.

## Sau Khi Kích Hoạt Xong

Bot Trial chạy ngay lập tức — không cần cài gì thêm. Đọc [hướng dẫn setup ngày đầu](/blog/bot-how-to-setup-first-day-rok-2026) để configure đúng từ đầu và tránh lãng phí 7 ngày Trial.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Bot Setup Ngày Đầu RoK 2026 — Từ Đăng Ký Đến Bot Chạy Trong 24h](/blog/bot-how-to-setup-first-day-rok-2026)
- [Chính Sách Hoàn Tiền RokdBot 2026](/blog/refund-policy-rokdbot-2026)
- [Switch From BlueStacks To RokdBot RoK 2026](/blog/switch-from-bluestacks-to-rokdbot-rok-2026)
  `,
};
