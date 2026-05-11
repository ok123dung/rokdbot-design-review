import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "t5-unlock-requirements-rok-2026",
  title: "T5 Unlock Requirements RoK 2026 — City Hall 25 + Research + Speedup Math",
  description: "T5 unlock requirements Rise of Kingdoms 2026: City Hall 25 prerequisites, research tree path, RSS cost ước tính, và speedup math để biết bao lâu đến T5 với/không có bot. Không có shortcut nào ngoại trừ tốc độ.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## T5 — Mốc Tách Biệt Casual và Serious Player

Mở khóa T5 troop là **mốc quan trọng nhất** trong Rise of Kingdoms. Không phải vì T5 mạnh hơn T4 chút ít — mà vì T5 là **yêu cầu bắt buộc** để competitive trong KvK high-tier.

T4 vs T5 trong battle: **T4 đấu T5 cùng số lượng = T4 thua 30-40% theo death rate**. Nghĩa là army 1M T4 vs army 1M T5 không phải 50/50 — đó là 60/40 nghiêng về T5.

Vậy T5 cần gì? Câu trả lời dài hơn hầu hết guide nói.

## Prerequisite Tổng Quan

Để unlock T5 troop, bạn cần ĐẦY ĐỦ TẤT CẢ:

1. **City Hall 25** — building requirement cứng
2. **Academy Research** — Military tech tree đến T5 node
3. **Specific research nodes** — không phải chỉ tree level, mà đúng node

Thiếu bất kỳ một trong ba = không unlock được dù hai cái kia done.

## City Hall 25 — Building Chain Prerequisites

Đây là cái đau nhất. City Hall không upgrade thẳng — mỗi level City Hall yêu cầu **các building khác phải đạt level cụ thể trước**:

| CH Level | Key Prerequisites |
|---|---|
| CH 20 | Farm/Lumber/Quarry/Gold Mine lv 20 + Hospital/Barracks/Range/Stable lv 20 |
| CH 22 | Wall lv 21 + Academy lv 21 + all resource buildings lv 21 |
| CH 24 | Siege Workshop lv 23 + Hospital lv 23 + Barracks lv 23 |
| **CH 25** | **All military buildings lv 24 + Wall lv 24 + Academy lv 24** |

Mỗi building từ lv 20 lên 25 mất **7-14 ngày buildtime** (không speedup). Với 15+ buildings cần max = **tổng 6-9 tháng buildtime raw** nếu không có speedup đáng kể.

> 📌 Xem thêm: [Speedup Stockpile Management RoK 2026](/blog/speedup-stockpile-management-rok-2026) để biết cần tích bao nhiêu speedup cho CH 25 rush.

## Academy Research Path Đến T5

Military tree trong Academy có nhiều node, nhưng path đến T5 là:

**Tier 4 Military (prerequisite)** → **Advanced Military Tech** → **T5 Troops (all 3 types: Infantry/Cavalry/Archer)**

Unlock T5 Infantry, Cavalry, Archer **riêng biệt** — bạn có thể có T5 Cavalry nhưng vẫn T4 Infantry. Mỗi T5 type cần research node riêng.

Research cost ước tính từ Advanced Military đến T5 full:

| Research | Time (raw) | RSS Cost |
|---|---|---|
| Advanced Military Tech | ~30 ngày | ~500M tổng |
| T5 Infantry | ~45 ngày | ~800M |
| T5 Cavalry | ~45 ngày | ~800M |
| T5 Archer | ~45 ngày | ~800M |

**Tổng: ~165 ngày raw research time** — không speedup. Với speedup 30-day chest × 5: có thể rút xuống 105-120 ngày.

## RSS Cost Tổng Quan (Ước Tính)

Đây là con số đau nhất khi nhìn từ F2P perspective:

| Category | RSS Estimate |
|---|---|
| Building CH 16→25 | 3-5 tỷ food + 2-4 tỷ wood + 1-2 tỷ stone |
| Research T4→T5 full | 2-3 tỷ food + 1.5-2 tỷ wood + 500M gold |
| **Total** | **5-8 tỷ food · 3-6 tỷ wood · 1.5-3 tỷ stone · 500M-1tỷ gold** |

Farm 5 tỷ food với tile Lv 5, 4 march, 24/7 = **~83 ngày** thuần gather. Đây là lý do T5 cần cả building + research + resource cùng lúc — không có shortcut.

> 📌 Xem thêm: [Farm 1.000.000 RSS/Giờ Setup RoK 2026](/blog/farm-1000-rss-per-hour-setup-rok-2026) để tối ưu throughput.

## Speedup Math — Bao Lâu Đến T5?

| Player Type | Estimated Time to T5 |
|---|---|
| F2P manual, 6h/ngày active | **18-24 tháng** |
| F2P với bot V1-V2 (RSS + build optimize) | **10-14 tháng** |
| Moderate spender + bot | **7-10 tháng** |
| Heavy whale | **4-6 tháng** |

Bot không magic — nó accelerate bằng cách loại bỏ **idle time và inefficiency**. 18 tháng vs 10 tháng là difference của 8 tháng × opportunity cost trong KvK.

## Troop Training Cost Sau Khi Unlock T5

Unlock T5 chỉ là bước 1. Training T5 tốn resource nhiều hơn T4 đáng kể:

| Metric | T4 Troop | T5 Troop |
|---|---|---|
| Food / troop | ~5.000 | ~12.000 |
| Wood / troop | ~3.000 | ~8.000 |
| Training time / troop | ~30s (speed upgraded) | ~60s |

Train 1M T5 troops = **12 tỷ food + 8 tỷ wood**. Đây là lý do RSS farming không dừng sau T5 unlock — nó tăng tốc.

> 📌 Xem thêm: [Troop Training T1 vs T5 Efficiency RoK 2026](/blog/troop-training-t1-vs-t5-efficiency-rok-2026) cho T5 training optimization.

> 🤖 Bot V2 auto-build + auto-research + RSS 24/7 — rút T5 timeline từ 24 tháng xuống 10-14 tháng. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## FAQ

### Có thể unlock T5 của chỉ 1 troop type không?

Có. T5 Cavalry, Infantry, Archer unlock riêng biệt. Nhiều player unlock T5 Cavalry trước (nếu cavalry commander) rồi mới unlock loại khác.

### City Hall 25 mà không có speedup mất bao lâu?

CH 24 → 25: khoảng **30-35 ngày raw**. Nhưng trước đó cần tất cả prerequisites lên 24 — đó mới là bottleneck thực sự (6-9 tháng tổng).

### Bot có tự upgrade building đúng order không?

Bot V2 có build queue optimizer — tự tính order tối ưu để mở unlock next CH level nhanh nhất, không cần manually config thứ tự.

## Bắt Đầu

T5 không phải đích đến trong 1-2 tháng. Đó là **chiến lược 10-24 tháng** tùy cách chơi. Bot không skip bước — nó thực hiện mỗi bước nhanh nhất có thể.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Troop Training T1 vs T5 Efficiency RoK 2026](/blog/troop-training-t1-vs-t5-efficiency-rok-2026)
- [Best Troop Types KvK RoK 2026](/blog/best-troop-types-kvk-rok-2026)
- [Speedup Stockpile Management RoK 2026](/blog/speedup-stockpile-management-rok-2026)
- [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026)
  `,
};
