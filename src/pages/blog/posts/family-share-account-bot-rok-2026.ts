import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "family-share-account-bot-rok-2026",
  title: "Family Share Account + Bot RoK 2026 — 1 Acc 2 Người Chơi Phối Hợp",
  description: "Vợ chồng / bạn bè share 1 account RoK + 1 subscription bot — phân chia nhiệm vụ thủ công và bot tự động như thế nào để không xung đột session? Workflow thực tế cho 2 người cùng optimize 1 account.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## 1 Account, 2 Người Chơi — Ai Làm Gì?

Mày và vợ (hoặc bạn thân) cùng chơi 1 account RoK. Không phải chuyện hiếm — nhiều couple VN share account để cùng build city hall nhanh hơn, KvK có 2 bộ não xử lý tình huống.

Nhưng thêm bot vào equation: **ai control gì? Khi nào bot chạy? Khi nào người thật chơi?**

Không có workflow — là session conflict, là action đè lên nhau, là bot bị interrupt liên tục. Bài này đưa ra framework thực tế.

## Tại Sao Session Conflict Là Vấn Đề Thật

Bot RokdBot chạy trên cloud server riêng, simulate touch inputs vào game session. Nếu cùng lúc người thật cũng đang chơi trên phone/PC — **2 input sources cùng điều khiển 1 session**:

- Bot đang march đến barb → người thật tap cancel march
- Người thật đang manage alliance → bot trigger skill timing bị off
- Bot đang heal hospital → người thật spend speedup vào chỗ khác

Kết quả: bot efficiency drop 40-60%, một số actions fail silently.

**Giải pháp duy nhất là time partition rõ ràng.**

## Framework Time Partition — 2 Người + Bot

### Mô Hình Khuyến Nghị: Block Schedule

Chia ngày thành 3 block:

| Block | Thời gian | Controller |
|---|---|---|
| Bot Block 1 | 01:00 - 07:00 | Bot chạy autonomous |
| Player A Block | 07:00 - 14:00 | Người chơi 1 (buổi sáng) |
| Player B Block | 19:00 - 23:00 | Người chơi 2 (buổi tối) |
| Bot Block 2 | 23:00 - 01:00 | Bot chạy autonomous |

Khoảng trống 14:00-19:00 = bot chạy hoặc tùy người nào rảnh — nhưng **không bao giờ 2 người cùng chơi cùng lúc**.

### Phân Chia Nhiệm Vụ Theo Strength

**Bot làm tốt nhất:**
- Barb chain 24/7 (kể cả lúc không ai online)
- Auto heal + train
- Gather resource tile
- Daily login + claim event

**Người chơi làm tốt hơn bot:**
- KvK decision-making (rally target, migrate timing)
- Alliance politics (chat, coordinate)
- Ark of Osiris live event
- Custom rally timing

> 🤖 V3 Siêu Cấp cho phép 2 đạo chain — khi 2 người không online, bot cày đủ để maintain Top 50 Kingdom. [Xem V3 →](/#packages) · 1.200.000đ/tháng.

## Setup Bot Cho 2-Person Account

### Config Ưu Tiên Khi Không Có Ai Online

Trong Bot Block (01:00-07:00):
- Priority 1: Barb chain Combo Spam V3
- Priority 2: Gather food + stone
- Priority 3: Auto train (dùng speedup khi close to cap)

### Config Khi Sắp Có Người Chơi

30 phút trước khi Player A bắt đầu block → bot switch sang **Passive Mode**:
- Stop march
- Stop barb chain
- Chỉ giữ auto-heal + auto-claim daily

Điều này đảm bảo khi Player A mở game, không có march in-progress hoặc skill timing cần handle.

### Cách Trigger Handover

V3 có tính năng **Scheduled Handover**: mày set giờ, bot tự pause và đợi. Player A mở game = bot đã dừng sạch, không có action pending.

## Alliance Coordination Khi Share Account

Quan trọng: nói với R4/R5 rằng account này có 2 người quản lý. Lý do:

- Khi rally cần confirm, ai là người nhận notification?
- Khi alliance chat cần response, timezone của ai?
- Khi KvK phase change cần decision, ai online?

Thiết lập **primary contact** (thường là người chơi buổi tối) cho alliance communication. Bot không tham gia chat — chỉ action.

## FAQ

### 2 người dùng chung 1 subscription được không?

Có — subscription gắn với account RoK, không phải với email người dùng. 2 người share 1 account = 1 subscription. Không cần mua 2 gói.

### Nếu 1 người muốn chơi ngoài block của mình thì sao?

Thông báo cho người kia và tạm pause bot thủ công từ dashboard. Bot sẽ resume khi mày tắt manual override. Xem thêm về cách quản lý subscription tại [hướng dẫn thanh toán VietQR](/blog/pay-vietqr-rokdbot-step-by-step-rok-2026).

### V3 có phù hợp hơn V2 cho use case này không?

V3 với 2 đạo chain là match tốt hơn cho 2-person account vì ROI/đạo tốt hơn, và 2 người có thể monitor 2 đạo riêng. Xem [so sánh V3 vs V2](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026).

## 2 Người + Bot = 3x Output

Khi 2 người chơi phân chia đúng và bot lấp các khoảng trống — account này có effective coverage gần 24/7 với human judgment ở những quyết định quan trọng và bot automation cho việc repetitive.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [So Sánh ROI V3 vs V2 vs V1 RokdBot 2026](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026)
- [Account Selling/Buying Guide RoK 2026](/blog/account-selling-buying-guide-rok-2026)
- [Time Investment ROI Calculator RoK 2026](/blog/time-investment-roi-calculator-rok-2026)
  `,
};
