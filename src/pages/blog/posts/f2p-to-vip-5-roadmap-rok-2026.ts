import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "f2p-to-vip-5-roadmap-rok-2026",
  title: "F2P → VIP 5 Roadmap RoK 2026 — 90 Ngày Không Nạp 1 Đồng (Bot Trial → V1)",
  description: "Roadmap chi tiết F2P lên VIP 5 trong 90 ngày không nạp tiền Rise of Kingdoms 2026: nguồn VIP point, daily task, event exploit, và bot Trial/V1 tự động hóa grinding.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## VIP 5 Trong 90 Ngày — Có Khả Thi Không?

Câu hỏi này xuất hiện mỗi tuần trên Reddit RoK. Và câu trả lời thường nhận được là "không thể" hoặc "phải nạp".

Cả hai đều sai.

VIP 5 trong 90 ngày là **khả thi hoàn toàn** cho F2P — nhưng cần hiểu đúng nguồn VIP point và không bỏ lỡ bất kỳ daily nào trong 90 ngày đó. Đây là nơi hầu hết player thất bại: không phải vì thiếu nguồn, mà vì **thiếu consistency**.

## VIP Point Sources — Tổng Hợp Đầy Đủ

### Daily Sources (không giới hạn thời gian)

| Source | VIP Points/ngày | Notes |
|---|---|---|
| Daily Objectives (hoàn thành 8/8) | 60 | Phải claim manual |
| VIP Chest (mở 1 lần/ngày) | 10-30 | Drop ngẫu nhiên, average ~18 |
| Alliance Check-In | 20 | Cần active alliance |
| Kingdom Events Daily | 30-50 | Phụ thuộc event |
| **Tổng daily trung bình** | **~128 points** | |

### Event Sources (giới hạn thời gian)

- **ROK Birthday / Anniversary**: 500-1.000 VIP points qua event chain
- **Kingdom vs Kingdom (KvK)**: 100-400 VIP points từ honor ranking rewards
- **Season of Conquest**: 200-500 VIP points
- **Expedition/Elite Barbarians**: 50-150 VIP points/event

### VIP Level Requirements

| VIP Level | Total Points Required | Còn lại từ Lv 0 |
|---|---|---|
| VIP 3 | 2.200 | 2.200 |
| VIP 4 | 6.200 | 4.000 |
| **VIP 5** | **16.200** | **10.000** |

Với 128 points/ngày × 90 ngày = **11.520 points** từ daily alone. Thêm 2-3 events trong 90 ngày = 1.000-2.000 points nữa.

**Tổng 90 ngày: 12.500 – 13.500 points** → đủ VIP 5 nếu bắt đầu từ Lv 3 (2.200 points base), hoặc gần đủ nếu từ Lv 0.

## Tại Sao Hầu Hết F2P Thất Bại

Math ổn. Vậy tại sao không ai lên VIP 5 F2P trong 90 ngày?

**Miss rate của daily**. Khảo sát không chính thức trên RoK Discord VN 2026: player trung bình **bỏ lỡ 35-45% daily objectives** do:

- Quên claim sau khi hoàn thành task
- Không online đúng reset time
- Miss VIP chest (1 lần/ngày, không stack)
- Alliance check-in miss khi bận

35% miss rate × 90 ngày = **chỉ còn ~8.300 points** — thiếu VIP 5 gần 2.000 points.

Consistency là bottleneck. Không phải nguồn.

## Cách Bot Trial + V1 Giải Quyết Consistency Problem

### Bot Trial (150.000đ)

Trial RokdBot gồm daily task automation cơ bản:

- Auto claim Daily Objectives sau khi complete
- Auto open VIP chest đúng reset time
- Auto collect Alliance check-in
- Không miss 1 ngày nào trong 30 ngày Trial

30 ngày Trial với 0% miss = **3.840 points** (thay vì ~2.300 nếu miss 40%).

> 🤖 Trial 30 ngày: 150.000đ, daily automation không miss. [Xem Trial →](/#packages) · Kích hoạt trong 24h.

### Bot V1 (750.000đ/tháng)

V1 thêm:

- Auto complete Daily Objectives (build, train, gather tasks)
- Event tracking — bot alert khi event VIP point khả dụng
- Alliance event participation auto
- Farm RSS + gem tự động để fund event costs

V1 trong 60 ngày tiếp theo sau Trial: **~7.800-8.500 points** với 0% miss + event bonus.

**Trial (30 ngày) + V1 (60 ngày) = ~12.000-13.000 points** → đạt VIP 5 trong 90 ngày từ Lv 3, hoặc VIP 4+ từ Lv 0.

## 90-Day Timeline Chi Tiết

### Ngày 1-30: Trial Phase

- Kích hoạt Trial 150k
- Bot chạy daily automation
- Focus: không miss bất kỳ daily nào
- Target: tích ~3.800 points + hoàn thành KvK event đầu (nếu có)

### Ngày 31-60: V1 Phase 1

- Upgrade lên V1 750k
- Thêm RSS farm automation → fund event purchases
- Tham gia Expedition events (VIP point source tốt)
- Target: thêm ~4.000 points

### Ngày 61-90: V1 Phase 2 + Event Push

- Focus vào bất kỳ event "VIP point double" nào trong giai đoạn này
- ROK events thường có VIP bonus event 1-2 lần/90 ngày
- Target: thêm ~4.500-5.000 points (bao gồm event bonus)

Tổng: **~12.300 – 13.300 points** trong 90 ngày. Đủ VIP 5 từ base Lv 3.

> 🤖 V1 750k/tháng: daily automation + gather + build. [Xem V1 →](/#packages) · 750.000đ/tháng.

## VIP 5 Benefits — Tại Sao Đáng Đầu Tư

| Benefit | VIP 3 | **VIP 5** |
|---|---|---|
| Extra builder queue | 0 | +1 (tổng 2) |
| Training speed | +3% | +8% |
| Research speed | +2% | +6% |
| Daily free gems | 20 | 50 |
| VIP chest quality | Basic | Enhanced (+30% rare drop) |
| March speed | +2% | +5% |

**VIP 5 là threshold quan trọng nhất** cho F2P vì unlock extra builder. 2 builder queue = build speed gần double so với 1 builder, không cần gem mua thêm builder rush.

## FAQ

### Cần bao nhiêu VIP point để từ 0 lên VIP 5?
16.200 points từ VIP 0. Nếu đã ở VIP 3 (phổ biến sau 1-2 tháng chơi): 10.000 points.

### Trial 150k có đáng không nếu chỉ muốn test bot?
Trial đáng nếu: bạn muốn test trước khi commit V1, hoặc đang trong giai đoạn đầu game khi cần daily automation hơn farming chain.

### Nếu miss event trong 90 ngày thì sao?
Fallback: thêm 15-20 ngày. VIP 5 trong 105 ngày vẫn là F2P achievement. Không phải thất bại.

## Đọc Thêm

- [F2P Day 1-30 Beginner Checklist RoK 2026](/blog/f2p-day-1-30-beginner-checklist-rok-2026)
- [F2P → VIP 2 Bot Progression Roadmap RoK](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
- [F2P City Hall 25 Không Nạp RoK 2026](/blog/f2p-city-hall-25-no-spend-rok-2026)
- [F2P Beginner Mistakes Bot Solves RoK 2026](/blog/f2p-beginner-mistakes-bot-solves-day-1-30-rok-2026)

[→ Xem 5 gói cước](/#packages) (**Trial 150k** · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)
  `,
};
