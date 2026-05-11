import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "city-hall-levels-16-21-25-guide-rok-2026",
  title: "City Hall Lv 16/21/25 Milestones RoK 2026 — Build Cost + Speedup Required + Bot Strategy",
  description: "Chi tiết resource cost + speedup cần thiết cho City Hall 16, 21, 25 RoK 2026. Bot V1 auto-build strategy để đạt từng milestone đúng timeline KvK.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## 3 milestone City Hall thay đổi game: Lv 16, 21, 25

Không phải mọi level City Hall đều quan trọng như nhau. 90% mechanics upgrade tập trung vào 3 milestone:

- **CH 16**: Unlock T4 troops — đây là bước nhảy lớn nhất về troop power (+40% damage vs T3)
- **CH 21**: Unlock T5 troops + max march size 1 — KvK competitive minimum
- **CH 25**: Max game content — full power potential

Nếu mày đang CH 15 và sắp lên 16, bài này là roadmap bạn cần.

## City Hall 16: Unlock T4 — Milestone #1

**Tại sao quan trọng**: T4 troops có stat base cao hơn T3 40% — cùng số lượng troops, damage tăng 40% instant.

**Build cost (ước tính)** CH 15 → 16:

| Resource | Amount |
|---|---|
| Food | 18.000.000 |
| Wood | 15.000.000 |
| Stone | 12.000.000 |
| Gold | 8.000.000 |
| Build time | 4 ngày 12 giờ |

**Prerequisite CH 16**:
- Academy Lv 15
- Hospital × 2 Lv 15
- Barracks Lv 15
- Storehouse Lv 15

**Speedup strategy**: Dùng tối đa 1 ngày speedup (24h) — còn lại tự nhiên. CH 16 không phải bottleneck lớn.

> 🤖 Bot V1 auto-queue prerequisite buildings parallel → CH 16 xong trong 10-12 ngày thay vì 20 ngày manual. [Xem V1 →](/#packages) · 750.000đ/tháng.

## City Hall 21: Unlock T5 — Milestone #2

**Tại sao critical**: Không có CH 21 = không có T5 troops = KvK với T4 trong khi đối phương T5 → lose 30% damage trên mỗi fight.

**Build cost CH 20 → 21**:

| Resource | Amount |
|---|---|
| Food | 85.000.000 |
| Wood | 70.000.000 |
| Stone | 60.000.000 |
| Gold | 45.000.000 |
| Build time | 5 ngày |

**Total resource cần CH 16 → 21** (bao gồm 5 level):

| Resource | Total |
|---|---|
| Food | ~350.000.000 |
| Wood | ~290.000.000 |
| Stone | ~240.000.000 |
| Gold | ~180.000.000 |
| Speedup needed | ~18 ngày |

**Speedup strategy CH 16 → 21**: Cần 18 ngày speedup tích lũy. Farm từ:
- Barb fortress daily: 1-2h/ngày × 150 ngày = 150-300h = 6-12 ngày
- Daily quest/event: ~40-50h = 2 ngày
- KvK milestone reward: ~3 ngày

Tổng có thể farm: 11-17 ngày speedup — gần đủ nếu không bỏ lỡ daily.

| Speedup Source | Manual | Bot V1 |
|---|---|---|
| Daily quest claim | 50% claim rate | 100% guaranteed |
| Barb drop farm | 60-90h (không đều) | 150-180h (24/7) |
| Event reward claim | 40% claim rate | 100% guaranteed |
| **Tổng 150 ngày** | **110-140h** | **200-230h** |

Bot V1 tạo ra thêm 60-90h speedup extra — đủ để về đích 21-25 ngày sớm hơn.

## City Hall 25: Max Level — Milestone #3

**Tại sao milestone cuối**: CH 25 unlock max march size 2, max garrison capacity, và allow full power commander + troop combo.

**Build cost CH 24 → 25**:

| Resource | Amount |
|---|---|
| Food | 230.000.000 |
| Wood | 190.000.000 |
| Stone | 160.000.000 |
| Gold | 120.000.000 |
| Build time | 25 ngày |

**Speedup cần thiết CH 21 → 25**: 68 ngày build time tổng. Farm được tự nhiên trong 6 tháng: ~120-180 ngày speedup. Dư nhưng chỉ nếu **farm đều đặn mỗi ngày**.

> 🤖 Không farm đều = thiếu speedup. Bot V1 farm barb 24/7 = không bao giờ bỏ lỡ ngày nào. [Kích hoạt V1 →](/#packages).

## Full roadmap với bot V1

| Phase | Timeline | CH Level | Bot Action |
|---|---|---|---|
| Chuẩn bị | Tháng 1-2 | CH 14-15 | Auto-farm RSS tile + daily quest |
| Sprint CH 16 | Tháng 3 | CH 15 → 16 | Auto-build prerequisite parallel |
| Build T4 army | Tháng 3-4 | CH 16 | Auto-train T4 cavalry 24/7 |
| Sprint CH 21 | Tháng 5-7 | CH 16 → 21 | Auto-build + speedup apply |
| Build T5 army | Tháng 7-8 | CH 21 | Auto-train T5 24/7 |
| Sprint CH 25 | Tháng 9-12 | CH 21 → 25 | Auto-build + barb speedup farm |

## Resource farming với bot V1

CH 21 → 25 cần tổng **~800M food + 650M wood + 550M stone + 400M gold**. Không thể farm thủ công trong reasonable time.

Bot V1 farm tile level 5 liên tục:
- T4 tile: 500K-1M RSS mỗi 8 giờ
- Bot farm 3 tiles/ngày = 1.5-3M RSS/ngày
- 180 ngày × 2.25M avg = **405M RSS** — cover 50% CH 21 → 25 resource

Phần còn lại: RSS market (gem → RSS) + event reward.

## Đọc tiếp:
- [City Hall 25 Speedrun RoK 2026 — 14 Ngày Thay Vì 126 Ngày](/blog/city-hall-25-speedrun-rok-2026)
- [Academy Research Priority RoK 2026](/blog/academy-research-priority-rok-2026)
- [Auto Farm 4 RSS Tile Level 5 RoK](/blog/auto-farm-4-rss-tile-level-5-rok)
  `,
};
