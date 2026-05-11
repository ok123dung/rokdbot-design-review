import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "upgrade-tier-mid-month-rok-2026",
  title: "Upgrade Tier Mid-Month RokdBot 2026 — V1→V2 Pro-rata Tính Sao",
  description: "Nâng cấp V1 lên V2 giữa tháng — pro-rata tính như thế nào, mày mất bao nhiêu tiền, và khi nào nên upgrade ngay vs chờ hết kỳ. Phân tích ROI thực tế theo ngày còn lại.",
  date: "2026-05-11",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Cảm Giác Bị Khóa Trong Gói Rẻ Hơn Khi KvK Đang Chạy

Mày đang chạy V1. KvK vừa bắt đầu. Alliance leader nhắn: "thằng nào có Combo Spam V2 thì push barb chain đi, alliance đang tụt rank Honor."

V1 không có Combo. V2 mới có. Mày nhìn calendar — còn 18 ngày nữa mới hết tháng. Nâng lên V2 giờ này thì tính tiền sao?

Đây là bài giải đáp câu hỏi đó — với số liệu thực tế, không phải ước tính mơ hồ.

## Cơ Chế Pro-Rata RokdBot

RokdBot tính upgrade theo **ngày còn lại** trong kỳ hiện tại:

> Phí upgrade = (Giá V2 - Giá V1) × (Ngày còn lại / 30)

Ví dụ: Mày đăng ký V1 ngày 1, upgrade V1→V2 vào ngày 13 (còn 18 ngày):

- V2: 900.000đ/tháng
- V1: 750.000đ/tháng
- Chênh lệch: 150.000đ
- Pro-rata 18/30 ngày: **90.000đ**

Mày chỉ trả thêm **90.000đ** để có V2 ngay lập tức — không mất phần V1 đã trả.

Tháng tiếp theo, cycle bình thường 900.000đ V2.

## Khi Nào Nên Upgrade Ngay

### Upgrade ngay nếu:

**KvK đang active** — mỗi ngày không có Combo Spam V2 là mày đang farm 1/4 Honor so với V2. 18 ngày × (217 - 54 barb kills/ngày) = **2.934 kills chênh lệch**. Honor gap đó không lấy lại được.

**Mày đang trong Top 100 Kingdom server** — ở rank đó, mọi người đều push limit. V1 không đủ để giữ rank nếu competitor dùng V2/V3. Xem [so sánh ROI V1/V2/V3](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026) để có con số cụ thể.

**Alliance có coordinated barb chain session** — V2 Combo Spam + Luring + AOE cho phép mày tham gia chain multi-account. V1 solo chain không contribute được vào coordinated push.

> 🤖 V2 Combo Spam+Luring+AOE — 217 kills/ngày vs V1 54 kills/ngày. Pro-rata upgrade chỉ từ 50-100k. [Xem V2 Cao Cấp →](/#packages)

### Chờ hết kỳ nếu:

**Peacetime + không có event lớn** — nếu 2 tuần tới là server chill không có KvK, ROI của V2 chưa cần thiết. Tiết kiệm full 150k, upgrade vào đầu kỳ mới.

**Power mày dưới 15M** — V2 Combo cần đủ troops cho 1 đạo chain continuous. Dưới 15M power, hospital cap thấp, chain break liên tục, Combo không phát huy được. Nâng power trước, upgrade tier sau.

## Bảng Tính Pro-Rata Nhanh V1→V2

| Ngày đã qua | Ngày còn lại | Phí upgrade thêm |
|---|---|---|
| Ngày 1 | 29 ngày | 145.000đ |
| Ngày 8 | 22 ngày | 110.000đ |
| Ngày 15 | 15 ngày | 75.000đ |
| Ngày 22 | 8 ngày | 40.000đ |
| Ngày 27 | 3 ngày | 15.000đ |

Sau ngày 25 — upgrade luôn, chênh lệch không đáng kể.

## Quy Trình Upgrade Thực Tế

1. Vào [trang gói cước](/#packages), chọn V2
2. Hệ thống tính tự động số ngày còn lại và hiển thị **phí pro-rata**
3. Thanh toán VietQR với Order ID mới (xem [hướng dẫn thanh toán VietQR](/blog/pay-vietqr-rokdbot-step-by-step-rok-2026))
4. V2 kích hoạt trong **3-5 phút** — Combo Spam active ngay

Không cần liên hệ admin. Không cần chờ. Automation xử lý toàn bộ.

## FAQ

### Nếu upgrade V1→V3 bỏ qua V2 thì tính sao?

Pro-rata vẫn tính theo chênh lệch (V3 1.2M - V1 750k = 450k) × ngày còn lại / 30. Nếu upgrade vào ngày 15 → trả thêm 225.000đ để có V3 ngay lập tức.

### Có thể downgrade không (V2→V1)?

Không — downgrade không được refund. Chỉ upgrade. Xem [chính sách hoàn tiền](/blog/refund-policy-rokdbot-2026) để hiểu rõ các điều kiện.

### Upgrade xong, lịch gia hạn tháng sau có đổi không?

Không. Ngày gia hạn vẫn là ngày đăng ký ban đầu của mày. Chỉ có tier thay đổi — billing cycle không reset.

## Tóm Lại

KvK đang chạy + mày đang V1 = upgrade V2 ngay là tối ưu trong hầu hết trường hợp. Pro-rata đảm bảo mày không trả 2 lần — chỉ trả phần chênh lệch tương ứng ngày còn lại.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [So Sánh ROI V3 vs V2 vs V1 RokdBot 2026](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026)
- [Time Investment ROI Calculator RoK 2026](/blog/time-investment-roi-calculator-rok-2026)
- [Pay VietQR RokdBot Step by Step 2026](/blog/pay-vietqr-rokdbot-step-by-step-rok-2026)
  `,
};
