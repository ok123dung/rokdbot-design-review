import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "server-merge-bot-impact-rok-2026",
  title: "Server Merge Bot Impact RoK 2026 — Khi Server Merge Cần Pause Bot Không",
  description: "Server merge trong RoK gây ra gì với bot đang chạy? Có cần pause không, mất bao lâu để ổn định, và cần config lại gì sau merge. Guide thực tế từ player đã sống sót qua 3 lần server merge với bot.",
  date: "2026-05-11",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Server merge thông báo sáng — bot đang chạy đêm, mày lo lắng

Notification từ game: server của mày sẽ merge với server khác trong 48 tiếng. Đang 11pm. Bot V2 đang chain rợ bình thường.

Câu hỏi đầu tiên trong đầu: "Có cần dừng bot không? Nếu không dừng thì sao?"

Câu trả lời ngắn: **Không cần panic. Nhưng có checklist cần làm.**

## Server Merge Xảy Ra Điều Gì?

Lilith merge là quá trình:

1. **Merge announcement:** 48-72h trước → thông báo chính thức
2. **Maintenance window:** Game xuống 2-6 tiếng (tùy scale merge)
3. **Post-merge:** 2 server cộng thành 1 — map expand, player count tăng, barb respawn reset
4. **Settle period:** 24-48h sau merge thường có instability (lag, action delay)

Đây là những gì ảnh hưởng đến bot.

## Giai Đoạn 1: Pre-Merge (48h trước)

**Cần làm:**
- Recall tất cả march về city (gather march, barb march)
- Heal tất cả wounded troops trước maintenance
- Không bắt đầu research dài (có thể bị interrupt)
- Không upgrade building lớn trong 24h cuối

**Bot action:**
- Liên hệ RokdBot support thông báo merge date
- Bot team sẽ pre-configure pause tại thời điểm maintenance bắt đầu
- Không cần làm gì thêm từ phía mày

**Quan trọng:** Không cần tự tay stop bot — team RokdBot monitor maintenance window và auto-pause.

## Giai Đoạn 2: Maintenance Window (2-6 tiếng)

Trong giai đoạn này:
- Game xuống hoàn toàn
- Bot tự động pause (không thể connect đến server)
- Không có action nào được thực hiện
- Đây là downtime bình thường — không tính vào SLA (force majeure từ Lilith)

**Mày không cần làm gì.** Bot sẽ auto-resume khi server lên lại.

> 🤖 Bot V2 auto-pause khi game maintenance, auto-resume sau khi server stable. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Giai Đoạn 3: Post-Merge (24-48h đầu)

Đây là giai đoạn cần chú ý nhất.

**Vấn đề thường xảy ra post-merge:**
- Tile coordinate reset → gather march có thể đến sai vị trí
- Barb respawn pattern thay đổi → chain rợ cần recalibrate
- Player count tăng → barb competition tăng, tile tranh chấp nhiều hơn
- Lag cao hơn bình thường → action delay tăng

**Bot behavior post-merge:**
- 2-4h đầu sau server up: bot chạy ở "safe mode" — gather priority, không chain barb
- Sau khi server stable (thường 4-6h): resume full operation
- Team RokdBot push update adapt barb pattern mới của server sau merge

**Mày cần làm:**
- Check dashboard sau 6h post-merge
- Confirm march đang hoạt động đúng
- Nếu có issue → report support ngay

## Server Merge Ảnh Hưởng Power Và Honor Không?

**Power:** Không bị ảnh hưởng. Power là individual stat, không liên quan đến server structure.

**Honor:** Rank Honor **reset về 0** sau merge — mày bắt đầu KvK mới với server mới. Đây là cơ hội nếu server cũ mày đang ở rank thấp — server mới với population tươi.

**Kill Points:** Giữ nguyên từ season trước. Kill history không bị reset.

## Barb Pattern Sau Merge — Cần Biết

Sau merge, barb trên map thay đổi:
- **Mật độ barb tăng** (map expand, barb total tăng theo)
- **Level distribution thay đổi** (2 server barb cộng lại)
- **Alliance barb ownership** — territory của 2 alliance cũ merge, cần renegotiate barb zone

Bot V2 recalibrate barb pattern tự động trong 24h đầu sau merge. Sau đó chain rợ resume bình thường — thường với **mật độ rợ cao hơn** vì map lớn hơn.

## Kịch Bản Xấu Nhất: Server Glitch Post-Merge

Đôi khi merge không smooth — server bug, player data corrupt, action không register. Trong kịch bản này:

- Bot detect anomaly → auto-pause thay vì tiếp tục action có thể gây issue
- Team support được alert
- Sau khi Lilith fix server side → bot resume

**Chưa có trường hợp nào mà bot tạo ra vấn đề trong server merge** trong lịch sử 8+ seasons của RokdBot.

## FAQ

### Tôi có phải trả thêm tiền cho downtime merge không?
Không. Maintenance downtime từ Lilith là force majeure — thời gian này được cộng thêm vào gói của mày (thường 4-8h cho mỗi merge event).

### Sau merge tôi vào kingdom mới, bot có cần config lại không?
Không cần config lại từ đầu. Bot adapt kingdom mới tự động. Chỉ cần confirm với support nếu alliance barb zone thay đổi nhiều.

### Nếu merge xảy ra đúng giữa KvK thì sao?
Merge trong KvK season rất hiếm — Lilith thường merge giữa 2 season. Nếu xảy ra, KvK reset và coi như season mới bắt đầu.

## Bắt đầu ngay

**V2 Cao Cấp 900.000đ/tháng** — auto-handle merge event, không cần lo:
- Auto-pause khi maintenance, auto-resume sau khi stable
- Post-merge barb recalibration tự động
- Support team monitor mọi merge event

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [KvK Matchmaking Algorithm RoK 2026](/blog/kvk-matchmaking-algorithm-rok-2026)
- [RokdBot Safety Ban Risk Compliance 2026](/blog/rokdbot-safety-ban-risk-compliance-2026)
- [Returning Player Guide RoK 2026](/blog/returning-player-guide-rok-2026)
  `,
};
