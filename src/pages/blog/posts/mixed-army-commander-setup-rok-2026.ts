import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "mixed-army-commander-setup-rok-2026",
  title: "Mixed Army Commander Setup RoK 2026 — Khi Nào Mix Cavalry+Archer+Infantry Ăn Tier S+",
  description: "Mixed army trong RoK 2026: khi nào mix thực sự hiệu quả, khi nào là sai lầm tốn quân. AI rotation bot V3 tự động chuyển setup theo phase KvK để maximize damage.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## "Mix army là sai" — lời khuyên đúng 70% nhưng sai 30% lúc quan trọng nhất

Lời khuyên phổ biến nhất RoK: "Đừng mix army, luôn pure troop type." Đúng — trong 70% situation. Nhưng 30% còn lại là lúc KvK quyết định thắng thua.

KvK Season 8, một kingdom rank 3 đánh rank 1 bằng pure cavalry. Kingdom rank 1 dùng mixed garrison: 40% infantry tank front, 30% archer range, 30% cavalry flank. Rank 3 bị chặn hoàn toàn trong 8 phút mà không crack được flag.

Mixed army không phải sai — mixed army **vào đúng lúc** mới là skill.

## Counter triangle và khi nào mix thắng

RoK có counter triangle:
- Cavalry beats infantry (+15% damage)
- Infantry beats archer (+15% damage)
- Archer beats cavalry (+15% damage)

**Pure army**: maximize counter bonus khi biết đối phương dùng gì.

**Mixed army**: neutralize counter triangle — không ai có +15% advantage cả. Tổng damage giảm 8-10% nhưng **không bị counter wipe**.

### 3 situation nên mix:

**1. Không biết đối phương dùng troop type nào**
Open field KvK phase 1, thông tin chưa đủ. Mixed 33/33/33 = safe play.

**2. Defend flag vs unknown attacker**
Garrison mixed: infantry tank absorb first wave, archer counter-attack cavalry flanks, cavalry kicker khi attacker depleted.

**3. Attrition war phase 3 KvK**
Pure cavalry burn AP quá nhanh. Mixed army → infantry sustain + archer range → same DPS với 30% ít AP hơn.

> 🤖 Bot V3 AI Rotation tự nhận diện phase KvK → switch commander setup từ pure cavalry sang mixed auto. Không cần mày làm gì. [Xem V3 →](/#packages) · 1.200.000đ/tháng.

## Commander setup cho từng mixed ratio

### 40/30/30 (Tank heavy)
**Situation**: Defend flag, chặn cavalry wave lớn

| Slot | Commander | Role |
|---|---|---|
| Primary | Charles Martel | Infantry tank, shield passive |
| Secondary | Yi Seong-Gye | Archer AOE range counter-cavalry |
| Reserve | Cao Pi | Cavalry kicker khi attacker weakened |

Bot V3 rotate Martel → YSG → Cao Pi theo damage phase tự động.

### 33/33/33 (Balanced)
**Situation**: Open field phase 1, enemy unknown

| Slot | Commander | Role |
|---|---|---|
| Primary | Mehmed II | Cavalry burst + stack passive |
| Secondary | Richard I | Infantry sustain heal |
| Reserve | Ramesses II | Archer debuff |

### 20/50/30 (Archer heavy)
**Situation**: Counter pure cavalry enemy

| Slot | Commander | Role |
|---|---|---|
| Primary | Yi Seong-Gye + Hawk | Archer AOE max range |
| Secondary | Trajan | Infantry front tank |
| Reserve | Saladin | Cavalry counter-attack |

## Bot V3 AI Rotation: Lý do mixed army chỉ hoạt động với automation

Vấn đề lớn nhất của mixed army manual: **commander rotation đòi hỏi real-time decision making**.

- Phải nhìn troop count mỗi 30 giây
- Switch primary commander đúng lúc infantry về 40% → archer take over
- Không miss hospital heal timing

Làm manual trong 14 ngày KvK × 24h = không thể. **Bot V3 giải quyết toàn bộ**:

- Monitor troop count real-time
- Auto-switch commander primary theo preset mixed ratio
- Hospital heal cycle tự động — không interrupt chain
- Rage management: biết commander nào cần rage trước khi cast

> 🤖 V3 2 đạo AI rotation: 1 đạo pure barb farm + 1 đạo mixed defend flag tự động. [Kích hoạt V3 →](/#packages).

## Sai lầm phổ biến khi mix army

**Sai lầm #1: Mix 3 loại nhưng không đủ số lượng mỗi loại**
Dưới 15% mỗi troop type = counter triangle không activate → bỏ tiền xây troop mà không có bonus.

**Sai lầm #2: Mix commander nhưng skill synergy conflict**
Martel passive shield buff infantry — nếu 70% army là cavalry thì buff waste 70% value.

**Sai lầm #3: Mix trong barb farm (không nên)**
Barb farm cần pure peacekeeping setup. Mix làm mất peacekeeping bonus → giảm honor/AP. **Bot V3 biết điều này**: auto pure-army khi farm rợ, switch mixed khi KvK open field.

## ROI: Mixed vs Pure trong KvK

| Setup | Damage vs Unknown | AP Efficiency | Survive Time |
|---|---|---|---|
| Pure cavalry | +15% vs infantry, -15% vs archer | High | Low |
| Pure infantry | +15% vs archer, -15% vs cavalry | Medium | High |
| Mixed 40/30/30 | Neutral (0% counter) | Medium | High |
| Mixed 33/33/33 | Neutral | Medium | Medium |

**Verdict**: Mixed không maximize single situation nhưng minimize catastrophic loss. Dùng khi uncertainty cao — bot V3 quyết định tự động.

## Đọc tiếp:
- [AI Commander Rotation V3 — Skip 6 tháng farm expertise](/blog/ai-commander-rotation-v3-rok)
- [Open Field Rally Commander Pairs RoK 2026](/blog/open-field-rally-commander-pairs-rok-2026)
- [Multi Account Sync RokdBot V3](/blog/multi-account-sync-rokdbot-v3)
  `,
};
