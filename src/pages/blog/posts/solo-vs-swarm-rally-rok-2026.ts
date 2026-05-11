import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "solo-vs-swarm-rally-rok-2026",
  title: "Solo vs Swarm Rally RoK 2026 — Khi 1 Đạo Đủ vs Khi Cần Alliance Wave",
  description: "Solo vs swarm rally RoK 2026: phân tích khi nào 1 march đủ để rally, khi nào cần alliance wave 3-5 march, math troop fill rate, timing window, và V3 bot optimize join rate.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Solo Rally Hay Swarm — Sai Quyết Định Là Waste Cả Ngày

Bật rally barb fort lv6 với 1 march solo → fail → troops die không reason. Chờ alliance swarm rally lv2 → slow → mất 4h cho target không worth.

Cả 2 đều là sai lầm phổ biến trong KvK. Vấn đề là thiếu framework: **khi nào solo đủ, khi nào cần wave**.

Bài này cho mày rule tính nhanh — và giải thích bot join thế nào.

## Rally Mechanics Cơ Bản

Khi mày launch rally, game tạo ra 1 "rally slot" với:
- **Capacity**: max march count (T5 march capacity > T4)
- **Timer**: 5 phút cho members join trước khi march tự động
- **Win condition**: total power rally > garrison/fort power

Rally power = (commander skill) × (total troop count) × (troop tier multiplier) × (research buff)

Nếu rally power < target power → rally thất bại → troops chết.

## Solo Rally: Khi Nào 1 March Đủ?

### Barb Fort Level và Solo Threshold

| Barb Fort Level | Fort HP | Solo Win? (Mid-tier player) |
|---|---|---|
| Lv1-2 | Thấp | Luôn win solo |
| Lv3 | 30M | Win nếu power >15M |
| Lv4 | 80M | Khó solo, cần >40M power |
| Lv5 | 200M | Solo không win trừ whale |
| Lv6 | 500M | Phải có alliance |

**Rule**: Lv1-3 → solo ok. Lv4 → solo chỉ nếu power >40M. Lv5+ → cần swarm.

Đa số mid-tier players (20M-50M power) chỉ nên solo lv1-3. Lv4 trở lên cần ít nhất 2-3 march reinforce.

### Solo Rally Timing: March Fill Tự Nhiên

Một điều ít biết: khi mày solo rally lv3-4, **alliance members tự join** nếu họ đang online và trong range. Solo launch vẫn trigger alliance join cơ chế.

Nếu mày launch rally lv4 solo lúc 8pm (giờ cao điểm VN) → 3-4 members thường join tự nhiên trong 3 phút.

Nếu lúc 3am → không ai join → rally expire hoặc solo fail.

**Kết luận**: solo launch có thể work giờ cao điểm. 3am cần bot reinforce tự động hoặc swarm pre-arranged.

> 🤖 V3 auto-join rally khi R5 launch, không cần manual join. 24/7 bao gồm 3am. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Swarm Rally: Khi Nào Cần Alliance Wave?

Swarm rally = alliance phối hợp nhiều march join cùng 1 rally trong window 5 phút.

### 3 Tình Huống Swarm Là Bắt Buộc

**1. Barb Fort Lv5-6**

Fort lv5 có 200M HP. Để win rally cần tổng rally power vượt ngưỡng này. Với march size 200K troops T4 (power ~8M per march) → cần ít nhất **25 march** để cover đủ power.

Thực tế: 3-5 march whale T5 đủ cover lv5. 8-10 march mid-tier T4 cần cho lv5.

**2. Enemy Stronghold Garrison Defend**

City enemy có garrison + reinforce từ alliance của họ → total defend power 50M-100M. Solo rally hoặc 2-3 march không đủ. Cần **minimum 5 march** coordinated để break.

**3. Phase 3 Sacred Site**

Temple of Eternal War garrison có defend power 500M+. Đây là battle cả server join. Không có swarm = không claim được. Tất cả lv5-6 fort Phase 3 đều cần alliance wave.

## Swarm Rally Coordination: 3 Model

### Model 1: R5 Announces, Members Self-Join

R5 chat alliance: "Rally lv5 barb, X:Y coordinates, join now". Members manually join trong 5 phút.

**Nhược điểm**: 30% members miss announcement (ngủ, offline, không đọc chat). Window 5 phút không đủ nếu members phân tán.

### Model 2: Rally Captain Scheduling

R4+ set rally schedule 8pm/10pm/12am daily. Members biết giờ, sẵn sàng join. Hit rate cao hơn 60-70%.

Xem thêm: [Auto Rally Captain RoK 2026](/blog/auto-rally-captain-rok-2026)

### Model 3: Bot-Assisted Auto-Join

Members dùng V3 bot → bot auto-join mọi rally R5 launch bất kể giờ → fill rate ~95%+.

30 members V3 = **30 auto-join** trong 30 giây. Lv5 barb fort cleared guaranteed mà không cần chat coordination.

## Timing Window: Math Của Rally Fill Rate

Rally timer = 5 phút. Bao nhiêu march có thể join?

| Điều Kiện | Fill Rate | March Join |
|---|---|---|
| Giờ cao điểm + manual | 40-60% members online | 20-30 march (50 member alliance) |
| Off-peak + manual | 10-20% members online | 5-10 march |
| Off-peak + V3 bot | ~95% bot online 24/7 | 45-48 march |

Difference này cực kỳ significant cho lv5-6 fort. Off-peak với bot = fill rate gần bằng giờ cao điểm manual.

> 🤖 Premium VIP 3-4 đạo: mỗi member có 3-4 march join rally cùng lúc. 10 Premium VIP = 30-40 march trong 1 rally window. [Xem Premium VIP →](/#packages).

## Solo vs Swarm: Decision Matrix

| Target | Power | Giờ | Quyết Định |
|---|---|---|---|
| Barb lv1-3 | Any | Any | Solo luôn |
| Barb lv4 | <30M | Peak | Swarm (join thêm) |
| Barb lv4 | >40M | Any | Solo ok |
| Barb lv5 | Any | Peak | Swarm minimum 5 march |
| Barb lv5 | Any | Off-peak | Bot-assisted swarm |
| Barb lv6 | Any | Any | Alliance wave tối thiểu 10 march |
| Enemy city | Any | Any | Swarm 5+ march luôn |

## Cách Bot Optimize Solo vs Swarm Decision

Bot V3 không launch rally — bot **join** rally R5 launch. Nhưng join pattern của bot optimize rally outcome:

- Join trong **60 giây đầu** sau khi R5 launch (không phải cuối window)
- Auto-calculate march size phù hợp với fort level (không gửi 100% troops vào lv2 barb)
- Recall march nếu rally fail trước khi march tới nơi (tránh march vào fort đã bị kill bởi rally khác)

3 optimization này giảm troop waste đáng kể so với manual join.

## Trường Hợp Đặc Biệt: Rally Snipe

Rally snipe = một alliance khác join rally của mày để "ăn" honor từ kill.

Để block rally snipe: set rally **alliance only** trong settings khi launch. Thiệt hại duy nhất: giảm fill rate từ random passerby join. Trade-off thường worth nếu mày đang farm private barb fort.

## Kết Luận: Framework Đơn Giản

- **Lv1-3**: Solo mọi lúc
- **Lv4**: Solo nếu power >40M, swarm nếu không
- **Lv5+**: Swarm bắt buộc, dùng bot để fill rate không phụ thuộc giờ cao điểm
- **Enemy city**: Swarm bắt buộc, minimum 5 march coordinated

Đọc kèm:
- [Auto Rally Captain RoK 2026](/blog/auto-rally-captain-rok-2026)
- [Rally Attack vs Defense KvK RoK 2026](/blog/rally-attack-vs-defense-kvk-rok-2026)
- [Mass Kill Strategy KvK RoK 2026](/blog/mass-kill-strategy-kvk-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)
  `,
};
