import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "f2p-speedup-management-strict-rok-2026",
  title: "F2P Speedup Management Strict RoK 2026 — Burn Schedule Tránh Lãng Phí",
  description: "F2P không nạp không thể lãng phí speedup. Phân tích nguồn speedup, burn schedule theo từng giai đoạn game, priority stack (build vs research vs train vs heal), và lý do 80% F2P burn sai thứ tự.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Speedup Là Tài Nguyên Hiếm Nhất F2P Có

Gem có thể farm từ mine. RSS có thể gather. Honor có thể barb kill. Speedup — không thể grind thêm. Chỉ có từ: event, KvK reward, VIP chest, alliance gift.

F2P trung bình nhận **~15-25 tiếng speedup/tuần** từ tất cả sources kết hợp. Nghe nhiều — nhưng build City Hall 24 → 25 cần **4.000-6.000 tiếng** build time (tổng tất cả buildings cần unlock).

**Burn sai 1 lần = delay City Hall 2-3 ngày**. Tích lũy 6 tháng = delay City Hall 2-3 tuần.

## 4 Loại Speedup Và Priority Stack

### Build Speedup

Dùng cho: City Hall upgrade, Barracks, Hospital, Academy, Farm, Lumber Mill, Quarry, Gold Pit.

Priority F2P: **Cao nhất**. City Hall level unlock march slot, research branch, troop tier. Mỗi level CH là multiplier cho tất cả nguồn tăng trưởng khác.

### Research Speedup

Dùng cho: Academy research (Economy, Military, Equipment).

Priority F2P: **Cao thứ hai**. Research buff permanent — không mất khi troops bị đánh. Economy research priority trước Military trong 6 tháng đầu.

### Training Speedup

Dùng cho: Train troops T1-T5.

Priority F2P: **Trung bình — nhưng phụ thuộc giai đoạn**. Không burn training speedup khi chưa có đủ RSS + hospital capacity. T4 troops cost rất lớn — sai timing = troops chết không heal được.

### Healing Speedup

Dùng cho: Heal wounded troops.

Priority F2P: **Thấp nhất trong thời bình, cao nhất trong KvK**. Không bao giờ burn healing speedup ngoài KvK trừ khi hospital sắp đầy và mày cần troops ngay.

## Burn Schedule Theo Giai Đoạn

### Month 1-2 (CH < 22): Build First

Toàn bộ build speedup → City Hall prerequisites. Không exception.

Research speedup allocation: 70% Economy / 30% Military. Economy: Gathering → Architecture → Siege.

| Loại speedup | Allocation |
|---|---|
| Build | 100% → CH prerequisites |
| Research | 70% Economy, 30% Military |
| Training | Giữ lại, không burn |
| Healing | Giữ lại hoàn toàn |

**Sai lầm phổ biến Month 1**: burn training speedup để có troops nhanh hơn. T1-T2 troops không cần speedup — train time ngắn. Speedup đó nên để dành cho T4 training sau này.

### Month 3-4 (CH 22-24): Research Push

City Hall 22-24 prerequisites xong → switch sang research grind.

Military research từ CH 22: unlock T3 troop → power spike. Nhưng đừng train T3 ngay — chờ CH 24 để có hospital capacity đủ.

| Loại speedup | Allocation |
|---|---|
| Build | 60% CH / 40% Academy, Hospital |
| Research | 50% Economy, 50% Military |
| Training | 0% — tiếp tục hold |
| Healing | 0% — hold cho KvK |

### Month 4-5 (CH 24-25): Training Unlock

CH 25 trong tầm tay — giờ là thời điểm bắt đầu burn training speedup cho T4:

- Hospital capacity ≥ 500k troops trước khi train aggressive
- T4 research complete (Tier 4 Troops node in Military tree)
- RSS reserve ≥ 200M food + 200M wood để sustain training queue

| Loại speedup | Allocation |
|---|---|
| Build | 50% (giảm dần) |
| Research | 30% (late-game nodes) |
| Training | 20% (bắt đầu) |
| Healing | Hold cho KvK |

### KvK Season (bất kỳ tháng nào): Emergency Protocol

KvK đổi tất cả priorities:

- Healing speedup: **dùng ngay** khi hospital đầy để giải phóng slot
- Training speedup: burn để replace dead troops nhanh
- Build/Research: **tạm dừng** nếu cần focus KvK score

> 🤖 V1 tự động manage speedup burns theo priority — không để build queue idle, không waste training speedup sai giai đoạn. [Xem V1 →](/#packages) · 750.000đ/tháng.

## 5 Lỗi Speedup Phổ Biến Nhất

### Lỗi 1: Burn healing speedup trong thời bình

Heal troops khi không cần combat → lãng phí. Troops healed → idle ở nhà → không contribute gì. Chỉ heal khi cần troops cho action cụ thể.

### Lỗi 2: Train T3 trước khi có hospital

T3 troops cost nhiều RSS và train time. Nếu bị đánh trong KvK, toàn bộ T3 vào hospital. Hospital không đủ capacity → troops die permanently. Dead troops = mất resources đã train không recover được.

### Lỗi 3: Research Military quá sớm

Military research không yield return nếu chưa có T4 troops. Economy research (Architecture, Gathering, Siege) yield daily return từ ngày đầu. **Economy trước, Military sau**.

### Lỗi 4: Không track speedup inventory

Nhiều F2P không biết mình có bao nhiêu speedup. Result: panic burn khi thấy event "dùng speedup nhận reward" — và đốt nhầm loại. Track inventory mỗi tuần.

### Lỗi 5: Dùng universal speedup cho training

Universal speedup (màu gold, dùng được cho tất cả) = quý nhất. Đừng dùng cho training (có training speedup riêng). Universal dành cho: build khi không có build speedup, hoặc research cuối game.

## Speedup Sources F2P

| Source | Loại | Lượng/tuần |
|---|---|---|
| Daily Objectives | Mixed | ~2-3h |
| KvK event rewards | Mixed | ~5-8h (KvK week) |
| VIP chest | Build/Research | ~1-2h |
| Alliance gift | Mixed | ~1h |
| Expedition event | Training heavy | ~3-5h/event |
| Kingdom events | Mixed | ~2-4h |

Total average: **~15-25 tiếng/tuần** từ tất cả sources.

## Burn Schedule Template F2P

Mỗi thứ Hai: Review inventory. Phân loại:

- **Build**: [X]h — plan cho CH prerequisites tuần này
- **Research**: [X]h — node nào tiếp theo
- **Training**: HOLD (trừ khi KvK hoặc hospital đủ)
- **Healing**: HOLD (trừ KvK emergency)
- **Universal**: RESERVE — chỉ dùng khi thiếu build/research

Bot V1 tự động theo schedule này — không cần mày nhớ thủ công.

## Đọc Thêm

- [F2P 6-Month Roadmap RoK 2026](/blog/f2p-6-month-roadmap-rok-2026)
- [F2P City Hall 25 Không Nạp RoK 2026](/blog/f2p-city-hall-25-no-spend-rok-2026)
- [F2P Day 1-30 Beginner Checklist RoK 2026](/blog/f2p-day-1-30-beginner-checklist-rok-2026)
- [F2P Beginner Mistakes Bot Solves Day 1-30 RoK 2026](/blog/f2p-beginner-mistakes-bot-solves-day-1-30-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)
  `,
};
