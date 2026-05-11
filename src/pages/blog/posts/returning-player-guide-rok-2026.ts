import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "returning-player-guide-rok-2026",
  title: "Returning Player Guide RoK 2026 — Comeback Sau 6 Tháng+ AFK Cần Làm Gì",
  description: "Comeback Rise of Kingdoms sau 6 tháng AFK: meta thay đổi gì, troops dead bao nhiêu, alliance còn không, và checklist để rebuild momentum từ Day 1 của returning player. Bot V1/V2 để accelerate catch-up.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Cảm Giác Đầu Tiên Khi Comeback

Mở app sau 6-12 tháng AFK. Notification đỏ chồng chất. Alliance đã kick từ lâu. Hospital đầy troops wounded. Build queue empty. Power ranking tụt xuống trang 3.

Và cái worst: mọi người xung quanh đã đi xa hơn 10M-20M power so với mày.

Nhiều returning player nhìn vào màn hình đó và quit ngay lập tức. Cảm giác quá overwhelmed để rebuild.

Bài này là checklist có thứ tự để tránh cảm giác đó — và comeback được trong 30 ngày.

## Đánh Giá Damage Đầu Tiên

Trước khi làm bất kỳ thứ gì, cần biết damage là bao nhiêu:

### Checklist Assessment (15 phút)

- [ ] **Alliance status**: còn không, hay đã bị kick?
- [ ] **Troops**: bao nhiêu wounded trong hospital? Bao nhiêu dead?
- [ ] **RSS**: kho cạn hay còn dư?
- [ ] **Research**: node nào đang chạy (nếu có)?
- [ ] **Build queue**: queue cuối cùng là gì, % hoàn thành?
- [ ] **City Hall**: cấp hiện tại vs server median (check power ranking)
- [ ] **KvK**: server đang ở KvK season nào?
- [ ] **Gem**: tổng gem còn bao nhiêu?

Ghi lại những con số này. Không cần lo lắng — cần dữ liệu trước khi plan.

## Priority 1: Heal Và Rebuild Troops

Nếu hospital đầy wounded troops → **heal ngay**. Healing speedup nếu có. Nếu không có speedup, heal tự nhiên là okay — nhưng check hospital capacity.

**Dead troops**: không recover được. Cần train lại. Đây là lý do hospital capacity quan trọng — khi mày AFK và bị tấn công, troops overflow hospital thì die.

Sau khi heal xong:

- Check troop composition hiện tại
- Training queue: restart ngay với T3 hoặc T4 (tùy unlock)
- Không train T1-T2 khi đã có T3+ — waste RSS

## Priority 2: Alliance Rebuild

6 tháng AFK thường bị kick khỏi alliance. Options:

### Option A — Rejoin cũ (nếu còn quen)

Contact leader cũ qua Discord/Zalo. Explain lý do AFK. Nhiều alliance chấp nhận returning player nếu họ biết mày — đặc biệt nếu server thiếu active member.

### Option B — Join alliance mới tương đương

Power hiện tại của mày so với server median: nếu đã tụt top 50 → tìm T2-T3 alliance phù hợp power gate. Không cần top 1 alliance ngay lập tức.

### Option C — Tạm thời solo farm

Nếu KvK không bắt đầu trong 2 tuần → okay solo tối đa 1 tuần để rebuild trước khi join. Nhưng không nên solo quá lâu — Alliance help request = 40% build time reduction.

> 🤖 V1 tự động daily + gather + build — không cần online nhiều trong 2 tuần rebuild. [Xem V1 →](/#packages) · 750.000đ/tháng.

## Priority 3: RSS Recovery

6 tháng AFK = kho thường cạn (bị plunder hoặc idle không generate). Recovery:

- Gather loop: 3-4 march send ngay khi heal troops xong
- RSS tile priority: lúc nào cũng Lv 4-5 nếu có alliance territory
- Alliance gift: request RSS donation từ member (allowed in most alliances)

Bot V1 tự động gather loop 24/7 — không cần mày resend mỗi 6-8 tiếng.

**Target 7 ngày đầu comeback**: kho 80% full mỗi loại RSS.

## Priority 4: Catch-Up Meta — Gì Đã Thay Đổi

6-12 tháng là khoảng thời gian meta RoK thay đổi đáng kể. Check list:

### Commander Meta

- Commander mới release (check wiki RoK hoặc Reddit/r/RiseofKingdoms) — có commander nào better pair với build hiện tại không?
- Talent tree rebalance: Lilith thỉnh thoảng nerf/buff tree nodes — check optimal tree hiện tại

### Research Tree

- Library tech tree (nếu unlock sau mày AFK): đây là research layer mới sau Academy, nhiều returning player miss
- Any new research nodes in Military tree (T5 research nếu server cũ đủ level)

### Equipment Changes

Blacksmith meta thay đổi. Check current best-in-slot pieces cho gameplay style của mày.

## Returning Player Trap: "Catch-Up Rush"

Nhiều returning player panic và cố catch-up power trong 2 tuần:

- Burn tất cả speedup ngay lập tức
- Skip Hospital upgrade để rush City Hall
- Train troops quá nhiều trước khi có RSS stable

Đây là sai lầm. **6 tháng gap không thể close trong 2 tuần**. Cần 2-3 tháng systematic. Panic burn = worse position sau 30 ngày.

**Approach đúng**: Treat comeback như new player — nhưng với advantage biết game mechanics. Rebuild base solid, automation first, then aggressive growth.

## Xem Xét Server Migration

Nếu server quá old (Season 6+) và gap quá lớn:

- **Cost**: Ark of Covenant (event item hoặc gem)
- **Benefit**: fresh start với current account stats giữ nguyên (commander level, tech unlocked)
- **Risk**: mất alliance relationships, position trên map

Xem chi tiết: [Late-Server KvK Season 5+ Strategy RoK 2026](/blog/late-server-kvk-season-5-plus-strategy-rok-2026) để assess.

## 30-Day Returning Player Timeline

| Tuần | Priority | Target |
|---|---|---|
| Week 1 | Heal, Alliance, RSS | Hospital empty, kho 80% |
| Week 2 | Build queue restart, Research | CH +1-2 levels |
| Week 3 | Troop training T3/T4 batch | +50k troops |
| Week 4 | KvK participation (nếu có) | Top 500 honor |

## Bot V1 vs V2 Cho Returning Player

**V1 (750k)**: Đủ cho returning player power <15M — build, gather, daily automation. Catch-up cơ bản.

**V2 (900k)**: Nên xem xét nếu power >15M và đã có T3-T4 troops — barb combo chain phục hồi honor ranking nhanh hơn.

> 🤖 V1/V2 rebuild automation: không cần online liên tục trong 30 ngày comeback. [Xem gói cước →](/#packages)

## Đọc Thêm

- [F2P 6-Month Roadmap RoK 2026](/blog/f2p-6-month-roadmap-rok-2026)
- [F2P → VIP 2 Bot Progression Roadmap RoK](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
- [Mid-Server 180 Ngày Optimization RoK 2026](/blog/mid-server-180-days-optimization-rok-2026)
- [F2P Beginner Mistakes Bot Solves Day 1-30 RoK 2026](/blog/f2p-beginner-mistakes-bot-solves-day-1-30-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · **V2 900k** · V3 1,2M · Premium VIP 3M)
  `,
};
