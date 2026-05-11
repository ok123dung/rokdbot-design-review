import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "rune-system-optimization-rok-2026",
  title: "Rune System Optimization RoK 2026 — Rune Slot Build Order Tối Ưu",
  description: "Hệ thống Rune RoK 2026: slot build order, attribute priority theo role (gather/combat/research), upgrade path tối ưu RSS, và bot V2 tự động farm rune material 24/7.",
  date: "2026-05-11",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Rune Của Bạn Đang Để Trống — Và Bạn Không Biết

Mở City Hall → Equipment → Rune tab. Đếm bao nhiêu slot đang để trống hoặc đang dùng rune lv1 chưa upgrade.

Mỗi slot trống = tương đương bỏ 5-15% attribute bonus. Nếu 4/6 slot trống = bạn đang chơi RoK với stats thiếu 30-50% so với potential.

Đây là hệ thống mà 70% player bỏ qua vì không hiểu priority. Bài này giải quyết cái đó.

## Rune System — Cơ Chế Nền Tảng

Rune là equip layer thứ 2 ngoài commander equipment. 6 slot:

| Slot | Attribute Category | Priority Role |
|---|---|---|
| Slot 1 | Attack / Defense | Combat |
| Slot 2 | HP / Defense | Garrison / Rally |
| Slot 3 | Gathering Speed | Gather |
| Slot 4 | Research Speed / Build Speed | Economy |
| Slot 5 | Training Speed / Capacity | Army |
| Slot 6 | Damage vs Barbarians | Barb / Honor |

Rune có 5 tier: Common → Uncommon → Rare → Epic → Legendary. Legendary rune slot 6 (Barbarian Damage) = **+25-35% barb damage** tùy attribute roll.

Rune khác equipment: không cần material từ forge. Rune material drop từ:
- Expedition stages
- Event chests (Council of Kingdoms, etc.)
- Alliance Shop
- KvK reward crates

## Build Order — Đừng Upgrade Ngẫu Nhiên

**Sai lầm phổ biến nhất**: upgrade đều tất cả slot lên Uncommon rồi mới lên Rare. Kết quả: không có slot nào thật sự mạnh.

Đúng là: **max 1-2 slot ưu tiên trước**.

### Gather-First Build Order (F2P / Economy focus)

1. **Slot 3** (Gathering Speed) → max Legendary trước
2. **Slot 4** (Research Speed) → Rare đủ dùng
3. **Slot 1, 2, 5** → Uncommon giữ nguyên đến KvK
4. **Slot 6** → upgrade khi có KvK Honor farming focus

Slot 3 Legendary gather = +20-25% gather speed. Cộng với VIP Boost + Alliance Boost → gather đạt 200%+.

### Combat-First Build Order (KvK / PvP focus)

1. **Slot 1** (Attack) → Rare trước KvK, Legendary target
2. **Slot 2** (Defense / HP) → Rare
3. **Slot 6** (Barb Damage) → Epic nếu Honor farming
4. **Slot 3, 4, 5** → Uncommon cầm cự

### Balanced Build (Mid-game, 12-18 tháng chơi)

1. Slot 6 → Epic (barb damage, KvK Honor value cao)
2. Slot 3 → Rare (gather sustain)
3. Slot 1 → Rare (combat baseline)
4. Slot 4 → Rare (research, economy)
5. Slot 2, 5 → Uncommon

## Pain Point — Rune Material Farm Chậm Kinh Khủng

Vấn đề không phải không biết upgrade gì. Vấn đề là **farm material quá chậm khi manual**.

Expedition stamina: 50/ngày. Mỗi stage expedition drop 1-3 rune material. Farm hết 50 stamina = 3-7 phút manual click. Nhưng để lên Slot 3 từ Common → Legendary cần **~80-120 material**. Tức là 15-25 ngày nếu dùng hết stamina mỗi ngày.

Thực tế manual: 40% ngày bỏ expedition (ngủ quên, bận), farm chỉ 60% stamina, nhiều ngày quên hẳn. **Thực tế đạt 30-35 stamina/ngày** → 25-35 ngày cho 1 slot Legendary.

Với bot V2: expedition auto-run đủ 50 stamina mỗi ngày, chọn stage tối ưu drop rate. **Slot 3 Legendary trong 18-22 ngày** thay vì 35+ ngày.

> 🤖 V2 auto-expedition 50 stamina/ngày, chọn stage tối ưu drop material. Rune slot lên Legendary nhanh hơn 40%. [Xem V2 →](/#packages) · 900.000đ/tháng.

## Attribute Roll — Đừng Giữ Rune Xấu

Rune Rare trở lên có **attribute roll random** khi craft/drop. Ví dụ slot 6 Rare có thể roll:

- Barbarian Attack +8% (tốt)
- Barbarian Defense +5% (trung bình)
- Barbarian HP +6% (trung bình)

Nếu roll kém → **reroll** bằng Rune Crystal (từ Alliance Shop và event). Đừng giữ rune xấu vì sợ tốn material upgrade lại.

Công thức đơn giản: **roll đến khi đạt attribute bạn cần, thì mới upgrade tier**.

## Rune vs Commander Talent Tree — Nên Ưu Tiên Cái Nào

Câu hỏi hay. Framework:

- **Talent tree ảnh hưởng trực tiếp** trên field combat mỗi trận
- **Rune ảnh hưởng passive** — không phụ thuộc skill active

Nếu đang KvK active → talent tree tối ưu trước. Nếu peace time / economy phase → rune upgrade priority.

Không phải either/or. Nhưng nếu resource limited → talent tree vẫn ROI cao hơn cho combat governor.

## FAQ

### Rune có mất khi đổi commander không?

Không. Rune gắn vào governor (account), không phải commander. Đổi commander pair không ảnh hưởng rune.

### Slot 6 Barb Damage có stack với peacekeeping talent không?

Có. Cộng dồn. Lohar maxed peacekeeping talent + Slot 6 Legendary = barb damage buff lên đến +60-80% tùy build. Đây là lý do Honor farming V2 Combo hiệu quả vượt trội.

### Bao nhiêu Rune Crystal nên giữ để reroll?

Giữ 20-30 Crystal trước khi bắt đầu reroll 1 slot. Xác suất roll đạt attribute tốt nhất khoảng 30-35% → trung bình cần 3-4 lần reroll.

## Bắt Đầu Ngay

**V2 Cao Cấp 900.000đ/tháng** — expedition auto, rune material farm không miss ngày nào:

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Pet System Tier List RoK 2026](/blog/pet-system-tier-list-rok-2026)
- [Iron Wolf Pet Deep Dive RoK 2026](/blog/iron-wolf-pet-deep-dive-rok-2026)
- [Expedition Stamina Allocation RoK 2026](/blog/expedition-stamina-allocation-rok-2026)
  `,
};
