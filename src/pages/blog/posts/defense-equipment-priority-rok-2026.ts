import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "defense-equipment-priority-rok-2026",
  title: "Defense Equipment Priority RoK 2026 — Set Combat Defense Best Order",
  description: "Defense equipment set RoK 2026: slot nào craft trước, legendary vs mythic defense ROI, material farming path, và V3 bot tự động farm expedition + strange realm để không miss material drop.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Defense Equipment — Sai Slot = Waste 3 Tháng Material

Craft defense equipment không đúng thứ tự = 3 tháng farm material cho 1 slot không priority — trong khi 2 slot quan trọng hơn vẫn empty.

Defense equipment set không phải "craft tất cả, craft từ từ". Đó là **priority order cứng** dựa trên stat value per slot.

## Defense Stats — Slot Nào Cho Bao Nhiêu

Defense set trong RoK có 6 slots:

| Slot | Stat Primary | Ảnh Hưởng |
|---|---|---|
| Helmet | Defense % + HP % | Garrison survivability |
| Armor (Chest) | Defense % lớn nhất | Combat damage reduction |
| Legs | HP % | Total health pool |
| Weapon | Attack % (defense set có hybrid) | Counter-damage |
| Gloves | Defense % + March Speed | Field survival |
| Boots | HP % + Defense % | Secondary defense layer |

**Armor (Chest)** là slot có Defense % cao nhất trong set. **Helmet** thứ 2. Legs + Boots là HP pool. Weapon/Gloves là hybrid — ít priority nhất trong defense focus.

## Priority Craft Order — Defense Set

### Tier 1 (Craft Trước)
1. **Armor / Chest** — highest Defense % stat, core của set
2. **Helmet** — second highest Defense %, pair với Armor tạo base defense layer

Hai slot này tạo ~55-65% tổng defense bonus của full set. Craft 2 cái này trước → đã có majority benefit mà chỉ tốn 1/3 material tổng.

### Tier 2 (Sau Khi Có Tier 1)
3. **Legs** — HP % lớn, garrison long fight
4. **Boots** — HP + Defense secondary

> 📌 Xem thêm: [Equipment Crafting Priority RoK 2026](/blog/equipment-crafting-priority-rok-2026) cho toàn bộ equipment framework theo role.

### Tier 3 (Cuối Cùng)
5. **Gloves** — march speed + defense hybrid (ít cần cho garrison focus)
6. **Weapon** — attack hybrid trong defense set (only craft nếu mày dùng defense set cho open field)

## Legendary vs Mythic — Khi Nào Upgrade

Legendary → Mythic tốn material gấp **3-5 lần**. ROI:

| Quality | Defense Bonus (example Armor) | Material Cost |
|---|---|---|
| Legendary | +20% Defense | Baseline |
| Mythic | +27% Defense | 3-5× Legendary |

+7% Defense thêm từ Mythic không phải nhỏ — nhưng so với cost chênh lệch, **upgrade Mythic chỉ worthwhile khi đã có full Legendary set trước**.

Strategy: craft **full Legendary 6 slots** → upgrade Armor Mythic → Helmet Mythic → tiếp tục theo priority order.

> 📌 Xem thêm: [Legendary Equipment Mythic Priority RoK 2026](/blog/legendary-equipment-mythic-priority-rok-2026) cho upgrade path whale và non-whale.

## Material Farming Path

Defense equipment material đến từ:

| Nguồn | Material Type | Drop Rate |
|---|---|---|
| Strange Realm | Defense material phổ biến | High |
| Expedition | Rare defense mat | Medium |
| Equipment chests (event) | Random | Low/event |
| Crafting salvage | Fragments | Low |

**Strange Realm daily** là nguồn stable nhất. Expedition 50 stamina/ngày cho rare material không bỏ ngày nào.

> 📌 Xem thêm: [Library Tech Tree Must-Have RoK 2026](/blog/library-tech-tree-must-have-rok-2026) — research Equipment slot unlock trong Library tree.

> 🤖 Bot V3 tự động run Strange Realm daily + Expedition stamina không bỏ ngày nào — material defense farming passive 24/7. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Defense Set Garrison vs Open Field — Khác Nhau

Defense set **garrison** (phòng city): ưu tiên Defense % + HP %, không cần March Speed.

Defense set **open field** (survive khi bị đánh giữa map): cần Gloves March Speed để kite. Weapon attack hybrid có giá trị hơn.

Nếu mày **main garrison defender**: craft Armor → Helmet → Legs → Boots. Bỏ qua Weapon và Gloves đến khi 4 cái kia done.

Nếu mày **field player cần survive**: Armor → Gloves (March Speed) → Helmet → Boots → Legs → Weapon.

## FAQ

### Defense set có thể dùng cho rally tấn công không?

Không khuyến khích. Defense set tối ưu cho garrison và survival — không có attack% cho rally. Dùng attack set (Ares, Thor, Guan Yu tùy role) cho rally.

### Bao lâu để farm đủ material cho full Legendary defense set?

Strange Realm daily + Expedition daily: ~60-90 ngày với bot farm 24/7 không bỏ drop. Manual: 120-150 ngày vì miss nhiều daily session.

### Crafting cost về RSS có đáng không nếu đang T5 rush?

Không. Crafting dùng gold và material — không phải food/wood. Không conflict với T5 RSS demand. Có thể craft song song với T5 research nếu đủ material.

## Bắt Đầu

Defense equipment priority: Armor → Helmet → Legs → Boots. Không craft Gloves hay Weapon trước khi 4 cái kia done. Farm Strange Realm + Expedition daily để accumulate material — bot V3 làm tự động.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Equipment Crafting Priority RoK 2026](/blog/equipment-crafting-priority-rok-2026)
- [Legendary Equipment Mythic Priority RoK 2026](/blog/legendary-equipment-mythic-priority-rok-2026)
- [Library Tech Tree Must-Have RoK 2026](/blog/library-tech-tree-must-have-rok-2026)
  `,
};
