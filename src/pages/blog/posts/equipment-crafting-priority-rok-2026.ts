import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "equipment-crafting-priority-rok-2026",
  title: "Equipment Crafting Priority RoK 2026 — Legendary Mythic Slot Order",
  description: "Equipment crafting priority RoK 2026: legendary vs mythic slot ROI, crafting order tối ưu theo role, material farming path, và bot V3 tự động farm material 24/7 không miss expedition + strange realm.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Bạn Craft Nhầm Slot Và Mất 3 Tháng Material

Equipment RoK có 6 slot: Helm, Chest, Legs, Gloves, Weapon, Accessory. Mỗi slot có tầng: Normal → Advanced → Elite → Epic → Legendary → Mythic.

Sai lầm phổ biến nhất: **craft đều tất cả slot lên Epic** trước khi có Legendary bất kỳ slot nào.

Kết quả: 6 slot Epic = combat stat tổng ~240% base. 1 slot Legendary + 5 slot Epic = combat stat tổng ~260% base. **Tốt hơn**. Và tốn ít material hơn nếu biết slot nào upgrade trước.

Bài này là roadmap crafting từ Epic đến Mythic — slot nào trước, tại sao.

## Equipment Stat Scale — Tại Sao Legendary Không Linear

Epic → Legendary không phải +20% stat. Là **+40-60% stat per slot** cho slot chính:

| Slot | Epic Stat | Legendary Stat | % Increase |
|---|---|---|---|
| Weapon | ATK +15% | ATK +25% | +67% |
| Chest | DEF +12% | DEF +20% | +67% |
| Helm | HP +10% | HP +18% | +80% |
| Legs | March Speed +8% | March Speed +15% | +88% |
| Gloves | ATK +8% | ATK +15% | +88% |
| Accessory | Varies | Varies | +50-100% |

**Một slot Legendary Weapon = +10% ATK so với Epic**. 10% ATK trên march 150.000 T4 = 15.000 troop equivalent damage. Trong KvK rally: có thể quyết định thắng/thua trận sát.

## Crafting Priority — Slot Nào Trước

### Combat Set Priority (KvK / Rally)

1. **Weapon** (ATK primary) → Legendary trước
2. **Helm** (HP, survive longer) → Legendary second
3. **Chest** (DEF, nhận ít damage) → Legendary third
4. **Gloves** (ATK secondary) → Legendary fourth
5. **Legs + Accessory** → cuối cùng

Lý do Weapon trước: ATK scale linear với damage dealt. HP và DEF diminishing return sau một ngưỡng (troop chết vẫn thế, chỉ chết sau thêm vài lần hit).

### Gathering Set Priority (Economy / F2P)

1. **Legs** (March Speed → gather tile nhanh hơn, recall nhanh hơn) → Epic đủ, không cần Legendary sớm
2. **Accessory** (Gather Rate bonus tùy set) → Legendary nếu full gather set
3. **Helm + Chest** → Không quan trọng cho gather build

Gather set epic đã đủ mạnh cho mid-game. Không cần push Legendary gather nếu chưa cần combat gear.

### Barb Farming Set Priority (Honor / Peacekeeping)

1. **Weapon** (ATK → barb damage) → Legendary trước
2. **Gloves** (ATK secondary) → Legendary second
3. **Helm** (HP sustain nhiều chain) → Legendary third
4. **Legs** (không quan trọng cho barb) → cuối cùng

## Legendary → Mythic: Chỉ Khi Nào?

Mythic require **Legendary material** + **Mythic enhancement stone** — resource rất hiếm.

Rule đơn giản: **không craft Mythic bất kỳ slot nào cho đến khi tất cả 6 slot đã Legendary**.

Lý do: 1 slot Mythic tốn material bằng craft 2 slot Legendary. ROI của slot thứ 6 lên Legendary > slot 1 lên Mythic.

Ngoại lệ duy nhất: **Weapon Mythic** nếu bạn là rally primary với top-tier commander + đang KvK full send. Khi đó +5% ATK từ Mythic Weapon = vài nghìn thêm power damage rally.

## Pain Point — Material Farm Mất 6-18 Tháng

Legendary Weapon cần:

- ~200 Epic material + 50 Legendary fragment + 5 Legendary core

50 Legendary fragment từ:
- Expedition Chapter 7-8: ~2-3 fragment/ngày nếu run đúng stage
- Strange Realm stage 15+: ~1-2 fragment/ngày
- Event reward: 5-10 fragment/event (2-3 event/tháng)

Tổng farm: **~3-4 fragment/ngày max** với đủ daily content. 50 fragment = **12-17 ngày** farm liên tục không miss.

Manual miss rate 35%: **18-26 ngày** thay vì 12-17. Nhân với 6 slot = 108-156 ngày vs 72-102 ngày. Chênh lệch **36-54 ngày** = 1-2 tháng vì miss content hàng ngày.

> 🤖 V3 auto-expedition Chapter 7-8, Strange Realm auto-attempt stage 15+, không miss ngày nào. Legendary fragment farm tốc độ tối đa. [Xem V3 →](/#packages) · 1.200.000đ/tháng.

## Material Source Priority

| Source | Fragment/ngày | Stamina/Attempt Cost |
|---|---|---|
| Expedition Ch7-8 | 2-3 | 50 stamina |
| Strange Realm 15+ | 1-2 | 3 attempt |
| Alliance chest | 0-2 (RNG) | Free |
| Event reward | 5-10/event | Participation |
| KvK reward | 20-50/KvK | KvK performance |

KvK reward là lớn nhất nhưng không consistent (1-2 KvK/tháng). Daily sources quan trọng vì tích lũy đều đặn.

## Craft Strategy — Không Tốn Material Vô Nghĩa

**Junk craft**: nhiều player craft Epic material thừa vào slot không cần → material waste.

Rule: **chỉ craft khi đủ material để lên đúng tier target**. Không craft từng bước nếu có thể skip.

Ví dụ: đủ material lên Legendary Weapon thẳng từ Elite → skip Epic Weapon nếu không cần mid-tier stats tạm thời.

## FAQ

### Enhancement và Enchantment có khác gì Crafting không?

Khác hoàn toàn. Crafting = tạo equipment từ material. Enhancement = tăng level equipment đã có (tốn enhancement stone). Enchantment = add secondary stat (tốn enchantment material). Priority: Craft Legendary trước, Enhancement sau, Enchantment cuối.

### Nên dùng equipment set theo theme hay mix?

Set bonus (cùng theme) thường tốt hơn random mix cho specialized role. Peacekeeping set cho barb farm, Golden Age set cho combat, etc. Kiểm tra set bonus trước khi craft.

### Equipment có expire hoặc mất khi commander chết không?

Không expire. Không mất khi die trong PvP. Equipment gắn vào account vĩnh viễn.

## Bắt Đầu Ngay

**V3 Siêu Cấp 1.200.000đ/tháng** — Legendary material farm tối đa, expedition + Strange Realm không miss:

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [T5 Unlock Requirements RoK 2026](/blog/t5-unlock-requirements-rok-2026)
- [Strange Realm Deep Dive RoK 2026](/blog/strange-realm-deep-dive-rok-2026)
- [KvK Season Prep Bot Checklist RoK 2026](/blog/kvk-season-prep-bot-checklist-rok-2026)
  `,
};
