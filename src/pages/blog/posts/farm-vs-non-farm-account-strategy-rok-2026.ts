import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "farm-vs-non-farm-account-strategy-rok-2026",
  title: "Farm vs Non-Farm Account Strategy RoK 2026 — Khi Nào Setup Farm Acc",
  description: "Farm account hay không — câu hỏi tưởng đơn giản nhưng 80% player quyết định sai. Framework rõ ràng: power threshold, RSS demand, timing, và V3 bot sync farm → main không cần online.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Farm Account — Không Phải Cho Mọi Người

Mày nghe R5 nói "ai cũng cần farm acc". Mày tạo thêm account, bắt đầu gather. 2 tuần sau: farm acc đứng yên, main acc bị neglect, cả 2 đều mediocre.

Đây là lỗi phổ biến nhất.

Farm account chỉ có giá trị khi **main account đã reach RSS bottleneck** — tức là mày farm nhanh hơn mày consume. Trước điểm đó, farm acc là waste time và money.

## Non-Farm — Khi Nào Đủ

Main account tự farm được đủ RSS khi:

- **Power dưới 20M**: training demand thấp, research chưa cần RSS lớn, 2-3 march main gather đủ
- **Chưa có T4**: train T4 mới tốn RSS lớn — trước đó T1-T3 cost thấp, main tự sustain
- **KvK Season 1-2**: food chủ yếu cho train + heal, scale chưa đủ để farm acc worthwhile

Nếu mày đang ở các giai đoạn trên: **không cần farm acc**. Tập trung vào main, bot V1 gather tự động là đủ.

> 📌 Xem thêm: [City Hall Levels 16/21/25 Guide RoK 2026](/blog/city-hall-levels-16-21-25-guide-rok-2026) — biết mình đang ở milestone nào trước khi quyết định farm acc.

## Farm Account — 3 Dấu Hiệu Cần Setup

### 1. RSS Gap Mở Rộng

Mày đang build CH 23-25 + research Military tree + train T4/T5 cùng lúc. Food demand vượt gather capacity → **warehouse trống trước khi queue hết**.

Tính: nếu daily RSS consumption > daily gather output × 1.5 → farm acc bắt đầu có giá trị.

### 2. T5 Training Phase

Train 500.000 T5 troops = **6 tỷ food + 4 tỷ wood**. Main acc gather được ~50-80M food/ngày (với bot V2 4 march). Để fill 500K T5 = **75-120 ngày gather thuần**. Farm acc thứ 2 cắt xuống còn 37-60 ngày.

### 3. KvK Season 3+ — Heal Demand Tăng Đột Biến

Season 3+ battles nặng hơn: full heal cycle 100.000 T4 = 6-8M food × nhiều lần/KvK. Farm acc dedicated food gather sync với heal cycle giảm downtime combat.

> 📌 Xem thêm: [T5 Unlock Requirements RoK 2026](/blog/t5-unlock-requirements-rok-2026) để biết RSS threshold cần farm acc.

## Farm Account Setup — Framework Chuẩn

### Phase 1: Farm Acc Civilization

Chọn civilization có gathering bonus:

| Civilization | Gathering Bonus |
|---|---|
| **Korea** (Yi Seong-Gye) | +10% gathering speed |
| **France** (Joan of Arc) | +3% gathering speed + food bonus |
| **China** (Sun Tzu) | +5% food gathering |

Korea là pick tốt nhất nếu prioritize speed. France nếu ưu tiên food.

### Phase 2: Commander Farm Acc

Farm acc không cần combat commander. Priority:

1. **Charles Martel** — gathering speed +25% (từ talent tree)
2. **Scipio Africanus** — gathering speed +10% passive
3. **Joan of Arc** — food gathering +5%

Talent tree: full gathering branch, không invest combat. Lv 40-50 là đủ cho farm acc — không cần max.

### Phase 3: Bot Sync Farm → Main

Farm acc dùng bot V3 tự transfer RSS về main:

- Auto gather tile lv 5+
- Auto claim warehouse khi gần đầy
- Auto send RSS transfer theo schedule ngày

> 📌 Xem thêm: [Auto Build Research RoK VIP Template](/blog/auto-build-research-rok-vip-template) — farm acc cũng cần auto-build để unlock march slots.

> 🤖 Bot V3 chạy 2-3 accounts đồng thời — main + farm + farm sync không cần mày online. Farm acc RSS đổ về main tự động theo queue priority. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## ROI Farm Account — Tính Thật

| Setup | RSS/ngày | Cost | Break-even |
|---|---|---|---|
| Main only (V2) | ~80M RSS | 900k/tháng | Baseline |
| Main (V2) + Farm (V1) | ~160M RSS | 900k + 750k = 1.65M/tháng | +100% RSS, +83% cost |
| Main + 2 Farm (V3) | ~240M RSS | 1.2M + 2×750k = 2.7M/tháng | +200% RSS, +200% cost |

Farm acc 1 (V1 750k) cho **+100% RSS với +83% cost** = ROI tốt. Farm acc 2 (V1 750k thứ 2) cho thêm +67% RSS với +45% cost = diminishing return nhưng vẫn positive.

Không có farm acc là đúng: khi main chưa ở T5 training phase. Có 1 farm acc là đúng: khi đang T5 rush. Có 2 farm acc chỉ worth khi mày đang cần RSS cho multi-march training intensive phase ngắn.

## FAQ

### Farm acc có cần City Hall cao không?

Farm acc cần tối thiểu CH 16-18 để unlock 3 march. CH 21+ mở march thứ 4 — **CH 21 là target tối thiểu** của farm acc. Không cần lên 25 vì farm acc không combat.

### Farm acc bị attack thì sao?

Farm acc nên đặt trong alliance territory, dùng shield khi KvK. Troops của farm acc chỉ là gathering troops — không kháng cự được rally. Bot V3 auto-shield farm acc khi detect incoming attack.

### Một người chơi có thể run 2 account không?

Về kỹ thuật: có, với device khác nhau hoặc bot cloud riêng. Lilith không ban dual-account — chỉ ban automation client-side. Bot V3 cloud = mỗi acc là cloud instance riêng biệt, không liên quan nhau.

## Bắt Đầu

Farm acc không phải bước đầu — đó là bước T5 training phase. Trước đó: maximize main, bot V2 gather 4 march, tích RSS. Khi warehouse main trống trước khi queue hết 2 tuần liên tiếp — đó là lúc setup farm acc.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [T5 Unlock Requirements RoK 2026](/blog/t5-unlock-requirements-rok-2026)
- [Auto Build Research RoK VIP Template](/blog/auto-build-research-rok-vip-template)
- [Library Tech Tree Must-Have RoK 2026](/blog/library-tech-tree-must-have-rok-2026)
  `,
};
