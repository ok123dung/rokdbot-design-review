# SePay Webhook Setup — Fix Auto-Verify Payment Flow

> **Vấn đề hiện tại (2026-05-14)**: 15/15 đơn hàng từ tháng 3 đến nay đều stuck status `pending`. SePay webhook chưa bao giờ fire vào Supabase. Tổng giá trị mắc kẹt: **14,850,000đ**.

## Mục tiêu

Setup SePay để khi HD Bank 0915966853 nhận giao dịch → SePay POST webhook về Supabase → bot tự động mark order `paid` → khách hàng thấy "Thanh toán thành công" + admin nhận Discord notification.

---

## Step 1: Verify SePay account

### 1.1 Login SePay dashboard

Truy cập: https://my.sepay.vn/login

Account đăng ký phải khớp với chủ thẻ HD Bank 0915966853 (NGUYEN HUU DUNG).

### 1.2 Kiểm tra Bank account đã connect chưa

Sidebar → **Tài khoản ngân hàng** (Bank Accounts)

Xem có account `0915966853 — HD Bank` không. Nếu chưa:

1. Click **Thêm tài khoản**
2. Chọn ngân hàng **HD Bank**
3. Số tài khoản: `0915966853`
4. Tên chủ tài khoản: `NGUYEN HUU DUNG`
5. SePay yêu cầu xác thực qua 1 trong 2 cách:
   - **Internet Banking sync** (preferred): SePay đăng nhập HD Bank Internet Banking để pull giao dịch real-time
   - **Manual upload**: upload sao kê PDF định kỳ (không real-time, không khuyến nghị)

→ Chọn Internet Banking sync cho auto-verify hoạt động.

### 1.3 Verify SePay đã nhận giao dịch trước đó

Sidebar → **Lịch sử giao dịch** (Transactions)

Filter theo HD Bank 0915966853, thời gian 60 ngày qua. Nếu thấy giao dịch incoming với content "ROK XXXXXX" → SePay đã ghi nhận → vấn đề chỉ là webhook chưa fire. Skip sang **Step 2**.

Nếu KHÔNG thấy giao dịch nào → hoặc:
- (a) Khách thật sự chưa chuyển tiền (orders bị abandon) → check sao kê HD Bank để xác nhận
- (b) SePay chưa connect bank → quay lại 1.2

---

## Step 2: Configure Webhook URL

### 2.1 Lấy SePay API Key

Sidebar → **Cài đặt** (Settings) → **API Webhook**

- Tạo mới API Key nếu chưa có (name: `rokdbot-supabase`)
- **Copy giá trị API Key** — sẽ dùng ở Step 3

### 2.2 Set webhook URL

Trong cùng trang **API Webhook**:

- **Webhook URL**: 
  ```
  https://inondhimzqiguvdhyjng.supabase.co/functions/v1/sepay-webhook
  ```
- **Method**: POST
- **Authorization header**: 
  ```
  Apikey {API_KEY_VỪA_TẠO}
  ```
- **Trigger event**: chọn `Giao dịch đến` (Incoming transfer only)

Click **Lưu** (Save).

### 2.3 Test webhook từ SePay dashboard

SePay thường có nút **Test webhook** (gửi 1 payload giả). Click thử.

Kết quả mong đợi: SePay UI hiển thị `200 OK` từ endpoint.

Nếu lỗi:
- `401 Unauthorized` → API key trong SePay không khớp với Supabase env var (sẽ fix ở Step 3)
- `404/500` → webhook URL sai
- `Connection timeout` → endpoint không reachable (check Supabase project status)

---

## Step 3: Set `SEPAY_API_KEY` env var trong Supabase

API key của Step 2.1 phải set vào Supabase project env, không phải `.env.production` (đây là server-side secret, không bake vào bundle).

### 3.1 Via Supabase dashboard

1. Vào https://supabase.com/dashboard/project/inondhimzqiguvdhyjng/functions
2. Tab **Secrets**
3. Thêm mới:
   - Name: `SEPAY_API_KEY`
   - Value: `{API_KEY_TỪ_STEP_2.1}`
4. Save

### 3.2 Hoặc via CLI (alternative)

```bash
supabase secrets set SEPAY_API_KEY=your_api_key_here \
  --project-ref inondhimzqiguvdhyjng
```

### 3.3 Cần set thêm cho features mới của project:

```
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/XXXXX/YYYYY
DIGEST_API_KEY=any-random-string-for-cron-auth
RESEND_API_KEY=re_XXXXXXX
```

- `DISCORD_WEBHOOK_URL` — Discord webhook để nhận alert khi customer self-report payment + daily pending digest. Tạo qua Server Settings → Integrations → Webhooks. (Optional — nếu skip, alert vẫn được ghi vào DB qua `customer_reported_paid_at` field)
- `DIGEST_API_KEY` — random string (vd. UUID). Dùng làm Auth header khi cron call `pending-orders-digest` endpoint
- `RESEND_API_KEY` — **HIỆN CHƯA SET** (verified 2026-05-14 audit). Email notification cho customer + admin sẽ không gửi nếu thiếu key này. Lấy từ [resend.com/api-keys](https://resend.com/api-keys) (free 3,000 emails/month)

### 3.4 Trạng thái hiện tại các env vars (2026-05-14)

Audit confirmed các env sau **đã set** (vì code edge functions chạy được):
- ✅ `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_ANON_KEY` (auto)

**Chưa set** (return error khi function cần dùng):
- ❌ `RESEND_API_KEY` — verified missing (send-admin-state-now returned "RESEND_API_KEY env var not set")
- ❌ `SEPAY_API_KEY` — assumed missing (sepay-webhook trả 401 cho mọi request)
- ❌ `DISCORD_WEBHOOK_URL` — assumed missing
- ❌ `DIGEST_API_KEY` — assumed missing

---

## Step 4: Verify End-to-End

### 4.1 Tạo test order trên rokdbot.com

1. Mở https://rokdbot.com/#packages
2. Click "Gói Dùng Thử 150k"
3. Nhập contact (Zalo: `0000000000` test)
4. Submit → QR hiển thị, lấy mã `ROK XXXXXX`

### 4.2 Chuyển khoản test thật

- Mở app HD Bank → quét QR
- **Chuyển 150,000đ** với nội dung `ROK XXXXXX`
- Confirm transaction

### 4.3 Verify auto-confirm

Trong 1-3 phút:

1. **Frontend**: PaymentModal UI tự đổi sang "Thanh toán thành công!" (realtime subscription)
2. **Discord channel**: nhận notification từ `send-order-notification`
3. **Supabase DB**: 
   ```sql
   SELECT status, paid_at, transaction_id 
   FROM orders WHERE payment_code = 'XXXXXX';
   ```
   → `status='paid'`, `paid_at` không null, `transaction_id` có giá trị

### 4.4 Recover 150k test (optional)

Nếu test 150k thật, mày có thể recover bằng cách tự chuyển ngược lại — hoặc giữ nó như business expense.

---

## Step 5: Recover 14 Đơn Pending Hiện Tại

Sau khi webhook fix xong, cần xử lý 14 đơn cũ từ March → May.

### 5.1 Lấy sao kê HD Bank tháng 3-5/2026

Login HD Bank Internet Banking → Sao kê chi tiết → Filter incoming transfer có nội dung chứa "ROK"

Liệt kê các giao dịch khớp với 14 mã đơn hàng:

```
PQUGGP - 900,000đ - 2026-05-14
MRBAU2 - 3,000,000đ - 2026-05-12
4GHSQD - 900,000đ - 2026-05-10
KBWPEX - 3,000,000đ - 2026-05-09
GG72AL - 1,200,000đ - 2026-05-09
LWYXDA - 900,000đ - 2026-05-09
AUHX9A - 150,000đ - 2026-04-28
ESXMBH - 900,000đ - 2026-04-18
9MLMU7 - 1,200,000đ - 2026-04-18
2B4EHL - 900,000đ - 2026-04-18
EW9PTW - 750,000đ - 2026-04-11
2SPX27 - 150,000đ - 2026-03-24
6KGGTW - 750,000đ - 2026-03-20
CY7LQL - 150,000đ - 2026-03-20
```

### 5.2 Đánh dấu paid trong DB

Cho từng mã thấy có giao dịch khớp, login Admin Dashboard (`/admin`) → tìm order → click `paid`.

Hoặc bulk SQL (chỉ admin có service role):

```sql
-- Example: mark 3 orders paid với transaction ID từ sao kê
UPDATE orders SET status = 'paid', paid_at = '2026-05-09 10:30:00+07'
WHERE payment_code IN ('PQUGGP', 'KBWPEX', 'GG72AL');

UPDATE payments SET status = 'verified',
  transaction_id = 'FT-from-bank-statement',
  verified_at = '2026-05-09 10:30:00+07'
WHERE order_id IN (SELECT id FROM orders WHERE payment_code = 'PQUGGP');
```

### 5.3 Đơn không có giao dịch khớp → cancel

```sql
UPDATE orders SET status = 'cancelled', notes = 'No matching bank transaction found - assumed abandoned'
WHERE status = 'pending' AND created_at < NOW() - INTERVAL '7 days';
```

---

## Step 6: Setup Daily Pending Digest Cron

Để admin không bao giờ lỡ pending orders nữa:

### 6.1 Option A — GitHub Actions (free)

Đã có sẵn `.github/workflows/blog-meta-cron.yml`. Thêm 1 workflow mới `pending-digest-cron.yml`:

```yaml
name: Daily pending orders digest

on:
  schedule:
    - cron: "0 1 * * *"   # 08:00 VN time (UTC+7)
  workflow_dispatch:

jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - name: Call digest endpoint
        run: |
          curl -X POST https://inondhimzqiguvdhyjng.supabase.co/functions/v1/pending-orders-digest \
            -H "Authorization: Bearer ${{ secrets.DIGEST_API_KEY }}" \
            -H "Content-Type: application/json"
```

Lưu `DIGEST_API_KEY` vào GitHub repo secrets (Settings → Secrets and variables → Actions).

### 6.2 Option B — Supabase scheduled trigger (paid plan)

Supabase pg_cron extension. Skip nếu đang dùng free plan.

---

## Troubleshooting

### Webhook fire nhưng order vẫn pending

Check Supabase edge function logs:
```
https://supabase.com/dashboard/project/inondhimzqiguvdhyjng/functions/sepay-webhook/logs
```

Common issues:
- **"No payment code found"** → SePay sending content không khớp regex `ROK\s*([A-Z0-9]{6})`. Check transaction content format trong SePay
- **"Order not found"** → payment_code trong webhook không match DB. Maybe order đã bị delete hoặc payment_code uppercase/lowercase mismatch
- **"Amount mismatch"** → khách chuyển ít hơn yêu cầu (vd chuyển 149,000 thay vì 150,000). Hiện logic là `>=`, nhưng tốt nhất khách chuyển đúng

### Discord webhook không gửi notification

Check `DISCORD_WEBHOOK_URL` env var. Test:
```bash
curl -X POST $DISCORD_WEBHOOK_URL \
  -H "Content-Type: application/json" \
  -d '{"content":"test from cli"}'
```

### Email notification không gửi

`send-order-notification` cần `RESEND_API_KEY`. Hiện anonymous orders (`user_id=null`) sẽ skip email vì không có email lookup. Discord vẫn fire OK.

---

## Files Liên Quan

- `supabase/functions/create-order/index.ts` — tạo order + QR
- `supabase/functions/sepay-webhook/index.ts` — receive SePay webhook
- `supabase/functions/report-payment-received/index.ts` — customer self-report
- `supabase/functions/pending-orders-digest/index.ts` — daily admin alert
- `supabase/functions/send-order-notification/index.ts` — email + Discord notif
- `src/components/shop/PaymentModal.tsx` — frontend payment UI
- `src/pages/AdminDashboard.tsx` — admin order management

---

## Checklist Sau Khi Setup

- [ ] SePay account active + HD Bank 0915966853 connected
- [ ] SePay webhook URL = `https://inondhimzqiguvdhyjng.supabase.co/functions/v1/sepay-webhook`
- [ ] SePay API key = `SEPAY_API_KEY` env var trong Supabase Edge Functions
- [ ] `DISCORD_WEBHOOK_URL` set in Supabase env
- [ ] `DIGEST_API_KEY` set in Supabase env + GitHub repo secrets
- [ ] Test transaction 150k → auto-confirm trong 1-3 phút
- [ ] 14 đơn pending cũ → manual recovery hoặc cancel
- [ ] GitHub Actions `pending-digest-cron.yml` scheduled
- [ ] Sau 7 ngày: check log `pending-orders-digest` chạy đều, no errors
