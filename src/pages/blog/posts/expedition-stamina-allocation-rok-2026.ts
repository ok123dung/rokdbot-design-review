import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "expedition-stamina-allocation-rok-2026",
  title: "Expedition Stamina Allocation RoK 2026 — Daily 50 Stamina Best Stage",
  description: "50 stamina expedition mỗi ngày RoK 2026: best stage theo goal (rune material vs equipment fragment vs commander XP), allocation priority, và bot V2 tự động run optimal stage 24/7.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## 50 Stamina Mỗi Ngày Biến Mất Không Để Lại Gì

Expedition: 50 stamina sinh ra mỗi ngày. Mỗi stage tốn 10 stamina = **5 stage/ngày**.

Hỏi thật: bạn đang chạy stage nào? Tại sao stage đó? Kết quả nhận được so với potential tối đa là bao nhiêu phần trăm?

Nếu không trả lời được — bạn đang run expedition theo habit, không theo strategy. Và habit thường không tối ưu.

## Expedition System — Framework Cơ Bản

Expedition có nhiều chapter, mỗi chapter có 3-5 stage. Reward phân loại:

| Reward Type | Stage Chứa | Best Drop Rate Stage |
|---|---|---|
| Rune Material | Chapter 3-5, Stage 3-4 | Ch4-S3, Ch5-S2 |
| Equipment Fragment | Chapter 6-8, Stage 2-4 | Ch7-S3, Ch8-S2 |
| Commander XP | Chapter 1-3, Stage 1-3 | Ch2-S2, Ch3-S1 |
| Speedup Small | Mixed, all chapters | Ch3-S4, Ch5-S4 |
| Gold Coins | Chapter 5+, Stage 4-5 | Ch6-S5, Ch8-S4 |

**Không có 1 stage tối ưu cho tất cả mọi người.** Optimal stage phụ thuộc vào goal hiện tại của bạn.

## Allocation Priority Theo Growth Phase

### Phase 1: Beginner (City Hall ≤ 17)

**Goal**: Commander XP để expert sớm.

Best stage: **Chapter 2-3** (Commander XP drop cao nhất per stamina).

5 stage/ngày × Ch2-S2 = ~4.000-6.000 commander XP/ngày. Trong 30 ngày = 120.000-180.000 XP. Đủ để expert 1 Tier-B commander từ 0.

### Phase 2: Mid-game (City Hall 18-22)

**Goal**: Equipment Fragment + Rune Material để gear up.

Best stage: **Chapter 4-5** (mixed drop equipment fragment + rune material).

Split 50 stamina:
- 20 stamina → Ch4-S3 (rune material)
- 30 stamina → Ch5-S3 (equipment fragment)

5 stage/ngày với split này → ~3 rune material + 2 equipment fragment/ngày. Trong 30 ngày: **90 rune material + 60 equipment fragment**.

### Phase 3: Late-game / KvK Ready (City Hall 23-25)

**Goal**: Legendary equipment material + Gold Coins cho crafting.

Best stage: **Chapter 7-8** (legendary material drop, gold coin drop).

Chapter 7-8 stage có difficulty cao hơn — cần commander đủ mạnh hoặc bot để auto-clear không fail.

## Pain Point — 3 Lỗi Phổ Biến Nhất

**Lỗi 1: Stuck Chapter cũ vì "an toàn"**

Chapter 2-3 clear trong 10 giây, reward tệ cho mid-game. Nhưng vì quen → không bao giờ push sang chapter mới. Reward/stamina thấp hơn 40-60%.

**Lỗi 2: Bỏ stamina quá ngày**

Stamina cap 150 (3 ngày). Nếu không run 50/ngày → overflow và mất. Nhiều player tích đến 150/150 rồi phí 50 stamina mỗi ngày tiếp theo.

**Lỗi 3: Run sai chapter cho goal**

Cần commander XP nhưng đang run chapter 7 (equipment drop). Cần rune material nhưng đang run chapter 1 (XP drop). Không có chiến lược → allocation ngẫu nhiên → 30-50% stamina waste.

> 🤖 V2 auto-detect growth phase và run optimal chapter/stage mỗi ngày. 50 stamina không bao giờ bị phí. [Xem V2 →](/#packages) · 900.000đ/tháng.

## So Sánh Output 30 Ngày

| Strategy | Ch2-3 (XP) | Ch4-5 (Split) | Ch7-8 (Late) |
|---|---|---|---|
| Commander XP | 150.000+ | 40.000 | 10.000 |
| Rune Material | 0 | 90 | 30 |
| Equip Fragment | 0 | 60 | 20 |
| Legendary Material | 0 | 5 | 30 |
| Gold Coin | 500 | 1.200 | 3.000 |

Không có strategy tốt cho tất cả. **Chọn theo pha growth hiện tại**.

Bot V2 biết bạn đang ở phase nào dựa trên City Hall level và commander status → tự chọn chapter tối ưu.

## Stamina Regeneration — Đừng Để Overflow

50 stamina sinh ra mỗi ngày. Cap 150. Nếu cap = đang phí stamina.

**Kế hoạch tránh overflow**:

- Run đủ 50/ngày minimum
- Nếu event có bonus stamina reward: run 60-70/ngày trong event window
- KvK prep: push chapter mới để unlock stage reward cao hơn trước KvK

Bot V2: expedition auto-run ngay khi stamina reach threshold (≥10), không bao giờ overflow.

## Chapter Unlock — Cần Làm Gì Trước

Chapter cao cần commander power nhất định để clear. Nếu fail stage → mất stamina.

**Checklist trước khi push chapter mới**:

1. Test stage đầu của chapter với commander mạnh nhất
2. Nếu clear trong 1 attempt → safe push
3. Nếu fail → farm XP thêm hoặc upgrade equipment trước
4. Bot V2: tự test stage mới, không push nếu clear rate < 90%

## FAQ

### Stamina có mua thêm không?

Có, từ event chest và shop. Nhưng không nên mua — stamina free 50/ngày đủ nếu run consistently. Dành gem cho thứ khác.

### Expedition co-op (cùng member alliance) có reward tốt hơn không?

Co-op unlock thêm bonus reward lần đầu clear stage mới. Sau đó solo và co-op reward giống nhau. Priority: clear stage mới với co-op lần đầu để nhận bonus.

### Nếu fail stage thì có mất stamina không?

Có. Stamina consumed khi enter stage, không hoàn lại nếu fail. Đây là lý do không push chapter mới khi commander chưa đủ mạnh.

## Bắt Đầu Ngay

**V2 Cao Cấp 900.000đ/tháng** — expedition auto 50 stamina/ngày, optimal chapter tự chọn theo phase:

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Rune System Optimization RoK 2026](/blog/rune-system-optimization-rok-2026)
- [Pet System Tier List RoK 2026](/blog/pet-system-tier-list-rok-2026)
- [Auto Build Research RoK VIP Template](/blog/auto-build-research-rok-vip-template)
  `,
};
