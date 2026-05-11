import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "wall-lv25-health-math-rok-2026",
  title: "Wall Lv 25 Health Math RoK 2026 — Garrison Defense Tank Cần Bao Nhiêu",
  description: "Wall lv25 health math RoK 2026: tính toán HP wall, garrison troop threshold để tank rally địch, build priority wall vs other buildings, và V1 bot auto-build timeline.",
  date: "2026-05-10",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## City Mày Bị Zero Trong 1 Rally — Wall Level Mấy?

Kẻ địch launch 1 rally 3-march vào city mày. Mày có garrison 50.000 troops T4. Xong trong 4 phút.

Nghe thất vọng? Wall lv của mày là gì?

Wall lv20 vs lv25 không phải con số nhỏ. Đây là sự khác biệt giữa **bị zero trong 1 rally** và **cần 3-4 rally** để break — đủ thời gian reinforcement arrive.

## Wall HP Math: Lv20 vs Lv25

Wall HP quyết định bao nhiêu damage địch cần deal trước khi "breach" wall và tiếp cận garrison trực tiếp.

| Wall Level | Base HP | Rally Survive? |
|---|---|---|
| Lv15 | ~500M | Không (1 rally 3-march) |
| Lv20 | ~1.2B | Marginal (1-2 rally) |
| Lv22 | ~1.6B | 2-3 rally |
| Lv24 | ~2.1B | 3 rally |
| Lv25 | ~2.5B | 3-4 rally |

**Lv25 vs Lv20**: tăng HP 2.5B vs 1.2B = **108% HP increase**. Trong thực chiến: địch cần gấp đôi số lần rally để break wall.

Thêm garrison troop DEF buff từ wall: lv25 wall cho **+30% DEF** cho garrison troops vs lv20 +20% DEF.

## Garrison Math: Troop Threshold Để Tank

Wall HP không phải yếu tố duy nhất. Garrison troop count và tier quyết định DPS mày deal ngược lại trong rally.

### Minimum Garrison Để Tank 1 Rally Lv5 Fort

Một rally 3-march của địch vào city mày:
- Địch march power: 3 × ~8M power = ~24M total
- Để tank (không bị zero trong 1 hit): garrison cần counterpower ≥ 12M (50% của địch)
- 12M garrison power = ~150.000 T4 infantry hoặc ~80.000 T5 cavalry

**Với wall lv25 DEF buff**: threshold giảm còn ~100.000 T4 để tank 1 rally.
**Với wall lv20 DEF buff**: threshold là ~130.000 T4.

30.000 T4 difference = 30.000 × 800 resource = **24.000.000 resource tiết kiệm** training nếu mày có wall lv25.

> 🤖 V1 auto-build queue không bỏ slot trống — wall upgrade chạy 24/7. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Build Priority: Wall vs City Hall vs Academy

Câu hỏi kinh điển: wall hay CH trước?

Wall là **prerequisite của City Hall** — mày không thể lên CH25 nếu wall chưa đủ level. Cụ thể:

| City Hall Target | Wall Prerequisite |
|---|---|
| CH20 | Wall lv20 |
| CH21 | Wall lv21 |
| CH22 | Wall lv22 |
| CH23 | Wall lv23 |
| CH24 | Wall lv24 |
| CH25 | Wall lv25 |

Wall và CH phải up **cùng nhau**. Không thể skip wall để rush CH.

Xem thêm: [City Hall Levels 16-21-25 Guide RoK 2026](/blog/city-hall-levels-16-21-25-guide-rok-2026)

## Speedup Math: Wall 20 → 25

Build time wall mỗi level (approximate):

| Wall Level Range | Build Time / Level |
|---|---|
| Lv16-20 | 2-4 ngày / level |
| Lv21-23 | 5-7 ngày / level |
| Lv24-25 | 8-10 ngày / level |

Wall lv20 → lv25 tổng: **~45 ngày** build time không speedup.

**Với bot V1 (3x build throughput)**: ~15 ngày calendar time để hoàn thành lv20→25.

## Wall Repair: Mechanic Ít Được Để Ý

Wall bị damage trong rally không tự repair. Mày phải manually repair — hoặc bot V1 auto-repair.

Nếu không repair wall sau mỗi rally → wall HP tiếp tục giảm → địch rally tiếp phá nhanh hơn.

Players manual thường quên repair. Bot V1 trigger repair **tự động** sau mỗi battle detected.

Tưởng nhỏ, nhưng trong 14 ngày KvK với 5-10 rally vào city/ngày → **wall unrepaired = wall HP decay liên tục** = bị zero sớm.

## Garrison Troops Composition + Wall Synergy

Wall lv25 buff áp dụng cho **tất cả troop types** trong garrison, nhưng type nào benefit nhất?

| Troop Type | Wall DEF Buff Effect |
|---|---|
| Infantry | Cao nhất — infantry base DEF cao, buff stack multiplicative |
| Cavalry | Trung bình — cavalry ATK cao hơn DEF |
| Archer | Thấp nhất cho DEF, cao nhất cho ranged damage output |

**Optimal garrison composition với wall lv25**:
- Infantry 60% (max wall DEF buff value)
- Cavalry 25% (counter-charge nếu địch rally rút)
- Archer 15% (ranged attrition damage trong siege)

## Rally Shield Timer vs Wall HP

Một phép tính quan trọng cho defenders:

Địch rally timer = 5 phút launch + march travel time (5-15 phút tùy distance).

Nếu địch cần **3 rally** để break wall lv25:
- Rally 1: mày thấy từ watchtower lv25 (90 giây warning)
- Repair wall sau rally 1 fail → full HP restore
- Rally 2: địch phải re-launch, 5 phút + travel time = 10-20 phút
- Repair lại → full HP
- Rally 3: same cycle

**Tổng thời gian để zero với wall lv25**: 30-60 phút (3 rally cycles).

30-60 phút = đủ để alliance của mày detect, mobilize reinforcement, và arrive.

**Với wall lv20**: 2 rally = 15-30 phút. Tight window, khó reinforce kịp.

> 🤖 V1 tự động repair wall sau battle, không cần check thủ công. [Xem V1 →](/#packages) · 750.000đ/tháng.

## FAQ

### Wall lv25 có cần thiết trước KvK không?

Lv22-23 là acceptable. Lv25 là optimal. Nếu không kịp rush trước KvK → dùng peace shield thay thế và push wall sau KvK.

### Nếu không có garrison troops thì wall có nghĩa gì không?

Wall HP vẫn absorb damage nhưng không có garrison DPS counter → địch vẫn break nhanh. Wall + garrison combination là cần, không phải riêng lẻ.

### Bot V1 có tự cài garrison không?

Không. V1 auto-build và repair. Garrison setup là quyết định của player. V3 mới có auto-reinforce garrison theo lệnh R5.

Đọc kèm:
- [City Hall Levels 16-21-25 Guide RoK 2026](/blog/city-hall-levels-16-21-25-guide-rok-2026)
- [City Hall 25 Speedrun RoK 2026](/blog/city-hall-25-speedrun-rok-2026)
- [Anti-Zeroing Strategy RoK 2026](/blog/anti-zeroing-strategy-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)
  `,
};
