import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "yi-seong-gye-guide-rok-2026",
  title: "Yi Seong-Gye Archer AOE Guide RoK 2026 — Skill Range Lớn Nhất Game + Pet Hawk",
  description: "Yi Seong-Gye có skill AOE range lớn nhất RoK — 1 cast wipe sạch 8-12 con rợ cluster. Guide talent tree, pet Hawk combo, so sánh V2/V3 bot performance và tại sao YSG là backbone peacekeeping meta 2026.",
  date: "2026-05-11",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Con số khiến mọi peacekeeping player phải dừng lại: skill range YSG lớn hơn 60% so với Theodora

Theodora AOE radius: **300 units**. Yi Seong-Gye AOE radius: **480 units** (level 5). Với pet Hawk level 5: **576 units** — gần gấp đôi Theodora. Trong khi cluster rợ thường rải trong radius 400-500 units, YSG là commander DUY NHẤT đủ cover toàn bộ cluster 1 cast. Không cần luring phức tạp. Không cần stack rợ hoàn hảo. Cast là wipe.

## Cơ chế Yi Seong-Gye

### Skill Active — "Rain of Arrows"
- AOE damage: **1.200-2.000 damage factor** (range tùy target count trong radius)
- **Range 480 units** — lớn nhất trong tất cả commander peacekeeping
- Hits tối đa **12 targets** đồng thời (so với Theodora 6, Boudica 8)
- Buff: Archer Attack +35% sau cast trong 5 giây

### Passive Key Stats (max expertise)
- Archer Attack: **+40%**
- Skill Damage: **+25%**
- Peacekeeping Bonus: **+20% attack khi fight barbarians**

### Talent Tree Summary
- Nhánh **Archer**: Eagles Eye (+5% archer attack) + Whistling Arrows (+3% skill damage)
- Nhánh **Peacekeeping**: Killing Machine + Domination + Razor Sharp
- Cuối tree: **Master of Arrows** — tăng skill damage thêm 10%, reduce cooldown 0.5s

## Vấn đề khi tự pair YSG thủ công

YSG mạnh nhất khi **skill fire vào đúng peak cluster** — nhưng manual có 3 vấn đề:

- **Auto-cast không chờ cluster**: game auto-fire khi rage đủ, không quan tâm rợ có cluster chưa. Với range rộng, phí không nhiều — nhưng vẫn miss 20-30% potential kills mỗi cast
- **Night window miss**: YSG session hiệu quả nhất lúc 1-4am khi map rợ respawn đầy. Manual không thể duy trì
- **Pair management**: YSG cần secondary đúng (Cao Pi/Tomyris) — thủ công thường quên swap, dẫn đến talent tree conflict

## Bot V2/V3 làm gì khác

**V2 Cao Cấp 900.000đ** và **V3 Siêu Cấp 1.200.000đ** chạy YSG với:

- **Skill delay optimization**: delay cast 0,3-0,8 giây sau rage full để chờ cluster peak — tăng kill/cast 25-35%
- **Luring path**: drag march dọc rợ line trước cast, tận dụng full 480-unit radius
- **Pet Hawk activation sync**: pet skill tự activate đúng trước YSG active skill — bonus stack hoàn hảo
- **Night farming**: chạy 1-4am không gián đoạn

| Setup | Kill/cast (avg) | Kill/ngày |
|---|---|---|
| YSG thủ công (auto-cast) | 4-6 rợ | 80-120 |
| YSG thủ công (manual cast) | 7-9 rợ | 150-180 |
| **V2 Bot (YSG + Hawk)** | **9-12 rợ** | **~217** |
| V3 Bot (2 đạo YSG chain) | 9-12 rợ × 2 | ~430 |

> 🤖 V2/V3 chạy YSG + Hawk với skill delay optimization — kill/cast tối đa. [Xem gói →](/#packages) · V2 900k / V3 1,2M.

## Pet Hawk — tại sao không thể thiếu với YSG

Pet Hawk là pet **duy nhất** tăng skill range:

- **Hawk passive**: Archer Skill Range +20% — YSG range 480 → **576 units**
- **Hawk active** (level 5): Skill Damage +15% trong 8 giây
- **Synergy**: Range rộng hơn = cluster rộng hơn vào AOE = kills nhiều hơn mỗi cast

Stone Bear (defense) và Iron Wolf (rally) không benefit YSG peacekeeping. Sand Lion (+cavalry) là wasted slot với YSG archer.

## So sánh với commander khác — Peacekeeping Tier

| Commander | AOE Range | Max Targets | Skill Damage | Tier |
|---|---|---|---|---|
| **Yi Seong-Gye** | **480u (+Hawk: 576u)** | **12** | **+25%** | **S+** |
| Theodora | 300u | 6 | +15% | S |
| Boudica Prime | 350u | 8 | +20% | S |
| Lohar | N/A (single target) | 1 | +30% | A+ (PvE focus) |
| Sun Tzu | 260u | 5 | +10% | A |

YSG là backbone peacekeeping meta 2026. Xem thêm: [Cao Pi vs Yi Seong-Gye So Sánh →](/blog/cao-pi-vs-yi-seong-gye-comparison-rok-2026).

## FAQ

### YSG cần expertise không hay 5 star đủ rồi?
5511 (skill 5, skill 5, skill 1, skill 1) đủ cho farming. Expertise mở Full Salvo — nên có nếu bạn 2+ năm chơi. Archer pair guide: [Archer Commander Pairing Guide →](/blog/archer-commander-pairing-guide-rok-2026).

### YSG pair với ai tốt nhất trong bot?
Secondary Cao Pi (cavalry damage không conflict với YSG archer) hoặc Tomyris (poison + AOE stack). Bot V2/V3 tự chọn pair phù hợp với commander bạn có.

### YSG có dùng được rally không?
Không phải meta rally. YSG là peacekeeping specialist. Cho rally dùng Mehmed II — [Mehmed II Guide →](/blog/mehmed-ii-guide-rok-2026).

## Bắt đầu ngay

**V2 Cao Cấp 900.000đ** = sweet spot cho YSG farming:
- 1 đạo YSG + Hawk chain với skill delay optimization
- Auto-heal + luring path + night window
- 217 rợ/ngày trung bình

**V3 1.200.000đ** = 2 đạo YSG chain, 430 rợ/ngày.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Archer Commander Pairing Guide RoK 2026](/blog/archer-commander-pairing-guide-rok-2026)
- [Cao Pi vs Yi Seong-Gye — Commander Comparison](/blog/cao-pi-vs-yi-seong-gye-comparison-rok-2026)
- [AI Commander Rotation V3 — Skip 6 tháng farm expertise](/blog/ai-commander-rotation-v3-rok)
  `,
};
