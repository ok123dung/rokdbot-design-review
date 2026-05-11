import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "kvk-1-lost-kingdom-specific-guide-rok-2026",
  title: "KvK 1 Lost Kingdom Specific Guide RoK 2026 — Migration + Trial Strategy",
  description: "KvK 1 Lost Kingdom là KvK đầu tiên và quyết định rank server dài hạn. Migration timing, Trial Ground strategy, alliance coordination và cách bot V3 auto-farm honor trong Lost Kingdom mà không bị zeroed.",
  date: "2026-05-11",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## KvK 1 Thua — Server Bạn Trở Thành Farming Ground 3 Mùa Tiếp Theo

KvK 1 Lost Kingdom không giống KvK thông thường. Đây là lần đầu tiên server bạn bước ra ngoài home kingdom và đối mặt với server khác. Không có shield. Không có safe zone. Và kết quả của KvK 1 ảnh hưởng trực tiếp đến **điểm số kingdom leaderboard** — tức là enemy server trong KvK 2, 3, 4 sẽ được phân loại dựa trên performance KvK 1.

Thua KvK 1 = server bạn bị match với server mạnh hơn trong tương lai. Thắng KvK 1 = match với server cùng tầm, KvK fair hơn. Đây là lý do top alliance mọi server đầu tư KvK 1 nghiêm túc từ ngày đầu.

## Cơ Chế Lost Kingdom

Lost Kingdom (LK) là map PvP riêng biệt, mở khi KvK Season bắt đầu. Đặc điểm:

**Migration:**
- Governors muốn tham gia cần migrate city vào Lost Kingdom
- Migration cost: speedup + resource (giảm dần theo thời gian chơi — đọc guide migrate timing)
- Không migrate = không vào LK, không farm honor, không contribute KvK score

**Trial Ground:**
- Zone đặc biệt trong LK dành cho governor power thấp (<20M power thông thường)
- Trial Ground có barb camp riêng và PvP zone giới hạn
- Tốt cho player mới lên trải nghiệm KvK mà không bị zeroed ngay

**Wonder và Holy Site:**
- Wonder (Ark of Osiris equivalent trong LK) cho kingdom massive score bonus mỗi giờ giữ
- Holy Site: chiếm để buff cả alliance
- Ai giữ Wonder lâu nhất = kingdom đó thắng KvK 1

**Honor Sources:**
- Kill barb trong LK: honor per barb cao hơn home kingdom
- PvP kill: honor per troop cao hơn barb
- Holy site contribution: passive honor khi alliance giữ holy site

## Migration Timing — Đừng Vào Quá Sớm, Đừng Quá Muộn

**Sai lầm phổ biến nhất:** migrate ngay ngày KvK mở. Player power thấp vào sớm = target cho enemy zeroing. Không shield trong LK + power thấp + city không hide = lose troops trước khi farm được gì.

**Optimal timing:**
- Ngày 1-3 KvK: chỉ alliance cao nhất (R5/R4 whale) vào đầu để secure Holy Site và scout enemy
- Ngày 3-5: mid-tier (30-80M power) migrate, bắt đầu barb farming và reinforce holy site
- Ngày 5+: player power thấp migrate vào Trial Ground (an toàn hơn)

**Khi nào KHÔNG migrate:**
- Nếu hospital chưa đầy hoặc troops không đủ: heal trước
- Nếu không có alliance shield plan: coordinate với R5 trước
- Nếu troop composition chưa optimize: T4+ quan trọng trong LK PvP

## Trial Ground Strategy

Trial Ground trong LK có barb level phù hợp power thấp. Strategy:

**Barb farming chain (Trial Ground):**
- Barb level 10-20 cho honor/AP ratio tốt cho player <15M power
- Chain barb: kéo rợ liên tục không nghỉ — không cần wait AP regen (dùng speedup nhỏ)
- Combat pets (Iron Wolf tier 1-2): đã cho value kể cả tier thấp

**PvP trong Trial Ground:**
- PvP với player cùng zone — ít rủi ro hơn main LK
- Tuy nhiên: không solo fight nếu không có reinforcement plan. Rally / reinforce với alliance trước

**Avoid being zeroed:**
- Shield khi ngủ (Peace Treaty từ shop)
- Join city vào alliance territory (gần R5 city = có troop đến reinforce nhanh)
- Không march đơn độc vào enemy territory

> 🤖 Bot V3 RokdBot auto-farm barb trong Trial Ground liên tục — không cần manual chain, không miss honor. Auto shield khi detect nguy hiểm. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Bot V3 Làm Gì Khác

Trong Lost Kingdom KvK 1, bot V3:
- **Auto-migrate theo lịch:** tự động migrate khi alliance R5 signal (không vào quá sớm)
- **Barb chain 24/7 Trial Ground:** honor farming không miss khung giờ peak (3-5am)
- **Auto-shield logic:** detect khi enemy march đến gần, tự shield trước khi bị hit
- **Honor tracking:** track progress honor realtime, prioritize high-value barb camp

Kết quả: V3 user trong Trial Ground farm **2-3x honor** so với manual player cùng power level — vì không miss khung giờ barb respawn và không bị zeroed lãng phí troops.

## So Sánh Strategy Theo Power Level

| Power level | Zone tốt nhất | Contribution | Risk |
|---|---|---|---|
| <15M | Trial Ground | Barb farming honor | Thấp nếu shield đúng |
| 15-50M | LK main (gần alliance) | Barb + PvP support | Trung bình |
| 50M+ | LK main, holy site | Holy site capture + PvP | Cao — cần coordination |
| 80M+ whale | Wonder assault | Wonder siege | Rất cao — need full alliance |

## Alliance Coordination — Không Lẻ Loi

KvK 1 là team event. Solo player không thể ảnh hưởng kết quả — chỉ collect personal honor. Những gì alliance cần coordinate:

**Migration wave:** R5 quyết định timing, member follow. Không self-migrate trước wave.

**Holy site assignment:** 1-2 alliance strong assign defend holy site per site. Không ai march vào alone.

**Wonder siege:** cần full alliance online cùng lúc. R5 set rally time, member login và rally.

**Heal cycle:** khi troop loss, về heal ngay. Không "fight until zero" vì lose T5 trong LK = weeks recovery.

## FAQ

### KvK 1 có shield không?

Không có shield trong Lost Kingdom. Peace Treaty (bought) vẫn apply nhưng phải chủ động mua và apply. Không tự động như home kingdom.

### F2P có nên vào KvK 1 không hay skip?

Nên vào nhưng vào Trial Ground, không cố vào main LK. Honor trong Trial Ground vẫn contribute kingdom score. Skip KvK hoàn toàn = miss honor + miss season reward lớn.

### Bot có safe dùng trong KvK không?

Bot RokdBot sử dụng cloud server, không inject client — không detect được theo cơ chế Lilith thông thường. Tỷ lệ ban <0.1% qua 8 KvK seasons. Barb farming là activity bình thường không khác player manual.

## Bắt Đầu Ngay

KvK 1 Lost Kingdom quyết định match-making dài hạn của server:
- Migrate đúng timing (ngày 3-5, không ngày 1)
- Trial Ground cho power thấp — barb farming honor
- Coordinate với alliance trước khi migrate

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Lost Kingdom KvK Strategy RoK 2026](/blog/lost-kingdom-kvk-strategy-rok-2026)
- [KvK Season 8 Complete Guide RoK 2026](/blog/kvk-season-8-complete-guide-rok-2026)
- [KvK Phase 1 Stronger Wars Guide RoK 2026](/blog/kvk-phase-1-stronger-wars-guide-rok-2026)
  `,
};
