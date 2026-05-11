import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "pet-system-tier-list-rok-2026",
  title: "Pet System Tier List RoK 2026 — Iron Wolf vs Hawk vs Stone Bear (Season 8)",
  description: "Pet system Season 8 thay đổi meta hoàn toàn. Iron Wolf bá nhất open field, Hawk biến Yi Seong-Gye thành AOE máy hủy diệt, Stone Bear làm garrison bất khả xâm phạm. Tier list đầy đủ + cách bot V3 tối ưu pet feed tự động.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Pet System Season 8 — Không Phải Optional Nữa

Đến Season 8, pet không còn là feature bonus. Nó là **force multiplier** quyết định tier của cả march. Cùng commander, cùng troops, cùng talent tree — nhưng khác pet:

- Không pet: base damage
- Iron Wolf tier 3: +15-20% troop ATK open field
- Hawk tier 3 với YSG: skill range +15-25%, AOE damage +20%

Khoảng cách này lớn hơn nhiều người nghĩ. Đây là lý do player "làm đúng hết mà vẫn thua" trong KvK Season 8.

## Cơ Chế Pet — Đọc Đúng Để Không Waste Feed

Pet có 3 stats chính: **Combat**, **Gathering**, **Peacekeeping**. Mỗi stat buff context tương ứng — combat pet không buff gathering, gathering pet không buff combat.

**Tier pet:** 1 → 2 → 3 → 4 (tier 4 là max Season 8). Tier cao hơn = buff mạnh hơn + unlock passive mới.

**Feed system:** dùng pet food để level up pet trong tier. Đủ level → tiến hóa lên tier tiếp theo với evolution material.

**Lỗi phổ biến:** feed pet không đúng focus stat. Nếu muốn pet combat, ưu tiên thức ăn tăng Combat stat — đừng balanced-feed vì stats sẽ dàn trải, không stat nào đủ mạnh.

## Tier List Pet Combat Season 8

### S-Tier

**Iron Wolf** — Open Field Cavalry/Infantry King

Passive combat: tăng troop ATK, giảm skill damage nhận từ enemy. Tier 3 Iron Wolf + cavalry march = cavalry march khó kill nhất open field.

Active (tier 4): counter-charge khi march bị tấn công. Enemy tập trung vào march của bạn → pet phản đòn, làm chậm enemy march 1-2 giây. Trong open field timing, 2 giây = đủ để escape hoặc reposition.

**Best with:** Cavalry primary commander (Genghis, Minamoto, Saladin).

---

**Hawk** — Archer AOE Amplifier

Passive combat: tăng skill damage range + skill damage multiplier khi pet equip với archer commander. Tier 3 Hawk equip Yi Seong-Gye:
- AOE range: +15-25%
- Skill damage hit count: có thể hit thêm 1-2 target ngoài vùng base

Đây là combo làm YSG trở thành commander AOE range lớn nhất game. KvK rally cluster với Hawk YSG = wipe sạch troops trong radius lớn hơn 25% so với không có pet.

**Best with:** Yi Seong-Gye, Edward of Woodstock, archer primary.

---

### A-Tier

**Stone Bear** — Garrison Tank Wall

Passive garrison: tăng DEF + HP của garrison troops khi pet equip với garrison commander. Tier 3 Stone Bear + Charles Martel garrison:
- Garrison DEF: +12-18%
- Garrison HP: +10-15%

Không có combat buff ngoài garrison context — nhưng trong garrison, Stone Bear biến city thành fortress thật sự. Enemy rally trung bình cần 2-3 lần hit để phá nếu Charles Martel + Stone Bear tier 3.

**Best with:** Charles Martel, Leonidas I (garrison setup).

---

**Phoenix** — Infantry Sustain

Passive: heal % troops theo thời gian trong combat. Tier 3 Phoenix + infantry commander = infantry march bền hơn 20-25% trong sustained open field fight.

Không có burst damage buff nhưng troop sustain = ít loss = ít hospital time = march available nhiều hơn trong KvK.

**Best with:** Scipio Africanus, Leonidas, infantry sustained combat.

---

### B-Tier

**White Tiger** — Mixed Combat Mediocre

Tăng một ít ATK + một ít DEF. Không chuyên biệt. Dùng được nhưng không phải best in slot cho trường hợp nào.

**Best with:** Player mới, chưa đủ material cho S-tier pet.

---

**Ceroli Cub** — Event Pet

Nhận từ Ceroli Crisis event. Combat buff nhỏ, không tier S. Dùng tạm trước khi có Iron Wolf hoặc Hawk.

---

### C-Tier (Farm/Gathering)

**Panda, Bunny, Tortoise** — Gathering speed, rss production. Không combat value. Dùng riêng cho gathering march, không equip combat commander.

> 🤖 Bot V3 RokdBot auto-feed pet theo schedule, không bỏ sót feeding timer. Pet level up tối ưu không cần ngồi chờ. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Iron Wolf vs. Hawk — Chọn Cái Nào Nếu F2P Chỉ Có 1?

F2P thường chỉ đủ material để tiến hóa 1 pet lên tier 3 trong 6 tháng đầu.

**Chọn Iron Wolf nếu:** bạn main cavalry hoặc infantry, priority là open field combat và troop survival.

**Chọn Hawk nếu:** bạn có Yi Seong-Gye hoặc archer primary maxed. Hawk chỉ thật sự shine khi equip đúng archer commander — dùng với commander khác thì value giảm 50%.

Đây là lý do phải confirm troop type và main commander TRƯỚC khi quyết định pet investment. Pet không thể transfer giữa commander.

## So Sánh Damage Thực Tế Season 8

| Pet | Commander | Damage buff | Troop type |
|---|---|---|---|
| Iron Wolf tier 3 | Genghis Khan | +18% cavalry ATK | cavalry |
| Hawk tier 3 | Yi Seong-Gye | +22% skill damage + range | archer |
| Stone Bear tier 3 | Charles Martel | +15% garrison DEF | garrison |
| No pet | bất kỳ | 0% | bất kỳ |

No pet trong KvK Season 8 = tự handicap 15-22% performance. Không có lý do không build pet nếu đã chơi 6+ tháng.

## Bot V3 Và Pet Feed Automation

Pet feed yêu cầu đăng nhập daily để claim pet food từ daily mission + expedition reward, rồi apply vào pet. Manual: 5-10 phút/ngày không bỏ được ngày nào.

Bot V3 tự động:
- **Daily pet food collect** — từ daily mission, expedition reward
- **Auto-feed theo focus stat** — combat stat được feed trước, không balanced-feed lãng phí
- **Evolution material alert** — khi đủ material để tier-up, bot notify qua app

Sau 30 ngày: pet của bot V3 user thường cao hơn 1-2 tier so với player manual vì không bỏ ngày nào.

> 🤖 Auto pet feed + collect mỗi ngày — V3 Siêu Cấp 1.2M/tháng. Pet tier 3 đạt nhanh hơn 2 tháng so với manual. [Đăng ký V3 →](/#packages)

## FAQ

### Pet có bị mất khi commander chết trong KvK không?

Không. Pet chỉ bị "inactive" khi commander không dùng. Không mất pet khi troop loss.

### F2P có grind đủ pet material không?

Hawk và Iron Wolf nhận từ event seasonal + kingdom shop. F2P active có thể đủ material tier 3 sau 4-6 tháng. Không cần whale.

### Equip pet vào secondary commander có tác dụng không?

Không. Pet chỉ active với primary commander. Equip secondary = vô nghĩa.

### Gathering pet có nên dùng cho farming bot không?

Bot V3 farming rợ combat → cần combat pet. Gathering pet chỉ hữu ích nếu có march riêng cho gathering. Không mix.

## Tổng Kết

Pet tier list Season 8:
- S: Iron Wolf (cavalry/infantry), Hawk (archer AOE)
- A: Stone Bear (garrison), Phoenix (infantry sustain)
- B: White Tiger (all-around mediocre)
- C: Gathering pets (non-combat)

Chọn 1 pet, tập trung feed đúng stat, đừng phân tán.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [AI Commander Rotation V3 RoK](/blog/ai-commander-rotation-v3-rok)
- [Commander Tier List Cavalry RoK 2026](/blog/commander-tier-list-cavalry-rok-2026)
- [Tier List Best Commanders Each Bot Tier RoK 2026](/blog/tier-list-best-commanders-each-bot-tier-rok-2026)
  `,
};
