import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "anti-zeroing-strategy-rok-2026",
  title: "Anti-Zeroing Strategy RoK 2026 — Tránh Bị Player Mạnh Zero City",
  description: "Anti-zeroing strategy RoK 2026: cách tránh bị zero city trong KvK, shield timing, troop management khi bị target, và V2/V3 bot features protect city 24/7.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Bị Zero Là Gì Và Tại Sao Nó Kinh Khủng Đến Vậy?

"Zero" trong RoK = tất cả troops của mày trong city bị giết hoàn toàn. Không phải wounded — **dead**. Không heal lại được. Phải train từ đầu.

Một lần zero T4 army 500.000 troops = mất **~400.000.000 resource** worth of troops. Với T5 = nhiều hơn nữa.

Trong KvK, zeroing là vũ khí tâm lý mạnh nhất: loại một governor khỏi chiến trường cả ngày, phá morale, và cướp sạch resource vượt warehouse.

Bài này là playbook tránh bị zero — từ prevention đến survive khi đang bị target.

## Tại Sao Players Bị Zero?

3 nguyên nhân phổ biến nhất:

### 1. Hospital Overflow

Đây là nguyên nhân số 1 bị zero mà players không để ý. Khi hospital đầy, troops thêm vào queue wounded **bị chuyển thành dead** thay vì heal. Địch liên tục rally → hospital overflow → lần rally sau troops chết permanent.

**Hospital capacity** phải lớn hơn **total march size** để tránh overflow.

### 2. Không Có Peace Shield Đúng Lúc

Shield hết lúc 3am. Địch có bot 24/7 hoặc member múi giờ khác. Rally ngay lúc shield down. Mày đang ngủ.

### 3. March Không Về City Kịp

Mày đang gather tile, march 200.000 troops ngoài field. Địch zeroes city troops, sau đó intercept march về = mất thêm 200.000 troops ngoài field.

> 🤖 V2/V3 bot monitor hospital + recall march tự động khi city HP ngưỡng nguy hiểm. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## 5 Lớp Phòng Thủ Chống Zero

### Lớp 1: Peace Shield Timing

Shield là lớp phòng thủ đơn giản nhất nhưng cần timing đúng:

- **8 giờ shield**: dùng khi cần offline ngắn (ngủ trưa, họp)
- **24 giờ shield**: dùng khi offline dài hoặc bị target bởi enemy mạnh hơn
- **3 ngày shield**: dùng sau khi bị zero (recover time)

**KvK timing**: KvK Phase 1 không có PvP → không cần shield (tiết kiệm gem). KvK Phase 2-3 → shield khi offline là bắt buộc nếu power gap bất lợi.

Shield cost: 8h = 100 gem, 24h = 200 gem, 3 ngày = 500 gem.

### Lớp 2: Hospital Capacity ≥ March Size

| March Size | Hospital Capacity Cần |
|---|---|
| 100.000 troops | Hospital tổng ≥ 120.000 |
| 200.000 troops | Hospital tổng ≥ 240.000 |
| 500.000 troops (V3) | Hospital tổng ≥ 600.000 |

Nếu hospital capacity thấp hơn march size → bị rally 2-3 lần = overflow → zero guaranteed.

**Fix**: upgrade hospital hoặc giảm march size. V1 bot auto-trigger heal nhanh nhất có thể để clear hospital slot trước overflow.

Xem thêm: [Wall Lv25 Health Math RoK 2026](/blog/wall-lv25-health-math-rok-2026)

### Lớp 3: Troops Trong City Tối Thiểu Khi Đang Bị Target

Counterintuitive nhưng đúng: khi đang bị target bởi enemy mạnh hơn, **giữ ít troops trong city**.

Logic: ít troops = địch rally không có gì kill = tốn AP địch mà không kill được gì. Địch sẽ chuyển target.

**Exception**: nếu mày có garrison mạnh đủ tank nhiều rally + alliance reinforce → giữ nhiều để absorb.

Nếu không đủ garrison + không có reinforce → recall march, để city trống, shield up.

### Lớp 4: Recall March Trước Khi Bị Hit

Watchtower lv25 cho 90 giây warning. Trong 90 giây đó:
1. Shield up (2-3 giây) — chặn rally ngay
2. Hoặc recall march về city (nếu gần, <60 giây march time)

Bot V3 auto-recall march khi detect incoming rally (feature V3 advanced): march tự về city trong vòng 30 giây sau khi bot detect, shield request alert gửi tới player.

Xem thêm: [Watchtower Lv25 Priority RoK 2026](/blog/watchtower-lv25-priority-rok-2026)

### Lớp 5: Resource Xuống Dưới Warehouse Cap

Bị zero = mất troops + mất resource. Nếu resource đã dưới cap trước khi bị hit:
- Troops chết (không tránh được nếu bị zero)
- Nhưng resource mất = 0 (warehouse protected)

Giảm thiệt hại 50% bằng cách luôn giữ resource dưới cap.

Xem thêm: [Storage Cap Protection RoK 2026](/blog/storage-cap-protection-rok-2026)

## Khi Đang Bị Target Bởi Enemy Mạnh Hơn

Tình huống: enemy power 2x mày, đang "camping" gần city mày, liên tục rally.

**Checklist khi bị target**:

1. Shield up ngay (ưu tiên 24h)
2. Message R5 alliance nhờ relocate (R5 dùng gem để move mày ra xa)
3. Nếu không move được → stay shield toàn bộ thời gian bị target
4. Đừng attack back (waste shield window)
5. Dùng bot auto-spend resource xuống 0 excess trước khi shield down

**Bao lâu địch camping?** Thường 1-2 ngày. Địch mất AP nếu mày shield, họ chuyển sang target khác.

## Anti-Zero Với Bot: V2 vs V3 Difference

| Feature | V2 | V3 |
|---|---|---|
| Hospital auto-heal | Nhanh | Nhanh hơn + priority sort |
| March recall on threat | Không | Có (auto-detect) |
| Resource auto-consume | Cơ bản | Advanced threshold |
| 24/7 monitoring | Có | Có + alert mobile |

**V2**: đủ cho mid-tier player không bị target heavy.
**V3**: cần cho players power 30M+ thường xuyên bị enemy target trong KvK.

> 🤖 V3 auto-recall march + alert mobile khi bị target. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Sau Khi Bị Zero: Recovery Plan

Bị zero rồi thì sao? Recovery order:

1. **Ngay lập tức**: shield 3 ngày, không combat
2. **Ngày 1**: heal tất cả wounded (ưu tiên T4-T5)
3. **Ngày 2-3**: train lại troops (T3 fill trước để có số, T4-T5 sau)
4. **Tuần 1**: farm resource + speedup để restore army
5. **Sau KvK**: reassess hospital capacity, upgrade nếu cần

Bot V1 accelerate recovery: auto-train liên tục 24/7, hospital heal cycle tối ưu. Recovery thực tế rút ngắn từ 2 tuần → 5-7 ngày với bot.

## FAQ

### Peace shield có block scout không?

Không. Scout vẫn thấy city có shield. Nhưng shield block rally và attack.

### Bị zero có mất commander không?

Không. Commander không thể bị killed — chỉ captured trong duel mode (Sunset Canyon). City zero không ảnh hưởng commander.

### Có cần shield khi không có KvK không?

Thấp — server mới không có PvP. Server cũ (season 5+) có players max power săn city giàu resource. Nếu server cũ + resource vượt cap nhiều → shield worth.

Đọc kèm:
- [Wall Lv25 Health Math RoK 2026](/blog/wall-lv25-health-math-rok-2026)
- [Storage Cap Protection RoK 2026](/blog/storage-cap-protection-rok-2026)
- [Rally Attack vs Defense KvK RoK 2026](/blog/rally-attack-vs-defense-kvk-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · **V3 1,2M** · Premium VIP 3M)
  `,
};
