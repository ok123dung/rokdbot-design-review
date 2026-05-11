import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "kvk-phase-1-stronger-wars-guide-rok-2026",
  title: "KvK Phase 1 Stronger Wars Guide RoK 2026 — 5 Ngày Đầu Crucial",
  description: "KvK Phase 1 Stronger Wars RoK 2026: 5 ngày đầu quyết định toàn bộ KvK. Honor threshold, tile priority, barb chain setup, và cách bot V3 farm 24/7 để không tụt rank ngay từ ngày 3.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## 5 Ngày Đầu KvK — Mày Thua Từ Đây

Không phải Phase 3. Không phải Final Battle. KvK thua từ **5 ngày đầu** Phase 1 — khi alliance vẫn đang migrate lôi thôi và honor board đã có người dẫn 50.000 cách biệt.

Phase 1 Stronger Wars là phase mà 80% player chủ quan. Họ nghĩ "Phase 1 chỉ di chuyển thôi". Sai hoàn toàn. Phase 1 là nơi **thiết lập momentum**, chiếm tile chiến lược, và bắt đầu honor grind trước khi địch ổn định.

5 ngày đầu không làm đúng → Phase 2 mày bắt đầu từ điểm âm.

## Stronger Wars Phase 1 — Mechanics Khác Gì Thường?

Stronger Wars KvK có một twist so với KvK thông thường: **combat buff stack theo ngày**.

- Ngày 1: +5% attack/defense buff toàn kingdom
- Ngày 2-3: +10% buff
- Ngày 4-5: +15% buff

Buff tích lũy THEO KINGDOM — kingdom nào có nhiều player active ngày 1-2 thì buff stack trước, chiếm lợi thế combat từ sớm. Alliance nào delay migration sẽ chiến đấu với -10% buff disadvantage trong ngày 3-4.

### Implication Thực Tế

Mày cần **migrate và active ngay ngày 1** — không phải "xem tình hình rồi tính". Mỗi tiếng chậm trễ = buff stack chậm hơn cho cả kingdom.

> 🤖 V3 Siêu Cấp tự động barb chain từ phút đầu KvK mở — 2 đạo liên tục, honor stack ngay khi buff ngày 1 còn +5%. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Tile Priority Ngày 1-2

### Must-Capture Trước 24h

| Tile | Lý Do | Priority |
|---|---|---|
| Lv5 resource tile quanh Lost Temple | Supply buffer Phase 2-3 | Cao nhất |
| Barb Fort lv3-4 gần territory | Honor + troop kill points | Cao |
| Passway chokepoint | Block enemy migration | Trung bình |
| Lv4 crystal/ore tile | Building material Phase 2 | Trung bình |

Đội nào chiếm lv5 resource tile trước sẽ có **rss advantage trong toàn bộ KvK** — healing troops nhanh hơn, training nhanh hơn, maintain army size tốt hơn.

### Sai Lầm Phổ Biến Ngày 1

90% R4 mới KvK migrate xong là... đứng im chờ lệnh. Trong khi đó:
- Bot của opponent đang chain barb từ giờ đầu
- Honor gap tích lũy từng phút
- Buff stack chênh lệch từng tiếng

Không chờ. Bắt đầu barb chain ngay sau migrate.

## Honor Threshold Phase 1 — Số Thực Tế

Top 50 kingdom standard (server age 1-2 năm):

| Role | Honor Target Phase 1 (5 ngày) | Tương đương |
|---|---|---|
| R5 Rally Lead | 150.000+ | ~3 rally barb fort lv5/ngày |
| R4 Core Fighter | 80.000+ | ~350 barb chết/ngày |
| R3 Barb Chain | 50.000+ | ~220 barb chết/ngày |
| R3 Shield | 20.000+ | Garrison + rally assist |

R3 Barb Chain slot = slot bot làm tốt nhất. 220 barb/ngày × 5 ngày = 1.100 barb — manual không ai duy trì được 5 ngày liền không sót đêm.

## Barb Chain Setup Phase 1

### Commander Pair Khuyên Dùng

- **F2P**: Theodora + Boudica — Theodora AOE active, Boudica anti-barb passive
- **Mid tier**: Yi Seong-Gye + Lohar — YSG AOE range lớn nhất, Lohar peacekeeping bonus
- **Whale**: YSG + pet Hawk — AOE radius mở rộng 15-25%

### Chain Path Tối Ưu

Ngày 1-2 Phase 1: barb lv20-25 tập trung gần territory của mày. Chain path = **vòng tròn bán kính 3-5 ô** quanh city — không đi sâu vào enemy territory.

Ngày 3-5: khi buff stack đạt +15%, mở rộng chain radius tới barb lv27-30 — damage cao hơn, kill nhanh hơn.

> 🤖 V3 tự động điều chỉnh chain radius theo ngày và buff level — không cần config lại mỗi ngày. [Xem V3 →](/#packages).

## 3am Giờ VN — Cái Giá Của Manual Farm

KvK Phase 1 quan trọng nhất là **không bỏ tiếng nào**. Trong 5 ngày × 24h = 120 tiếng, manual player thực tế chỉ active khoảng 30-40 tiếng (trừ ngủ, làm việc, ăn uống).

Bot V3: active **20h+/ngày** = 100h trong 5 ngày.

Gap: 60-70 tiếng bot farm vs 30-40 tiếng manual. Với 430 barb/ngày (V3 2 đạo):

**Tiếng thừa của bot = ~430 × (60÷24) = ~1.075 barb thêm** so với manual trong 5 ngày Phase 1.

1.075 barb × ~200 honor = **215.000 honor thêm** chỉ từ thời gian "online ban đêm".

## Heal Cycle — Yếu Tố Quyết Định Sustainability

Phase 1 Stronger Wars có barb mạnh hơn thường vì combat buff của họ cũng scale. Troops bị thương nhiều hơn per chain.

Manual: hospital đầy → stop chain → manual heal → speedup → resume. Mất 15-20 phút/cycle.

Bot V3: hospital đầy → **auto heal + auto speedup + resume chain trong 60 giây**. Không break flow.

Difference: manual mất ~4 heal cycles/ngày × 15 phút = **1 tiếng downtime/ngày**. Bot = 0 downtime.

## Lỗi Chiến Lược Thường Gặp Phase 1

### Lỗi 1: Rally Barb Fort Quá Sớm

Ngày 1-2, barb fort lv4-5 có troops mạnh hơn vì buff stack của chúng chưa có counter. Rally thất bại = troops troopers bị thương mass, heal ngốn speedup.

Khuyên: barb chain đơn lẻ ngày 1-2, rally fort từ ngày 3 khi mày có buff +10%.

### Lỗi 2: Không Reinforce Flag Chính

Flag bị capture = toàn alliance mất buff. R4 shield rotate cần cover 24/7. Bot V3 có thể chạy barb chain và auto-reinforce flag khi garrison < threshold — cùng lúc.

### Lỗi 3: Burn Speedup Ngày 1

Speedup là finite resource. Đừng dùng speedup heal ngày 1 trừ emergency. Giữ cho Phase 3 Final Battle khi cần max troops trong 6h.

## FAQ

### Phase 1 kéo dài bao lâu chính xác?
Stronger Wars Phase 1 thường **5-6 ngày** tùy server, sau đó chuyển Phase 2 Destroy. Countdown hiển thị trên KvK event panel.

### Bot có tự migrate không?
Bot không tự quyết định migrate (migration là quyết định chiến lược của R5). Nhưng sau khi R5 set migrate lệnh, bot **tự thực hiện migration và resume barb chain** trong vòng 10 phút.

### V2 hay V3 cho Phase 1?
V3 2 đạo rõ ràng vượt trội cho Phase 1 honor grind. V2 1 đạo vẫn đủ Top 100 nếu power < 20M.

## Bắt Đầu Phase 1 Với V3

**V3 Siêu Cấp 1.200.000đ/tháng**:
- 2 đạo barb chain ngay từ ngày 1 KvK
- Auto heal + speedup + resume — 0 downtime
- Honor ~430 barb/ngày × 5 ngày = 2.150 barb Phase 1

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [KvK Season 8 Complete Guide RoK 2026](/blog/kvk-season-8-complete-guide-rok-2026)
- [KvK Season Prep Bot Checklist RoK 2026](/blog/kvk-season-prep-bot-checklist-rok-2026)
- [Heroic Anthem KvK Fort Build RoK 2026](/blog/heroic-anthem-kvk-fort-build-rok-2026)
  `,
};
