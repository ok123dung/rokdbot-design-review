import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "resource-calculator-rok-2026",
  title: "Resource Calculator RoK 2026 — Tính RSS Cần Cho CH/Research/Train (Math)",
  description: "Tính chính xác RSS cần cho City Hall upgrade, research priority tree, và training T4/T5. Công thức thực tế từ game data 2026 — biết mình cần bao nhiêu trước khi farm, không waste AP gather sai loại RSS.",
  date: "2026-05-11",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Farm RSS không có kế hoạch = waste AP không có điểm dừng

Đây là vòng lặp phổ biến nhất của player RoK trung bình:

Farm food → hết wood → build stuck → farm wood → hết stone → research stuck → farm stone → hết food → training stuck.

Không phải vì họ không farm đủ. Mà vì họ farm sai tỷ lệ. Và khi không biết cần bao nhiêu tổng — không bao giờ có thể farm đúng.

Bài này đưa ra con số thực tế. Tính trước, farm đúng.

## City Hall Upgrade RSS Cost

City Hall là gate của mọi thứ — unlock troop tier, march slot, building level. Cost tăng theo cấp số nhân:

**CH 20 → 21:**
- Food: 12M
- Wood: 8M
- Stone: 6M
- Gold: 3M
- Speedup khuyến nghị: 12-15 ngày

**CH 22 → 23:**
- Food: 45M
- Wood: 30M
- Stone: 22M
- Gold: 11M
- Speedup khuyến nghị: 25-30 ngày

**CH 24 → 25 (T5 unlock):**
- Food: 180M
- Wood: 120M
- Stone: 90M
- Gold: 45M
- Speedup khuyến nghị: 60-75 ngày

**Buffer rule:** Tích trữ 120% của cost trên trước khi bắt đầu upgrade CH — 20% buffer cho research song song trong thời gian upgrade.

> 🤖 V1 RokdBot gather tự động theo RSS priority — thiếu gì gather cái đó. [Xem V1 Basic →](/#packages) · 750.000đ/tháng.

## Research Tree RSS Consumption

Research ngốn RSS khác với building. Ưu tiên:

**Military Tree (KvK priority):**
- March Speed T4: Food 25M + Wood 15M + Stone 10M
- Attack T4 (total tree): Food 200M + Wood 130M + Stone 100M + Gold 50M
- Defense T4: Food 150M + Wood 100M + Stone 80M + Gold 40M

**Economic Tree (gather efficiency):**
- Gathering Speed: Food 8M + Wood 5M
- Load Capacity: Food 12M + Wood 8M + Stone 6M
- RSS Protection: Food 5M + Wood 3M

**Thứ tự ưu tiên research 2026:**
1. March capacity (unlock slots)
2. Military attack (trực tiếp tăng damage)
3. Troop training speed (rút ngắn T4/T5 queue)
4. Economic tree (sau khi military xong)
5. Science tree (low priority cho F2P)

## Training RSS Cost — T4 và T5

### T4 Training (1.000 quân)

| Loại | Food | Wood | Stone | Gold |
|---|---|---|---|---|
| Infantry | 8M | 5M | 4M | 2M |
| Cavalry | 10M | 7M | 5M | 2,5M |
| Archer | 9M | 6M | 4,5M | 2,2M |

### T5 Training (1.000 quân)

| Loại | Food | Wood | Stone | Gold |
|---|---|---|---|---|
| Infantry | 35M | 22M | 18M | 9M |
| Cavalry | 42M | 28M | 22M | 11M |
| Archer | 38M | 25M | 20M | 10M |

**Target cho KvK entry (minimum viable army):**
- T4 Infantry 300k: Food 2,4B / Wood 1,5B / Stone 1,2B / Gold 600M
- T4 Cavalry 150k: Food 1,5B / Wood 1,05B / Stone 750M / Gold 375M
- T4 Archer 200k: Food 1,8B / Wood 1,2B / Stone 900M / Gold 440M

**Total KvK entry army:** ~5,7B Food / ~3,75B Wood / ~2,85B Stone / ~1,4B Gold

## Gather Rate thực tế — mất bao lâu để đủ?

Với 5 march gather L5 tiles (không bot):
- Food: ~15M/giờ (nếu tile L5 food gần city)
- Wood: ~10M/giờ
- Stone: ~8M/giờ
- Gold: ~4M/giờ (tile vàng hiếm hơn)

Để farm đủ RSS cho T4 army 650k trops ở trên:
- Food 5,7B ÷ 15M/h = **380 tiếng**
- Wood 3,75B ÷ 10M/h = **375 tiếng**
- Stone 2,85B ÷ 8M/h = **356 tiếng**

Nếu ngủ 8h/ngày, còn 16h gather → mất **23-24 ngày thuần gather** — không tính research, build, barb.

Với bot 24/7: cùng 5 march nhưng 24h/ngày → thời gian gather giảm còn **15-16 ngày**.

## Gather Priority Queue

Thứ tự farm RSS theo phase account:

**Early game (CH <20):**
- Priority: Food > Wood > Stone > Gold
- Lý do: Training và building chủy yếu dùng food/wood

**Mid game (CH 20-23):**
- Priority: Stone ≈ Wood > Food > Gold
- Lý do: Research military tree stone-heavy, building L20+ cần nhiều stone

**Pre-KvK (CH 23+):**
- Priority: Food >>> tất cả
- Lý do: Training T4/T5 mass cần food khổng lồ

## FAQ

### RSS trong Alliance gift và event có tính vào không?
Có — cộng thêm vào buffer. Alliance gift thường cho 5-10M/loại mỗi event. Factor thêm 20-30% nếu alliance active.

### Bot có tự chuyển priority gather theo phase không?
V1 trở lên có priority profile — mày set "pre-KvK mode" thì bot tự ưu tiên food tiles. Không cần config lại thủ công mỗi phase.

### Tôi có thể dùng calculator này cho server mới không?
Có. Số liệu trên là base game data, không phụ thuộc server. Chỉ cần adjust nếu alliance có research buff gathering (tăng ~10-15% rate).

## Bắt đầu ngay

**V1 Basic 750.000đ/tháng** — gather theo priority queue tự động:
- 5 march gather L5 tiles 24/7
- Priority switch theo phase (early/mid/pre-KvK)
- Auto-train khi RSS đủ threshold

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [F2P to VIP2 Bot Progression Roadmap RoK 2026](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
- [KvK Season Prep Bot Checklist RoK 2026](/blog/kvk-season-prep-bot-checklist-rok-2026)
- [Account Selling Buying Guide RoK 2026](/blog/account-selling-buying-guide-rok-2026)
  `,
};
