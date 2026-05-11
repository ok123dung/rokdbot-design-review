import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "richard-i-garrison-guide-rok-2026",
  title: "Richard I Garrison Guide RoK 2026 — Defense Infantry Tank Pair Trajan",
  description: "Richard I RoK 2026: cơ chế garrison defense infantry, pair tối ưu với Trajan, talent tree tank thành, và cách bot V1 tự động defend city 24/7 trong KvK.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Thành của mày bị rally 3 lần đêm qua — và mày không biết

KvK worst case scenario không phải là bị đánh khi mày online. Worst case là bị đánh **3am khi mày đang ngủ**, troops defend không đủ, thành bị zeroed, 20 triệu resources bay màu. Richard I + Trajan pair đúng cách = **wall mà địch nản không muốn rally tiếp**.

Vấn đề: garrison defense tốt đòi hỏi reinforce đúng lúc, chọn đúng commander, và không bao giờ bỏ thành undefended. Làm thủ công — không khả thi 14 ngày KvK liên tục.

## Cơ chế garrison defense của Richard I

**Passive "Lionheart"** — tăng defense của tất cả troop types trong garrison **+25%** khi Richard I là garrison commander chính. Đây là passive số 1 garrison defense toàn game — không commander nào cao hơn.

**Active "Holy Warrior"** — giảm attack của địch **-15%** trong 3 giây đầu combat, cộng thêm heal cho garrison troops sau skill. Tạo ra cửa sổ time đầu combat mà garrison troops không bị damage tối đa.

Kết hợp với **Trajan secondary:**
- Trajan passive → thêm defense layer khi army size garrison lớn
- Trajan active → counterattack damage khi defend
- Trajan + Richard = **double defense stack** — một offensive, một defensive

Math thực tế: Richard I + Trajan garrison vs rally enemy không có anti-garrison specialist:
- Defense effective HP = base HP × 1.25 (Richard) × 1.1 (Trajan) = **1.375x base**
- Rally cần **~37% nhiều troops hơn** để break garrison cùng level

## Pain: thành tốt cũng vô nghĩa nếu không có người canh

**Miss reinforce timing** — Richard I garrison mạnh nhưng cần troops. Nếu mày không reinforce đúng lúc, city chỉ có shield không có troops = vẫn bị zeroed khi shield hết.

**Bỏ lỡ night rally** — địch KvK học giờ VN, rally lúc 2-4am là chiến thuật phổ biến. 95% players offline lúc đó.

**Talent tree sai** — nhiều người build Richard I theo open field infantry, bỏ qua Fortified node trong garrison tree → mất 15-20% defense passive.

**Không rotate garrison commander** — khi city không bị attack, Richard I nên ra field farm. Thủ công = quên rotate, lãng phí 6-8 tiếng farm mỗi ngày.

## Bot V1 tự động defend với Richard I

Gói **V1 Nâng Cao 750.000đ/tháng** bao gồm defense module:

- **Auto garrison assignment** — khi shield sắp hết hoặc rally enemy detected, bot tự set Richard I vào garrison và reinforce
- **Day/night rotation** — ban ngày Richard I ra field farm barb; ban đêm tự về garrison defend
- **Troop composition optimize** — bot maintain đủ infantry garrison ratio, không để empty city
- **24/7 defense** — đêm KvK tự defend, sáng tự resume farming

> 🤖 Richard I defend city 24/7 kể cả khi mày ngủ — V1 auto garrison rotation. [Xem V1 Nâng Cao →](/#packages) · 750.000đ/tháng.

## Talent tree Richard I 2026 (garrison focus)

**Cây Infantry (40%):**
- Strong of Body (max) → infantry HP tăng = garrison survive lâu hơn
- Phalanx → infantry defense
- Call of the Pack → damage counterattack khi garrison defend

**Cây Leadership (40%):**
- Rejuvenate (max) → heal troops trong combat — cực quan trọng cho garrison defend lâu
- Fortified → garrison defense bonus thêm
- All For One → damage burst đầu combat

**Cây Garrison (20% nếu unlock):**
- Guardian → reduce troop death rate
- Iron Will → infantry survive khi HP thấp

## Pair commander trong garrison

| Primary | Secondary | Điểm mạnh |
|---|---|---|
| Richard I | Trajan | Double defense tank |
| Richard I | Constantine | AOE counterattack + heal |
| Richard I | Mehmed II | Defense + counterattack damage |

**Tránh pair** Richard I với open field commander như Yi Seong-Gye secondary — YSG passive không có hiệu quả trong garrison.

Tham khảo thêm: [Mehmed II Guide RoK 2026](/blog/mehmed-ii-guide-rok-2026).

> 🤖 Không bao giờ bị zeroed khi ngủ nữa — V1 auto defend + Richard I garrison. [V1 →](/#packages)

## FAQ

### Richard I có tốt cho open field không?
Không phải meta cho open field — defense passive không active khi marching. Richard I là garrison/reinforce specialist. Nếu cần open field infantry, dùng Leonidas hoặc Mulan primary.

### Bao nhiêu troops cần giữ trong garrison để Richard I effective?
Tối thiểu **500.000 infantry** trong garrison để activate full Trajan stack. Dưới ngưỡng này, double defense không maximize. Bot V1 auto-maintain garrison threshold này.

### Shield hay Richard I garrison tốt hơn khi bị target?
Cả hai — shield là hard protection không ai phá được. Nhưng shield tốn Gems/mày phải active thủ công. Richard I garrison là passive defense mà không cần chi phí. Combo shield + Richard I garrison = best protection.

## Bắt đầu ngay

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Mehmed II Guide RoK 2026 — Cavalry Rally Conqueror](/blog/mehmed-ii-guide-rok-2026)
- [KvK 1 Lost Kingdom Specific Guide RoK 2026](/blog/kvk-1-lost-kingdom-specific-guide-rok-2026)
- [Charles Martel F2P Guide RoK 2026](/blog/charles-martel-f2p-guide-rok-2026)
  `,
};
