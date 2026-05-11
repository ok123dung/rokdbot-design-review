import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "martinus-archer-guide-rok-2026",
  title: "Martinus Archer Guide RoK 2026 — Anti-Infantry F2P Sleeper",
  description: "Martinus RoK 2026: archer anti-infantry passive bị bỏ qua, skill damage burst, F2P build tối ưu counter infantry, và bot V1 farm barb + counter infantry 24/7. Sleeper pick tier A+ không ai nhắc đến.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Martinus bị bỏ qua 3 năm — và đó là lý do mày nên dùng ngay bây giờ

Tier list Reddit nói Martinus A. Discord server nói dùng Yi Seong-Gye hoặc Ramesses. Kết quả: 95% archer players không bao giờ build Martinus. Nhưng nếu enemy kingdom của mày heavy infantry garrison?

Martinus có **anti-infantry passive cao nhất tier free** — damage vs infantry +30% passive, stack với skill debuff. Trong meta KvK 2026 khi infantry garrison là chiến thuật phổ biến, Martinus là counter F2P không ai chuẩn bị.

## Cơ chế Martinus

### Skill Active — "Holy Arrow"
- Gây **1.000-1.400 damage factor** — single target high burst
- Debuff: **Enemy Infantry Defense -20%** trong 5 giây
- Buff: **Friendly Archer Attack +15%** sau cast — buff cả march

### Passive Key Stats (max expertise)
- Archer Attack: **+30%**
- Damage vs Infantry: **+30%** — passive, không cần activate
- Skill Damage: **+20%** khi march > 80% archer composition

### Talent Tree F2P Anti-Infantry
Nhánh **Archer** → **Peacekeeping** nhẹ:
- Archer: Archery Mastery + Arrows of Iron → **Bull's Eye** (damage bonus)
- Optional: Killing Machine 1 điểm (giảm AP cost barb)
- Focus: max Archer branch trước, peacekeeping chỉ cần 5-8 điểm để Killing Machine

## Vấn đề dùng Martinus thủ công

Martinus tốt nhất khi **target specific** — enemy infantry garrison hoặc infantry march. Thủ công:

- Phải scan map để tìm infantry garrison target
- Phải avoid cavalry target (Martinus không có anti-cavalry bonus — waste potential)
- Miss target timing: infantry garrison buff tạm thời (Shield Formation event) → Martinus window thu hẹp

Bot V1 tự detect troop composition của enemy target, chỉ send Martinus khi target là infantry.

## Bot V1 làm gì khác

**V1 Cơ Bản 750.000đ/tháng** với Martinus:

- **Target composition scan**: V1 detect troop type của enemy march/garrison trước khi intercept — chỉ dùng Martinus vs infantry target
- **Peacekeeping hybrid**: khi không có infantry target, Martinus farm barb lv 20-25 nhẹ (archer vs barb: ROI ổn)
- **Skill timing**: Holy Arrow cast đúng frame sau khi infantry debuff từ secondary land — stack damage
- **24/7 patrol**: detect infantry march tiến vào territory → intercept tự động

| Scenario | Thủ công | V1 Bot |
|---|---|---|
| Infantry target hit rate | 50% (manual scan) | 90%+ (auto scan) |
| Damage vs infantry/hit | 70% potential | 95%+ potential |
| Barb farm khi idle | Không | Auto |

> 🤖 V1 Martinus tự detect infantry target và intercept — không waste đạo vào cavalry. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Pair tốt nhất với Martinus

- **Martinus (lead) + Seondeok (secondary)**: double archer debuff infantry → infantry enemy nhận -20% def (Martinus) + -15% def (Seondeok) stacked
- **Martinus (lead) + Yi Seong-Gye (secondary)**: YSG AOE + Martinus single target burst = archer hybrid. Xem: [Yi Seong-Gye Guide →](/blog/yi-seong-gye-guide-rok-2026)
- **Martinus (secondary) + Cao Pi (lead)**: không standard nhưng Cao Pi skill damage +25% boost Martinus burst window. Xem: [Cao Pi Guide →](/blog/cao-pi-guide-rok-2026)

## Archer tier trong meta 2026

| Commander | vs Infantry | AOE | F2P | Archer Tier |
|---|---|---|---|---|
| **Martinus** | **+30% + -20% def** | Không | **✅** | **A+ (sleeper)** |
| Yi Seong-Gye | Không specific | ✅ AOE | Không | S+ |
| Seondeok | vs cavalry | Không | ✅ | S (anti-cav) |
| Ramesses II | +20% | ✅ | Không (whale) | S+ |

Martinus không top S+ tier — nhưng là **specialist anti-infantry F2P** không có đối thủ ở tier free. Xem đầy đủ: [Archer Tier List RoK 2026 →](/blog/archer-tier-list-rok-2026).

## FAQ

### Martinus hay Seondeok cho archer account F2P?
Tùy enemy meta: enemy heavy cavalry → Seondeok. Enemy heavy infantry garrison → Martinus. Lý tưởng: build cả 2 (cả 2 đều free), swap theo situational.

### Martinus có dùng được garrison defense không?
Có nhưng suboptimal — không có garrison passive. Tốt nhất dùng march open field counter infantry.

### V1 có tự swap giữa Martinus và Seondeok tùy enemy không?
V1 detect troop type và tự pair commander phù hợp. Setup: cả 2 commander trong roster, V1 chọn đúng theo target.

## Bắt đầu ngay

**V1 Cơ Bản 750.000đ/tháng** = F2P archer specialist không tốn gem:
- Martinus auto-intercept infantry target 24/7
- Peacekeeping barb farm khi không có target
- Auto gem mine + daily claim

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Seondeok Archer Guide RoK 2026 — Anti-Cavalry Counter](/blog/seondeok-archer-guide-rok-2026)
- [Archer Commander Tier List RoK 2026](/blog/archer-tier-list-rok-2026)
- [Yi Seong-Gye Guide RoK 2026 — Archer AOE Meta](/blog/yi-seong-gye-guide-rok-2026)
  `,
};
