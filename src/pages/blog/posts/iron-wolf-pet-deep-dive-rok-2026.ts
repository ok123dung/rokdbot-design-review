import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "iron-wolf-pet-deep-dive-rok-2026",
  title: "Iron Wolf Pet Deep Dive RoK 2026 — Pair Cavalry Mehmed/Cao Pi/Saladin (Skill+Talent)",
  description: "Iron Wolf Season 8 là pet S-tier cho cavalry open field. Cơ chế passive ATK + counter-charge, pair tối ưu Mehmed/Cao Pi/Saladin, talent tree sync, và cách bot V3 auto-feed để tier 3 trong 90 ngày. Deep dive đầy đủ nhất.",
  date: "2026-05-11",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Cavalry March Của Bạn Đang Thiếu 18% ATK

KvK Season 8, đạo cavalry tốt nhất không còn là đạo có commander S-tier nhất — mà là đạo có pet đúng. Cùng Genghis Khan max skill, cùng talent tree perfect, nhưng thiếu Iron Wolf tier 3: bạn tự bỏ **18% cavalry ATK** xuống sàn trận. Con số đó không phải lý thuyết — đó là khoảng cách giữa win và loss trong open field clash 50 giây.

Iron Wolf không phải pet mới. Nhưng Season 8 thay đổi combat formula theo hướng scaling ATK raw mạnh hơn, khiến Iron Wolf từ A-tier nhảy vào S-tier chắc chắn. Bài này deep dive toàn bộ cơ chế, pair commander, talent sync, và lý do F2P có thể đạt tier 3 trong 90 ngày với setup đúng.

## Cơ Chế Iron Wolf — Đọc Đúng Để Không Waste Investment

Iron Wolf có 2 lớp buff chính:

**Passive combat — luôn active:**
- Tăng troop ATK của march equip pet (cavalry + infantry)
- Giảm skill damage nhận từ enemy commander active
- Tier 1: +6% ATK / -4% skill dmg taken
- Tier 2: +11% ATK / -7% skill dmg taken
- Tier 3: +16-18% ATK / -10-12% skill dmg taken

**Active trigger (tier 4 unlock):**
- Counter-charge khi march bị targeted tấn công
- Enemy march bị debuff slow 1.5-2 giây
- Cooldown: 45 giây / lần trigger

Tier 3 là mốc thực tế nhất cho F2P — tier 4 đòi hỏi material từ event premium khó farm. Tier 3 đã cho **+16-18% ATK** — đủ thay đổi kết quả combat.

**Lỗi cơ bản nhất:** equip Iron Wolf vào archer commander. Passive buff chỉ apply đầy đủ với cavalry và infantry. Archer dùng Iron Wolf = mất 40-50% value pet.

## Pair Commander Tối Ưu

### Mehmed II — Cavalry Rally King

Mehmed active skill gây rally damage cực cao, bonus thêm khi target đang stationary (pháo đài, city). Iron Wolf passive ATK +18% stack với Mehmed's rally damage multiplier — không phải cộng mà **nhân**: base damage × rally bonus × ATK buff.

Talent tree sync: đi sâu Conquering tree (Mehmed's primary), lấy đủ nodes ATK bonus trước khi sang Leadership. Iron Wolf buff phát huy tối đa khi Mehmed dùng làm rally primary.

### Cao Pi — Cavalry Field Commander

Cao Pi passive tăng cavalry march speed + skill damage. Iron Wolf ATK buff + Cao Pi cavalry skill damage = march vừa nhanh vừa hit nặng. Pair này excellent cho open field chase — enemy không chạy kịp, và khi hit, damage per troop cao hơn đáng kể.

Talent tree sync: Cavalry tree priority, lấy March Speed nodes sớm. Iron Wolf làm damage, Cao Pi làm mobility — combo hoàn chỉnh.

### Saladin — Versatile Open Field

Saladin buff cavalry DEF + counter-attack damage. Iron Wolf ATK buff + Saladin DEF counter = march vừa bền vừa hurt khi bị hit. Đây là pair F2P friendly nhất — Saladin dễ max hơn Mehmed, Cao Pi.

Talent tree sync: Peacekeeping tree (nếu mix farm + PvP), hoặc Cavalry pure cho KvK focus.

## So Sánh Pair Iron Wolf

| Commander | Iron Wolf synergy | Tốt nhất cho | Độ khó đạt |
|---|---|---|---|
| Mehmed II | ATK × rally multiplier | Rally pháo đài KvK | Cao (whale/long grind) |
| Cao Pi | ATK + mobility | Open field chase | Trung bình |
| Saladin | ATK + sustain DEF | F2P open field | Thấp |
| Genghis Khan | ATK + cavalry speed | Nomad march | Trung bình |

## Vấn Đề Tự Feed Pet Thủ Công

Pet feed yêu cầu **daily login không bỏ ngày nào** để collect pet food từ:
- Daily mission reward
- Pet expedition claim
- Kingdom shop rotation

Miss 1 ngày = mất pet food đó vĩnh viễn (không cumulative). Trong 90 ngày, player manual trung bình miss 8-12 ngày (nghỉ, bận, quên). Đó là 10-15% total pet food bị lãng phí — tương đương 1-2 tuần progress chậm lại.

Ngoài ra: feed phải đúng stat. Iron Wolf dùng cho combat → feed **Combat stat priority**. Nhiều người feed balanced vì không biết, kết quả không stat nào đạt ngưỡng tier-up nhanh.

> 🤖 Bot V3 RokdBot auto-collect pet food daily, feed đúng Combat stat không bao giờ miss. Iron Wolf tier 3 trong 80-90 ngày thay vì 120+ ngày manual. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Bot V3 Làm Gì Khác

Bot V3 tự động toàn bộ pet feed loop:
- **Daily collect:** pet food từ mission, expedition, shop — không miss ngày nào
- **Combat-focused feed:** ưu tiên Combat nodes trước, không balanced-feed lãng phí
- **Tier-up alert:** khi đủ evolution material, notify qua app để player confirm
- **Schedule optimization:** feed vào giờ thấp điểm, không conflict với combat automation

Kết quả: V3 user đạt Iron Wolf tier 3 nhanh hơn **25-35 ngày** so với manual average. Tier 3 sớm hơn = KvK thêm 1-2 mùa với pet đủ mạnh.

## So Sánh Thực Tế Theo Gói

| Gói | Pet feed | Iron Wolf tier 3 ETA | Open field ATK bonus |
|---|---|---|---|
| Tự chơi | Manual (miss 10-15%) | 120-150 ngày | Phụ thuộc consistency |
| V1 750k | Auto daily collect | ~100 ngày | Full value khi đạt tier |
| **V3 1,2M** | Auto collect + feed combat | **~80-90 ngày** | Full value sớm hơn |
| Premium VIP 3M | Full auto + multi-march | ~70-80 ngày | Multi-march với pet |

## FAQ

### Iron Wolf tier 2 có đáng dùng không hay chờ tier 3?

Dùng ngay tier 2 — +11% ATK không nhỏ. Đừng giữ pet ở tier 1 vì "chờ đủ material tier 3". Mỗi tier đều cho value ngay lập tức.

### Iron Wolf có work trong garrison không?

Garrison context: Iron Wolf passive giảm một phần. Stone Bear là lựa chọn tốt hơn cho garrison. Iron Wolf = open field + field battle.

### F2P có thể farm material Iron Wolf từ đâu?

- Karuak Ceremony event (seasonal)
- Kingdom Shop rotation (pet material xuất hiện mỗi 2-3 tuần)
- Pet Expedition reward (daily, cần làm expedition đủ)
- Ceroli Crisis event reward pool

F2P active có thể đủ material tier 3 sau 4-6 tháng không whale.

## Bắt Đầu Ngay

Iron Wolf tier 3 = +18% cavalry ATK mọi trận open field KvK. Setup:
- Pair với Saladin (F2P) hoặc Cao Pi / Mehmed (mid/whale)
- Feed Combat stat priority, không balanced-feed
- Không miss ngày collect pet food nào

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Pet System Tier List RoK 2026 — Iron Wolf vs Hawk vs Stone Bear](/blog/pet-system-tier-list-rok-2026)
- [Commander Tier List Cavalry RoK 2026](/blog/commander-tier-list-cavalry-rok-2026)
- [KvK Season 8 Complete Guide RoK 2026](/blog/kvk-season-8-complete-guide-rok-2026)
  `,
};
