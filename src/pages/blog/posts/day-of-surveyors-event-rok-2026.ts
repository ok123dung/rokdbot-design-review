import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "day-of-surveyors-event-rok-2026",
  title: "Day of Surveyors Event RoK 2026 — Map Scout + Bot Auto Schedule",
  description: "Day of Surveyors RoK 2026 — cơ chế map scouting, daily quest schedule tối ưu, và cách RokdBot V2 tự động hoàn thành mọi surveyor task mà không cần mày online.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Ngày Thám Thính — Event Nhỏ, Reward Cộng Dồn Lớn

Day of Surveyors là event mà 70% players coi là "phụ" — chỉ cần scout mấy ô map, có gì khó đâu. Nhưng đây chính xác là mindset khiến họ tụt lại phía sau trong dài hạn. Event này không cho reward khổng lồ ngay lập tức — nó cho **daily accumulation** mà nếu không miss ngày nào, tổng cộng sau 1 tháng là lượng resource đáng kể.

Phép toán đơn giản: reward mỗi ngày event × 20 ngày/tháng = tổng tháng. Bỏ 5 ngày vì "bận" = mất 25% reward tháng. Bỏ 10 ngày = nửa tháng mất trắng. Đây là event mà **consistency quan trọng hơn skill**.

## Cơ Chế Map Scouting Trong Day of Surveyors

Event yêu cầu mày hoàn thành một số **scouting actions** trong ngày:

- **Scout tile**: gửi march đến tile chưa khám phá (fog of war) — count 1 action
- **Scout enemy city**: gửi spy/scout march đến thành địch — count 1 action, có risk bị detect
- **Scout neutral structure**: stronghold, holy site, pass — count 1 action, không risk

Daily quota thường là 5-10 actions. Đủ quota → reward ngày. Đủ accumulation qua nhiều ngày → tier reward cao hơn cuối event.

Reward tốt nhất:
- Accumulation tier 3: Action Point Recovery Items + 300 gem
- Scout bonus khi discover "rare tile": rare resource tile lv6 hoặc special event structure

Điểm ít người biết: **không cần scout xa**. Tile lv1-2 ngay cạnh city cũng count. Mày có thể clear quota 10 actions trong 2 phút nếu có fog of war còn quanh city. Vấn đề là sau vài ngày, fog gần city hết — phải di ra xa hơn.

## Vấn Đề Thực Tế: Scouting Manual Là Micromanagement Tốn Thời Gian

Nghe thì đơn giản nhưng làm thật ra:

- **Tìm fog tile**: phải zoom out map, tìm ô chưa scout, tap từng ô để gửi march — mỗi action ~10-15 giây
- **10 actions × 10-15s = 150 giây tối thiểu** — cộng thêm wait time march travel
- **Phải làm mỗi ngày**: không phải ngày nào cũng nhớ, đặc biệt ngày event trùng KvK intensive
- **Scout march conflict**: nếu đang dùng march cho barb chain hoặc rally, scout march bị queue — delay quota
- **Rare tile detect**: phát hiện rare tile lv6 đòi hỏi mày check map thủ công liên tục — manual thì hay miss

> 🤖 V2 RokdBot tự schedule Day of Surveyors daily quota — scan fog tile tự động, gửi scout march, đạt đủ 10 actions trong <3 phút đầu ngày. Rare tile detect và notify. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Bot Auto Schedule: Surveyors + Barb Chain Song Song

Cái hay của V2 là **không conflict march**: bot phân biệt được march nào đang dùng cho barb chain, march nào free. Scout march chỉ dùng march free/idle — không interrupt chain chính.

Logic schedule của bot:

- Đầu ngày (00:00 server time): check fog tile inventory quanh city → gửi 10 scout march liên tiếp → done trong 3 phút
- Nếu fog gần city hết: tự mở rộng radius tìm fog xa hơn — ưu tiên hướng có resource tile lv5-6
- Nếu detect rare tile lv6+: push notification, auto claim nếu unoccupied
- Accumulation tracker: hiển thị % tiến độ reward tier sau mỗi ngày

Với setup này, mày không cần nghĩ đến Surveyors nữa — chỉ check notification khi bot tìm được rare tile ngon.

## Tại Sao Đây Là Event Nên Ưu Tiên Setup Bot Sớm

Day of Surveyors có cơ chế **fog of war depletion** — sau vài tuần chơi, fog quanh city sẽ hết, bot cần tìm fog xa hơn. Setup sớm → bot học được pattern fog của server của mày → scout route tối ưu. Setup muộn → đã mất nhiều fog gần, bot mất thời gian hơn để tìm tile xa.

Nếu mày setup V2 từ tuần 1 của server, fog tracking database của bot được build từ sớm → toàn bộ event về sau scout nhanh hơn 40-50%.

## FAQ

### Scout enemy city có bị phản công không?
Scout march không attack — chỉ reveal thông tin. Địch biết mày scout nhưng không thể attack scout march. Chỉ rủi ro khi địch có "spy detect" buff thì mày tốn thêm 1 spy token.

### Nếu fog of war xung quanh city hết rồi thì sao?
Bot tự mở rộng radius tìm fog. Nếu map đã fully explored (server già), bot chuyển sang scout enemy city và neutral structure để đủ quota — vẫn count đủ.

### Day of Surveyors có xảy ra đồng thời với event khác không?
Có, và đây là lúc manual overwhelm nhất. Bot xử lý parallel event queue — Surveyors quota xong trong 3 phút, phần còn lại của ngày dành full cho event khác.

## Fog Không Tự Scout, Reward Không Tự Đến

Day of Surveyors là event của sự kiên nhẫn và consistency. Không ai có thể thủ công đủ 20-25 ngày không miss — nhưng bot thì được.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [More Than Gems Event Grind RoK 2026](/blog/more-than-gems-event-grind-rok-2026)
- [Wheel of Fortune Timing RoK 2026](/blog/wheel-of-fortune-timing-rok-2026)
- [Mightiest Governor Event Setup RoK 2026](/blog/mightiest-governor-event-setup-rok-2026)
- [Karuak Ceremony Event Guide RoK 2026](/blog/karuak-ceremony-event-guide-rok-2026)
- [Lohar's Trial Event Walkthrough RoK 2026](/blog/lohars-trial-event-walkthrough-rok-2026)
  `,
};
