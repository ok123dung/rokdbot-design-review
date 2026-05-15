import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "switch-from-bluestacks-to-rokdbot-rok-2026",
  title: "Switch Từ BlueStacks Sang RokdBot RoK 2026 — Migration Guide",
  description: "Đang dùng BlueStacks macro và muốn chuyển sang bot cloud? Migration guide đầy đủ: checklist trước khi switch, bảo toàn progress, tránh account suspend, và tại sao không nên chạy song song 2 tool cùng lúc.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Bị kẹt với BlueStacks — và biết mình cần thay đổi

Mày đã từng fix script crash lúc 2am. Đã từng dậy check macro chỉ để thấy nó đứng im từ 10 tiếng trước. Đã từng tính tiền điện cuối tháng rồi nhìn lại Power account mà thấy không xứng.

BlueStacks macro là điểm khởi đầu tốt — nhưng nó có trần. Và khi mày đã chạm trần đó, sự thay đổi không phải là câu hỏi "có nên không?" mà là "switch đúng cách như nào?".

## Tại Sao Không Chạy Song Song

Câu hỏi đầu tiên mà phần lớn người hỏi: "Tôi có thể vừa giữ BlueStacks vừa thử RokdBot không?"

Câu trả lời ngắn: **Không nên**.

Lý do kỹ thuật:
- Cả 2 tool cùng gửi action đến account RoK = action conflict
- Game detect pattern hành vi bất thường khi 2 session cùng active
- Lilith risk tăng đáng kể khi có 2 automation source

Đúng quy trình: dừng BlueStacks hoàn toàn → activate RokdBot → chạy.

## Checklist Trước Khi Switch

Làm trước khi dừng BlueStacks:

**Account state:**
- Screenshot tất cả stats hiện tại (Power, Honor, commander list, research tree)
- Note lại schedule training hiện tại (bao nhiêu troops đang train, bao nhiêu tiếng còn lại)
- Check hospital — có wounded troops chưa heal không
- Verify gem balance và speedup inventory

**BlueStacks cleanup:**
- Pause tất cả macro script
- Log out khỏi game trong BlueStacks
- Uninstall BlueStacks nếu không cần nữa (optional — tốt cho bảo mật)

**Account security:**
- Đổi password RoK nếu chưa đổi trong 3 tháng gần đây
- Verify account link (Google / Apple / Facebook đều đã link chưa)
- Enable 2FA nếu platform hỗ trợ

> 🤖 Sau khi hoàn thành checklist — activate V1 RokdBot trong <24h. [Xem V1 Basic →](/#packages) · 750.000đ/tháng.

## Migration Process Step-by-Step

### Bước 1: Stop BlueStacks (D-Day)

- Đóng hết script BlueStacks
- Để account "idle" trong game 30-60 phút trước khi activate bot mới
- Lý do: tránh overlap session trong window activity Lilith monitor

### Bước 2: Activate RokdBot

- Đăng ký tại rokdbot.com
- Chọn gói phù hợp (xem section dưới)
- Nhận thông tin kết nối từ team support (thường <24h)
- Cung cấp account info theo hướng dẫn setup

### Bước 3: Config Initial Settings

RokdBot setup khác BlueStacks ở điểm quan trọng: **không cần script**. Mày chỉ cần:
- Chọn priority mode (gather-focused / barb-focused / balanced)
- Confirm commander hiện tại để bot nhận diện pair tối ưu
- Set training preference (T4 focus / T5 nếu có)

### Bước 4: Monitor 48h Đầu

- Check dashboard sau 6h đầu tiên
- Verify march đang ra ngoài gather / barb
- Check honor counter đang tăng
- Nếu có issue → contact support ngay trong 48h (trong window refund policy)

## Chọn Gói Khi Switch

Mapping từ BlueStacks sang RokdBot theo profile:

| BlueStacks Setup | RokdBot Tương Đương | Lý Do |
|---|---|---|
| 1 instance, basic gather + train | V1 750k | Basic automation, không Combo |
| 1 instance, barb farming manual | V2 900k | Combo Spam+Luring+AOE thay manual timing |
| 2 instance song song | V3 1,2M | 2 đạo chain đồng thời |
| 3+ instance, advanced | Premium VIP 3M | Multi-march, priority support |

Phần lớn người switch từ BlueStacks sang **V1 750k** trước — test 1 tháng, rồi upgrade V2 khi thấy kết quả.

## Điều Sẽ Khác Sau Khi Switch

**Khác tốt hơn:**
- Không còn debug script crash lúc 2am
- Power growth nhanh hơn nhờ uptime 99,7% thay vì 70-85%
- Không trả tiền điện cho PC (tiết kiệm 200-400k/tháng)
- AOE timing chính xác hơn → rợ chết nhiều hơn mỗi AP

**Khác cần làm quen:**
- Không có giao diện visual như BlueStacks — quản lý qua dashboard web
- Không tự custom script được — đổi lại bằng profile preset được optimize sẵn
- Support qua Zalo/Discord thay vì tự debug

## FAQ

### Sau khi switch, account có bị flag gì không?
Không. Account RoK không "nhớ" mày đã dùng BlueStacks. Miễn là dừng BlueStacks trước và có khoảng cách 30-60 phút trước khi activate bot mới.

### Progress 300 ngày BlueStacks có mất không khi switch?
Hoàn toàn không. Account progress lưu server-side phía Lilith, không liên quan đến tool mày dùng.

### Tôi có thể quay lại BlueStacks nếu không thích RokdBot không?
Có — nhưng với điều kiện: dừng RokdBot hoàn toàn trước khi chạy BlueStacks lại. Không chạy song song.

## Bắt đầu ngay

**V1 Basic 750.000đ/tháng** — điểm switch lý tưởng từ BlueStacks:
- Setup <24h, không cần cài gì trên PC
- Gather + train + heal + build tự động
- Uptime 99,7% vs 70-85% BlueStacks

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Bot vs BlueStacks Macro 300 Ngày Account Growth](/blog/bot-vs-bluestacks-macro-300-day-account-growth-comparison-rok)
- [Mobile vs PC RoK Comparison 2026](/blog/mobile-vs-pc-rok-comparison-2026)
- [RokdBot Safety Ban Risk Compliance 2026](/blog/rokdbot-safety-ban-risk-compliance-2026)
  `,
};
