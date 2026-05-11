import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "conquest-stars-event-rok-2026",
  title: "Conquest Stars Event RoK 2026 — Server-Wide Progression Milestone",
  description: "Conquest Stars RoK 2026 — cơ chế server-wide milestone, contribution cá nhân và reward chia sẻ. Cách RokdBot V2 maximize contribution để nhận reward tier cao nhất.",
  date: "2026-05-11",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Conquest Stars — Event Mà Cả Server Cùng Thắng Hoặc Cùng Thua

Conquest Stars là một trong số ít event trong RoK có cơ chế **server-wide collective milestone** — toàn bộ kingdom đóng góp vào một thanh progress chung, và khi milestone đạt được, mọi người đều nhận reward tương ứng. Đây là mô hình khác hoàn toàn với leaderboard event như Mightiest Governor hay Strongest Star.

Nghe thì có vẻ nhàn — "cả server cùng làm thì mình không cần cố lắm cũng được". Sai. Cơ chế ẩn của Conquest Stars là **individual star contribution** — mày đóng góp bao nhiêu sao sẽ quyết định reward cá nhân nhận được, khác với reward tier của server chung.

Hai layer reward này là điều ít người phân biệt rõ.

## Hai Layer Reward Của Conquest Stars

**Layer 1 — Server Milestone Reward**: Khi cả server đạt milestone (ví dụ: 10.000 stars tổng), mọi player nhận reward gói chung — resource pack, gem, speedup. Đây là reward mà mọi người đều nhận nếu server active.

**Layer 2 — Individual Star Rank**: Trong số players đóng góp, ai có **nhiều sao nhất** sẽ nhận reward cá nhân tier cao hơn. Thường chia 3 tier:
- Top 10% contributors: Commander Chest + 500 gem + Speedup 3 ngày
- Top 30% contributors: 300 gem + Speedup 1 ngày
- Còn lại (dù đã contribute): resource pack nhỏ

Vì vậy, "cả server cùng nhận" chỉ đúng với layer 1. Layer 2 vẫn là competition — chỉ là competition nhẹ hơn leaderboard event.

## Nguồn Sao Trong Conquest Stars

Stars đến từ nhiều action:

- **Kill barbar**: mỗi X con rợ chết = 1 star (threshold tùy level server)
- **Research/training completion**: mỗi cái hoàn thành trong event window = stars
- **Alliance help**: mỗi lần help = fraction of star
- **Resource gather**: gather từ map tile = star per threshold
- **Building upgrade**: upgrade = stars

Quan trọng: không phải tất cả nguồn đều hiệu quả như nhau. **Barb kill + research/training = star/hour tốt nhất**. Gather và alliance help cho star ít hơn nhiều per action.

> 🤖 V2 RokdBot trong Conquest Stars: barb chain liên tục cho kill stars, auto-complete training queue cho stars, auto-help cho accumulation. Không action nào bị bỏ trống. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Tại Sao Server-Wide Event Vẫn Cần Bot

Paradox của Conquest Stars: vì reward server chung guaranteed (chỉ cần server active đủ), nhiều players relax và farm ít hơn. Điều này tạo cơ hội cho người farm đủ để vào top 10% individual rank — competition thực ra ít hơn bình thường.

Khi cả server relax, người dùng bot tự động leo vào top 10% với ít effort hơn.

Ngoài ra, server milestone tier có ceiling — nếu server đạt milestone tier cao nhất sớm, cả server nhận bonus reward thêm. Bot farm nhanh → server đạt milestone sớm → bonus reward cho tất cả. Mày contribute nhiều thì server benefit và mày cũng benefit.

## Khi Nào Server Miss Conquest Stars Milestone

Thường xảy ra ở server nhỏ hoặc server decline (nhiều player quit). Khi server không đủ active player để đạt milestone chung, tất cả đều miss layer 1 reward.

Dấu hiệu nguy hiểm:
- Alliance lớn nhất có <50 members active
- Daily barb kill count toàn server giảm đột ngột
- Chat kingdom im lặng

Nếu server đang decline, Conquest Stars là một trong những event bị impact sớm nhất. Migration sang server mạnh hơn nên được cân nhắc trước KvK season tiếp theo.

## FAQ

### Server milestone có bị reset giữa chừng không?
Không reset — progress cộng dồn trong suốt event window. Nhưng window có deadline — nếu không đạt milestone trong deadline thì miss layer 1 reward.

### Individual star contribution có visible không?
Có — ingame leaderboard hiển thị rank star contributor của mày trong server. Dùng để estimate cần farm thêm bao nhiêu để vào top 10%.

### Gather tile có worth farm cho Conquest Stars không?
Không hiệu quả bằng barb kill hoặc research. Gather dùng để accumulate khi hết AP, không nên là primary source nếu đang có AP để chain rợ.

## Cả Server Benefit Khi Mày Farm Đủ

Conquest Stars là event win-win nếu đủ players farm chủ động. Bot setup sẵn = mày luôn trong nhóm top contributors, server đạt milestone nhanh hơn, mọi người nhận thêm reward.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Strongest Star Event RoK 2026](/blog/strongest-star-event-rok-2026)
- [Mightiest Governor Event Setup RoK 2026](/blog/mightiest-governor-event-setup-rok-2026)
- [Throne War Event RoK 2026](/blog/throne-war-event-rok-2026)
- [More Than Gems Event Grind RoK 2026](/blog/more-than-gems-event-grind-rok-2026)
- [Karuak Ceremony Event Guide RoK 2026](/blog/karuak-ceremony-event-guide-rok-2026)
  `,
};
