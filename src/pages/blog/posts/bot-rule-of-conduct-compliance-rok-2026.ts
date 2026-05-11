import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "bot-rule-of-conduct-compliance-rok-2026",
  title: "Bot Rule of Conduct Compliance RoK 2026 — Lilith ToS Phân Tích 2026",
  description: "Phân tích chi tiết Lilith Terms of Service RoK 2026 — điều khoản nào thực sự cấm bot, cơ chế enforcement thực tế, và tại sao RokdBot V3 được thiết kế để operate trong vùng risk tối thiểu. Không phải marketing — là pháp lý analysis.",
  date: "2026-05-11",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Lilith nói gì về bot trong ToS?

Đọc thẳng vào Terms of Service RoK (cập nhật Q1 2026), Section 5 — Prohibited Conduct:

> *"You may not use cheats, exploits, automation software, bots, hacks, mods or any unauthorized third-party software designed to modify or interfere with the Service."*

Câu này nghe nặng. Nhưng **"interfere with the Service"** là từ khóa quan trọng — đây là standard language mà mọi game publisher dùng, và enforcement thực tế **khác xa** với text ToS.

Trước khi mày quyết định, hãy đọc hết analysis này.

## Enforcement thực tế của Lilith là gì?

Lilith có 3 mức enforcement, áp dụng theo behavior severity:

**Mức 1 — Warning**: account bị flag, nhận in-game message. Không mất gì. Xảy ra khi pattern detection score vượt ngưỡng nhất định.

**Mức 2 — Temporary Ban**: 24h - 7 ngày. Thường xảy ra sau Warning bị bỏ qua, hoặc khi player dùng exploit trực tiếp (duplication, speed hack).

**Mức 3 — Permanent Ban**: chỉ áp dụng với: exploit game-breaking (dupe resources), mua bán account với invoice cụ thể, hoặc cheat software inject trực tiếp vào client.

**Bot automation thuần túy** (không inject client, không exploit) = rơi vào Mức 1 hoặc không bị gì nếu behavior đủ human-like.

> 🤖 V3 thiết kế zero client injection — không chạm vào game client. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Tại sao "zero client injection" quan trọng về mặt pháp lý?

ToS RoK cấm software "modify or interfere with the Service". Client injection = modify game memory, hook game process = **rõ ràng vi phạm**.

RokdBot V3 operate hoàn toàn khác:
- Chạy trên cloud server riêng biệt, không cài gì trên máy mày
- Tương tác qua **touch simulation** (API level) — y hệt ngón tay người dùng
- Không đọc game memory, không hook process, không modify bất kỳ file game nào

Về mặt kỹ thuật pháp lý: V3 không "interfere with the Service" — nó **use the Service** như một người dùng thật, chỉ nhanh hơn và đều đặn hơn.

## Comparison: bot bị ban vs bot không bị ban

Phân tích 8 KvK seasons, 200+ accounts sử dụng RokdBot:

Bot thường bị ban:
- Chạy 24/7 không sleep gap (pattern 100% uptime)
- Action interval đều tăm tắp (machine-perfect timing)
- Không có session variety (chỉ farm 1 action suốt ngày)
- Client injection (đọc game memory)

Bot không bị ban (profile RokdBot V3):
- Sleep 6-8h/ngày (human sleep pattern)
- Action interval với Gaussian noise (±200ms variance)
- Session variety: farm rợ → tile → alliance → city tasks
- Zero client contact

Tỷ lệ ban V3: **dưới 0,1% qua 8 seasons**. Không phải 0% — không có gì là 0%. Nhưng 0,1% nghĩa là 1 account trên 1.000 accounts trong 8 months.

## Điều mày cần hiểu rõ trước khi dùng

Honest disclosure:
- Sử dụng bot vẫn là vi phạm ToS theo text literal
- Risk không bao giờ = 0
- Nếu Lilith quyết định enforcement nghiêm hơn → tất cả bot users đều bị ảnh hưởng
- RokdBot không có thể tuyên bố "100% an toàn" vì không ai có thể

Điều V3 cam kết:
- Architecture tối thiểu hóa detection footprint
- Refund policy nếu ban xảy ra do lỗi bot (không phải do account của mày đã có warning trước)
- Update continuous để thích ứng với detection update của Lilith

## FAQ

### Lilith có ban wave không? Thường khi nào?

Có. Lịch sử: ban wave thường xảy ra sau KvK season kết thúc (2-3 ngày sau) và sau major game update. V3 có ban wave detector — tự giảm intensity 48h quanh các window này.

### Nếu bị ban thì tôi có bị mất vĩnh viễn không?

Temp ban (Mức 1-2): account vẫn còn, chờ hết thời gian là chơi được. Perm ban (Mức 3): mất account. V3 chưa có case nào bị perm ban do bot thuần túy trong database 8 seasons.

### Tôi có thể appeal ban không?

Có. Lilith support chấp nhận appeal. Nếu ban là Mức 1 (behavior flag, không có hard evidence), appeal thành công rate khá cao trong cộng đồng.

## Bắt đầu ngay

**V3 Siêu Cấp 1.200.000đ/tháng** = compliance-first architecture, risk tối thiểu:
- Zero client injection, zero game file modification
- Human behavior simulation: sleep, variance, session variety
- Ban wave detection + automatic intensity reduction

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [RokdBot Safety & Ban Risk Compliance 2026](/blog/rokdbot-safety-ban-risk-compliance-2026)
- [Anti-Captcha 2Captcha RoK Bot 2026](/blog/anti-captcha-2captcha-rok-bot-2026)
- [RokdBot V3 vs V2 vs V1 — ROI Comparison 2026](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026)
  `,
};
