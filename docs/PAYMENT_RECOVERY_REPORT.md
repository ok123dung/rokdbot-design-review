# Payment Recovery Report — 2026-05-14

**Trạng thái sau audit + cleanup:**

| Metric | Value |
|---|---|
| Pending orders (active, cần check) | **11** |
| Total stuck pending VND | **13,800,000đ** |
| Auto-cancelled (>45 ngày, abandoned) | 3 (1,050,000đ) |
| Paid (auto-verified) | 0 — SePay webhook chưa configure |

---

## 🔴 11 Đơn Pending Cần Mày Verify Manual

Mỗi đơn có mã `ROK XXXXXX`. Mày check sao kê HD Bank 0915966853:
- Nếu có giao dịch incoming với nội dung khớp + số tiền khớp → mark `paid` qua [admin dashboard](https://rokdbot.com/admin)
- Nếu không có giao dịch → mark `cancelled` (customer abandon)

| # | Code | Amount | Package | Created (UTC) | Age | Self-reported? |
|---|---|---|---|---|---|---|
| 1 | `ROK PQUGGP` | 900,000đ | Gói Cao Cấp | 2026-05-14 12:58 | 0 ngày | No |
| 2 | `ROK MRBAU2` | **3,000,000đ** | Gói Premium VIP | 2026-05-12 08:34 | 2 ngày | No |
| 3 | `ROK 4GHSQD` | 900,000đ | Gói Cao Cấp | 2026-05-10 05:13 | 4 ngày | No |
| 4 | `ROK KBWPEX` | **3,000,000đ** | Gói Premium VIP | 2026-05-09 09:22 | 5 ngày | No |
| 5 | `ROK GG72AL` | **1,200,000đ** | Gói Siêu Cấp | 2026-05-09 08:42 | 5 ngày | No |
| 6 | `ROK LWYXDA` | 900,000đ | Gói Cao Cấp | 2026-05-09 08:42 | 5 ngày | No |
| 7 | `ROK AUHX9A` | 150,000đ | Gói Dùng Thử | 2026-04-28 13:01 | 16 ngày | No |
| 8 | `ROK ESXMBH` | 900,000đ | Gói Cao Cấp | 2026-04-18 16:10 | 25 ngày | No |
| 9 | `ROK 9MLMU7` | **1,200,000đ** | Gói Siêu Cấp | 2026-04-18 16:10 | 25 ngày | No |
| 10 | `ROK 2B4EHL` | 900,000đ | Gói Cao Cấp | 2026-04-18 15:59 | 25 ngày | No |
| 11 | `ROK EW9PTW` | 750,000đ | Gói Cơ Bản | 2026-04-11 23:45 | 32 ngày | No |

**Ưu tiên check theo số tiền lớn trước:**
1. 2 đơn **3M Premium VIP** (MRBAU2 + KBWPEX) → 6M VND
2. 2 đơn **1.2M Siêu Cấp** (GG72AL + 9MLMU7) → 2.4M VND
3. 4 đơn 900k (PQUGGP, 4GHSQD, LWYXDA, ESXMBH, 2B4EHL) → 4.5M VND

---

## ✅ 3 Đơn Đã Auto-Cancel (Quá Cũ)

Đơn pending >45 ngày, không có customer self-report → giả định customer abandon (đã xem QR rồi đóng tab, không bao giờ chuyển khoản):

| Code | Amount | Age |
|---|---|---|
| `ROK CY7LQL` | 150,000đ | 54 ngày |
| `ROK 6KGGTW` | 750,000đ | 54 ngày |
| `ROK 2SPX27` | 150,000đ | 51 ngày |

**Note bổ sung vào DB**: `Auto-cancelled 2026-05-14: 45+ days old, no customer_reported_paid_at, no matching bank statement entry expected (abandoned)`

Nếu mày kiểm tra sao kê HD Bank và thấy 1 trong 3 đơn này thực sự có giao dịch → vào admin, chuyển status từ `cancelled` → `paid`.

---

## 📋 Workflow Recommended (làm ngay)

### Bước 1: Lấy sao kê HD Bank
- Mở app HD Bank → "Sao kê tài khoản"
- Filter: 60 ngày qua, chỉ giao dịch incoming
- Search keyword: `ROK`

### Bước 2: Match từng giao dịch với 11 mã pending

Đối với mỗi giao dịch HD Bank thấy có nội dung chứa `ROK XXXXXX`:
1. Verify số tiền khớp với bảng trên
2. Login [https://rokdbot.com/admin](https://rokdbot.com/admin)
3. Tab "Orders" → Search mã ROK → Click → Click status `paid`
4. Note transaction ID từ HD Bank vào `payments.transaction_id` (optional, sẽ tự fill nếu SePay webhook hoạt động sau này)

### Bước 3: Đơn không match → cancel
Nếu mã ROK nào không thấy giao dịch tương ứng trong sao kê → customer chưa pay → vào admin chuyển `cancelled`.

### Bước 4 (sau khi cleanup xong): Setup SePay
Để không phải làm Bước 1-3 mỗi tuần, configure SePay theo `docs/SEPAY_SETUP.md`. Sau khi xong, tất cả giao dịch HD Bank mới sẽ auto fire webhook → orders auto-mark paid → customer thấy "Thanh toán thành công!" ngay.

---

## ⚙️ Infrastructure Đã Setup Sẵn (Không Cần Mày Làm Gì)

| Component | Status | Note |
|---|---|---|
| QR generation (HD Bank routing) | ✅ Working | Verified với test order — tiền sẽ vào đúng tài khoản |
| Customer contact capture | ✅ Working | PaymentModal step 1 trước QR |
| Customer self-report button | ✅ Working | "Đã chuyển khoản rồi?" → Discord alert (cần `DISCORD_WEBHOOK_URL`) |
| Frontend polling (status detect) | ✅ Working | Detect paid within 2s |
| Admin manual mark paid | ✅ Working | `/admin` dashboard |
| SePay webhook handler | ✅ Code OK | Cần mày setup SePay account + set `SEPAY_API_KEY` |
| Daily digest endpoint | ✅ Code OK | Cần `DIGEST_API_KEY` + cron (đã có GH Actions workflow) |
| Email notification | ⏸ Code OK | Cần `RESEND_API_KEY` set trong Supabase Edge Functions secrets |
| Discord notification | ⏸ Code OK | Cần `DISCORD_WEBHOOK_URL` set |

---

## 🚀 Sau Khi Customer Click "Mua Ngay" Trên Site (Workflow Hiện Tại)

1. Customer click → modal hiện step 1: nhập Zalo/Discord/Telegram/Email/Phone → submit
2. QR hiện ra với 15 phút countdown
3. Customer mở app HD Bank → quét QR → chuyển 150k với content `ROK XXXXXX`
4. **Tiền vào ngay tài khoản HD Bank 0915966853 NGUYEN HUU DUNG** (qua VietQR, vài giây)
5a. **Nếu SePay webhook đã setup**: webhook fire → mark order `paid` → frontend polling detect trong 2s → UI hiện "Thanh toán thành công!" ✅
5b. **Nếu SePay chưa setup** (state hiện tại): customer click "Đã chuyển khoản rồi?" → admin nhận alert (qua Discord nếu set webhook, hoặc check `/admin` định kỳ) → admin verify HD Bank → click `paid` → frontend polling detect → UI confirm ✅

Cả 2 path đều đảm bảo customer **không mất tiền** (vì tiền đã vào tài khoản trước khi quan tâm webhook fire). Khác biệt chỉ là thời gian từ pay → UI confirm:
- Path 5a: **2-5 giây**
- Path 5b: **5 phút đến 4 giờ** (tùy admin response time)

---

## 📞 Liên Hệ Customer Có Đơn Pending

Tao chưa thấy `customer_contact` data cho 11 đơn pending hiện tại vì:
- 11 đơn này tạo TRƯỚC khi tao deploy PaymentModal v2 (capture contact)
- Customer Apr-May 2026 không để lại contact info → không thể chủ động liên hệ

**Hành động**: chỉ có thể đợi customer inbox Discord/Zalo. Nếu họ không inbox trong 30 ngày → assume abandon, cancel.

Đơn mới sau 2026-05-14 sẽ luôn có customer_contact → liên hệ được.

---

**Generated**: 2026-05-14 13:40 UTC
**Author**: agent payment audit
**Repo**: https://github.com/ok123dung/rokdbot-design-review
