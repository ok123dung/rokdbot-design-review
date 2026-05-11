import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "holy-site-rotation-timing-rok-2026",
  title: "Holy Site Rotation Timing RoK 2026 — Mỗi 3 Ngày Mở + 4h Hold Strategy",
  description: "Holy Site rotation timing RoK 2026: cơ chế 3-ngày cycle, 4h hold requirement, buff stack mechanics, và cách bot V3 auto-reinforce để giữ holy site liên tục mà không cần player thức đêm.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Holy Site — Cái Buff Mà Cả Kingdom Bỏ Qua

Trong khi tất cả đang tranh nhau Lost Temple, Holy Site đứng yên ở góc map — cho buff +8% attack toàn kingdom cho ai giữ nó. Không phải buff lớn nhất. Nhưng +8% attack maintained 14 ngày KvK là delta không nhỏ.

Vấn đề: Holy Site không phải "capture 1 lần xong". Nó reset và mở lại **mỗi 3 ngày**. Ai không biết timing sẽ capture hôm nay, quên ngày 4, mất site hôm sau mà không hay.

## Holy Site Rotation — Mechanics Chính Xác

### 3-Day Cycle

Holy Site hoạt động theo vòng 3 ngày:

- **Ngày 1 (Open)**: Site mở, ai capture trước chiếm
- **Ngày 2 (Hold)**: Site có thể bị raid bất cứ lúc nào
- **Ngày 3 (Lock)**: Site lock về kingdom đang giữ, không thể raid
- **Ngày 4 = Ngày 1**: Reset, mở lại

Cycle không đồng bộ với KvK phase — Holy Site reset độc lập, kể cả trong Final Battle.

### 4h Hold Requirement

Để nhận buff, cần giữ site **liên tục 4 giờ** sau lần capture. Nếu bị raid trong 4h đó và mất site:
- Buff reset
- Timer restart từ đầu khi capture lại
- Không có partial credit

**4h liên tục không gián đoạn** = cần reinforce sẵn sàng mọi lúc trong 4h đầu.

> 🤖 V3 auto-reinforce holy site khi troop count garrison < threshold — không để gap 4h đầu. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Buff Stack — Vì Sao Holy Site Quan Trọng Hơn Bạn Nghĩ

Holy Site buff stack với Lost Temple buff và Alliance Flag buff:

| Buff Source | Attack Bonus | Defense Bonus |
|---|---|---|
| Lost Temple giữ | +10% | +10% |
| Holy Site giữ | +8% | +5% |
| Alliance Flag lv4 | +5% | +5% |
| **Tổng stack** | **+23%** | **+20%** |

Kingdom giữ cả Temple lẫn Holy Site vs kingdom chỉ giữ Temple: **+8% attack advantage** trong mọi combat. Barb chain, PvP, rally fort — tất cả combat đều hưởng buff này.

V3 2 đạo chain với +8% attack = thêm **~17.200 × 8% = ~1.376 barb honor/ngày** pure từ buff. Over 14 ngày KvK: **~19.264 honor thêm** chỉ từ giữ Holy Site.

## 4h Hold Strategy — Làm Thế Nào Không Bị Break

### Pre-Capture Checklist

Trước khi capture Holy Site (Ngày 1 cycle):

1. Confirm alliance có đủ reinforce troops available (tối thiểu 3 player với march sẵn sàng)
2. R5 announce thời điểm capture chính xác (thường 0:00 cycle reset)
3. Bot V3 set auto-reinforce trigger trước 30 phút

### 4h Window Coverage

| Giờ | Threat Level | Action |
|---|---|---|
| H+0 đến H+1 | Cao nhất | Full reinforce, rally backup sẵn |
| H+1 đến H+2 | Cao | Maintain garrison, monitor |
| H+2 đến H+3 | Trung bình | Bot auto-reinforce, player có thể nghỉ |
| H+3 đến H+4 | Thấp (địch ít push muộn) | Bot maintain, buff imminent |

**Giờ đầu là nguy hiểm nhất** — địch biết timing, họ cũng có bot. Cần human attention trong H+0 đến H+1.

### Ngày 2 — Hold Phase

Sau 4h đầu, buff active. Tiếp tục giữ trong Ngày 2:

- Bot V3 maintain auto-reinforce khi garrison drop
- Không cần full alliance attention — 1-2 player canh đủ
- Địch raid: bot reinforce trong 5 phút — không để gap

## Timing Calendar KvK 14 Ngày

| KvK Ngày | Holy Site Cycle | Action |
|---|---|---|
| 1 | Open (mới) | Capture ngay khi KvK mở |
| 2 | Hold | Bot maintain |
| 3 | Lock | An toàn, không cần reinforce |
| 4 | Open (reset) | Capture lại trước địch |
| 5 | Hold | Bot maintain |
| 6 | Lock | An toàn |
| ... | | Lặp lại 4-5 lần trong KvK |

Mỗi cycle: 1 ngày capture (cần attention) + 2 ngày bot maintain. Ratio 1:2 — đa số thời gian bot làm hết.

> 🤖 V3 tự detect Holy Site cycle reset và trigger capture sequence — mày không cần nhớ ngày. [Xem V3 →](/#packages).

## Zone + Holy Site Combination

Nếu đang chơi Light & Darkness KvK: Holy Site trong Darkness Zone cho buff **×1,8**:

- Light Zone Holy Site: +8% attack
- Darkness Zone Holy Site: +8% × 1,8 = **+14,4% attack**

Ưu tiên Holy Site trong Darkness Zone trước — delta buff gần gấp đôi. Sau đó mới xem xét Light Zone site nếu có lực.

## PvP Hold — Khi Địch Có Bot Cũng

Scenario phổ biến season 2026: cả mày lẫn địch đều dùng bot. Bot vs bot. Ai win?

- **Bot V2 vs manual**: V2 thắng (auto-reinforce vs human reaction time)
- **Bot V3 vs V2**: V3 thắng (2 đạo reinforce vs 1 đạo)
- **Bot V3 vs V3**: win dựa vào **troop power và commander level** — đây là lúc whale advantage hiện ra

Mid-tier với V3 có thể hold site vs whale không có bot. Đây là lý do bot quan trọng hơn P2W thuần trong season 2026.

## FAQ

### Holy Site có stack với Sacred Place không?
Khác nhau. Sacred Place cho kingdom-wide research/building speed buff. Holy Site cho combat buff. Hai buff stack — cả 2 cùng lúc là ideal.

### Bot có tự capture Holy Site không?
Bot V3 có thể execute capture khi R5 trigger — nhưng R5 quyết định timing. Bot không tự quyết định "hôm nay capture site" vì đây là strategic call (cần troop availability check).

### Nếu mất site trong Ngày 2 thì sao?
Mất buff ngay. Cần capture lại và hold 4h một lần nữa. Ngày 3 không còn relevance — cycle mới bắt đầu Ngày 4 bất kể ai giữ.

## Bắt Đầu Holy Site Strategy Với V3

**V3 Siêu Cấp 1.200.000đ/tháng**:
- Auto-reinforce holy site khi garrison drop
- Barb chain liên tục trong khi site đang maintained
- 2 đạo reinforce vs địch 1 đạo

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [KvK Phase 3 Final Battle + Altar Capture RoK 2026](/blog/kvk-phase-3-final-battle-altar-capture-rok-2026)
- [Light & Darkness KvK Guide RoK 2026](/blog/light-darkness-kvk-guide-rok-2026)
- [Ark of Osiris Guide Strategy RoK 2026](/blog/ark-of-osiris-guide-strategy-rok-2026)
  `,
};
