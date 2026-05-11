import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "auto-farm-4-rss-tile-level-5-rok",
  title: "Auto Farm 4 RSS + Gem Mining RoK 2026 — 4 march parallel + 8.000 gem/ngày (gấp 4x manual)",
  description: "Auto Farm 4 RSS RokdBot V1+ tự gather Food/Wood/Stone/Gold trên tile lv 5+ với 4 march parallel + auto claim warehouse + alliance buff sync + gem mining 8.000/ngày. Manual chỉ 2.000 gem/ngày. So sánh 3x gem efficiency, 2x RSS throughput.",
  date: "2026-05-09",
  readTime: "6 phút",
  coverImage: "/blog-images/auto-rally/img-14-1tmbKtro.png",
  content: `
## 8.000 gem/ngày vs 2.000 gem/ngày — đâu là khác biệt?

F2P chăm chỉ farm tay 6-8 tiếng/ngày: **2.000-3.000 gem/ngày**. Đỉnh điểm.

Bot Auto Farm chạy 24/7 không nghỉ: **6.000-8.000 gem/ngày** trung bình. Peak Lost Kingdom: 10.000+.

Khác biệt 3-4x không phải vì bot nhanh hơn người — mà vì bot **không bao giờ idle**. Manual mất 6-8h cho gather, bot chạy 24/7 với 4 đạo song song.

## Auto Farm 4 RSS trong RoK là gì?

City có **4-5 march slots** (default 4, VIP 8 unlock 5th). Mỗi march có thể gather 4 loại resource:

- **Food** — train troops, heal hospital
- **Wood** — build queue, training
- **Stone** — wall + watchtower upgrade (KvK survival)
- **Gold** — research, special items

Tile level 1-6:

- Lv 1-3: gather speed thấp (50-150k/h)
- **Lv 4-6**: gather speed cao (300-500k/h) — sweet spot
- Alliance territory + buff zone: +50% gather speed (timing-based)

**Gem Mining**: trong KvK Lost Kingdom map, gem tile spawn random, lv 1-3, drop 5.000-15.000 gem / tile. Yêu cầu commander Lohar + Peacekeeping talent cho max efficiency.

## Vấn đề thực tế khi farm RSS thủ công

5 pain rất thật:

### Send sai tile = mất 40% efficiency
Manual phải zoom map, click từng tile để check level. Lv 3 và lv 5 trông giống nhau. Send sai tile = giảm 40-60% throughput. Sau 3 giờ farm sai = mất 4-5M RSS so với optimal.

### Warehouse cap 10M/resource — ngủ 8 tiếng = mất 1M+
Mỗi resource warehouse cap. Ngủ 8 tiếng + tile lv 5 produce 300k/h × 8h = 2.4M tích trên tile, nhưng warehouse FULL → bot game stop tile produce → mất output. Manual phải dậy đêm claim warehouse.

### Alliance buff timing — miss bonus +50%
Alliance buff "Gather Speed +50%" thường active 1 giờ/ngày, schedule cố định. Bạn không online giờ đó = miss bonus. International alliance khác timezone = thường miss.

### Gem tile spawn random + có ghost tile
Lost Kingdom gem tile spawn random vị trí, respawn 5 phút sau khi exhausted. Manual phải scan map liên tục — 20-30 phút/ngày tìm. Một số tile "ghost" (visible nhưng đã bị exhaust) = lãng phí march.

### Tile compete peak hour — không còn tile lv 5
Peak hour 8-10pm giờ VN, top players gather hết tile lv 5. Bạn online giờ đó = chỉ còn lv 3-4 = giảm 40% throughput. Bot farm 24/7 chiếm tile lv 5 trong off-peak (3-7am).

## Auto Farm RokdBot — bot giúp người chơi cái gì

### Auto find tile lv 5+ (map scan)
Bot scan map mỗi 2 phút, lock tile lv 5-6 gần city + alliance territory. Không gửi nhầm tile thấp.

### 4 march parallel
Bot send 4 march đồng thời, mỗi march 1 resource type (Food/Wood/Stone/Gold) — đảm bảo balance city. Không cần manual switch giữa các march.

![Bot send march từ city ra tile target trên map (zoom view, target circle hiển thị range)](/blog-images/auto-rally/img-14-1tmbKtro.png)

### Auto claim warehouse trước cap
Bot monitor warehouse %. Khi đạt 85% cap → tự claim march về city. Không bao giờ overflow lose production.

### Alliance buff auto-activate
Bot detect alliance buff event window → auto trigger gather rate +50% bonus → max throughput trong giờ buff.

### Gem tile priority + ghost detection
Bot scan Lost Kingdom map mỗi 2 phút. Detect gem tile spawn → priority send march. Auto detect ghost tile (visible nhưng exhausted) → skip không gửi nhầm.

### Night farm 24/7
Bạn ngủ 11pm-7am, bot vẫn farm 4 march × 8h = ~10M+ RSS thu về sáng dậy. Gem mining vẫn chạy.

## Số liệu — Manual vs Bot V1+

| Metric | Manual F2P | Bot V1+ |
|---|---|---|
| Gem / ngày | 2.000-3.000 | **6.000-8.000** |
| RSS / hour / resource | 1.2M (lv 5 tile) | **2.5M+** (peak hour bot chiếm tile lv 6) |
| Warehouse cap loss | 1-2M / đêm ngủ | **0%** |
| Alliance buff hit rate | 30-50% (miss timezone) | **95%+** |
| Active time / ngày | 6-8 giờ | **0 phút** |

Improvement: **3x gem efficiency, 2x RSS throughput, 0 warehouse waste**.

## So sánh package

Auto Farm 4 RSS có **từ V1 Cơ Bản trở lên**. Gem mining có ở V2+, KHÔNG có ở Premium VIP.

| Gói | 4 RSS gather | Gem Mining | Notes |
|---|---|---|---|
| Trial 150k | ✅ basic | ❌ | Test thử |
| **V1 750k** | ✅ full 4 march | ✅ basic | F2P entry |
| **V2 900k** | ✅ + KvK priority | ✅ optimized | Sweet spot |
| V3 1,2M | ✅ + multi-account | ✅ KvK Lost Kingdom optimized | Top tier gem |
| Premium VIP 3M | ✅ via 3-4 đạo barb chain | **❌ KHÔNG có** | Combat focus, gem add-on riêng |

> 🤖 8.000 gem/ngày tự động — [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng (gem optimized + Combo Spam+Luring+AOE).

## FAQ

### Bot có farm trong territory alliance khác không?
Không. Bot luôn farm trong alliance territory của bạn (cộng buff +50%). Nếu bạn không trong alliance, bot farm tile public gần city.

### Bot có biết khi nào pause gather để rally không?
Có. Khi alliance trigger rally, bot auto pause 1 đạo gather và join rally. Sau rally hoàn thành → resume gather ngay.

### Gem mining có ở Premium VIP 3M không?
KHÔNG. Premium VIP 3M tập trung **3-4 đạo barb chain** (Honor farming combat). Gem mining là tính năng riêng — nếu cần gem mining + multi-instance combat thì liên hệ Discord cho add-on package.

## Bắt đầu ngay

**V2 Cao Cấp 900.000đ/tháng** = sweet spot Auto Farm + Combat:
- 4 march RSS gather + gem mining 8.000/ngày
- 1 đạo Combo Spam+Luring+AOE độc quyền
- Auto build/research
- KvK Lost Kingdom optimized

[→ Xem 5 gói cước](/#packages)

Đọc tiếp:
- [Auto Build & Research — City Hall lv 25 trong 14 ngày](/blog/auto-build-research-rok-vip-template)
- [Combo Spam + Luring + AOE V2 — Bí mật kéo rợ gấp 4x Honor/AP](/blog/combo-spam-luring-aoe-rokdbot-v2)
  `,
};
