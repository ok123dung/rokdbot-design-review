import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "archer-commander-pairing-guide-rok-2026",
  title: "Hướng Dẫn Pairing Archer Commander RoK 2026 — Yi Seong-Gye + Hawk Meta Setup",
  description: "Pairing archer commander tối ưu RoK 2026: YSG + Hawk meta, Ramesses II, Edward, F2P options. Bot V2 Combo + AOE archer tự động maximize honor/AP trong KvK Season 8.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Tại sao mày farm rợ bằng archer mà honor chỉ bằng 60% cavalry players?

Phép toán bẽ bàng: Yi Seong-Gye (YSG) — archer commander mạnh nhất game — skill range 3.5 tiles. Cavalry Cao Pi skill range chỉ 2.5 tiles. Lý thuyết thì archer phải farm rợ nhiều hơn.

Thực tế? 80% archer players dùng YSG sai cách: để auto-cast thay vì manual trigger khi cluster rợ đỉnh điểm. Auto-cast game trigger rage đúng 1.000 — không quan tâm có 1 hay 7 con rợ trong range. Damage bằng nhau nhưng honor chia theo số rợ chết.

**Kết quả**: YSG auto-cast = 1-2 rợ chết/cast. YSG manual trigger đúng frame cluster = 5-7 rợ/cast.

## Yi Seong-Gye: Mechanics thật sự

YSG active skill mechanics Season 8:

- Range: 3.5 tiles (lớn nhất archer category)
- Target: up to 5 enemies trong range
- Damage: 1.700% ATK trên primary target + 850% ATK splash
- Rage gen: passive +80 rage mỗi 10s khi có troop movement nearby

**Pair tốt nhất theo priority**:

| Priority | Pair | Synergy | F2P? |
|---|---|---|---|
| #1 | YSG + Ramesses II | Ramesses debuff × YSG damage = +40% effective | Không |
| #2 | YSG + Nebuchadnezzar II | Nebuch rage gen → YSG cast faster | Không |
| #3 | YSG + Cao Pi | Cao Pi cavalry AOE fill gap giữa YSG casts | Có |
| #4 | YSG + Edward of Woodstock | Edward +15% archer damage passive | Có |
| #5 | YSG + Boudica | F2P peacekeeping pair, solid barb farm | Có |

> 🤖 Bot V2 tự động Combo + AOE archer: kéo rợ vào cluster trước khi trigger YSG skill. Honor/AP tăng 3-4x so với auto-cast. [Xem V2 →](/#packages) · 900.000đ/tháng.

## Hawk Pet: Game changer cho YSG Season 8

Patch tháng 3 bổ sung Hawk pet stat:

- **+15% skill range** cho archer commander
- YSG base range 3.5 tiles × 1.15 = **4.025 tiles với Hawk**
- Cluster trigger zone rộng hơn → bot V2 pull được nhiều rợ hơn vào 1 cast

**Hawk farming path**:
- Lv 1-3: 30 ngày barb farm thường
- Lv 4-5: 60 ngày thêm barb fortress level 25+
- Bot V2 chạy barb chain 24/7 → Hawk Lv 5 trong 45 ngày thay vì 90 ngày

## So sánh Archer pairs: Damage vs Sustain

### Damage pair (open field KvK)
**YSG + Ramesses II**: Ramesses debuff enemy defense 25% → YSG splash hit harder. Ideal khi có nhiều enemy troops cluster trong open field.

**Downside**: Không heal, troops drop nhanh → cần return thường xuyên → interrupt chain.

### Sustain pair (barb farm 24/7)
**YSG + Edward**: Edward passive +8% troop healing → troops sustain longer giữa chains. Không mạnh bằng Ramesses về damage nhưng run time dài hơn.

**Bot V2 dùng Edward pair** mặc định cho barb farm vì longer run = nhiều rợ hơn/ngày.

### F2P pair (không có S+ commanders)
**YSG + Boudica**: Boudica anti-barbarian passive +25% vs rợ (peacekeeping bonus). Đủ farm top 20 kingdom với V2 Combo.

## Archer Talent Tree 2026 — Tối ưu cho bot farm

**Peacekeeping branch** (barb farm focused):
- Naked Rage: +5% rage gen (key → faster YSG cast)
- Marksmanship: +5% archer attack
- Master Horseback: không cần (cavalry talent)

**Battle branch** (KvK open field):
- All for One: +3% march speed
- Expertise: +5% damage khi troop count >50%

Bot V2 tự nhận diện talent tree đang active và điều chỉnh trigger timing phù hợp. Naked Rage equipped → bot giảm trigger delay vì rage gen nhanh hơn.

> 🤖 V2 Cao Cấp: Combo + AOE archer 1 đạo 24/7 — 200+ rợ chết/ngày từ YSG cluster farming. [Kích hoạt ngay →](/#packages).

## Thực tế số liệu: YSG + Bot V2 vs Manual

| Phương pháp | Rợ/ngày | Honor/ngày | AP tiêu thụ |
|---|---|---|---|
| YSG auto-cast manual | 45-65 | 500-750 | 300-400 AP |
| YSG manual trigger | 90-120 | 1.000-1.400 | 300-400 AP |
| YSG + Bot V2 Combo AOE | 200-230 | 2.300-2.700 | 300-400 AP |

Cùng AP cost — **bot V2 hiệu quả hơn 3-4x manual** vì trigger timing perfect 24/7.

## F2P Path: Từ không có YSG đến farm S+ tier

- **Tuần 1-4**: Dùng Boudica + Constantine (F2P), mua Trial 150k test bot
- **Tuần 5-8**: Farm 500 medals unlock YSG silver chest, pair với Boudica
- **Tháng 3**: Expertise YSG qua barb chain 24/7 — cần bot V2 không nghỉ
- **Tháng 4-5**: Unlock Ramesses hoặc Edward qua KvK chest

Bot V2 rút ngắn timeline này 60% vì chạy suốt đêm khi mày ngủ.

## Đọc tiếp:
- [Combo Spam + Luring + AOE RokdBot V2 — Kéo rợ gấp 4x](/blog/combo-spam-luring-aoe-rokdbot-v2)
- [AI Commander Rotation V3 — Skip 6 tháng farm expertise](/blog/ai-commander-rotation-v3-rok)
- [Lohar Barbarian Farming 24h XP Grind](/blog/lohar-barbarian-farming-24h-xp-grind-rok-2026)
  `,
};
