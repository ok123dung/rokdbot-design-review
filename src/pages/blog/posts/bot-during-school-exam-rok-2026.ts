import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "bot-during-school-exam-rok-2026",
  title: "Bot Khi Mùa Thi Của Học Sinh 2026 — Không Bỏ Game + Không Bỏ Học",
  description: "Mùa thi THPT / đại học: 3-4 tuần không thể chơi game bình thường. Bot V1 RokdBot giữ account active, farm barb, maintain rank — trong khi mày tập trung ôn thi. Không mất progress, không bỏ alliance.",
  date: "2026-05-11",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Tháng 5-6: Mày Phải Chọn Một

Tháng 6 năm nào cũng vậy. Lịch thi ập đến. Ba mẹ kiểm tra điện thoại. Bạn bè rủ nhau "off game 1 tháng để thi xong."

Nhưng account mày đang top 50 server. Alliance đang KvK. Nếu mày off 3-4 tuần — **rank Honor drop, alliance có thể kick vì inactive, months of progress tự nhiên bốc hơi**.

Bỏ game hoàn toàn = mất progress thật. Chơi manual = mất thời gian ôn thi thật. Đây không phải lựa chọn phải đưa ra.

## Con Số Thực: Mất Bao Nhiêu Nếu Nghỉ 3 Tuần

Với account đang chạy V1 (54 kills/ngày barb chain):

| Thứ mất | 21 ngày không có bot |
|---|---|
| Barb kills | ~1.134 kills |
| Honor estimate | ~13.000 điểm |
| Rank drop | Top 50 → Top 150+ tùy server |
| Alliance activity | Có thể bị kick nếu inactive >14 ngày |

Với bot V1 chạy tự động 21 ngày:

| Thứ giữ được | 21 ngày bot chạy |
|---|---|
| Barb kills | ~1.134 kills maintained |
| Honor | Giữ nguyên hoặc tăng nhẹ |
| Rank | Stable ±10 vị trí |
| Alliance | Vẫn active, không bị kick |

Hiệu năng học thi: **mày không mở game một lần nào**.

> 🤖 V1 chạy ngầm trong mùa thi — account vẫn farm trong khi mày ôn bài. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Setup "Exam Mode" — Cấu Hình Bot Mùa Thi

Mục tiêu: bot chạy autonomous tối đa, không cần mày can thiệp.

### Config Exam Mode

**Priority order:**
1. Auto daily login + claim (giữ VIP streak + daily rewards)
2. Barb chain V1 (farm honor passively)
3. Auto heal hospital
4. Auto train (dùng speedup khi resources đầy)
5. Research + Build tự động theo queue có sẵn

**Tắt các task cần attention:**
- Tắt auto-rally (cần decision-making, không phù hợp khi mày không monitor)
- Tắt gather tile xa (risk nếu bị attack khi mày không online để reinforce)
- Tắt event participation phức tạp (Ark of Osiris, Sunset Canyon — cần live judgment)

### Thông Báo Alliance Trước

Nhắn R4/R5: "Tao đang mùa thi, bot vẫn chạy nhưng tao không online manual 3 tuần. Ping tao nếu có emergency nhưng tao có thể không reply ngay."

Đa số alliance tôn trọng điều này — nhất là nếu account mày vẫn active (bot login + farm daily).

## Thực Tế: Học Sinh Dùng Bot Mùa Thi Như Thế Nào

Pattern phổ biến trong cộng đồng RoK VN:

**Ngày thường (ôn thi):** Bot chạy 24/7, không mở game.

**Tối trước khi thi (30 phút relax):** Check dashboard nhanh — số kills hôm nay, rank, resource level. Không chơi manual, chỉ monitor.

**Sau khi thi xong môn cuối:** Resume manual play, bot vẫn chạy nền.

Đây không phải lazy — đây là **resource allocation đúng**. Mùa thi là giai đoạn tập trung cho việc quan trọng hơn. Bot giữ account trong khi đó.

## Sau Mùa Thi — Resume Không Mất Đà

Khi mày quay lại sau 3-4 tuần, account không phải start từ đầu:

- Honor rank vẫn ở vị trí tốt
- Troops đã train (bot auto-train)
- Resource không bị thiếu (bot gather)
- Alliance vẫn có mày trong roster

Mày có thể đi thẳng vào KvK strategy hoặc event tiếp theo mà không cần "warm up" lại từ đầu.

## FAQ

### Bot có thể chạy mà hoàn toàn không cần mày check không?

Về lý thuyết có. Nhưng khuyến nghị check dashboard 5 phút/ngày (có thể làm trên điện thoại lúc giải lao). Nếu có anomaly (bot lỗi, game update) — catch sớm thì fix dễ hơn.

### Nếu KvK bắt đầu trong mùa thi thì sao?

Bot V1 vẫn farm barb và contribute Kill Points passively. Mày không tham gia rally live — nhưng barb kills vẫn tích Honor. Đủ để không bị tụt rank quá sâu.

### Sau mùa thi có nên upgrade lên V2 không?

Nếu mày thấy V1 maintain rank ổn trong 3 tuần, V2 sẽ cho mày **push rank** khi mày có thời gian monitor. Xem [so sánh ROI các gói](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026) để quyết định.

## Học Giỏi + Không Mất Game — Không Phải Đánh Đổi

Mùa thi không cần là "offline game." Với V1 chạy autonomous, mày tập trung 100% vào ôn thi — account vẫn cày.

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Bot Setup Ngày Đầu RoK 2026](/blog/bot-how-to-setup-first-day-rok-2026)
- [Time Investment ROI Calculator RoK 2026](/blog/time-investment-roi-calculator-rok-2026)
- [Returning Player Guide RoK 2026](/blog/returning-player-guide-rok-2026)
  `,
};
