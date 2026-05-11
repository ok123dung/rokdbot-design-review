import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "cao-pi-guide-rok-2026",
  title: "Cao Pi Cavalry Damage Guide RoK 2026 — Rally Secondary Best Cho KvK",
  description: "Cao Pi là cavalry secondary tốt nhất KvK 2026 — skill damage +25% stack với mọi rally lead. Guide talent tree, pair với Mehmed/Attila, bot V3 rotation và tại sao Cao Pi là must-have cho bất kỳ rally account nào.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Phép toán khiến mọi rally lead phải chú ý: Cao Pi secondary = +25% damage MIỄN PHÍ

Bạn đang chạy Mehmed II rally lead. Mehmed passive: Rally Attack +30%. Bạn dùng Alexander secondary: +5% skill damage. Nếu bạn swap sang Cao Pi secondary thay Alexander: **+25% skill damage** — tăng 400% so với Alexander bonus. Chi phí swap: 0 đồng. Kết quả: rally damage tăng thực tế 18-22% trên mỗi hit. Đây là lý do top KvK players coi Cao Pi secondary là **mandatory**, không phải optional.

## Cơ chế Cao Pi

### Skill Active — "Imperial Might"
- Gây **900-1.400 damage factor** vào target (single target nhưng high factor)
- Debuff: Enemy Defense -15% trong 4 giây sau hit
- Buff: Friendly troops Attack +20% trong 3 giây

### Passive Key Stats (max expertise)
- Cavalry Attack: **+30%**
- Skill Damage: **+25%** — cao nhất trong cavalry secondary meta
- Counter Attack Damage: **+20%** khi defending (bonus trong garrison)

### Talent Tree Summary
Cao Pi secondary không cần talent tree đầy đủ — passive tự hoạt động:
- Nhánh **Cavalry**: Charge + Armor Destroyer (giảm enemy def thêm 3%)
- Nhánh **Support**: Rejuvenate (rage regen +5% — giúp lead skill cycle nhanh hơn)
- Không cần Peacekeeping talents vì Cao Pi secondary không dùng active skill peacekeeping

## Vấn đề khi pair thủ công

Pair management thủ công với Cao Pi có 2 vấn đề:

- **Talent tree conflict**: Nếu bạn dùng Cao Pi cả lead lẫn secondary trong các march khác nhau, phải build 2 preset talent tree — thủ công dễ dùng nhầm preset, mất bonus
- **Swap timing**: KvK có thể cần swap Cao Pi lead/secondary tùy tình huống (barb farm vs rally) — thủ công chậm và hay quên

Bot V3 xử lý swap tự động, đúng context, không cần player can thiệp.

## Bot V3 làm gì khác

**V3 Siêu Cấp 1.200.000đ/tháng** với Cao Pi secondary:

- **Context-aware pairing**: khi đạo đang rally fort, V3 auto-pair Cao Pi secondary với Mehmed lead. Khi đạo barb farm, swap sang YSG + Cao Pi pair (khác use case)
- **Skill cycle sync**: V3 monitor rage meter của cả lead lẫn secondary — trigger Cao Pi debuff (-15% def) đúng trước Mehmed active skill để stack damage window
- **Rotation AI**: khi Cao Pi trong healing, V3 tự swap sang Attila secondary không miss rally window. Chi tiết: [AI Commander Rotation V3 →](/blog/ai-commander-rotation-v3-rok)

| Secondary Choice | Skill Damage Bonus | Enemy Def Debuff | Meta |
|---|---|---|---|
| **Cao Pi** | **+25%** | **-15%** | **S+ (2026)** |
| Attila | +10% | -10% (troop) | S |
| Guan Yu | +15% | Không | A+ |
| Alexander | +5% | Không | A |

> 🤖 V3 tự sync Cao Pi debuff + Mehmed skill window — damage tối đa mỗi rally. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Pet cho Cao Pi secondary

Cao Pi secondary không trực tiếp benefit từ pet (pet gắn với lead commander). Tuy nhiên:

- **Iron Wolf** (gắn với Mehmed lead): Rally Attack +12% — stack tốt nhất với Cao Pi secondary debuff -15%
- **Stone Bear** phụ: nếu chạy Cao Pi làm garrison secondary, Stone Bear defense bonus hữu ích

## So sánh với cavalry lead khác

| Build | Lead | Secondary | Rally Kill Index |
|---|---|---|---|
| **Meta 2026** | **Mehmed II** | **Cao Pi** | **100 (baseline)** |
| Alt 1 | Attila | Cao Pi | 85 |
| Alt 2 | Mehmed II | Guan Yu | 80 |
| Alt 3 | Alexander | Cao Pi | 70 |
| F2P | Julius Caesar | Cao Pi | 55 |

Cao Pi secondary consistent S+ với mọi cavalry lead. Xem thêm: [Cao Pi vs YSG Comparison →](/blog/cao-pi-vs-yi-seong-gye-comparison-rok-2026) và [Cavalry Tier List →](/blog/commander-tier-list-cavalry-rok-2026).

## FAQ

### Cao Pi cần star mấy để secondary có ích?
5 star (mở passive Skill Damage +25%). Expertise không cần cho secondary role — tiết kiệm sculptures cho lead.

### Cao Pi có dùng được barb farm không?
Có nhưng không optimal — Cao Pi không có peacekeeping passive. Pair Lohar lead + Cao Pi secondary cho barb farm tạm được, nhưng YSG + Cao Pi tốt hơn. [Best Free Commanders →](/blog/best-free-commanders-rok-2026-no-recruit).

### V3 có tự build talent tree Cao Pi không?
V3 đọc talent tree hiện tại của bạn và optimize rotation theo đó. Bot không tự reset talent tree — bạn cần set preset đúng một lần theo hướng dẫn onboarding.

## Bắt đầu ngay

**V3 Siêu Cấp 1.200.000đ/tháng** = Mehmed + Cao Pi meta hoàn chỉnh:
- 2 đạo chain: 1 đạo Mehmed+Cao Pi rally, 1 đạo barb farm
- Auto skill sync, auto heal, auto rally window detection
- KvK 24/7 không miss window nào

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Mehmed II Rally Lead Guide RoK 2026](/blog/mehmed-ii-guide-rok-2026)
- [KvK Rally Lead Commander Rotation](/blog/kvk-rally-lead-commander-rotation-rok-2026)
- [Cavalry Commander Tier List RoK 2026](/blog/commander-tier-list-cavalry-rok-2026)
- [Rune System Optimization — Equip rune cho rally commander](/blog/rune-system-optimization-rok-2026)
  `,
};
