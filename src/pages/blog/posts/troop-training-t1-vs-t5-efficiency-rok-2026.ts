import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "troop-training-t1-vs-t5-efficiency-rok-2026",
  title: "Troop Training T1 vs T5 Efficiency RoK 2026 — Khi Nào Mass Train T1 (Math + Bot Schedule)",
  description: "Phân tích T1 vs T5 training efficiency Rise of Kingdoms 2026: RSS cost, speedup burn, combat power, heal cost sau trận. Math đầy đủ và bot V2 tự động training schedule tối ưu.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## T1 hay T5 — Câu Hỏi Sai Từ Đầu

Hầu hết player RoK hỏi "nên train T1 hay T5?" Đây là câu hỏi sai. Câu đúng là: **"Train T1 hay T5 cho mục đích gì, ở giai đoạn nào, trong context nào?"**

Câu trả lời khác nhau hoàn toàn tùy tình huống. Người cứng nhắc "luôn T5" bỏ hàng triệu RSS. Người cứng nhắc "luôn T1" bị bào flat trong KvK.

Bài này tính math cụ thể cho cả hai trường hợp.

## Math Cơ Bản: Cost Per Troop

### T1 Training Cost (Siege Engine level 1, Infantry)
- RSS: ~180 food + 120 wood + 60 stone + 30 ore = **~390 RSS tổng**
- Speedup: ~0,5 phút/troop
- Hospital beds khi chết: **0** (T1 dead = dead, không heal)

### T5 Training Cost (Siege Engine level 5)
- RSS: ~3.200 food + 2.100 wood + 1.050 stone + 700 ore = **~7.050 RSS tổng**
- Speedup: ~45 phút/troop
- Hospital beds khi chết: 1 bed/troop → heal cost ~30% original RSS

**T5 cost gấp ~18x RSS và ~90x speedup so với T1.**

Nhưng 1 T5 không mạnh gấp 18x T1. Đây là nơi math thú vị bắt đầu.

## Combat Power Per RSS: T1 vs T5

| Troop | Power/troop | RSS/power | Heal cost (nếu sống) |
|---|---|---|---|
| T1 Infantry | 120 | 3,25 RSS/power | N/A (dead = dead) |
| T3 Infantry | 750 | 5,8 RSS/power | 30% original |
| **T5 Infantry** | **2.800** | **2,52 RSS/power** | **~2.100 RSS** |

T5 cho **power/RSS tốt nhất** khi nhìn vào combat value thuần — nhưng chỉ khi bạn đủ khả năng heal sau trận. Nếu không heal được (hết speedup, hết RSS), T5 dead = mất trắng 7.050 RSS/troop.

## Khi Nào Mass Train T1 — 4 Trường Hợp Cụ Thể

### 1. KvK Power Check Ranking
Nhiều server tính rank KvK bằng **total dead troops** hoặc **power contributed**. T1 là cách rẻ nhất để spike power nhanh trước deadline check.

1.000 T1 = 120.000 power, cost 390.000 RSS. 1.000 T5 = 2.800.000 power nhưng cost 7.050.000 RSS. Nếu mục tiêu là **hit power milestone** trong ranking, T1 có ROI cao hơn.

### 2. KvK Meat Shield (Suicide T1)
Chiến thuật cổ điển: mass train T1, đẩy vào rally địch như meat shield để bảo vệ T4/T5 ở layer sau. T1 dead không cần heal → không tốn hospital. T5 casualty rate giảm đáng kể.

Math: 10.000 T1 bảo vệ 1.000 T5 = tiết kiệm ~6.300.000 RSS heal cost nếu không dùng T1.

### 3. Training Speedup Drought
Bạn hết speedup nhưng vẫn cần duy trì training queue? T1 train nhanh (0,5 phút/troop) → dùng ít speedup → queue không bị empty. T5 với speedup drought = training 1 troop/ngày.

> 📌 Xem thêm: [Speedup Stockpile Management RoK 2026](/blog/speedup-stockpile-management-rok-2026) cho strategy burn speedup hợp lý.

### 4. Đầu Game (City Hall < 22)
T5 unlock cần City Hall 22 + Building Tier 5. Trước đó, T4 là cap. Và T4 training cost rất cao so với T3. **Trước City Hall 18**: T1/T2 là economical choice vì T3/T4 unlock chưa đủ.

## Khi Nào Phải Dùng T5

### Giai Đoạn Giữ Pháo Đài / Rally
T5 trong rally captain setup là không thể thiếu. T1 trong rally = commander không đủ damage buff. T5 trong rally = damage multiplier từ commander passive apply đầy đủ.

### Late Game KvK Conquest
Khi alliance bắt đầu contest city hall của enemy kingdom, T1 không survive đủ để tạo pressure. T5 + healing cycle = sustained damage source.

### Defense Against Nuke Account
Nếu enemy có 50M+ power nuker, T1 flat trong 1 march. T5 + proper commander pair = absorb hit tốt hơn.

## Bot V2 Training Schedule — T1/T5 Auto-mix

Đây là nơi manual không cạnh tranh được với bot. Gói **V2 Cao Cấp 900.000đ/tháng** có:

- **Dynamic training queue** — tự quyết định train T1 hay T5 dựa trên RSS stockpile, speedup count, và KvK phase
- **Pre-KvK T1 spike** — 2 tuần trước KvK, bot auto switch sang mass T1 để hit power milestone
- **Post-battle T1 refill** — sau khi T5 chết trong rally, bot refill T1 để duy trì army size
- **Hospital-aware** — nếu hospital full, bot ưu tiên heal T5 trước, train T1 vào queue cuối

Không cần manually track "giờ này nên train T1 hay T5". Bot tự quyết dựa trên state thực tế của account.

> 🤖 V2 auto-mix T1/T5 training dựa trên KvK phase và RSS stockpile. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## RSS Efficiency Calculator (Simplified)

Trước khi quyết định train gì, tự tính:

1. **RSS hiện có**: ___ M
2. **Speedup hiện có**: ___ ngày
3. **KvK còn**: ___ ngày
4. **Hospital capacity**: ___ beds

Nếu (RSS < 5M) + (KvK < 7 ngày): **mass T1 cho meat shield**
Nếu (RSS > 20M) + (Speedup > 15 ngày) + (Hospital full): **T5 training queue**
Nếu (sau KvK, rebuild phase): **T5 sustained training với bot queue**

## Sai Lầm Phổ Biến Nhất

**"Luôn train T5 vì T5 mạnh hơn"** — đúng về combat, sai về resource management. Player train T5 liên tục trong peace time mà không có farming bot tương đương → RSS cạn → queue stop → lãng phí training slots.

**"T1 là vô dụng"** — sai hoàn toàn với ai biết dùng meat shield và power spike mechanic.

## Đọc Thêm

- [Farm 1.000.000 RSS/Giờ Setup RoK 2026](/blog/farm-1000-rss-per-hour-setup-rok-2026)
- [Best Troop Types KvK RoK 2026](/blog/best-troop-types-kvk-rok-2026)
- [F2P → VIP 5 Roadmap RoK 2026](/blog/f2p-to-vip-5-roadmap-rok-2026)
- [Farm Fatigue & Quit Rate — Bot Solution RoK](/blog/farm-fatigue-quit-rate-bots-solution-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)
  `,
};
