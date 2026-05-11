import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "academy-research-priority-rok-2026",
  title: "Academy Research Priority RoK 2026 — Economy → Military → Defense Order Tối Ưu",
  description: "Thứ tự research Academy RoK 2026 tối ưu nhất: Economy branch trước, Military khi nào, Defense bỏ qua gì. Bot V1 auto-research 24/7 không miss slot.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Nghiên cứu sai thứ tự = mất 6 tháng — đây là số liệu thật

Một player power 28M hỏi tại sao cùng thời gian chơi mà account khác power 45M. Sau khi so sánh research tree, phát hiện: anh dùng **Military branch trước Economy** — sai hoàn toàn.

Logic của Military-first: "Tôi muốn đánh mạnh ngay từ đầu." Logic sai vì:

- Military research tăng 5-8% combat damage — chỉ hiệu quả khi đã có đủ troops
- Economy research tăng troop training speed 20-35% — compound effect: troops nhiều hơn → combat power tự tăng

Mất 6 tháng farm Economy sau khi đã max Military = cùng destination, trễ 6 tháng.

## Academy Research Priority: Thứ tự chuẩn 2026

### Giai đoạn 1: Economy Branch (Tháng 1-3)

**Ưu tiên tuyệt đối**:

| Research | Effect | Priority |
|---|---|---|
| Food Production | +25% food gen | #1 |
| Wood Production | +20% wood gen | #2 |
| Gold Mine | +15% gold gen | #3 |
| Training Speed (T1-T3) | -20% training time | #4 |
| Gathering Speed | +30% tile farm speed | #5 |

**Tại sao Economy trước**: Mỗi % training speed = tích lũy compound. Nếu train 10K troops/ngày, +20% training speed = 12K troops/ngày. Sau 90 ngày: **180K troops extra** so với không research.

180K troops extra = 2M+ power difference từ 1 research branch.

> 🤖 Bot V1 auto-research khi slot free, không bao giờ để Academy idle. 24 giờ idle Academy = mất 8-12 giờ research time vĩnh viễn. [Xem V1 →](/#packages) · 750.000đ/tháng.

### Giai đoạn 2: Military Branch Trọng Tâm (Tháng 4-6)

Sau khi Economy maxed, switch Military theo priority:

**Combat trực tiếp (dùng ngay)**:
- Cavalry Attack: +10% cavalry ATK — dùng ngay trong KvK
- Infantry Attack: +10% infantry ATK
- Archer Attack: +10% archer ATK

**Passive sustain (long-term)**:
- Cavalry Defense: +8% defense — quan trọng khi defend flag
- March Capacity: +10% march size — nhiều troops trong 1 march = more damage

**Bỏ qua tạm thời** (nghiên cứu cuối):
- Siege Research: chỉ dùng cho rally fortress — niche
- Equipment Upgrade: unlock tier mới nhưng không urgent

### Giai đoạn 3: Defense Branch (Tháng 7-9)

Defense branch thường bị overrated. Reality:

- Wall Defense: +10% — chỉ hữu ích khi bị farm (power dưới 10M)
- Hospital Capacity: +20% — quan trọng để sustain troops KvK
- Shield Duration: không liên quan nếu dùng bot (không cần shield khi active)

**Thứ tự Defense**:
1. Hospital Capacity (quan trọng nhất — sustain)
2. Watchtower (thông báo attack — useful)
3. Wall Defense (skip nếu power cao)

## Tính toán: Economy research = bao nhiêu power sau 90 ngày?

**Scenario A** (Military-first, không Economy):
- Training speed: 0% bonus
- Troops sau 90 ngày: 1.000.000 T3

**Scenario B** (Economy-first, bot V1 24/7):
- Training speed: +35% từ research
- Tile farm: +30% resource → không bao giờ bottleneck material
- Bot V1 auto-queue training 24/7
- Troops sau 90 ngày: 1.850.000 T3

**Difference**: **850K troops thêm = 8.5M power extra** chỉ từ research order đúng.

> 🤖 Bot V1 auto-research + auto-train 24/7 — không bao giờ idle Academy hoặc Barracks. [Kích hoạt V1 →](/#packages).

## Timeline research tối ưu với bot V1

Bot V1 tự động manage research queue. Config 1 lần, bot theo đúng priority order:

| Tháng | Research Focus | Expected Power Gain |
|---|---|---|
| 1 | Economy: Food/Wood/Gold production | +2M power |
| 2 | Economy: Training speed T1-T3 | +3M power |
| 3 | Economy: Gathering speed + T4 training | +2.5M power |
| 4 | Military: Cavalry + Infantry attack | +2M power |
| 5 | Military: Archer + March capacity | +1.5M power |
| 6 | Military: Defense passives | +1M power |

**6 tháng tổng**: +12M power từ research — không tính troop power.

## Sai lầm phổ biến cần tránh

**Sai lầm 1: Research Siege sớm**
Siege cần level 25 Academy và chỉ boost rally fortress. Nếu chưa KvK seriously, bỏ qua đến tháng 8.

**Sai lầm 2: Research Equipment Tier 4 trước Military attack**
Equipment research lâu (15-20 ngày mỗi tier) và không compound như troop training. Research sau Military basic.

**Sai lầm 3: Để Academy idle ban đêm**
Mỗi 8 giờ idle = mất ~5% research progress của ngày đó. Bot V1 queue ngay khi slot free, kể cả 3am.

**Sai lầm 4: Dùng speedup cho Economy research**
Save speedup cho building speedup (đặc biệt CH 21-25). Economy research thời gian vừa phải — không cần rush. Military combat research mid-to-late game thì dùng speedup.

## Đọc tiếp:
- [City Hall 25 Speedrun RoK 2026 — 14 Ngày Thay Vì 126 Ngày](/blog/city-hall-25-speedrun-rok-2026)
- [Library Tech Tree Must-Have RoK 2026](/blog/library-tech-tree-must-have-rok-2026)
- [Auto Build Research RoK VIP Template](/blog/auto-build-research-rok-vip-template)
  `,
};
