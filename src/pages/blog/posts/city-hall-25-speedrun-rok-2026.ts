import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "city-hall-25-speedrun-rok-2026",
  title: "City Hall 25 Speedrun RoK 2026 — 14 Ngày Thay Vì 126 Ngày (Speedup Math + Bot)",
  description: "Tính toán chính xác speedup cần thiết để đạt City Hall 25 trong 14 ngày. Bot V1 auto-build 24/7 rút ngắn timeline 9x so với manual free-to-play.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Người chơi mới mất 126 ngày lên CH25 — người dùng bot mất 14 ngày. Đây là math

City Hall 25 là milestone quan trọng nhất RoK: unlock max troop tier, max march size, và cho phép tham chiến KvK với full power. Không có CH25 = mày chỉ là cannon fodder trong KvK dù commander S+ đến đâu.

Speedup calculation của Lilith:
- CH 20 → 21: 5 ngày build time
- CH 21 → 22: 8 ngày build time
- CH 22 → 23: 12 ngày build time
- CH 23 → 24: 18 ngày build time
- CH 24 → 25: 25 ngày build time

**Tổng: 68 ngày** chỉ riêng CH build, **không tính prerequisite buildings**. Với prerequisite (Academy, Barracks, Hospital, Hospital, Wall) → thực tế **126 ngày** cho account không có speedup.

## Speedup math: Cần bao nhiêu để 14 ngày?

126 ngày build time cần rút về 14 ngày = cần **112 ngày = 2.688 giờ** speedup.

Nguồn speedup chính:
- Daily quest reward: ~2 giờ/ngày × 14 ngày = 28 giờ
- KvK kill points reward: ~24 giờ per milestone × 3 milestones = 72 giờ
- Barbarian fortress level 25+ drop: ~1-2 giờ/ngày nếu farm đều
- Special event chest: không guaranteed

**Tổng có thể farm trong 14 ngày**: 28 + 72 + (14 × 1.5h barb) = **121 giờ**

121 giờ tự nhiên so với 2.688 giờ cần → **deficit 2.567 giờ**. Không speedrun được nếu không có:
1. Tích lũy speedup từ trước (1-3 tháng chơi)
2. Mua bundle speedup (tốn tiền thật)
3. **Bot farm speedup item 24/7 từ barb chain**

## Bot V1 giải quyết speedup problem thế nào

Gói **V1 750.000đ/tháng** auto-build + auto-research + farm speedup liên tục:

- **Auto-build**: Queue building ngay khi slot free, không bao giờ để slot trống
- **Speedup claim**: Tự động claim daily quest reward + event reward = không miss
- **Barb farm basic**: 1 đạo barb chain → ~1-2 giờ speedup/ngày từ drop
- **Resource auto-collect**: Farm tile RSS liên tục, không bao giờ thiếu vật liệu build

| Nguồn Speedup | Manual (14 ngày) | Bot V1 (14 ngày) |
|---|---|---|
| Daily quest | 28h (nếu không miss) | 28h (guaranteed) |
| KvK milestones | 72h | 72h |
| Barb drop | 7-10h (nếu nhớ farm) | 21h (24/7) |
| Event claim | 0-5h (miss thường) | 8-10h (guaranteed) |
| **Tổng** | **107-115h** | **129-130h** |

Bot V1 cho thêm **15-25% speedup** từ việc không bao giờ bỏ lỡ farm + auto-claim.

> 🤖 V1 750k auto-build 24/7 — không bao giờ để building slot trống, tự claim mọi reward. [Xem V1 →](/#packages) · 750.000đ/tháng.

## Prerequisite buildings timeline

CH25 cần prerequisite buildings phải đủ level trước. Nhiều người không biết điều này và stuck vì thiếu prerequisite.

| Building | Level cần cho CH25 | Build Time (ước tính) |
|---|---|---|
| Academy | 25 | 15 ngày |
| Hospital × 2 | 25 | 12 ngày × 2 |
| Barracks | 25 | 10 ngày |
| Archery Range | 25 | 10 ngày |
| Stable | 25 | 10 ngày |
| Wall | 25 | 8 ngày |

**Total prerequisite**: ~77 ngày (nếu làm tuần tự). Với 2 build slots (VIP 6+) và bot V1 đặt queue 24/7: **40-45 ngày parallel**.

## 14-ngày speedrun plan thực tế

**Điều kiện tiên quyết** (trước khi bắt đầu 14 ngày sprint):
- Tích lũy ít nhất 1.500 giờ speedup (3 tháng chuẩn bị)
- Tất cả prerequisite buildings level 20+
- Resource sẵn sàng (bot V1 farm tile RSS trước)
- VIP 6+ để 2 build slots

**14-ngày sprint execution** (với bot V1):

- Ngày 1-3: Academy 21 → 25 (parallel với Hospital)
- Ngày 4-6: Hospital × 2 finish (queue đợi từ ngày 1)
- Ngày 7-9: Barracks + Stable + Range 21 → 25
- Ngày 10-12: Wall 21 → 25 + CH 21 → 23
- Ngày 13-14: CH 23 → 25 (dump remaining speedup)

> 🤖 V1 auto-queue build ngay khi slot free — không bao giờ waste 30 phút idle. 14 ngày sprint chỉ thành công nếu không có downtime. [Kích hoạt V1 →](/#packages).

## Speedup farming strategy trong tháng chuẩn bị

Trước 14-ngày sprint, cần 3 tháng tích lũy speedup với bot V1:

- **Tháng 1**: Target 400-500 giờ speedup từ barb farm + daily
- **Tháng 2**: Target thêm 400-500 giờ, bắt đầu upgrade prerequisite buildings
- **Tháng 3**: Target thêm 500-600 giờ, hoàn thành prerequisite lên level 20

Tổng 3 tháng: 1.300-1.600 giờ speedup. Cộng với KvK milestones = 1.500-1.700 giờ. Đủ cho 14-ngày sprint CH25.

## FAQ

**Q: Tôi cần VIP mấy để 2 build slots?**
VIP 6 — có thể mua bằng gem farming, bot V1 có gem mining built-in.

**Q: Bot V1 có tự apply speedup không?**
Có — auto-apply speedup khi build queue, optimize theo thứ tự priority (CH > prerequisite > other).

**Q: Nếu không có 1.500h speedup thì sao?**
Mua bundle speedup hoặc mở rộng sang V2/V3 để farm speedup nhanh hơn từ barb Combo chain.

## Đọc tiếp:
- [Academy Research Priority RoK 2026 — Economy → Military Order](/blog/academy-research-priority-rok-2026)
- [City Hall Lv 16/21/25 Milestones RoK 2026](/blog/city-hall-levels-16-21-25-guide-rok-2026)
- [Auto Build Research RoK VIP Template](/blog/auto-build-research-rok-vip-template)
  `,
};
