import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "f2p-6-month-roadmap-rok-2026",
  title: "F2P 6-Month Roadmap RoK 2026 — Từ Day 1 Đến Power 30M Không Nạp",
  description: "Roadmap 6 tháng F2P Rise of Kingdoms 2026: từ City Hall 1 đến Power 30M không nạp tiền. Timeline từng tháng, milestone rõ ràng, bot Trial/V1 tự động hóa grinding để không bỏ lỡ window tăng trưởng.",
  date: "2026-05-10",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Sự Thật Mà Không Ai Nói Với Mày

Power 30M không nạp tiền không phải huyền thoại. Nó là **toán học + thời gian + không lãng phí 1 phút nào**.

90% F2P thất bại không phải vì thiếu kiến thức — mà vì bỏ lỡ quá nhiều window tăng trưởng nhỏ tích lũy lại. Miss build queue 2 tiếng/ngày = miss 60 tiếng/tháng build time. 6 tháng = 360 tiếng. City Hall bị delay 3-4 level. Power bị delay 5-8M.

Bài này là roadmap thực tế — không phải bản vẽ lý tưởng.

## Month 1 (Day 1-30): Foundation

**Target cuối tháng**: City Hall 20, Power ~800k, VIP 1

### Week 1 — Server Rush (nếu server mới)

7 ngày đầu là window giá trị cao nhất game. Beginner speedup + tutorial reward + không competition RSS tile:

- City Hall → 14 trong 7 ngày (dùng toàn bộ beginner speedup)
- 2 march gather loop ngay khi CH 10 unlock
- Join pre-made alliance (Discord server RoK VN)
- Farm Barb Lv 1-2 ngay khi có AP charge

Xem thêm: [New Server Day 1-7 Rush RoK 2026](/blog/new-server-day-1-7-rush-rok-2026)

### Week 2-4 — Build Compound

Sau Week 1, tốc độ tăng power chậm lại — đây là điểm phần lớn F2P mất momentum:

| Tuần | City Hall Target | Focus |
|---|---|---|
| Week 1 | → 14 | Beginner speedup burn |
| Week 2 | → 17 | Gather RSS + T2 troops |
| Week 3 | → 19 | Research Economy branch |
| Week 4 | → 20 | KvK prep |

**Bottleneck Month 1**: RSS thiếu liên tục. Gather loop 24/7 là ưu tiên số một.

> 🤖 Trial 7 ngày không cam kết — test trước khi commit. [Bắt đầu Trial →](/#packages) · 150.000đ.

## Month 2 (Day 31-60): Acceleration

**Target cuối tháng**: City Hall 22-23, Power ~2M, VIP 2

Month 2 là giai đoạn **compound growth** bắt đầu thấy rõ. City Hall 20-23 unlock:

- 3 march slot (CH 22): gather throughput tăng 50%
- T3 troops (sau CH 21): power spike +500k-800k
- Hospital tăng capacity → barb farm aggressive hơn

### VIP 2 Target

VIP 2 cần ~14.000 VIP points từ Lv 0. Sources Month 2:

- Gem mine 24/7 → spend VIP exp: ~1.000-1.500 VIP points
- Daily objectives 0% miss: ~3.800 points
- KvK Honor rewards: 200-500 points

**Không miss 1 daily nào trong 30 ngày = difference 800-1.200 VIP points.**

> 🤖 V1 750k/tháng: build queue + gather + daily automation. [Xem V1 →](/#packages)

Xem chi tiết: [F2P → VIP 2 Bot Progression Roadmap RoK](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)

## Month 3 (Day 61-90): KvK First Season

**Target cuối tháng**: City Hall 24, Power ~5M, Top 200 Honor server

Month 3 thường trùng với KvK đầu tiên (hoặc thứ 2) của server. Đây là **turning point** — player chơi KvK tốt bứt phá, player bỏ KvK thụt lại.

### KvK Priority Tháng 3

Không cần whale để farm Honor KvK tốt:

- Barb farm daily: 20-30 kills/ngày × 30 ngày = 600-900 kills/KvK
- Fort rally participation (nhỏ, không cần tank)
- Daily flag build + resource transfer

**Top 200 Honor** trên server có ~500-2.000 players active = achievable F2P.

### Commander Priority Month 3

F2P commander pool tháng 3 thường có:
- Lohar (Lv 40+, Peacekeeping tree 5/5)
- Boudica hoặc Joan (support)
- 1 gathering commander (Seondeok hoặc equivalent)

Xem chi tiết: [F2P 5 Commanders Priority RoK 2026](/blog/f2p-best-5-commanders-priority-rok-2026)

## Month 4-5 (Day 91-150): Growth Plateau

**Target**: City Hall 25, Power ~12-15M

Month 4-5 là giai đoạn **dài nhất và nhàm chán nhất** — đây là nơi 40% F2P bỏ game.

City Hall 25 requirements (gần đúng):
- 400M+ Food/Wood/Stone
- Academy research tổng hơn 100+ levels
- Hospital capacity 500k+ troops

Thực tế: City Hall 25 cần **3-4 tháng RSS grinding** nếu không có automation.

| Tháng | CH Target | Power | RSS Cần |
|---|---|---|---|
| Month 4 | → 24 | ~8M | 200M+ |
| Month 5 | Hoàn thành CH 25 prerequisites | ~12M | 350M+ |

Xem chi tiết: [F2P City Hall 25 Không Nạp RoK 2026](/blog/f2p-city-hall-25-no-spend-rok-2026)

## Month 6 (Day 151-180): Power 30M Push

**Target**: Power 25-30M, T4 troops, KvK active contributor

Tháng 6 là giai đoạn consolidation — City Hall 25 đã unlock, giờ là:

- T4 troops research (6-8 tuần với 2 builder + research speed VIP 5)
- Troop training massive batch
- Equipment crafting (if available)
- KvK Season 2-3 prep

### Power 30M Breakdown

| Source | Power estimate |
|---|---|
| Buildings (CH 25 full) | ~8-10M |
| Research (Economy + Military 70%) | ~10-12M |
| Troops (T4 500k) | ~8M |
| Equipment (basic set) | ~2M |
| **Total** | **~28-32M** |

Power 30M F2P trong 6 tháng = **không phải số mày có thể tự làm thủ công**. Cần automation.

## Tại Sao Manual Không Đủ

F2P roadmap 6 tháng này đòi hỏi:

- **0% miss** daily objectives (360 ngày tích lũy)
- **Gather loop liên tục** 24/7 — không có thời gian offline
- **AP không bỏ phí** — 10 AP/ngày × 180 ngày = 1.800 barb kills
- **Build queue không idle** — 1 tiếng idle/ngày = 180 tiếng lost trong 6 tháng

Con người không thể làm điều này nhất quán. Bot có thể.

> 🤖 Trial → V1: automation từ Day 1, không cam kết dài hạn. [Xem Trial →](/#packages) · 150.000đ thử 7 ngày.

## Checklist 6 Tháng

- [ ] Month 1: CH 20, VIP 1, Alliance top 20
- [ ] Month 2: CH 22-23, VIP 2, 3 marches active
- [ ] Month 3: CH 24, Honor top 200 KvK season 1
- [ ] Month 4: CH 25 prerequisites xong
- [ ] Month 5: CH 25 complete, T4 unlock
- [ ] Month 6: Power 25-30M, KvK active

## Đọc Thêm

- [F2P Day 1-30 Beginner Checklist RoK 2026](/blog/f2p-day-1-30-beginner-checklist-rok-2026)
- [F2P Beginner Mistakes Bot Solves Day 1-30 RoK 2026](/blog/f2p-beginner-mistakes-bot-solves-day-1-30-rok-2026)
- [F2P → VIP 5 Roadmap RoK 2026](/blog/f2p-to-vip-5-roadmap-rok-2026)
- [New Server Day 1-7 Rush RoK 2026](/blog/new-server-day-1-7-rush-rok-2026)

[→ Xem 5 gói cước](/#packages) (**Trial 150k** · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)
  `,
};
