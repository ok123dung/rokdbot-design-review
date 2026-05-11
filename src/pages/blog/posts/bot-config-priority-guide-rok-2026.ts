import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "bot-config-priority-guide-rok-2026",
  title: "Bot Config Priority Guide RoK 2026 — Setup Combat / Farm / Build Schedule",
  description: "Setup priority đúng cho bot RokdBot V2 quyết định account mày tăng trưởng nhanh hay chậm. Guide này phân tích 3 schedule mode: Combat, Farm, Build — khi nào dùng cái nào, và cách switch theo phase KvK vs peacetime.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Config sai priority = bot chạy 24/7 mà account không lớn

Nhiều player nghĩ bot chạy là tự khắc account lớn. Không phải vậy. Bot làm những gì mày cài — nếu cài sai priority, nó làm đúng cái mày cài nhưng sai cái mày cần.

Ví dụ thực tế: bot V2 được cài ưu tiên Train Troops 100% → troops tràn warehouse → rss hết → bot idle vì không có rss → farm rợ bị dừng. Mày wake up thấy 0 rợ chết sau 8h ngủ.

Hoặc: cài ưu tiên Farm Rợ trong peacetime không có KvK → honor farm không có đầu ra → phí AP, không có point để claim honor reward.

Config Priority Guide này phân tích từng scenario.

## 3 Schedule Mode và khi nào dùng

### Mode 1: Combat Mode (KvK Active)

Priority stack từ cao đến thấp:

- **Honor farm (barb chain)**: cao nhất — mỗi AP trong KvK = honor, honor = rank, rank = reward
- **Heal troops**: cao — troop loss trong KvK cao hơn peacetime, heal nhanh để resume farm
- **Build**: thấp — không nên dùng speedup cho build trong KvK (dùng cho heal)
- **Research**: pause — research không cho honor, không làm trong KvK
- **Train troops**: medium — train T3+ để bù troop loss

Lý do: mỗi 1 AP idle trong KvK = honor bị bỏ qua. Toàn bộ resource phải đổ vào honor chain.

> 🤖 V2 Combat Mode tự switch khi KvK bắt đầu. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

### Mode 2: Farm Mode (Peacetime — giữa 2 KvK)

Priority stack:

- **Resource tile farm**: cao nhất — đây là thời gian tích lũy rss cho KvK tiếp theo
- **Barb farm (basic)**: medium — không cần Combo intensity cao, farm để maintain honor passive
- **Train troops**: cao — stock T4+ cho KvK
- **Heal**: medium (ít troop loss hơn KvK)
- **Build + Research**: cao — peacetime = thời gian upgrade city không phí speedup

Farm Mode tối ưu RSS/ngày. Mục tiêu: vào KvK tiếp theo với kho rss đầy + T4/T5 đủ.

### Mode 3: Build Mode (City Hall Rush — new server hoặc city push)

Priority stack:

- **Research**: cao nhất — tech tree unlock troop type mới, critical cho T4/T5
- **Build**: cao — City Hall level quyết định tất cả unlock khác
- **Train**: medium (chỉ T1/T2 để giữ hospital hoạt động)
- **Resource tile**: medium — cần rss cho build
- **Barb farm**: thấp — AP đang cần cho barb nhưng ít hơn priority build

Build Mode dành cho giai đoạn city rush: City Hall 16 → 21, hoặc sprint lên T5.

## V2 Auto-Switch: không cần cài thủ công mỗi KvK

V2 có **Phase Detection Engine**:

- Đọc in-game calendar và kingdom event
- Detect khi KvK bắt đầu → tự switch sang Combat Mode
- Detect khi KvK kết thúc → tự switch sang Farm Mode
- Detect khi mày set manual Build Rush → switch sang Build Mode

Mày không cần nhớ switch mỗi season. Bot tự adapt.

Ngoại lệ cần switch thủ công:
- Khi kingdom mày bước vào KvK phase 3 (alter capture) — cần intensive combat, switch manual sang "Combat High Intensity"
- Khi mày muốn City Hall rush khẩn cấp — manual trigger Build Mode priority

## Priority tuning cho từng commander pair

Setup không chỉ là mode — còn là commander timing:

**YSG + Cao Pi pair (archer, damage high)**:
- Combat Mode: barb chain với Combo AOE, trigger mỗi 45-60 giây
- Farm Mode: tile farm thay vì barb (YSG tốt hơn ở tile vì archer troop tổn thất ít)

**Lohar + Sun Tzu (peacekeeping specialist)**:
- Combat Mode: barb chain intensive, heal cost thấp nhờ Lohar passive heal
- Farm Mode: barb farm medium intensity, rss tile secondary

**Theodora + Saladin (F2P option)**:
- Combat Mode: AOE barb với Combo, nhưng heal cost cao hơn YSG → cần heal priority cao hơn
- Farm Mode: tile farm ưu tiên để bù heal cost

## FAQ

### Bot tự detect được commander pair của tôi không?

Có. V2 scan roster commander khi setup lần đầu và tự assign strategy phù hợp với pair mày đang dùng. Không cần cài thủ công từng commander.

### Trong KvK tôi có thể giữ Build Mode không?

Kỹ thuật được nhưng không khuyến nghị. Build trong KvK không cho honor, phí AP. Nếu mày đang City Hall rush và KvK chỉ 3-4 ngày, ưu tiên Build là OK. Nếu KvK 14 ngày full, switch sang Combat Mode.

### Tôi có thể tạo custom priority stack không?

V2 có preset 3 mode ở trên + 1 custom slot. Custom slot cho phép mày kéo thả thứ tự priority. Tối đa 6 tasks trong stack, mỗi task có weight từ 1-10.

### V1 có config priority không?

V1 có preset cơ bản (Farm / Build) nhưng không có auto-switch và không có custom stack. V2 là gói đầu tiên có Phase Detection Engine.

## Bắt đầu ngay

**V2 Cao Cấp 900.000đ/tháng** = Priority Config + Phase Detection tự switch Combat/Farm/Build:
- 3 preset mode: Combat, Farm, Build
- Auto-switch khi KvK bắt đầu/kết thúc
- Custom priority stack 1 slot (6 tasks, weight 1-10)

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Bot Setup Ngày Đầu RoK 2026 — Từ Đăng Ký Đến Bot Chạy Trong 24h](/blog/bot-how-to-setup-first-day-rok-2026)
- [Tại Sao Mid-Tier Players Chọn RokdBot V2 Combo 2026](/blog/why-mid-tier-players-choose-rokdbot-v2-combo-2026)
- [RokdBot V3 vs V2 vs V1 — ROI Comparison 2026](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026)
  `,
};
