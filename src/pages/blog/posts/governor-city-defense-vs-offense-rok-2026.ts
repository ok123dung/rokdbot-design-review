import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "governor-city-defense-vs-offense-rok-2026",
  title: "Governor City Defense vs Offense RoK 2026 — Khi Nào Đánh Player KvK",
  description: "Governor city defense vs offense RoK 2026: khi nào nên tấn công city player khác, khi nào phòng thủ tốt hơn, math troop loss, và V3 bot execute cả 2 mode theo lệnh R5.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## City Của Mày Là Pháo Đài Hay Mồi Nhử?

KvK không phải chỉ về rally và field battle. Nó còn về **city của mày** — và quyết định defend hay đi attack city địch là một trong những quyết định chiến lược quan trọng nhất mỗi KvK season.

Đa số players không có framework rõ ràng. Họ defend khi sợ, attack khi hứng. Kết quả: troops chết không đáng, city bị zero đúng lúc tệ nhất.

Bài này cho mày math để quyết định — và giải thích bot execute role gì trong mỗi mode.

## Defend City: Khi Nào Worth?

Garrison defend city của mình chỉ có value khi mày **có thứ cần bảo vệ**:

### 3 Tình Huống Defend Worth

**1. RSS trên city vượt warehouse protection**

Warehouse lv25 bảo vệ ~1.200.000 mỗi loại resource. Nếu mày có 5.000.000 food trong city không có warehouse cover → địch pillage được 3.800.000 resource. Trong TH này garrison đáng.

Math: 1.000 T4 garrison = tốn ~800.000 resource train. Nếu garrison đó giữ được 3.800.000 resource → ROI dương rõ ràng.

**2. City nằm trên strategic territory**

Flag của alliance, Lost Temple buffer zone, hoặc territory đang bị contest → garrison city chặn movement địch, giúp alliance maintain zone control. Value phi vật chất nhưng KvK impact rất lớn.

**3. Alliance reinforcement sẵn sàng**

Nếu alliance có 5+ march reinforce city mày → combined garrison power tăng gấp 5-6x. Địch cần rally 3-4 lần mới break → mỗi lần rally thất bại = honor cho mày khi counter-rally sau.

### Khi Nào Không Nên Defend City

- **City ở mid-field không có strategic value**: địch rally thắng → mày mất troops + không có honor đáng kể
- **Power gap địch >50% mạnh hơn mày**: garrison sẽ bị break trong 1 rally, troops dead không thể heal
- **Hospital gần đầy**: wounded troops không heal được → trực tiếp chết

> 🤖 V3 auto-reinforce garrison khi R5 set lệnh, song song với barb chain đạo 2. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Offense: Khi Nào Đánh City Player Khác?

Rally vào city player địch có reward cực cao — nhưng risk cũng cao tương ứng.

### Rally City Player: Break-Even Math

| Scenario | Honor/Win | Troop Loss (3-march rally) | Resource Cost |
|---|---|---|---|
| City player power bằng mày | ~8.000-12.000 | ~3.000 T4 | ~2.400.000 resource |
| City player yếu hơn 40% | ~4.000-6.000 | ~800 T4 | ~640.000 resource |
| City player mạnh hơn 20% | ~2.000-4.000 | ~5.000+ T4 | ~4.000.000+ resource |

**Đánh city player cùng power** có resource/honor rate cực xấu — **200+ resource/honor**, so với barb fort lv5 chỉ **78 resource/honor**.

### 3 Khi Nào Đánh City Player Có Lợi

**1. Target đang peace shield hết, city giàu resource visible**

Sau KvK phase transition, nhiều players hết shield mà không hay biết. Nếu mày scout thấy resource cao + không có garrison = free pillage + honor.

**2. Target yếu hơn rõ ràng (>40% power gap)**

Power gap lớn → loss ratio nghiêng về mày → rally win guaranteed với minimal loss. Honor + resource đủ justify.

**3. Zeroing phối hợp alliance**

Alliance phối hợp zero 1 player địch mạnh: 3-4 rally liên tiếp trong 10 phút → city full dead. Strategic value: loại 1 governor địch ra khỏi chiến trường cả ngày (họ cần speedup heal).

Đây là chiến thuật Phase 3 KvK — không dùng Phase 1 vì cost quá cao.

## Defense vs Offense Framework Theo Phase

| Phase KvK | City Defense | City Offense |
|---|---|---|
| Phase 1 | Defend strategic city + shield non-strategic | Focus barb fort rally, không đánh city |
| Phase 2 | Defend territory city + maintain zone | Đánh weak player city + zeroing coordinated |
| Phase 3 | All-in defend flag + city | All-in offense, zeroing priority target |

Framework này không phải rule cứng — R5 quyết định. Bot execute lệnh của R5, không tự sáng tạo chiến lược.

## City Defense Math: Troop Ratio Tối Ưu

Nếu quyết định defend, composition garrison ảnh hưởng trực tiếp trụ được bao nhiêu rally:

| Composition | Trụ Được | Vs Rally Size |
|---|---|---|
| Infantry 70% / Cavalry 20% / Archer 10% | 3+ rally | 3-march full rally |
| Mixed equal | 1-2 rally | 3-march full rally |
| Cavalry heavy | 1 rally | Sẽ bị flanked |

Infantry heavy garrison với reinforcement từ alliance = nightmare cho kẻ tấn công. Mỗi rally thất bại của địch tốn họ 3.000+ T4 trong khi mày chỉ mất 500-800 T4 garrison.

## Scout Trước Khi Quyết Định

Không bao giờ attack hoặc defend mù. Quy trình scout 30 giây:

1. Tap city địch → xem power
2. Check garrison badge (nếu có badge = có garrison)
3. Check alliance tag → nếu R4+ = alliance sẽ reinforce nhanh
4. Kiểm tra distance → xa quá = march time dài, địch có thể reinforce kịp

Nếu pass được cả 4 điều kiện (yếu hơn, không garrison, không reinforce kịp, gần) → attack worth.

> 🤖 V3 auto-scout trước khi join rally theo lệnh R5. [Xem V3 →](/#packages).

## Trường Hợp Đặc Biệt: Bị Đánh Khi Đang Đi March

March của mày đang đi barb chain → city bị rally → troops trong city không đủ defend → city bị zero.

**Phòng ngừa**:
- Dùng peace shield khi city không có garrison
- Đặt flag city trên territory alliance để có buffer
- V3 auto-recall march khi city HP xuống ngưỡng nguy hiểm (feature V3)

Đây là lý do players dùng bot V3 ít bị zero hơn: **bot không ngủ, alert real-time**.

## Kết Luận

Defense vs offense không phải chọn 1 — mày làm **cả 2** ở đúng thời điểm.

Framework đơn giản:
- **Defend**: city có value cần bảo vệ + có reinforcement + địch không quá mạnh
- **Offense**: target yếu rõ ràng + alliance phối hợp + Phase 2-3 KvK

Bài đọc kèm:
- [Rally Attack vs Defense KvK RoK 2026](/blog/rally-attack-vs-defense-kvk-rok-2026)
- [Field Battle Troop Loss Math RoK 2026](/blog/field-battle-troop-loss-math-rok-2026)
- [Auto Rally Captain RoK 2026](/blog/auto-rally-captain-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)
  `,
};
