import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "el-cid-cavalry-guide-rok-2026",
  title: "El Cid Cavalry Guide RoK 2026 — Mid-Tier Rally Lead Pair Cao Pi",
  description: "El Cid RoK 2026: rally lead mid-tier với skill damage buff liên tục, best pair với Cao Pi, talent tree cho player 10-20M power, và bot V2 rotation rally 24/7 không cần Mehmed whale.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## 20M power, không có Mehmed, vẫn muốn rally — El Cid là câu trả lời

Mày biết Mehmed II là rally lead tốt nhất. Mày cũng biết Mehmed tốn gem không phải F2P. Ở mốc 10-20M power, phần lớn players bỏ rally lead hoàn toàn — "thiếu Mehmed thì rally vô nghĩa". Đây là **suy nghĩ sai**.

El Cid rally lead + Cao Pi secondary là **mid-tier rally combo** được under-rate nhất 2026. Không phải S+ như Mehmed — nhưng cost bằng 0 gem, và rally damage đạt 65-70% của Mehmed meta nếu build đúng.

## Cơ chế El Cid

### Skill Active — "Warbow"
- Gây **1.000-1.500 damage factor** vào target (single target high factor)
- Buff: **Skill Damage +30%** trong 4 giây cho toàn march sau cast
- Rage cost: 1.000 — cycle ổn định

### Passive Key Stats (max expertise)
- Cavalry Attack: **+35%**
- Rally Attack khi lead: **+15%** (thấp hơn Mehmed +30% nhưng significant ở mid-tier)
- Skill Damage khi march đầy capacity: **+20%** thêm — stacks với active buff

### Talent Tree Mid-Tier Rally
Nhánh **Peacekeeping** + **Cavalry**:
- Peacekeeping: Killing Machine + Domination (giảm AP cost, tăng damage barb nhẹ)
- Cavalry: Charge + Armor Destroyer
- Cuối: Conqueror talent — rally capacity +5%, attack +8% khi rally

## Vấn đề rally thủ công với El Cid

El Cid rally cần **window detection tốt** — khác Mehmed (power gap lớn nên hit bất cứ target nào đều OK), El Cid cần chọn target phù hợp power level:

- Target quá mạnh (fort lv 5 full garrison): lose rally, waste 2h cooldown
- Target quá yếu (fort rỗng): kill thấp, AP/rally ROI kém
- **Sweet spot**: fort lv 3-4, garrison 50-150k troops → El Cid đạt damage tối ưu

Thủ công mày phải scan map liên tục. Bot V2 tự scan.

## Bot V2 làm gì khác

**V2 Cao Cấp 900.000đ/tháng** với El Cid:

- **Smart target scan**: V2 detect fort lv và garrison size trước khi launch rally — chỉ hit targets trong sweet spot range
- **Fill capacity**: auto-request alliance troops để fill march capacity tối đa trước launch
- **Rally + barb dual**: V2 chạy 1 đạo El Cid rally, 1 đạo barb farm combo — maximize AP utility
- **Heal cycle**: sau rally, wounded auto-heal, El Cid sẵn sàng next window trong 10 phút

| Setup | Rally/ngày | Kill/rally avg | Kill/ngày |
|---|---|---|---|
| El Cid thủ công | 2-3 | 60k | 120-180k |
| El Cid V2 Bot | 7-9 | 70k (target optimize) | 490-630k |
| Mehmed V3 Bot | 12-18 | 100k | 1,2-1,8M |

El Cid V2 = 490-630k kill/ngày. Không phải Mehmed — nhưng 4x thủ công với cost 0 gem.

> 🤖 V2 scan target, fill capacity, launch El Cid rally 24/7 — không cần Mehmed để rally effective. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Pair Cao Pi với El Cid — tại sao bắt buộc

Cao Pi secondary (Skill Damage +25%) stack với El Cid passive (+20% skill damage khi full capacity) + active buff (+30% sau cast):

- Tổng skill damage buff effective: **+75% trong window 4 giây**
- Cao Pi debuff (-15% enemy def) đúng trước El Cid cast → damage spike kép
- Chi phí: Cao Pi free silver commander

Xem thêm: [Cao Pi Guide RoK 2026 →](/blog/cao-pi-guide-rok-2026).

## So sánh rally lead mid-tier

| Commander | Rally Attack | Skill Dmg | F2P | Rally Tier |
|---|---|---|---|---|
| **El Cid** | **+15%** | **+30% post-cast** | **✅** | **A+** |
| Julius Caesar | +10% | +15% | ✅ | A |
| Takeda Shingen | +20% | Không | Không (gem nhẹ) | A+ |
| Mehmed II | +30% | AOE | Không (whale) | S+ |

El Cid là A+ free option. Best in mid-tier. Xem: [Cavalry Tier List →](/blog/commander-tier-list-cavalry-rok-2026).

## FAQ

### El Cid cần star mấy để rally lead hiệu quả?
5 star với skill 5-5-1-1 hoặc 5-1-5-1. Rally Attack passive unlock ở skill 4 (star 4-5). Expertise optional.

### El Cid hay Julius Caesar cho mid-tier rally?
El Cid: skill damage burst cao hơn, rally attack passive mạnh hơn. Julius Caesar: AP cost thấp hơn nhẹ. Mid-tier: El Cid win.

### V2 có chain El Cid rally + barb farm cùng lúc không?
Đúng. V2 chạy 2-đạo: 1 El Cid rally, 1 barb farm (YSG hoặc Lohar). Hai đạo độc lập.

## Bắt đầu ngay

**V2 Cao Cấp 900.000đ/tháng** = El Cid rally + barb farm đồng thời:
- Smart target scan — chỉ hit fort tối ưu
- Auto fill march + heal cycle
- 2 đạo chain: rally + barb 24/7

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Cao Pi Cavalry Guide RoK 2026 — Rally Secondary Best](/blog/cao-pi-guide-rok-2026)
- [Mehmed II Rally Lead Guide RoK 2026 — S+ Meta](/blog/mehmed-ii-guide-rok-2026)
- [Cavalry Commander Tier List RoK 2026](/blog/commander-tier-list-cavalry-rok-2026)
  `,
};
