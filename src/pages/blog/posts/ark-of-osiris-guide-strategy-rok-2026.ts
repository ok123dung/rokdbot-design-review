import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "ark-of-osiris-guide-strategy-rok-2026",
  title: "Ark of Osiris Guide RoK 2026 — Pyramid Capture Strategy + Bot Schedule Coordination",
  description: "Ark of Osiris RoK 2026: cơ chế Pyramid capture, point scoring, alliance coordinate strategy, và cách bot V3 pre-schedule march timing để maximize điểm trong 3h event window.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## 3 Tiếng — Toàn Bộ Ark of Osiris Trong 180 Phút

Ark of Osiris (AoO) không phải event 14 ngày. Event này gói gọn trong **3h mỗi lần**, thường 2-3 lần/tuần. Mỗi 3h là 1 match hoàn chỉnh với winner và loser.

Vấn đề: 3h real-time = mày phải online **đúng khung giờ**. Server VN thường chạy AoO lúc 8pm-11pm hoặc 10pm-1am. Nếu bận, mày miss cả match.

Bot không bận.

## Cơ Chế Pyramid — Scoring Thực Tế

### Ark Points
Mỗi Pyramid (Ark) mà alliance của mày **đang kiểm soát** tạo ra **Ark Points mỗi phút**:

| Pyramid Level | Points/phút |
|---|---|
| Small Pyramid | 50 pts |
| Medium Pyramid | 150 pts |
| Large Pyramid | 500 pts |
| Grand Pyramid | 1.500 pts |

Match kéo dài 180 phút → chiếm Grand Pyramid từ phút 1 = **270.000 points**. Đây là scoring cơ bản nhất.

### Combat Points
Ngoài Ark Points, killing enemy troops trong AoO cũng generate points:
- Kill 1 T5 = 2 pts
- Kill 1 T4 = 1 pt
- Capture enemy Ark = 5.000 bonus pts

**Chiến lược Top 1**: chiếm Grand Pyramid sớm + maintain + kill enemy attempts = dual scoring stream.

> 🤖 V3 bot pre-schedule march vào AoO match — auto-send troops đúng frame khi event mở. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Alliance Coordinate Strategy — 5 Phases Trong 3h

### Phút 0-15: Rush Grand Pyramid
- Toàn alliance launch march về Grand Pyramid đồng loạt
- Bot accounts march cùng lúc với human players — không chờ
- Speed buff + cavalry march để arrive trước enemy

### Phút 15-45: Reinforce + Defend
- Grand Pyramid bị capture: liên tục reinforce garrison
- Bot accounts: auto-reinforce khi garrison under 80% capacity
- Human R5: coordinate troop dispatch theo wave

### Phút 45-90: Split Attack
- Một nhóm defend Grand Pyramid
- Một nhóm capture Medium Pyramid để tăng points/phút
- Bot V3 theo R5 lệnh: split đạo theo target designation

### Phút 90-150: Mid-Match Push
- Nếu đang dẫn điểm: turtle Grand + maintain
- Nếu đang thua điểm: all-in enemy Grand Pyramid với full rally
- Bot auto-sustain garrison trong khi human launch rally

### Phút 150-180: Final Hold
- Không release troops trong 30 phút cuối
- Bot reinforce liên tục — mỗi troop mất ở đây là points lost
- R5 monitor enemy march real-time, bot execute reinforce

## Bot Pre-Schedule — Tại Sao Quan Trọng

AoO thường bắt đầu lúc **8pm hoặc 10pm** giờ VN. 3 phút đầu là rush phase — ai launch march muộn hơn 3 phút = thua Grand Pyramid.

Bot V3 pre-schedule:
- Set target coordinate (Grand Pyramid location) trước event
- Khi event mở, bot **tự động launch march** ngay phút 0
- Không cần mày mở máy — bot xử lý rush phase tự động

Alliance có 5-10 bot V3 = **5-10 additional march mỗi phút 0** mà không cần member online. Đây là advantage không có bot không thể replicate.

## Points Calculation — So Sánh Bot vs No-Bot

### Alliance 30 members, không có bot:
- 20 member online đúng giờ × 3 march mỗi người = 60 marches
- Grand Pyramid hold từ phút 10 → 180 phút hold time × 1.500 pts = 255.000 pts

### Alliance 30 members, 10 bot V3:
- 10 bot launch phút 0, 20 human launch phút 2-5 = rush có 10 bot vanguard
- Grand Pyramid hold từ phút 3 (sớm hơn 7 phút) → 177 phút × 1.500 = 265.500 pts
- **Delta: +10.500 pts** chỉ từ 7 phút sớm hơn capture

Cộng thêm: bot accounts auto-reinforce giảm Pyramid loss risk trong match.

> 🤖 V3 pre-schedule AoO rush — 10 bot march phút 0 = Grand Pyramid capture sớm hơn enemy. [Xem V3 →](/#packages).

## Commander Setup Tối Ưu AoO

AoO ưu tiên **cavalry** và **mixed march**:

- **Genghis Khan + Saladin**: cavalry speed rush, Pyramid capture nhanh
- **Alexander + Richard**: garrison + reinforce stack cho Pyramid defense
- **Minamoto + Bjorn**: attack march khi counter-raid enemy Pyramid

Bot V3 AI rotation tự chọn commander phù hợp với phase (rush vs defend vs counter-raid) — không cần config thủ công.

## FAQ

### AoO có rank kingdom không?
Không trực tiếp. Nhưng AoO rewards (gems, speedup, tokens) tích lũy → power grow → KvK rank. AoO là **resource event** quan trọng.

### Bot có bị phát hiện trong AoO không?
AoO là PvP event — Lilith monitor chặt hơn. Bot V3 không inject client, dùng cloud server riêng. Detect rate vẫn <0,1% qua 8 seasons kể cả AoO matches.

### Nếu miss AoO vì bận thì sao?
Bot tự handle rush phase và reinforce. Mày có thể join giữa chừng — không cần online từ phút 0. Bot giữ Pyramid đến khi mày vào.

## Bắt Đầu AoO Với V3

**V3 Siêu Cấp 1.200.000đ/tháng**:
- Pre-schedule AoO rush march tự động
- Auto-reinforce Pyramid garrison
- 2 đạo = double march per phút 0

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Auto Rally Captain RoK 2026](/blog/auto-rally-captain-rok-2026)
- [Multi Account Sync RokdBot V3](/blog/multi-account-sync-rokdbot-v3)
- [AI Commander Rotation V3 RoK](/blog/ai-commander-rotation-v3-rok)
  `,
};
