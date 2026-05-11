import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "best-gathering-commanders-rok-2026",
  title: "Best Gathering Commanders RoK 2026 — Charles Martel + Scipio + Joan + Sarka Pair",
  description: "Tier list gathering commanders Rise of Kingdoms 2026: Charles Martel, Scipio Africanus, Joan of Arc, Sarka — skill analysis, pair synergy, và V1 bot tự động chọn pair tốt nhất cho roster của bạn.",
  date: "2026-05-10",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Gathering Commander — Tại Sao Hầu Hết Player Chọn Sai

Bạn có thể có đủ 4 march gather, tile Lv 5, alliance buff — nhưng vẫn farm chậm hơn neighbor 40% chỉ vì **dùng sai commander pair**.

Gathering commander không phải về damage hay combat. Chúng về **3 chỉ số cứng**:

1. **Gathering Speed** — giảm thời gian/tile
2. **Load Capacity** — tăng RSS mang được/march
3. **March Speed** — giảm travel time giữa city và tile

Tưởng như đơn giản, nhưng phần lớn guide lẫn lộn "commander cho farm" với "commander cho gather" — đây là hai thứ khác nhau hoàn toàn. Bài này chỉ về **gather RSS từ tile trên map**.

## S Tier — Sarka (F2P, Epic)

**Sarka** là gathering commander mạnh nhất cho F2P và không phải trả gem nào để lấy.

- **Active skill**: Tăng march speed +25% trong 5 giây (đặc biệt hữu dụng travel dài)
- **Passive**: Gathering speed +15% / Capacity +10% (level 4)
- **Expertise** (fully starred): Load capacity +20% thêm

Sarka pair với bất kỳ commander có capacity bonus nào = **tier S gather pair**.

Điểm yếu duy nhất: march speed buff chỉ 5 giây, không sustained. Nhưng với tile gần thì không quan trọng.

## A Tier — Constance (Epic, Limited)

Constance là epic commander với passive chuyên gathering:

- **Passive lv 5**: Gathering speed +20% + Capacity +25%
- Không có combat utility → toàn bộ talent tree đổ vào gather

Constance là **primary gathering commander** nếu bạn có. Pair với Sarka = throughput cao nhất F2P accessible.

Không có Constance? Scipio Africanus là substitute.

## A Tier — Scipio Africanus (Epic, Standard)

Scipio trong phiên bản RoK 2026 được buff gathering talent:

- **Passive**: Gathering speed +15% / Capacity +15%
- **Talent tree**: Invest vào "Gathering" branch → thêm +10% speed, +5% capacity
- Có thêm combat passive nhẹ (không liên quan gather nhưng không hại)

Scipio dễ farm từ chest hơn Constance. **Substitute tốt nhất nếu không có Constance**.

> 📌 Xem thêm: [Farm 1.000.000 RSS/Giờ Setup RoK 2026](/blog/farm-1000-rss-per-hour-setup-rok-2026) để hiểu throughput math.

## B Tier — Joan of Arc (Epic, Standard)

Joan thường được nghĩ đến cho barbarian farm, nhưng có utility trong gather:

- **Active skill**: Restore AP cho march (quan trọng khi gather xa và tốn AP)
- **Passive**: March speed +10%
- Không có capacity bonus — đây là điểm yếu

Joan pair tốt khi **AP cost là bottleneck**, không phải throughput. Nếu server bạn có nhiều tile gần city, skip Joan.

## B Tier — Charles Martel (Legendary, Limited)

Charles Martel được nhiều whale dùng cho gather vì có:

- **Passive**: Gathering speed +20% (max skill)
- **Defense buff**: +15% garrison defense (không liên quan gather)

Vấn đề: Charles Martel là legendary limited — **không accessible với F2P**. ROI đầu tư sculpture vào Charles cho gather là âm so với combat. Nếu có Charles, dùng cho combat; để Sarka + Constance lo gather.

## Talent Tree Priority — Gather Branch

Dù dùng commander nào, invest talent tree đúng là quan trọng:

| Talent Node | Ưu Tiên | Tác Dụng |
|---|---|---|
| Gathering Speed | 1st | Giảm thời gian/tile trực tiếp |
| Load Capacity | 2nd | Tăng RSS/march |
| March Speed | 3rd | Giảm travel time |
| Troops Training Speed | Skip | Không liên quan gather |

**Không split talent tree** giữa gather và combat cho commander gather chính. Chọn 1 role, max nó.

## Pair Synergy Tier List 2026

| Pair | Throughput | F2P Accessible | Verdict |
|---|---|---|---|
| Sarka + Constance | ★★★★★ | Epic chest | Best F2P |
| Sarka + Scipio | ★★★★ | Standard chest | Solid substitute |
| Constance + Joan | ★★★★ | Epic (2 commanders) | If AP issue |
| Sarka + Boudica | ★★★ | Standard | Budget pair |
| Charles + Constance | ★★★★★ | Limited (whale) | Overkill for gather |

## Bot V1 Tự Động Chọn Pair

Đây là nơi bot V1 giải quyết vấn đề thực tế: **không phải ai cũng có Constance**, và việc manually assign đúng pair cho 4 march khác nhau mỗi ngày rất tẻ nhạt.

Gói **V1 750.000đ/tháng** có tính năng:

- **Auto commander detection** — scan roster, xác định pair gathering tốt nhất available
- **Auto assign** — đặt pair đúng cho từng march gather
- **Auto resend** — khi march về, reassign và gửi tiếp tức thì
- Không cần manually config từng march

V1 không có Combo Spam (dành cho barbarian) nhưng **gather automation đầy đủ**. Nếu goal chính là RSS farm cho build/research, V1 là gói phù hợp.

> 🤖 V1 tự chọn gathering commander pair từ roster của bạn, resend march 24/7. [Xem V1 →](/#packages) · 750.000đ/tháng.

## Case Study: Từ 300k → 750k RSS/Giờ Không Tốn Thêm AP

Player A dùng Joan + Cao Pi cho gather (combat pair, không phải gather). Throughput: ~300.000 RSS/giờ.

Sau khi chuyển sang Sarka + Scipio (cả hai trong roster từ trước, chưa dùng):
- Gathering speed tăng +25%
- Capacity tăng +20%
- Throughput mới: **~720.000 RSS/giờ**

Không cần thêm gem, không cần commander mới. Chỉ đổi pair = **+140% throughput**.

## FAQ

### Tôi không có Sarka thì dùng gì?
Boudica + Scipio là substitute khá tốt (Boudica có march speed passive). Throughput thấp hơn ~15-20% so với Sarka pair.

### Cần star commander lên mấy cho gather?
Sarka và Constance cần ít nhất ★★★ để passive tier 2 active. Full expertise (★★★★★) tốt hơn nhưng không bắt buộc.

### Bot V1 có dùng được khi không có 4 march slot?
Có. Bot V1 optimize theo số march slot hiện có (City Hall level). Dù 2 hay 4 march, bot vẫn assign đúng pair.

## Đọc Thêm

- [Auto Farm 4 RSS Tile Level 5 RoK](/blog/auto-farm-4-rss-tile-level-5-rok)
- [F2P → VIP 5 Roadmap RoK 2026](/blog/f2p-to-vip-5-roadmap-rok-2026)
- [F2P Day 1-30 Beginner Checklist RoK 2026](/blog/f2p-day-1-30-beginner-checklist-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)
  `,
};
