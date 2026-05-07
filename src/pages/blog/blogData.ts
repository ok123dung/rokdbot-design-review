export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: string;
  /** Absolute or root-relative URL of the post's hero image (1200×630 recommended).
   * Falls back to site's default OG image when omitted. */
  coverImage?: string;
  /** Author name for BlogPosting schema. Defaults to "RokdBot Team". */
  author?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cach-farm-gem-hieu-qua-rise-of-kingdoms",
    title: "Cách Farm Gem Hiệu Quả Trong Rise of Kingdoms 2026",
    description: "Hướng dẫn chi tiết cách farm gem nhanh nhất trong Rise of Kingdoms. So sánh farm gem thủ công vs bot tự động.",
    date: "2026-03-20",
    readTime: "5 phút",
    content: `
## Gem Là Gì Và Tại Sao Quan Trọng?

Gem là tài nguyên quý giá nhất trong Rise of Kingdoms. Bạn cần gem để mua VIP, speedup, và nhiều items quan trọng khác. Giá gem trong shop rất đắt — nhưng có cách farm miễn phí.

## 3 Cách Farm Gem Phổ Biến

### 1. Farm Gem Thủ Công
Đi tìm mỏ gem trên bản đồ và gửi đạo quân đi thu thập. Trung bình farm được khoảng 1,000-2,000 gem/ngày nếu chơi liên tục.

**Ưu điểm:** Miễn phí, an toàn
**Nhược điểm:** Tốn rất nhiều thời gian, phải online liên tục

### 2. Mua Gem Bằng Tiền Thật
Mua trực tiếp từ shop trong game hoặc qua các pack khuyến mãi.

**Ưu điểm:** Nhanh
**Nhược điểm:** Rất tốn tiền — 100 USD chỉ được khoảng 12,000 gem

### 3. Dùng Bot Tự Động (Hiệu Quả Nhất)
Sử dụng dịch vụ bot farm như RokdBot để tự động thu thập gem 24/7 không cần can thiệp.

**Ưu điểm:** Farm 24/7, thu được 3,000-8,000 gem/ngày, không tốn thời gian
**Nhược điểm:** Cần trả phí dịch vụ (nhưng rẻ hơn nhiều so với mua gem)

## So Sánh Hiệu Quả

| Phương pháp | Gem/ngày | Chi phí/tháng | Thời gian bỏ ra |
|-------------|----------|---------------|-----------------|
| Farm thủ công | 1,000-2,000 | 0đ | 4-6 tiếng/ngày |
| Mua gem | Tùy ý | 2-5 triệu VNĐ | 0 |
| Bot RokdBot | 3,000-8,000 | 150k-1.2M VNĐ | 0 |

## Tại Sao Bot Farm Gem Hiệu Quả Hơn?

Bot chạy 24/7 không nghỉ, tự động tìm mỏ gem tối ưu, đặc biệt trong KvK map có thể farm 6,000-8,000 gem/ngày — gấp 4-8 lần farm thủ công.

RokdBot còn có tính năng độc quyền **Spam Barbarian + Luring + AOE** giúp farm AP cực nhanh, từ đó nhận thêm gem từ rewards.

## Kết Luận

Nếu bạn nghiêm túc chơi Rise of Kingdoms, đầu tư vào dịch vụ bot farm là lựa chọn thông minh nhất. Tiết kiệm thời gian, tiết kiệm tiền, và farm được nhiều gem hơn.
    `,
  },
  {
    slug: "bot-rise-of-kingdoms-co-an-toan-khong",
    title: "Bot Rise of Kingdoms Có An Toàn Không? Sự Thật Năm 2026",
    description: "Phân tích chi tiết về độ an toàn của bot RoK. Rủi ro ban account, cách giảm thiểu, và tại sao RokdBot an toàn hơn.",
    date: "2026-03-20",
    readTime: "7 phút",
    content: `
## Câu Hỏi Lớn Nhất Của Người Chơi

"Dùng bot có bị ban không?" — đây là câu hỏi mà 99% người chơi Rise of Kingdoms hỏi trước khi sử dụng bot. Câu trả lời: **có rủi ro, nhưng có thể giảm thiểu đáng kể**.

## Lilith Games Phát Hiện Bot Như Thế Nào?

### 1. Captcha In-Game
Game sẽ hiện captcha bất ngờ. Nếu không giải đúng, hệ thống nghi ngờ bạn dùng bot.

### 2. Pattern Detection
Nếu bạn farm liên tục 24/7 không nghỉ với pattern giống hệt nhau, hệ thống có thể phát hiện.

### 3. Report Từ Người Chơi Khác
Nếu bạn farm quá lộ liệu, người chơi khác có thể report bạn.

## Cách RokdBot Giảm Thiểu Rủi Ro

### Anti-Captcha Tự Động
Bot tích hợp hệ thống giải captcha tự động sử dụng công nghệ 2Captcha, giải quyết mọi loại captcha trong game.

### Giả Lập Hành Vi Người Thật
- Thời gian nghỉ ngẫu nhiên giữa các actions
- Click pattern khác nhau mỗi lần
- Session duration ngẫu nhiên (không farm 24/7 liên tục)
- Thỉnh thoảng tự động tạm dừng

### Server Riêng Biệt
Mỗi account chạy trên môi trường riêng, không chia sẻ IP. Điều này giảm thiểu rủi ro bị detect bởi hệ thống anti-cheat.

### Cập Nhật Liên Tục
Bot được update thường xuyên để tương thích với phiên bản game mới nhất và các thay đổi trong hệ thống anti-cheat.

## Mẹo An Toàn Khi Dùng Bot

1. **Không farm 24/7 liên tục** — set lịch nghỉ
2. **Không khoe** với người chơi khác là đang dùng bot
3. **Dùng dịch vụ cloud** (như RokdBot) thay vì tự chạy — ít lỗi hơn
4. **Chọn bot có anti-detect** — không phải bot nào cũng an toàn

## Kết Luận

Không có bot nào an toàn 100%, nhưng với công nghệ anti-detect hiện đại như RokdBot, rủi ro được giảm thiểu tối đa. Hàng nghìn người chơi đã sử dụng mà không gặp vấn đề.
    `,
  },
  {
    slug: "huong-dan-su-dung-rokdbot",
    title: "Hướng Dẫn Sử Dụng Dịch Vụ RokdBot — Từ A Đến Z",
    description: "Hướng dẫn đầy đủ cách đăng ký, thanh toán, và bắt đầu sử dụng dịch vụ bot farm RokdBot cho Rise of Kingdoms.",
    date: "2026-03-20",
    readTime: "4 phút",
    content: `
## RokdBot Là Gì?

RokdBot là dịch vụ treo bot Rise of Kingdoms trên cloud server. Bạn không cần tải phần mềm, không cần PC mạnh — chúng tôi chạy bot cho bạn trên máy chủ của chúng tôi.

## Các Bước Sử Dụng

### Bước 1: Chọn Gói Dịch Vụ

Truy cập rokdbot.com và chọn gói phù hợp:

- **Gói Dùng Thử** (150,000đ / 7 ngày) — cho khách mới, giới hạn 1 lần
- **Gói Cơ Bản** (750,000đ / 30 ngày) — auto farm RSS + gems, train troops
- **Gói Cao Cấp** (900,000đ / 30 ngày) — thêm custom strategy, events
- **Gói Siêu Cấp** (1,200,000đ / 30 ngày) — multi-account, VIP support

### Bước 2: Thanh Toán

Bấm "Mua ngay" → hệ thống hiển thị mã QR VietQR. Mở app ngân hàng, quét QR và chuyển khoản. Hệ thống tự động xác nhận trong vài giây.

Khách quốc tế có thể thanh toán qua **PayPal**.

### Bước 3: Liên Hệ Gửi Thông Tin

Sau khi thanh toán, bạn sẽ nhận mã đơn hàng. Liên hệ chúng tôi qua:
- **Discord:** discord.gg/UPuFYCw4JG
- **Zalo:** zalo.me/g/rqgqyd878

Gửi mã đơn hàng + thông tin tài khoản game (Governor ID, Server, Kingdom).

### Bước 4: Bot Bắt Đầu Chạy

Trong vòng 24 giờ, bot sẽ được setup và bắt đầu chạy. Bạn có thể kiểm tra trạng thái đơn hàng trên website bằng nút "Tra cứu đơn".

## 29 Tính Năng Tự Động

Bot RokdBot có 29 tính năng tự động hóa, bao gồm:
- Auto farm RSS & Gems 24/7
- Auto train & heal troops
- Auto upgrade buildings & research
- **Spam Barbarian + Luring + AOE** (độc quyền RokdBot)
- Auto captcha solving
- Và nhiều hơn nữa...

## Câu Hỏi Thường Gặp

**Bot chạy được bao lâu?** Theo gói bạn chọn — 7 ngày hoặc 30 ngày.

**Có cần để máy tính mở không?** Không. Bot chạy trên cloud server của chúng tôi.

**Có hoàn tiền không?** Có hỗ trợ hoàn tiền trong 24h đầu nếu bot chưa được activate.

## Bắt Đầu Ngay

Truy cập rokdbot.com để chọn gói và bắt đầu. Thanh toán tự động, bot chạy trong 24h!
    `,
  },
];
