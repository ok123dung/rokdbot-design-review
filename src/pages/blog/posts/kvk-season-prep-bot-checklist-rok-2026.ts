import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "kvk-season-prep-bot-checklist-rok-2026",
  title: "Checklist Chuẩn Bị KvK 2026 — Bot Setup Theo VIP Tier (T1-T13+)",
  description: "7 ngày trước KvK: T4 chưa farm, hospital chưa mở rộng, gem thiếu. Checklist bot RokdBot theo từng VIP tier — V1 gather prep, V2 Combo barb chain, V3 multi-account 72h surge. KvK day 1-14 timeline đầy đủ.",
  date: "2026-05-09",
  readTime: "7 phút",
  coverImage: "/blog-images/auto-rally/img-12-1UPynHjy.png",
  content: `
## 7 ngày trước KvK — và bạn chưa farm đủ T4

T4 cần 1,5 triệu lương thực để train 10.000 troops. Gather thủ công: 6 tile lv5 × 8 lần/ngày × 7 ngày = bạn cần ngồi recall + send **336 lần** trong tuần trước KvK.

Alliance leader hỏi power. Bạn nhìn hospital còn 30% capacity, gem thiếu speedup, City Hall 22 chưa lên 23. 72 tiếng nữa là KvK Day 1.

Đây là lúc setup bot theo tier tạo ra khoảng cách thật sự giữa governor bình thường và governor top alliance.

## Pre-KvK Checklist — 7 Ngày Trước

### V1 750k — Maximize Resource Foundation

| Task | Bot làm gì | Thời gian |
|---|---|---|
| Gather tile lv5 24/7 | Auto send 1 đạo, auto recall khi đầy | Liên tục |
| Build queue clear | Auto claim + queue next | Mỗi 2-4h |
| Research queue | Auto claim speedup, queue tiếp | Mỗi 4-6h |
| Hospital expand | Auto heal troops, tái deploy | Sau mỗi combat |
| Gem mine | Auto gửi đào, auto recall | Liên tục |

**Target V1 sau 7 ngày**: Kho đủ lương thực / gỗ / đá cho 50.000 T4. Build queue không bao giờ idle. Gem speedup reserve đủ cho KvK day 1-3.

### V2 900k — Barb Chain + Resource Đồng Thời

7 ngày pre-KvK với V2: **1 đạo Combo chain chạy song song với gather**. Không cần chọn giữa farm rợ hay farm tile — bot làm cả hai.

- Buổi sáng: gather tile lv5 khi rợ lv5 vắng (morning rotation)
- Buổi chiều-tối: Combo barb chain khi rợ lv5 spawn dày
- Gem mine: luôn chạy nền

**Target V2 sau 7 ngày**: 150.000-200.000 Honor tích lũy trước KvK. Hospital tự heal 24/7 → không thiếu troops ngày 1.

### V3 1,2M — 2 Đạo, Multi-Account 72h Surge

V3 với multi-account: farm acc + main acc chạy song song 7 ngày cuối. 2 đạo Combo = ~430 con rợ/ngày × 7 = **~3.000 con rợ trước KvK**.

AI commander rotation tự xoay commander theo buff window, không lãng phí frame nào.

> 🤖 Setup bot trước KvK 7 ngày là lợi thế tích lũy. **V3 2 đạo + multi-account = chuẩn bị tốt nhất**. [Xem V3 →](/#packages)

## KvK Day 1-3 — Chiếm Territory Đầu

| Phase | V1 | V2 | V3 / Premium |
|---|---|---|---|
| Gather rss inside KvK | ✅ Auto | ✅ Auto | ✅ Auto |
| Barb chain lv5 KvK map | ✗ | ✅ Combo | ✅ 2 đạo Combo |
| Heal + redeploy nhanh | ✅ | ✅ | ✅ AI optimized |
| Scout + farm acc surge | ✗ | ✗ | ✅ Multi-acc |

**V1**: Giữ gather 24/7 trong KvK map, không bao giờ thiếu troops heal. Phù hợp governor support role.

**V2**: Combo chain rợ KvK lv5 vào giờ cao điểm. Honor tích lũy nhanh từ day 1.

**V3 / Premium**: 2-4 đạo chain đồng thời, AI rotation tối ưu commander theo context KvK (field buff vs city buff). Farm acc liên tục gather tile inside KvK.

## KvK Day 4-9 — Honor Grind Dài Hạn

Giai đoạn này quyết định rank Honor cuối season. Top governor: **100-200k Honor/season**, median active: 30-50k.

| Gói | Honor/ngày | Honor Day 4-9 (6 ngày) | Rank ước tính |
|---|---|---|---|
| V1 750k | ~600 | ~3.600 | Bottom 50% |
| **V2 900k** | ~2.500 | **~15.000** | **Top 30%** |
| **V3 1,2M** | ~5.000 | **~30.000** | **Top 10%** |
| Premium VIP 3M | ~10.000+ | ~60.000+ | Top 3% |

V2 đạt Top 30% kingdom Honor mà không cần online 4-6 tiếng/ngày KvK. V3 Top 10%.

> ⚡ 6 ngày Honor grind với V2 = 15.000 Honor auto. Upgrade trước KvK bắt đầu. **[Xem gói →](/#packages)**

## KvK Day 10-14 — Final Push + Fortification

**Checklist cuối KvK**:

- [ ] Hospital capacity đủ absorb damage cuối season (V1+ auto heal)
- [ ] Commander expertise không bị lãng phí frame (V3 AI rotation)
- [ ] Gem mine chạy đến phút cuối (V1/V2/V3 included)
- [ ] Farm acc đẩy resources sang main acc cho final rally (V3 multi-acc)
- [ ] Build queue không idle trong downtime combat (V1+)

**V2 cuối KvK**: Combo chain aggressive — đẩy Honor trong 48h cuối. Lilith KvK scoring thường có multiplier cuối season, mỗi kill value cao hơn.

**Premium VIP**: 3-4 đạo, 48h cuối = push 20.000+ Honor nếu cần. Không ai manual được mức này.

## Setup Checklist Theo Tier — Tóm Tắt

| Thời điểm | V1 | V2 | V3+ |
|---|---|---|---|
| -7 ngày | Gather 24/7, build queue | + Combo chain, gem mine | + 2 đạo, farm acc |
| Day 1-3 | Support gather KvK | Combo chain day 1 | 2 đạo + multi-acc surge |
| Day 4-9 | Giữ troops active | ~15k Honor auto | ~30k Honor auto |
| Day 10-14 | Final heal, queue clear | Final push Combo | Max chain 48h |

## Bắt đầu ngay

Không có thời gian setup tay trước KvK. Bot kích hoạt trong **24 giờ** sau đăng ký — đủ để chạy trước ngày 1.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Auto Honor Farming RoK 2026 — 17 tháng case study Power 98M](/blog/auto-honor-farming-kvk-rok-2026)
- [Auto Rally Captain — Tự động rally fortress 24/7](/blog/auto-rally-captain-rok-2026)
- [Multi-Account Sync RokdBot V3 — 2-3 Acc Song Song](/blog/multi-account-sync-rokdbot-v3)
  `,
};
