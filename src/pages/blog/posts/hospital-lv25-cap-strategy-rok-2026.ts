import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "hospital-lv25-cap-strategy-rok-2026",
  title: "Hospital Lv 25 Cap Strategy RoK 2026 — Heal Cap vs RSS Tradeoff Math",
  description: "Bao nhiêu hospital lv 25 là đúng? Heal cap vs food cost math thực tế, khi nào xây thêm là lãng phí slot, và V2 bot tự monitor real-time để không bao giờ over-heal hay under-protect.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Hospital Lv 25 — Không Phải "Nhiều Càng Tốt"

Mày vừa lên City Hall 25. Unlock hospital lv 25. Phản xạ đầu tiên: xây thêm hospital để heal nhanh hơn.

Sai hoàn toàn.

Hospital lv 25 là **balance equation** — không phải trophy. Xây sai số lượng, mày vừa phí building slot vừa đốt food không có combat return. Phép toán dưới đây cho mày con số đúng trước khi tap "Build".

## Cơ Chế Hospital Lv 25 — 3 Điểm Cốt Lõi

### Bed Capacity Tăng Mạnh Lv 25

Hospital lv 25 có ~12.000-14.000 beds — tăng ~40% so với lv 22 (~8.500 beds). Nghĩa là 1 hospital lv 25 thay thế được ~1,5 hospital lv 22 về capacity.

Nếu mày đang chạy 8 hospital lv 22 = ~68.000 beds. Upgrade 6 cái lên lv 25 = ~84.000 beds với 6 hospital thay vì 8 — **2 slot freed**.

### Wound Rate — 80/20 Rule Vẫn Đúng

Khi thua battle: 80% troops lost → wounded (vào hospital), 20% → dead. Nhưng nếu hospital full, overflow wounded chuyển thành dead. Formula:

> Dead thêm = (Wounded overflow) × 100%

Ví dụ: 150.000 T4 bị mất. 80% = 120.000 cần beds. Mày có 90.000 beds → **30.000 troops dead vĩnh viễn** thay vì heal được.

### Heal Cost Scale Với Tier

| Troop Tier | Food / 10.000 troops |
|---|---|
| T4 | ~600.000-800.000 |
| T5 | ~1.200.000-1.500.000 |

Full heal 100.000 T4 = **6-8M food**. 100.000 T5 = **12-15M food**. Over-cap hospital = heal nhiều hơn mức cần thiết = food drain vô nghĩa.

> 📌 Xem thêm: [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026) cho heal cycle và food pre-calculation.

## Heal Cap Math Theo Power Level

Công thức tính số hospital cần:

1. **Worst-case march size** = tổng troops mày mang vào 1 battle lớn nhất
2. **Expected loss** = 25-35% march (KvK battle trung bình)
3. **Bed requirement** = 80% × expected loss × 1.2 (buffer)
4. **Hospital count** = bed requirement ÷ 13.000 (beds / hospital lv 25)

| Power | March Size | Expected Loss | Beds Needed | Hospital Count |
|---|---|---|---|---|
| 10-20M | 200.000 | 50.000 | 48.000 | 3-4 |
| 20-50M | 400.000 | 110.000 | 106.000 | 8-9 |
| 50-100M | 700.000 | 200.000 | 192.000 | 14-15 |
| 100M+ | 1.000.000+ | 300.000 | 288.000 | 22+ |

> 📌 Xem thêm: [City Hall Levels 16/21/25 Guide RoK 2026](/blog/city-hall-levels-16-21-25-guide-rok-2026) để biết building slot total theo CH level.

## Tradeoff Thật Sự — Slot Vs. Bed

City Hall 25 có **25 building slots**. Mỗi hospital thêm = 1 training building bị sacrifice.

| Thay Hospital Bằng | Gain Thực Tế |
|---|---|
| Barracks lv 25 | +8% infantry training speed |
| Stable lv 25 | +8% cavalry training speed |
| Range lv 25 | +8% archer training speed |
| Siege Workshop lv 25 | +10% siege training |

8 hospital lv 25 + 17 others = sweet spot cho power 50-100M. **Xây hospital thứ 9 khi mày đã có đủ beds** = mất 1 training slot mà không có combat benefit.

> 📌 Xem thêm: [Academy Research Priority RoK 2026](/blog/academy-research-priority-rok-2026) — research Military tree trước khi lock building slot vào hospital.

## Food Budget KvK — Tính Trước Không Thiếu Giữa Chừng

KvK thường có 5-7 battle cycles nặng. Mỗi cycle full heal:

- 8 hospital lv 25 = ~104.000 beds → 2 heal cycles = heal ~208.000 T4 = **~125-165M food / KvK**
- 12 hospital lv 25 = ~156.000 beds → 2 heal cycles = **~190-250M food / KvK**

Mày farm được 125M food trong KvK? Nếu không, over-cap hospital = mày sẽ không đủ food heal hết beds → hospitals vẫn full → troops chết vô ích.

> 📌 Xem thêm: [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026) cho food farming sync với heal demand.

> 🤖 Bot V2 monitor hospital cap real-time: tự heal khi beds available, tự farm food theo heal demand, không để beds sit empty hay overflow. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## FAQ

### Hospital có thể downgrade để lấy lại slot không?

Không. Building trong RoK không downgrade được — quyết định **vĩnh viễn**. Đây là lý do phải tính trước, không build theo cảm tính.

### Nếu đang KvK mà hospital đầy, làm gì?

Speedup heal ngay lập tức — dùng healing speedup, không phải general speedup. Heal nhanh = beds trống = troops tiếp theo vào được thay vì die. Nếu không có speedup: thà thua battle nhỏ hơn là nhét quân vào trận khi beds đầy.

### Hospital lv 25 có cần prerequisite gì không?

City Hall 25 là hard requirement. Ngoài ra: Academy lv 24+, Wall lv 24 — cùng prerequisites của CH 25 chứ không thêm gì riêng.

## Bắt Đầu

Tính số hospital đúng trước khi xây. Công thức: (march size × 0.35 × 0.8 × 1.2) ÷ 13.000 = số hospital cần. Không nhiều hơn, không ít hơn.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026)
- [City Hall 25 Speedrun RoK 2026](/blog/city-hall-25-speedrun-rok-2026)
- [T5 Unlock Requirements RoK 2026](/blog/t5-unlock-requirements-rok-2026)
  `,
};
