import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "aethelflaed-hidden-tech-guide-rok-2026",
  title: "Aethelflaed Hidden Tech Guide RoK 2026 — Stealth + Speed Cavalry Sleeper",
  description: "Aethelflaed bị underrate 2 năm — nhưng hidden tech 2026: Skill Debuff -10% enemy attack STACK với cavalry speed bonus, tạo 'kiting frame' bot V2 khai thác. Guide đầy đủ open field và peacekeeping applications.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Mechanic Aethelflaed bị bỏ qua 2 năm — và tại sao V2 bot là người đầu tiên khai thác đúng

Cộng đồng RoK coi Aethelflaed là "B-tier" vì không có rally passive hay garrison bonus. Nhưng có 1 mechanic không ai đọc kỹ tooltip: **skill debuff -10% enemy attack KHÔNG có cooldown riêng** — mỗi active skill cast đều apply debuff mới, stack 3 lần = **-30% enemy attack** đồng thời. Khi bot V2 chạy frame-perfect skill cycle, 3 stack đạt trong **9-12 giây** đầu combat. Enemy march bị -30% attack ngay từ đầu = troops Aethelflaed sống lâu gấp đôi. Đây là lý do users V2 dùng Aethelflaed thấy **troop loss giảm 40-50%** so với Theodora cùng march power.

## Cơ chế Aethelflaed

### Skill Active — "Lady of the Mercians"
- Debuff: Enemy Attack **-10%** trong 5 giây (stackable 3 lần)
- Buff: Friendly Troop Speed +20% trong 5 giây
- AOE radius: 350 units / 8 targets — lớn hơn Theodora, nhỏ hơn YSG

### Passive Key Stats (max expertise)
- Cavalry Attack: **+25%**
- Cavalry Speed: **+20%** — cho phép kite barb/enemy
- Peacekeeping Bonus: **+15% vs barbarians**

### Talent Tree Summary
"Speed-kite" build:
- Nhánh **Cavalry**: Swift Charge (+5% speed) + Armor Destroyer
- Nhánh **Peacekeeping**: Killing Machine + Domination
- Điểm đặc biệt: **Forced March** talent — speed buff duration +2 giây, stack duration tăng
- Không dùng nhánh garrison — Aethelflaed không phải defense commander

## Vấn đề khi tự chạy Aethelflaed thủ công

Hidden tech 3-stack debuff yêu cầu:

- **Skill cast liên tục trong 9-12 giây đầu**: rage phải cycle nhanh, không để gap giữa các cast. Thủ công khó maintain rage cycle này vì phải đồng thời drag march và watch rợ
- **Speed buff kiting**: +20% speed chỉ có ích nếu march di chuyển đúng hướng trong window — thủ công thường đứng yên, bỏ phí speed buff
- **Night window**: Aethelflaed thiếu self-heal như Lohar, hospital break thường xuyên — manual mất nhiều downtime

## Bot V2 làm gì khác

**V2 Cao Cấp 900.000đ/tháng** với Aethelflaed:

- **3-stack debuff trong 12 giây**: V2 monitor rage meter, trigger skill liên tục ngay khi rage = 1.000, đạt 3 stack nhanh nhất có thể
- **Speed-kite path**: trong window speed buff +20%, bot drag march theo đường cung quanh cluster rợ — pull thêm rợ vào AOE radius trong khi kite
- **Troop loss reduction**: 3-stack debuff + kite path = troop loss thực tế giảm 40-50% so với static farm
- **AP efficiency tăng**: ít troop loss → ít hospital break → nhiều farm time hơn mỗi ngày

| Setup | Troop Loss/ngày | Hospital Time/ngày | Net Farm Time |
|---|---|---|---|
| Aethelflaed thủ công | ~15k | ~3h | ~21h |
| Aethelflaed V2 bot | ~8k | ~1,5h | ~22,5h |
| YSG V2 bot | ~12k | ~2,5h | ~21,5h |

> 🤖 V2 chạy Aethelflaed 3-stack debuff cycle — troop loss -40%, farm time tối đa. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Pet cho Aethelflaed

- **Sand Lion**: Peacekeeping Attack +10% vs barbarians — stack tốt với Aethelflaed cavalry build
- Sand Lion level 5: Cavalry Speed +5% thêm — stack với Aethelflaed passive +20% speed
- Stone Bear benefit defense hơn — không phải meta cho Aethelflaed open field/peacekeeping

## So sánh open field sleeper commanders

| Commander | Speed Buff | Debuff Stack | AOE | Troop Loss Index |
|---|---|---|---|---|
| **Aethelflaed** | **+20%** | **-30% atk (3x)** | 350u | **Low (40% less)** |
| Genghis Khan | +15% | Không | Không | Medium |
| Cao Cao | +20% | -10% speed | Không | Medium |
| Minamoto | +10% | Không | 300u | High |

Aethelflaed sleeper tier — bị underrate vì community focus vào damage số, không quan tâm debuff stack mechanic. Xem: [Commander Tier List Cavalry →](/blog/commander-tier-list-cavalry-rok-2026).

## FAQ

### Aethelflaed có dùng được KvK field không?
Có — speed +20% và debuff -30% attack rất mạnh trong small-scale skirmish. Không phải rally lead nhưng secondary/solo field march excellent.

### Cần star mấy để 3-stack debuff hoạt động?
5 star (mở skill 5 — debuff mức tối đa -10%/stack). 4 star debuff -8%/stack, tổng -24% — vẫn tốt nhưng không đạt -30%.

### V2 hay V1 phù hợp với Aethelflaed?
V2 — V1 không có speed-kite path optimization. Khai thác đúng mechanic Aethelflaed cần V2 Combo+Luring. Xem thêm: [KvK Rally Lead Rotation →](/blog/kvk-rally-lead-commander-rotation-rok-2026).

## Bắt đầu ngay

**V2 Cao Cấp 900.000đ/tháng** = Aethelflaed hidden tech unlocked:
- 3-stack debuff cycle trong 12 giây đầu combat
- Speed-kite path — pull rợ trong motion
- Troop loss -40%, net farm time +1,5h/ngày
- Gem mining + auto heal bao gồm

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Cavalry Commander Tier List RoK 2026](/blog/commander-tier-list-cavalry-rok-2026)
- [KvK Rally Lead Commander Rotation 2026](/blog/kvk-rally-lead-commander-rotation-rok-2026)
- [AI Commander Rotation V3 — Skip 6 tháng farm expertise](/blog/ai-commander-rotation-v3-rok)
  `,
};
