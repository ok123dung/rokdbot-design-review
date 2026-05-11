import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "mid-server-180-days-optimization-rok-2026",
  title: "Mid-Server 180+ Ngày Optimization RoK 2026 — Khi KvK Lần Đầu Tiếp Cận",
  description: "Server 180+ ngày Rise of Kingdoms 2026: optimization khi KvK đang diễn ra, T4 research priority, honor ranking push, và tại sao đây là thời điểm upgrade V2 để maximize combo farming trước khi server settle.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Server 180 Ngày — Khoảnh Khắc Phân Hóa

Day 180 trên 1 server RoK là mốc mà phần đông player đã lộ rõ trajectory:

- **Top 10%**: Power 20-40M, T4 troops 200k+, Honor top 100
- **Middle 40%**: Power 8-15M, T3 mix, Honor top 500
- **Bottom 50%**: Power <5M, đang xem xét bỏ game

Nếu mày đang đọc bài này và đang ở middle tier — Day 180 là **last window** để bứt lên top trước khi server settle hoàn toàn vào tháng 9-12.

Window này đóng lại vì: server ổn định → top players build lead quá lớn → catch-up bằng gameplay thuần không còn feasible.

## KvK Season 2-3 — Mechanic Thay Đổi

Sau Day 180, KvK không còn là "farm barb thoải mái" như Season 1. KvK Season 2-3 đặc trưng:

- **Targeted kill squads**: player power 5-10M bị hunt bởi rally team power 30M+
- **Fort war**: pháo đài barb và holy site trở thành primary battleground
- **Alliance diplomacy**: không có alliance backup → bị farm liên tục

### Honor Farming Cần Thay Đổi

Season 1: barb farm 20-30 kills/ngày = top 200 honor.
Season 2-3: barb farm tương tự = top 500-600. Tier trên đã push barb chain 24/7 với bot.

**Gap này là lý do upgrade từ V1 lên V2**.

V2 Combo Spam+Luring+AOE = 217 kills/ngày (1 đạo). V1 basic = 50-80 kills/ngày. Để giữ ranking honor khi server settle, cần automation tier cao hơn.

> 🤖 V2 Combo farming 217 barb kills/ngày — gấp 3-4x V1 cùng AP cost. [Xem V2 →](/#packages) · 900.000đ/tháng.

## T4 Troops — Priority Tuyệt Đối Sau Day 150

Nếu chưa có T4 trước Day 180: đây là bottleneck cần giải quyết ngay.

### T4 Research Timeline

Military tree T4 node yêu cầu (approximate):
- Military Lv 25+ (multiple sub-nodes)
- Research time: 60-90 ngày nếu không có speedup
- Research time với VIP 5 + speedup allocation: **30-45 ngày**

### T4 Training Math

T4 Infantry (ví dụ):
- Cost: ~800 Food + 800 Wood per troop
- Train time: ~2-3 phút/troop (có training speed buff)
- 50.000 T4 troops: cần ~2.400 tiếng training time + 40M food + 40M wood

Bot V2 tự động training queue fill không idle. Manual player average idle 40-50% training time → T4 army chậm hơn 2x.

### Troop Composition Day 180

Không cần max 1 type. Optimal F2P composition Day 180:
- 40% Infantry (tank, fort garrison)
- 35% Cavalry (open field, barb chase)
- 25% Archer (rally support, fort siege)

Tỷ lệ này thay đổi khi có KvK specific strategy — nhưng 40/35/25 là safe baseline.

## Research Priority — What's Left

Day 180, Economy research thường 70-80% complete. Tập trung vào:

### Military Must-Have Nodes

1. **T4 Unlock** (nếu chưa có)
2. **Troop HP** nodes (all types): survival trong KvK
3. **March Speed**: tăng barb chase efficiency + open field mobility
4. **Attack** nodes sau HP

### Library Tech (nếu đã unlock)

Library Tech Tree mở ở server mature. Day 180, check:
- Peacekeeping books: tăng barb damage + XP gain
- Military books: troop attack/defense generic
- Economy books: gather speed + hospital capacity

Xem chi tiết: [Library Tech Tree Must-Have RoK 2026](/blog/library-tech-tree-must-have-rok-2026)

## VIP Level — Mid-Server Target

Day 180 F2P với daily automation:
- VIP 3: ~75% player reach ở Day 180
- VIP 4: ~40% reach
- VIP 5: ~20% reach (cần daily 0% miss)

VIP 5 benefit ở Day 180 particularly valuable: 2nd builder queue. Nếu chưa có VIP 5 → accelerate với V2 gem mining (V2 thêm gem mine coverage so với V1).

Xem: [F2P → VIP 5 Roadmap RoK 2026](/blog/f2p-to-vip-5-roadmap-rok-2026)

## Optimize Map Position

Server 180 ngày: territory wars đã settled. Vài tips:

### Gem Mine Position

Nếu city chưa gần gem mine → lúc này relocation cost cao (~500 gem). Nhưng ROI: city gần gem mine cluster = bot farm gem mine 8-10 lần/ngày thay vì 4-6 lần (march distance khác nhau).

6 lần/ngày vs 10 lần/ngày × 120 gem/lần = **480 gem vs 288 gem/ngày** = 192 gem extra mỗi ngày = 5.760 gem/tháng. Relocation 500 gem payback trong 3 ngày.

### Alliance Territory

Alliance T1-T2 có territory với tile Lv 5 cluster. Nếu alliance mày không có territory tile Lv 5 → consider switch đến alliance có better territory hoặc coordinate với current alliance để push territory war.

## Day 180 vs Day 90 — What Changes

| Metric | Day 90 | Day 180 |
|---|---|---|
| Priority | City Hall rush | T4 + Library |
| Bot tier | V1 adequate | V2 for honor push |
| KvK style | Small rally, barb | Full war participant |
| Alliance | T2 ok | T1 required for top honor |
| Commander | Lohar/Theodora | + Saladin, Constantine |

## FAQ — Mid-Server Day 180

### Có nên reset talent tree commander không?

Nếu mày đang dùng Lohar full Peacekeeping nhưng server đã settle sang KvK heavy → cân nhắc respec sang hybrid. Reset tốn gem (~200 gem) nhưng thường worth nếu meta đã shift rõ ràng.

### VIP 5 có cần thiết không nếu đã Day 180?

VIP 5 với 2 builder queue vẫn là multiplier quan trọng ở Day 180, đặc biệt khi còn nhiều Academy research nodes cần hoàn thành. Không có deadline để get VIP 5 — nhưng mỗi ngày không có VIP 5 = mỗi ngày chậm hơn.

### Bot V2 có hay bị detect không trên server cũ?

RokdBot chạy cloud server riêng — không inject client game. Tỷ lệ ban qua 8 KvK seasons dưới 0,1%. Server cũ hay mới không ảnh hưởng detection rate.

## Đọc Thêm

- [F2P 6-Month Roadmap RoK 2026](/blog/f2p-6-month-roadmap-rok-2026)
- [F2P → VIP 2 Bot Progression Roadmap RoK](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
- [F2P City Hall 25 Không Nạp RoK 2026](/blog/f2p-city-hall-25-no-spend-rok-2026)
- [New Server Day 1-7 Rush RoK 2026](/blog/new-server-day-1-7-rush-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)
  `,
};
