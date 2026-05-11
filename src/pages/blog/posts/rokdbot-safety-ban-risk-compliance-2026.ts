import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "rokdbot-safety-ban-risk-compliance-2026",
  title: "RokdBot Có Bị Ban Không? Phân Tích Rủi Ro + Best Practices 2026",
  description: "Lilith chưa mass-ban bot users qua 8 KvK seasons. Tỷ lệ ban <0,1% với 800+ khách V2. Phân tích cơ chế anti-cheat RoK, cloud vs client macro, 3 best practices giảm rủi ro xuống thấp nhất. Đọc trước khi quyết định.",
  date: "2026-05-09",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## 8 KvK seasons, 800+ khách V2, 0 lần mass ban

Câu hỏi phổ biến nhất khi ai đó lần đầu nghe về bot RoK: *"Có bị ban không?"*

Câu trả lời thực tế: Lilith Games **chưa bao giờ tổ chức chiến dịch mass-ban** nhắm vào bot users qua 8 KvK seasons liên tiếp. Cơ sở khách hàng V2 của RokdBot hiện trên 800 tài khoản. Tỷ lệ ban được ghi nhận: **<0,1%** — và phần lớn các case đó đều vi phạm best practices rõ ràng (share account, dùng nhiều device cùng lúc sai cách, dùng client macro tự làm song song với bot cloud).

Điều này không có nghĩa là rủi ro = 0. Có nghĩa là rủi ro **đủ thấp để phân tích và quản lý** — không phải né tránh mù quáng.

## Cơ Chế Anti-Cheat của Lilith RoK

Lilith dùng hệ thống phát hiện bất thường hành vi, không phải scan file client hay memory injection. Hệ thống này tìm kiếm:

**Pattern bất thường về timing**: Click speed dưới ngưỡng human reaction time (~150ms), interval quá đều đặn (ví dụ: tap mỗi đúng 200ms trong 1 giờ).

**Bất thường về session**: Account active 22-24h liên tục không có break, hành vi lặp lại hoàn toàn giống nhau qua nhiều ngày.

**Multiple device login**: Đăng nhập từ 2+ thiết bị cùng lúc, hoặc IP thay đổi đột ngột trong 1 session.

**Client-side injection**: Memory read/write trực tiếp vào process game — phát hiện gần như ngay lập tức.

> 🤖 RokdBot không dùng client injection. Cloud server độc lập, không chạm vào process game client. **[Xem cơ chế →](/#packages)**

## Cloud Server vs Client Macro — Khác Nhau Ở Đâu?

Đây là điểm kỹ thuật quan trọng nhất:

| Loại | Cách hoạt động | Rủi ro detect |
|---|---|---|
| **Client macro** (tự làm) | Chạy trên cùng thiết bị, simulate input | Cao — timing quá đều, on-device |
| **Memory inject** | Read/write process game | Rất cao — Lilith detect ngay |
| **Cloud bot (RokdBot)** | Cloud server riêng, hành vi human-like | Thấp — không on-device |
| **Manual play** | Người thật | 0 |

RokdBot chạy trên **infrastructure cloud riêng biệt**. Thiết bị của bạn không bị modify. Không có process nào chạy trên điện thoại/máy tính của bạn ngoài app game gốc. Đây là lý do cốt lõi tại sao tỷ lệ ban thấp.

Human-like timing variance được tích hợp: không có interval cố định, không có click speed dưới human threshold. Hành vi bot được thiết kế để nằm trong distribution hành vi player thực tế.

## Phân Tích ToS RoK

Lilith Terms of Service điều khoản 4.2 cấm: *"use cheats, exploits, automation software, bots, hacks, mods or any unauthorized third-party software."*

Đây là điều khoản **rộng** áp dụng cho mọi game mobile — giống nhau từ Clash of Clans đến PUBG Mobile. Enforcement thực tế phụ thuộc vào:

1. **Khả năng phát hiện kỹ thuật** — không phải ToS text
2. **ROI của enforcement** — mass ban làm mất player base, revenue
3. **Threshold behavior** — behavior nằm trong variance hợp lý không bị flag

Không có game mobile nào enforcement ToS 100% với bot users vì **player base overlap quá lớn**. Lilith biết bot tồn tại trong RoK ecosystem — chiến lược của họ là giữ ngưỡng phát hiện ở mức protect competitive integrity, không phải eliminate toàn bộ automation.

## 3 Best Practices Giảm Rủi Ro

### 1. Không dùng client macro song song

Nếu bạn đang dùng RokdBot cloud, **đừng chạy thêm bất kỳ macro on-device nào**. Không phải vì conflict kỹ thuật — vì client macro tạo pattern bất thường mà hệ thống detect.

### 2. Giữ behavior profile nhất quán

Đừng switch đột ngột từ "inactive 3 ngày" sang "active 22h liên tục". RokdBot có option ramp-up — bật dần thay vì full throttle ngay ngày đầu. Consistency dài hạn tốt hơn burst ngắn hạn.

### 3. Không share account / không multi-login

Account của bạn chỉ nên active từ 1 source tại 1 thời điểm. Bot cloud chạy trên server — thiết bị cá nhân của bạn không cần login cùng lúc. Nếu cần xem game trực tiếp, có thể dùng screen share từ cloud thay vì login đồng thời.

> ⚡ 3 best practices trên đây là lý do tỷ lệ ban của RokdBot dưới 0,1%. Không phải magic — là discipline. **[Bắt đầu Trial 150k →](/#packages)**

## Case Thực Tế: Khi Nào Xảy Ra Ban?

Qua 8 KvK seasons, các case ban được ghi nhận đều có 1 trong các dấu hiệu:

- **Dùng client macro homemade song song**: Tự viết script Python/AHK trên cùng thiết bị + bot cloud → double pattern bất thường
- **Account share giữa nhiều người**: 2-3 người cùng login từ IP khác nhau trong 1 ngày
- **Report từ player khác**: Rival trong KvK report account → Lilith manual review → flag behavior bất thường khác

Không có case nào bị ban **chỉ** vì dùng bot cloud tuân thủ best practices.

## Câu Hỏi Thường Gặp

### Nếu bị ban, RokdBot có hỗ trợ không?

ToS của RokdBot nêu rõ: bot chạy trên rủi ro của người dùng. Không có gói bảo hiểm account. Đây là lý do Trial 150k tồn tại — test với account phụ nếu bạn lo ngại, trước khi dùng main.

### Bot có hoạt động sau update game không?

Bot cloud được update theo game version. Lilith update thường không ảnh hưởng đến cloud behavior pattern — chỉ ảnh hưởng nếu UI thay đổi lớn, và team RokdBot patch trong 24-48h.

### Account bao nhiêu ngày thì "an toàn" để bot?

Không có magic number. Account có lịch sử play normal dài hơn → behavior variance có baseline tự nhiên hơn. Account mới toanh dùng bot ngay ngày 1 → rủi ro cao hơn account 6 tháng tuổi. Recommendation: chơi thủ công 2-4 tuần trước khi bật bot.

## Bắt Đầu Ngay

**Trial 150.000đ / 7 ngày** — rủi ro thấp nhất để bắt đầu:
- Test với account thứ hai nếu muốn
- 7 ngày gather + build tự động
- Không cam kết dài hạn

Nếu sau 7 ngày bạn thấy behavior bình thường, không issue → nâng V1 hoặc V2 với confidence.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Anti-Captcha 2Captcha RoK Bot 2026 — Cơ Chế Bảo Vệ Tier Cao](/blog/anti-captcha-2captcha-rok-bot-2026)
- [F2P → VIP2 Trong 45 Ngày — Roadmap Bot Không Nạp Gem](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
- [RokdBot V1 vs V2 vs V3 — Gói Nào ROI Tốt Nhất?](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026)
  `,
};
