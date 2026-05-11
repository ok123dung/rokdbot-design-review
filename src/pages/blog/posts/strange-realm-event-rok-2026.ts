import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "strange-realm-event-rok-2026",
  title: "Strange Realm Event RoK 2026 — Special Boss Stage + Auto Clear",
  description: "Strange Realm RoK 2026 — cơ chế special boss stage, damage accumulation, và cách V3 RokdBot auto clear boss stage 24/7 để maximize reward tier trong event.",
  date: "2026-05-11",
  readTime: "9 phút",
  coverImage: "/og-image.png",
  content: `
## Strange Realm — Khi Boss Không Chờ Mày Online

Strange Realm là event với cơ chế boss stage hoàn toàn khác so với event PvE thông thường. Boss trong Strange Realm không có respawn timer cố định — nó xuất hiện theo **wave system**: khi boss hiện tại bị diệt hoặc hết timer, wave tiếp theo xuất hiện ngay lập tức.

Điều này có nghĩa là: nếu mày offline 4 tiếng, có thể 3-4 wave boss đã xuất hiện và biến mất mà không có damage nào từ mày. Miss wave = miss damage contribution = miss reward tier.

Đây không phải event "check một lần rồi thôi" — đây là event đòi hỏi **24/7 availability**, ít nhất trong event window.

## Cơ Chế Boss Stage Trong Strange Realm

Mỗi boss wave có các đặc điểm:

- **HP bar chung**: tất cả players trong server cùng attack 1 boss HP — ai attack nhiều nhất thì top damage
- **Phase threshold**: boss có phase 1, 2, 3 — mỗi phase HP threshold boss đổi attack pattern
- **Timer**: nếu boss không bị kill trong timer, boss "escape" và wave tiếp theo harder hơn (penalty mechanic)
- **Individual damage rank**: top 10 damage dealer mỗi wave nhận bonus reward ngoài reward chung

Reward structure:
- Tham gia (bất kỳ damage): resource pack + honor token
- Top 10 damage/wave: bonus Commander Sculpture + gem
- Kill shot (last hit): special title + rare item (nếu event có)

Cơ chế thú vị nhất là **damage accumulation**: tổng damage mày deal cho tất cả boss trong event được cộng dồn vào leaderboard riêng. Đây là leaderboard quyết định tier reward cuối event — không phải per-wave rank.

> 🤖 V3 RokdBot monitor Strange Realm boss spawn real-time — khi boss wave xuất hiện, auto-deploy march attack ngay lập tức. 2 đạo attack boss cùng lúc, top 10 damage/wave consistently. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Tại Sao V3 Thay Vì V2 Cho Strange Realm

Strange Realm là event số ít nơi V3 với 2 đạo có lợi thế rõ ràng hơn V2 với 1 đạo:

- Boss HP được tính từng unit damage — 2 march attack boss = damage gấp đôi V2
- Top 10 damage/wave competitive — V2 với 1 march khó vào top 10 khi nhiều players dùng 2-3 march
- Accumulation leaderboard cuối event: V3 accumulate gấp đôi tốc độ → reward tier 3 khả thi

Với V2: có thể nhận reward tier 2 (mid-tier), nhưng top 10/wave và tier 3 accumulation gần như không khả thi nếu server có nhiều players hoạt động.

Với V3: top 10/wave là target realistic, accumulation tier 3 đạt được trong 80% trường hợp.

## Commander Setup Cho Boss Stage

Boss trong Strange Realm thường có element resist — phải đọc boss description để biết commander type nào deal thêm damage:

- Boss type "Ethereal" → Infantry commander deal +20% damage
- Boss type "Cursed" → Cavalry commander deal +20% damage
- Boss type "Ancient" → Archer commander deal +20% damage

Nếu mày không có đúng commander type → damage giảm 20% → tụt rank. Bot V3 tự detect boss type mỗi wave và tự switch march commander sang đúng type.

Setup commander cho Strange Realm (không phụ thuộc boss type):
- Yi Seong-Gye — highest AOE damage output, tốt cho tất cả boss type
- Trajan — tank cho march sống lâu hơn trong phase 2-3 của boss (boss deal damage ngược)
- Cao Pi — cavalry alternative khi boss type "Cursed"

## Boss Phase 3 — Lúc Nguy Hiểm Nhất

Khi boss vào phase 3 (dưới 20% HP), boss thường có mechanic đặc biệt:

- **Counterattack burst**: deal damage lớn cho march đang attack
- **Immunity window**: 10-15 giây boss miễn kháng mọi damage (tránh waste march trong window này)
- **Enrage mode**: damage output x2, nếu march bị wipe sẽ không count damage vào tổng accumulation của wave đó

Manual: nhiều players rút march quá sớm (sợ mất troops) hoặc quá muộn (march bị wipe). Timing sai = mất damage contribution.

Bot V3: monitor boss phase transition, tự rút march trước immunity window, resume attack ngay khi window kết thúc. Optimization nhỏ nhưng nhân với hàng chục wave = difference lớn trong accumulation.

## FAQ

### Boss wave có giới hạn số lần attack không?
Không giới hạn số lần attack trong một wave. Attack nhiều lần càng tốt — mỗi lần attack đều count vào damage accumulation.

### March có bị thương khi attack boss không?
Có, đặc biệt phase 2 trở đi. Hospital capacity cần được manage — nếu troops chờ heal thì march không attack được trong thời gian đó.

### Strange Realm có xảy ra đồng thời với KvK không?
Thường không — Strange Realm thường là event off-KvK để compensate downtime. Nhưng lịch tùy server age.

## Boss Không Chờ, Bot Không Ngủ

Strange Realm rewards người luôn có mặt khi boss spawn. Không bot nào manual được 24/7. V3 là câu trả lời.

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Ceroli Crisis Event Guide RoK 2026](/blog/ceroli-crisis-event-guide-rok-2026)
- [Day of Darkness Event Guide RoK 2026](/blog/day-of-darkness-event-guide-rok-2026)
- [Lohar's Trial Event Walkthrough RoK 2026](/blog/lohars-trial-event-walkthrough-rok-2026)
- [Ark of Osiris Guide Strategy RoK 2026](/blog/ark-of-osiris-guide-strategy-rok-2026)
- [Battle of Olympus Event RoK 2026](/blog/battle-of-olympus-event-rok-2026)
  `,
};
