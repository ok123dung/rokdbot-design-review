import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "march-size-bonus-priority-rok-2026",
  title: "March Size Bonus Priority RoK 2026 — VIP/Tech/Commander Stack",
  description: "March size bonus RoK 2026: stack VIP + technology + commander talent để tối đa quân số mỗi march, priority source nào trước, và V2 bot tự maximize march fill trước mỗi rally hay gather.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## March Size — Con Số Quyết Định Sức Mạnh Mỗi March

March size = số troops tối đa mày mang trong 1 march. Mỗi point bonus march size = thêm troops thực tế.

Rally 1 million troop fort với march size 300.000 vs 500.000: khác biệt 200.000 troops = **khác biệt kết quả battle hoàn toàn**.

March size không phải stat bị passive như attack bonus. Nó là **hard limit** — không có march size đủ lớn thì không matter bao nhiêu commander levels.

## Nguồn March Size Bonus — Stack Đầy Đủ

### 1. VIP Level (lớn nhất)

| VIP Level | March Size Bonus |
|---|---|
| VIP 5 | +1.000 |
| VIP 7 | +3.000 |
| VIP 9 | +5.000 |
| VIP 12 | +8.000 |
| VIP 15 | +12.000 |
| VIP 18 | +18.000 |

VIP là nguồn march size **lớn nhất và passive nhất** — một khi có VIP cao, bonus tự apply. Đây là lý do VIP point farming là priority cho bất kỳ serious player nào.

### 2. Technology Research

Military tree trong Academy có nhiều march size nodes:

| Research Node | March Size Bonus |
|---|---|
| Improved March (Basic) | +500 |
| Improved March (Advanced) | +1.000 |
| Military Academy | +1.500 |
| War Machines | +2.000 |
| T5 Military Research | +3.000 |

**Tổng technology march size: +8.000-10.000** khi full research military tree.

> 📌 Xem thêm: [Academy Research Priority RoK 2026](/blog/academy-research-priority-rok-2026) — military branch research order tối ưu.

### 3. Commander Talent Tree

Một số commanders có march size talent trong tree:

| Commander | March Size Node | Type |
|---|---|---|
| Alexander the Great | +5% max march size | % bonus |
| Julius Caesar | +3% max march size | % bonus |
| Genghis Khan | +2.000 flat | Flat bonus |

**Quan trọng: % bonus áp dụng lên base march size + flat bonuses**. Chọn commander có march size talent khi priority là large army march.

### 4. Library Research

Library technology tree (riêng với Academy) có thêm march size nodes. Thường +1.000-3.000 total từ Library branch liên quan.

> 📌 Xem thêm: [Library Tech Tree Must-Have RoK 2026](/blog/library-tech-tree-must-have-rok-2026) — Library priority nodes bao gồm march size.

### 5. Alliance Tech

Alliance military tech cũng contribute march size. Nhỏ hơn (~+500-1.000) nhưng passive khi alliance research done.

## Stack Math — March Size Thực Tế

| Player Type | VIP | Academy | Library | Commander | Total March Size |
|---|---|---|---|---|---|
| F2P VIP 5 | +1.000 | +5.000 | +1.000 | 0 | ~207.000 |
| Mid VIP 9 | +5.000 | +8.000 | +2.000 | +2.000 | ~217.000 |
| Advanced VIP 12 | +8.000 | +10.000 | +3.000 | +3.000 | ~224.000 |
| Whale VIP 18 | +18.000 | +10.000 | +5.000 | +5.000 | ~238.000 |

*Base march size assumed ~200.000 (CH 25 + T5)*

Whale VIP 18 có march size 15% lớn hơn F2P VIP 5 = **thêm 31.000 troops mỗi march**. Tương đương 31.000 troop bonus "miễn phí" mỗi rally.

> 📌 Xem thêm: [City Hall 25 Speedrun RoK 2026](/blog/city-hall-25-speedrun-rok-2026) — CH 25 là hard prerequisite cho march size tối đa.

## Priority Order — Đầu Tư Vào Đâu Trước

1. **Academy Military Research** — free (chỉ tốn RSS + time), impact lớn nhất/cost. Research hết military march size nodes trước.
2. **VIP Level** — tích VIP points qua bot daily farming. VIP 9 là target F2P realistic với bot.
3. **Library March Size Nodes** — sau khi Academy done, Library là next.
4. **Commander Talent** — đầu tư vào commander có march size talent khi rally lead.
5. **Alliance Tech** — passive, không control được — nhờ R4/R5 alliance research.

> 🤖 Bot V2 tự maximize march fill trước mỗi rally hoặc gather — không bao giờ send march under-capacity. VIP points farm tự động qua daily tasks. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## March Size vs Troop Quality — Trade-off

Tưởng tượng: 200.000 T5 vs 250.000 T4 (cùng march size limit 250.000 mày đã đạt).

200.000 T5 tốt hơn. Nhưng nếu march size limit chỉ 200.000, mày không thể dùng 250.000 T4 dù có train đủ.

**March size là cap, không phải multiplier.** Tăng march size cap = unlock troop số lượng tiềm năng — nhưng phải có đủ troop để fill.

> 📌 Xem thêm: [T4 vs T5 Mix Troop Strategy RoK 2026](/blog/t4-vs-t5-mix-troop-strategy-rok-2026) — match troop quantity với march size đã unlock.

## FAQ

### March size có ảnh hưởng gathering không?

Có — gathering march size quyết định load capacity per trip. Lớn hơn = gather nhiều hơn mỗi lần. Nhưng gathering có Load Capacity stat riêng từ equipment — cả 2 factor đều cần tối ưu.

### Rally march size có khác solo march không?

Rally: march size của rally captain + march của các member fill. Rally leader march size quyết định total troops rally có thể accept. Tăng rally lead's march size = rally lớn hơn.

### VIP point từ bot farming có stack không giới hạn?

VIP points stack đến VIP 20 là cap. Không giới hạn tốc độ farm — bot V2 farm daily VIP tasks 24/7 để push VIP level nhanh nhất.

## Bắt Đầu

March size priority: Academy Military Research trước → VIP grind → Library nodes. Bot V2 auto-farm VIP daily tasks và fill march max capacity mỗi lần dispatch.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Academy Research Priority RoK 2026](/blog/academy-research-priority-rok-2026)
- [Library Tech Tree Must-Have RoK 2026](/blog/library-tech-tree-must-have-rok-2026)
- [T4 vs T5 Mix Troop Strategy RoK 2026](/blog/t4-vs-t5-mix-troop-strategy-rok-2026)
  `,
};
