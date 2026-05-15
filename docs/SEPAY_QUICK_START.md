# SePay Quick Start — 15 Phút Setup Auto-Verify

> Phần này CHỈ mày làm được. Agent đã setup hết phần technical (DIGEST_API_KEY, edge functions, Discord, etc.). Sau khi xong 3 bước dưới đây, payment flow sẽ **fully auto** — customer pay → bot tự verify trong 5 giây.

---

## ✅ State hiện tại (đã setup xong)

- Supabase secrets: `DIGEST_API_KEY` ✅, `DISCORD_WEBHOOK_URL` ✅
- Supabase edge functions: 5 functions ACTIVE
- GitHub repo secrets: `DIGEST_API_KEY` ✅
- GitHub Actions cron: chạy daily 08:00 VN time ✅
- Frontend production: live trên rokdbot.com với polling + contact capture ✅

**Chỉ thiếu**: `SEPAY_API_KEY` env var trong Supabase → cần mày setup SePay account trước.

---

## Bước 1 — Đăng Ký SePay (5 phút)

### 1.1 Mở browser → https://my.sepay.vn/register

### 1.2 Form đăng ký
- **Email**: dùng email của mày (admin email)
- **Số điện thoại**: SĐT Việt Nam mày đang dùng (sẽ nhận OTP)
- **Mật khẩu**: tự đặt
- **Tên doanh nghiệp**: "RokdBot" hoặc tên cá nhân nếu personal account

### 1.3 Verify OTP
- SMS gửi về SĐT → nhập 6 số → confirm

### 1.4 Login vào dashboard SePay
- URL sau khi đăng ký: https://my.sepay.vn/

---

## Bước 2 — Connect HD Bank với SePay (5 phút)

### 2.1 Trong SePay dashboard, sidebar
Click **Tài khoản ngân hàng** (Bank Accounts) → button **Thêm tài khoản**

### 2.2 Chọn ngân hàng
- Search "HD Bank" → click **HD Bank (HDBank)**

### 2.3 Nhập thông tin
- **Số tài khoản**: `0915966853`
- **Tên chủ tài khoản**: `NGUYEN HUU DUNG` (đúng tên đăng ký HD Bank)

### 2.4 Chọn phương thức sync — QUAN TRỌNG

SePay sẽ hỏi mày chọn 1 trong 2:

#### Option A — Internet Banking Sync (RECOMMEND, real-time)
- Mày sẽ login HD Bank Internet Banking trong popup SePay
- HD Bank gửi OTP về SĐT → mày nhập
- Sau đó SePay tự đọc transactions của HD Bank real-time
- **Webhook fire ngay khi có giao dịch đến** (1-3 giây)

#### Option B — Manual Upload (KHÔNG recommend, không real-time)
- Mày phải upload sao kê PDF định kỳ
- KHÔNG có webhook fire
- → bỏ qua, đừng chọn

→ **Chọn Option A** (Internet Banking sync)

### 2.5 Authorize qua HD Bank
- Popup mở → login HD Bank Internet Banking (username + password)
- OTP gửi về SĐT → nhập
- Confirm "Cho phép SePay đọc giao dịch tài khoản"
- Popup đóng → SePay dashboard hiển thị account 0915966853 với status **Active** ✅

### 2.6 Verify connection
SePay dashboard → tab **Lịch sử giao dịch** (Transactions) → filter HD Bank 0915966853 → mày sẽ thấy danh sách 30-60 ngày giao dịch gần đây.

→ Nếu thấy giao dịch → 100% confirmed connect OK
→ Nếu không thấy → quay lại 2.4-2.5

---

## Bước 3 — Tạo Webhook + API Key (3 phút)

### 3.1 SePay dashboard sidebar → **Cài đặt** → **API Webhook**

### 3.2 Click **Tạo API Key mới**
- **Tên**: `rokdbot-supabase`
- **Mô tả**: "Webhook for rokdbot.com payment verification"
- Click **Tạo**

### 3.3 Copy API key
- SePay hiển thị API key dạng chuỗi dài (vd: `sepay_xxxxxxxxxxxxxx`)
- **Copy ngay** — sau này sẽ không hiển thị lại được

### 3.4 Tạo Webhook
- Section **Webhooks** → button **Thêm webhook**
- **URL**: `https://inondhimzqiguvdhyjng.supabase.co/functions/v1/sepay-webhook`
- **Method**: POST
- **Loại sự kiện**: chỉ chọn **Giao dịch đến** (Incoming transfer) — đừng tick các loại khác
- **Authorization Header**: `Apikey {API_KEY_VỪA_TẠO}`
  - Lưu ý: prefix là `Apikey ` (có space), không phải `Bearer ` hay `Token `
- Click **Lưu**

### 3.5 Test webhook từ SePay UI
- Trong webhook list → click webhook vừa tạo → button **Test**
- SePay gửi 1 payload giả tới endpoint
- Expected response: `200 OK` từ Supabase
- Nếu lỗi 401 → API key không khớp với Supabase env var (sẽ fix ở Bước 4)

---

## Bước 4 — Cho Tao API Key Để Tao Set Vào Supabase

Sau khi xong Bước 3, mày có chuỗi `sepay_xxxxxxxxxxxxxx`. Paste vào chat:

```
SEPAY_API_KEY=sepay_xxxxxxxxxxxxxx
```

Tao sẽ:
1. Set vào Supabase Edge Functions secrets qua `supabase secrets set`
2. Verify webhook signature check bằng cách gọi endpoint với key thật
3. Confirm flow end-to-end

---

## Bước 5 — Live Test (Final Verification)

Sau Bước 4, mày test bằng tiền thật để confirm 100%:

### 5.1 Trên rokdbot.com
- Mở https://rokdbot.com/#packages
- Click **Gói Dùng Thử 150k**
- Nhập Zalo: SĐT của mày (test contact)
- Submit → QR hiện ra

### 5.2 Chuyển khoản test
- Mở app HD Bank → quét QR
- **Nhập số tiền 150,000đ** (đủ amount của gói — REQUIRED để verify success criteria)
- Nội dung tự fill `ROK XXXXXX`
- Confirm transaction

⚠ **Lưu ý**: Nếu chuyển < 150,000đ (vd. 5,000đ), webhook check `receivedAmount < expectedAmount` → return `"Insufficient amount"` → KHÔNG mark order paid → UI không tự confirm → Step 5.3 fail. Phải chuyển đủ amount.

→ Sau test mày tự transfer 150,000đ về lại chính mày (HD Bank → HD Bank, 0915966853 → cùng số đó, hoặc qua TK khác của mày).

### 5.3 Verify auto-confirm
Trong 5 giây sau khi transfer:

✅ **Frontend**: UI tự đổi sang "Thanh toán thành công!" với mã đơn
✅ **Discord channel admin**: nhận notification từ SePay webhook handler
✅ **Supabase DB**: `status='paid'`, `paid_at` filled, `transaction_id` filled

→ Nếu cả 3 cái trên đều fire → SePay setup hoàn hảo, payment flow live production.
→ Nếu 1 cái fail → tao sẽ debug.

---

## Troubleshooting

### "Webhook test fail 401"
- Verify SePay webhook auth header format: `Apikey <key>` (case-sensitive, space sau "Apikey")
- Verify Supabase `SEPAY_API_KEY` value match SePay API key

### "Webhook fire nhưng order vẫn pending"
Check edge function logs:
```
https://supabase.com/dashboard/project/inondhimzqiguvdhyjng/functions/sepay-webhook/logs
```

Common issues:
- **"No payment code found"** → content giao dịch không match regex `ROK\s*([A-Z0-9]{6})`. Format đúng phải là "ROK XXXXXX" (6 ký tự alphanumeric).
- **"Order not found"** → mã ROK không có trong DB (chỉ test với mã thật từ rokdbot.com)
- **"Amount mismatch"** → khách chuyển ít hơn yêu cầu

### "HD Bank không cho phép kết nối SePay"
- Một số ngân hàng VN yêu cầu enable "API integration" trong settings Internet Banking trước
- HD Bank: login HDBank Online → Cài đặt → API/Liên kết bên thứ 3 → enable
- Hoặc liên hệ HD Bank support yêu cầu enable Open Banking

---

## Sau Khi Hoàn Tất Cả 5 Bước

Production state sẽ là:

| Component | Status |
|---|---|
| Customer pay QR | → Tiền vào HD Bank 0915966853 tức thì ✅ |
| SePay webhook | → Fire vào Supabase trong 1-3s sau giao dịch ✅ |
| sepay-webhook handler | → Match mã ROK, mark order paid, fire send-order-notification ✅ |
| Frontend polling | → Detect status=paid trong 2s ✅ |
| UI customer | → "Thanh toán thành công!" tự hiện ✅ |
| Discord admin | → Receive notification với order detail ✅ |
| Daily digest cron | → 08:00 VN every day, Discord embed ✅ |

**Tổng thời gian customer từ pay tới UI confirm: ~5 giây.**

Khác biệt so với hiện tại:
- **Hiện tại**: customer pay → click "Đã chuyển khoản" → admin (mày) nhận Discord → check HD Bank → /admin mark paid → customer thấy confirm (5-30 phút manual)
- **Sau setup**: customer pay → tự confirm (5 giây, fully auto)
