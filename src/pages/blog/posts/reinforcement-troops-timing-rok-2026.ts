import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "reinforcement-troops-timing-rok-2026",
  title: "Reinforcement Troops Timing RoK 2026 — Khi Nào Reinforce Alliance Member",
  description: "Reinforcement timing RoK 2026: khi nào nên reinforce, khi nào không, travel time calculation, nguy cơ bị trap reinforce, và bot V2/V3 coordinate reinforce timing với alliance intelligence để không mất troops vô ích.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Reinforce Sai Thời Điểm — Mất Troops Mà Không Giúp Được Ai

Ally bị attack. Bạn thấy notification, tap Reinforce ngay lập tức. Troops của bạn đi bộ 8 phút. Lúc đến nơi: battle đã xong, ally đã thua và tele đi. Troops của bạn đứng giữa territory địch.

Địch rally vào đó. Troops của bạn chết.

**Reinforce là double-edged sword** trong Rise of Kingdoms. Đúng lúc: tăng gấp đôi defense strength. Sai lúc: donate troops miễn phí cho địch farm.

## 4 Tình Huống Cần Reinforce

### 1. Ally Bị Siege Và Còn Thời Gian

Tình huống lý tưởng: ally thông báo sớm "đang bị siege, cần reinforce". Bạn có 15+ phút trước khi rally địch launch. Reinforce kịp trước khi battle start = troops bạn tham gia defense chính thức.

Nếu travel time của bạn < thời gian còn lại đến battle: **REINFORCE**.

### 2. Ally Đang Bị Rally Và Garrison Yếu

Ally garrison chỉ 200.000 troops, địch rally 800.000+. Không reinforce: ally thua nặng, city bị loot. Reinforce kịp trước launch + thêm 200.000 troops bạn = garrison double-up, rally tốn nhiều resource hơn cho địch.

### 3. Phòng Thủ Flag/Fort Trong KvK

Alliance đang defend flag, địch rally liên tục. Flag garrison depleted. Bạn reinforce vào flag = replenish garrison capacity, kéo dài resist time.

Đây là reinforce **planned**, không phải reactive. Coordination với R4/R5 trước khi làm.

### 4. Pacifist Shield — Reinforce Để Tăng Alert Threshold

Ally có shield nhưng gần hết. Reinforce để tăng power display → địch scout và thấy garrison mạnh → không attack → shield của ally hold thêm thời gian.

## 4 Tình Huống KHÔNG Nên Reinforce

### 1. Travel Time Dài Hơn Battle Duration

Rally thường kéo dài 30-60 giây khi bắt đầu. Nếu travel time của bạn là 10 phút, và battle đã bắt đầu 5 phút trước: **bạn không kịp vào trận**. Troops đến sau khi battle xong, kẹt lại.

### 2. Ally Đang Teleport Ra

Ally nhắn "tôi sắp tele". Nếu reinforce và ally tele đi trước troops bạn đến: troops bạn ở thành trống (không có garrison commander). Địch attack → không có resistance → dead.

### 3. Trap Reinforce — Intelligence Thao Túng

Địch để 1 ally nhỏ bị "attack" nhẹ để dụ alliance reinforce. Alliance reinforce ồ ạt. Địch rally target mới vào thành vừa nhận reinforce → một lần kill lượng lớn troops từ nhiều players.

Dấu hiệu trap reinforce: attack từ unknown player nhỏ, không phải từ main war march.

### 4. Reinforce Khi Bạn Sắp Cần Troops Cho Rally

Bạn là rally captain sắp launch rally trong 20 phút. Reinforce đi = march slot bị lock → không đủ troops cho rally own. **Coordinate với alliance trước** — ai reinforce, ai rally.

> 📌 Xem thêm: [Garrison Troop Composition RoK 2026](/blog/garrison-troop-composition-rok-2026) — composition reinforce nên gửi gì.

## Travel Time Calculation — Công Thức Đơn Giản

Travel time phụ thuộc: khoảng cách (tile), march speed commander, alliance tech buff.

Ước tính nhanh (không có buff): 1.000 tile cách = khoảng 5-7 phút travel T4 infantry.

Với march speed buff (Sarka secondary, alliance tech): giảm 20-30% travel time. 1.000 tile = 3.5-5 phút.

**Rule of thumb**: nếu battle notification đã 3+ phút cũ và khoảng cách >800 tile → khả năng cao không kịp vào trận.

## Troop Type Khi Reinforce

Gửi troop type bổ sung garrison, không phải trùng:

- Garrison đã 80% Infantry: gửi **Cavalry hoặc Archer** để tránh over-Infantry
- Garrison đang bị Cavalry attack: gửi **Infantry** để counter (nếu kịp)

> 📌 Xem thêm: [Troop Matchup Chart Cavalry/Archer/Infantry RoK 2026](/blog/troop-matchup-chart-cavalry-archer-infantry-rok-2026) cho counter logic.

## Recall Troops Sau Reinforce

Khi không còn threat, **recall troops reinforce về** bằng cách message ally và họ kick troops bạn ra (hoặc bạn recall từ march tab). Troops kẹt trong garrison của ally:

- Không tham gia rally bạn
- Không gather resource cho bạn
- Không train hoặc build trong city bạn

Reinforce là temporary — không để troops đó forever.

> 🤖 Bot V2 monitor alliance chat và attack notification, alert bạn với travel time estimate và threat assessment trước khi quyết định reinforce. Bot V3 coordinate multi-account reinforce timing. [Xem V2/V3 →](/#packages) · V2 900k · V3 1,2M.

## FAQ

### Reinforce có tốn march slot không?

Có. Reinforce dùng 1 march slot giống gather hoặc barb attack. Bạn có 4 march slots → reinforce lock 1 trong 4.

### Ally có thể kick troops reinforce của tôi không?

Có. R4/R5 hoặc garrison owner có thể kick reinforce troops. Nếu bị kick: troops march về tự động, không bị thiệt hại.

### Bot V2 có tự động reinforce không?

Không tự reinforce mà không có human approval — quá nguy hiểm (trap reinforce). Bot cung cấp alert + analysis, decision final là bạn.

## Bắt Đầu

Reinforce đúng lúc là kỹ năng cao cấp phân biệt casual và serious alliance member. Không phải về "có troops hay không" — mà về **timing và intelligence**.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Garrison Troop Composition RoK 2026](/blog/garrison-troop-composition-rok-2026)
- [Troop Matchup Chart Cavalry/Archer/Infantry RoK 2026](/blog/troop-matchup-chart-cavalry-archer-infantry-rok-2026)
- [Best Troop Types KvK RoK 2026](/blog/best-troop-types-kvk-rok-2026)
- [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026)
  `,
};
