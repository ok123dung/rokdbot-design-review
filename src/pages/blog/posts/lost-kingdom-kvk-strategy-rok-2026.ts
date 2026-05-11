import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "lost-kingdom-kvk-strategy-rok-2026",
  title: "Lost Kingdom KvK Strategy RoK 2026 — 14 Ngày Roadmap Từ Migration Đến Final Battle",
  description: "Lost Kingdom KvK RoK 2026: roadmap đầy đủ 14 ngày từ migration Day 1 đến Final Battle Day 14. Phase mechanics, honor checkpoint, bot schedule, và case study alliance Top 30 kingdom dùng V3.",
  date: "2026-05-10",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Ngày 1 KvK — Quyết Định Trong 2 Tiếng Đầu

Lost Kingdom mở. 2 tiếng đầu là thời gian vàng: alliance nào cắm cờ xong trước, settle territory xong trước — giữ lợi thế địa hình trong toàn bộ 14 ngày còn lại.

90% alliance thua Lost Kingdom không phải vì thiếu power. Vì thiếu **kế hoạch 14 ngày**.

Bài này là roadmap thực tế — từng ngày, từng checkpoint — mà top 30 kingdom đang dùng trong 2026.

## Migration — Không Phải "Cứ Di Cư Là Xong"

Migration Lost Kingdom có 2 cách:

### Option A: Alliance Mass Migration (khuyến nghị)
- Toàn R4+ migrate đồng loạt trong cùng 1h
- R5 pre-announce target coordinate 24h trước KvK mở
- Bot accounts migrate theo ngay khi KvK open — không chờ manual

### Option B: Wave Migration
- R5 migrate trước, cắm flag
- R4 migrate sau trong 3-4h
- R3+ migrate sau khi territory secure

Option A tốt hơn cho Top 30 kingdom vì **establishes overwhelming presence** trong 2h đầu. Option B phù hợp hơn khi alliance split migrate theo nhiều coordinate.

> 🤖 Bot V3 auto migrate khi R5 set lệnh — không cần mày thức đêm bấm nút. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Roadmap 14 Ngày — Từng Checkpoint

### Ngày 1-2: Establish (Phase 1 bắt đầu)
**Target**: secure territory + bắt đầu honor grind

- [ ] Toàn alliance migrate xong trong 3h đầu
- [ ] Chiếm ≥15 tile lv5 quanh Lost Temple radius
- [ ] Garrison Lost Temple với top 3 power players
- [ ] Bot barb chain bắt đầu: V3 2 đạo → ~430 rợ/ngày
- **Honor checkpoint**: 30.000 honor/player sau 48h

### Ngày 3-4: Reinforce (Phase 1 giữa)
**Target**: honor push + barb fort lv4 unlock

- [ ] Rally barb fort lv4 bắt đầu (cần alliance members ≥ 5 join)
- [ ] Heal + train troops auto (bot lo)
- [ ] Check enemy kingdom position — có ai approach Lost Temple?
- **Honor checkpoint**: 80.000 honor/player sau 96h

### Ngày 5-7: Push (Phase 2 bắt đầu)
**Target**: barb fort lv5-6 rally + enemy building destroy

- [ ] Rally barb fort lv5: ~5.000-8.000 honor/rally thắng
- [ ] Destroy 3-5 enemy resource building trong territory
- [ ] Bot vẫn chain barb parallel — không dừng dù có rally
- **Honor checkpoint**: 200.000 honor/player sau 7 ngày

### Ngày 8-10: Mid-Late Push
**Target**: maintain territory + heal recovery

- [ ] Troops bị thương Phase 2 heal xong: bot auto speedup
- [ ] Barb fort lv6 rally (nếu có): ~8.000-12.000 honor/rally
- [ ] Scout enemy Final Battle preparation
- **Honor checkpoint**: 350.000 honor/player sau 10 ngày

### Ngày 11-12: Pre-Final
**Target**: full troop + pre-position

- [ ] Tất cả troops heal + train xong (bot đã lo trong ngày 8-10)
- [ ] Alliance stack reinforcement vào Lost Temple
- [ ] Bot barb chain vẫn chạy song song: thêm ~86k honor trong 2 ngày

### Ngày 13-14: Final Battle
**Target**: giữ Lost Temple + Sacred Place push

- [ ] Tập trung toàn lực vào Temple và Sacred Place
- [ ] Bot chạy barb chain trong khi army chính đánh — không "dừng bot để đánh"
- [ ] R5 coordinate reinforce liên tục
- **Final honor target**: 550.000+ honor/player → Top 30 kingdom

## Bot Schedule Tối Ưu 14 Ngày

| Phase | Bot hoạt động | Output |
|---|---|---|
| Ngày 1-4 | Barb chain 24/7 + migrate support | ~120k honor |
| Ngày 5-10 | Barb chain + heal + RSS farm | ~260k honor |
| Ngày 11-14 | Barb chain + train | ~120k honor |
| **Tổng** | | **~500k honor** |

Plus honor từ rally barb fort lv5-6 (player manually): **+50-150k** tùy participation.

**Grand total: 550k-650k honor / 14 ngày với V3**. Top 30 kingdom comfortably.

## Case Study: Alliance "VN Dragon" KvK Season 7

Alliance 30 thành viên, 50% dùng bot V3, 30% dùng V2, 20% manual:

- Honor tổng alliance sau 14 ngày: **17,4M**
- Average honor/player: **580.000**
- Kết quả: **#18 Kingdom** — lần đầu tiên vào top 20 sau 3 seasons

Trong 14 ngày KvK, bot V3 accounts đóng góp **68% tổng honor** dù chỉ chiếm 50% thành viên.

## Sai Lầm Phổ Biến Lost Kingdom

### Sai lầm 1: Đốt AP Phase 1 vào enemy city
Phase 1 không có combat multiplier. Enemy city battle tốn AP nhưng honor ít hơn barb fort lv5 trong Phase 2. **Đánh rợ Phase 1, đánh fort Phase 2.**

### Sai lầm 2: Dừng bot khi Final Battle
Bot barb chain không cản trở rally decision. 2 đạo chain vẫn generate 86k honor trong ngày 13-14 trong khi army chính đánh Temple. **Không dừng bot.**

### Sai lầm 3: Không heal nhanh
Troops bị thương nằm trong hospital = lãng phí. Bot V3 auto speedup heal → troops sẵn sàng trong 60 giây thay vì 2-3h chờ manual.

> 🤖 V3 auto heal + train + barb chain xuyên suốt 14 ngày — không bỏ sót 1 tiếng nào. [Xem V3 →](/#packages).

## FAQ

### Lost Kingdom KvK kéo dài bao lâu?
Standard 14 ngày. Một số server variation có 10 ngày — roadmap scale xuống tương ứng.

### Cần power bao nhiêu để Top 30 kingdom?
Power 25M+ recommended. Dưới 25M vẫn Top 30 được nếu alliance coordination tốt và bot contribution cao.

### Bot có tự rally barb fort không?
Bot tự động join rally khi R5/R4 launch — đúng timing, đúng march size. Rally decision vẫn cần human R5.

## Bắt Đầu Roadmap 14 Ngày

**V3 Siêu Cấp 1.200.000đ/tháng** — setup 48h trước KvK:
- 2 đạo barb chain: ~500k honor/14 ngày
- Auto heal + train + migrate
- Không cần online 6-8h/ngày

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [KvK Season 8 Complete Guide RoK 2026](/blog/kvk-season-8-complete-guide-rok-2026)
- [KvK Season Schedule 2026 Overview](/blog/kvk-season-schedule-2026-overview-rok)
- [Auto Rally Captain RoK 2026](/blog/auto-rally-captain-rok-2026)
  `,
};
