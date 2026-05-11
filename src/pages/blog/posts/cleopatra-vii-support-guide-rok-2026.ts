import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "cleopatra-vii-support-guide-rok-2026",
  title: "Cleopatra VII Support Guide RoK 2026 — Healing Buff Pair Defense",
  description: "Cleopatra VII RoK 2026: cơ chế healing aura + buff attack stack, best support pair cho defense và barb farm, talent tree F2P, bot V1 auto-defend 24/7 với healer secondary.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Alliance của mày đang chết trong flag defense vì không có healer — Cleopatra sửa điều đó

Scenario quen thuộc: Enemy rally đập vào flag. Garrison commander của mày xuất sắc — nhưng troops giảm 30% sau rally 2. Rally 3 đến, không còn đủ quân. Flag mất. Không phải vì commander yếu — mà vì **không có healing trong garrison**.

Cleopatra VII là **support healer duy nhất** có thể vừa tăng attack vừa heal troops trong cùng 1 skill cycle. Tier S support 2026, free từ silver chest.

## Cơ chế Cleopatra VII

### Skill Active — "Queen's Generosity"
- Heal **600-900 HP factor** cho toàn garrison
- Buff **Attack +15%** cho tất cả friendly troops trong 5 giây
- Rage cost: 1.000 — cast liên tục khi garrison đang combat

### Passive Key Stats (max expertise)
- Healing Effect: **+30%** — nhân vào tất cả heal source trong march/garrison
- Troop Defense: **+20%** khi garrisoning flag
- Rage Regen: **+10%** — giúp lead commander cast skill nhanh hơn

### Talent Tree Tối Ưu Support
Nhánh **Support** ưu tiên:
- Support: Rejuvenate (+8% healing) + Lend a Hand (+5% more from all heal)
- Không cần combat talents — Cleopatra vai trò hoàn toàn support
- Optional: 3 điểm vào nhánh Defense cho +2% def khi garrison

## Vấn đề khi defend thủ công với Cleopatra

Cleopatra tốt nhất khi **luôn ở trong garrison** — không ra ngoài march. Thủ công có vấn đề:

- **Không ai reinforce**: khi enemy rally tới, mày đang ngủ → garrison thiếu Cleopatra secondary → heal aura không kích hoạt
- **Swap timing**: đôi lúc muốn dùng Cleopatra barb farm ban ngày, reinforce lại ban đêm → thường quên swap → miss heal window defense quan trọng nhất
- **Stack không đủ**: Heal hiệu quả nhất khi có thêm 1-2 player reinforce với healing commander — thủ công khó coordinate

## Bot V1 làm gì khác

**V1 Cơ Bản 750.000đ/tháng** với Cleopatra:

- **Auto-reinforce flag**: khi bot detect enemy march approaching, Cleopatra secondary tự reinforce vào garrison trước khi rally hit
- **Heal sync**: V1 monitor HP% của garrison — khi xuống 70%, Cleopatra active skill trigger ngay để giữ troops alive qua rally 2, 3
- **Farm + defend hybrid**: ban ngày Cleopatra secondary barb farm nhẹ, detect flag threat → auto switch về garrison

| Garrison với | Rally 1 Survive | Rally 2 Survive | Rally 3 Survive |
|---|---|---|---|
| Không có healer | 100% | 65% | 30% |
| Cleopatra secondary V1 | 100% | 85% | 55% |

> 🤖 V1 auto-reinforce Cleopatra vào garrison trước mỗi rally — heal aura không bao giờ miss. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Best pair với Cleopatra

- **Charles Martel (lead) + Cleopatra (secondary)**: infantry defense + heal → best garrison combo F2P
- **Constantine (lead) + Cleopatra (secondary)**: peacekeeping tank + heal → flag defense tốt nhất tier free
- **Tomyris (lead) + Cleopatra (secondary)**: Anti-Skill + heal → cavalry defense với troops sống lâu hơn

Xem thêm: [Cavalry Tier List RoK 2026 →](/blog/commander-tier-list-cavalry-rok-2026) và [Best Infantry Commanders KvK →](/blog/best-infantry-commanders-kvk-rok-2026).

## So sánh support healer tier

| Commander | Heal/cast | Attack Buff | F2P | Defense Tier |
|---|---|---|---|---|
| **Cleopatra VII** | **600-900** | **+15%** | **✅** | **S** |
| Joan of Arc | 400-600 | +20% all | ✅ | S |
| Hannibal Barca | Không heal | +25% attack | Không | A+ (DPS) |
| Sun Tzu | 300-500 | +10% | ✅ | A |

Cleopatra là best pure healer. Joan của Arc tốt hơn cho all-round. Xem: [Joan of Arc Guide →](/blog/joan-of-arc-support-guide-rok-2026).

## FAQ

### Cleopatra có cần expertise để heal hiệu quả không?
5 star (mở passive Healing +30%) là mức tối thiểu. Expertise tăng thêm ~10% heal — nice to have nhưng không bắt buộc cho F2P.

### Cleopatra secondary có heal được trong march barb không?
Có — heal effect hoạt động cả open field march. Nhưng heal per cast thấp hơn garrison (không có passive defense bonus). Tốt nhất dùng cho garrison defense.

### V1 có tự detect khi cần reinforce không hay phải manual?
V1 tự detect march enemy trong radius → auto reinforce. Không cần mày online hay manually trigger.

## Bắt đầu ngay

**V1 Cơ Bản 750.000đ/tháng** = defense support hoàn chỉnh:
- Auto-reinforce Cleopatra vào garrison khi threat detect
- Heal sync với garrison HP — giữ troops alive qua 3+ rally
- Hybrid farm + defend — không bỏ lỡ cả 2

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Joan of Arc Support Guide RoK 2026 — Universal F2P](/blog/joan-of-arc-support-guide-rok-2026)
- [Best Infantry Commanders KvK RoK 2026](/blog/best-infantry-commanders-kvk-rok-2026)
- [Tier List Best Commanders Each Bot Tier](/blog/tier-list-best-commanders-each-bot-tier-rok-2026)
  `,
};
