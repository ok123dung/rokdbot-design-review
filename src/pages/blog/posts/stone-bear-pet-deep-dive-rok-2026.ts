import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "stone-bear-pet-deep-dive-rok-2026",
  title: "Stone Bear Pet Deep Dive RoK 2026 — Infantry Tank Pair Charles Martel/Trajan",
  description: "Stone Bear biến garrison thành fortress thực sự — +15% DEF +12% HP khi pair Charles Martel. Infantry tank setup, cơ chế garrison context, pair Trajan open field, và cách bot V1/V3 tối ưu feed cho defender.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Garrison Của Bạn Đang Mỏng Hơn 15% So Với Tier 3 Stone Bear

Khi enemy rally vào city hay flag, kết quả không chỉ phụ thuộc commander — nó phụ thuộc **garrison buff stack**. Charles Martel max talent tree cho một mức DEF nhất định. Nhưng thiếu Stone Bear tier 3: bạn đang tự bỏ **+15% garrison DEF + 12% HP** — con số đó là ranh giới giữa rally bị phá sau 2 hit hay 3 hit.

Stone Bear ít được nhắc đến vì nó không flashy như Iron Wolf hay Hawk. Không buff ATK, không mở rộng range. Stone Bear chỉ làm 1 việc: **giữ city sống lâu hơn**. Trong KvK khi enemy rally 1.5M+ power vào flag — 1 hit thêm có nghĩa là reinforcement kịp đến.

## Cơ Chế Stone Bear — Garrison Context Only

Stone Bear passive chỉ active **khi equip garrison commander đang defend**. Không apply trong field battle, không apply khi march ra ngoài.

**Tier buff breakdown:**
- Tier 1: +5% garrison DEF / +4% garrison HP
- Tier 2: +9% garrison DEF / +8% garrison HP
- Tier 3: +14-15% garrison DEF / +11-12% garrison HP
- Tier 4 (max): +18% garrison DEF / +15% garrison HP + counter-rally passive

**Tier 4 active (rare, event material):**
Counter khi garrison bị rally hit — chance debuff enemy march 10% ATK giảm trong 30 giây. Không guaranteed nhưng khi trigger thì significant cho rally tanking.

**Điều kiện active:**
- Pet phải equip primary garrison commander
- Commander phải đang ở trong garrison (không march ra)
- City hoặc flag phải đang bị tấn công (buff stack thêm khi combat bắt đầu)

Nếu Charles Martel march ra field với Stone Bear = pet inactive hoàn toàn. Stone Bear + garrison là pair không thể tách.

## Pair Commander Tối Ưu

### Charles Martel — Best In Slot Garrison

Charles Martel passive tăng garrison DEF mỗi 3 giây trong combat (stacking up đến cap). Stack này + Stone Bear tier 3 = garrison DEF tăng cực nhanh đầu combat khi rally bắt đầu.

**Tại sao pair này mạnh nhất:**
- Charles passive DEF stack + Stone Bear DEF buff = double-layered defense
- Charles HP bonus + Stone Bear HP buff = city HP pool cao nhất game
- Enemy rally trung bình cần 2-3 hit thay vì 1-2 hit để phá garrison Charles + Stone Bear tier 3

Talent tree sync: Garrison tree maxed, lấy DEF nodes và HP nodes trước. Không cần Peacekeeping hay Cavalry nodes cho defender pure build.

### Trajan — Infantry Tank Field + Garrison Hybrid

Trajan buff infantry DEF + active skill debuff enemy. Stone Bear pair với Trajan trong garrison context cho:
- Garrison DEF: Stone Bear +14% + Trajan passive infantry DEF
- Enemy debuff: Trajan active giảm enemy ATK trong garrison combat

Trajan + Stone Bear tier 3 là lựa chọn tốt hơn Charles Martel nếu bạn muốn commander vừa defend city vừa ra field occasional (Trajan infantry có giá trị trong field battle, Charles Martel ít hơn).

### Leonidas I — Garrison Wall

Leonidas buff garrison troop HP + DEF khi defenders số ít hơn attacker (underdog bonus). Stone Bear + Leonidas = underdog buff phát huy tối đa khi defend flag nhỏ bị solo-rally. Niche nhưng mạnh trong scenario cụ thể: defend outpost KvK.

## So Sánh Pair Stone Bear

| Commander | Stone Bear synergy | Tốt nhất cho | DEF total estimate |
|---|---|---|---|
| Charles Martel | DEF stack × passive | City garrison main | +28-32% DEF vs no pet |
| Trajan | DEF + field hybrid | Flag defend + occasional field | +22-26% DEF |
| Leonidas I | HP underdog | Outpost defend | +20-25% HP |
| Archer commander | Không có | Không nên dùng | ~0% |

## Vấn Đề Tự Manage Garrison Pet Thủ Công

Defender setup thường bị bỏ quên vì focus vào offensive. Nhưng **không equip Stone Bear** khi enemy rally vào = miss toàn bộ buff stack, garrison mỏng đi 15% ngay từ đầu combat.

Vấn đề thực tế:
- **Quên swap pet:** Player có nhiều pet, đang dùng Iron Wolf cho field farming, quên swap sang Stone Bear khi về defend
- **Pet đang equip commander march ra:** Charles Martel với Stone Bear vừa march ra farm rợ = pet inactive. Enemy rally lúc march ra = city không có buff
- **Feed nhầm stat:** Stone Bear cần feed **Combat-Garrison stat**, không phải Combat-Field. Nhiều player feed nhầm, tier-up chậm hơn hoặc buff không đúng context

> 🤖 Bot V1/V3 RokdBot auto-swap pet về Stone Bear khi detect garrison threat, auto-feed đúng Garrison stat mỗi ngày. Charles Martel không bao giờ march ra khi city đang bị threat. [Xem V1 →](/#packages) · 750.000đ/tháng.

## Bot V1/V3 Làm Gì Khác

**V1 Cơ Bản (750k) — Defender setup:**
- Auto-equip Stone Bear khi commander ở garrison
- Alert khi city bị rally, commander không ở garrison
- Daily feed Stone Bear đúng Garrison stat

**V3 Siêu Cấp (1.2M) — Hybrid defend + offense:**
- Auto-manage pet swap: Stone Bear khi defend, Iron Wolf / Hawk khi march ra
- Commander patrol logic: Charles Martel không march ra khi city HP <80%
- Multi-pet management theo context

## So Sánh Thực Tế Garrison Survivability

| Setup | Rally hits to break | Reinforcement window |
|---|---|---|
| Charles Martel, không pet | 1-2 hit (rally 1.5M) | ~30-45 giây |
| Charles Martel + Stone Bear tier 2 | 2 hit | ~60-75 giây |
| Charles Martel + Stone Bear tier 3 | 2-3 hit | ~75-100 giây |
| Charles Martel + Stone Bear tier 3 + V3 bot | 2-3 hit + swap tự động | Không miss defend |

Reinforcement window tăng 30-60 giây = đủ thời gian để alliance reinforcement đến. Đó là sự khác biệt giữa city sống và city bị phá trong KvK.

## FAQ

### Stone Bear có buff khi defend flag (không phải city) không?

Có. Garrison context apply cả city lẫn flag nếu commander đang ở trong. Flag thường ít HP hơn city nên Stone Bear buff quan trọng hơn ở flag.

### Nếu tôi không chơi defender role thì Stone Bear có vô dụng không?

Nếu pure aggressor, Stone Bear ít value. Nhưng trong KvK, mọi kingdom đều cần defender cho flag và wonder. 1 người build Stone Bear tier 3 defend flag = tiết kiệm reinforcement của 5 người khác.

### Stone Bear tier 3 mất bao lâu F2P?

Tương tự Iron Wolf — 4-6 tháng active farming event, kingdom shop, pet expedition. Priority pet dựa trên role: defender priority Stone Bear, attacker priority Iron Wolf hoặc Hawk.

## Bắt Đầu Ngay

Stone Bear tier 3 + Charles Martel = garrison bền nhất game Season 8:
- +15% DEF / +12% HP
- Enemy rally cần 2-3 hit thay vì 1-2 hit
- Reinforcement window +30-60 giây

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Pet System Tier List RoK 2026 — Iron Wolf vs Hawk vs Stone Bear](/blog/pet-system-tier-list-rok-2026)
- [KvK Phase 3 Final Battle Altar Capture RoK 2026](/blog/kvk-phase-3-final-battle-altar-capture-rok-2026)
- [KvK Season 8 Complete Guide RoK 2026](/blog/kvk-season-8-complete-guide-rok-2026)
  `,
};
