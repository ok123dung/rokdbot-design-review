import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "hospital-cap-power-vs-rss-tradeoff-rok-2026",
  title: "Hospital Cap Power vs RSS Tradeoff RoK 2026 — Optimal Cap Math",
  description: "Hospital cap power vs RSS tradeoff RoK 2026: bao nhiêu hospital là đủ, tradeoff giữa heal capacity và food sink, tại sao over-cap hospital là sai lầm phổ biến, và optimal cap math cho mid/late game.",
  date: "2026-05-10",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Hospital Trap — Xây Quá Nhiều Cũng Sai, Quá Ít Cũng Sai

Bạn thấy thành viên top power trong alliance có 8 hospital lv 25. Bạn nghĩ: "Vậy mình cũng cần nhiều hospital."

Sai.

Hospital không phải "nhiều = tốt". Hospital là **balance equation** giữa heal capacity và food cost. Xây quá nhiều: waste building slot, power bloat không có combat value, food burn rate quá cao. Xây quá ít: troops die thay vì wound → permanent power loss sau KvK.

Đây là math ít người làm trước khi xây.

## Hospital Mechanics — 3 Điều Cần Hiểu

### 1. Hospital Cap = Tổng Bed Capacity

Mỗi hospital lv 25 có ~10.000-12.000 beds. 4 hospital lv 25 = ~40.000-48.000 beds. Troops vượt quá bed count **die thay vì wounded** khi thua battle.

### 2. Wound Rate Depends On Loss Ratio

Khi thua battle, game calculate: 80% của troops "lost" → wounded (vào hospital), 20% → dead (permanent). Nếu hospital full: overflow wounded troops convert thành dead.

Ví dụ: bị đánh mất 100.000 troops. Hospital còn 30.000 beds trống → 80% × 100.000 = 80.000 wounded cần beds, nhưng chỉ còn 30.000 chỗ → **50.000 troops die thay vì wound**.

### 3. Heal Cost = Food

Heal 10.000 T4 troops ≈ **500.000-800.000 food** tùy tier. Heal 100.000 T4 = 5-8M food. Với hospital cap 200.000 và full heal sau KvK: **10-16M food** mỗi heal cycle.

> 📌 Xem thêm: [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026) cho heal cycle detail và food pre-calculation.

## Power vs Hospital Capacity — The Real Tradeoff

Building slot trong city là fixed. Mỗi hospital thêm = 1 building khác không build được (training buildings, archer range, siege workshop...).

| Building Slot Choice | Impact |
|---|---|
| Hospital (thêm 1 lv 25) | +10.000 beds, +food drain |
| Extra Barracks lv 25 | +5-10% infantry training speed |
| Extra Range lv 25 | +5-10% archer training speed |
| Extra Stable lv 25 | +5-10% cavalry training speed |

Nếu bạn đã có đủ beds để absorb worst-case battle loss: hospital thêm = **wasted slot**. Thêm training building thay vì hospital → troops recover nhanh hơn sau KvK vì train được nhiều hơn.

## Optimal Cap Calculation — Framework

Bước 1: **Xác định worst-case battle loss** của bạn. Với power hiện tại và KvK tier, bao nhiêu troops tối đa bạn có thể lose trong 1 giờ? Ước tính: 20-30% total troops của 1 march.

Bước 2: **Tính bed requirement**. 80% của worst-case loss = beds cần. Ví dụ: march 500.000 T4, lose 30% = 150.000, 80% wound = 120.000 beds.

Bước 3: **Buffer 20%**. Hospital cap nên là 120% của bed requirement = 144.000 beds = khoảng 12-14 hospital lv 25.

Bước 4: **Compare với building slots**. Nếu bạn có 25 building slots và 12 hospital + 13 các loại khác → fine. Nếu 12 hospital chiếm 50% slots → quá nhiều, giảm xuống 8-10.

| Power Range | Recommended Hospital Count |
|---|---|
| 5M-15M | 4-6 hospital lv 20+ |
| 15M-40M | 6-8 hospital lv 22+ |
| 40M-80M | 8-10 hospital lv 24+ |
| 80M+ | 10-12 hospital lv 25 |

## Food Budget — Over-Cap Hospital Là Gánh Nặng

8 hospital lv 25 với heal cycle sau KvK (full beds × 2 heal cycles):

- Heal 80.000 beds × 2 = 160.000 troops
- 160.000 T4 × 700.000 food/10.000 = **11.2M food** mỗi KvK battle set

Nếu KvK có 5-7 battle sets per season: **55-80M food** chỉ cho healing. Farm đủ food trong KvK active là bottleneck thực sự — không phải bed count.

Over-cap hospital không giúp bạn win battle. Nó chỉ tăng **food bill** mà không có combat return.

> 📌 Xem thêm: [Food vs Wood Priority RoK 2026](/blog/food-vs-wood-priority-rok-2026) để balance food allocation giữa heal và training.

> 🤖 Bot V2 monitor hospital cap real-time, auto-heal khi beds available, auto-farm food theo heal demand. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## FAQ

### Có thể downgrade hospital để lấy lại slot không?

Không. Building không thể downgrade trong RoK. Quyết định xây hospital là **permanent** → tính toán trước khi build.

### Power từ hospital có ảnh hưởng matching không?

Power matching trong KvK không strict dựa trên building power — nó dựa trên nhiều factor. Nhưng hospital power inflates total power → có thể bị match với opponent mạnh hơn thực tế combat capability.

### Nên heal troops ngay sau battle hay đợi?

Heal ngay — troops trong hospital không combat được, nhưng heal cost không thay đổi theo thời gian. Đợi lâu chỉ giảm combat readiness.

## Bắt Đầu

Hospital cap không phải "càng nhiều càng tốt." Đó là **engineering tradeoff** giữa heal protection và resource efficiency. Tính đúng trước khi build — building slot không hoàn.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026)
- [Troop Training T1 vs T5 Efficiency RoK 2026](/blog/troop-training-t1-vs-t5-efficiency-rok-2026)
- [Food vs Wood Priority RoK 2026](/blog/food-vs-wood-priority-rok-2026)
- [Speedup Stockpile Management RoK 2026](/blog/speedup-stockpile-management-rok-2026)
  `,
};
