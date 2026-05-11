import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "speedup-stockpile-management-rok-2026",
  title: "Speedup Stockpile Management RoK 2026 — 1.000+ Ngày Speedup Burn Strategy",
  description: "Chiến lược quản lý speedup stockpile Rise of Kingdoms 2026: phân loại speedup, burn priority, KvK vs peace time allocation, và bot V1/V2 tự động spend đúng thời điểm.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## 1.000 Ngày Speedup Và Bạn Không Biết Dùng Như Nào

Nhiều player tích lũy hàng trăm, thậm chí hàng nghìn ngày speedup nhưng không có strategy rõ ràng. Kết quả: hoặc burn sạch vào một thứ rồi thiếu cho thứ khác, hoặc tích đến hết game không dùng.

Speedup là **currency thứ hai của RoK**, quan trọng không kém RSS nhưng ít được phân tích hơn.

Bài này là framework quản lý speedup từ 100 ngày đến 1.000+ ngày stockpile.

## Phân Loại Speedup — 4 Loại Khác Nhau

Đây là điều nhiều beginner không biết: **speedup không phải universal**. 4 loại:

| Loại | Dùng Cho | Không Dùng Cho |
|---|---|---|
| **Universal Speedup** | Tất cả (build/research/train/heal) | — |
| **Building Speedup** | Build buildings only | Research, train, heal |
| **Research Speedup** | Research only | Build, train, heal |
| **Training Speedup** | Train troops only | Build, research, heal |
| **Healing Speedup** | Heal wounded only | Build, research, train |

**Sai lầm phổ biến nhất**: dùng Universal cho thứ đang có specific speedup. Universal là rare và valuable — chỉ dùng khi specific speedup không đủ.

## Speedup Priority Framework

### Peace Time (Không KvK)

Priority order:

1. **Research** (highest multiplier on future gain)
2. **Building** (City Hall + prerequisites)
3. **Training** (passive queue fill)
4. **Healing** (minimal — không cần rush heal in peace)

Trong peace time, Research speedup > Building speedup > Training speedup về value per minute vì Research có compound effect (unlock higher tier = permanent multiplier).

### KvK Preparation (2-4 Tuần Trước)

Flip priority:

1. **Training** (build army cho KvK)
2. **Building** (Hospital, Barracks upgrades trước KvK)
3. **Research** (Military tree nếu còn kịp)
4. **Healing** (stock healing speedup, không dùng training speedup cho heal)

> 📌 Xem thêm: [Best Troop Types KvK RoK 2026](/blog/best-troop-types-kvk-rok-2026) về army composition cần training cho.

### KvK Active

1. **Healing** (troops về hospital liên tục, heal để resend)
2. **Training** (refill army, đặc biệt T1 meat shield)
3. **Research** (nếu có Military node gần hoàn thành)
4. **Building** (chỉ nếu unlock critical node ngay trong KvK)

## Speedup Income Sources — Tổng Hợp Monthly

| Source | Phút/tháng (estimate) | Notes |
|---|---|---|
| Daily Objectives | 1.440-2.160 | 24h-36h/tháng |
| Alliance Events | 2.880-5.760 | Tùy event frequency |
| KvK Rewards | 5.760-17.280 (1 KvK) | Rank-dependent |
| Expedition Events | 1.440-2.880 | Monthly event |
| Chest Drops | 2.880-5.760 | RNG, bình quân |
| **Monthly Total** | **~14.400-33.840** | **10-24 ngày/tháng** |

Với bot V1/V2 không miss bất kỳ daily nào: **tiệm cận upper bound 24 ngày/tháng**. Manual với 35% miss rate: ~14-16 ngày/tháng.

**Sự khác biệt trong 12 tháng**: bot = 288 ngày speedup. Manual = 192 ngày speedup. **96 ngày chênh lệch** — tương đương 3 tháng City Hall upgrade.

## Burn Strategy Theo Stockpile Size

### Stockpile < 100 Ngày

**Conservative mode**:
- Chỉ dùng specific speedup (không universal)
- Research priority
- Không burn vào T1 training
- Target: tích đến 200 ngày trước KvK tiếp theo

### Stockpile 100-500 Ngày

**Active mode**:
- Research + Building balance 60/40
- Training speedup dùng cho T4/T5 queue
- Universal chỉ dùng nếu queue gần expire (không expire thì không dùng)

### Stockpile 500-1.000 Ngày

**Aggressive mode**:
- KvK prep: burn 200+ ngày training speedup 4 tuần trước
- Research: finish critical Military nodes
- Building: rush Hospital + Barracks trước KvK

### Stockpile 1.000+ Ngày

Nếu có 1.000+ ngày tích lũy mà không strategy → **đây là symptom của không có clear goal**. Action items:

1. Tính RSS requirement cho City Hall 25 (xem bài F2P CH 25)
2. Tính army size target cho next KvK
3. Backward plan: cần burn bao nhiêu training speedup/tuần để hit target
4. Set bot V1/V2 tự động execute plan này

> 🤖 V1/V2 tự động manage speedup burn theo phase: peace → KvK prep → KvK active. Không cần manually track. [Xem gói →](/#packages).

## Bot V1 vs V2 Speedup Management

### V1 (750k)
- Auto-spend building speedup khi queue available
- Auto-spend research speedup vào active research
- Không idle bao giờ — speedup được dùng liên tục

### V2 (900k)
- Thêm: KvK phase detection
- Pre-KvK: tự động switch từ research/build sang training priority
- KvK active: auto-spend healing speedup ngay khi troops vào hospital
- Smart allocation: giữ 30-day reserve healing speedup khi KvK active

> 🤖 V2 phase-aware speedup: research mode → training mode → heal mode tự động theo KvK calendar. [Xem V2 →](/#packages) · 900.000đ/tháng.

## Common Mistakes — Đừng Làm Những Thứ Này

**1. Dùng Universal speedup cho research khi có Research speedup**
Mỗi lần làm vậy = waste ~1-2 ngày Universal value.

**2. Burn training speedup trong peace time cho T1**
T1 train trong 0,5 phút/troop không cần speedup. Dùng speedup cho T5 (45 phút/troop) mới có ý nghĩa.

**3. Không phân biệt Healing speedup và Training speedup**
Nhiều player burn training speedup để heal (chỉ universal mới làm được cả hai — training speedup KHÔNG dùng được cho heal).

**4. Hoard mà không burn trước KvK**
1.000 ngày speedup trong inventory không có value. Value chỉ xuất hiện khi được dùng đúng timing.

## FAQ

### Speedup có expire không?
Không expire. Nhưng "opportunity cost" của không dùng = mất growth time.

### Nên burn hết speedup trước mỗi KvK không?
Không. Giữ lại 30-60 ngày healing speedup để sustain trong KvK. Burn training và building pre-KvK, không phải healing.

### V1 và V2 khác nhau về speedup management như thế nào?
V1: continuous burn theo priority queue. V2: phase-aware — biết khi nào KvK và tự adjust priority.

## Đọc Thêm

- [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026)
- [F2P City Hall 25 Không Nạp RoK 2026](/blog/f2p-city-hall-25-no-spend-rok-2026)
- [Auto Build Research RoK VIP Template](/blog/auto-build-research-rok-vip-template)
- [Farm Fatigue & Quit Rate — Bot Solution RoK](/blog/farm-fatigue-quit-rate-bots-solution-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · **V2 900k** · V3 1,2M · Premium VIP 3M)
  `,
};
