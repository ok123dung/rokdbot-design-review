import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "lohar-barbarian-farming-24h-xp-grind-rok-2026",
  title: "Lohar Cày Rợ 24/7 — Hướng Dẫn Farm 5M XP/Ngày Với Bot (Lohar + Sun Tzu Combo)",
  description: "Lohar lv60 manual = 30+ ngày cày rợ cấp 12. Bot V1+ với Lohar + Sun Tzu pair = 14 ngày, 5M XP/ngày trung bình. Phân tích cơ chế Peacekeeping talent, barb level tối ưu, Vòng Cổ Xương Người event, và 24h grind schedule chi tiết.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/blog-images/auto-rally/img-04-1VS5iy5G.png",
  content: `
## 30 ngày cày tay vs 14 ngày với bot — Lohar lv60 thật ra không khó

Lohar level 60 manual: mỗi ngày cày 4-6 tiếng, chọn barb cấp 12-14 để XP/AP tối ưu, không bỏ lỡ event Vòng Cổ Xương Người. Thực tế 95% F2P mất 30-45 ngày để lên lv60 — vì buổi tối ngủ quên, quên claim event, hoặc march idle vì không ai tap.

**Bot V1+ với Lohar + Sun Tzu pair:** 14 ngày, trung bình **5M XP/ngày**, chạy 24/7 không nghỉ.

Cách làm — phân tích từng phần dưới đây.

## Lohar mechanics + Peacekeeping talent — tại sao Lohar là vua farm rợ F2P

Lohar là commander Peacekeeping (Barbarian Specialist) duy nhất F2P có được qua City of Lyceum / Tavern mà không cần mua bằng gem. Điểm mạnh cốt lõi:

- **Active skill "Wolf Pack"** — damage trực tiếp 1 barb target, cộng thêm rage từ kills → rage loop nhanh
- **Passive "Peacekeeping Expertise"** — tăng XP nhận được khi tiêu diệt barb +25% ở maxlevel
- **Talent tree Peacekeeping** — node "Thoroughbreds" giảm AP cost barb -10%, node "Tear of Ice" tăng marching speed đến barb

F2P không cần mua commander khác. Lohar đã đủ để farm rợ top 3 hiệu quả trong game.

## Sun Tzu pair synergy — tại sao không phải Boudica hay Constance?

Sun Tzu là secondary tốt nhất cho Lohar vì 3 lý do cụ thể:

1. **Active "Art of War"** — giảm AP của march đang chiến đấu -10% mỗi activation. Ghép với Lohar -10% AP talent = tổng -20% AP/march so với baseline
2. **Passive "Sun Tzu's Sage"** — tăng rage generation của cả march +15% → Lohar rage loop nhanh hơn 15% → AOE spam dày hơn
3. **Infantry base** — Sun Tzu infantry march giảm damage nhận từ barb cấp thấp, tăng survivability → ít heal, ít downtime

Với Boudica: skill anti-barb tốt nhưng không có rage gen boost. Với Constance: niche garrison, không phải Peacekeeping. Sun Tzu là lựa chọn đúng cho mọi F2P.

> 🤖 Bot V1 tự nhận pair Lohar + Sun Tzu và tối ưu barb target cấp tự động. [Xem V1 750k →](/#packages)

## Barb level tối ưu cho Lohar — không phải cứ cao là tốt

Nhiều F2P nghĩ barb lv25-30 sẽ cho nhiều XP hơn. Sai. XP/AP ratio thực tế:

| Barb Level | XP per kill | AP cost | XP/AP ratio |
|---|---|---|---|
| Lv8-10 | 400-600 | 8 | 50-75 |
| Lv12-14 | 1.200-1.800 | 12 | **100-150** ← sweet spot |
| Lv20-25 | 3.000-4.500 | 25 | 120-180 |
| Lv30+ | 6.000-8.000 | 45 | 133-177 |

Barb lv12-14 là **sweet spot F2P** vì:
- Lohar với Sun Tzu pair thắng barb lv14 không tốn heal
- Heal cost barb lv20+ cắt xén XP/AP net ratio
- March speed đến barb lv12 nhanh hơn → vòng chain ngắn hơn → XP/giờ tổng cao hơn

Bot V1 auto-target barb lv12-14 trong radius nhất định quanh city. Không march xa, không waste time travel.

## Vòng Cổ Xương Người event — bonus XP không ai được bỏ qua

Vòng Cổ Xương Người (Necklace of Bones) là seasonal event trong RoK: mỗi barb kill trong event window cho **+50-100% bonus XP**. Duration thường 5-7 ngày / season.

F2P manual: 70% player bỏ lỡ event vì:
- Không chơi đúng giờ event active
- Ngủ qua thời điểm barb spawn cao nhất
- Quên claim reward daily trong event

**Bot V1+ 24/7:** event chạy đêm 2-6am — bot vẫn farm. Event claim daily — bot auto-claim. Bonus XP event được tận dụng 100% mỗi ngày event tồn tại.

Trong 14 ngày Lohar lv60 của Player B (case study thực tế):
- 5 ngày có Vòng Cổ Xương Người event
- 5 ngày × 24h × 5M XP/ngày × 1,75 bonus = **~10,5M XP bonus thêm chỉ từ event**

Không có event bonus, lên lv60 cần ~22 ngày. Với event + 24/7 = 14 ngày.

> ⚡ Event farming 24/7 không cần thức khuya — bot claim và farm thay bạn. [Xem V1 và V2 →](/#packages)

## 24h grind schedule — bot chạy gì mỗi khung giờ

Đây là schedule thực tế của 1 account dùng bot V1 farm Lohar lv60:

**00:00 - 06:00 (cao điểm)**
- Barb spawn rate cao nhất trên map (nhiều player ngủ → ít competition)
- Bot chain march Lohar + Sun Tzu đến barb lv12-14 liên tục
- Auto-heal wounded troops mỗi 15-20 phút, speedup nếu có free speedup

**06:00 - 12:00 (ổn định)**
- Barb farm tiếp, auto-claim daily quests buổi sáng
- Gem mining parallel (V1 bao gồm)
- Build queue auto-fill nếu resource đủ

**12:00 - 18:00 (trung bình)**
- Farm barb, research auto-progress
- Auto-harvest rss tile gần city nếu farming package enabled

**18:00 - 24:00 (KvK active nếu có)**
- Nếu đang KvK: Honor farming priority over XP — bot switch target tự động
- Ngoài KvK: barb lv14 chain tiếp

**Số thực tế ngày đủ 24h farm:**
- Barb kills: 180-220 con (barb lv12-14)
- XP Lohar: 4,8M - 5,5M / ngày
- AP tiêu thụ: ~1.440 AP free + speedup từ quests

## So sánh manual vs bot — số liệu thực

| Chỉ số | Manual (4h/ngày) | Bot V1 (24h/ngày) |
|---|---|---|
| Barb kills / ngày | 40-60 | 180-220 |
| XP Lohar / ngày | 0,8M - 1,2M | 4,8M - 5,5M |
| Ngày lên lv60 | 30-45 ngày | **14 ngày** |
| Event tận dụng | 30-40% | 100% |
| Heal downtime | 20-30% march time | <5% (auto speedup) |

## Nên dùng V1 hay V2 cho Lohar farm?

**V1 750k/tháng** — đủ cho Lohar farm barb đơn thuần:
- 1 đạo barb farm 24/7
- Không có Combo Spam + Luring + AOE (V2 exclusive)
- Phù hợp F2P mới, mục tiêu chính là lên lv60 Lohar nhanh

**V2 900k/tháng** — thêm Combo:
- Lohar + Sun Tzu với Combo Spam + Luring + AOE
- 217 con rợ/ngày vs 180-220 con rợ V1 (V2 chain cluster → kills/AP cao hơn 20-30%)
- XP/ngày tăng lên 6-7M nếu barb cluster lớn
- Honor KvK cũng cao hơn nhờ Combo

Nếu chỉ cần Lohar lv60 nhanh: **V1 đủ**. Nếu muốn lên lv60 và đồng thời top Honor KvK: **V2**.

## FAQ

### Sau khi Lohar lv60, bot còn dùng Lohar không?
Có. Lohar lv60 chuyển sang Honor farming KvK — Peacekeeping passive vẫn cho XP cao khi farm barb. Bot tiếp tục dùng pair này cho Honor.

### Sun Tzu phải maxlevel không?
Không bắt buộc. Sun Tzu lv40-50 với skill level 3-4 đã đủ rage gen boost. Bot hoạt động tốt với Sun Tzu incomplete.

### V1 có auto-claim Vòng Cổ Xương Người event không?
Có. Bot auto-claim daily event reward nếu event active.

## Bắt đầu ngay

**V1 750k/tháng** — entry point F2P, Lohar lv60 trong 14 ngày:
- 1 đạo farm barb lv12-14 24/7
- Auto heal, claim, build, research
- Gem mining bao gồm

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Tier List Commander Tốt Nhất Cho Mỗi Gói Bot](/blog/tier-list-best-commanders-each-bot-tier-rok-2026)
- [Auto Farm 4 RSS Tile Lv5 — Farm Resource Song Song](/blog/auto-farm-4-rss-tile-level-5-rok)
- [F2P → VIP2 Bot Progression Roadmap 2026](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
  `,
};
