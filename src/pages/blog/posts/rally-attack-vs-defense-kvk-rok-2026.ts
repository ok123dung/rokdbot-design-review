import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "rally-attack-vs-defense-kvk-rok-2026",
  title: "Rally Attack vs Defense KvK RoK 2026 — Khi Nào Đánh Khi Nào Phòng (Math)",
  description: "Rally attack vs defense KvK RoK 2026: phân tích math khi nào rally attack có lợi, khi nào garrison defend tốt hơn, troop loss calculation, và cách bot V3 optimize cả 2 mode 24/7.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Câu Hỏi Không Ai Tính Kỹ: Rally Hay Garrison?

Trong KvK, mọi người biết rally = honor cao. Nhưng **khi nào** rally, **khi nào** garrison — đa số quyết định bằng cảm giác, không phải math.

Kết quả: đốt troops vào rally không cần thiết trong Phase 1, hoặc garrison quá thụ động trong Phase 2 khi đang có buff. Cả 2 đều tạo ra troop loss không optimize.

Bài này tính thẳng math. Đọc xong, mày sẽ biết chính xác khi nào đánh, khi nào phòng — và bot lo cái nào.

## Rally Attack Math — Break-Even Point

Rally thắng = honor. Rally thua = troops chết + không có honor. Break-even là điểm mà rally **đáng làm**.

### Công Thức Break-Even

> **Rally worth it IF:** (Honor/rally × win rate) > (Troop loss value/rally)

Troop loss value: mỗi T4 chết = ~800 resource equivalent. T5 chết = ~2.000 resource.

### Ví Dụ Tính Thực

**Rally barb fort lv5 với alliance 3 march**:
- Honor/win: ~6.000
- Win rate vs barb lv5 (3 march): ~85%
- Expected honor: 6.000 × 85% = **5.100 honor**
- Troop loss/rally: ~500 T4 chết (mixed march) = 400.000 resource
- Resource-to-honor rate: 400k resource / 5.100 honor = **78 resource/honor**

**Rally enemy city (player power = mày)**:
- Honor/win: ~3.000
- Win rate: ~50% (equal power)
- Expected honor: 3.000 × 50% = **1.500 honor**
- Troop loss/rally: ~2.000 T4-T5 = 2.000.000 resource
- Resource-to-honor rate: 2M resource / 1.500 honor = **1.333 resource/honor**

**Kết luận**: Rally barb fort lv5 = **17x hiệu quả hơn** rally enemy city cùng power. Enemy city chỉ đáng đánh khi win rate >80% (tức mày mạnh hơn rõ ràng).

> 🤖 V3 auto-join barb fort rally với timing tối ưu — không bao giờ join rally win rate < threshold. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Garrison Defense Math

Khi nào garrison worth it?

### Garrison = Worth It Nếu:

1. **Holding strategic territory** — Lost Temple, flag chính: garrison value > troop replacement cost
2. **Power gap > 30%**: nếu địch mạnh hơn 30%, rally out = suicide. Garrison + reinforce tốt hơn
3. **Alliance reinforcement stack**: 5+ member reinforce garrison → power multiplier khiến địch không dám rally

### Garrison = Lãng Phí Nếu:

1. **Holding tile lv3 hoặc thấp hơn**: tile value < troop replacement cost sau battle
2. **Solo garrison, không reinforce**: 1 march garrison = easy prey. Địch rally thắng guaranteed
3. **Phase 1 non-strategic territory**: Phase 1 không có battle multiplier — honor từ battle Phase 1 thấp hơn Phase 2 nhiều

**Math quick check**: garrison worth it nếu tile/building value > (T4 death cost × expected casualties).

## Phase-Based Decision Framework

| Phase | Attack | Defend | Lý Do |
|---|---|---|---|
| Phase 1 | Barb fort lv4+ | Lost Temple + flag | Honor/AP tốt nhất từ barb chain + fort |
| Phase 2 | Enemy building | Strategic territory | Destroy building = honor + resource deny |
| Phase 3 | Temple + Sacred | Temple garrison | All-in cuối KvK |

Bot không tự quyết định **chiến lược** (attack hay defend). Bot thực thi **tactic**: khi R5 launch rally → bot join; khi R5 set garrison → bot reinforce. Decision vẫn của R5.

## Troop Composition Cho Rally vs Garrison

### Rally Attack Composition

| Troop Type | Role | Ratio |
|---|---|---|
| Cavalry | Front DPS, high mobility | 40% |
| Infantry | Tank, absorb AOE | 30% |
| Archer | Ranged damage, low loss rate | 30% |

Cavalry heavy composition phù hợp rally barb fort lv5-6 — speed bonus giúp arrive trước window đóng.

### Garrison Defense Composition

| Troop Type | Role | Ratio |
|---|---|---|
| Infantry | Wall, highest DEF | 50% |
| Cavalry | Counter-charge nếu địch rally | 30% |
| Archer | Ranged attrition | 20% |

Infantry heavy garrison = địch cần rally 2x hoặc 3x để break. Mỗi rally thất bại của địch = **honor cho mày** nếu mày launch counter-rally sau đó.

## Bot Role Trong Rally vs Garrison

Bot V3 không tự rally hay garrison tùy ý. Bot execute theo command:

- **Barb chain mode** (default): bot kéo rợ 24/7, join barb fort rally khi R5 launch
- **Garrison mode** (khi R5 set): bot auto-reinforce target garrison khi troops về city
- **Hybrid**: 1 đạo barb chain, 1 đạo garrison reinforce — V3 2 đạo làm được cùng lúc

Đây là lợi thế V3: **không phải chọn giữa farm và defend** — làm cả 2 parallel.

> 🤖 V3 2 đạo: 1 đạo barb chain + 1 đạo garrison reinforce song song. [Xem V3 →](/#packages).

## Case Study: Alliance Chọn Sai Mode Phase 2

Alliance "Sea Storm" KvK Season 6: R5 quyết định garrison toàn bộ flag territory trong Phase 2, không rally barb fort lv5 vì "sợ mất troops".

Kết quả sau 6 ngày Phase 2:
- Honor trung bình: **145.000** (thay vì 350.000 target)
- Troops loss từ garrison battle: **12% army**
- Rank cuối KvK: **#62** (target: Top 30)

**Phân tích**: rally barb fort lv5 với win rate 85% tạo ra 5.100 expected honor/rally × 3 rally/ngày = **15.300 honor/ngày extra** nếu họ attack thay vì garrison. 6 ngày × 15.300 = **91.800 honor lost** từ quyết định sai.

Math rõ ràng: Phase 2 phải attack barb fort, không phải garrison tile thường.

## FAQ

### V3 có tự quyết định rally hay garrison không?
Không — decision là của R5/R4 human. Bot execute timing và join tối ưu dựa trên R5 lệnh.

### Mày có thể set bot garrison và rally đồng thời không?
V3 2 đạo: đạo 1 garrison mode, đạo 2 barb chain/rally mode — parallel. Không conflict.

### Troop loss từ barb fort lv6 có đáng không?
Barb fort lv6 rally: ~8.000-12.000 honor/win, ~1.000 T4 loss. Resource cost ~800.000. Honor value vs resource: **10 resource/honor** — tốt nhất game trong Phase 2.

## Bắt Đầu Rally Optimization Với V3

**V3 Siêu Cấp 1.200.000đ/tháng**:
- 2 đạo: barb chain + rally support parallel
- Auto-join rally với timing tối ưu theo lệnh R5
- Math-based threshold: chỉ join rally expected win rate > 70%

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [KvK Season 8 Complete Guide RoK 2026](/blog/kvk-season-8-complete-guide-rok-2026)
- [Auto Rally Captain RoK 2026](/blog/auto-rally-captain-rok-2026)
- [AI Commander Rotation V3 RoK](/blog/ai-commander-rotation-v3-rok)
  `,
};
