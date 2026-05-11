import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "power-calculator-rok-2026",
  title: "Power Calculator RoK 2026 — Tính Power Tổng + Per Source Breakdown",
  description: "Power trong RoK đến từ 6 nguồn khác nhau — troop, building, research, commander, alliance, và kills. Biết tỷ lệ contribution của từng nguồn giúp mày farm Power hiệu quả nhất theo phase. Math + breakdown thực tế 2026.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Power 98M hay Power 45M — số này đến từ đâu?

Khi mày nhìn vào profile một player 98M Power, câu hỏi đúng không phải là "họ đã chơi bao lâu?" mà là "họ farm Power từ nguồn nào nhiều nhất?"

Vì Power trong RoK không đến đều từ mọi nguồn. Có nguồn cho 40% tổng Power. Có nguồn chỉ cho 5%. Nếu mày đang waste thời gian vào nguồn 5% trong khi bỏ qua nguồn 40% — mày đang chơi sai game.

Bài này breakdown cụ thể từng nguồn, tỷ lệ thực tế, và đâu là nơi bot farm Power hiệu quả nhất.

## 6 Nguồn Power — Tỷ Lệ Thực Tế

### Nguồn 1: Troops (40-45% tổng Power)

Đây là nguồn Power lớn nhất. Mỗi troop đóng góp Power theo tier:

- T1: 12 Power/troop
- T2: 35 Power/troop
- T3: 90 Power/troop
- T4: 220 Power/troop
- T5: 480 Power/troop

**Ví dụ thực tế:**
- 300k T4 Infantry = 66M Power từ nguồn này
- 150k T4 Cavalry = 33M Power
- 100k T5 Infantry = 48M Power

Player 98M Power trên thường có 350-400k T4 + 50-100k T5 → 80-85M từ troop alone.

### Nguồn 2: Research (25-30% tổng Power)

Research là nguồn Power lớn thứ 2 — nhưng phân bổ không đều:

- Military tree (full): 15-18M Power
- Economic tree (full): 8-10M Power
- Science tree (full): 5-7M Power
- Development tree (full): 6-8M Power

**Key insight:** Research Power đến mostly ở cuối tree (node cuối cho nhiều nhất). F2P player hay unlock đủ node nhỏ nhưng không đến được cuối tree vì thiếu resource.

> 🤖 V2 RokdBot auto-research theo priority queue — military tree trước, economic sau. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

### Nguồn 3: Building (15-20% tổng Power)

Buildings cho Power ổn định và không mất — khác với troop (troops chết = mất Power tạm thời trong KvK):

- City Hall 25: 1,2M Power
- Hospital max: 800k Power
- Barracks max (4 cái): 600k Power
- Academy max: 400k Power
- Farm/Quarry/Lumber/Gold Mine max mỗi loại: 200-300k

Tổng từ building: 5-8M Power (max city)

### Nguồn 4: Commander (10-15% tổng Power)

- Commander lv60: 15.000 Power/commander
- Commander lv60 + Expertise: 35.000 Power/commander
- Star level cũng đóng góp: 5★ commander = +10.000 Power so với 3★

Với 10 commander lv60 expertise: 350.000 Power — không nhiều nhưng ổn định.

### Nguồn 5: Kills (3-5% tổng Power)

- Kill Power = (T4 kill × 30) + (T5 kill × 65)
- Đây là Power từ kills lịch sử của account
- Với 150k-200k total kills: khoảng 4,5M-6M Power

Nguồn này tăng chủ yếu trong KvK — và đây là nơi bot honor farming đóng góp gián tiếp.

### Nguồn 6: Alliance (1-3% tổng Power)

- Alliance tech + buff cho khoảng 1-2M Power tùy alliance level
- Không phụ thuộc vào cá nhân player nhiều

## Power Growth Rate Thực Tế

**Không có bot (manual 6h/ngày):**
- Troop: +150-200k T4/tháng = +33-44M Power/tháng (nếu đủ RSS)
- Research: +500k-1M Power/tháng
- Building: +200-400k Power/tháng
- **Tổng: ~2-4M Power/tháng thực tế (bottlenecked bởi RSS)**

**Có bot V2 (gather 24/7):**
- RSS không bị bottleneck → training queue không đứng
- Troop: +350-450k T4/tháng = +77-99M Power nếu bắt đầu từ 0
- Research: +800k-1,5M Power/tháng (không bị interrupt)
- **Tổng: 5-8M Power/tháng sau khi đã có army base**

Case study từ bot-vs-bluestacks: sau 300 ngày, cloud bot đạt 78M Power so với manual 25M — gap 3x chủ yếu đến từ troop farming không bị gián đoạn.

## Formula Ước Tính Power Hiện Tại

Nếu mày muốn kiểm tra account đang ở đâu:

- Troop Power = (số T4 × 220) + (số T5 × 480) + (số T3 × 90)
- Research Power = ước tính 70% max nếu active 1 năm, 90% nếu 2 năm
- Building Power = ước tính 5-6M nếu CH 25
- Commander Power = (số commander lv60 expertise × 35.000)
- Total ≈ Troop + Research + Building + Commander + Kills + Alliance

## Nguồn Power Nào Nên Ưu Tiên Theo Phase?

| Phase | Priority | Lý Do |
|---|---|---|
| Early (CH <20) | Building > Research | Unlock gate nhanh nhất |
| Mid (CH 20-23) | Research Military > Troop | ROI Power/RSS tốt hơn troop |
| Pre-KvK (CH 23+) | Troop >>> tất cả | 220 Power/troop, scale tốt nhất |
| KvK | Kill Power + Troop maintain | Keep Power, farm kills |
| Post-KvK | Research Economic | Chuẩn bị RSS cho troop round tiếp |

## FAQ

### Power drop sau KvK có phải bình thường không?
Bình thường — troop chết trong KvK = Power giảm tạm thời. Kill Power tăng bù lại một phần. Power thực sau heal hospital = về gần mức ban đầu.

### Bot có giúp tăng Kill Power không?
Gián tiếp — barb chain farming (rợ chết) cộng Kill Power nhỏ. Kill Power lớn đến từ KvK combat real player, không phải barb.

### Nên farm Power từ troop hay research trước?
Nếu đang CH 20-22: research military trước (ROI Power/RSS tốt hơn). Nếu đang CH 23+: troop T4 mass farming cho Power nhanh hơn.

## Bắt đầu ngay

**V2 Cao Cấp 900.000đ/tháng** — training + gather 24/7, Power không bị bottleneck:
- Auto gather RSS theo priority
- Training queue không đứng nhờ RSS continuous
- Research auto theo military tree priority

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Resource Calculator RoK 2026](/blog/resource-calculator-rok-2026)
- [F2P to VIP2 Bot Progression Roadmap RoK 2026](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
- [Returning Player Guide RoK 2026](/blog/returning-player-guide-rok-2026)
  `,
};
