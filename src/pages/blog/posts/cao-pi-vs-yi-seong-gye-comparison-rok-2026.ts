import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "cao-pi-vs-yi-seong-gye-comparison-rok-2026",
  title: "Cao Pi vs Yi Seong-Gye RoK 2026 — Cavalry Rally Damage vs Archer AOE Range",
  description: "Cao Pi cavalry rally damage hay Yi Seong-Gye archer AOE range — đây là câu hỏi nhiều player phân vân nhất 2026. Không có trả lời universal. Phân tích theo use case: KvK phase, troop comp, pair, và bot V3 rotation logic.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Cao Pi vs. YSG — Câu Hỏi Sai Dẫn Đến Kết Luận Sai

"Cao Pi hay YSG mạnh hơn?" — đây là câu hỏi sai. Đúng như hỏi "búa hay tuốc nơ vít tốt hơn". Phụ thuộc hoàn toàn vào bạn muốn đóng đinh hay vặn ốc.

Cao Pi và YSG có role hoàn toàn khác nhau. Dùng Cao Pi làm AOE farm barb = underperform. Dùng YSG làm cavalry rally lead = mismatch cơ bản.

Bài này so sánh đúng context: Cao Pi ở context của nó, YSG ở context của nó, rồi tìm điểm giao nhau khi chúng có thể pair với nhau.

## Cao Pi — Cavalry Rally Specialist

### Cơ Chế Đặc Trưng

**Passive:** tăng cavalry ATK và HP khi là primary commander. Riêng node cuối passive 5 star: tăng thêm damage nhận từ rally (buff cho toàn bộ march khi Cao Pi dẫn rally).

**Active skill:** AOE cavalry damage — nhưng range nhỏ hơn YSG, damage tập trung hơn. Hit ít target nhưng mỗi target nhận damage cao.

**Key mechanic:** Cao Pi passive buff **scale theo số troop** trong rally march. Càng nhiều troop join rally = damage buff càng lớn. Max troop rally với Cao Pi primary = burst damage single target cao nhất trong cavalry tier.

### Best Use Cases

**KvK rally flag:** Cao Pi primary + Saladin secondary = cavalry burst damage highest tier vs. garrison. Rally 1 flag lv 3-4 với Cao Pi = potential 1-shot nếu garrison chưa maxed reinforce.

**Open field cluster hit:** Khi enemy march cluster lại (teamfight open field), Cao Pi cavalry rally hit cluster = high single-point damage.

**KP farming kill phase:** Mục tiêu kill enemy march nhanh = Cao Pi rally > YSG rally do burst damage tập trung.

### Weakness

Không có AOE spread. Khi farm barb với nhiều barb cluster spread out, Cao Pi rally không efficient bằng YSG. Damage tập trung = tốt single target, kém multi-target spread.

## Yi Seong-Gye — Archer AOE Range Dominator

### Cơ Chế Đặc Trưng

**Passive:** tăng archer ATK + skill damage khi primary. Node star 4-5: tăng AOE damage range — đây là passive unique của YSG không commander nào có.

**Active skill:** AOE archer — range lớn nhất game khi YSG 5 star, đặc biệt khi kết hợp với pet Hawk tier 3 (+15-25% range).

**Key mechanic:** YSG damage không tập trung vào 1 target mà **spread ra cụm target**. Lý tưởng khi enemy cluster hoặc barb cluster.

### Best Use Cases

**Barb farm AOE (peacekeeping):** YSG + Lohar là cặp chuẩn farm rợ. AOE range rộng = hit nhiều barb 1 lần = honor/AP ratio cao nhất.

**KvK barb rush phase:** Ngày 1-3 KvK, YSG rally barb cluster để farm KP nhanh hơn mọi pair khác.

**Open field AOE vs. multiple march:** Khi enemy gửi nhiều march nhỏ spread ra, YSG AOE có thể hit multiple march simultaneously. Cao Pi không làm được điều này.

**Lose phase area denial:** YSG AOE range rộng = deterrent khi defend — enemy e ngại march vào AOE radius.

### Weakness

YSG rally vs. single garrison: range AOE rộng nhưng damage mỗi hit phân tán → tổng damage vs. 1 target thấp hơn Cao Pi rally. Nếu chỉ muốn phá garrison, Cao Pi > YSG.

## Khi Nào Pair Cao Pi + YSG Với Nhau?

Đây là điều thú vị: Cao Pi và YSG không phải rival — chúng có thể pair.

**Cao Pi primary + YSG secondary:**

YSG secondary apply skill passive (AOE damage) khi rage đầy sau Cao Pi cast. Combo: Cao Pi burst damage lần 1 → YSG AOE cleanup lần 2. Hiệu quả trong open field sustained combat.

**Lưu ý:** Pair này có vấn đề troop type mismatch — Cao Pi buff cavalry, YSG buff archer. Troop type trong march phải chọn 1: nếu cavalry march thì YSG secondary buff không apply đầy đủ. Best pair với cavalry march dùng full cavalry troops, chấp nhận mất một phần YSG passive.

Giải pháp: dùng YSG secondary chỉ vì AOE active skill, không vì passive buff. Active skill vẫn cast bất kể troop type.

> 🤖 Bot V3 RokdBot monitor enemy pattern real-time — nếu enemy cluster, rotate sang YSG primary cho AOE; nếu single target, swap Cao Pi primary cho burst. Không cần manual swap. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## So Sánh Damage Theo Scenario

| Scenario | Cao Pi | Yi Seong-Gye | Winner |
|---|---|---|---|
| Rally flag lv 4 garrison | 2.8M burst | 1.9M spread | Cao Pi |
| Barb cluster 5 con | 800k (1 barb) | 2.1M (5 barb) | YSG |
| Open field 3 enemy march | 1.1M (1 march) | 1.8M (3 march split) | YSG |
| Kill single enemy march | 3.2M burst | 2.0M spread | Cao Pi |
| KvK barb rush phase | Slow | Fast | YSG |
| KvK kill phase flag | Fast | Slow | Cao Pi |

Không commander nào win mọi scenario. Đây là lý do rotation tồn tại.

## Sculptor Investment Priority — Cao Pi hay YSG Trước?

**Cavalry main player:** Cao Pi trước. Cavalry main cần cavalry rally primary — Cao Pi là standard.

**Archer main player:** YSG trước, không câu hỏi. YSG là core archer commander không thể thay thế.

**Hybrid player (cavalry + archer):** YSG trước vì versatility cao hơn — AOE farm barb + open field + KvK barb rush. Sau đó Cao Pi.

**F2P không có cả 2:** Minamoto thay Cao Pi (cavalry burst F2P tier), Theodora + YSG pair cho archer farm. Không cần chi tiền.

## Bot V3 Rotation Logic: Cao Pi vs. YSG Decision

Bot V3 có AI Commander Rotation system. Decision tree đơn giản:

- Target là barb cluster / multiple enemy? → Rotate YSG primary
- Target là single garrison / single enemy march? → Rotate Cao Pi primary
- KvK phase barb rush (ngày 1-3)? → Lock YSG
- KvK phase kill (ngày 11-14)? → Lock Cao Pi

Không phải "chọn 1 rồi thôi" — cả 2 commander đều cần, rotation timing quyết định efficiency.

> 🤖 AI rotation Cao Pi / YSG theo target type — V3 Siêu Cấp 1.2M/tháng. Bot swap tự động, không cần nhớ. [Đăng ký V3 →](/#packages)

## FAQ

### Nếu chỉ có 1 trong 2, chọn cái nào cho server mới?

YSG — versatility cao hơn. Barb farm, open field, KvK barb rush. Cao Pi thêm vào sau khi có YSG.

### Cao Pi có dùng được cho barb farm không?

Có nhưng kém hiệu quả hơn YSG. Nếu dùng V2 bot Combo Spam + AOE, YSG là pair standard — AOE range rộng phù hợp hơn với Combo mechanic.

### YSG secondary với cavalry primary có apply passive không?

YSG secondary → passive archer buff không apply (troop type mismatch). Nhưng YSG active AOE skill vẫn cast — đó là lý do pair YSG secondary dù mismatch.

### Cao Pi + Hawk pet có hiệu quả không?

Hawk tăng archer skill range — không apply cho Cao Pi vì Cao Pi không phải archer commander. Hawk chỉ dùng với YSG hoặc Edward of Woodstock.

## Tổng Kết

Cao Pi và YSG không phải rival — cả 2 cần thiết ở role khác nhau:

- Cao Pi: cavalry rally burst damage, single target, kill phase
- YSG: archer AOE range, multi-target, barb phase, open field spread

Rotation theo scenario = maximize cả 2. Bot V3 tự động rotation không cần nhớ.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Commander Tier List Cavalry RoK 2026](/blog/commander-tier-list-cavalry-rok-2026)
- [Archer Commander Pairing Guide RoK 2026](/blog/archer-commander-pairing-guide-rok-2026)
- [AI Commander Rotation V3 RoK](/blog/ai-commander-rotation-v3-rok)
  `,
};
