import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "field-base-fortress-strategy-rok-2026",
  title: "Field Base Fortress Strategy RoK 2026 — Pháo Đài Field Trong KvK Best",
  description: "Pháo đài field RoK 2026: khi nào đặt field base, vị trí tối ưu, troop composition cho fortress hold, và V3 bot tự động reinforce và rotate fortress trong KvK không cần thức đêm.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Pháo Đài Field — Vũ Khí Của Player Biết KvK

Mày đang KvK và thấy alliance top của địch giữ được flag giữa Lost Kingdom cả 6 ngày. Mày rally liên tục nhưng không break. Lý do: họ có **field base fortress** được hold đúng cách — reinforce liên tục, composition đúng, timing đúng.

Pháo đài field không phải "đặt rồi thôi." Đó là **hệ thống dynamic** cần reinforce liên tục, adapt theo địch, và timing rotation chính xác.

## Field Base Types Trong KvK

### 1. Alliance Flag (trung lập trong Lost Kingdom)

Flag spawn tại các vị trí cố định trong Lost Kingdom. Capture → giữ → nhận buff cho cả alliance.

**Hold duration**: flag không thể bị taken trực tiếp — địch phải rally hết troop defend trước. Mỗi rally wipe = địch mất thêm troop.

**Value**: alliance member trong radius flag nhận +10-20% defense bonus, troop kháng thêm khi giao chiến gần flag.

### 2. Field Fortress (Holy Site / Sanctum Guardians)

Holy Site và Sanctum Guardian fortress là high-value target. Capture → giữ → nhận holy site buff lớn hơn flag nhiều.

**Hold difficulty**: cao nhất trong game — địch priority target này. Cần fortress commander tier cao và reinforce team.

> 📌 Xem thêm: [City Hall 25 Speedrun RoK 2026](/blog/city-hall-25-speedrun-rok-2026) — CH 25 unlock march tier 5 cần cho fortress hold.

## Troop Composition Fortress Hold

Khác garrison thành, fortress hold trong field ưu tiên:

**Infantry heavy (70-80%)**: infantry tanky nhất, không bị counter khi địch không biết mày dùng loại gì trong fortress.

**Archer (15-20%)**: ranged damage trong fortress hit địch trước khi vào melee range.

**Cavalry (5-10%)**: counter archer sub-march địch, không cần nhiều.

| Battle Phase | Recommended Composition |
|---|---|
| Initial Capture (aggressive) | 50% Cavalry / 30% Infantry / 20% Archer |
| Hold Phase (defensive) | 75% Infantry / 15% Archer / 10% Cavalry |
| Rally Defense (incoming heavy) | 80% Infantry / 15% Archer / 5% Cavalry |

> 📌 Xem thêm: [Defense Troop Composition Garrison RoK 2026](/blog/defense-troop-composition-garrison-rok-2026) — cùng logic 60/30/10 nhưng adjust cho field context.

## Vị Trí Đặt Field Base — Nguyên Tắc

### Gần Holy Site Priority Target

Field base cần đặt trong range reinforcement của holy site hoặc altar. Travel time reinforce march < 5 phút từ base đến target = nếu bị rally, reinforce đến kịp.

**Tránh:** đặt field base quá gần biên địch. Field base bị zero trước khi kịp reinforce = waste setup.

### Terrain Consideration

Trong Lost Kingdom: coordinate có chướng ngại vật giảm exposure từ nhiều hướng. Field base tại góc map hoặc cạnh alliance territory = địch chỉ có thể approach từ 1-2 hướng thay vì 4.

### Proximity Barb Fort

Field base gần barb fort lv 5-6 = bot V3 idle time giữa reinforce cycles dùng để farm barb fort. RSS và honor passive trong khi hold position.

> 📌 Xem thêm: [Combo Spam Luring AOE RokdBot V2](/blog/combo-spam-luring-aoe-rokdbot-v2) — barb farming logic áp dụng khi bot idle giữa reinforce cycles.

## Timing Rotation — Không Để Fortress Naked

Fortress hold thất bại phổ biến nhất: **reinforce troops bị kill, fortress empty 10 phút vì không ai reinforce kịp = địch take dễ dàng.**

**Rotation protocol:**

1. Set reinforce march timer: mỗi 2-3 giờ auto-reinforce (bot V3)
2. Hospital → heal → re-reinforce cycle không bị break
3. Alliance R4 pre-assign members theo ca để không gap

Với bot V3: reinforce auto-dispatch khi fortress troops dưới threshold. Không cần player thức 3am canh.

> 📌 Xem thêm: [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026) — wounded reinforce troops cần heal fast để re-rotate.

## Field Base vs Reinforce — Khác Biệt Strategy

**Field Base** (di chuyển city ra field): city mày teleport ra gần target. Higher risk (city có thể bị zeroed), higher reward (march speed + capacity tại chỗ).

**Reinforce từ home city**: an toàn hơn, nhưng travel time dài hơn. Địch có window để take sau khi wipe garrison trước khi reinforce đến.

**Recommendation:** field base chỉ khi alliance có protection ring xung quanh. Không field base isolated khi địch dominant.

> 🤖 Bot V3 tự động dispatch reinforce khi fortress health/troop dưới ngưỡng, auto-heal troops giữa cycles, farm barb nearby khi idle — field fortress hold 24/7 không cần thức đêm. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## FAQ

### Field base có thể bị zeroed không?

Có — nếu địch rally đủ lớn và không có reinforce kịp, city tại field base bị zeroed. Backup: dùng peace shield trước khi field base, shield lại ngay sau khi KvK phase ends.

### Cần bao nhiêu troop trong fortress để hold?

Minimum: 300.000-500.000 troops trong fortress để absorb 1-2 rally của địch 800K+ march. Alliance channel nên set threshold: nếu fortress dưới 200K, tất cả reinforce ngay.

### Bot có tự biết khi nào reinforce fortress không?

Bot V3 có fortress monitoring mode — detect garrison level, auto-dispatch reinforce khi dưới threshold set bởi user. Không cần manual trigger.

## Bắt Đầu

Field fortress strategy: vị trí đúng + composition 75/15/10 Infantry/Archer/Cavalry + rotation reinforce không gap. Bot V3 tự động toàn bộ rotation mà không cần thức đêm.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Defense Troop Composition Garrison RoK 2026](/blog/defense-troop-composition-garrison-rok-2026)
- [Hospital Healing Optimization RoK 2026](/blog/hospital-healing-optimization-rok-2026)
- [City Hall 25 Speedrun RoK 2026](/blog/city-hall-25-speedrun-rok-2026)
  `,
};
