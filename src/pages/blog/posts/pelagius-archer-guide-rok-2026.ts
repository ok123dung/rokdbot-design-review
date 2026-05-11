import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "pelagius-archer-guide-rok-2026",
  title: "Pelagius Archer F2P Guide RoK 2026 — Anti-Cavalry Counter Speed +5%",
  description: "Pelagius RoK 2026: cơ chế archer anti-cavalry F2P, march speed +5% passive, talent tree tối ưu, pair setup, và cách bot V1 khai thác Pelagius barb + KvK 24/7.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Archer F2P không có Yi Seong-Gye — đây là những gì mày đang bỏ qua

Yi Seong-Gye là archer meta S+. Mọi người đều biết. Mọi người đều muốn. Ít người có đủ sculpture để expertise trong năm đầu F2P.

**Pelagius là hidden utility archer** dành cho F2P: dễ max expertise hơn YSG, có passive march speed +5% cộng thêm anti-cavalry utility khi secondary commander cavalry enemy combat. Không thay thế được YSG, nhưng **filling the gap trong 12-18 tháng đầu F2P rất tốt**.

## Cơ chế Pelagius 2026

**Passive "Cavalry Charge"** — đây là passive gây hiểu nhầm nhất: mặc dù tên là "Cavalry Charge," nó thực ra tăng **archer march speed +5%** và giảm cavalry enemy attack **-10% khi Pelagius trong combat với cavalry unit**. Anti-cavalry utility từ archer perspective.

**Active "Blazing Arrows"** — rain of arrows AOE, moderate damage area effect. Không bằng YSG về raw damage nhưng rage cost thấp hơn → cast nhiều hơn trong cùng thời gian combat.

**March Speed +5%:** Nhỏ nhưng meaningful — archer army mày di chuyển nhanh hơn 5% so với enemy archer không có Pelagius. Trong KvK, 5% là đủ để reach flag trước địch hoặc rút kịp trước khi bị trap.

F2P path: Pelagius là Epic commander, có thể full expertise từ tháng 6-8 nếu biết allocate sculpture đúng. YSG cần 12-18 tháng F2P để expertise.

## Pain khi chơi archer F2P không setup đúng

**Không có anti-cavalry** — archer naturally counter cavalry theo troop type. Nhưng nếu không có commander boost anti-cavalry, mày vẫn chịu damage từ cavalry rally khi outnumbered.

**March speed gap** — enemy cavalry nhanh hơn archer nhiều. Không có speed passive, archer của mày bị cavalry đuổi kịp và tiêu diệt trước khi rút được.

**Rage cycle Blazing Arrows** — Blazing Arrows rage cost thấp nhưng nếu không có rage gen secondary, vẫn bị gap giữa các cast. Manual timing cần thiết.

**Không tận dụng anti-cavalry timing** — passive -10% cavalry attack chỉ active trong combat. Nếu mày không engage đúng cavalry cluster, passive lãng phí.

## Bot V1 với Pelagius F2P

Gói **V1 Nâng Cao 750.000đ/tháng**:

- **Speed-aware routing** — bot tận dụng +5% march speed Pelagius để select path barb chain ngắn hơn, tiết kiệm 8-12 phút/ngày
- **Anti-cavalry engagement** — khi KvK flag bị cavalry attack, bot auto-engage Pelagius với cavalry cluster để activate -10% debuff passive
- **Blazing Arrows timing** — fire skill đúng rage = 1000, không cache rage lãng phí
- **24/7 continuous** — barb farm ban ngày, KvK anti-cavalry defend ban đêm

> 🤖 Pelagius F2P + V1 bot = archer anti-cavalry 24/7 không cần YSG. [Xem V1 Nâng Cao →](/#packages) · 750.000đ/tháng.

## Talent tree Pelagius 2026 (F2P archer)

**Cây Archer (50%):**
- Arrows Nocked (max) → archer base attack
- Venomous Sting → archer defense bypass
- Whistling Arrows → march speed (stacks với passive +5%)

**Cây Skill (30%):**
- Burning Blood → rage gen
- All for One → damage khi full HP — relevant vì archer tend to not get hit first

**Cây Leadership (20%):**
- Rejuvenate → heal partial
- Armored (partial) → defense khi bị hit

**Không invest** Peacekeeping tree cho Pelagius — ông ta không barb specialist chính, barb là secondary income.

## Pelagius vs Yi Seong-Gye upgrade path

| Giai đoạn | Commander | Lý do |
|---|---|---|
| Tháng 1-8 F2P | Pelagius primary | Dễ expertise, anti-cav utility |
| Tháng 9-14 | Pelagius + YSG đang build | Invest sculpture YSG |
| Tháng 15+ | YSG primary, Pelagius secondary | YSG expertise mature |

Pelagius secondary cho YSG cũng solid — speed passive + anti-cavalry debuff cộng hưởng với YSG AOE vs cavalry.

Tham khảo: [Yi Seong-Gye Guide RoK 2026](/blog/yi-seong-gye-guide-rok-2026).

> 🤖 F2P archer không cần YSG để top KvK — Pelagius + V1 đã đủ 12 tháng đầu. [V1 →](/#packages)

## FAQ

### Pelagius có pair được với Cao Pi không?
Có — Cao Pi secondary cho Pelagius rally damage amplifier khi rally barb fort. Nhưng Pelagius không phải rally lead specialist. Cặp tốt hơn là **YSG primary + Pelagius secondary** khi YSG mature. Xem [Cao Pi Guide RoK 2026](/blog/cao-pi-guide-rok-2026).

### Passive anti-cavalry của Pelagius có stack với troop type bonus không?
Có — troop type bonus archer vs cavalry (+25%) và Pelagius passive debuff cavalry (-10%) là hai nguồn riêng, không overwrite nhau. Tổng effective damage Pelagius archer vs cavalry = 1.35-1.4x so với archer thường.

### Pelagius có dùng được KvK season sau không hay phải upgrade?
Pelagius vẫn viable đến KvK season 3-4 F2P khi pair với YSG hoặc Hannibal. Season 5+ nên upgrade. Tham khảo [Hannibal Barca Archer Guide RoK 2026](/blog/hannibal-barca-archer-guide-rok-2026).

## Bắt đầu ngay

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Yi Seong-Gye Guide RoK 2026 — AOE Archer Meta](/blog/yi-seong-gye-guide-rok-2026)
- [Charles Martel F2P Guide RoK 2026](/blog/charles-martel-f2p-guide-rok-2026)
- [AI Commander Rotation V3 RoK](/blog/ai-commander-rotation-v3-rok)
  `,
};
