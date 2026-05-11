import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "kvk-season-8-complete-guide-rok-2026",
  title: "KvK Season 8 Complete Guide RoK 2026 — Phase 1-3 Strategy Cho Top 50 Alliance",
  description: "KvK Season 8 RoK 2026: breakdown đầy đủ Phase 1 Lost Kingdom → Phase 2 Destroy → Phase 3 Final Battle. Strategy Top 50 alliance, honor threshold, bot pre-schedule, và roadmap 14 ngày để không mất rank.",
  date: "2026-05-10",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## 14 ngày KvK — đa số alliance thua từ ngày 3

Không phải vì thiếu lực. Vì thiếu kế hoạch. KvK Season 8 có 3 phase với cơ chế khác nhau — đội nào không đọc kỹ mechanics sẽ đốt AP vào sai target, mất honor, mất rank Top 50.

Bài này phân tích từng phase, số liệu threshold thực tế, và cách bot giúp mày duy trì farm 24/7 xuyên suốt 14 ngày — kể cả 3am giờ VN.

## Phase 1 — Lost Kingdom: Di Cư & Cắm Đất (Ngày 1-4)

Phase 1 không phải phase đánh. Phase 1 là **phase cắm cờ chiến lược**.

### Ưu tiên ngày 1-2

- **Migrate**: toàn bộ alliance di cư đồng loạt. Kéo dài migration > 6 tiếng = mất lợi thế vị trí.
- **Settle territory**: chiếm ô tài nguyên lv5 gần lost temple — mỗi tile lv5 tạo ra buffer supply cho phase 2.
- **Reinforcement stack**: top 5 player power cao nhất garrison trước 24h đầu.

### Honor threshold Phase 1

Top 50 kingdom thường yêu cầu mỗi R4+ đạt **tối thiểu 80.000 honor** trong Phase 1. Số này tương đương ~350-400 con rợ chết (barb lv25+) nếu không rally.

Manual farm 3am? Bot chạy liên tục từ khi KvK mở đến hết Phase 1 — không bỏ sót 1 tiếng nào.

> 🤖 V3 Siêu Cấp 2 đạo chain — đạt 80.000 honor Phase 1 trong 48h đầu không cần bật máy. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Phase 2 — Destroy: Đánh Công Trình & Barb Fort (Ngày 5-10)

Phase 2 là phase honor thật sự. Cơ chế:

- **Barb Fort lv4-6** mở rộng toàn map — mỗi barb fort lv6 cho ~4.000-8.000 honor / rally thắng.
- **Alliance resource building** (crystal, ore, wood): destroy để thay alliance mình build → buff % production cho cả alliance.
- **Enemy city tile**: thắng battle → bonus honor multiplier 1,5-2x tùy civilization advantage.

### Phân công lực lượng

| Role | Nhiệm vụ | Honor Target |
|---|---|---|
| R5/R4 Rally Lead | Rally barb fort lv5-6 | 500k+ |
| R4 Shield | Garrison flag chính | 200k+ |
| R3 Barb Chain | 24/7 kéo rợ | 150k+ |
| R3 Scout | Track enemy migration | 50k |

Bot đảm nhiệm slot **R3 Barb Chain** — đây là slot tiêu hao nhiều thời gian nhất và không cần human judgment.

## Phase 3 — Final Battle (Ngày 11-14)

Phase 3: **tất cả đổ vào Lost Temple và Sacred Place**. Cơ chế:

- Chiếm Temple = buff 10% toàn kingdom (combat power, resource production).
- Sacred Place = +5% thêm. Top 3 kingdom Sacred Place cuối KvK = tier reward cao nhất.

### Sai lầm phổ biến Phase 3

Đa số alliance dốc AP vào Phase 3 khi đã **cạn kiệt troops từ Phase 2**. Giải pháp: bot heal + train auto từ Phase 1 để troops luôn sẵn sàng cho Phase 3.

> 🤖 V3 auto heal + train 24/7 — troops luôn full trước Final Battle. [Xem V3 Siêu Cấp →](/#packages).

## Roadmap 14 Ngày Top 50

| Ngày | Phase | Ưu tiên |
|---|---|---|
| 1-2 | Phase 1 | Migrate + garrison + tile lv5 |
| 3-4 | Phase 1 | Barb chain honor threshold |
| 5-7 | Phase 2 | Rally barb fort lv5+ |
| 8-10 | Phase 2 | Destroy enemy building + heal troops |
| 11-12 | Phase 3 | Push Lost Temple |
| 13-14 | Phase 3 | Sacred Place + final honor push |

Bot chạy liên tục slot "barb chain" và "auto heal" trong toàn bộ 14 ngày — giải phóng time cho mày focus vào rally decision và diplomacy.

## Bot Pre-Schedule Quan Trọng Như Thế Nào?

**Không có bot**: mày cần online ~6-8h/ngày × 14 ngày = **84-112 tiếng**. Thực tế không ai làm được.

**Với bot V3**: bot chạy barb chain + heal + build 20h/ngày. Mày chỉ cần online **2-3h** cho rally decision và phase push. Tiết kiệm 60-80% thời gian, output honor không giảm.

### Số liệu thực tế KvK Season 8 (case study V3)

- Phase 1 honor sau 4 ngày bot: **~120.000** (2 đạo chain)
- Phase 2 honor sau 6 ngày: **~380.000** (barb fort + rợ chain)
- Phase 3 honor: ~**50.000** (bot tiếp tục barb chain khi player đang rally)
- **Tổng: ~550.000 honor / 14 ngày** — an toàn Top 50 kingdom

## FAQ

### Bot có bị detect trong KvK không?
RokdBot chạy cloud server riêng, không inject client. KvK hay non-KvK detect rate như nhau — **<0,1%** trong 8 seasons.

### V2 hay V3 cho KvK?
V3 2 đạo rõ ràng hơn cho KvK vì honor/ngày gấp đôi. Nếu power < 20M, V2 1 đạo vẫn đủ Top 100 kingdom.

### Cần pre-schedule bao lâu trước KvK?
Tối thiểu **48h** trước ngày KvK mở: configure bot barb chain pattern, check commander pair, test heal cycle.

## Bắt Đầu KvK Season 8 Với V3

**V3 Siêu Cấp 1.200.000đ/tháng**:
- 2 đạo barb chain 24/7 với Combo Spam + Luring + AOE
- Auto heal + train + build trong toàn bộ KvK 14 ngày
- Honor ~430 con rợ/ngày = top alliance contribution

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [KvK Season Prep Bot Checklist RoK 2026](/blog/kvk-season-prep-bot-checklist-rok-2026)
- [Auto Honor Farming KvK RoK 2026](/blog/auto-honor-farming-kvk-rok-2026)
- [Rally Attack vs Defense KvK RoK 2026](/blog/rally-attack-vs-defense-kvk-rok-2026)
- [Anti-Zeroing Strategy RoK 2026 — Không bị wipe trong KvK Pass 4](/blog/anti-zeroing-strategy-rok-2026)
- [KvK Matchmaking Algorithm RoK 2026 — Tại sao kingdom yếu vẫn pair với mạnh](/blog/kvk-matchmaking-algorithm-rok-2026)
- [KvK Season Schedule 2026 Overview — Lịch full năm](/blog/kvk-season-schedule-2026-overview-rok)
- [Pre-KvK Anxiety — Bot relief cho casual player](/blog/pre-kvk-anxiety-bot-relief-rok-2026)
  `,
};
