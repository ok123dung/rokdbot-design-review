import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "time-investment-roi-calculator-rok-2026",
  title: "Time Investment ROI Calculator RoK 2026 — Tiền Bot vs Tiền Cash Shop",
  description: "Bỏ 900k/tháng vào bot hay 900k vào Cash Shop gem? Math thực tế so sánh ROI từng đồng tiền — Power gain, Honor rank, commander progress. Kết quả sẽ làm mày ngạc nhiên.",
  date: "2026-05-11",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Cùng 900k — nhưng bỏ vào đâu cho ra nhiều nhất?

Đây là câu hỏi mà ít player RoK chịu ngồi tính: nếu mày có 900.000đ để đầu tư vào game mỗi tháng — bỏ vào bot hay bỏ vào Cash Shop?

Hầu hết player đoán mò. Hoặc bỏ vào Cash Shop vì "trực tiếp hơn". Hoặc bỏ vào bot vì "nghe hay hơn".

Bài này tính thật.

## Định Nghĩa ROI Trong RoK

ROI (Return on Investment) trong context RoK = **Power gained + Honor rank improved + commander progress** trên mỗi đồng tiền bỏ ra.

Công thức đơn giản:
- ROI = (Value received) ÷ (Cost)
- "Value received" = Power gained per month (dễ đo nhất)

## Scenario A: 900k/tháng vào Cash Shop

900.000đ trong Cash Shop mua được gì?

**Option phổ biến nhất: Gem bundle**
- 900k mua khoảng 4.500-5.000 gem (tùy bundle đang sale)

**5.000 gem dùng vào đâu?**

- Tăng tốc construction: 5.000 gem = ~50 ngày tăng tốc (conversion rate ~100 gem/ngày tương đương)
- Mua RSS chest: 5.000 gem = ~300M food (15 chest × 20M food/chest)
- Mua speedup: 5.000 gem = ~15 ngày speedup (thường dùng cho training)

**Power generated từ 900k Cash Shop (1 tháng):**
- Training với 300M food speedup: +200k T4 = +44M Power
- Building speedup: +2-3M Power (nếu có CH upgrade pending)
- **Tổng: ~46-47M Power** (với account đang ở CH 22+)

**Nhưng đây là giả định tốt nhất** — nếu mày dùng gem vào wrong priority (mount, skin, non-military), ROI giảm mạnh.

> 🤖 900k vào bot V2 cho power gain khác hoàn toàn — xem so sánh dưới đây. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Scenario B: 900k/tháng vào Bot V2

**V2 RokdBot 900k/tháng làm gì trong 30 ngày?**

- Gather 24/7 với 5 march L5 tiles: ~400M food + 260M wood + 200M stone/tháng
- Train liên tục với RSS gathered: ~300-350k T4/tháng (không bottleneck)
- Research auto: +500k-800k Power từ research nodes unlocked
- Barb chain Combo Spam+Luring+AOE: 217 rợ/ngày × 30 = 6.510 con rợ

**Power generated từ 900k Bot V2 (1 tháng):**
- Training 300k T4 = +66M Power
- Research = +500k-800k Power
- Building auto = +1-2M Power
- **Tổng: ~67-68M Power**

**Kết luận: Bot V2 tạo ra 45% nhiều Power hơn Cash Shop cùng giá tiền.**

## Tại Sao Chênh Lệch Lớn Vậy?

Lý do chính: Cash Shop mua gem → mày phải tự convert gem thành action. Quá trình đó inefficient vì:

- Gem conversion rate không tốt (1 gem ≈ 10 phút speedup, nhưng thực tế chia ra thành nhiều click nhỏ)
- Mày có thể dùng gem sai priority (không phải T4 training)
- Gem không tự farm RSS — mày vẫn phải gather

Bot thì: gather → train → research → tất cả tự động 24/7 không nghỉ không nhầm priority.

## Scenario C: Kết Hợp — 300k Cash Shop + 600k Bot

Với 900k tổng, split như sau:
- V1 Bot 750k (basic automation) + 150k gem top-up nhỏ

Hoặc:
- Trial 150k (1 tháng test) + 750k gem cho commander XP tome

**Đây thường là cách dùng tiền tệ nhất cho player mới** — bot lo infrastructure (gather/train), gem dùng cho commander progress không farm được.

## So Sánh Đầy Đủ Theo Thời Gian

### Sau 3 tháng (tổng chi 2,7M):

| Allocation | Power Tháng 3 | Honor KvK | Cost |
|---|---|---|---|
| 100% Cash Shop | +140M estimate | Top 30% | 2,7M |
| 100% Bot V2 | +200M estimate | Top 10% | 2,7M |
| Split (Bot+Gem) | +175M estimate | Top 15% | 2,7M |

### Sau 12 tháng (tổng chi 10,8M):

| Allocation | Power Year 1 | Note |
|---|---|---|
| 100% Cash Shop | 60-70M | Phụ thuộc vào dùng gem đúng |
| 100% Bot V2 | 90-120M | Automation compound effect |
| Split optimal | 80-100M | Best of both worlds |

## Khi Nào Cash Shop Thắng Bot?

Có 2 trường hợp Cash Shop rõ ràng tốt hơn:

**Trường hợp 1: Mua Commander Sculpture**
Epic commander sculpture (YSG, Cao Pi, Ramesses) không thể farm bằng bot. Nếu mày đang thiếu sculpture để expertise — Cash Shop là cách duy nhất. ROI ở đây không so được bằng Power.

**Trường hợp 2: Emergency KvK Speedup**
Khi đang trong KvK và cần train gấp 100k T4 trong 24h — gem speedup không gì thay thế được. Bot cần 5-7 ngày để farm RSS và train số đó.

## FAQ

### Nếu tôi đã dùng Cash Shop từ trước, switch sang bot có muộn không?
Không bao giờ muộn. Bot bắt đầu compound effect từ ngày đầu tiên kích hoạt. Nếu bắt đầu từ tháng này — sau 6 tháng, Power trajectory của mày sẽ rõ ràng hơn Cash Shop.

### Dùng cả 2 có được không?
Được — và thường là optimal. Bot lo infrastructure, Cash Shop dùng cho tactic không bot làm được (sculpture, emergency speedup).

### V3 vs V2 — thêm 300k có đáng không?
V3 1,2M cho 2 đạo chain → 430 rợ/ngày thay vì 217. Power gain tương tự V2 (training bottleneck là RSS chứ không phải march), nhưng Honor rank cao hơn đáng kể. ROI tốt nếu Power mày đã đủ 30M+.

## Bắt đầu ngay

**V2 Cao Cấp 900.000đ/tháng** — ROI Power tốt hơn 45% so với cùng số tiền vào Cash Shop:
- Gather + train + research 24/7
- Barb chain 217 rợ/ngày
- Không waste tiền vào wrong priority

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [RokdBot V3 vs V2 vs V1 ROI Comparison 2026](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026)
- [Bot vs BlueStacks Macro 300 Ngày Account Growth](/blog/bot-vs-bluestacks-macro-300-day-account-growth-comparison-rok)
- [F2P to VIP2 Bot Progression Roadmap RoK 2026](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
  `,
};
