import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "auto-rally-captain-rok-2026",
  title: "Auto Rally Captain RoK 2026 — Bot tự join rally pháo đài 24/7, không bỏ lỡ ca đêm KvK 3-5am",
  description: "Auto Rally Captain RokdBot tự động join rally alliance + launch rally khi captain — frame-perfect skill timing, không miss rally KvK đêm 3-5am giờ VN. Phân tích rally mechanics, commander setup rally lead, throughput 35-50 rally/ngày KvK Season 7. ROI tốt nhất với V3 1.2M.",
  date: "2026-05-09",
  readTime: "7 phút",
  coverImage: "/blog-images/auto-rally/img-11-1ANrHm44.png",
  content: `
## Top 7 Kingdom KvK quyết định bằng Rally throughput — không phải bằng troops

Lilith công khai: chỉ **Top 7 Kingdoms** trong mỗi KvK Season được nhận reward Kingdom rank — dựa vào **tổng Honor Points cộng dồn của toàn kingdom**. Top 50 Alliances cũng được reward riêng cho member.

Honor đến từ 4 nguồn chính: kéo rợ thường, PvP kill troops địch, hạ pháo đài alliance, và rally pháo đài barbar lv 30+.

Trong đó, **rally chiếm 60-70% Honor** của top alliances — vì:

- Rally pháo đài barbar lv 30+ = **5.000-10.000 Honor / kill** (gấp 10x rợ thường)
- Rally fortress alliance địch = Honor lớn + kingdom domination buff
- Rally sanctum / holy site (mở mỗi 3 ngày, hold 4h) = alliance buff KvK win condition

Top 7 Kingdom thắng KvK không phải vì troops mạnh — mà vì **rally throughput** cao. Tức tổng số rally cycles alliance hoàn thành / 14 ngày KvK season.

## Rally trong RoK là gì?

Rally = group attack với multiple alliance members joined troops vào 1 march duy nhất.

Mỗi rally:
- **Captain** tap target trên map → tap "Tập Hợp" → set timer (5/10/15/30 phút)
- Trong window timer, **alliance members other** có thể join troops vào rally
- Khi timer hết, march tự động launch với **TỔNG quân tất cả người join**
- Combat phase: rage builds → active skill triggers ở 1.000 → AOE wipe garrison

Targets rally:

| Target | Honor / kill | Reward chính |
|---|---|---|
| **Pháo đài Alliance** (Fortress lv 1-5) | ~3.000-8.000 | Territory + kingdom domination |
| **Sanctum / Holy Site** | ~2.000-5.000 + buff | Alliance buff (mở mỗi 3 ngày, hold 4h) |
| **Pháo đài Barbar lv 30+** | **5.000-10.000** | Highest Honor/kill, sculpture + RSS |
| **Governor City** (KvK PvP) | varies | Kill points cho alliance contribution |

Solo KHÔNG thể hạ rally targets. Rally là cách **DUY NHẤT** để get high-value Honor + kingdom buff.

## Vấn đề thực tế khi rally thủ công

5 pain rất thật mà top alliance member phải sống chung:

### Schedule conflict — alliance plan vào giờ bạn busy
Alliance lập schedule rally cố định: 8pm / 10pm / 1am / 3am / 5am giờ VN. Mỗi window 1 wave rally (3-5 fortress / wave). Bạn bận ăn cơm / công việc / con cái → miss wave → không có loot, không contribute Honor.

### KvK 3-5am giờ VN — peak action time
KvK matchup chính (Field of Honor, Altar capture, Pháo đài flip) thường rơi vào **3-5am giờ Việt Nam** (UTC server). 14 đêm KvK liên tục — ai thức nổi? Bỏ 1 đêm = mất rank Honor. 3 đêm = rớt từ Top 10 alliance xuống rank 30+.

### Captain responsibility — chọn sai = team waste
Nếu bạn là rally captain, chọn target sai cấp / wrong timing / wrong commander pair → toàn alliance lãng phí troops + AP. **Pressure cao** — người mới không dám làm captain.

### Frame-perfect skill timing trên garrison
Garrison defense fortress có **2.000-10.000 troops**. Active skill cast đúng frame max overlap = **+35-40% damage** = giảm 1-2 cycle combat. Manual <200ms reflex sau khi thức 2-3 đêm — gần như impossible.

![Commander rage đầy 1.000 + AOE skill đang trigger trong combat — frame perfect khi cluster overlap đỉnh điểm](/blog-images/auto-rally/img-11-1ANrHm44.png)

### Loot expire 24h — quên claim mất hết
Mỗi rally win → loot popup expire sau 24h. 30 rally/đêm × 24h reminder = **không khả thi manual**. Quên claim 1 đêm = mất sạch reward đêm đó.

> 🤖 Không bỏ lỡ rally đêm KvK 3-5am — [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng, ROI tốt nhất / đạo cho rally + chain combo.

## Auto Rally RokdBot — bot giúp người chơi cái gì cụ thể

### Auto Join — không miss rally nào
Bot monitor alliance rally panel mỗi 30 giây. Khi alliance member open rally → bot **auto join troops** (config được troops type + commander pair). Bạn ngủ — bot vẫn join 35-50 rally/đêm KvK.

### Auto Captain — launch rally khi đủ alliance online
Config bot là rally captain → bot tự check alliance member ≥3 online → tự open rally vào fortress level optimal cho commander level. Set timer 5-10 phút theo schedule alliance.

### Frame-perfect skill timing
Monitor garrison positioning frame-by-frame, trigger active skill ở frame max overlap. Damage tăng **35-40%** so với auto-cast của game → giảm cycle combat → rally faster.

### Auto claim ngay sau rally
Loot + commander XP + sculpture drop claim tức thì sau combat. Không bao giờ expire 24h, không miss reward.

### Smart heal + return
Wounded troops auto vào hospital, speedup auto-spend, troops sẵn sàng cho rally tiếp theo trong **60 giây**.

### 24/7 cloud — KvK đêm 3-5am bot tự lo
Cloud server riêng, IP riêng. Bạn ngủ 11pm, sáng dậy 7am thấy **+30k Honor** từ rally đêm.

## Throughput rally Auto Rally — alliance benchmark + bot capability

> 📊 Lưu ý: Rally pháo đài có reward stream riêng (Kill Points + Honor + sculpture + RSS), **KHÔNG tính vào Victory counter** (Victory chỉ đếm solo barb chain). Số dưới đây dựa trên **benchmark alliance Top 30 server + bot capability**, không trực tiếp từ log Victory của khách case study.

Theo benchmark alliance Top 30 server trong KvK season:

- **Rally wave / ngày**: 3-5 wave (alliance schedule cố định 8pm / 10pm / 1am / 3am / 5am giờ VN)
- **Rally / wave**: 3-5 fortress (mix barb fort lv 30+ / pháo đài alliance / sanctum)
- **Tổng rally / ngày KvK**: ~15-25 rally cho alliance member active manual

Bot Auto Rally capability:

| Khả năng | Manual | Bot |
|---|---|---|
| Cover rally đêm 3-5am giờ VN (14 đêm KvK) | Mất ngủ → bỏ ~30% rally đêm | **100%** không miss |
| Frame-perfect skill timing trên garrison | ±500ms (mệt mỏi) | ±50ms |
| Auto claim loot 24h expiry | 70-80% claim được (quên) | **100%** |
| Multi-instance rally (rally đồng thời nhiều fortress) | 1 march/lần | **2-4 đạo** (V3+/Premium) |

Bot không tăng số rally tổng của alliance — nhưng tăng **% bạn join được** từ ~50-70% manual lên **95-100%** với bot. Đây là khác biệt quyết định ranking Top 10 vs Top 30 alliance.

![Battle reports rally pháo đài barbar Cấp 30-38 (60.000-205.000 troops/target) — tier sinh Honor 5.000-10.000/kill, bot cover được 24/7 không miss](/blog-images/auto-rally/img-12-1UPynHjy.png)

Khách case study Premium VIP đang trong alliance Top 30 server, chạy bot 17 tháng liên tục. Power 98M + sculpture stockpile 7.000 purple + 422 gold = **dấu hiệu rally throughput cao** (sculpture chủ yếu từ pháo đài barbar lv 30+ rally drop).

## Commander setup tối ưu cho Rally Lead

### F2P friendly (không cần whale)
- **Charles Martel + Richard I** — infantry rally focus garrison defense
- **Constantine + Theodora** — Peacekeeping AOE, F2P viable cho pháo đài barbar

### Mid tier (1-2 năm chơi)
- **Yi Seong-Gye + Cao Pi** — archer rally cho damage cluster garrison (skill range lớn nhất game)
- **Mehmed II + Cao Cao** — cavalry rally KvK (open field + fortress flip)

### Pro tier (whale / 3+ năm)
- **Yi Seong-Gye + pet Hawk** — pet Hawk +15-25% skill range cho AOE max overlap
- **Mehmed II + pet Iron Wolf** — meta cavalry rally Season 8 sau pet system update

Bot **tự nhận diện** commander pair tối ưu của bạn cho rally lead vs joiner role.

## So sánh V2 / V3 / Premium VIP — Rally throughput

| Gói | Số đạo | Rally/ngày KvK | Honor từ rally/ngày |
|---|---|---|---|
| V2 Cao Cấp | 1 đạo | ~10-15 | ~5.000 |
| **V3 Siêu Cấp** | **2 đạo** | **~20-30** | **~10.000** |
| Premium VIP | 3-4 đạo | 35-50 | 15-30k |

**V2 1 đạo** ưu tiên barb chain, tạm pause khi alliance trigger rally → throughput rally hạn chế.
**V3 2 đạo** có 1 đạo dedicate cho rally + 1 đạo chain → **best ROI rally / chi phí**.
**Premium VIP 3-4 đạo** rally đầy đủ + chain song song.

> ⚡ ROI tốt nhất rally + chain combo — [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## FAQ

### Auto Rally có bị Lilith ban không?
Bot cloud server riêng, không inject client, không macro. Tỷ lệ ban **<0,1%** qua 8 KvK seasons. Rally là gameplay hợp lệ — Lilith không cấm. Top alliance trên server đều dùng tool tương tự.

### Bot có thể đảm nhận rally captain không?
Có, từ V3+ có **captain mode**. Bot tự kiểm tra alliance member online ≥3, target fortress level optimal cho commander, set timer 5-10 phút theo config alliance.

### Tôi không trong alliance active thì sao?
Bot vẫn farm barb chain solo (V2+ feature). Rally throughput chỉ phát huy nếu alliance active. Khuyến nghị join alliance Top 30 server cho max throughput.

### Bỏ lỡ rally đêm KvK 3-5am có ảnh hưởng nhiều không?
Rất nhiều. Đêm 3-5am giờ VN là peak window KvK (Field of Honor reset, Altar capture, fortress flip). Bỏ 1 đêm = thiếu **~15-20k Honor** = rớt từ Top 10 xuống Top 30 alliance ranking.

## Bắt đầu ngay

**V3 Siêu Cấp 1.200.000đ/tháng** = sweet spot rally + chain combo:
- 2 đạo barb chain song song với Combo độc quyền
- 1 đạo có thể pause để join rally alliance khi trigger
- Auto Rally Captain mode cho user là R4/R5 alliance
- Đào gem 24/7 + auto build/research
- Multi-account 2-3 acc support

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [Auto Honor Farming RoK 2026 — Khách FREE AP đạt Power 98M trong 17 tháng](/blog/auto-honor-farming-kvk-rok-2026)
- [Combo Spam + Luring + AOE V2 — Bí mật kéo rợ gấp 4x Honor/AP](/blog/combo-spam-luring-aoe-rokdbot-v2)
- [Multi-account Sync V3 — Run 2-3 acc cloud sync](/blog/multi-account-sync-rokdbot-v3)
- [Tile Lv 6 Spawn Map Locations — Map gather tile tốt nhất 2026](/blog/tile-lv6-spawn-map-locations-rok-2026)
- [VIP Rewards Claim Strategy — Tối ưu daily reward claim](/blog/vip-rewards-claim-strategy-rok-2026)
- [Expedition Stamina Allocation — Phân phối stamina cho rally + farm](/blog/expedition-stamina-allocation-rok-2026)
  `,
};
