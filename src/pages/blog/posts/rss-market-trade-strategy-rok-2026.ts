import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "rss-market-trade-strategy-rok-2026",
  title: "RSS Market Trade Strategy RoK 2026 — 5% Tax + When Worth Trading",
  description: "RSS Market trade strategy RoK 2026: 5% tax mechanics, khi nào nên trade vs tự farm, food vs wood vs stone vs gold trade ratio tối ưu, và bot V1 auto-trade theo priority queue của bạn.",
  date: "2026-05-10",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Cái Bẫy 5% Tax Mà Hầu Hết Player Không Tính

RSS Market trong Rise of Kingdoms cho phép bạn trade resource với alliance member. Nghe đơn giản. Nhưng **5% tax** biến mọi trade thành toán học phức tạp hơn bạn nghĩ.

Ví dụ: bạn trade 1.000.000 food cho alliance member. Member nhận được **950.000 food** (5% tax = 50.000 biến mất). Không ai nhận 50.000 đó. Nó bay.

Vấn đề thực sự: nếu bạn trade không đúng scenario, bạn đang burn resource của cả hai phía. **Khi nào trade thực sự worth it?**

## 5% Tax — Math Cụ Thể

Tax là 5% trên sender. Nghĩa là:

- Bạn send 1M food → member nhận 950.000 food
- Bạn muốn member nhận đúng 1M → bạn phải send 1.052.631

Với trade khối lượng lớn (10M+), tax = **500.000+ resource mất trắng** mỗi trade. Không trivial.

## Khi Nào Trade Thực Sự Worth It

### Scenario 1: Bottleneck Resource Cấp Thiết

Bạn cần **thêm gold để research T4 troop** nhưng gold warehouse đang trống. Tile gold Lv 5 cần 4 tiếng gather. Alliance member có 5M gold dư.

Trade worth it: **time cost** của tự gather (4 tiếng × opportunity cost) lớn hơn 5% tax. Đặc biệt nếu đang trong KvK và mỗi tiếng delay = rank loss.

### Scenario 2: Warehouse Sắp Bị Raid

Bạn sắp bị rally. Stone warehouse 8M/10M cap — nếu bị raid mất 20% = 1.6M stone. Trade sang alliance member ngay bây giờ (mất 5% = 400.000) tốt hơn để bị raid mất 1.6M.

**Trade to protect từ raid = almost always worth it.**

### Scenario 3: Member Đang Build Troop Khẩn Cấp

KvK đang diễn ra. Member mất 2M troop, cần food train ngay. Bạn có 10M food dư warehouse sắp cap. Trade ngay: bạn tránh warehouse cap waste, member có food train. Win-win dù có 5% tax.

### Khi Nào KHÔNG Trade

- Trade để "chia đều" resource trong alliance mà không có bottleneck → waste
- Trade ngược chiều (member trade lại cho bạn cùng lượng) → cả hai mất 5%
- Trade gold vào trước event mà không biết chắc sẽ dùng ngay → resource idle không grow

> 📌 Xem thêm: [Food vs Wood Priority RoK 2026](/blog/food-vs-wood-priority-rok-2026) để biết resource nào nên ưu tiên giữ vs trade.

## Trade Ratio Tối Ưu Theo Resource Type

Không phải resource nào cũng có cùng trade priority:

| Resource | Trade Priority | Lý Do |
|---|---|---|
| Gold | HIGH | Hardest to farm, bottleneck research |
| Stone | MEDIUM-HIGH | KvK wall upgrade critical, gather chậm |
| Wood | MEDIUM | Build queue quan trọng, nhưng gather dễ hơn |
| Food | LOW | Easiest to farm, tile food phổ biến nhất |

Quy tắc đơn giản: **trade gold và stone khi cần thiết, tự farm food và wood**. Tốn 5% tax cho food là cost cao nhất vì food rẻ nhất để tự farm.

> 📌 Xem thêm: [Farm 1.000.000 RSS/Giờ Setup RoK 2026](/blog/farm-1000-rss-per-hour-setup-rok-2026) để tối ưu self-farm trước khi phụ thuộc trade.

## Alliance Market Tax vs Alliance Tech Reduction

Một số alliance research **giảm market tax** xuống 3-4%. Nếu alliance của bạn đã research node này, math thay đổi:

- 3% tax: trade 1M food → nhận 970.000 (thay vì 950.000)
- Với khối lượng lớn (50M trade/tuần), tiết kiệm được 1M resource so với 5% tax

Nếu alliance chưa research market tax reduction, đây là đề xuất đáng cho R4/R5.

## Bot V1 Auto-Trade Theo Priority Queue

Gói **V1 750.000đ/tháng** có auto-trade feature:

- **Priority queue config**: bạn set resource nào muốn trade ra (excess), cái nào muốn nhận
- **Warehouse threshold trigger**: khi resource X đạt 85% cap → auto-offer trade
- **Alliance member scan**: detect member nào đang requesting resource → auto-match
- **Tax-aware calculation**: tự tính đúng amount cần send để member nhận đủ target amount

Không phải tính năng "trade thay bạn bừa bãi". Bot chỉ trade khi **conditions bạn đặt ra được satisfy**.

> 🤖 V1 auto-trade theo priority queue, tránh waste 5% tax vào wrong scenarios. [Xem V1 →](/#packages) · 750.000đ/tháng.

## FAQ

### Alliance member có thể lừa trade không?

Trade system yêu cầu cả hai bên accept. Bot V1 chỉ trade với member đã được whitelist trong config của bạn.

### Trade có bị Lilith phát hiện không?

Trade là tính năng in-game chính thức. Không có mechanism ban vì trade quá nhiều. Bot chỉ sử dụng tính năng game cho phép.

### Tôi trade food sang gold được không?

Không thể trade cross-resource. Market chỉ trade cùng resource type giữa players (bạn offer food, member accept food). Để đổi food thành gold, phải dùng in-game shop hoặc alliance shop.

## Bắt Đầu

5% tax là real cost. Nhưng đúng scenario, trade vẫn là lợi. Bot V1 giúp bạn execute trade strategy nhất quán mà không cần manually monitor warehouse mỗi giờ.

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Food vs Wood Priority RoK 2026](/blog/food-vs-wood-priority-rok-2026)
- [Best Gathering Commanders RoK 2026](/blog/best-gathering-commanders-rok-2026)
- [Troop Training T1 vs T5 Efficiency RoK 2026](/blog/troop-training-t1-vs-t5-efficiency-rok-2026)
- [Speedup Stockpile Management RoK 2026](/blog/speedup-stockpile-management-rok-2026)
  `,
};
