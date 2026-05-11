import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "saladin-cavalry-f2p-guide-rok-2026",
  title: "Saladin Cavalry F2P Guide RoK 2026 — Sand Lion Pet Open Field Sleeper",
  description: "Saladin là cavalry F2P tốt nhất open field RoK 2026 — Cavalry Attack +30%, counter-attack passive và Sand Lion pet combo tạo 'kite-and-burst' mechanic bot V1/V2 khai thác 24/7. Guide talent tree và pairing.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Không ai nói với bạn điều này: Saladin counter-attack passive stack với Sand Lion pet để tạo mechanic không commander F2P nào khác có

Saladin có passive **Counter Attack +25%** — mỗi lần enemy hit march của bạn, bạn auto-counter với 25% damage bonus. Sand Lion pet level 5: **Cavalry Counter Attack +10%** thêm. Tổng: **Counter Attack +35% effective**. Trong khi Theodora và Lohar không có counter-attack mechanic, Saladin tự động punish mọi enemy attack. Kết quả: với cùng troop power, Saladin march **sống lâu hơn 25-30%** so với Theodora trong open field — vì mỗi damage nhận là damage deal lại. Bot V1/V2 khai thác mechanic này để farm với troop loss tối thiểu.

## Cơ chế Saladin

### Skill Active — "Chivalry"
- Damage: **1.100-1.800 damage factor** vào target (cavalry single/AOE tùy expertise)
- Buff: March Speed +25% trong 3 giây — cho phép reposition nhanh sau cast
- Debuff: Enemy March Speed -15% trong 4 giây — slows enemy retaliation

### Passive Key Stats (max expertise)
- Cavalry Attack: **+30%**
- Counter Attack: **+25%** (unique — active mỗi khi enemy attacks your march)
- Open Field Bonus: **+15% attack khi march không phải rally** — bonus cho solo march

### Talent Tree Summary
Counter-attack kite build:
- Nhánh **Cavalry**: Charge (+5% cavalry attack) + Swift Charge (+5% speed)
- Nhánh **Peacekeeping**: Killing Machine + Domination
- Talent đặc biệt: **Counter Surge** — counter attack bonus tăng thêm 5%, speed buff kéo dài 1 giây

## Vấn đề khi tự dùng Saladin thủ công

Counter-attack mechanic lãng phí nếu:

- **March đứng yên**: counter-attack strongest khi march đang move — enemy hit moving target phát sinh counter damage cap. Thủ công thường stop march sau khi giao chiến với rợ
- **Speed buff không tận dụng**: +25% speed sau cast cần được dùng để reposition ngay — thủ công phản ứng chậm, speed buff hết trước khi reposition xong
- **Night miss**: Saladin open field farm không self-heal — manual mất downtime hospital ban đêm

## Bot V1/V2 làm gì khác

**V1 Cơ Bản 750.000đ** và **V2 Cao Cấp 900.000đ** với Saladin:

- **Continuous march loop**: V1 không stop march sau combat — Saladin march liên tục qua rợ clusters, counter-attack mechanic active toàn thời gian
- **Speed buff reposition**: V2 tận dụng window speed +25% để kite sang cluster tiếp theo ngay sau cast — không waste 1 giây
- **Counter damage tracking**: V1 monitor incoming damage để detect khi enemy stronger barb — auto-retreat trước khi troop loss spike
- **Sand Lion sync**: pet skill tự activate đúng trước combat, counter-attack +35% từ frame 0

| Setup | Troop Loss/100 rợ | Kill Rate/ngày |
|---|---|---|
| Saladin thủ công | ~18k troops | ~90 rợ |
| Saladin V1 bot | ~11k troops | ~150 rợ |
| Saladin V2 bot | ~9k troops | ~168 rợ |
| Theodora V1 bot | ~13k troops | ~141 rợ |

> 🤖 V1/V2 chạy Saladin counter-attack loop — troop loss tối thiểu, kite mechanic 24/7. [Xem gói →](/#packages) · V1 750k / V2 900k.

## Pet Sand Lion — tại sao mandatory với Saladin

- **Sand Lion passive**: Cavalry Attack +10% vs barbarians — stack với Saladin +30% cavalry attack
- **Sand Lion active**: Counter Attack +10% trong 8 giây (stack với Saladin passive +25%)
- **Tổng stack khi Sand Lion active**: Counter Attack +35% — không commander F2P nào đạt được với pet khác
- Iron Wolf (rally) và Hawk (archer) không benefit Saladin open field

## So sánh cavalry F2P

| Commander | Cavalry Atk | Counter Atk | Speed | F2P | Tier |
|---|---|---|---|---|---|
| **Saladin** | **+30%** | **+25%** | **+25%** | **✅** | **S (F2P)** |
| Cao Cao | +20% | Không | +20% | ✅ | A+ |
| Aethelflaed | +25% | Không (debuff) | +20% | ✅ (semi) | A+ |
| Minamoto | +25% | Không | +10% | Không | A |

Xem thêm: [Cavalry Tier List RoK 2026 →](/blog/commander-tier-list-cavalry-rok-2026) và [Best Free Commanders →](/blog/best-free-commanders-rok-2026-no-recruit).

## FAQ

### Saladin pair với ai tốt nhất trong bot?
Secondary Cao Pi (skill damage +25%) hoặc Theodora (cross-type nhưng healing útil). Bot V1/V2 tự chọn pair phù hợp với commanders bạn có.

### Saladin có dùng rally được không?
Không phải rally lead meta. Saladin secondary cho Mehmed rally là viable (cavalry attack stack) nhưng Cao Pi secondary tốt hơn về skill damage. [KvK Rally Lead Rotation →](/blog/kvk-rally-lead-commander-rotation-rok-2026).

### V1 đủ hay cần V2 với Saladin?
V1 đủ cho continuous march loop. V2 thêm speed-kite reposition — nên chọn V2 nếu budget cho phép để tận dụng speed buff window.

## Bắt đầu ngay

**V1 Cơ Bản 750.000đ/tháng** = Saladin open field tối ưu:
- Continuous march loop — counter-attack mechanic always active
- Sand Lion pet sync, auto-retreat khi detect barb tier quá cao
- 150 rợ/ngày với troop loss thấp nhất F2P

**V2 900k** = speed-kite reposition thêm, 168 rợ/ngày.

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Cavalry Commander Tier List RoK 2026](/blog/commander-tier-list-cavalry-rok-2026)
- [Best Free Commanders RoK 2026 — No Recruit](/blog/best-free-commanders-rok-2026-no-recruit)
- [Aethelflaed Hidden Tech Guide — Cavalry Sleeper](/blog/aethelflaed-hidden-tech-guide-rok-2026)
  `,
};
