import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "william-i-infantry-guide-rok-2026",
  title: "William I Infantry Guide RoK 2026 — Mid-Tier Garrison Defender",
  description: "William I RoK 2026: garrison defense passive +35%, skill debuff attack enemy, mid-tier infantry build, và bot V1/V2 defend flag 24/7. Tốt nhất tier mid cho player thiếu whale infantry commander.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Flag của mày bị rally 4 lần trong 1 đêm — William I là lý do tại sao mày vẫn giữ được

KvK ngày 7. Enemy kingdom tổ chức 4 rally liên tiếp vào flag của mày lúc 23:00-03:00. Garrison commander là Charles Martel — tốt, nhưng không đủ trước 4 rally từ S+ whale. Flag mất ở rally 3.

Account bên cạnh trong cùng alliance, cùng power, dùng **William I** garrison: flag survive qua rally 3, mất ở rally 4. Khác biệt? William I passive **defense khi garrisoning +35%** — cao hơn Charles Martel +30%, và kèm theo skill debuff attack enemy.

## Cơ chế William I

### Skill Active — "Iron Fist"
- Heal **500-700 HP factor** garrison
- Debuff: **Enemy Attack -20%** trong 5 giây sau cast
- Rage cost: 1.000 — cast liên tục khi rally đang đập vào garrison

### Passive Key Stats (max expertise)
- Infantry Defense: **+40%** — highest infantry defense passive ở tier mid/non-whale
- Garrison Defense Bonus: **+35%** — stacks với talent tree Garrison
- Counter Attack: **+25%** khi defending (troops phản công mạnh hơn khi bị tấn công)

### Talent Tree Mid-Tier Defense
Nhánh **Defense** → **Infantry**:
- Defense: Defender of the People (+3% defense) + Loose Formation (reduce damage taken 2%)
- Infantry: Shield Wall (+5% infantry defense) + Testudo (+3% more)
- Optional: Rejuvenate talent (+5% rage regen để cast heal nhanh hơn)

## Vấn đề defend thủ công với William I

William I cần **continuous garrison presence** — không được kéo ra march khác. Thủ công:

- Mày dùng William I march ra đi farm barb ban ngày → quên reinforce lại vào flag trước đêm → enemy rally 22:00 → không có William I garrison → flag mất nhanh
- Rally 3am giờ VN: mày đang ngủ, không có ai trigger William I skill để debuff enemy attack — troops chịu full damage thay vì -20%
- Reinforce phải manual tap — đặc biệt khi rally đang đến trong 5 phút

Bot V1 không bao giờ quên reinforce trước đêm.

## Bot V1/V2 làm gì khác

**V1 Cơ Bản 750.000đ/tháng** — single flag defense:
- William I auto-reinforce flag 30 phút trước giờ peak attack (server time detect)
- Auto-trigger skill khi garrison HP xuống 80% — debuff enemy attack ngay từ đầu rally
- Heal sync liên tục trong suốt rally duration

**V2 Cao Cấp 900.000đ/tháng** — defend + farm dual:
- 1 đạo William I garrison flag 24/7
- 1 đạo barb farm chain riêng (Lohar/YSG) — không conflict
- Smart priority: nếu flag bị rally, V2 tạm dừng barb đạo, reinforce thêm vào garrison nếu cần

| Cách chơi | Rally survive rate | Flag defense thời gian |
|---|---|---|
| Thủ công (không online đêm) | 40% | 3-5 rally |
| V1 Bot | 70% | 5-7 rally |
| V2 Bot (dual march) | 80% | 7-9 rally |

> 🤖 V1 William I garrison 24/7 — debuff attack enemy auto-trigger mỗi rally, không miss đêm. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Pair tốt nhất với William I

- **William I (lead) + Cleopatra VII (secondary)**: defense + heal double → garrison survive rate cao nhất F2P/mid. Xem: [Cleopatra VII Guide →](/blog/cleopatra-vii-support-guide-rok-2026)
- **William I (lead) + Charles Martel (secondary)**: double infantry defense → extreme tank, ít counter attack
- **William I (secondary) + Constantine (lead)**: Constantine peacekeeping + William garrison passive stack

## So sánh garrison defender mid-tier

| Commander | Garrison Def | Skill Debuff | Heal | Mid-tier |
|---|---|---|---|---|
| **William I** | **+35%** | **-20% enemy atk** | **✅** | **S** |
| Charles Martel | +30% | Không | ✅ nhẹ | A+ |
| Constantine | +20% | Không | ✅ | A+ |
| Richard I | +25% | -15% | ✅✅ | S (whale) |

Xem thêm: [Best Infantry Commanders KvK →](/blog/best-infantry-commanders-kvk-rok-2026).

## FAQ

### William I cần star mấy để garrison passive active?
4 star (passive Garrison Defense unlock ở skill tree). 5 star để full passive +35%. Expertise optional cho garrison role.

### William I có dùng được open field march không?
Suboptimal — William I passive chỉ bonus khi garrisoning. Open field: infantry defense không stack. Tốt nhất giữ trong flag.

### V2 có defend flag đồng thời barb farm không hay phải chọn 1?
V2 chạy 2 đạo độc lập — 1 garrison, 1 barb farm. Không cần chọn. Đây là lý do V2 900k phổ biến với mid-tier players.

## Bắt đầu ngay

**V1 Cơ Bản 750.000đ/tháng** — defend flag không cần online:
- William I garrison 24/7 — tự trigger heal + debuff enemy
- Auto reinforce trước peak attack hours

**V2 Cao Cấp 900.000đ/tháng** — defend + farm dual không conflict:
- 2 đạo: 1 garrison William I, 1 barb chain

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Cleopatra VII Support Guide RoK 2026 — Healing Buff Defense](/blog/cleopatra-vii-support-guide-rok-2026)
- [Best Infantry Commanders KvK RoK 2026](/blog/best-infantry-commanders-kvk-rok-2026)
- [Tier List Best Commanders Each Bot Tier](/blog/tier-list-best-commanders-each-bot-tier-rok-2026)
  `,
};
