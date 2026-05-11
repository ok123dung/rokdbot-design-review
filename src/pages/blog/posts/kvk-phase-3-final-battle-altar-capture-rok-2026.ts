import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "kvk-phase-3-final-battle-altar-capture-rok-2026",
  title: "KvK Phase 3 Final Battle + Altar Capture RoK 2026 — Win Conditions",
  description: "KvK Phase 3 Final Battle RoK 2026: altar capture mechanics, win condition rõ ràng, troop composition cho final push, và cách bot V3 maintain barb chain parallel trong khi army chính đánh altar.",
  date: "2026-05-10",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Phase 3 Final Battle — Mọi Thứ Đổ Vào Đây

14 ngày KvK, 2 phase chuẩn bị — và tất cả kết thúc tại **altar capture** Phase 3. Đây là nơi alliance thua dù đã dẫn honor suốt 10 ngày. Và là nơi alliance yếu hơn lật ngược ván cờ nếu biết mechanics.

Phase 3 Final Battle không phải cuộc chiến số lượng. Đây là cuộc chiến **timing và coordination**. Ai capture altar đúng thời điểm, giữ đủ lâu, win. Đơn giản trên lý thuyết — địa ngục trong thực tế.

## Altar Mechanics — Đọc Kỹ Trước Khi Push

### Altar Capture Condition

- Altar (Lost Temple) cần **liên tục bị occupy** bởi alliance march của mày
- Occupy = có ít nhất 1 march trong tile altar chưa bị knock out
- Thời gian hold tối thiểu để score: **4 giờ liên tục**

### Score Formula

Points = Troop power giữ altar × Giờ giữ × Buff multiplier

Không phải ai chiếm altar nhiều nhất — ai **giữ liên tục dài nhất với troop mạnh nhất** mới win.

### Altar Buff

Khi giữ altar > 2h: kingdom nhận **+15% toàn bộ combat buff** (attack, defense, HP). Đây là buff snowball — càng giữ dài càng khó bị đẩy ra.

> 🤖 V3 duy trì barb chain parallel trong khi R4 giữ altar — honor không ngừng tích lũy trong Final Battle. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Win Conditions Phase 3 Rõ Ràng

### Win Condition 1: First Capture + Hold

- Capture altar ngay khi Phase 3 mở (thường 00:00 server time)
- Reinforce liên tục — không để gap coverage
- Hold 4h đầu = score board dẫn từ đầu

### Win Condition 2: Deny Opponent Hold

Không cần giữ altar 100% thời gian. Chỉ cần **địch không giữ đủ 4h liên tục**. Mỗi khi mày break enemy hold = reset timer của họ.

Strategy: rally burst vào altar mỗi 3h30 — không cần chiếm lâu, chỉ cần break timer.

### Win Condition 3: Late-Game Flip

Top guilds giữ resource suốt Phase 1-2. Phase 3 họ dump toàn bộ speed heal + speedup training để refresh army. Nếu mày đang thua, **giữ troops fresh cho Phase 3** thay vì burn hết Phase 2.

## Troop Composition Final Push

### Garrison Hold (Defense)

- **Cavalry 60% + Infantry 40%**: cavalry speed cho reinforce nhanh, infantry tank
- Commander: garrison specialist (Constantine, Aethelflaed) làm chủ
- Min power để garrison altar: **8M power** tập trung trong 1 reinforce wave

### Rally Push (Offense)

- **Infantry 70% + Archer 30%**: infantry absorb, archer DPS
- Rally captain: top power player với max infantry commander
- Rally size: full (500.000 troops minimum cho lv5 altar)

### Barb Chain Parallel (Bot)

Trong khi army chính đang garrison hoặc rally altar, bot V3 duy trì:
- 2 đạo barb chain tiếp tục farm honor
- Auto heal troops từ previous battle
- Train troops replacement cho wave tiếp theo

Đây là lý do V3 quan trọng trong Phase 3 — **army chính không thể vừa garrison vừa chain barb**. Bot làm phần chain trong khi player focus altar.

## Timeline Phase 3 (Ngày 11-14)

### Ngày 11 — Phase 3 Mở

00:00: Altar available. Top 3 kingdom đồng loạt push. Cần có rally prepped trước midnight.

Giờ đầu là critical nhất — ai capture đầu tiên được buff snowball advantage.

Bot: resume barb chain ngay, không waste time. Honor từ barb chain vẫn count cho Phase 3 leaderboard.

### Ngày 12-13 — Attrition

Troops bị thương nhiều — đây là giai đoạn heal race. Alliance nào có speedup nhiều hơn, hospital lớn hơn sẽ thắng attrition.

Bot V3 auto heal + speedup 24/7 — không có idle hospital time.

### Ngày 14 — Final 6h

Cuối KvK: honor từ altar hold tính double trong 6h cuối (Lilith mechanic). Dump tất cả — không tiết kiệm gì cho sau KvK.

Bot dùng tất cả speedup heal, bot resume chain full speed. Không còn gì để giữ.

> 🤖 V3 auto-dump heal speedup trong 6h cuối — troops sẵn sàng cho final wave mà không cần mày thức đêm. [Xem V3 →](/#packages).

## Altar Capture Thất Bại — 3 Lý Do Phổ Biến

### Lý Do 1: Troop Thiếu Khi Phase 3 Mở

Phase 2 burn quá nhiều troops → Phase 3 push với army 40% strength. Giải pháp: bot heal + train liên tục trong Phase 2, không để troop count drop < 70%.

### Lý Do 2: Rally Captain Không Có Mặt Đúng Giờ

Altar window 00:00 server time = 7am hoặc 2am giờ VN tùy server. Manual rally captain ngủ quên = miss first capture window. Bot không thể tự quyết định rally, nhưng bot giữ army sẵn sàng — mày chỉ cần tap 1 lần.

### Lý Do 3: Reinforcement Gap

Garrison player phải ngủ → 2-4h gap coverage → địch push vào gap. Bot V3 có thể cài **auto-reinforce khi garrison troop count < threshold** — fill gap tự động.

## FAQ

### Phase 3 kéo dài bao lâu?
Thường 3-4 ngày (ngày 11-14 của KvK 14 ngày). Altar score tính tổng cộng.

### Bot có giữ altar không?
Bot không tự garrison altar (tactical decision). Nhưng bot V3 **auto-reinforce khi R5 set reinforce order** — player set lệnh 1 lần, bot execute liên tục.

### Alliance nhỏ có thể win Phase 3 không?
Win condition 2 (deny hold) không cần army lớn nhất — chỉ cần burst timing mỗi 3h. Feasible với mid-size alliance nếu coordination tốt.

## Bắt Đầu Final Battle Với V3

**V3 Siêu Cấp 1.200.000đ/tháng**:
- Barb chain parallel trong Final Battle — honor không ngừng
- Auto heal 24/7 — troops sẵn sàng cho mọi rally wave
- Auto reinforce theo R5 order

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [KvK Phase 2 Field of Honor Strategy RoK 2026](/blog/kvk-phase-2-field-of-honor-strategy-rok-2026)
- [Heroic Anthem KvK Fort Build RoK 2026](/blog/heroic-anthem-kvk-fort-build-rok-2026)
- [KvK Season 8 Complete Guide RoK 2026](/blog/kvk-season-8-complete-guide-rok-2026)
  `,
};
