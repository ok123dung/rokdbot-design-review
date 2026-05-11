import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "honor-farming-bot-tier-list-target-priorities-2026",
  title: "Tier List Honor Farming RoK 2026 — Bot Auto Đánh Target Nào Nhiều Honor Nhất?",
  description:
    "1 pháo đài barbar lv 30 = 5.000-10.000 Honor/kill. City thường KvK = 200-500 Honor. Tier list đầy đủ target honor farming RoK 2026: rợ thường, barb fort, sanctum, holy site, governor city — ranked theo Honor/AP và bot support.",
  date: "2026-05-09",
  readTime: "7 phút",
  coverImage: "/blog-images/auto-rally/img-13-17SAkQMt.png",
  content: `
## 1 barb fortress lv 30 = 10.000 Honor. 1 player city KvK = 500 Honor. Chọn sai target = mất hàng tuần rank.

Đây là sai lầm phổ biến nhất trong honor farming: **attack target không optimize Honor/AP**. Nhiều player KvK cày city enemy cả ngày, xong nhìn leaderboard thấy mình rank dưới người chỉ farm barb fort.

Honor/AP là metric thật sự quyết định rank — không phải số trận đánh hay kills.

## Tier List Target Honor Farming RoK 2026

| Target | Honor/kill | Honor/AP | Difficulty | Bot Support |
|---|---|---|---|---|
| **Barb Fort lv 30+** | 5.000-10.000 | ★★★★★ | Rally cần | V2+ |
| **Sanctum of Courage** | 2.000-5.000 | ★★★★☆ | Alliance rally | V3 AI |
| **Holy Site** | 800-2.000 | ★★★☆☆ | Marching rally | V2+ |
| **Governor City (KvK)** | 200-500 | ★★☆☆☆ | Open field | V1+ |
| **Rợ thường lv 25-30** | 50-150 | ★★☆☆☆ | Solo march | V1+ |
| **Rợ thường lv 1-15** | 5-30 | ★☆☆☆☆ | Solo march | V1 |

**Kết luận hiển nhiên:** Barb Fort lv 30+ là S-tier không có đối thủ. 1 rally fort thành công = Honor bằng 50-200 lần đánh rợ thường.

## Phân tích chi tiết từng tier

### S-Tier: Barb Fort lv 25-30

Đây là target priority #1 bất kể phase KvK nào. Lý do:

- **Loot bonus**: fort cao level drop thêm RSS + speedup ngoài Honor
- **Fixed spawn**: fort respawn theo schedule, bot V2+ có thể farm chain liên tục
- **Rally multiplier**: damage × 4-6 khi rally → kill fort nhanh hơn solo → AP efficiency tăng

Constraint: cần **đủ alliance members online** để rally, hoặc V3 AI Commander biết khi nào dùng 1 march solo vs khi nào cần rally trigger.

> 🤖 V2 Cao Cấp có barb chain tự động đánh fort lv 25-30. Bot detect fort spawn, march đến rally, claim loot — không cần bạn coi màn hình. [Xem V2 →](/#packages)

### A-Tier: Sanctum of Courage + Holy Site

Sanctum cho Honor cực cao nhưng cần **alliance coordination** — không thể solo. V3 AI Commander integrate với alliance schedule để rally sanctum đúng window.

Holy Site đơn giản hơn — march solo được — nhưng Honor/AP thấp hơn fort 3-4x. Vẫn A-tier vì không cần alliance, có thể farm 24/7 nếu server đang KvK.

### B-Tier: Governor City (KvK)

Đánh player city phức tạp hơn vẻ ngoài:

- City có garrison + hospital → kill không phải = Honor ngay lập tức
- Peace shield đối phương → miss farm window
- **Troop loss**: đánh city KvK = **bạn cũng mất troops** → AP không hiệu quả bằng fort

B-tier không phải vì Honor thấp, mà vì **net Honor/AP sau troop loss thực tế** thấp hơn fort farming đáng kể.

### C-Tier: Rợ thường lv 25-30

Nếu không có access fort hay sanctum, rợ lv cao vẫn có giá trị:

- **Zero troop loss** (rợ không counter-attack đủ mạnh)
- Có thể combo với Spam+Luring+AOE (V2 exclusive) để kill 5-7 con/cast
- Honor tích lũy chậm nhưng ổn định 24/7

V2 Combo biến C-tier target thành farm loop hiệu quả nhất cho player không có rally access.

### D-Tier: Rợ thường lv 1-15

Waste of AP. Chỉ hợp lý cho Trial / V1 players mới bắt đầu hoặc khi cần grind expertise commander cụ thể.

## Chiến lược tối ưu theo gói bot

| Gói | Priority target | Secondary target | Honor/ngày est. |
|---|---|---|---|
| **Trial 150k** | Rợ lv 15-25 | - | ~200-500 |
| **V1 750k** | Rợ lv 25-30 | Governor city | ~800-1.500 |
| **V2 900k** | Barb Fort + Combo rợ | Holy Site | **~2.500-4.000** |
| **V3 1,2M** | Barb Fort × 2 đạo + Sanctum AI | - | **~5.000-8.000** |
| **Premium VIP 3M** | Barb Fort × 3-4 đạo | Holy Site | **~10.000+** |

> 🤖 V2 Combo Spam+Luring+AOE + barb chain = combo A+S tier cùng lúc — 1 gói. [Xem V2 Cao Cấp 900k →](/#packages)

## Bot detect target priority như thế nào?

RokdBot không random attack target. Logic priority:

1. Barb Fort lv cao nhất trong range → rally/solo tùy power
2. Nếu không có fort respawn → switch Holy Site nearby
3. Nếu KvK active + enemy city no-shield → flag cho AI Commander decision (V3)
4. Fallback: rợ lv cao nhất trong radius

**V2**: logic priority cố định (fort → rợ). **V3**: AI Commander dynamically adjust dựa theo KvK phase và alliance context.

## FAQ

### Tôi nên dùng V1 hay V2 nếu chỉ muốn honor farming?
Nếu mục tiêu chính là **Honor/ngày tối đa**, V2 là minimum viable. Lý do: Combo Spam+Luring+AOE của V2 biến rợ C-tier thành farm loop hiệu quả gần ngang Holy Site. V1 không có Combo → stuck ở D/C tier farming.

### Bot có biết tránh attack target có shield không?
Có. Bot check shield status trước khi march. Nếu target có peace shield → skip, move to next priority. Không lãng phí AP vào protected target.

### Barb Fort respawn sau bao lâu?
Thường 8-12h sau khi bị kill. Bot có internal timer track spawn window, march đúng giờ để không miss loot.

## Bắt đầu ngay

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Auto Honor Farming KvK RoK 2026 — Feature Mechanic Chi Tiết](/blog/auto-honor-farming-kvk-rok-2026)
- [Combo Spam+Luring+AOE — Kéo Rợ Gấp 4x AP](/blog/combo-spam-luring-aoe-rokdbot-v2)
- [Auto Rally Captain RoK 2026 — Tự Động Rally 24/7](/blog/auto-rally-captain-rok-2026)
  `,
};
