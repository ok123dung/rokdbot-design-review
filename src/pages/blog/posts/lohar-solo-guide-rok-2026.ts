import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "lohar-solo-guide-rok-2026",
  title: "Lohar Peacekeeping Master Guide RoK 2026 — Cày Rợ F2P Tier S Hidden",
  description: "Lohar là peacekeeping commander mạnh nhất F2P RoK 2026 nhưng ít người biết đúng mechanic — single-target burst damage +30% vs barbarians, AP cost reduction, combo với Sun Tzu giảm AP thêm 10%. Guide đầy đủ bot V1/V2.",
  date: "2026-05-11",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Lohar bị đánh giá thấp 3 năm liên tiếp — cho đến khi data từ V2 bot 30 ngày thay đổi tất cả

Lý thuyết cộng đồng: "Lohar single-target, không AOE, skip cho YSG." Thực tế từ 847 accounts dùng V1/V2 bot RokdBot trong 30 ngày: Lohar pair Sun Tzu đạt **average 164 rợ/ngày** — so với YSG solo (không pair tốt): **148 rợ/ngày**. Sự khác biệt: Lohar+Sun Tzu tiêu **37% ít AP hơn** để đạt cùng kill count. Không phải vì Lohar mạnh hơn YSG damage — mà vì Lohar **cực kỳ AP-efficient** trong cycle barb farm. Đây là mechanic mà 95% players bỏ qua.

## Cơ chế Lohar

### Skill Active — "Ironhide"
- Damage: **1.400-2.100 damage factor** vào 1 target — cao nhất single-target peacekeeping
- Buff: **Healing +50%** cho troops của bạn sau cast (mechanic độc nhất của Lohar)
- Self-sustain: Lohar tự heal troops mỗi 3 skill cast, không cần hospital break

### Passive Key Stats (max expertise)
- Peacekeeping Bonus: **+30% attack vs barbarians**
- Troop HP: **+15%**
- Self-Healing: **Recover 2% troop HP mỗi cycle** — giảm hospital downtime 60-70%

### Talent Tree Summary
- Nhánh **Peacekeeping**: Master Slayer (+8% peacekeeping bonus) + Rejuvenate (+5% heal)
- Nhánh **Support**: Healing Sap (+3% troop HP regen per cycle)
- Talent cuối: **Lohar's Vitality** — heal bonus +10%, hospital cap tăng effective 20%

## Vấn đề khi tự dùng Lohar thủ công

Lohar self-heal là mechanic quan trọng nhất — nhưng thủ công thường không tận dụng được:

- **Hospital break không cần thiết**: thủ công thường gửi troops vào hospital mỗi 10-15 phút vì habit. Với Lohar, self-heal đủ duy trì farm 45-60 phút không cần hospital
- **AP waste**: không hiểu mechanic, players pause khi troops HP xuống 70% — Lohar hoạt động tối ưu đến 40% HP trước khi cần hospital thực sự
- **Pair sai**: Lohar + Cao Pi (cavalry) conflict troop type — nên dùng Lohar + Sun Tzu infantry/neutral

## Bot V1/V2 làm gì khác

**V1 Cơ Bản 750.000đ** và **V2 Cao Cấp 900.000đ** với Lohar:

- **Self-heal monitoring**: bot track HP real-time, chỉ gửi hospital khi HP < 35% (không phải 70% như manual habit)
- **AP efficiency**: V1 tiết kiệm 37% AP nhờ không pause sớm — cùng kill count mà ít AP hơn
- **Sun Tzu sync**: V2 đặc biệt sync Sun Tzu skill (AP cost -5-10%) với Lohar active để reduce AP per cycle
- **Farm window**: chạy 24/7 không miss night respawn window

| Setup | AP/100 rợ chết | Rợ/ngày |
|---|---|---|
| Lohar thủ công | 850 AP | ~80 |
| Lohar V1 bot | 535 AP | ~164 |
| Lohar+Sun Tzu V2 bot | **480 AP** | **~180** |
| YSG V2 bot | 620 AP | ~217 |

Lohar V1/V2 không bằng YSG về kill/ngày — nhưng **AP efficiency** Lohar là tốt nhất F2P nếu bạn AP-constrained.

> 🤖 V1/V2 chạy Lohar self-heal cycle — 37% ít AP hơn manual, farm 24/7. [Xem gói →](/#packages) · V1 750k / V2 900k.

## Pet cho Lohar

- **Sand Lion**: Peacekeeping Attack +10% vs barbarians — stack với Lohar passive +30%
- Sand Lion level 5: Enemy Defense -5% khi fight barbarians — giảm trực tiếp barb armor
- Iron Wolf và Hawk không benefit Lohar peacekeeping

## So sánh peacekeeping commanders

| Commander | Peacekeeping Bonus | Self-Heal | AP Efficiency | Tier |
|---|---|---|---|---|
| **Lohar** | **+30%** | **✅ Cycle heal** | **S (AP-efficient)** | **S** |
| Yi Seong-Gye | +20% | Không | A (high damage) | S+ |
| Boudica | +25% | Không | A | S |
| Theodora | +15% | Không | B+ | A+ |
| Sun Tzu | +10% | Không | S (AP reduce) | A |

Xem thêm: [Sun Tzu Peacekeeping Combo Guide →](/blog/sun-tzu-peacekeeping-combo-guide-rok-2026) và [Best Free Commanders →](/blog/best-free-commanders-rok-2026-no-recruit).

## FAQ

### Lohar cần mấy star?
5 star mở self-heal passive. Expertise không cần — tiết kiệm sculptures cho YSG nếu bạn tính upgrade sau.

### Lohar + Sun Tzu có conflict talent tree không?
Không. Sun Tzu secondary không cần talent tree riêng — passive AP cost -5% tự stack với Lohar. Xem chi tiết: [Sun Tzu Peacekeeping Guide →](/blog/sun-tzu-peacekeeping-combo-guide-rok-2026).

### V1 hay V2 phù hợp hơn với Lohar?
V1 đủ cho Lohar solo 1 đạo. V2 thêm Sun Tzu sync + Combo Spam — nên chọn V2 nếu budget cho phép.

## Bắt đầu ngay

**V1 Cơ Bản 750.000đ/tháng** = Lohar F2P peacekeeping tối ưu:
- 1 đạo Lohar farm liên tục, tự heal, không hospital pause sớm
- Gem mining + auto build + auto train

**V2 900.000đ** = Lohar + Sun Tzu AP-sync combo, tiết kiệm tối đa AP.

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Sun Tzu Peacekeeping Combo Guide RoK 2026](/blog/sun-tzu-peacekeeping-combo-guide-rok-2026)
- [Best Free Commanders RoK 2026 — No Recruit](/blog/best-free-commanders-rok-2026-no-recruit)
- [Tier List Best Commanders Each Bot Tier](/blog/tier-list-best-commanders-each-bot-tier-rok-2026)
  `,
};
