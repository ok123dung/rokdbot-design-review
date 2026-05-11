import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "lohars-trial-event-walkthrough-rok-2026",
  title: "Lohar's Trial Event Walkthrough RoK 2026 — Vòng Cổ Xương Người Farming",
  description: "Lohar's Trial event RoK 2026: stage breakdown, necklace fragment farming, reward priority, và cách bot V1 auto-clear stages để maximize fragment collection không cần ngồi bấm.",
  date: "2026-05-10",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Lohar's Trial — Event Bị Underrated Nhất RoK

Khi Lohar's Trial mở, 80% player nhìn vào event panel, thấy "Vòng cổ xương người" trong reward list, và bỏ qua. Sai lầm.

Necklace fragment từ Lohar's Trial là một trong số ít **equipment material free trong game** — không cần mua, chỉ cần farm stages đủ số lần. Vấn đề duy nhất: mỗi stage reset theo ngày và cần **active tap để clear**. Ai bận không clear = mất fragment ngày đó, không recover được.

Bot thì không bỏ sót ngày nào.

## Event Structure — Stage Breakdown

Lohar's Trial có 5 stage difficulty tăng dần:

| Stage | Difficulty | Fragment/Clear | AP Cost | Clear Time |
|---|---|---|---|---|
| Stage 1-2 | Beginner | 1-2 | 30 AP | 3 phút |
| Stage 3-4 | Normal | 3-4 | 50 AP | 5 phút |
| Stage 5-6 | Hard | 5-7 | 80 AP | 8 phút |
| Stage 7-8 | Expert | 8-12 | 120 AP | 12 phút |
| Stage 9-10 | Elite | 15-20 | 180 AP | 20 phút |

Daily reset: mỗi stage cho **3 lần clear/ngày** tối đa. Tổng max fragment/ngày nếu clear tất cả = ~130-150 fragments.

Manual player thực tế: clear 2-3 stage, bỏ sót 1-2 daily = ~40-60 fragments/ngày.

Bot V1: clear đủ 3 lần mỗi stage, mỗi ngày = **full 130-150 fragments/ngày**.

> 🤖 V1 auto-clear Lohar's Trial 3 lần/stage/ngày — không bỏ sót daily reset. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Necklace Fragment Farming — Tại Sao Quan Trọng

Vòng cổ xương người (Bone Necklace) là equipment piece cho **Lohar commander** — peacekeeping specialist dùng nhiều nhất cho barb chain.

Bone Necklace stats (Gold tier):
- +10% peacekeeping unit attack
- +7% HP troops trong barb combat
- Passive: giảm AP cost barb fight -5%

Với bot barb chain: Bone Necklace -5% AP = **mỗi 1.000 AP tiết kiệm 50 AP** = 5% nhiều barb hơn cùng AP budget. Over 1 tháng: đáng kể.

### Fragment Threshold Craft

| Equipment | Fragments Cần | Ngày Farm (Bot V1) | Ngày Farm (Manual) |
|---|---|---|---|
| Bone Necklace Bronze | 200 | ~1,5 ngày | ~4 ngày |
| Bone Necklace Gold | 1.200 | ~9 ngày | ~25 ngày |
| Bone Necklace Perfect | 3.600 | ~26 ngày | ~75 ngày |

Gold tier là sweet spot — Perfect tier không đủ delta để justify 3x thêm thời gian.

## Stage Clear Strategy

### Stage 1-6: Dùng Lohar Trực Tiếp

Lohar làm primary commander bất kể level — event thiết kế để Lohar có advantage trên tất cả stages. Không cần min-max commander pair.

Secondary commander: Sun Tzu (bonus troop attack) hoặc Boudica (AP reduction passive).

### Stage 7-10: Troop Composition Quan Trọng

Elite stages: địch có mixed troop types — cavalry lẫn infantry.

- **Infantry 60% + Cavalry 40%**: infantry tank frontline, cavalry flank
- Không dùng archer: elite stage có anti-archer mechanics
- Min power recommendation: 2M troop power cho Stage 9-10

### Bot Clear Pattern

Bot V1 detect stage difficulty và auto-select:
- Stage 1-6: 1 march solo clear
- Stage 7-8: reinforce march nếu troop count < threshold
- Stage 9-10: full troop deployment

Không cần mày config từng stage — bot tự calibrate.

## Reward Priority Ngoài Necklace

Lohar's Trial cho thêm:

| Reward | Value | Priority |
|---|---|---|
| Gem (thường) | 50-200 per stage | Cao |
| Speedup (1h-3h) | Random drop | Trung bình |
| XP tome | 5k-15k | Trung bình |
| Gold keys | 1-2 per stage | Cao |
| Necklace fragment | Per stage | Cao nhất |

Gold keys là bonus worth farming — unlock regular chest cho commander XP và speedup thêm.

Bot claim tất cả rewards sau mỗi clear, không bỏ sót drop.

> 🤖 V1 auto-claim toàn bộ reward Lohar's Trial — gem, key, fragment, speedup — mỗi ngày. [Xem V1 →](/#packages).

## Event Window Management

Lohar's Trial thường chạy 7-10 ngày. Event nào cũng có **ngày đầu và ngày cuối quan trọng nhất**:

- **Ngày 1**: Bắt đầu sớm nhất — fragment compound theo ngày
- **Ngày cuối**: Double reward thường có (check event panel)
- **Ngày giữa**: Bot handle tự động, không cần check

Với 10 ngày event và bot V1: **10 ngày × 150 fragments = 1.500 fragments** — đủ Gold Necklace với dư.

## Kết Hợp Với Event Khác

Lohar's Trial thường chạy song song Mightiest Governor hoặc KvK. Bot V1 balance:

- **Lohar's Trial clear**: xong trong 1-2 tiếng/ngày (3 lần × mỗi stage)
- **Barb chain**: phần còn lại của ngày

Không conflict. Bot V1 schedule Lohar clear vào đầu ngày (AP regen overnight), sau đó switch sang barb chain cho phần còn lại.

## FAQ

### Lohar's Trial có cần Lohar maxed không?
Không. Event designed để playable ngay cả Lohar lv1. Stage 9-10 cần troop power tối thiểu, không phải commander level.

### Nếu bỏ lỡ 1 ngày clear thì sao?
Fragment không rollover. 1 ngày miss = mất 150 fragments permanently. Bot không bỏ ngày nào — đây là value chính của V1 cho event này.

### Có thể mua fragment không?
Không có gem shop cho Lohar fragment. Chỉ farm stage. Đây là lý do fragment rare và equipment có value cao.

## Bắt Đầu Lohar's Trial Với V1

**V1 Cơ Bản 750.000đ/tháng**:
- Auto-clear 3 lần/stage mỗi ngày
- Auto-claim reward gem + key + fragment
- Barb chain song song sau khi clear event

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Mightiest Governor Event Setup RoK 2026](/blog/mightiest-governor-event-setup-rok-2026)
- [Lohar Barbarian Farming 24h XP Grind RoK 2026](/blog/lohar-barbarian-farming-24h-xp-grind-rok-2026)
- [KvK Season Prep Bot Checklist RoK 2026](/blog/kvk-season-prep-bot-checklist-rok-2026)
  `,
};
