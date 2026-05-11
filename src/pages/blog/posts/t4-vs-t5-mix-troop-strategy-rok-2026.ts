import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "t4-vs-t5-mix-troop-strategy-rok-2026",
  title: "T4 vs T5 Mix Troop Strategy RoK 2026 — Cost vs Power Math",
  description: "T4 hay T5? Mix hay thuần? Cost vs power math thực tế RoK 2026: training RSS, heal cost, combat effectiveness, và khi nào mix T4/T5 là đúng hơn thuần T5. V2 bot tự tính train schedule tối ưu.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## T4 vs T5 — Câu Hỏi Không Có Trả Lời Đơn Giản

Mày vừa unlock T5. Phản xạ: train full T5, bỏ hết T4. Đây là lỗi tốn 5-10 tỷ RSS không cần thiết.

T5 mạnh hơn T4 — nhưng "mạnh hơn" bao nhiêu và "tốn hơn" bao nhiêu? Math cụ thể quyết định khi nào train T5, khi nào giữ T4, và khi nào mix là optimal.

## T4 vs T5 — Combat Stat Comparison

| Metric | T4 (per troop) | T5 (per troop) | T5 advantage |
|---|---|---|---|
| Attack | ~50 | ~75 | +50% |
| Defense | ~45 | ~68 | +51% |
| HP | ~800 | ~1.200 | +50% |
| Load (gather) | ~1.000 | ~1.500 | +50% |

T5 across the board mạnh hơn ~50% per troop. Nghĩa là 500K T4 vs 500K T5 = T4 thua rõ ràng.

**Nhưng đây không phải comparison đúng.** Comparison đúng là: cùng RSS budget, mày train được bao nhiêu T4 vs T5?

## Cost Per Troop — T4 vs T5

| Resource | T4 cost / troop | T5 cost / troop | Ratio |
|---|---|---|---|
| Food | ~5.000 | ~12.000 | T5 tốn 2.4× |
| Wood | ~3.000 | ~8.000 | T5 tốn 2.7× |
| Stone | ~2.000 | ~5.000 | T5 tốn 2.5× |
| Gold | ~1.000 | ~2.500 | T5 tốn 2.5× |
| Training time | 30s | 60s | T5 tốn 2× |

**T5 tốn ~2.5× RSS và 2× time so với T4 per troop.** Nhưng T5 chỉ mạnh hơn ~50%. Nghĩa là:

> Cùng 10 tỷ food: train 2.000.000 T4 hoặc 833.000 T5.

2M T4 vs 833K T5 trong battle: T4 thắng vì **số lượng vượt trội offset stat disadvantage**.

## Khi Nào Dùng Thuần T4

- **Power dưới 40M**: RSS bottleneck, train T4 nhiều hơn = army lớn hơn
- **Farm/gather focus**: T4 load capacity đủ cho gathering, không cần T5
- **Defensive filler**: fill hospital với T4 wounded rẻ hơn nhiều so với T5
- **Heal cost consideration**: heal 100K T4 = ~6M food, heal 100K T5 = ~13M food

**Train T4 khi:** mày cần army lớn nhanh, không có RSS thừa, hoặc dùng cho hospital buffer.

> 📌 Xem thêm: [T5 Unlock Requirements RoK 2026](/blog/t5-unlock-requirements-rok-2026) cho prerequisites và timeline.

## Khi Nào Dùng Thuần T5

- **Power 80M+**: đã có đủ RSS throughput (farm acc + bot) để sustain T5 rate
- **KvK rally lead**: rally march cần stat per troop cao để outperform defend
- **Whale**: heal cost T5 không phải bottleneck khi RSS farm không giới hạn
- **After full T5 unlock**: khi không cần T4 troop count anymore

## Mix Strategy — Optimal Cho Mid Game

Đây là strategy ít ai nói đến nhưng hiệu quả nhất cho power **40-80M**:

**Mix ratio 60/40 T5/T4**:

- 60% army là T5 (stat punch)
- 40% army là T4 (fill bulk, giảm heal cost, giảm train time bottleneck)

**Kết quả**: army tổng mạnh hơn pure T4 về combat (vì T5 core), nhưng rẻ hơn pure T5 ~35% về training và healing cost.

| Army Composition | RSS to Build | Combat Strength | Heal Cost |
|---|---|---|---|
| Pure 1M T4 | Baseline | 1.0x | Baseline |
| Mix 600K T5 + 400K T4 | 2.1× | 1.5x | 1.6× |
| Pure 1M T5 | 2.5× | 2.0x | 2.2× |

Mix 60/40 là **sweet spot**: 50% combat improvement với chỉ 2.1× cost thay vì 2.5×.

> 📌 Xem thêm: [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026) — heal cost T5 vs T4 ảnh hưởng hospital strategy.

> 🤖 Bot V2 tự tính train queue T4/T5 theo RSS available + hospital capacity + KvK phase. Không bao giờ over-train T5 khi RSS không đủ buffer. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Heal Cost — Con Số Thường Bị Bỏ Qua

KvK phase active: mày lose 200.000 troops per battle cycle.

| Army Composition | Heal Cost per Cycle |
|---|---|
| Pure T4 | ~12-16M food |
| Mix 60/40 T5/T4 | ~19-24M food |
| Pure T5 | ~24-32M food |

Pure T5 army: heal cost gần **gấp đôi** T4. Nếu farm acc không sustain food heal rate trong KvK → pure T5 là liability, không phải advantage.

> 📌 Xem thêm: [Farm vs Non-Farm Account Strategy RoK 2026](/blog/farm-vs-non-farm-account-strategy-rok-2026) — farm acc là prerequisite cho pure T5 sustainable.

## FAQ

### T5 có counter T4 3:2 không?

Gần đúng. 1 T5 ≈ 1.5 T4 trong combat. Vì vậy 1M T5 = tương đương combat của ~1.5M T4. Nhưng 1M T5 tốn 2.5× RSS của 1M T4 — cần train 2.5M T4 equivalent để match cost. Math không có lợi cho T5-only nếu RSS limited.

### Có thể train T5 trước rồi fill T4 sau không?

Có thể nhưng không khuyến khích. Train T5 trước rồi fill T4 = T4 thành cannon fodder (die trước T5, reduce army effectiveness). Tốt hơn: quyết định mix ratio trước, train cả 2 loại song song.

### Bot có tự biết nên train T4 hay T5 không?

Bot V2 có train queue optimizer — tự calculate T4/T5 ratio dựa trên RSS balance, hospital beds available, và current KvK phase. Không cần config thủ công.

## Bắt Đầu

Power 40-80M: mix 60/40 T5/T4. Power <40M: train T4, tích RSS. Power 80M+: push toward pure T5 khi farm acc sustain heal cost. Bot V2 tự optimize train schedule.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [T5 Unlock Requirements RoK 2026](/blog/t5-unlock-requirements-rok-2026)
- [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026)
- [Farm vs Non-Farm Account Strategy RoK 2026](/blog/farm-vs-non-farm-account-strategy-rok-2026)
  `,
};
