import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "new-server-day-1-7-rush-rok-2026",
  title: "New Server Day 1-7 Rush RoK 2026 — Top Power Strategy + Bot Setup Đầu Tiên",
  description: "Chiến lược Day 1-7 trên server mới Rise of Kingdoms 2026: rush power để top ranking, claim vị trí chiến lược, tận dụng early-game buff, và setup bot V1 ngay từ ngày đầu.",
  date: "2026-05-10",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## 7 Ngày Đầu Quyết Định 6 Tháng Sau

Server mới trong RoK là cuộc đua. Không phải cuộc đua về skill — về **tốc độ ra quyết định** trong 7 ngày đầu.

Player top 10 power trên server mới sau 7 ngày thường duy trì top 50 sau 6 tháng. Không phải vì họ nạp nhiều hơn — mà vì họ không waste 1 phút nào trong window đó.

Bài này là playbook Day 1-7 cho server mới 2026, bao gồm cả setup bot ngay từ ngày đầu.

## Day 1: Window 6 Giờ Đầu

6 giờ đầu tiên sau khi server open là **highest-value time** trong toàn bộ game. Không có player nào có advantage về power hay RSS — mọi người bắt đầu từ 0. Ai ra quyết định nhanh hơn, thắng.

### Checklist Hour 1-2

- [ ] Chọn **China civilization** (build speed bonus tối ưu early)
- [ ] Place city gần alliance hubs (không isolated)
- [ ] Hoàn thành Tutorial chapters 1-5 không bỏ step nào
- [ ] Join pre-made alliance (nhiều alliance prep Discord trước khi server open)
- [ ] Request ALL alliance helps ngay lập tức

### Checklist Hour 2-6

- [ ] City Hall → 8 (dùng toàn bộ beginner speedup)
- [ ] Research: Economy → Gathering (đầu tiên)
- [ ] 2 Farm + 2 Lumber Mill (food + wood không bao giờ thiếu)
- [ ] Claim tất cả achievement rewards

**Không được làm**: Dừng để đọc descriptions dài. Server mới, mọi thứ di chuyển nhanh. Quyết định trong 5 giây, move on.

## Day 2-3: Power Spike Priority

### City Hall Rush

Mục tiêu Day 2-3: **City Hall 12-14**. Đây là threshold quan trọng vì:
- City Hall 10: 2nd march slot (2x gather throughput)
- City Hall 12: Academy unlock full Economy branch
- City Hall 14: Barracks Lv 14 → T2 troops (power spike)

**Dùng toàn bộ speedup nhận được từ tutorial và daily** vào City Hall và prerequisites.

### Gather Loop Setup Day 2

Ngay khi có 2 march slot, thiết lập gather loop:
- March 1: tile Food Lv 2+
- March 2: tile Wood Lv 2+
- Resend ngay khi về

Trên server mới, **tile Lv 3-4 thường available** (chưa đủ player để tranh chấp). Tận dụng window này — sau 2 tuần, tile Lv 4-5 sẽ bị tranh chấp nghiêm trọng.

## Day 4-5: Claim Strategic Position

### Vị Trí Map

Trên server mới, vị trí city quan trọng hơn bất kỳ giai đoạn nào khác:

- **Gần Alliance Territory**: tile Lv 4-5 trong alliance buffer zone = ưu tiên gather
- **Gần Gem Mine cluster**: passive gem income từ Day 1
- **Tránh isolated**: isolated city = không có alliance help, target cho bully

Nếu đã place city không tốt (tutorial buộc): **City Relocation** trong 7 ngày đầu rẻ hơn (30-50 gem). Sau 7 ngày: 500+ gem.

### Power Ranking Day 5 Target

| Rank | Power Target | F2P Achievable? |
|---|---|---|
| Top 10 | 500k+ | Cần bot từ Day 1 |
| Top 50 | 250k+ | Khả thi với active F2P |
| Top 100 | 150k+ | Safe target F2P |

**Top 10 power sau 5 ngày** = cần không idle 1 phút, daily automation từ ngày đầu.

> 🤖 Setup bot V1 từ Day 1 = build queue 24/7, gather loop không miss, daily claim tự động. [Xem V1 →](/#packages) · 750.000đ/tháng.

## Day 6-7: KvK Prep và Early Barb Farm

### Barb Farming Early

Day 6, đa số player đã có Lv 5-8 Commander với đủ AP để farm barb Lv 1-3:

- **Dùng toàn bộ AP mỗi ngày** (không save)
- Target: Barb Lv 1-3 (yield XP + RSS drop + honor)
- Commander priority: Boudica hoặc Joan (F2P peacekeeping)

AP regenerate 1 charge/giờ, max 10. Miss 1 ngày = miss 10 AP = miss 10 barb kills = tụt XP ranking.

> 📌 Xem thêm: [Lohar Barbarian Farming 24h XP Grind RoK 2026](/blog/lohar-barbarian-farming-24h-xp-grind-rok-2026) cho barb farming strategy later.

### Alliance War Day 7

Nhiều server new có **Farm Alliance vs Farm Alliance conflict** trong tuần đầu. Alliance mạnh sẽ attempt chiếm Holy Sites hoặc bully player yếu.

Checklist Day 7 defense:
- [ ] Alliance flag deployed gần city cluster
- [ ] Hospital capacity đủ cho 1 hit từ mid-size march
- [ ] Shields available (tutorial reward shields ~24-48h)
- [ ] Alliance chat active — coordinate defense

## Setup Bot V1 — Ngay Ngày Đầu, Không Ngày Thứ 7

Đây là điểm phân biệt top 10 và top 100 trên server mới: **automation từ ngày đầu**.

Player top 10 thường là:
1. Whale spending Day 1 (không liên quan bài này)
2. F2P với **bot automation từ Hour 1** — không miss build queue, gather, hay daily

Gói **V1 750.000đ/tháng** setup được trong 24h sau khi order:
- Build queue: không idle 1 giây sau khi speedup available
- Gather: 2 march (4 sau CH 17) liên tục, scan tile Lv cao nhất available
- Daily: VIP chest, objectives, alliance check-in tự động
- Barb: AP auto-spend khi đủ charge

7 ngày với V1 vs 7 ngày manual:

| Metric | Manual (top player) | V1 Bot |
|---|---|---|
| Build queue idle | 20-25% | 0% |
| Daily miss rate | 15-20% | 0% |
| Gather idle time | 30-40% | <5% |
| **Power Day 7** | ~200k | **~320-400k** |

**V1 từ Day 1 trên server mới = top 20 power bền vững** mà không cần whale spending.

## Timeline 7 Ngày Compact

| Ngày | City Hall | Focus | Target Power |
|---|---|---|---|
| 1 | → 8 | Tutorial + Alliance join | 20k |
| 2 | → 11 | 2 march setup, gather loop | 60k |
| 3 | → 13 | T2 troops first batch | 110k |
| 4 | → 15 | Position city, gem mine | 170k |
| 5 | → 17 | 3rd march slot | 220k |
| 6 | → 18 | Barb farm, economy research | 270k |
| 7 | → 20 | KvK signup + shield prep | 330k |

## FAQ

### Civilization nào tốt nhất cho server mới rush?
China: +5% gathering, +3% building = compound advantage qua 7 ngày. Second choice: France nếu muốn play safe (hospital bonus).

### Có nên buy Teleport về gần alliance center không?
Nếu isolated: yes, trong 7 ngày đầu. Teleport cost ~30-50 gem (beginner discount). Worth 100%.

### V1 có setup được cho account mới hoàn toàn không?
Có. V1 không yêu cầu progress minimum. Hoạt động tốt nhất khi setup từ ngày đầu vì maximize early window.

## Đọc Thêm

- [F2P Day 1-30 Beginner Checklist RoK 2026](/blog/f2p-day-1-30-beginner-checklist-rok-2026)
- [F2P → VIP 5 Roadmap RoK 2026](/blog/f2p-to-vip-5-roadmap-rok-2026)
- [Best Gathering Commanders RoK 2026](/blog/best-gathering-commanders-rok-2026)
- [Farm 1.000.000 RSS/Giờ Setup RoK 2026](/blog/farm-1000-rss-per-hour-setup-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)
  `,
};
