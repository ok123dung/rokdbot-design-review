import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "crusader-fortress-build-prerequisites-rok-2026",
  title: "Crusader Fortress Build Prerequisites RoK 2026 — Resource + Time Math",
  description: "Crusader Fortress prerequisites RoK 2026: resource cost chi tiết, time math thực tế, bottleneck analysis, và cách bot V2 auto-build để hit fortress unlock trong thời gian tối thiểu.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Crusader Fortress — Cái Giá Không Ai Tính Kỹ

Crusader Fortress là milestone mà 70% player mid-tier "sắp xong" từ 3 tháng trước và vẫn đang "sắp xong". Không phải vì thiếu resource. Vì **không tính đúng thời gian và bottleneck**.

Bài này làm phép tính thẳng: cần bao nhiêu resource, bao nhiêu ngày, và đâu là điểm nghẽn thật sự. Không có lý thuyết — chỉ có số.

## Prerequisites Crusader Fortress — Danh Sách Đầy Đủ

### City Hall Requirement

City Hall level tối thiểu để unlock Crusader Fortress: **City Hall 21**.

City Hall 21 tự nó là một grind — xem [City Hall Levels 16-21-25 Guide RoK 2026](/blog/city-hall-levels-16-21-25-guide-rok-2026) để tính riêng.

### Building Prerequisites

| Building | Level Yêu Cầu | Resource Cost | Time |
|---|---|---|---|
| Barracks | 21 | 14M food + 11M wood | 8 ngày |
| Archer Tower | 21 | 12M wood + 9M stone | 7 ngày |
| Stable | 20 | 10M food + 8M gold | 6 ngày |
| Workshop | 20 | 9M stone + 7M gold | 5 ngày |
| Academy | 21 | 16M food + 12M stone | 9 ngày |
| Farm × 6 | 21 | 18M total | 10 ngày |
| Hospital × 3 | 20 | 8M total | 5 ngày |

**Tổng resource estimate**: ~110M mixed RSS, **Tổng thời gian sequential**: ~50 ngày.

Sequential = xếp hàng lần lượt. Thực tế có 2 construction queue → **~25-28 ngày** nếu chạy 2 queue song song 24/7.

> 🤖 V2 auto-build 2 queue 24/7 — không để queue idle dù 1 tiếng. Crusader Fortress trong 25 ngày thay vì 3 tháng. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Resource Math Thực Tế

### RSS Cần Thiết (Tổng)

| Resource | Lượng Cần | Farm Time (Bot V2 solo) |
|---|---|---|
| Food | ~45M | ~18 ngày |
| Wood | ~32M | ~13 ngày |
| Stone | ~28M | ~11 ngày |
| Gold | ~15M | ~6 ngày |

Farm time = bot V2 gathering tile lv4-5 song song barb chain. Nếu manual gather: nhân 2,5-3x.

### Bottleneck Thật Sự

Không phải resource tổng — bottleneck là **gold**. Gold tile ít hơn food/wood/stone trên map. Với manual gather, gold thường thiếu 20-30% khi food/wood đã đủ.

Bot V2 tự detect tile type và ưu tiên gold tile khi gold < 60% requirement — giải quyết bottleneck tự động.

### Research Prerequisites

Crusader Fortress cũng cần một số research:

- **Military Discipline** (Military tree) lv5: cần trước khi build
- **Equipment Mastery** (Technology tree) lv3
- Ước tính research time: **12-15 ngày** nếu chạy bot auto-research liên tục

Cộng dồn: building + research chạy song song = **25-28 ngày** thực tế với bot V2.

## Time Math — So Sánh Manual vs Bot

| Scenario | Thời Gian Build | Thời Gian Research | Tổng |
|---|---|---|---|
| Manual (4h/ngày active) | ~60-75 ngày | ~30 ngày | ~90 ngày |
| Bot V1 (1 đạo gather) | ~35 ngày | ~20 ngày | ~55 ngày |
| Bot V2 (2 queue + gather) | ~25 ngày | ~15 ngày | ~40 ngày |
| Bot V3 (full optimize) | ~20 ngày | ~12 ngày | ~32 ngày |

**Manual vs V2: tiết kiệm 50 ngày**. 50 ngày × giá trị game-time = 1-2 KvK season thiếu Crusader Fortress.

Crusader Fortress unlocks trong KvK thường tạo ra combat buff cho garrison. Miss 1 KvK season vì chưa có fortress = miss buff advantage toàn alliance.

## Speedup Budget

Building Crusader Fortress prerequisites không thể rush bằng speedup thuần (quá nhiều building cần upgrade). Nhưng **speedup heal và speedup research** giúp ích:

- Speedup research 50 × 1h = rút ngắn 2 research tier
- Heal speedup giữ barb chain không break để gather RSS liên tục

Khuyên: giữ speedup cho heal trong KvK, để bot grind resource và building time tự nhiên.

## Queue Management Strategy

Với 2 construction queue song song:

**Queue 1 (Priority)**: Buildings trực tiếp unlock fortress (Barracks, Stable, Workshop)

**Queue 2 (Secondary)**: Buildings gián tiếp (Farm, Hospital level up để tăng capacity)

Bot V2 tự quản lý 2 queue theo priority list — không cần mày tự sắp lịch. Chỉ cần set target (Crusader Fortress), bot tự tính path và bắt đầu từ building có dependency sớm nhất.

> 🤖 V2 auto-build priority path tới Crusader Fortress — không để queue idle, không skip dependency. [Xem V2 →](/#packages).

## Common Mistakes

### Mistake 1: Nâng Building Sai Thứ Tự

Nâng Hospital trước Barracks khi Barracks là hard prerequisite → hospital queue dùng slot mà Barracks cần → delay cả lộ trình.

### Mistake 2: Quên Research Dependency

Build prerequisites xong nhưng quên research Military Discipline lv5 → Crusader Fortress vẫn locked → tất cả build time waste chờ 1 research.

Bot V2 check cả build VÀ research dependency khi plan path — không xảy ra scenario này.

### Mistake 3: Under-estimate Gold Shortage

Start build path với 80M food/wood nhưng chỉ 8M gold → hit gold wall ở cuối khi đã build gần xong. Bot gather gold tile ưu tiên từ đầu để avoid late-game bottleneck.

## FAQ

### Crusader Fortress có cần VIP level không?
VIP 6+ cho phép queue building thứ 3 — không bắt buộc nhưng giảm thêm ~20% thời gian. VIP 5 + bot V2 đủ cho 28-30 ngày.

### Bot có tự farm đủ RSS không hay phải mua?
Bot V2 farm tile lv4-5 gathering khoảng **15-20M RSS/tuần** tùy map competition. Cho 110M total: ~5-7 tuần gather — chạy song song với build, không cần mua gem RSS.

### City Hall 21 có thể skip step nào không?
Không. City Hall 21 là hard requirement. Phải build City Hall trước, sau đó prerequisites buildings mới unlock.

## Bắt Đầu Crusader Fortress Với V2

**V2 Cao Cấp 900.000đ/tháng**:
- 2 construction queue auto-build priority path
- Auto gather RSS song song barb chain
- Auto research dependency path

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [City Hall 25 Speedrun RoK 2026](/blog/city-hall-25-speedrun-rok-2026)
- [KvK Season Prep Bot Checklist RoK 2026](/blog/kvk-season-prep-bot-checklist-rok-2026)
- [Heroic Anthem KvK Fort Build RoK 2026](/blog/heroic-anthem-kvk-fort-build-rok-2026)
  `,
};
