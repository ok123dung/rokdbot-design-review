import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "seondeok-archer-guide-rok-2026",
  title: "Seondeok Archer Guide RoK 2026 — F2P Anti-Cavalry Counter",
  description: "Seondeok RoK 2026: cơ chế anti-cavalry passive, skill debuff defense, archer peacekeeping F2P build, và bot V1 counter cavalry 24/7 — tốt nhất tier free cho archer account chống cavalry.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Cavalry account của enemy cứ xóa sổ troops mày? Seondeok là câu trả lời F2P

KvK open field. Enemy march cavalry S+ tới. Mày có infantry garrison — defense kha khá, nhưng cavalry counter-bonus +25% damage vào infantry quá mạnh. Kết quả: 80k troops mất trong 20 phút.

Giải pháp không phải build thêm infantry. Giải pháp là **counter cavalry bằng archer** — và Seondeok là archer F2P có **anti-cavalry passive tốt nhất tier free** trong RoK 2026.

## Cơ chế Seondeok

### Skill Active — "The Great Queen"
- Gây **900-1.200 damage factor** — trực tiếp vào target
- Debuff: **Enemy Defense -15%** trong 4 giây (áp dụng với mọi troop type)
- Đặc biệt: damage bonus **+30% thêm khi target là Cavalry** — passive anti-cavalry mechanic

### Passive Key Stats (max expertise)
- Archer Attack: **+30%**
- Damage vs Cavalry: **+25%** — passive, luôn active
- Skill Damage Taken Reduction: **-10%** khi garrisoning

### Talent Tree F2P Anti-Cavalry
Nhánh **Archer** → **Peacekeeping**:
- Archer: Archery Mastery + Arrows of Iron (+5% damage vs all) → **Bull's Eye** (+10% damage vs cavalry hidden unlock)
- Peacekeeping: Killing Machine (AP cost barb)
- Không cần nhánh Defense — Seondeok DPS role, không tank

## Vấn đề khi counter cavalry thủ công

Seondeok hiệu quả nhất trong **preemptive positioning** — phải đặt march của mày ở vị trí chặn cavalry route trước khi họ di chuyển. Thủ công:

- Enemy rally cavalry đến lúc 3am → mày đang ngủ → không có Seondeok prepositioned → cavalry qua mà không bị counter
- Phải watch mini-map liên tục để detect cavalry approach
- Timing phản ứng <5 phút để march Seondeok ra intercept position

95% players miss cavalry intercept window vì không online. Bot V1 luôn online.

## Bot V1 làm gì khác

**V1 Cơ Bản 750.000đ/tháng** với Seondeok:

- **Cavalry detection**: V1 scan radius 10 tiles liên tục, detect enemy cavalry march approach
- **Auto-intercept**: khi cavalry detected, Seondeok march tự position vào intercept point tối ưu
- **Peacekeeping hybrid**: khi không có cavalry threat, Seondeok tự farm barb nhẹ (+25% vs barb archer nhờ Kill Machine)
- **24/7 coverage**: không miss window 3am — đây là giờ peak cavalry attack của nhiều enemy kingdom

| Scenario | Thủ công | V1 Bot |
|---|---|---|
| Cavalry intercept thành công | 30% (miss ban đêm) | 85%+ |
| Damage vs cavalry/encounter | 40% potential | 90%+ potential |
| Barb farm khi idle | Không | Auto |

> 🤖 V1 Seondeok tự intercept cavalry 24/7 — không miss window 3am. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Pair tốt nhất với Seondeok

- **Seondeok (lead) + Yi Seong-Gye (secondary)**: anti-cavalry + AOE archer = best archer open field. Xem: [Yi Seong-Gye Guide →](/blog/yi-seong-gye-guide-rok-2026)
- **Seondeok (lead) + Tomyris (secondary)**: anti-cavalry + anti-skill passive — cavalry bị double counter
- **Seondeok (secondary) + Cao Pi (lead)**: cavalry với archer secondary không phổ biến — nhưng Cao Pi skill damage buff stack tốt với Seondeok anti-cav damage. Xem: [Cao Pi Guide →](/blog/cao-pi-guide-rok-2026)

## Archer anti-cavalry tier

| Commander | vs Cavalry | AOE | F2P | Tier |
|---|---|---|---|---|
| **Seondeok** | **+25% passive + 30% skill** | Không | **✅** | **S (F2P)** |
| Yi Seong-Gye | Không specific | ✅ AOE | Không (gem) | S+ |
| Ramesses II | +15% | ✅ | Không (whale) | S+ |
| Tomoe Gozen | +20% | Không | Không | A+ |

Seondeok là best F2P anti-cavalry archer. Tier S ở F2P bracket. Xem: [Archer Tier List RoK 2026 →](/blog/archer-tier-list-rok-2026).

## FAQ

### Seondeok có cần pair archer với archer không?
Không bắt buộc. March Seondeok có thể mix archer + cavalry nhẹ. Nhưng để maximize anti-cavalry bonus: 100% archer troops.

### Seondeok hay Yi Seong-Gye cho F2P archer?
Seondeok: anti-cavalry specialist, free. Yi Seong-Gye: AOE peacekeeping + archer all-round, cần gem. Nếu F2P: Seondeok trước. Xem: [Yi Seong-Gye Guide →](/blog/yi-seong-gye-guide-rok-2026).

### V1 có thể dùng Seondeok cả barb farm lẫn counter cavalry không?
Có — V1 chạy hai mode: peacekeeping idle khi không có threat, auto-intercept khi cavalry detected.

## Bắt đầu ngay

**V1 Cơ Bản 750.000đ/tháng** = F2P anti-cavalry không tốn gem:
- Seondeok auto-intercept cavalry 24/7
- Peacekeeping barb farm khi không có threat
- Daily quest + gem mine tự động

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Yi Seong-Gye Guide RoK 2026 — Archer AOE Peacekeeping Meta](/blog/yi-seong-gye-guide-rok-2026)
- [Archer Commander Tier List RoK 2026](/blog/archer-tier-list-rok-2026)
- [Tier List Best Commanders Each Bot Tier](/blog/tier-list-best-commanders-each-bot-tier-rok-2026)
  `,
};
