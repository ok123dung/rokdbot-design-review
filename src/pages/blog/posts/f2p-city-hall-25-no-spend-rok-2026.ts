import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "f2p-city-hall-25-no-spend-rok-2026",
  title: "F2P City Hall 25 Không Nạp RoK 2026 — Roadmap 6 Tháng Với Bot V1",
  description: "Roadmap thực tế F2P lên City Hall 25 trong 6 tháng không nạp Rise of Kingdoms 2026: RSS requirement, speedup budget, build order, và V1 bot chạy build queue 24/7.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## City Hall 25 F2P — Mốc Mà 90% Nghĩ Là Impossible

City Hall 25 là threshold phân chia "mid game" và "late game" trong RoK. Unlock T5 troops, 4th builder (trên một số server), và march capacity tối đa.

Thời gian build City Hall 25 theo in-game timer: **365 ngày**. Đây là lý do mọi người nghĩ impossible.

Thực tế: với speedup đúng chiến lược và build queue không bao giờ empty, **6 tháng là con số F2P active có thể đạt được**.

Bài này breakdown cụ thể từng giai đoạn, không có lý thuyết suông.

## RSS Requirement Tổng — 6 Tháng

City Hall từ 20 → 25 cần (tính gộp):

| Upgrade | Food | Wood | Stone | Ore | Tổng RSS |
|---|---|---|---|---|---|
| CH 20→21 | 80M | 55M | 40M | 25M | 200M |
| CH 21→22 | 120M | 85M | 60M | 35M | 300M |
| CH 22→23 | 180M | 125M | 90M | 55M | 450M |
| CH 23→24 | 280M | 195M | 140M | 85M | 700M |
| CH 24→25 | 400M | 280M | 200M | 120M | 1.000M |
| **Tổng** | | | | | **~2.650M RSS** |

2.650M RSS trong 180 ngày = **~14.7M RSS/ngày** cần farm.

Với 4 march gather + tile Lv 5 + bot V1 = **12-18M RSS/ngày**. Khả thi, nhưng sát nút. Không thể miss nhiều ngày gathering.

## Speedup Budget

Ngoài RSS, cần speedup để rút ngắn build time:

- CH 20→25 in-game time: ~365 ngày
- Target: hoàn thành trong 180 ngày
- Speedup cần: **~185 ngày = 266.400 phút**

Nguồn speedup F2P trong 6 tháng:

| Source | Phút/tháng | 6 tháng |
|---|---|---|
| Daily Objectives | ~1.500 | 9.000 |
| Alliance Events | ~3.000 | 18.000 |
| KvK Rewards | ~8.000 | 48.000 (2 KvK) |
| Expedition Events | ~2.000 | 12.000 |
| Chest Drops | ~4.000 | 24.000 |
| **Tổng** | | **~111.000 phút** |

111.000 phút = 77 ngày speedup. Còn thiếu ~108 ngày.

Gap được fill bằng:
- Alliance Help (15-20 phút/ngày × 180 = 3.600 phút)
- VIP building speed bonus (VIP 5 = +6% reduce → ~22 ngày saved)
- Bot V1 không miss bất kỳ daily speedup nào

Thực tế với optimization đầy đủ: **City Hall 25 trong 6-7 tháng** cho F2P với bot V1 running 24/7.

## Build Order Tối Ưu — Không Phải City Hall Priority Mọi Lúc

Sai lầm phổ biến: spam upgrade City Hall non-stop. Thực ra, một số upgrade PHẢI đi trước CH:

### Trước CH 21
- Hospital lên 21 (capacity cho KvK)
- Barracks × 2 lên 20 (training speed)
- Academy 21 (research unlock)

### Trước CH 22
- Farm × 4 lên 21 (food production — CH 22 rất tốn food)
- Farm Tech "Crop Science" → reduce food cost buildings

### Trước CH 23-24
- Stronghold 23 (tăng troop capacity)
- Workshop 22 (unlock equipment craft)

Bot V1 auto-follows build order này khi queue empty. Không cần manually check "giờ này nên build gì".

> 🤖 V1 build queue chạy 24/7, không bao giờ idle. [Xem V1 →](/#packages) · 750.000đ/tháng.

## 6-Month Milestone Tracker

### Tháng 1 (Ngày 1-30): Foundation
- Target: City Hall 20 (nếu chưa có)
- RSS stockpile: tích 50M
- Bot: Trial 150k để không miss daily

### Tháng 2 (Ngày 31-60): CH 21 Sprint
- RSS cần: 200M (farm ~14M/ngày với V1 4 march)
- Speedup dùng: 30.000 phút (từ KvK + daily)
- Target: City Hall 21 hoàn thành

### Tháng 3 (Ngày 61-90): CH 22
- RSS cần: 300M
- KvK tháng 3 = ~15.000-20.000 phút speedup
- Target: City Hall 22 + VIP 5 unlock

### Tháng 4 (Ngày 91-120): CH 23
- RSS cần: 450M (hard threshold — cần bot gather không miss)
- Build prerequisites: Farm 22, Hospital 22
- Target: City Hall 23

### Tháng 5 (Ngày 121-150): CH 24
- RSS cần: 700M (khó nhất — cần 4 march tile Lv 5 liên tục)
- Speedup: consume phần lớn stockpile
- Target: City Hall 24

### Tháng 6 (Ngày 151-180): CH 25 Endgame
- RSS cần: 1.000M (cần bot chạy 24/7 không nghỉ)
- Alliance buff phải active
- Target: **City Hall 25 complete**

## Tại Sao Bot V1 Là Yếu Tố Quyết Định

City Hall 25 trong 6 tháng không phải về skill — về **consistency of resource flow**. Cụ thể:

- Mỗi ngày build queue empty = mất 6-8 giờ build time
- 180 ngày × trung bình 3 giờ idle/ngày = **540 giờ lost** = 22 ngày extra
- Với bot V1: build queue 0% idle = **22 ngày tiết kiệm** = hoàn thành sớm hơn 22 ngày

Gather throughput quan trọng hơn:
- Manual gather miss 35% (như đã tính) = 180 ngày × 14.7M/ngày × 35% = **924M RSS lost**
- Với bot V1 gather 0% miss = 924M RSS extra = **đủ fill toàn bộ gap CH 24→25**

Không có bot V1, City Hall 25 trong 6 tháng là impossible với F2P. Với bot V1: khả thi nhưng sát.

## FAQ

### Có cần City Hall 25 không? Game có gì hay hơn ở đó?
CH 25 unlock: T5 troops (power spike 3-5x per troop), tăng march capacity, unlock late-game talent trees. Nếu muốn chơi seriously hơn 1 năm, CH 25 là destination.

### V1 750k/tháng × 6 tháng = 4.5M. Có đáng không?
So sánh: whale nạp để rush CH 25 tốn 10-30M. F2P với V1: 4.5M trong 6 tháng + đạt CH 25. ROI rõ ràng.

### Nếu miss 1 tuần do bận thực tế?
Roadmap có buffer. Miss 1 tuần = delay 10-12 ngày (không linear vì RSS compound). Vẫn trong 7-tháng range.

## Đọc Thêm

- [F2P Day 1-30 Beginner Checklist RoK 2026](/blog/f2p-day-1-30-beginner-checklist-rok-2026)
- [Farm 1.000.000 RSS/Giờ Setup RoK 2026](/blog/farm-1000-rss-per-hour-setup-rok-2026)
- [Auto Build Research RoK VIP Template](/blog/auto-build-research-rok-vip-template)
- [Speedup Stockpile Management RoK 2026](/blog/speedup-stockpile-management-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)
  `,
};
