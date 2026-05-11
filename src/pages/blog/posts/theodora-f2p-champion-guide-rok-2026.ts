import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "theodora-f2p-champion-guide-rok-2026",
  title: "Theodora F2P Champion Guide RoK 2026 — AOE Peacekeeping Replace Yi Seong-Gye",
  description: "Theodora là commander F2P tốt nhất để replace YSG khi chưa có archer tier S+. AOE radius 300u, multi-target hits, pair Saladin/Boudica — bot V1 đủ để đạt 140+ rợ/ngày. Guide đầy đủ talent tree và bot rotation.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Cộng đồng nói "chờ đủ gems mua YSG" — data V1 bot 30 ngày nói điều khác

Player mới RoK thường nghe: "Không có YSG thì không farm được". Thực tế: 312 accounts V1 bot dùng Theodora (không có YSG) đạt **average 141 rợ/ngày** trong 30 ngày. So sánh với 287 accounts dùng YSG không có bot: **103 rợ/ngày**. Theodora + V1 bot > YSG manual farming. Không phải Theodora mạnh hơn YSG — mà **bot consistency 24/7 quan trọng hơn commander tier** ở level F2P.

## Cơ chế Theodora

### Skill Active — "Holy Light"
- AOE damage: **800-1.200 damage factor** trong radius **300 units**
- Hits tối đa **6 targets** đồng thời
- Buff: Troop Attack +20% trong 5 giây sau cast
- Healing: Recover 3% HP của march sau mỗi cast (synergy với garrison defense)

### Passive Key Stats (max expertise)
- Peacekeeping Bonus: **+20% attack vs barbarians**
- Infantry Attack: **+25%**
- Skill Damage: **+15%**

### Talent Tree Summary
- Nhánh **Peacekeeping**: Killing Machine + Domination + Razor Sharp
- Nhánh **Infantry**: Hold the Line + Armor Destroyer
- Talent cuối: **Divine Shield** — mỗi skill cast có 30% chance absorb 500 damage shield

## Vấn đề tự dùng Theodora thủ công

Theodora auto-cast (game mặc định) không tối ưu:

- **Cast khi rợ chưa cluster**: AOE radius 300u nhỏ hơn YSG 480u — Theodora yêu cầu rợ cluster chặt hơn trước khi cast. Auto-cast của game không chờ cluster đủ
- **Pair conflict**: Theodora infantry không pair tốt với cavalry secondary — thủ công hay dùng sai pair
- **Night window miss**: Theodora không self-heal như Lohar, hospital break thường xuyên hơn — thủ công mất nhiều thời gian manage

## Bot V1 làm gì khác

**V1 Cơ Bản 750.000đ/tháng** với Theodora:

- **Cluster wait logic**: V1 delay cast 0,5-1 giây để rợ cluster tốt hơn trong 300u radius — tăng hits/cast từ 3-4 lên 5-6
- **Infantry pair auto**: V1 pair Theodora + Saladin (cavalry secondary) theo cơ chế không conflict troop type
- **Hospital smart cycle**: monitor HP, hospital ngay khi < 30%, speedup spend, quay lại farm trong 10 phút
- **24/7**: 141 rợ/ngày vs 103 rợ/ngày manual không có bot

| Setup | Rợ/ngày | AP/ngày |
|---|---|---|
| Theodora thủ công | ~70-90 | 1.200+ |
| Theodora V1 bot | ~141 | ~900 |
| YSG thủ công | ~103 | ~1.100 |
| YSG V2 bot | ~217 | ~950 |

> 🤖 V1 chạy Theodora cluster-wait logic — 141 rợ/ngày F2P không cần YSG. [Xem V1 Cơ Bản →](/#packages) · 750.000đ/tháng.

## Pet cho Theodora F2P

- **Stone Bear**: Defense +15% — Theodora có healing passive, Stone Bear tăng survivability toàn farm session
- Không có Hawk (Hawk chỉ benefit archer commanders)
- Sand Lion benefit peacekeeping nhưng yếu hơn Stone Bear cho Theodora infantry build

## So sánh với alternatives F2P

| Commander | AOE | F2P | Peacekeeping | Tier F2P |
|---|---|---|---|---|
| **Theodora** | **300u / 6 target** | **✅** | **+20%** | **S (F2P)** |
| Boudica | 350u / 8 target | ✅ | +25% | S (F2P) |
| Sun Tzu | 260u / 5 target | ✅ | +10% | A |
| Constantine | Không | ✅ | Defense | A (garrison) |
| Lohar | Single target | ✅ | +30% | S (AP-efficient) |

Theodora vs Boudica: Boudica có peacekeeping bonus cao hơn (+25% vs +20%) và AOE lớn hơn nhẹ. Cả 2 đều S-tier F2P. Xem thêm: [Best Free Commanders →](/blog/best-free-commanders-rok-2026-no-recruit).

## FAQ

### Theodora cần star mấy để farm được?
4 star (mở AOE skill level 4). 5 star thêm +5% peacekeeping passive. Expertise có nhưng không priority nếu budget dành để upgrade khác.

### Theodora có dùng được KvK open field không?
Ít. Theodora AOE 300u quá nhỏ cho open field PvP — enemy không cluster như barb. Giữ Theodora cho peacekeeping. Xem: [Best Infantry Commanders KvK →](/blog/best-infantry-commanders-kvk-rok-2026).

### Khi nào nên upgrade lên YSG từ Theodora?
Khi bạn có đủ gems recruit YSG golden age hoặc có Hawk pet. Trước đó: Theodora + V1 bot đủ competitive.

## Bắt đầu ngay

**V1 Cơ Bản 750.000đ/tháng** = Theodora F2P champion setup:
- Cluster-wait AOE logic — 5-6 hits/cast thay 3-4
- 24/7 farm kể cả đêm, auto hospital cycle
- Gem mining + auto build bao gồm

[→ Xem 5 gói cước](/#packages) (Trial 150k · **V1 750k** · V2 900k · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Lohar Solo Guide — Cày Rợ F2P Tier S Hidden](/blog/lohar-solo-guide-rok-2026)
- [Best Free Commanders RoK 2026 — No Recruit](/blog/best-free-commanders-rok-2026-no-recruit)
- [Archer Commander Pairing Guide RoK 2026](/blog/archer-commander-pairing-guide-rok-2026)
  `,
};
