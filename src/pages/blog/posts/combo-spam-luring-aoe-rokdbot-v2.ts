import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "combo-spam-luring-aoe-rokdbot-v2",
  title: "Combo Spam + Luring + AOE RokdBot V2 — Tại sao kéo rợ 1 đạo với Combo cho gấp 4x Honor mỗi AP?",
  description: "V2 RokdBot độc quyền Combo Spam + Luring + AOE — kéo rợ 1 đạo với frame-perfect skill timing. Phân tích cơ chế Phase Spam/Phase Luring/Phase AOE, commander setup F2P-friendly, case study 217 con rợ/ngày từ V2 1 đạo. Honor/AP gấp 4x basic farm.",
  date: "2026-05-09",
  readTime: "7 phút",
  coverImage: "/blog-images/auto-rally/img-15-1Qj3K8K.png",
  content: `
## Tại sao 5-7 con rợ chết / 1 cast = gấp 4x kéo basic?

Phép toán đơn giản: 1 lần cast active skill commander tốn 1.000 rage = 1 chu kỳ combat. Nếu skill chỉ chạm **1 con rợ** → 1 con chết / cast. Nếu skill đè lên **cụm 5-7 con rợ overlap** → 5-7 con chết / cast.

Cost mỗi cycle là KHÔNG đổi (vẫn 1.000 rage + AP cost). Nói cách khác:

- **Kéo rợ basic** (1 con / cast): 1 AP = **1-2 con rợ chết**
- **Kéo rợ với Combo Spam + Luring + AOE** (5-7 con / cast): 1 AP = **5-8 con rợ chết**

Đây là lý do top 5% players RoK không bao giờ kéo rợ kiểu basic. Họ luôn dùng Combo.

## Combo Spam + Luring + AOE thật ra là gì?

3 chiến thuật cổ điển trong RoK:

- **Spam** — liên tục pressure target, không cho đối phương đứng yên
- **Luring** — dụ đối phương ra vị trí có lợi cho mình (cluster lại với nhau)
- **AOE** — active skill commander gây sát thương vùng (Area of Effect)

Combo = chuỗi liền mạch 3 phase:

### Phase 1 — Spam (0-30s)
March commander tới rợ đầu tiên, đánh continuous. Cùng lúc, march di chuyển CHẦM CHẬM dọc theo line rợ gần đó — KHÔNG tap thẳng đến rợ tiếp theo.

### Phase 2 — Luring (30-60s)
Khi march đi gần rợ thứ 2, 3, 4 → rợ tự động aggro vào march (cơ chế pathfinding của RoK: rợ chase target nearest). Cụm rợ stack vào nhau quanh march của bạn.

### Phase 3 — AOE Trigger (frame 0)
Khi commander rage đầy 1.000 + cluster rợ ≥5 con trong skill range → trigger active skill → AOE wipe sạch cụm.

![Commander rage đầy 1.000 + AOE skill đang trigger giữa cluster rợ — thời điểm vàng của Combo](/blog-images/auto-rally/img-11-1ANrHm44.png)

Lặp Phase 1-3 liên tục = **"kéo man rợ chain"**. 1 đạo bot V2 thực hiện chuỗi này 24/7 không nghỉ.

## Vấn đề khi tự kéo rợ Combo thủ công

Nghe hợp lý? Vấn đề là **95% players không làm được consistently**. Lý do:

### Phản xạ <200ms cho frame timing
Skill auto-cast của game trigger NGAY khi rage = 1.000 — không quan tâm cluster đang ở đâu. Bạn cần TẮT auto-cast và manual tap đúng frame rợ stack đỉnh điểm. Trễ 0,5 giây = **mất 30-40% damage AOE**.

### Đọc heatmap trong đầu
Phải nhìn 5-10 con rợ trên map, ước lượng vị trí stack center, đoán frame next peak — trong khi vẫn drag march. **Pro player cần 6+ tháng experience** để làm được consistently.

### Active 24/7 KvK
KvK 14 ngày × 24h = **336 tiếng**. Combo manual đòi hỏi player CHĂM CHÚ vào màn hình. Ai cày được 14 đêm liền, mỗi đêm 4-6 tiếng? Bỏ 1 đêm KvK 3-5am giờ VN = mất rank Honor.

### Hospital pause cắt nhịp
Mỗi 5-10 chain, troops bị thương phải vào hospital → break flow → mất 5-10 phút/lần. Đến lượt next chain, momentum gone, rage reset.

## V2 RokdBot tự động Combo — kết quả thực tế

Gói **V2 Cao Cấp 900.000đ/tháng** có Combo Spam + Luring + AOE độc quyền. Bot làm khác manual:

- **Trigger skill ở frame perfect** — monitor enemy positioning real-time, fire khi cluster overlap đỉnh điểm. Damage tăng **35-40%** so với auto-cast game.
- **Drag march continuous** — di chuyển chính xác từng cm dọc line rợ để pull thêm rợ vào AOE radius.
- **Smart heal + return** — wounded troops auto vào hospital, speedup auto-spend, troops sẵn sàng cho chain tiếp theo trong **60 giây**.
- **24/7 không nghỉ** — chạy đêm 3-5am giờ VN không vấn đề.

![AOE skill cast ở frame perfect — 4 damage numbers đồng thời (-1.758 / -1.406 / -522 / -297) trong 1 lần trigger trên cụm rợ](/blog-images/auto-rally/img-15-1Qj3K8K.png)

### Số liệu thực tế (case study)

> 📊 Lưu ý: số dưới đây = **Victory counter** (mỗi con rợ thường chết = +1 Victory). Rally pháo đài barbar lv 30+ có reward riêng, không tính vào đây.

Khách Premium VIP RokdBot (3-4 đạo chain) đạt **~866 Victory / ngày** trung bình. Chia theo đạo:

| Gói | Số đạo chain | Rợ chết / ngày (Victory) |
|---|---|---|
| **V2 Cao Cấp** | 1 đạo | **~217 con** |
| V3 Siêu Cấp | 2 đạo | ~430 con |
| Premium VIP | 3-4 đạo | 866+ con |

V2 1 đạo = **217 con / ngày × 30 = 6.500 con rợ chết / tháng**. Không thể đạt số này nếu không có Combo Spam + Luring + AOE — basic farming chỉ ~50-80 con/ngày.

> 🤖 V2 Combo Spam+Luring+AOE độc quyền — không gói nào dưới V2 có. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Commander setup tối ưu cho V2 Combo

### F2P friendly (không cần whale)
- **Theodora + Saladin** — Theodora AOE active skill, Saladin secondary damage cavalry
- **Boudica + Constantine** — Boudica anti-rợ passive, Constantine peacekeeping AOE

### Mid tier (1-2 năm chơi)
- **Yi Seong-Gye + Cao Pi** — YSG AOE archer (skill range lớn nhất game), Cao Pi rally damage. Pair này được bot V2 dùng nhiều nhất.
- **Lohar + Sun Tzu** — Lohar peacekeeping max damage rợ, Sun Tzu giảm AP cost 5-10%

### Pro tier (whale / 3+ năm)
- **Yi Seong-Gye + pet Hawk** — pet Hawk tăng skill range của YSG thêm 15-25% → cluster wider
- **Trajan + Theodora** — Trajan tank + AOE, Theodora AOE secondary

Bot V2 **tự nhận diện** commander pair tối ưu của bạn và dùng đúng pattern. Không cần config thủ công.

## So sánh V2 / V3 / Premium VIP

| Gói | Số đạo chain | Combo | Rợ/ngày | Honor/ngày | Giá |
|---|---|---|---|---|---|
| **V2 Cao Cấp** | 1 đạo | ✅ | ~217 | ~2.500 | **900k** |
| V3 Siêu Cấp | 2 đạo | ✅ + rotation | ~430 | ~5.000 | 1,2M |
| Premium VIP | 3-4 đạo | ✅ | 866+ | ~10.000 | 3M |

**V3 1.2M = ROI tốt nhất / đạo** nếu mày có power 30M+ (đủ troops cho 2 đạo). **V2 900k = sweet spot F2P** cho người mới.

> ⚡ Sẵn sàng kéo rợ gấp 4x AP basic? [Xem chi tiết V2 Cao Cấp →](/#packages) · 900.000đ/tháng, kích hoạt 24h.

## FAQ

### Combo Spam+Luring+AOE có bị Lilith ban không?
Bot RokdBot chạy cloud server riêng, không inject client, không macro. Tỷ lệ ban **<0,1%** qua 8 KvK seasons. Combo là chiến thuật **hợp lệ** — top players đã dùng từ lâu, Lilith không cấm.

### Tôi không có Yi Seong-Gye tier S+ thì sao?
F2P pair Theodora + Saladin / Boudica + Constantine vẫn farm được Top 50 Kingdom với V2. Hiệu quả giảm ~20-30% so với pro tier nhưng vẫn vượt trội basic farm 3-4 lần.

### V2 có dùng được trong defense (garrison) không?
Có. Trajan + Theodora pair khi defend flag — Spam đổi thành Reinforce continuous, AOE phát huy khi địch tập trung tấn công cluster vào garrison.

## Bắt đầu ngay

**V2 Cao Cấp 900.000đ/tháng** = sweet spot F2P/VIP thấp:
- 1 đạo barb chain liên tục với **Combo Spam + Luring + AOE độc quyền**
- Đào gem 24/7 (gem mining bao gồm)
- Auto train + heal + build + research + claim

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Auto Honor Farming RoK 2026 — Khách FREE AP đạt Power 98M trong 17 tháng](/blog/auto-honor-farming-kvk-rok-2026)
- [Auto Rally Captain — Tự động rally fortress 24/7](/blog/auto-rally-captain-rok-2026)
- [AI Commander Rotation V3 — Skip 6 tháng farm expertise](/blog/ai-commander-rotation-v3-rok)
  `,
};
