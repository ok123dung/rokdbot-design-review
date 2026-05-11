import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "sun-tzu-peacekeeping-combo-guide-rok-2026",
  title: "Sun Tzu Peacekeeping Combo Guide RoK 2026 — AP Cost -10% Pair Tối Ưu Lohar",
  description: "Sun Tzu secondary giảm AP cost 5-10% mỗi skill cast khi pair với Lohar — mechanic ít ai biết. Guide talent tree, AP math 30 ngày, bot V1 auto-optimize pair, tại sao Sun Tzu là backbone mọi F2P peacekeeping setup.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## AP là resource quý nhất RoK — và Sun Tzu là commander duy nhất có thể giảm cost nó

Mỗi combat cycle tốn AP cố định. Mỗi AP bạn tiết kiệm = thêm 1 combat cycle. Trong 1 tháng, nếu bạn tiết kiệm 5% AP mỗi cycle: tổng AP saved = **~15.000 AP** — đủ cho thêm 150-200 combat cycles. Thêm 150-200 cycles = thêm 150-200 rợ chết. Sun Tzu passive **AP Cost Reduction -5-10%** không nói nhiều khi đọc tooltip — nhưng khi nhân với 30 ngày, nó là commander bonus quan trọng nhất trong peacekeeping economy mà hầu hết F2P players bỏ qua.

## Cơ chế Sun Tzu

### Skill Active — "Art of War"
- AOE damage: **700-1.000 damage factor** trong radius **260 units** / 5 targets
- Buff: **AP Cost -5%** cho march trong 8 giây sau cast (passive từ expertise)
- Healing: Recover 2% HP sau cast — nhỏ nhưng có

### Passive Key Stats (max expertise)
- Infantry Attack: **+20%**
- Skill Damage: **+10%**
- **AP Cost Reduction: -5% baseline, -10% expertise** — unique mechanic không commander nào khác có
- Peacekeeping Bonus: **+10% vs barbarians**

### Talent Tree Summary
Sun Tzu secondary không cần full talent tree:
- Nhánh **Peacekeeping**: Killing Machine + Domination (tăng peacekeeping bonus)
- Nhánh **Support**: Rejuvenate (+5% rage regen — giúp Sun Tzu cast nhanh hơn, AP reduction active sớm hơn)
- Không cần nhánh Infantry đầy đủ nếu dùng secondary role

## AP Math 30 ngày — tại sao Sun Tzu pair đáng giá

Ví dụ Lohar + Sun Tzu secondary vs Lohar solo:

- **Lohar solo**: 1 combat cycle = 100 AP (giả định). 30 ngày × 3.000 cycles = **300.000 AP**
- **Lohar + Sun Tzu**: -10% per cycle = 90 AP/cycle. 3.000 cycles = **270.000 AP**
- **AP saved**: 30.000 AP = đủ cho thêm **300 combat cycles** = thêm ~200 rợ chết/tháng

200 rợ thêm/tháng không phải con số nhỏ — đó là 6-7 rợ/ngày thêm không tốn thêm đồng nào vào game. Chỉ cần pair đúng commander.

## Vấn đề khi tự pair Sun Tzu thủ công

- **Quên swap**: thủ công hay dùng Lohar solo vì tiện, quên pair Sun Tzu — mất AP reduction toàn session
- **Skill timing wrong**: AP reduction active sau Sun Tzu cast — nếu Sun Tzu cast không sync với Lohar cycle, có lúc Lohar cast trước khi AP reduction active, không benefit
- **Night sessions**: manual không maintain Sun Tzu pair liên tục qua đêm

## Bot V1 làm gì khác

**V1 Cơ Bản 750.000đ/tháng** với Sun Tzu + Lohar:

- **Auto-pair enforcement**: V1 luôn giữ Sun Tzu secondary với Lohar lead — không bao giờ để Lohar solo
- **Cast sequence optimization**: V1 trigger Sun Tzu cast trước Lohar cast 0,3 giây — AP reduction active khi Lohar cast xảy ra, đảm bảo benefit mỗi cycle
- **AP tracking**: V1 monitor AP spent/cycle, báo cáo AP saved vs Lohar solo baseline để user thấy ROI rõ ràng
- **30-ngày compound**: 200 rợ thêm/tháng nhờ AP saving = loyalty Honor farming advantage dài hạn

| Pair | AP/cycle | Rợ/tháng | AP Saved/tháng |
|---|---|---|---|
| Lohar solo | 100 | ~2.400 | 0 |
| **Lohar + Sun Tzu V1** | **90** | **~2.600** | **30.000 AP** |
| YSG + Cao Pi V2 | 95 | ~3.200 | 15.000 AP |
| Theodora V1 | 105 | ~2.100 | -15.000 AP |

> 🤖 V1 auto-sync Sun Tzu cast trước Lohar — AP reduction active mỗi cycle, 200 rợ thêm/tháng miễn phí. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Pet cho Sun Tzu secondary

Sun Tzu secondary không trực tiếp benefit từ pet (pet gắn với Lohar lead):

- **Sand Lion** với Lohar lead: Peacekeeping +10% stack tốt nhất khi pair Sun Tzu
- Không có pet riêng cho Sun Tzu secondary role

## So sánh AP-efficient pairs

| Pair | AP Cost/cycle | Kill Index/tháng |
|---|---|---|
| **Lohar + Sun Tzu** | **-10% (best)** | **108 (vs baseline)** |
| Lohar + Theodora | Không reduce | 100 |
| Theodora solo | +5% (no reduce) | 88 |
| YSG + Lohar | -5% (partial) | 105 |

Sun Tzu là unique AP reducer trong game — không secondary nào replicate mechanic này. Xem thêm: [Lohar Solo Guide →](/blog/lohar-solo-guide-rok-2026) và [Best Free Commanders →](/blog/best-free-commanders-rok-2026-no-recruit).

## FAQ

### Sun Tzu cần expertise để giảm AP không?
Có — AP reduction -5% base (5 star), -10% expertise. 5 star đủ để bắt đầu benefit. Expertise double effect — worth invest nếu bạn farm long-term.

### Sun Tzu lead hay secondary tốt hơn?
Secondary tốt hơn cho AP reduction focus — Sun Tzu lead cần talent tree riêng, complex hơn. Secondary đơn giản: passive AP reduce auto-stack với bất kỳ lead nào. [AI Commander Rotation V3 →](/blog/ai-commander-rotation-v3-rok) có chi tiết về multi-pair rotation.

### V1 hay V2 phù hợp với Sun Tzu pair?
V1 đủ cho Lohar+Sun Tzu. V2 thêm Combo Spam + Luring nếu bạn muốn switch sang YSG+Sun Tzu pair trong cùng account. [Tier List Best Commanders Each Bot Tier →](/blog/tier-list-best-commanders-each-bot-tier-rok-2026).

## Bắt đầu ngay

**V1 Cơ Bản 750.000đ/tháng** = Sun Tzu AP-optimization tự động:
- Auto-pair Lohar + Sun Tzu, cast sequence sync
- 200 rợ thêm/tháng từ AP savings không tốn thêm
- Gem mining + auto build + auto train bao gồm

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Lohar Solo Guide — Cày Rợ F2P Tier S Hidden](/blog/lohar-solo-guide-rok-2026)
- [Best Free Commanders RoK 2026 — No Recruit](/blog/best-free-commanders-rok-2026-no-recruit)
- [Tier List Best Commanders Each Bot Tier RoK 2026](/blog/tier-list-best-commanders-each-bot-tier-rok-2026)
  `,
};
