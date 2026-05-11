import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "garrison-defense-commander-setup-rok-2026",
  title: "Garrison Defense Commander Setup RoK 2026 — Charles Martel + Trajan Tank Pair",
  description: "Garrison bị rally liên tục mà commander yếu = mất city trong 10 phút. Charles Martel + Trajan là tank pair cứng nhất 2026. Phân tích setup garrison defense, talent tree, và cách bot V3 auto-reinforce khi phát hiện incoming rally.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## City Của Bạn Sẽ Sụp Trong 10 Phút Nếu Garrison Sai

KvK phase 3 — flag rush. Enemy alliance tập trung 5-10 rallies vào city của bạn. Garrison commander yếu, troops tier thấp. Kết quả: city burn trong 10 phút, toàn bộ resource mất, troop loss khổng lồ.

Đây không phải tình huống lý thuyết. Đây xảy ra mỗi KvK với player không build garrison đúng. Bài này đưa ra setup cụ thể — commander, talent tree, troop comp — để garrison bạn cứng đến mức enemy từ bỏ.

## Charles Martel + Trajan — Tại Sao Đây Là Pair Cứng Nhất?

### Charles Martel (Primary)

Infantry commander với passive garrison chuyên biệt. Khi set làm garrison commander:
- **Passive 1:** tăng garrison troop DEF % dựa trên skill level
- **Passive 2:** giảm damage nhận từ rally (anti-rally passive — cực quan trọng)
- **Active skill:** AOE damage + shield buff cho garrison troops

Charles Martel là commander duy nhất có **anti-rally passive tích hợp** — không commander khác có điều này ở cùng tier. Đây là lý do dùng primary.

### Trajan (Secondary)

Trajan passive buff garrison HP + counter-attack damage. Khi garrison bị tấn công:
- Trajan passive trigger: troop HP tăng theo % skill level
- Counter damage buff: garrison deal thêm damage lại rally

Pair Charles Martel (anti-rally) + Trajan (HP + counter) = tank wall + damage wall. Enemy cần rally mạnh gấp 1,5-2x để phá vỡ city này so với garrison thường.

## Talent Tree Setup Chi Tiết

### Charles Martel Talent Tree (Primary Garrison)

**Ưu tiên nhánh theo thứ tự:**
1. **Garrison tree** — maxed toàn bộ node garrison DEF, garrison HP
2. **Skill tree** — đủ để cast skill nhanh hơn (rage reduction node)
3. **Infantry tree** — infantry ATK node cuối (thêm damage cho counter-attack)

**Không đầu tư vào:** Peacekeeping tree, Leadership tree. Cả 2 vô nghĩa với garrison setup.

Tổng talent point cần: khoảng 70-75 point để maxed đúng.

### Trajan Talent Tree (Secondary)

Như đã nói — talent tree secondary không apply trong march combat. Nhưng garrison là trường hợp đặc biệt: một số commander có passive garrison buff apply khi set làm city garrison, không phải march.

Trajan: ưu tiên Garrison tree node HP trước nếu có. Phần còn lại tùy preference — không critical.

## Troop Composition Garrison

Troop type tối ưu cho garrison không phải "càng nhiều càng tốt". Ratio quan trọng:

**Recommended ratio:**
- 40% infantry (frontline absorb damage)
- 30% cavalry (counter-attack speed)
- 30% archer (ranged DPS trong garrison wall)

Tránh: garrison toàn infantry (zero counter damage), garrison toàn archer (front bị vỡ nhanh). Mixed ratio giúp garrison sustain lâu hơn trong multi-wave rally.

Tier troop: T4 minimum để garrison đủ bền. T5 ideal nhưng F2P khó reach sớm. T4 với Charles Martel + Trajan vẫn đủ chống được rally mid-tier enemy.

> 🤖 Bot V3 RokdBot monitor incoming march real-time — phát hiện rally gathering trong 30 giây, auto tăng reinforce về city trước khi rally hit. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Garrison Defense vs. Flag Defense — Khác Biệt Quan Trọng

**City garrison:** Charles Martel + Trajan là best in slot. City có wall DEF bonus tự nhiên — commander chỉ cần tank lâu.

**Flag garrison:** Khác hoàn toàn. Flag không có wall DEF bonus. Cần commander damage output cao hơn để deterrent — đừng dùng pure tank pair như Charles + Trajan cho flag.

Flag garrison tốt hơn với: Leonidas I + Constantine (infantry damage + garrison buff hybrid), hoặc Scipio Africanus + Constantine.

Sai lầm phổ biến: dùng Charles Martel + Trajan cho flag → enemy rally 1 lần là xong vì không có damage deterrent.

## So Sánh Garrison Setups 2026

| Setup | Rally Resist | Counter Damage | Troop Loss/Rally | Tier |
|---|---|---|---|---|
| Charles Martel + Trajan | Cực cao | Trung bình | Rất thấp | S |
| Leonidas + Constantine | Cao | Cao | Thấp | A |
| Scipio + Constantine | Trung bình | Trung bình | Trung bình | B |
| Random infantry | Thấp | Thấp | Cao | D |

Charles + Trajan là lựa chọn duy nhất nếu city bạn là target chính của enemy alliance.

## Bot V3 Làm Gì Cho Garrison Defense?

Tình huống thực tế: 3am, bạn ngủ, enemy gửi 8 rallies vào city. Manual defense = không thể. Bot V3:

- **Scout detection:** monitor enemy march movement trong range, phát hiện rally building
- **Auto reinforce:** nếu troops bên ngoài đang farm rợ, recall về city trước khi rally land
- **Shield trigger:** nếu city HP xuống dưới ngưỡng cài sẵn, tự activate shield (nếu shield available)
- **Alert push:** notify player qua app trong vòng 60 giây sau khi phát hiện incoming rally

Không có bot → bạn wake up thấy city burned. Có bot V3 → bot đã reinforce hoặc shield trước khi rally hit.

> 🤖 Auto garrison defense 24/7 — V3 Siêu Cấp 1.2M/tháng. City không bao giờ bị burn khi đang ngủ. [Đăng ký V3 →](/#packages)

## FAQ

### Charles Martel có cần maxed 5/5 skill không?

5/5 ideal. Skill 4/5 vẫn ổn — anti-rally passive kích hoạt từ skill 2. Minimum viable là 3/5.

### Tôi không có Charles Martel thì dùng ai?

Leonidas I là backup gần nhất. Passive infantry DEF không có anti-rally specific nhưng garrison buff còn đó. Sau đó là Constantine I.

### Có nên garrison scout commander không?

Không. Scout commander slot riêng, không ảnh hưởng garrison combat. Dùng slot garrison cho tank pair.

### Bot có hỗ trợ garrison defense ở gói V1 không?

V1 chỉ có farm automation cơ bản. Garrison auto-defense (reinforce, shield trigger, alert) là feature V3 trở lên.

## Tổng Kết

Garrison defense đúng 2026:
1. Charles Martel + Trajan = best tank pair city
2. Talent tree garrison focused (không waste vào Peacekeeping)
3. Troop ratio 40/30/30 infantry/cavalry/archer
4. Bot V3 auto-reinforce khi phát hiện incoming rally

City bạn sẽ trở thành cái gai không ai muốn rally.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Best Infantry Commanders KvK RoK 2026](/blog/best-infantry-commanders-kvk-rok-2026)
- [AI Commander V3 Talent Tree Optimization Meta 2026](/blog/ai-commander-v3-talent-tree-optimization-meta-2026)
- [Tier List Best Commanders Each Bot Tier RoK 2026](/blog/tier-list-best-commanders-each-bot-tier-rok-2026)
  `,
};
