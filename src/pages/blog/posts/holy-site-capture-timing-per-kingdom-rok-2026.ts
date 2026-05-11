import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "holy-site-capture-timing-per-kingdom-rok-2026",
  title: "Holy Site Capture Timing Per Kingdom RoK 2026 — Map Rotation Strategy",
  description: "Holy site capture timing per kingdom RoK 2026: rotation schedule, per-zone window analysis, bot V3 auto-capture setup, và strategy tối đa hóa holy site bonus 24/7.",
  date: "2026-05-11",
  readTime: "9 phút",
  coverImage: "/og-image.png",
  content: `
## Alliance của mày mất holy site mỗi rotation — vì không ai canh đúng giờ

Holy site trong RoK không phải "chiếm một lần là xong." Rotation cycle xảy ra theo lịch cố định — và mỗi cycle là cơ hội để alliance nào **phản ứng nhanh hơn 90 giây** chiếm được site. Alliance nào ngủ, mất site. Đơn giản như vậy.

Vấn đề: timing khác nhau giữa các kingdom, giữa các holy site type, giữa KvK season. Không có một "magic time" nào áp dụng được hết. Và làm thủ công 14 ngày KvK để canh rotation — không ai đủ sức.

## Cơ chế holy site rotation 2026

Holy site có 3 state: **Neutral** (vừa reset) → **Capture Window** (ai capture được) → **Locked** (phía đang giữ lock đến rotation tiếp theo).

Rotation cycle theo từng holy site type:

| Holy Site Type | Reset Interval | Capture Window |
|---|---|---|
| Altar of Darkness | 24h | 15 phút |
| Holy Site (standard) | 12h | 10 phút |
| Pass / Watchtower | 8h | 5 phút |
| KvK Objective Fort | 6h | 3 phút |

**Capture Window là thời gian nguy hiểm nhất** — trong 10-15 phút đó, bất kỳ alliance nào cũng có thể capture, kể cả địch đang nằm gần. Alliance đang hold phải defend liên tục trong window.

## Per-kingdom timing variation

Kingdom age ảnh hưởng timing offset: kingdom cũ (server age >300 ngày) thường có holy site reset vào **18h-22h giờ VN** — prime time của VN player. Kingdom mới (<90 ngày) reset lúc **2h-5h sáng giờ VN** — worst case cho người chơi thủ công.

Không thể check "kingdom mình thuộc nhóm nào" bằng mắt thường — cần track event log reset của từng site ít nhất 24h để xác định offset.

Bot V3 tự track và điều chỉnh per-kingdom, không cần mày ngồi đo thủ công.

## Pain: timing tốt nhưng không có người execute

**Miss capture window** — bot địch (hay player địch setup automation) phản ứng trong 30-60 giây. Alliance thủ công phản ứng 3-5 phút minimum (notify → member online → march). **Gap 2-4 phút = mất site**.

**Không đủ người canh 24/7** — 8h và 12h cycle nghĩa là site reset 2-3 lần/ngày. Không alliance nào duy trì được canh thủ công cả 3 lần/ngày trong 14 ngày.

**Sai commander khi capture** — rush vào capture với sai commander setup (barb farmer thay vì conquest specialist) → troops bị thiệt hại không cần thiết trong capture window.

**Không biết địch approaching** — mà chỉ biết khi march địch đã gần site rồi. Quá muộn để reinforce.

## Bot V3 holy site capture automation

Gói **V3 Siêu Cấp 1.200.000đ/tháng** có holy site module đầy đủ:

- **Per-site timer tracking** — bot track reset timer của từng holy site trên map, alert 3 phút trước reset
- **Auto-launch capture march** — gửi march đúng lúc Neutral state bắt đầu, không cần mày manually launch
- **Commander selection** — tự chọn conquest specialist (Osman I, Mehmed II, Charles Martel) phù hợp với site type
- **Enemy approach detection** — nhận diện march địch di chuyển về site, tự tăng cường reinforce
- **24/7 all rotation** — capture cả 3 reset cycle mỗi ngày, kể cả 3am

> 🤖 V3 auto-capture holy site mọi rotation cycle — không bao giờ miss window vì ngủ. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Strategy tối đa hóa holy site bonus

**Priority site theo bonus:**
1. Altar of Darkness → +10% attack alliance = highest combat value
2. Holy Site (standard) → +5% gathering speed hoặc +5% training speed
3. Pass → +3% march speed khu vực

**Defend vs capture ROI:**
- Defend site hiện tại = 0 resource cost
- Capture neutral site = march cost nhưng bonus mới
- Lose site + recapture = double cost

Tối ưu: **defend sites có bonus cao**, sacrifice sites có bonus thấp nếu thiếu troops defend.

## Kết hợp với alliance HQ placement

Holy site capture chỉ effective nếu alliance HQ trong range supply. HQ quá xa holy site = march quá dài = miss capture window. Xem thêm: [Alliance HQ Placement Strategy RoK 2026](/blog/alliance-hq-placement-strategy-rok-2026).

> 🤖 V3 track 12+ holy sites đồng thời, tự capture và defend — không bỏ rotation nào. [V3 →](/#packages)

## FAQ

### Timing holy site có giống nhau giữa KvK seasons không?
Không — mỗi KvK season (Lost Kingdom, Strange Lands, Light vs Darkness...) có map layout và holy site position khác nhau, kéo theo timing offset khác. Bot V3 tự recalibrate mỗi season.

### Alliance nhỏ có nên tranh holy site lớn không?
Không khuyến khích. Alliance size dưới 30 active members nên focus holy site nhỏ (Pass/Watchtower) và không tranh Altar với alliance top. ROI tốt hơn khi hold 3-4 site nhỏ so với fight liên tục 1 site lớn.

### Bot V3 có conflict với alliance member khác không?
Không — V3 communicate với alliance channel, không override manual march của member. Nếu member đã launch capture march, bot không launch duplicate.

## Bắt đầu ngay

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Holy Site Rotation Timing RoK 2026 — Deep Dive](/blog/holy-site-rotation-timing-rok-2026)
- [Alliance HQ Placement Strategy RoK 2026](/blog/alliance-hq-placement-strategy-rok-2026)
- [KvK Season 8 Complete Guide RoK 2026](/blog/kvk-season-8-complete-guide-rok-2026)
  `,
};
