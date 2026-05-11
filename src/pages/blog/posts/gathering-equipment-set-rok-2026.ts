import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "gathering-equipment-set-rok-2026",
  title: "Gathering Equipment Set RoK 2026 — Charles Martel Speed +25% Build",
  description: "Gathering equipment set RoK 2026: slot priority, Charles Martel +25% speed build, material farming path, và V1 bot tự động gather với equipment optimize để tối đa RSS throughput không cần online.",
  date: "2026-05-11",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Gathering Equipment — Thứ Mà 90% Player Không Craft

Mày đang gather tile lv 5 với commander không có gathering talent tree, không có gathering equipment, không có gathering buff — và thắc mắc tại sao RSS vào chậm.

Gathering equipment set tăng **gathering speed 25-40%** so với không dùng. Nghĩa là cùng 1 tile lv 5, cùng 1 march — mày lấy được nhiều hơn hoặc về nhanh hơn để đi tile tiếp.

Đây là equipment set ít tốn nhất nhưng ROI cao nhất cho bất kỳ player nào dưới power 50M.

## Gathering Equipment Stats — Slot Priority

Gathering set focus vào 2 stats:

- **Gathering Speed %** — cướp RSS nhanh hơn trên tile
- **Load Capacity** — mang được nhiều hơn mỗi trip

| Slot | Stat Primary | Priority |
|---|---|---|
| Helmet | Gathering Speed % | 1 |
| Armor | Load Capacity + Gathering Speed | 2 |
| Legs | Load Capacity lớn nhất | 3 |
| Boots | Gathering Speed % | 4 |
| Gloves | Load Capacity + March Speed | 5 |
| Weapon | Attack hybrid (ít giá trị gathering) | 6 |

Craft **Helmet trước** (gathering speed cao nhất), sau đó Armor, Legs, Boots. Gloves cuối. Weapon skip nếu không cần combat.

## Charles Martel +25% Build — Setup Hoàn Chỉnh

Charles Martel là best gathering commander F2P. Talent tree gathering maxed = **+25% gathering speed** — stack với equipment.

**Commander setup:**
- Primary: Charles Martel (full gathering talent)
- Secondary: Scipio Africanus (+10% gathering speed passive) **hoặc** Joan of Arc (food bonus)

**Equipment stack:**
- Full gathering set (Legendary minimum)
- Gathering speed total với CM + Scipio + full set = **+45-55% gathering speed** vs bare march

**Result:** tile lv 5 gather time giảm ~30%. Với 4 march 24/7 bot: **RSS throughput tăng 1.3-1.5x** vs không dùng gathering equipment.

> 📌 Xem thêm: [Equipment Crafting Priority RoK 2026](/blog/equipment-crafting-priority-rok-2026) cho overview toàn bộ equipment types.

## Material Farming — Gathering Equipment Dễ Nhất Trong Các Set

Gathering equipment material là loại **phổ biến nhất** trong RoK:

| Nguồn | Material | Drop Rate |
|---|---|---|
| Barbarian lv 1-5 (barb drop) | Common mat | Very high |
| Expedition stage thấp | Uncommon mat | Medium |
| Alliance gift chest | Random mat | Low |
| Silver chest (event) | Equipment fragment | Low |

So với defense/attack equipment, gathering mat farm được từ barb thường — không cần Strange Realm hay Expedition tier cao. F2P từ ngày 30-60 đã có thể craft Legendary gathering set.

> 📌 Xem thêm: [Auto Build Research RoK VIP Template](/blog/auto-build-research-rok-vip-template) — auto-claim daily quest cũng drop equipment chest thường xuyên.

## Load Capacity vs Gathering Speed — Priority Theo Situation

**Prioritize Gathering Speed** khi:
- Tile bị cạnh tranh cao (tile lv 5 server đông)
- Bot chạy nhiều march parallel — xong nhanh để rotate tile tiếp
- Peace time với ít player active

**Prioritize Load Capacity** khi:
- Gather tile cô lập không ai compete
- KvK gather rush — mỗi trip muốn max tải
- Farm acc gather distance xa main city

> 🤖 Bot V1 tự gather 4 march đồng thời, auto-equip gathering set trước mỗi march, auto-return và re-dispatch. Gathering Equipment setup 1 lần — bot xử lý còn lại 24/7. [Xem V1 →](/#packages) · 750.000đ/tháng.

## RSS Throughput Math — Có vs Không Equipment

| Setup | RSS/giờ/march | RSS/ngày (4 march) |
|---|---|---|
| Không gathering eq | ~400.000 | ~38M |
| Full Legendary gathering eq | ~520.000 | ~50M |
| Full Legendary eq + CM +25% | ~620.000 | ~60M |
| Full Legendary eq + CM + Scipio | ~680.000 | ~65M |

**+27M RSS/ngày** giữa "không có gì" và "optimal setup" — từ cùng 4 march, cùng tile lv 5.

Với 30 ngày: +810M RSS chênh lệch. Đủ để cover ~5-7 ngày T5 training thêm.

## FAQ

### Gathering equipment có phải craft Legendary không hay Rare đủ rồi?

Rare gathering set cho ~60% benefit của Legendary. Nếu material ít: craft Rare Helmet + Armor trước (2 slot quan trọng nhất), sau đó upgrade Legendary khi có đủ mat.

### Có thể swap equipment giữa combat và gathering không?

Có. Equipment swap không có cooldown trong RoK. Bot V1 tự switch gathering set trước gather march và combat set trước attack — nếu config đúng.

### Farm acc có cần gathering equipment không?

Có — farm acc **ưu tiên** gathering equipment hơn main vì 100% time của farm acc là gather. Full gathering set trên farm acc là investment đáng nhất.

## Bắt Đầu

Gathering equipment: craft Helmet → Armor → Legs → Boots. Pair Charles Martel + Scipio. Bot V1 tự động hóa toàn bộ gather loop 24/7.

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Equipment Crafting Priority RoK 2026](/blog/equipment-crafting-priority-rok-2026)
- [Academy Research Priority RoK 2026](/blog/academy-research-priority-rok-2026)
- [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026)
  `,
};
