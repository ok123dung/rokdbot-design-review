import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "kvk-phase-2-field-of-honor-strategy-rok-2026",
  title: "KvK Phase 2 Field of Honor Strategy RoK 2026 — Honor Roll Top 50",
  description: "KvK Phase 2 Field of Honor RoK 2026: cơ chế honor roll, barb fort lv5-6 strategy, kill point calculation, và cách bot V3 maintain top 50 honor board liên tục 6 ngày không ngủ.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Phase 2 — Nơi KvK Thật Sự Bắt Đầu

Phase 1 là warmup. Phase 2 Field of Honor là nơi **honor board thay đổi từng giờ** và ai không active sẽ tụt 10 rank trong 1 đêm.

Field of Honor kéo dài 6-7 ngày với cơ chế đặc biệt: honor nhân từ **nhiều nguồn stack lên nhau**. Barb fort, enemy city, resource building destroy — tất cả cộng dồn vào 1 leaderboard. Top 50 không phải là "đánh nhiều nhất" — là "farm thông minh nhất trong 6 ngày liên tục".

Thông minh nhất = biết nguồn honor nào có multiplier cao nhất và farm nó 24/7.

## Honor Sources Phase 2 — Ranking Theo ROI

| Nguồn Honor | Honor Per Action | Difficulty | Bot-able? |
|---|---|---|---|
| Barb Fort lv6 rally win | 6.000-10.000 | Cao (cần rally captain) | ✅ assist |
| Barb Fort lv5 rally win | 3.000-6.000 | Trung bình | ✅ assist |
| Enemy city battle win | 1.200-2.500 | Cao (PvP risk) | ✅ chain |
| Barb lv30 chain | 300-450/barb | Thấp | ✅ full auto |
| Resource building destroy | 500-1.500 | Trung bình | ✅ |
| Alliance resource tile | 200-400 | Thấp | ✅ |

**Barb lv30 chain là nguồn honor ổn định nhất** — không có RNG rally thất bại, không PvP risk, không cần rally captain. Bot farm 24/7, không break.

Barb fort lv5-6 rally cho honor spike lớn nhưng **phụ thuộc rally captain decision** — đây là phần human làm. Bot làm phần barb chain liên tục ở background.

> 🤖 V3 Siêu Cấp 2 đạo chain barb lv30 song song — honor base ~154.000/ngày trong Phase 2. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Honor Roll Top 50 — Threshold Thực Tế

Field of Honor 6 ngày, threshold Top 50 kingdom trung bình:

| Rank | Honor Target (6 ngày) | Cần Bao Nhiêu Barb/Ngày |
|---|---|---|
| Top 10 | 600.000+ | 900+ (cần rally fort) |
| Top 25 | 400.000+ | 600+ (V3 + rally assist) |
| Top 50 | 250.000+ | 370+ (V3 đủ) |
| Top 100 | 150.000+ | 220+ (V2 đủ) |

V3 2 đạo = ~430 barb/ngày × 6 ngày = **2.580 barb = ~580.000 honor chỉ từ chain**. Top 25 không cần rally một lần.

V2 1 đạo = ~217 barb/ngày × 6 ngày = **1.302 barb = ~260.000 honor**. Top 50 comfortable.

## Field of Honor Mechanics Đặc Biệt

### Kill Point Multiplier

Phase 2 Field of Honor có hệ thống **Kill Point Streak**:
- Giết 10 barb liên tiếp trong 30 phút = +10% honor bonus cho batch tiếp theo
- Giết 25 barb liên tiếp = +25% bonus
- Break streak (downtime > 30 phút) = reset về 0%

Manual player: ngủ 8h = streak reset. Bot V3: không break streak trong 20h liên tục = **+25% honor bonus maintained cả ngày**.

### Alliance Contribution Bonus

Nếu cả alliance có 20+ player active cùng lúc, mỗi player nhận **+5% honor** cho mọi action. Bot đảm bảo account mày "online" 20h/ngày — contribute vào alliance active count ngay cả khi mày ngủ.

## Strategy 6 Ngày Phase 2

### Ngày 1-2: Establish Chain Pattern

Barb lv25-27 gần territory — chain theo vòng tròn bán kính 4-6 ô. Mục tiêu: warm up streak counter, heal cycle test, confirm commander pair đang optimal.

Không rally fort ngày 1. Chờ alliance scout enemy position trước.

### Ngày 3-4: Peak Push

Streak counter đã max (+25%). Barb lv28-30 xuất hiện nhiều hơn ở mid-map. Mở rộng chain radius — bot V3 tự detect barb concentration và shift path.

Rally captain bắt đầu fort lv5-6 khi alliance đủ troop count. Bot assist reinforce troop vào rally nếu cần.

### Ngày 5-6: Final Honor Sprint

2 ngày cuối Phase 2: honor từ destroyed enemy buildings tăng +20% multiplier (Lilith event mechanic thường có). Bot maintain chain, mày focus vào building destroy và enemy city push.

Speedup heal không cần tiết kiệm nữa — Phase 3 chỉ còn vài ngày, dùng tất cả để maintain chain.

> 🤖 Bot V3 không break streak 20h/ngày — +25% honor bonus maintained liên tục. [Xem V3 →](/#packages).

## PvP Risk Management Phase 2

Field of Honor là phase địch tấn công nhiều nhất. Bot barb chain có rủi ro:

### Rủi Ro 1: March Bị Raid Khi Chain

March đang di chuyển ngoài map = vulnerable. Bot V3 detect enemy march tiến vào radius 5 ô và **recall march tự động** — không mất troops.

### Rủi Ro 2: City Bị Rally Khi Bot Đang Chạy

Bot không tự defend city. R5 cần maintain shield schedule cho city của những player có bot đang chạy. Pre-communication trước Phase 2: ai cần shield priority.

### Rủi Ro 3: Troops Burn Quá Nhanh

Phase 2 barb lv30 strong hơn nhiều. Troops tier thấp (T3-T4) bị thương rate cao hơn 40% so với lv25. Bot V3 tự adjust heal frequency — không để hospital overflow.

## So Sánh V2 / V3 / Premium VIP Phase 2

| Gói | Barb/ngày | Honor Chain 6 ngày | Streak Bonus | Giá |
|---|---|---|---|---|
| V2 900k | ~217 | ~260.000 | ✅ | 900k |
| V3 1,2M | ~430 | ~580.000 | ✅ +25% | 1,2M |
| Premium VIP 3M | ~866+ | ~1.100.000+ | ✅ +25% | 3M |

Premium VIP 3-4 đạo + rally assist = Top 10 kingdom Phase 2 với margin lớn.

## FAQ

### Field of Honor có giới hạn honor không?
Không có hard cap. Càng active càng nhiều honor. Giới hạn thực tế là troops và AP.

### Bot có thể tham gia rally fort không?
Bot V3 có thể **reinforce troop vào rally** khi rally captain trigger. Bot không tự quyết định rally — đó vẫn là human decision để tránh friendly fire.

### Honor board refresh bao lâu?
Real-time. Nhưng rank threshold thay đổi rõ nhất vào 6am và 6pm giờ VN khi player EU/Asia đổi ca.

## Bắt Đầu Phase 2 Với V3

**V3 Siêu Cấp 1.200.000đ/tháng**:
- 2 đạo chain barb lv30 liên tục 6 ngày Phase 2
- Streak bonus +25% maintained 20h/ngày
- Auto recall khi địch tiến vào range

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [KvK Phase 1 Stronger Wars Guide RoK 2026](/blog/kvk-phase-1-stronger-wars-guide-rok-2026)
- [KvK Phase 3 Final Battle + Altar Capture RoK 2026](/blog/kvk-phase-3-final-battle-altar-capture-rok-2026)
- [Lost Kingdom KvK Strategy RoK 2026](/blog/lost-kingdom-kvk-strategy-rok-2026)
  `,
};
