import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "hospital-healing-optimization-rok-2026",
  title: "Hospital Healing Optimization RoK 2026 — Smart Heal + Healing Speedup Math",
  description: "Tối ưu hospital healing Rise of Kingdoms 2026: capacity calculation, healing speedup vs training new, priority heal order (T5 trước T1), và V2 bot tự động smart heal 24/7.",
  date: "2026-05-10",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Hospital Full — Nỗi Ám Ảnh Không Ai Nói Về

Bạn đang farm barb chain với V2, troops đang chết đều đặn, và đột nhiên: **march dừng hẳn**. Không phải bug. Hospital đầy.

Đây là bottleneck không ai nói đủ về: **healing capacity = army sustainability**. Không đủ hospital capacity hoặc không manage đúng → farming chain break liên tục → throughput thực tế giảm 30-50% so với lý thuyết.

Bài này giải quyết hospital management từ gốc rễ.

## Hospital Capacity Math

Hospital capacity trong RoK = số troops bị thương có thể chứa đồng thời.

| Hospital Level | Capacity / Hospital |
|---|---|
| Lv 20 | 10.000 |
| Lv 22 | 14.000 |
| Lv 24 | 18.500 |
| Lv 25 | 21.000 |

Thông thường có 4 Hospital slots. 4 × Hospital Lv 25 = **84.000 capacity**.

Với barb chain V2 (1 đạo, ~217 barb deaths/ngày):
- 217 barb kills × 200-500 wounded troops/kill (tùy commander) = ~43.000-108.000 wounded/ngày
- Heal time T4/T5: 2-4 phút/troop (tùy research)
- **84.000 capacity × 4-phút heal = ~5.600.000 phút heal capacity/ngày**

Số lý thuyết ổn. Vấn đề xảy ra khi **heal queue bị block** vì không có ai trigger heal sau khi troops vào hospital.

## Smart Heal Priority Order

Không phải all troops equal khi heal:

| Troop Type | Heal Priority | Lý Do |
|---|---|---|
| T5 (mọi loại) | Highest | Cost replace >> heal cost |
| T4 | High | Training cost cao |
| T3 | Medium | Moderate cost |
| T1/T2 | Lowest | Rẻ hơn train mới |

**Math quyết định**: T5 heal cost ~30% của training cost mới. T1 heal cost = tương đương train mới T1. Vì vậy:
- T5 wounded → **phải heal** (không heal = mất 70% value)
- T1 wounded → có thể **discard và train mới** nếu hospital đầy và cần clear space cho T5

> 📌 Xem thêm: [Troop Training T1 vs T5 Efficiency RoK 2026](/blog/troop-training-t1-vs-t5-efficiency-rok-2026) về T1 vs T5 decision math.

## Healing Speedup vs Training New — Khi Nào Nào?

**Heal hiệu quả hơn khi:**
- Troop tier T3+
- Healing speedup available (không dùng cho build/research)
- RSS eo hẹp (heal cost = 30% train cost)

**Train new hiệu quả hơn khi:**
- T1/T2 troops (heal vs train cost tương đương)
- Hospital đầy và cần clear space nhanh
- RSS abundant, speedup khan hiếm

### Healing Speedup Math

1.000 phút healing speedup:
- T5 heal: ~25-30 troops
- T4 heal: ~40-50 troops
- T3 heal: ~80-100 troops

1.000 phút training speedup:
- T5 train: ~22 troops (45 phút/troop)
- T4 train: ~40 troops
- T3 train: ~85 troops

Healing speedup và training speedup **tương đương về throughput** cho T5. Nhưng heal cost **ít RSS hơn 70%**. Nếu RSS là bottleneck: ưu tiên heal speedup.

## Healing Research Priority

Research tree "Development" có 2 nodes quan trọng cho heal:

1. **Healing Troops Speed** — giảm heal time/troop (priority đầu tiên)
2. **Hospital Capacity** — tăng beds (priority thứ hai)

Nhiều player đầu tư ngược lại. Heal speed > capacity vì: capacity không giúp nếu heal quá chậm → queue luôn đầy.

Target: **Healing Speed maxed → sau đó Capacity**.

## V2 Bot Smart Heal — Không Bao Giờ Hospital Block

Gói **V2 Cao Cấp 900.000đ/tháng** có smart heal automation:

- **Real-time wounded detection**: ngay khi troops vào hospital, bot trigger heal queue
- **Priority heal**: T5 và T4 được heal trước, T1/T2 heal sau hoặc discard nếu hospital approaching full
- **Speedup management**: bot giữ lại healing speedup riêng, không mix với building speedup
- **Continuous farm**: khi troops heal xong, march tự động được resend vào barb chain — không có human delay

Kết quả thực tế: với bot V2 smart heal, **barb chain không break do hospital** — heal và farm chạy song song liên tục. Throughput tăng 35-50% so với manual heal.

> 🤖 V2 smart heal: heal T5 trước, discard T1 khi cần, farm chain không break. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## 4 Hospital Setup Tối Ưu

Nhiều player chỉ build 2 hospital vì "không thấy cần". Mistake:

**4 Hospital × Lv 25** là investment phải làm trước KvK:

| Setup | Capacity | KvK Sustainability |
|---|---|---|
| 2 Hospital Lv 20 | 20.000 | Tệ — hospital full sau 1-2 rally |
| 4 Hospital Lv 22 | 56.000 | Trung bình |
| **4 Hospital Lv 25** | **84.000** | **Tốt — sustain 5-7 rally liên tục** |

4 Hospital Lv 25 cần City Hall 25 prerequisite. Nếu chưa đến đó: maximize level hiện tại của tất cả 4 slot.

## Anti-Pattern: Dùng Gem Heal

Nhiều player F2P dùng gem để instant-heal trong KvK. **Đây là gem drain tệ nhất**:

- 1.000 gem instant-heal ~5.000 T5 troops
- 1.000 gem mua speedup: ~800 phút healing = ~200 T5 troops (heal slow)
- Nhưng 1.000 gem dùng cho VIP point = **10-15 VIP points** (long-term value)

Gem không nên dùng cho heal trừ khi **emergency trong final hours KvK** khi rank reward justify.

## FAQ

### Nên có bao nhiêu hospital?
4 hospital là standard. Thay 1 hospital bằng building khác chỉ khi City Hall tier quá thấp để build 4 slot.

### Healing speedup và Training speedup có interchangeable không?
Không. Họ là separate resource. Healing speedup chỉ dùng cho heal, không dùng cho train (và ngược lại).

### V2 heal T1 không hay bỏ T1?
V2 smart heal: nếu hospital < 60% full → heal all. Nếu > 80% full → discard T1/T2 để clear space cho T5 heal.

## Đọc Thêm

- [Best Troop Types KvK RoK 2026](/blog/best-troop-types-kvk-rok-2026)
- [F2P → VIP 2 Bot Progression Roadmap RoK](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
- [Farm Fatigue & Quit Rate — Bot Solution RoK](/blog/farm-fatigue-quit-rate-bots-solution-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)
  `,
};
