import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "pet-expedition-stamina-rok-2026",
  title: "Pet Expedition Stamina Farming RoK 2026 — Cách Cày Pet Material Tối Ưu",
  description: "Pet Expedition là nguồn material pet F2P bền vững nhất Season 8. Hướng dẫn tối ưu stamina, chọn expedition level đúng, schedule ngày, và cách bot V2 auto-run expedition 24/7 để material không bao giờ bị waste.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Expedition Stamina Đang Rot Không Dùng Đến

Mỗi ngày Pet Expedition sinh ra **stamina cố định**. Bạn không claim, không dùng → stamina đó bị cap và dừng sinh. Không cumulative, không rollover. Trong 90 ngày F2P cố gắng reach Iron Wolf tier 3: nếu miss 15-20 ngày expedition (nghỉ, quên, bận) → thiếu nguyên liệu đúng lúc tier-up, kế hoạch 90 ngày trở thành 120+ ngày.

Pet Expedition là **nguồn material bền vững nhất** trong game — không cần event, không cần whale, chỉ cần login mỗi ngày. Nhưng consistent daily login là thứ khó duy trì nhất. Bài này hướng dẫn cách optimize expedition route và tại sao automation là giải pháp duy nhất để không waste stamina.

## Cơ Chế Pet Expedition

**Stamina system:**
- Stamina tối đa: 120 points (không phải tất cả server đều giống nhau, phổ biến nhất là 120)
- Stamina recharge: 1 point / 10 phút = 6 points/giờ = 144 points/ngày
- Cap 120 → recharge dừng khi đầy
- Kết luận: cần claim **ít nhất 1 lần / ngày** để không bị overflow và lose stamina

**Expedition types và reward:**
- **Normal Expedition:** stamina thấp, reward pet food phổ thông (tất cả pet)
- **Special Expedition:** stamina cao hơn, reward pet material specific (Iron Wolf material, Hawk material)
- **Boss Expedition (tuần):** reset weekly, reward evolution material lớn hơn

**Key insight:** Special Expedition là mục tiêu chính. Pet food Normal thường không thiếu — thiếu là **evolution material** để tier-up. Special Expedition cho Iron Wolf Material, Hawk Material thực sự quyết định tier-up timeline.

## Route Tối Ưu Theo Giai Đoạn

### Giai đoạn 1 (pet level 1-max trong tier 1)

Priority: Normal Expedition để farm pet food nhanh. Level up trong tier không tốn evolution material — chỉ tốn pet food.

Stamina split:
- 80% Normal Expedition (pet food volume)
- 20% Special Expedition (start stockpile evolution material)

### Giai đoạn 2 (chuẩn bị tier-up)

Priority: Special Expedition cho evolution material của pet mục tiêu. Dừng Normal khi pet food đã đủ cho level max trong tier.

Stamina split:
- 20% Normal Expedition (chỉ đủ maintain pet food)
- 80% Special Expedition (evolution material cho Iron Wolf / Hawk / Stone Bear)

### Giai đoạn 3 (sau tier-up, trong tier mới)

Repeat cycle: back to pet food farming để level up trong tier mới.

## Expedition Level Selection — Đừng Chạy Level Cao Nhất Nếu Stamina Limited

Nhiều player hiểu nhầm: level expedition cao hơn → reward tốt hơn per run. Đúng per run. Nhưng stamina cost cũng cao hơn — **reward per stamina có thể thấp hơn level cao**.

Kiểm tra bảng:

| Expedition level | Stamina cost | Pet material reward | Material/stamina ratio |
|---|---|---|---|
| Level 5 | 20 stamina | 3-4 material | 0.175/stamina |
| Level 8 | 35 stamina | 5-6 material | 0.157/stamina |
| Level 10 | 50 stamina | 7-8 material | 0.15/stamina |
| Level 6 (sweet spot) | 25 stamina | 4-5 material | 0.18/stamina |

Level 6-7 thường là sweet spot material/stamina. Level 10 chỉ tốt hơn khi có stamina dư thừa (bot chạy 24/7, không cap).

## Vấn Đề Tự Farm Expedition Thủ Công

**Stamina overflow:** Wake up buổi sáng, stamina đã full từ 3am → 5 tiếng overflow không dùng. Mỗi ngày lose 30 stamina points như vậy = 900 stamina/tháng lost = khoảng 135-180 pet material lost.

**Expedition không chạy đúng type:** Quên switch từ Normal sang Special khi cần evolution material. 1 tuần chạy nhầm = mất 7 ngày evolution material farming.

**Boss Expedition reset:** Weekly reset không nhắc nhở trong game. Miss 1 tuần = mất lớn nhất trong calendar.

**Manual time cost:** Claim, navigate expedition menu, select route, confirm — 3-5 phút/lần × 2 lần/ngày = 10 phút/ngày × 30 ngày = 5 tiếng/tháng làm việc lặp đi lặp lại.

> 🤖 Bot V2 RokdBot auto-run Pet Expedition theo schedule, không bao giờ overflow stamina. Special Expedition được prioritize khi detect evolution material cần thiết. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Bot V2 Làm Gì Khác

Bot V2 quản lý expedition:
- **No-overflow schedule:** run expedition vào đúng giờ trước khi stamina cap, không bao giờ lose stamina
- **Auto type selection:** Normal vs Special tự động theo pet material inventory — khi evolution material thiếu, switch sang Special
- **Boss Expedition alert:** weekly reset được claim đầy đủ, không miss
- **Level optimization:** chạy expedition level có material/stamina ratio cao nhất, không chỉ level cao nhất

Kết quả: V2 user collect **25-35% nhiều material hơn** player manual cùng số ngày — chỉ từ không overflow stamina và đúng expedition type.

## So Sánh Material Farming 90 Ngày

| Setup | Pet material/ngày | 90-ngày total | Iron Wolf tier 3 ETA |
|---|---|---|---|
| Manual (miss 10 ngày, overflow 30%) | ~18-22 | ~1.800 | 120-150 ngày |
| Manual (perfect, không miss) | ~28-32 | ~2.700 | 90-100 ngày |
| V2 bot (no miss, no overflow) | ~36-40 | ~3.400 | 70-80 ngày |

Perfect manual = impossible dài hạn. Bot V2 = consistent như perfect manual mọi ngày.

## FAQ

### Pet Expedition stamina cộng dồn qua ngày không?

Không. Stamina cap ở 120 (hoặc giới hạn server). Overflow bị mất. Đây là lý do automation quan trọng — không thể "bù" ngày hôm qua.

### Special Expedition có mở từ đầu hay phải unlock?

Cần pet đạt tier nhất định để mở Special Expedition tương ứng. Tier 2 pet unlock Special Expedition cho evolution material tier 2 → tier 3. Không thể farm evolution material tier 3 khi pet còn tier 1.

### Boss Expedition reset ngày mấy trong tuần?

Thông thường reset thứ Hai (Monday reset kiểu UTC). Kiểm tra in-game timer. Boss Expedition là reward lớn nhất trong tuần — đừng miss bất kể cách nào.

## Bắt Đầu Ngay

Pet Expedition là nguồn material free bền vững nhất — nhưng chỉ khi không bỏ ngày nào:
- Claim trước khi stamina cap (120 points)
- Switch Special Expedition khi cần evolution material
- Boss Expedition weekly không bỏ

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Pet System Tier List RoK 2026 — Iron Wolf vs Hawk vs Stone Bear](/blog/pet-system-tier-list-rok-2026)
- [Pet Bonding Resources Optimization RoK 2026 — F2P Pet Maxed Trong 90 Ngày](/blog/pet-bonding-resources-optimization-rok-2026)
- [Commander Expedition Stamina Farming RoK 2026](/blog/commander-expedition-stamina-farming-rok-2026)
  `,
};
