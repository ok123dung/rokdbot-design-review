import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "soulstone-sanctuary-event-rok-2026",
  title: "Soulstone Sanctuary Event RoK 2026 — Stamina Optimization + Reward Stack",
  description: "Soulstone Sanctuary RoK 2026 — cơ chế stamina và soulstone, cách tối ưu reward stack không lãng phí AP. RokdBot V1 tự động farm soulstone hiệu quả nhất cho F2P.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Soulstone Sanctuary — Event Mà Stamina Là Tất Cả

Soulstone Sanctuary có vẻ phức tạp khi nhìn vào tên, nhưng core mechanic cực kỳ đơn giản: **dùng AP (stamina) để giải phóng Soulstone, đổi Soulstone lấy reward**. Không có PvP, không cần team, không cần timing đặc biệt.

Chính vì đơn giản như vậy, nhiều players bỏ qua event này — nghĩ rằng "sau làm cũng được". Nhưng Soulstone Sanctuary có một cơ chế ít được nói đến: **Sanctuary Stack Bonus** — càng farm liên tục không nghỉ, bonus reward per Soulstone càng cao.

Bỏ 6 tiếng không farm = stack reset về 0. Đây là lý do event này thưởng player chạy liên tục hơn player chạy nhiều nhưng không đều.

## Cơ Chế Stamina Và Sanctuary Stack

Mỗi lần dùng AP để attack Sanctuary node, mày nhận:

- **Soulstone fragments**: nguyên liệu chính để combine thành full Soulstone
- **Stack progress**: cộng dồn vào Stack counter

Khi Stack đạt threshold (thường 10, 25, 50, 100):
- Stack 10: Soulstone value x1.2
- Stack 25: Soulstone value x1.5
- Stack 50: Soulstone value x2
- Stack 100: Soulstone value x3 + bonus rare item

Stack reset khi: bỏ 6 tiếng không farm bất kỳ Sanctuary node nào.

**Tối ưu stamina**: không phải spam tất cả AP vào 1 tiếng rồi offline — phải farm **đều đặn** để maintain stack. Nếu có 300 AP total, tốt hơn là 50 AP × 6 lần cách nhau đều hơn là 300 AP × 1 lần.

## Soulstone Exchange Rate — Đổi Cái Gì Có Giá Trị Nhất

Event shop Soulstone Sanctuary thường có:

- **AP Recovery 50**: 5 Soulstone — đây là item đáng nhất, ROI tốt nhất
- Commander Sculpture (random tier): 15 Soulstone
- Tome of Knowledge: 10 Soulstone
- Gem pack 100: 3 Soulstone
- Universal Speedup 3h: 2 Soulstone

Ưu tiên đổi AP Recovery trước — cho phép farm thêm Soulstone trong event window, compound effect. Sau khi đủ AP Recovery để dùng hết event, mới đổi Sculpture và Tome.

> 🤖 V1 RokdBot farm Soulstone Sanctuary tự động — maintain stack không để reset, AP được phân bổ đều theo schedule. F2P friendly nhất với V1. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Tại Sao V1 Đủ Cho Soulstone Sanctuary

Khác với Strange Realm hay Strongest Star cần 2+ đạo march, Soulstone Sanctuary chỉ cần **1 march duy nhất** farm liên tục. V1 với 1 đạo là đủ để:

- Maintain stack 100 trong suốt event window
- Farm tối đa Soulstone theo AP rate
- Không bỏ sót stack reset

V2 và V3 vẫn benefit nhiều hơn vì có barb chain song song với Sanctuary farm, nhưng nếu mày chỉ target event này với budget tối thiểu thì V1 là đủ.

F2P note: Soulstone Sanctuary là event ít "whale-advantage" nhất trong calendar. Player F2P với bot V1 farm đều đặn sẽ nhận reward tương đương hoặc vượt whale farm thủ công không đều.

## Stamina Planning: Event + Daily Chain Không Conflict

Một lo ngại phổ biến: "nếu dùng AP cho Sanctuary thì không đủ AP farm rợ?"

Thực ra Sanctuary AP cost và barb chain AP cost tách biệt trong scheduling bot:

- Sanctuary node attack dùng 5-10 AP/lần, cần farm 6-8 lần/ngày để maintain stack
- Tổng AP cần cho Sanctuary: ~50-80 AP/ngày
- AP regeneration: ~120 AP/ngày baseline (không dùng item)

Margin vẫn còn 40-70 AP cho barb chain hàng ngày. Bot tự cân bằng — không phải chọn 1 trong 2.

## FAQ

### Stack có bị reset khi city bị attack không?
Không. Stack chỉ reset khi bản thân không farm trong 6 tiếng — incoming attack không ảnh hưởng.

### Nếu đang KvK thì có nên farm Sanctuary không?
Nên — Sanctuary không dùng troop, không risk PvP casualties. Farm Sanctuary là "safe activity" ngay cả khi đang bị farm trong KvK. Bot farm Sanctuary trong background khi march chính bận KvK.

### Soulstone Sanctuary có event exclusive item không?
Tùy rotation. Một số cycle có exclusive Commander Chest (chỉ available qua Sanctuary shop), một số cycle chỉ có standard items. Check shop ngay khi event mở để ưu tiên exclusive trước khi hết stock.

## Stack Không Tự Giữ Được Khi Ngủ

Sanctuary Stack reset sau 6 tiếng không farm. Một giấc ngủ 7-8 tiếng = reset về 0. Bot V1 giữ stack 24/7, mày ngủ yên.

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Lohar's Trial Event Walkthrough RoK 2026](/blog/lohars-trial-event-walkthrough-rok-2026)
- [Wheel of Fortune Timing RoK 2026](/blog/wheel-of-fortune-timing-rok-2026)
- [More Than Gems Event Grind RoK 2026](/blog/more-than-gems-event-grind-rok-2026)
- [Ceroli Crisis Event Guide RoK 2026](/blog/ceroli-crisis-event-guide-rok-2026)
- [Karuak Ceremony Event Guide RoK 2026](/blog/karuak-ceremony-event-guide-rok-2026)
  `,
};
