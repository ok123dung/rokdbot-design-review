import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "garrison-troop-composition-rok-2026",
  title: "Garrison Troop Composition RoK 2026 — Mix 60/30/10 Defense Optimal",
  description: "Garrison troop composition RoK 2026: tại sao mix 60/30/10 Infantry/Cavalry/Archer là defense optimal, garrison commander choice, khi nào full Infantry vs mixed, và bot V3 auto-compose garrison theo intelligence địch.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Garrison Full Infantry — Myth Phổ Biến Nhất Trong RoK

"Garrison thì dùng full Infantry, chúng có defense buff."

Câu này đúng một nửa và sai một nửa quan trọng hơn.

Đúng: Infantry có passive defense buff trong garrison (+15-25% defense tùy talent tree). Sai: địch không bao giờ attack bằng full Cavalry vào garrison. Địch dùng **mixed army hoặc counter type** sau khi scout composition của bạn.

Full Infantry garrison: địch gửi full Archer → địch có +30% advantage. Bạn "biết" Infantry tốt cho garrison nhưng địch "biết" composition của bạn và counter.

## Tại Sao Mix 60/30/10 Là Optimal

**60% Infantry / 30% Cavalry / 10% Archer** là composition được nhiều top alliance players dùng cho city/flag garrison. Logic:

### Chống Counter Attack

Địch scout garrison bạn và thấy 60% Infantry. Nếu gửi full Archer để counter → 30% Cavalry của bạn counter ngược lại Archer. Địch không thể win clean với full counter.

Nếu địch gửi Cavalry để counter Archer (10%) của bạn → 60% Infantry của bạn counter Cavalry. 10% Archer là "bait" khiến địch không thể optimize composition.

### Garrison Defense Buff Stack

Infantry passive defense vẫn apply cho 60% lực lượng chính — không bị mất. 30% Cavalry và 10% Archer hưởng general garrison defense buff (commander skill).

### Commander Flexibility

Garrison commander Infantry-focused (như Constantine, Richard) vẫn buff toàn garrison, không chỉ Infantry. Mix không làm mất commander effectiveness.

> 📌 Xem thêm: [Troop Matchup Chart Cavalry/Archer/Infantry RoK 2026](/blog/troop-matchup-chart-cavalry-archer-infantry-rok-2026) để hiểu counter mechanics.

## Khi Nào Điều Chỉnh Ratio

60/30/10 là **default safe**. Một số scenario cần adjust:

### Scenario 1: Biết Địch Gửi Cavalry Heavy

Scout data (hoặc historical data từ trước) cho thấy attacking alliance dùng Cavalry-based commander (Saladin, Alexander, Minamoto). Shift sang **40 Infantry / 20 Cavalry / 40 Archer**: Archer counter Cavalry heavily.

### Scenario 2: Open Field Alliance War

Không phải garrison mà là flag war, march nhiều hướng. Shift về **50/30/20** — tăng Cavalry để có mobility response capability.

### Scenario 3: Garrison Với Richard Commander

Richard I là Infantry commander có passive buff cho toàn bộ garrison khi defending. Với Richard: **70 Infantry / 20 Cavalry / 10 Archer** tận dụng maximum Richard's defense multiplier.

## Commander Pair Tối Ưu Cho Garrison Defense

| Commander | Type | Garrison Buff |
|---|---|---|
| Constantine (Legendary) | Infantry | Garrison ATK +20%, DEF +20% |
| Richard I (Legendary) | Infantry | Troop DEF +25% when defending |
| Eulji Mundeok (Epic) | Infantry | DEF +15%, Counter-attack dmg |
| Guan Yu (Legendary) | Infantry | Siege DMG reduction |

Best F2P garrison pair: **Eulji + Constantine** (cả hai epic accessible). Richard là upgrade khi có.

**Không dùng Cavalry commander làm garrison commander** — Cavalry commanders không có garrison defense passive. Chúng tốt cho march combat, không tốt cho defend city.

> 📌 Xem thêm: [Reinforcement Troops Timing RoK 2026](/blog/reinforcement-troops-timing-rok-2026) — khi nào reinforce thêm vào garrison và composition nên điều chỉnh thế nào.

## Garrison Cap và Troop Management

Garrison có capacity limit (tăng theo CH level và Wall level). Khi garrison full:

- Troop reinforce từ alliance member không vào được
- Những troops bị đánh không có chỗ wound → die rate tăng

**Wall lv 25** là prerequisite cho maximum garrison cap. Garrison cap lv 25: khoảng 1.5-2M tùy server settings. Với city nhỏ (CH 20): garrison cap ~500.000-700.000.

Không cần fill cap hoàn toàn — overfill xảy ra khi nhiều reinforce vào cùng lúc và địch attack ngay sau = troops không kịp set up = casualties cao hơn.

## Food Cost Của Garrison Defense

Troops trong garrison vẫn consume food khi inactive. 500.000 troops × consumption rate = **không đáng kể** (food cost chỉ active khi combat/training/healing). Garrison không drain food khi đứng yên.

Food cost chỉ xảy ra khi **heal wounded garrison troops sau battle**. Math heal = số troops wounded × food/troop tier.

> 🤖 Bot V3 scout incoming attack, auto-adjust garrison composition theo troop type địch, coordinate alliance reinforce timing. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## FAQ

### Có cần Siege trong garrison không?

Siege không participate garrison defense. Siege chỉ dùng trong rally/siege mode. Không waste garrison slot cho Siege.

### Ally reinforce có cùng type với garrison không?

Reinforce từ ally là họ gửi march vào city bạn — bất kỳ type nào họ muốn. Best practice: coordinate trước để reinforce Infantry complement garrison.

### Bot V3 có tự reinforce không?

V3 có auto-reinforce coordination: khi ally bị attack, bot alert và suggest reinforce. Tự động gửi reinforce cần manual approval (safety feature — không muốn tự march troops ra ngoài).

## Bắt Đầu

60/30/10 là starting point. Adjust theo intel và scenario. Garrison defense không phải set-and-forget — nó là **responsive system** theo địch thủ cụ thể.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Troop Matchup Chart Cavalry/Archer/Infantry RoK 2026](/blog/troop-matchup-chart-cavalry-archer-infantry-rok-2026)
- [Reinforcement Troops Timing RoK 2026](/blog/reinforcement-troops-timing-rok-2026)
- [Best Troop Types KvK RoK 2026](/blog/best-troop-types-kvk-rok-2026)
- [Hospital Cap Power vs RSS Tradeoff RoK 2026](/blog/hospital-cap-power-vs-rss-tradeoff-rok-2026)
  `,
};
