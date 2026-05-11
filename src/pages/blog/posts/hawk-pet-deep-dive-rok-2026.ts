import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "hawk-pet-deep-dive-rok-2026",
  title: "Hawk Pet Deep Dive RoK 2026 — Archer Range +15-25% Pair Yi Seong-Gye",
  description: "Hawk pet Season 8 biến Yi Seong-Gye thành AOE machine range lớn nhất game. Cơ chế range extension +15-25%, skill hit count tăng, pair tối ưu YSG/Edward, và tại sao bot V2/V3 tự động hóa archer combo hiệu quả gấp đôi.",
  date: "2026-05-11",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Yi Seong-Gye Của Bạn Đang Bắn Hụt 25% Mục Tiêu

Yi Seong-Gye (YSG) đã là commander AOE mạnh nhất game. Nhưng trong KvK Season 8, khoảng cách giữa YSG không pet và YSG + Hawk tier 3 không còn là nhỏ — nó là **25% AOE range** và thêm 1-2 target hit mỗi cast. Trong rally cluster 20-30 troops, 25% range tương đương hàng trăm nghìn troop damage mỗi cast.

Hawk là pet S-tier duy nhất được build **cho archer cụ thể**. Không giống Iron Wolf (cavalry/infantry đều được), Hawk chỉ shine khi equip đúng archer commander. Dùng Hawk với cavalry commander = lãng phí hoàn toàn investment. Bài này deep dive cơ chế Hawk, pair tối ưu, và cách tận dụng trong KvK.

## Cơ Chế Hawk — Range Extension Là Tất Cả

Hawk passive buff theo tier:

**Skill range extension:**
- Tier 1: +5-8% archer skill range
- Tier 2: +10-13% archer skill range
- Tier 3: +15-25% archer skill range (range này variadic tùy commander)

**Skill hit count:**
- Tier 2+: Có thể hit thêm 1 target ngoài base AOE radius
- Tier 3: Có thể hit thêm 1-2 target ngoài base AOE radius

**Skill damage multiplier:**
- Tier 3: +8-12% skill damage per hit (nhỏ hơn range buff nhưng cumulative)

Quan trọng: "range extension" trong RoK context nghĩa là **radius AOE tăng**, không phải attack range troop thông thường. YSG active skill có AOE radius — Hawk mở rộng radius đó. Rợ / enemy troops đứng ở rìa radius base sẽ bị hit khi có Hawk tier 3.

**Tại sao tier 3 là threshold:**
- Tier 1-2: range buff nhỏ, ít ảnh hưởng trên thực tế
- Tier 3: +15-25% = đủ để hit thêm 1-2 target ngoài rìa cluster — đây là điểm breakthrough

## Pair Yi Seong-Gye + Hawk: Cơ Chế Chi Tiết

YSG active skill "Goryeo's Pride" gây AOE damage 5 targets trong radius. Với Hawk tier 3:

- Radius mở rộng +20-25%
- Target cap vẫn là 5 nhưng "pool" target bị hit có thể lớn hơn (game chọn 5 nearest trong radius mới)
- Hit count có thể extend thêm 1-2 ở các cast đặc biệt (mechanic phức tạp, không guaranteed mỗi cast)

Trong rally KvK scenario: 30 troops cluster trong vùng 3x3 tile. YSG không Hawk hit 5 troops nearest. YSG + Hawk tier 3 hit 5 troops nhưng trong radius lớn hơn → các troops "rìa ngoài" bị include vào pool → random 5 bị hit — coverage rộng hơn, spread damage toàn cluster thay vì chỉ center.

**Talent tree sync cho Hawk-YSG:**
- Archer tree: maxed Skill Damage nodes trước
- Leadership tree: March Speed để reposition sau cast
- Không cần Peacekeeping tree nếu KvK focus

## Pair Alternatives

### Edward of Woodstock — Second Best

Edward active skill AOE nhỏ hơn YSG nhưng có DoT (damage over time). Hawk + Edward = range extend DoT radius → troops rìa cluster dính DoT mà không escape. Effective trong sustained battle hơn YSG (YSG mạnh burst, Edward mạnh sustained).

### Ramesses II — Gathering Hybrid

Ramesses II có passive debuff enemy DEF. Hawk + Ramesses = range lớn hơn khi apply debuff → nhiều troops trong cluster bị DEF reduction trước khi YSG secondary cast. Combo phức tạp nhưng hiệu quả trong rally coord đủ coordination.

## So Sánh Pair Hawk

| Commander | Hawk synergy | Tốt nhất cho | Range buff thực tế |
|---|---|---|---|
| Yi Seong-Gye | Range × AOE hit count | KvK rally, rợ AOE | +20-25% radius |
| Edward of Woodstock | Range × DoT sustained | Open field sustained | +15-20% DoT radius |
| Ramesses II | Range × DEF debuff | Rally coordination | +15% debuff radius |
| Cavalry commander | Minimal | Không nên dùng | <5% (wasted) |

## Vấn Đề Tự Kéo Rợ AOE Với YSG Thủ Công

YSG + Hawk combo cho kéo rợ barbarian (barb farming) cực mạnh về honor/AP. Nhưng thủ công có vấn đề nghiêm trọng:

**Frame timing cast:** YSG rage full 1.000 → auto-cast game ngay lập tức, không quan tâm cluster barb đã stack chưa. Manual phải TẮT auto-cast và tap đúng frame cluster peak. Trễ 0.5 giây = miss 2-3 barb trong radius vừa extend.

**Range awareness:** Hawk mở rộng radius nhưng không có visual indicator rõ ràng. Player manual khó ước lượng radius mới để pull barb vào đúng vị trí. Kết quả: pull barb ra ngoài radius thật ra đã đủ — mà không biết.

**24/7 KvK barb farming:** Hawk-YSG combo mạnh nhất trong KvK honor grind (barb farming cho honor). 14 ngày KvK × 24h = cần automation, không thể manual toàn thời gian.

> 🤖 Bot V2/V3 RokdBot auto-trigger YSG + Hawk combo ở frame perfect — cluster barb stack đỉnh điểm, cast đúng lúc. AOE cover đủ radius Hawk mà không cần manual estimate. [Xem V2 →](/#packages) · 900.000đ/tháng.

## Bot V2/V3 Làm Gì Khác

**V2 Cao Cấp (900k) — Hawk-YSG barb farming:**
- Trigger YSG skill đúng frame cluster peak
- Tự động estimate Hawk radius mở rộng, pull barb vào đúng vị trí
- Chain barb farming 24/7 không miss timing

**V3 Siêu Cấp (1.2M) — Hawk-YSG + multi-march:**
- 2 đạo parallel: 1 đạo YSG + Hawk barb farming, 1 đạo support
- Auto pet feed Hawk daily — không miss ngày nào
- Hawk tier 3 đạt nhanh hơn 25-30 ngày vs manual

## So Sánh Output Thực Tế

| Setup | Barb/ngày | Honor/ngày | Gói phù hợp |
|---|---|---|---|
| YSG không pet, manual | ~50-70 | ~800 | Tự chơi |
| YSG + Hawk tier 3, manual | ~90-120 | ~1.500 | Tự chơi giỏi |
| YSG + Hawk tier 3, V2 bot | ~180-220 | ~2.800 | V2 900k |
| YSG + Hawk tier 3, V3 bot | ~360-440 | ~5.500 | V3 1,2M |

## FAQ

### Hawk có work với infantry commander không?

Không có ý nghĩa thực tế. Passive buff Hawk chỉ scale với archer skill mechanics. Infantry dùng Hawk = ~0% value.

### F2P có farm được Hawk material không?

Hawk xuất hiện ở Ceroli Crisis event reward, Kingdom Shop rotation, và Pet Expedition. Active F2P đủ material tier 3 sau 5-7 tháng. Không cần whale nhưng cần không miss event nào.

### YSG không max skill thì Hawk có đáng không?

YSG skill 1-4 thì Hawk vẫn cho range extension value. Nhưng tối ưu nhất khi YSG skill 5 (max active) vì AOE damage multiplier × Hawk range = kết quả lớn nhất. Priority: max YSG skill trước khi invest Hawk.

## Bắt Đầu Ngay

Hawk tier 3 + YSG max = archer AOE range lớn nhất game Season 8:
- +20-25% radius AOE
- Thêm 1-2 target hit mỗi cast lớn
- Barb farming honor/AP tăng gấp đôi vs không pet

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Pet System Tier List RoK 2026 — Iron Wolf vs Hawk vs Stone Bear](/blog/pet-system-tier-list-rok-2026)
- [KvK Phase 2 Field of Honor Strategy RoK 2026](/blog/kvk-phase-2-field-of-honor-strategy-rok-2026)
- [Commander Tier List Cavalry RoK 2026](/blog/commander-tier-list-cavalry-rok-2026)
  `,
};
