import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "kvk-migration-fee-timing-rok-2026",
  title: "KvK Migration Fee + Timing RoK 2026 — Move Fee Math + Khi Nào Worth",
  description: "KvK migration fee và timing RoK 2026: tính toán chi phí di chuyển server, khi nào move worth, tìm server target phù hợp, và V2 bot optimize resource trước khi migrate.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Di Chuyển Server — Quyết Định Tốn Nhất Trong RoK

Migration trong RoK không phải click move là xong. Có fee. Có timing. Có điều kiện. Và nếu tính sai, mày tốn hàng triệu resource + gem mà không thu được gì.

Ngược lại, nếu migrate đúng thời điểm sang đúng server → KvK win rate của alliance tăng đột biến, honor farming hiệu quả hơn, và account growth accelerate.

Bài này cho mày math để quyết định: move hay không move?

## Migration Fee: Cụ Thể Tốn Bao Nhiêu?

Migration không miễn phí sau giai đoạn newbie. Fee phụ thuộc vào **power** của account:

| Account Power | Migration Cost (gem) |
|---|---|
| <5M | ~3.000 gem |
| 5M-20M | ~6.000 gem |
| 20M-50M | ~12.000 gem |
| 50M-100M | ~20.000 gem |
| >100M | ~30.000+ gem |

**Gem rate**: 1.000 gem ≈ 50.000đ (nếu mua thẳng). Migration 20M power account = **600.000đ gem cost** nếu không farm gem tự nhiên.

### Resource Fee Ngoài Gem

Ngoài gem, migration cũng có **power prerequisites**:
- City Hall phải đạt level minimum (thường lv10-12 cho inter-server migration)
- Không thể migrate khi đang trong KvK season active

## Khi Nào Migration Worth?

### Worth nếu:

**1. Server mày quá mạnh — không thể compete**

Server có 3-5 top alliance với power gap 5x so với alliance mày → KvK sẽ luôn bị dominated. Honor farming cực kỳ tệ vì không hold được territory, không claim fort.

Migration sang server younger/weaker → alliance của mày có thể top 3 → honor và kill points tối ưu.

**2. Alliance của mày migrate và mày muốn theo**

R5 dẫn cả alliance sang server mới. Nếu mày ở lại → mất network, mất reinforce support, mất rally partner. Migration fee nhỏ hơn nhiều so với value mất từ solo play.

**3. Server mày đang "dead" — không đủ player active**

Server dead = không có PvP, không có kill points, honor farming nhàm chán. Sang server active hơn = experience tốt hơn.

### Không Worth Nếu:

- Power mày >50M (fee cao, ROI uncertain)
- KvK season đang active (không migrate được)
- Server mới không rõ alliance structure (có thể sang server yếu hơn mà cũng kém)

> 🤖 V2 bot tự động farm resource + gem trong tháng trước migrate để cover fee. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Migration Timing: Cửa Sổ Cho Phép

Lilith không cho migrate bất cứ lúc nào. Migration windows:

**Open Migration**: giữa 2 KvK seasons (~7-14 ngày window). Đây là cơ hội duy nhất inter-server migration.

**Same-kingdom Migration**: chỉ move trong cùng server → không có fee nhưng không đổi KvK opponent.

**Cách tính window**: KvK kết thúc → 7-14 ngày open → KvK mới bắt đầu. Tổng cycle KvK thường 4-6 tuần. Migration window: **~2 tuần mỗi 4-6 tuần**.

Nếu mày miss window → phải đợi cycle tiếp theo. Miss 1 window = đợi thêm 4-6 tuần.

## Target Server Selection: Tìm Server Phù Hợp Thế Nào?

Không phải server mới nào cũng tốt để migrate vào. Criteria:

### Server Age vs Power Distribution

| Server Age | Typical Characteristic | Suitable For |
|---|---|---|
| 1-3 tháng | Tất cả mid-tier | Beginner-mid wanting growth |
| 4-8 tháng | Mix mid-high | Established account looking for balance |
| >12 tháng | Heavy whale top + weak bottom | Whales hoặc F2P tránh khỏi |

### Cách Scout Target Server

1. **Discord của server**: mỗi server có Discord. Join và xem power distribution
2. **RoK Stats website**: check server kill points leaderboard của season gần nhất
3. **Alliance recruitment posts**: server weak thường có nhiều alliance spam recruitment

**Red flag**: server có 2-3 alliance top power >200M mỗi governor = server whale dominated. Tránh nếu mày không phải whale.

**Green flag**: top alliance power 50-100M range, active Discord, không có dominant single alliance.

## Resource Math Trước Khi Migrate

Khi migrate, mày mang theo:
- Tất cả resource trong city (không mất)
- Troops hiện tại
- Commanders + equipment
- Gems (không mất)

**Không mang theo**: flag territory, barb fort progress (reset), event progress trong kingdom (reset).

### Pre-Migration Checklist

1. Spend hoặc convert excess resource xuống dưới limit (không có limit thực ra nhưng đừng bỏ resource ngoài tile)
2. Recall tất cả march về city
3. Claim tất cả event reward pending
4. Heal tất cả wounded troops
5. Stock gem đủ migration fee + buffer

Bot V2 tự động làm 3/5 điều trên (recall march, heal troops, auto-spend resource). Mày chỉ cần gem claim + verify manual.

## ROI Calculation: Có Worth Di Chuyển Không?

Framework tính ROI migration:

**Expected value mới - Expected value cũ - Migration cost = Net ROI**

Ví dụ:
- Server hiện tại: honor farming 50.000/ngày (server quá mạnh, không hold territory)
- Server mới (dự kiến): 200.000 honor/ngày (alliance top 3)
- Honor value difference: +150.000 honor/ngày
- KvK 14 ngày: +2.100.000 honor per KvK
- Migration cost: 12.000 gem (~600.000đ) + downtime 1-2 ngày

**Break-even**: migration worth nếu honor difference compensate được gem cost trong <2 KvK seasons.

2.100.000 extra honor × 2 seasons = 4.200.000 honor advantage. Với gem cost một lần = **clearly worth**.

> 🤖 V2 gem farming: bot đào gem 24/7 để cover migration fee trong 2-3 tuần. [Xem V2 →](/#packages) · 900.000đ/tháng.

## Trap Phổ Biến Khi Migrate

### Trap 1: Migrate Không Có Alliance Confirm

Move sang server mới mà không confirm trước với alliance → sang tới nơi không có alliance cũ → solo play không support.

**Fix**: luôn coordinate với R5 trước. R5 di chuyển trước, members follow.

### Trap 2: Migrate Đúng Đầu KvK Season

Sau migration mày cần ~1-2 tuần để:
- Thiết lập trong territory mới
- Alliance accept và rank mày
- Farm resource + speedup recover từ move

Nếu KvK bắt đầu ngay → mày contribute cực thấp vì chưa setup xong.

**Fix**: migrate ít nhất **2 tuần trước** KvK season.

### Trap 3: Migrate Sang Server Không Research Kỹ

Server trông weak nhưng có 1 mega-whale alliance đang "farming" server weak → mày arrive → bị zero ngay tuần đầu.

**Fix**: spend 1-2 ngày research Discord + RoK stats trước khi commit migration.

Đọc kèm:
- [Auto Rally Captain RoK 2026](/blog/auto-rally-captain-rok-2026)
- [Mass Kill Strategy KvK RoK 2026](/blog/mass-kill-strategy-kvk-rok-2026)
- [Library Tech Tree Must Have RoK 2026](/blog/library-tech-tree-must-have-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)
  `,
};
