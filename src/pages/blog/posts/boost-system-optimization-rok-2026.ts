import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "boost-system-optimization-rok-2026",
  title: "Boost System Optimization RoK 2026 — VIP Boost + Alliance Boost + Item Stack",
  description: "Hệ thống boost RoK 2026: stack VIP Boost + Alliance Boost + Item để tối đa multiplier gather, research, train. Phân tích cơ chế stack, priority claim, và bot V1 tự động activate đúng window.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Bạn Đang Bỏ 30-50% Hiệu Quả Mỗi Ngày

Mỗi ngày bạn gather, research, train — nhưng không stack boost đúng cách. Kết quả: gather speed 100%, research 100%, train 100%. Đúng ra phải là 180-220% nếu biết dùng đúng.

Đây không phải lý thuyết. Đây là math của boost system RoK mà 90% player bỏ qua vì không ai giải thích rõ.

## Ba Lớp Boost — Cách Stack Hoạt Động

RoK có 3 nguồn boost độc lập, cộng dồn với nhau:

### Lớp 1 — VIP Boost

VIP level quyết định % bonus cố định:

| VIP Level | Gather Speed | Build Speed | Research Speed |
|---|---|---|---|
| VIP 6 | +10% | +10% | +5% |
| VIP 9 | +15% | +15% | +10% |
| VIP 12 | +20% | +20% | +15% |
| VIP 15 | +25% | +25% | +25% |

VIP boost **luôn active**, không cần claim. Nhưng nhiều player không biết VIP daily chest có Item boost bên trong — bỏ claim = mất lớp 3.

### Lớp 2 — Alliance Boost

Alliance Research trong Technology tree unlock các buff cộng đồng. Quan trọng nhất:

- **Gathering I-V**: +5% đến +25% gather speed toàn alliance
- **Construction I-V**: +5% đến +20% build speed
- **Military**: +5% đến +15% training speed

Lớp 2 chỉ active khi **bạn đang ở trong alliance có đủ tech**. Rời alliance hoặc vào alliance yếu = mất lớp này.

### Lớp 3 — Item Stack

Items từ event, chest, shop:

- **30-min gather boost** (+20-50% gather speed)
- **8h research boost** (+10-30% research speed)
- **24h training boost** (+15-25% train speed)
- **VIP boost items** (extend VIP timer hoặc tăng extra %)

**Ba lớp cộng dồn** — không phải lấy max của 3 lớp. VIP 12 (+20%) + Alliance T5 (+25%) + Item 30min (+30%) = gather speed **175%** thay vì 100%.

## Pain Point Thật Sự — Timing Window Bị Lãng Phí

Biết cơ chế là một chuyện. **Execute đúng timing** là chuyện khác.

Item boost có duration ngắn: 30 phút, 1 tiếng, 8 tiếng. Nếu activate lúc không gather — waste. Alliance boost event thường chỉ kéo dài 4-6 tiếng — bỏ 1 tiếng là mất 16-25% window.

Vấn đề thực tế với manual:

**Ngủ quên** — item boost 30 phút expire lúc 3am trong khi gather march vẫn đang chạy nhưng boost đã hết.

**Không sync** — activate item boost nhưng quên kiểm tra alliance tech đã unlock chưa (research chưa xong = không có lớp 2).

**Claim bỏ sót** — VIP daily chest chứa boost item nhưng bỏ claim qua ngày = mất vĩnh viễn.

Kết quả: player tưởng đang chạy 175% nhưng thực ra chỉ chạy 120% vì 2/3 lần boost không sync.

## Bot V1 Fix Toàn Bộ Vấn Đề Trên

Gói **V1 750.000đ/tháng** xử lý boost system tự động:

- **Auto-claim VIP daily** — không bỏ sót ngày nào, boost item vào kho đúng giờ
- **Auto-activate item boost** khi march đang active gather — chỉ dùng khi có gather đang chạy, không waste
- **Monitor alliance boost window** — detect khi alliance research complete, sync send march với boost window
- **24/7 không nghỉ** — 3am server time alliance event chạy? Bot vẫn gather trong boost window đó

> 🤖 V1 tự động claim + activate boost đúng timing, không bỏ sót window nào. [Xem V1 →](/#packages) · 750.000đ/tháng.

## Stack Tối Ưu Theo Tình Huống

### Gather Maximize

Stack tốt nhất: VIP 12+ + Alliance Gathering V + Item 30min gather boost

Kết quả: gather speed ~175%. Tile lv5 trống full tải trong 40-45 phút thay vì 90 phút.

Thực tế với bot V1: **16-18 lần send/ngày** cho 1 đạo thay vì 8-10 lần manual.

### Research Push

Stack: VIP 15 + Alliance Research V + Item 8h research boost

Với bot V1: auto-queue research tiếp ngay khi node complete, không idle queue. Item 8h research boost được dùng khi queue có node dài (5h+), không waste cho node 30 phút.

### Pre-KvK Train Surge

Stack: VIP 12+ + Alliance Military V + Item 24h training boost

Kết quả: T4 train speed +60-70% so với không boost. 50.000 T4 trong 5 ngày thay vì 8 ngày.

## So Sánh Kết Quả Thực Tế

| Setup | Gather/ngày | Research/ngày | Train/ngày |
|---|---|---|---|
| Manual, không boost | 8-10 lần send | Queue idle ~4h | Queue idle ~6h |
| Manual, có boost | 12-14 lần | Queue idle ~2h | Queue idle ~3h |
| **Bot V1, full boost** | **16-18 lần** | **Queue không idle** | **Queue không idle** |
| Bot V2/V3, full boost | 18-20 lần + Combo | Queue không idle | Queue không idle |

## FAQ

### VIP boost và Alliance boost có override nhau không?

Không. Hai lớp độc lập, cộng dồn. VIP 15 +25% gather + Alliance +25% gather = gather speed 150% (cộng, không phải max).

### Item boost activate lúc nào tốt nhất?

Ngay trước khi send march gather tile lv5. Không activate trước 5 phút — timer chạy từ lúc click, không phải từ lúc march đến tile.

### Alliance của tôi chưa unlock Gathering V thì sao?

Kiểm tra Alliance Technology tree → Gathering branch. Nếu alliance nhỏ chưa research đến V, bonus chỉ từ những level đã unlock. Đây là lý do chọn alliance có Gathering V đã research quan trọng hơn nhiều player nghĩ.

## Bắt Đầu Ngay

**V1 750.000đ/tháng** — auto boost management, gather 24/7, không idle queue:

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Auto Build Research RoK VIP Template](/blog/auto-build-research-rok-vip-template)
- [Auto Farm 4 RSS Tile Level 5 RoK](/blog/auto-farm-4-rss-tile-level-5-rok)
- [Speedup Stockpile Management RoK 2026](/blog/speedup-stockpile-management-rok-2026)
  `,
};
