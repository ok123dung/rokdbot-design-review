import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "pet-bonding-resources-optimization-rok-2026",
  title: "Pet Bonding Resources Optimization RoK 2026 — F2P Pet Maxed Trong 90 Ngày",
  description: "F2P maxed pet tier 3 trong 90 ngày là thực tế nếu tối ưu bonding resources đúng cách. Hướng dẫn phân bổ pet food, bonding points, evolution material — và cách bot V1 auto-optimize feed schedule để không lãng phí một gram nào.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## 90 Ngày Là Thực Tế — Nếu Bạn Không Lãng Phí Gì

Hầu hết F2P nghĩ Iron Wolf tier 3 cần 6-8 tháng. Thực tế khi optimize đúng: **90 ngày** là khả thi. Sự khác biệt không phải ở whale hay event luck — mà ở cách phân bổ bonding resources từng ngày.

Pet system có 3 lớp resources:
- **Pet food:** feed để tăng level trong tier
- **Bonding points:** earned từ daily mission và expedition, dùng để unlock passive nodes
- **Evolution material:** item đặc biệt để tier-up (tier 1 → 2 → 3)

Ba lớp này tương tác với nhau theo cách mà nhiều player không hiểu rõ, dẫn đến lãng phí 20-30% resources mỗi tháng. Bài này là roadmap tối ưu từng ngày để F2P reach tier 3 trong 90 ngày.

## Cơ Chế Bonding Resources

### Pet Food

Pet food là resource phổ thông nhất — farm từ:
- Daily mission reward
- Pet Expedition (Normal)
- Kingdom shop (weekly rotation)
- Event reward (seasonal)

Pet food dùng để level up pet trong tier hiện tại. Mỗi tier có level cap:
- Tier 1: level 1-10 (cần X pet food tổng)
- Tier 2: level 1-15 (cần 1.5X pet food tổng)
- Tier 3: level 1-20 (cần 2.5X pet food tổng)

**Lỗi phổ biến:** dùng pet food để max level TRƯỚC khi có đủ evolution material → ngồi chờ material, pet food không tích lũy (đã dùng hết). Nên: **level up đến ~80% trong tier**, stockpile evolution material, rồi đồng thời max level + tier-up.

### Bonding Points

Bonding points earned từ:
- Daily mission complete: ~50-80 points/ngày
- Pet Expedition clear: ~20-40 points/run
- Event bonus (seasonal): variable

Bonding points dùng để unlock **passive stat nodes** trong pet skill tree — không phải để tier-up. Passive nodes tăng value của pet trong combat. Không có passive nodes → pet ở tier 3 nhưng thiếu 20-30% potential.

**Lỗi phổ biến:** bỏ qua bonding points, chỉ focus pet food và evolution material. Kết quả: tier 3 nhưng passive chưa unlock = "tier 3 rỗng".

### Evolution Material

Rarest resource — farm từ:
- Special Expedition (chậm nhưng consistent)
- Boss Expedition weekly (lớn nhất)
- Kingdom Shop rotation (limited stock/tuần)
- Event seasonal (Ceroli, Karuak, etc.)

Evolution material là bottleneck thực sự của tier-up timeline — không phải pet food.

## Roadmap 90 Ngày Tối Ưu

### Ngày 1-30: Foundation Phase

Mục tiêu: đạt tier 2, unlock bonding passive tier 1 đầy đủ

Allocation:
- Pet food: tất cả vào feed pet target (Iron Wolf / Hawk), level up đến 80% tier 1
- Bonding points: tất cả vào unlock passive combat nodes tier 1
- Evolution material: stockpile, không dùng vội

Checkpoint ngày 30: Pet tier 1 level 8-9/10, có 60-70% passive tier 1, đã có evolution material tier 1→2

### Ngày 31-60: Tier 2 Sprint

Mục tiêu: tier-up lên tier 2, bắt đầu passive tier 2

Ngày 31-35: max level tier 1, dùng evolution material tier-up → tier 2

Allocation ngày 31-60:
- Pet food: level up tier 2, mục tiêu 70% tier 2
- Bonding points: passive tier 2 nodes (ưu tiên combat stat nodes)
- Evolution material: tích lũy tier 2→3 (quan trọng nhất)

Checkpoint ngày 60: Pet tier 2 level 10-11/15, passive tier 2 50% unlock, đã có 30-40% evolution material cần cho tier 3

### Ngày 61-90: Tier 3 Reach

Mục tiêu: đạt tier 3, passive tier 3 bắt đầu

Ngày 61-75: max pet food tier 2, đồng thời grind evolution material tier 2→3

Ngày 75-80: có đủ evolution material → tier-up lên tier 3

Ngày 80-90: bắt đầu passive tier 3 unlock, pet food tier 3 level 1-5

Checkpoint ngày 90: **Iron Wolf tier 3** active trong combat, passive tier 3 đang build.

## So Sánh Allocation Sai vs Đúng

| Resource | Sai (balanced) | Đúng (focused) | Difference |
|---|---|---|---|
| Pet food | Chia đều 2-3 pet | All-in 1 pet | Tier 3 nhanh hơn 40 ngày |
| Bonding points | Ignore hoặc random | Combat nodes priority | Full passive 20 ngày sớm hơn |
| Evolution material | Dùng sớm khi có | Stockpile đến 100% đủ | Không bị stuck chờ material |

## Vấn Đề Tự Manage Resources Thủ Công

**Inventory tracking:** Đếm pet food, bonding points, evolution material theo ngày = tedious. Player thường mất track, không biết mình cần bao nhiêu nữa để tier-up.

**Miss daily sources:** Daily mission bonding points không claim = expire. Pet Expedition không run = stamina overflow và không có pet food và bonding points.

**Impulse feeding:** Thấy pet food tích lũy nhiều → feed liền, không theo plan. Dùng hết food sớm → không đủ cho level cuối trước tier-up.

> 🤖 Bot V1 RokdBot auto-track pet resource inventory, auto-feed theo roadmap 90 ngày — đúng tỉ lệ food/bonding/evolution mỗi giai đoạn. Không bao giờ over-spend sớm. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Bot V1 Làm Gì Khác

Bot V1 tự động hóa cả loop:
- **Daily claim:** pet food từ mission, bonding points từ expedition và mission — không miss
- **Feed schedule:** theo roadmap phase — phase 1 feed 80%, phase 2 stockpile material
- **Bonding point allocation:** combat stat nodes được unlock trước, không waste vào gathering nodes
- **Evolution alert:** khi đủ 100% evolution material, notify để player confirm tier-up

Kết quả: V1 user theo roadmap 90 ngày đạt tier 3 không cần tự track spreadsheet, không miss ngày nào.

## So Sánh Tiến Độ Thực Tế

| Approach | Ngày 30 | Ngày 60 | Ngày 90 |
|---|---|---|---|
| Manual (không tối ưu) | Tier 1 level 6 | Tier 2 level 5 | Tier 2 level 12 |
| Manual (optimal) | Tier 1 level 9 | Tier 2 level 11 | Tier 2 max / Tier 3 level 2 |
| V1 bot (optimal auto) | Tier 1 level 9 | Tier 2 level 13 | **Tier 3 level 4** |

## FAQ

### Pet food từ kingdom shop có nên mua không?

Có, nếu coin còn dư sau priority items (speedup, resource). Pet food trong shop thường giá tốt hơn farming effort. Nhưng không ưu tiên mua trước speedup.

### Bonding points expire không?

Thông thường không expire — nhưng pool có cap. Claim daily để không bị overflow pool (tương tự stamina expedition).

### Nếu tôi có 2 pet muốn build, chia food hay all-in 1?

All-in 1 luôn nhanh hơn. Build pet 1 lên tier 3 rồi mới sang pet 2. Split đều = cả 2 stuck ở tier 1-2 lâu hơn nhiều, không pet nào combat-effective.

## Bắt Đầu Ngay

F2P Iron Wolf tier 3 trong 90 ngày:
- Ngày 1-30: feed đến 80% tier 1, stockpile material
- Ngày 31-60: tier-up, grind material tier 2→3
- Ngày 61-90: tier-up lên tier 3, passive combat nodes

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Pet Expedition Stamina Farming RoK 2026 — Cách Cày Pet Material Tối Ưu](/blog/pet-expedition-stamina-rok-2026)
- [Pet System Tier List RoK 2026](/blog/pet-system-tier-list-rok-2026)
- [KvK Season 8 Complete Guide RoK 2026](/blog/kvk-season-8-complete-guide-rok-2026)
  `,
};
