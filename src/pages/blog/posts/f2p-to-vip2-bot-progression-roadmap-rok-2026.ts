import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "f2p-to-vip2-bot-progression-roadmap-rok-2026",
  title: "F2P → VIP2 Trong 45 Ngày Với Bot — Roadmap Không Cần Nạp 1 Đồng (Budget 150k → 900k)",
  description: "F2P reach VIP 2 trong 45 ngày bằng bot — không nạp gem. Roadmap 3 phase: Trial 7 ngày → V1 750k/tháng → V2 900k/tháng. So sánh với manual: 120+ ngày cùng route. Phân tích gem + Honor tích lũy từng phase.",
  date: "2026-05-09",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Manual route tới VIP 2: 120+ ngày. Bot route: 45 ngày

VIP 2 trong RoK cần **~14.000 VIP points** từ VIP 0. Sources chính: gem spending, alliance gift, daily login. F2P không nạp gem → VIP points chủ yếu từ gem mining + daily allocation.

Thủ công: Gem mine recall 8-10 lần/ngày, mỗi lần ~80-120 gem, spend vào VIP exp. Nhất quán nhất cũng mất **110-130 ngày** để đủ 14.000 VIP points từ gem mining thuần.

Bot route: Gem mine 24/7 không miss lần nào + Honor bonus gem KvK. **45 ngày**.

Đây không phải magic — là toán học của consistency. Bot không ngủ, không quên recall, không skip ngày bận.

## Phase 1: Trial 7 Ngày — 150.000đ

**Mục tiêu**: Xác nhận bot hoạt động, bắt đầu gem + resource foundation.

Trial không phải gói để maximize output — là gói để **test compatibility và xây nền**. 7 ngày này:

- Gather tile tự động 24/7 → kho đầy gỗ/đá/lương thực → mở queue build liên tục
- Build queue tự claim → không bao giờ idle City Hall
- Heal troops auto → troops luôn sẵn sàng combat
- Gem mine (nếu tier Trial include): bắt đầu tích lũy gem nhỏ

| Metric | Day 0 | Day 7 (Trial end) |
|---|---|---|
| Kho resource | 50% đầy | 90-100% đầy |
| Build queue | Miss 30-40% | 0% miss |
| Troops deployed | 60-70% | 90-95% |
| Gem tích lũy | 0 | 500-800 (base) |

**Quyết định**: Sau 7 ngày, nếu growth đều và không vấn đề gì → upgrade V1. Không phù hợp → dừng, mất 150k.

> 🤖 Trial 7 ngày không cam kết. Test trước, quyết định sau. **[Bắt đầu Trial →](/#packages)**

## Phase 2: V1 Day 8-30 — 750.000đ

**Mục tiêu**: Gem accumulation + City Hall growth liên tục.

V1 thêm gem mining đầy đủ so với Trial. Đây là giai đoạn **compound growth**: gem mine → spend VIP exp → VIP level lên → buff tốt hơn → growth nhanh hơn.

### Gem Mining Math

Gem mine lv4-5 (mid-game): ~100-150 gem/lần × 8-10 lần/ngày bot recall = **800-1.500 gem/ngày**.

Bot V1 không miss recall → **25-28 ngày × 1.100 gem/ngày average = ~30.000 gem Phase 2**.

Spend allocation F2P tối ưu:
- 60% → VIP exp: ~18.000 gem → ~7.200 VIP points (tỷ lệ 1 gem = 0,4 VIP point ước tính)
- 25% → Build speedup (construction RSS thiếu)
- 15% → Troop speedup KvK prep

| Day | Gem tích lũy | VIP points | City Hall |
|---|---|---|---|
| Day 8 | ~800 | Bắt đầu spend | 20 |
| Day 15 | ~9.600 | ~3.200 points | 21 |
| Day 22 | ~18.000 | ~6.000 points | 22 |
| Day 30 | ~30.000 | ~9.600 points | 23 |

VIP 1 cần ~7.000 points → **đạt VIP 1 khoảng day 23-25**. VIP 2 cần thêm ~5.000 → cần thêm 13-15 ngày.

### Build Progress V1 Phase 2

City Hall 20 → 23 trong 22 ngày (bot V1 auto build + research không idle):
- **Unlock thêm march slot**: CH 22 → 3 marches
- **Troop capacity tăng**: Mỗi level CH thêm 5-8% hospital capacity
- **Research speed**: Academy up theo CH level

> ⚡ V1 foundation phase — gem mine + build 22 ngày liên tục. **[Xem V1 →](/#packages)** · 750k/tháng.

## Phase 3: V2 Day 30-45 — 900.000đ

**Mục tiêu**: Đạt VIP 2 + tăng tốc Honor KvK.

Upgrade V2 sau ngày 30: Combo Spam + Luring + AOE bật lên. 1 đạo chain ~217 con rợ/ngày thay vì 50-80 con V1 gather. Honor tăng **3-4 lần**.

VIP 2 thường về trong **ngày 40-45** với route này:
- Day 30: ~9.600 VIP points (còn cần ~4.400 để đủ VIP 2)
- Day 30-45 với V2: gem mine vẫn chạy + Honor bonus gem KvK = ~6.000-8.000 VIP points thêm
- **Day 42-45: VIP 2 unlock**

| Phase | Thời gian | Chi phí | VIP gain |
|---|---|---|---|
| Trial | Day 1-7 | 150k | Foundation |
| V1 | Day 8-30 | 750k | ~9.600 points |
| V2 | Day 30-45 | 900k (prorated) | ~4.400+ points |
| **Tổng** | **45 ngày** | **~1,2M** | **VIP 2** |

### Manual so sánh

Cùng route F2P, không bot: gem mine 6-8 lần/ngày (miss ~30-40% do quên/bận) = ~700 gem/ngày average. 14.000 VIP points cần ÷ ~280 gem/ngày VIP spend = **135 ngày**. Với điều kiện không miss ngày nào — thực tế 120-150 ngày.

Bot route 45 ngày vs manual 120-150 ngày. Chênh lệch **75-105 ngày**.

## Đường dài hơn Phase 3: V2 → V3

Nếu sau VIP 2, power đã lên 20-30M và muốn aggressive KvK:

- **Day 45-75**: V3 1,2M → 2 đạo chain, Honor top 10% kingdom, multi-account
- **Day 75+**: Xem xét Premium VIP nếu alliance cần governor top 5%

Nhưng VIP 2 trong 45 ngày F2P đã là milestone đủ để vào roster main KvK của hầu hết top 3 alliance Việt.

## Bắt đầu ngay

**Step 1**: Trial 150.000đ / 7 ngày — test không cam kết
**Step 2**: Nếu ổn → V1 750.000đ / tháng — gem mine + build
**Step 3**: Day 30 → V2 900.000đ — Combo chain + push VIP 2

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Farm Fatigue — 70% Player Bỏ Game Sau 30 Ngày](/blog/farm-fatigue-quit-rate-bots-solution-rok-2026)
- [Auto Farm RSS Tile Level 5 — Gem Mining 24/7](/blog/auto-farm-4-rss-tile-level-5-rok)
- [RokdBot Có Bị Ban Không? Phân Tích Rủi Ro 2026](/blog/rokdbot-safety-ban-risk-compliance-2026)
  `,
};
