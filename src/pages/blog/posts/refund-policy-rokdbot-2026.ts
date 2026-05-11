import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "refund-policy-rokdbot-2026",
  title: "Refund Policy RokdBot 2026 — Khi Nào Hoàn Tiền 100% + Quy Trình",
  description: "RokdBot hoàn tiền 100% trong trường hợp nào? Quy trình claim refund ra sao, mất bao lâu, cần chuẩn bị gì? Đọc trước khi mua để không bị bất ngờ — và hiểu tại sao Trial 150k là bước đúng đắn nhất.",
  date: "2026-05-11",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Bỏ tiền vào tool không rõ — nỗi sợ hợp lý

Không phải mọi tool RoK đều đáng tin. Có những service lấy tiền rồi ghost, có tool bị ban 1 tuần sau khi activate, có gói "hỗ trợ 24/7" nhưng reply sau 3 ngày.

Nỗi sợ đó hợp lý — và chính xác vì vậy chính sách hoàn tiền của RokdBot cần phải rõ ràng, cụ thể, không mơ hồ.

Bài này nói thẳng: **khi nào được hoàn 100%, khi nào không, quy trình làm gì**.

## Trường Hợp Được Hoàn Tiền 100%

### Trường hợp 1: Bot không hoạt động trong 48h đầu

Sau khi activate, nếu bot không chạy được trong 48 tiếng đầu tiên và team support không fix được — hoàn tiền toàn bộ.

Điều kiện:
- Account đã được kích hoạt đúng theo hướng dẫn
- Đã liên hệ support và cung cấp log error
- Team xác nhận lỗi về phía server/service

### Trường hợp 2: Downtime vượt SLA cam kết

Cam kết uptime 99,7% (tương đương <22 tiếng downtime/tháng). Nếu downtime trong tháng vượt ngưỡng này do lỗi server RokdBot (không phải Lilith maintenance hay sự cố phía game) — hoàn tiền pro-rata cho thời gian downtime thực tế.

### Trường hợp 3: Tính năng advertised không khả dụng

Nếu tính năng được liệt kê trong gói (ví dụ: Combo Spam + Luring + AOE trong V2) không hoạt động và không được fix trong 72h sau khi báo — hoàn tiền.

## Trường Hợp KHÔNG Được Hoàn Tiền

Phải nói thẳng để tránh hiểu nhầm:

- **Account bị ban bởi Lilith:** RokdBot cam kết ban rate <0,1%, nhưng không cam kết 0%. Nếu account bị ban (trường hợp cực hiếm), không hoàn tiền gói bot — đây là risk của mọi tool automation.
- **Đổi ý sau khi đã sử dụng >48h:** Nếu bot đã chạy bình thường 5 ngày rồi mày quyết định dừng — không hoàn.
- **Lý do phía account mày:** Commander không setup đúng, account bị suspend vì lý do khác, không theo hướng dẫn setup.
- **Force majeure từ Lilith:** Game update lớn làm bot tạm dừng (thường <24h để adapt) — không hoàn nhưng thời gian downtime được cộng vào gói.

> 🤖 Không chắc chắn? Bắt đầu với Trial 150k để test trước khi commit gói lớn. [Xem Trial →](/#packages)

## Quy Trình Claim Refund

Không phức tạp. 3 bước:

**Bước 1: Liên hệ support trong thời gian eligible**
- Kênh: Telegram support (link trong dashboard sau khi activate)
- Nội dung cần gửi: Order ID, ngày activate, mô tả vấn đề, screenshot/log nếu có

**Bước 2: Team xác minh**
- Thời gian xem xét: 24-48h làm việc
- Team kiểm tra server log, uptime log, activation record
- Nếu đủ điều kiện: xác nhận refund

**Bước 3: Hoàn tiền**
- Phương thức: cùng phương thức thanh toán ban đầu (chuyển khoản / ví điện tử)
- Thời gian: 1-3 ngày làm việc sau xác nhận

## Tại Sao Trial 150k Là Bước Đúng Đắn

Trước khi mua V1 750k hoặc V2 900k, câu hỏi đúng là: **"Bot có hoạt động với account và setup của mình không?"**

Trial 150k/tháng trả lời câu đó với chi phí tối thiểu:
- Chạy thật, không phải demo
- Đủ thời gian test trong KvK hoặc peacekeeping period
- Nếu hài lòng → upgrade lên V1/V2 liền tay

Gần như không có lý do để mua thẳng V2 mà không thử Trial trước — trừ khi mày đã đọc đủ case study và tự tin.

## So Sánh Confidence Level Theo Gói

| Gói | Giá | Best for |
|---|---|---|
| **Trial** | 150k | Lần đầu dùng bot, muốn test trước |
| **V1** | 750k | Đã test Trial, muốn full feature 1 đạo cơ bản |
| **V2** | 900k | Cần Combo Spam+Luring+AOE, F2P sweet spot |
| **V3** | 1,2M | Power 30M+, muốn 2 đạo chain |
| **Premium VIP** | 3M | Multi-account, 3-4 đạo, top kingdom player |

## FAQ

### Có thể hoàn tiền sau 1 tuần dùng không?
Không — nếu bot đã chạy bình thường >48h, không eligible. Chính sách rõ: 48h đầu tiên là cửa sổ hoàn tiền nếu có lỗi kỹ thuật.

### Nếu Lilith có KvK maintenance và bot không chạy được thì sao?
Downtime từ Lilith maintenance không tính vào SLA của RokdBot. Đây là force majeure từ phía game. Tuy nhiên, thời gian đó sẽ được cộng vào gói của mày.

### Có thể pause gói giữa tháng không?
Pause có, nhưng thời gian pause không được hoàn tiền — chỉ được cộng thêm vào cuối period nếu liên hệ support trước.

## Bắt đầu ngay

Muốn test không risk cao — **Trial 150k** là điểm bắt đầu đúng nhất:
- Đủ tính năng để đánh giá chất lượng bot
- Chi phí thấp nhất để test thực tế
- Upgrade lên V1/V2 bất kỳ lúc nào

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [RokdBot Safety Ban Risk Compliance 2026](/blog/rokdbot-safety-ban-risk-compliance-2026)
- [F2P to VIP2 Bot Progression Roadmap RoK 2026](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
- [RokdBot V3 vs V2 vs V1 ROI Comparison 2026](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026)
  `,
};
