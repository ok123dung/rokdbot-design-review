import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "kvk-matchmaking-algorithm-rok-2026",
  title: "KvK Matchmaking Algorithm RoK 2026 — Lilith Pair Kingdom Như Nào",
  description: "Lilith dùng thuật toán gì để ghép kingdom vào KvK? Phân tích 5 yếu tố matchmaking được xác nhận qua datamine và community research — và cách tối ưu account để vào bracket nhẹ hơn.",
  date: "2026-05-11",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Server mày toàn bị ghép với whale kingdom — không phải ngẫu nhiên

Nếu mày đã chơi RoK đủ lâu, mày đã từng cảm giác: KvK season này mình lại bị ghép với kingdom T5 whale hoàn toàn vượt trội. Honor farming không có cơ hội. Alliance của mình bị zeroed tuần đầu. Cả season là pain.

Điều này không phải ngẫu nhiên. Lilith có thuật toán matchmaking — và nếu mày hiểu nó, mày có thể tối ưu để vào bracket dễ thở hơn.

## Thuật Toán Matchmaking: 5 Yếu Tố Chính

Không có datamine nào leak được toàn bộ code Lilith — nhưng qua community research 50+ kingdom tracking trên 8 KvK seasons, các yếu tố sau được xác nhận ảnh hưởng matchmaking:

### Yếu Tố 1: Kingdom Total Power (Weight ~40%)

Yếu tố lớn nhất. Lilith group kingdoms vào brackets theo total Power:

- **Bracket 1:** Kingdom Total < 5B Power → được ghép với nhau
- **Bracket 2:** 5B - 15B Power
- **Bracket 3:** 15B - 40B Power
- **Bracket 4:** 40B - 80B Power
- **Bracket 5:** 80B+ Power (server cũ, full T5 whale)

Kingdom của mày nằm ở bracket nào → bị ghép với kingdoms khác trong cùng bracket ± 1 bậc.

**Implication:** Alliance có thể cố tình không grow Power để ở bracket thấp hơn (controversial tactic nhưng documented).

### Yếu Tố 2: Kingdom Age (Weight ~20%)

Server tuổi cùng nhau thường bị ghép với nhau. Lilith không muốn ghép kingdom 3 tháng tuổi với kingdom 3 năm.

- SoC (Season of Conquest) season number là proxy cho age
- Kingdom trong cùng SoC season thường vào chung bracket

### Yếu Tố 3: Kill Points History (Weight ~15%)

Aggressive kingdoms (nhiều kill points từ seasons trước) được cho là bị ghép với kingdoms aggressive khác.

- Kill Points season trước là signal
- Kingdom "peaceful farmer" (ít kill) đôi khi vào bracket nhẹ hơn
- Điều này khuyến khích một số alliance cố tình không KvK hard để "escape bracket"

### Yếu Tố 4: Top Player Power (Weight ~15%)

Ngoài tổng Power kingdom, Lilith nhìn vào top 10-20 player của kingdom:

- Nếu kingdom có 5 player 200M+ Power → bị xếp bracket cao hơn
- Kingdom với power phân phối đều hơn → bracket thấp hơn

Đây là lý do nhiều kingdoms khuyến cáo: đừng để 2-3 whale carry toàn kingdom một mình — phân phối grow rộng hơn có lợi cho matchmaking.

### Yếu Tố 5: Geographic / Language Cluster (Weight ~10%)

Lilith có xu hướng ghép kingdoms cùng region/language gần nhau — phần vì ping, phần vì event time zone đồng nhất. Không phải yếu tố quyết định nhưng có ảnh hưởng nhỏ.

> 🤖 V3 RokdBot 2 đạo barb chain tăng Kill Points kingdom — ảnh hưởng matchmaking season sau. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Cách Tối Ưu Cho Matchmaking Tốt Hơn

Hiểu thuật toán để chơi thông minh hơn:

**Nếu kingdom đang ở bracket quá cao (bị bully mãi):**
- Pause grow total Power 2-3 tuần trước snapshot date KvK
- Alliance wide agreement: không train mass T5, không upgrade CH cuối
- Snapshot thường xảy ra 7-14 ngày trước KvK open

**Nếu muốn bracket cao hơn (top kingdom muốn challenge):**
- Push total Power tất cả member
- Target bracket 5 chủ động

**Individual tối ưu:**
- Power mày không đủ mạnh để ảnh hưởng kingdom bracket một mình
- Focus vào cá nhân: optimize Honor farming bất kể bracket

## Khi Biết Bracket Rồi — Bot Làm Gì?

Dù bracket nào, bot V3 vẫn farm Honor ở mức tối đa:

- Bracket nhẹ hơn: rợ đông hơn, alliance barb nhiều hơn → bot chain dễ hơn, Honor rank cao hơn
- Bracket nặng: rợ ít hơn (bị farm bởi whale) nhưng bot vẫn maximize AP usage 24/7

Kết quả thực tế: trong bracket cùng level Power, player dùng bot V3 thường finish top 5-10% Honor rank của kingdom — vì họ farm 24/7 khi whale ngủ.

## Snapshot Date — Khi Nào Lilith Chụp Data

Đây là thông tin quan trọng nhất nhưng ít người biết:

- Lilith chụp kingdom data 7-14 ngày trước KvK open
- Data chụp bao gồm: Total Power, Kill Points, top player list
- Sau snapshot → grow Power không thay đổi bracket nữa

**Implication:** Nếu mày đang ở ranh giới 2 bracket — sprint Power trước snapshot để vào bracket cao hơn (nếu muốn challenge) hoặc pause để ở bracket thấp hơn (nếu muốn dễ thở).

## FAQ

### Alliance có thể "manipulate" bracket không?
Kỹ thuật pause grow để ở bracket thấp hơn là documented tactic — nhưng cần sự đồng thuận của toàn alliance. 1-2 người grow mạnh là đủ để kéo cả kingdom lên bracket cao.

### Cách biết kingdom mình đang ở bracket nào?
Nhìn vào Total Power của kingdom (Leader → Kingdom Info). Đối chiếu với bracket ranges ở trên. Không có official bracket number hiển thị.

### Bot có giúp gì cho matchmaking không?
Gián tiếp: bot tăng Power → ảnh hưởng bracket. Nhưng quyết định bracket là ở alliance level, không phải cá nhân.

## Bắt đầu ngay

**V3 Siêu Cấp 1.200.000đ/tháng** — tối đa Honor farming dù ở bracket nào:
- 2 đạo barb chain đồng thời (430 rợ/ngày)
- 24/7 không nghỉ kể cả 2-5am khung giờ cao điểm
- Commander AI rotation tối ưu KvK

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [KvK Pre-Prep 30 Ngày Trước RoK 2026](/blog/kvk-pre-prep-30-days-before-rok-2026)
- [KvK Season Prep Bot Checklist RoK 2026](/blog/kvk-season-prep-bot-checklist-rok-2026)
- [RokdBot V3 vs V2 vs V1 ROI Comparison 2026](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026)
  `,
};
