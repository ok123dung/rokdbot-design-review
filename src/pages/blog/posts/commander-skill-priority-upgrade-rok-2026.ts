import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "commander-skill-priority-upgrade-rok-2026",
  title: "Commander Skill Priority Upgrade RoK 2026 — Skill 5-1-1-1 vs 1-5-1-1",
  description: "Commander skill upgrade priority RoK 2026: 5-1-1-1 vs 1-5-1-1 debate, skill cost analysis, which skill to max first theo role, và bot V2 tự động claim sculpture không miss.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Bạn Đang Tốn Sculpture Vào Skill Sai

Commander mới unlock. Bạn có 20 sculpture. Bắt đầu upgrade. Skill 1 lên 5, rồi Skill 2 lên 2, Skill 3 lên 1... Dừng lại.

Đây là quyết định quan trọng nhất trong toàn bộ commander development. Upgrade sai skill = mất hàng tháng resource farming, không thể đảo lại (trừ khi dùng Universal Sculpture rất hiếm).

Framework dưới đây giải quyết câu hỏi: **Skill mấy lên trước? Tại sao?**

## Cơ Chế Skill — 4 Slot, Cost Tăng Theo Level

Mỗi commander có 4 skill. Upgrade từ level 1 đến 5. Cost sculpture:

| Từ → Đến | Sculpture cần |
|---|---|
| Lv1 → Lv2 | 10 |
| Lv2 → Lv3 | 20 |
| Lv3 → Lv4 | 50 |
| Lv4 → Lv5 | 100 |
| **Total Lv1 → Lv5** | **180 sculpture** |

4 skill full lv5 = **720 sculpture**. Một Commander Legendary sculpture từ store: ~5-10 USD equivalent. 720 sculpture = rất nhiều thời gian farm hoặc spending.

**Không thể max hết 4 skill nhanh.** Phải chọn skill nào max trước.

## 5-1-1-1 vs 1-5-1-1 — Debate Thật Sự

### 5-1-1-1 Strategy

Max Skill 1 trước (lên 5), giữ Skill 2/3/4 ở lv1.

**Khi nào dùng**:
- Skill 1 là **active skill** (cast khi rage đầy) → max = AOE damage tăng nhiều nhất
- Commander barb farming (Yi Seong-Gye, Lohar): Skill 1 là AOE chính → max trước
- Honor farming build: active skill damage là priority

**Ví dụ thực tế**:
Yi Seong-Gye Skill 1 lv5 vs lv1: damage từ 1.000 rage cast tăng **+180%** tuyến tính. Mỗi cast giết được 5-7 rợ thay vì 2-3 rợ. 1 đạo barb chain: **217 rợ/ngày vs 60-80 rợ/ngày**.

### 1-5-1-1 Strategy

Max Skill 2 trước, giữ Skill 1/3/4 ở lv1.

**Khi nào dùng**:
- Skill 2 là **passive combat buff** (ATK/DEF/HP% cố định)
- Commander rally hoặc garrison: Skill 2 thường là march capacity hoặc troop ATK bonus
- Secondary commander build: secondary không dùng active skill → max passive value

**Ví dụ thực tế**:
Boudica Skill 2 lv5: Peacekeeping ATK +25% → mỗi combat với rợ tăng 25% overall damage. Tốt hơn max Skill 1 (active AOE) nếu mày đang dùng Boudica secondary với primary khác cast active.

## Framework Chọn Skill Đúng

### Bước 1: Commander là Primary hay Secondary?

**Primary commander** → check active skill (thường Skill 1 hoặc Skill 4):
- Nếu Skill 1 là active: 5-1-1-1
- Nếu Skill 4 là active: 1-1-1-5 (max Skill 4 trước)

**Secondary commander** → không cast active skill → max passive buff skill trước:
- Skill nào tăng ATK/DEF/HP% cao nhất → max đó trước

### Bước 2: Role trong game là gì?

| Role | Priority Skill | Strategy |
|---|---|---|
| Barb farming / Honor | Active AOE skill | 5-1-1-1 (Skill 1 active) |
| Rally primary | March ATK passive | 5-1-1-1 nếu Skill 1 active, 1-5-1-1 nếu Skill 2 tốt hơn |
| Garrison defense | Defense / HP passive | 1-5-1-1 hoặc 1-1-5-1 tùy stat |
| Gathering | Gathering passive | Max gathering skill bất kỳ slot nào có |
| Secondary any role | Highest % passive buff | Tìm skill % cao nhất, max đó |

### Bước 3: Star Level Unlock

Skill 3 và Skill 4 chỉ unlock khi commander đạt **3 sao** và **5 sao**. Trước khi đạt star đó, không waste sculpture vào slot chưa mở.

**Common mistake**: cố max Skill 4 khi commander mới 2 sao → Skill 4 chưa unlock, sculpture không có effect.

## Pain Point — Sculpture Farm Quá Chậm, Dùng Sai Là Thảm Họa

Sculpture drop từ:
- Daily objective reward
- Alliance chest
- Event
- KvK rank reward
- Expedition

Mỗi ngày farm được ~5-15 sculpture nếu claim đầy đủ. 180 sculpture để max 1 skill = **12-36 ngày** nếu không miss. Miss 30% ngày (thực tế manual) = **17-50 ngày**.

Nếu dùng 180 sculpture vào skill sai (passive thấp giá trị thay vì active AOE) → tháng farming lãng phí. **Không hoàn lại**.

> 🤖 V2 tự động claim daily objective, alliance chest, event reward — sculpture tích đều không miss. Max đúng skill trong thời gian ngắn nhất. [Xem V2 →](/#packages) · 900.000đ/tháng.

## Quick Reference — Commander Phổ Biến

| Commander | Primary Role | Max First |
|---|---|---|
| Yi Seong-Gye | Barb / Honor | Skill 1 (AOE active) → 5-1-1-1 |
| Lohar | Barb farming | Skill 1 (barb damage active) → 5-1-1-1 |
| Boudica | Peacekeeping secondary | Skill 2 (ATK passive) → 1-5-1-1 |
| Theodora | Mixed / garrison | Skill 1 (AOE heal active) → 5-1-1-1 |
| Saladin | Cavalry primary | Skill 1 (cavalry ATK active) → 5-1-1-1 |
| Constance | Gathering | Skill 2/3 (gather passive) |
| Cleopatra | Gathering | Skill 2 (gather speed passive) |

## FAQ

### Universal Sculpture có thể dùng cho commander nào không?

Có. Universal Sculpture dùng được cho tất cả commander. Nhưng rất hiếm và giá trị cao — chỉ dùng cho Legendary commander tier S+, không dùng cho A-tier.

### Nếu tôi đã lỡ max skill sai thì sao?

Không hoàn lại được. Tiếp tục max skill đó xong để không mất consistency, rồi focus sculptor đúng commander tiếp theo. Lesson learned.

### Skill của secondary commander có ảnh hưởng lớn không?

Skill của secondary cộng dồn vào march. Boudica secondary lv5 Skill 2 (ATK +25%) vs lv1 (ATK +5%) = 20% damage difference toàn march. Không nhỏ.

## Bắt Đầu Ngay

**V2 Cao Cấp 900.000đ/tháng** — sculpture auto-claim, commander development không miss ngày nào:

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Iron Wolf Pet Deep Dive RoK 2026](/blog/iron-wolf-pet-deep-dive-rok-2026)
- [Hawk Pet Deep Dive RoK 2026](/blog/hawk-pet-deep-dive-rok-2026)
- [KvK Season Prep Bot Checklist RoK 2026](/blog/kvk-season-prep-bot-checklist-rok-2026)
  `,
};
