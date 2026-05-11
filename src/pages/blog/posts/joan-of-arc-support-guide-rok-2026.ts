import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "joan-of-arc-support-guide-rok-2026",
  title: "Joan of Arc Support Guide RoK 2026 — Universal F2P Gather + Combat",
  description: "Joan of Arc RoK 2026: buff attack stack, gather bonus, và versatility F2P không commander nào match. Guide talent tree, best pair, bot V1 gather 24/7 và tại sao Joan là commander đầu tiên mọi F2P nên build.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Mày chỉ được build 1 commander F2P — đó phải là Joan of Arc

Không phải vì Joan mạnh nhất trong combat. Không phải vì Joan top DPS. Mà vì Joan là **commander duy nhất** giỏi ở 3 vai trò đồng thời: gather, support combat, và flag defense. Với account mới hoặc F2P, đây là lợi thế không thể bỏ qua.

3 năm meta RoK: Joan vẫn tier S support. Không có patch nào nerf. Không có whale commander nào replace được trong F2P budget.

## Cơ chế Joan of Arc

### Skill Active — "Holy War"
- Buff **Attack +20%** cho tất cả friendly troops trong 5 giây (không phân biệt troop type)
- Heal **400-600 HP factor** cho march/garrison
- Rage cost: 1.000

### Passive Key Stats (max expertise)
- All Troop Attack: **+25%** — universal, không phân biệt cavalry/archer/infantry
- Gathering Speed: **+25%** — top gathering passive trong game
- Troop Defense khi garrisoning: **+15%**

### Talent Tree — 2 Build Option

**Build 1 — Gather Focus** (F2P mới):
- Nhánh Support: Gathering Mastery + Spoils of War (+5% gathering speed, +3% resource)
- Mục tiêu: maximize RSS income để build city nhanh

**Build 2 — Combat Support**:
- Nhánh Support: Rejuvenate + All for One (+8% attack buff duration)
- Nhánh Defense: 5 điểm vào cuirass
- Mục tiêu: flag defense secondary hoặc march support KvK

## Vấn đề khi dùng Joan thủ công

Joan giỏi vì **versatility** — nhưng versatility đòi hỏi context switching liên tục:

- Peacetime: Joan ở march gather rừng/stone/food 24/7
- KvK combat: phải kéo Joan về từ gather, reinforce vào flag
- Event gather: event 2x gather buff → Joan phải ở gather field ngay lúc buff active
- Miss timing bất kỳ 1 trong 3 → waste 1/3 potential của Joan

Thủ công không ai theo dõi 3 context cùng lúc. Bot V1 tự switch.

## Bot V1 làm gì khác

**V1 Cơ Bản 750.000đ/tháng** với Joan:

- **Auto-gather scheduler**: Joan tự di chuyển tới tile RSS cao nhất trong range, gather liên tục 24/7
- **Event buff detection**: khi 2x gather event active, V1 ưu tiên tile lv 4-5 — maximize RSS/giờ
- **Combat switch**: khi alliance declare war, Joan tự kéo về từ gather, switch sang defense mode
- **Gather → build pipeline**: RSS về city tự convert thành upgrade queue ngay, không tồn đọng

| Joan role | Thủ công/ngày | V1 Bot/ngày |
|---|---|---|
| Gather RSS | 4-6 tiếng | 20-22 tiếng |
| Event buff capture | 50% rate | 95%+ rate |
| Flag reinforce khi cần | Manual | Tự động |

> 🤖 V1 chạy Joan gather 24/7 — tự switch sang defense khi KvK, tự capture event 2x buff. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Pair tốt nhất với Joan

- **Joan (lead) + Constance (secondary)**: double gather bonus → RSS farming fastest F2P
- **Joan (secondary) + Mehmed (lead)**: buff +20% attack stack với rally passive Mehmed → rally damage tăng đáng kể. Xem: [Mehmed II Guide →](/blog/mehmed-ii-guide-rok-2026)
- **Joan (secondary) + Yi Seong-Gye (lead)**: buff attack + YSG AOE = peacekeeping meta. Xem: [Yi Seong-Gye Guide →](/blog/yi-seong-gye-guide-rok-2026)
- **Joan (secondary) + Cao Pi (lead)**: combat pair với buff stack độc. Xem: [Cao Pi Guide →](/blog/cao-pi-guide-rok-2026)

## So sánh F2P support tier

| Commander | Gather Bonus | Attack Buff | Heal | Versatility |
|---|---|---|---|---|
| **Joan of Arc** | **+25%** | **+20% all** | **✅** | **S+** |
| Cleopatra VII | Không | +15% | ✅✅ | S |
| Sun Tzu | Không | +10% | ✅ | A+ |
| Constance | +20% | Không | Không | A (gather only) |

Joan dẫn đầu versatility. Không commander nào trong tier free match S+ versatility này. [Cavalry Tier List →](/blog/commander-tier-list-cavalry-rok-2026).

## FAQ

### Joan cần build đến expertise không?
Gather + combat support: 5 star đủ (passive +25% gather và +25% all troop attack unlock tại 5511). Expertise tốt nhưng không cần thiết cho F2P.

### Joan có dùng được trong KvK open field PvP không?
Suboptimal — Joan buff attack ngắn (5s), không có debuff enemy. Tốt nhất là secondary support, không phải lead PvP.

### V1 có tự switch Joan giữa gather và combat không cần tôi online?
Đúng. V1 detect KvK phase và threat status — tự switch context. Bạn không cần online.

## Bắt đầu ngay

**V1 Cơ Bản 750.000đ/tháng** = Joan đúng potential:
- Gather 24/7 — tự động tile RSS cao nhất
- Event buff auto-capture — không miss 2x gather
- Tự switch defense khi threat detect

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Cleopatra VII Support Guide RoK 2026 — Healer Defense](/blog/cleopatra-vii-support-guide-rok-2026)
- [Yi Seong-Gye Guide RoK 2026 — Peacekeeping AOE Meta](/blog/yi-seong-gye-guide-rok-2026)
- [Tier List Best Commanders Each Bot Tier](/blog/tier-list-best-commanders-each-bot-tier-rok-2026)
  `,
};
