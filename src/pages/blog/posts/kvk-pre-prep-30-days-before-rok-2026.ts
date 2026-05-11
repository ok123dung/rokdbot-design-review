import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "kvk-pre-prep-30-days-before-rok-2026",
  title: "KvK Pre-Prep 30 Ngày Trước RoK 2026 — Calendar Checklist Đầy Đủ",
  description: "30 ngày trước KvK là cửa sổ vàng quyết định rank Honor. Calendar checklist đầy đủ: RSS buffer, troop tier, research priority, bot schedule — tất cả để ngày KvK mở cổng, mày đã sẵn sàng hơn 90% kingdom.",
  date: "2026-05-11",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## Ngày KvK mở cổng — 80% kingdom chưa sẵn sàng

Đây là sự thật đau lòng: khi cổng KvK mở, phần lớn player RoK vẫn đang train T4, vẫn thiếu RSS, vẫn chưa có commander key lv60. Họ vào KvK bằng account chưa sẵn sàng — và trả giá bằng Honor rank tệ cả season.

30 ngày trước KvK là cửa sổ vàng. Nếu mày dùng đúng, account của mày sẽ vào KvK ở trạng thái chiến đấu tối ưu trong khi 80% kingdom còn đang cố gắng catch up.

Vấn đề là hầu hết player không có hệ thống — họ farm random, upgrade tùy tiện, và thức khuya đêm KvK mà vẫn thiếu T5.

## 30-Day Calendar: Tuần theo Tuần

### Tuần 1 (D-30 đến D-22): RSS Foundation

Mục tiêu tuần này: tích trữ đủ RSS để train + research không bị gián đoạn suốt KvK.

- **RSS buffer cần thiết trước KvK:**
  - Food: 500M minimum (T4 training ngốn 200M/ngày)
  - Wood: 300M (research + building)
  - Stone: 200M (hospital + wall upgrade cuối)
  - Gold: 150M (commander XP + speedup conversion)

- **Action tuần 1:**
  - Maximize gather march 24/7 — tất cả march đi tile L5 mọi lúc
  - Alliance gift farming — tận dụng tất cả event RSS
  - Mua RSS chest từ gem nếu còn gem tích trữ
  - Xóa hết building queue non-essential (decorations, non-military)

Manual gather 24/7 là bất khả thi nếu mày còn đi ngủ. Bot V3 chạy gather march liên tục — tile L5 food + stone + wood tự động chọn theo priority queue.

### Tuần 2 (D-21 đến D-15): Troop Tier Finalization

- **Mục tiêu:** Hoàn thiện T4/T5 ratio trước khi KvK lock troop count
- **Checklist troop:**
  - T4 Infantry: 300k minimum (KvK frontline)
  - T4 Cavalry: 150k (mobility + rally)
  - T4 Archer: 200k (wall defense + ranged)
  - T5 nếu có: allocate vào tier theo commander skill tree

- **Research priority tuần 2:**
  - Military tree: march speed tier cuối
  - Economic tree: tạm pause — KvK không cần
  - Commander expertise: chỉ key commander KvK (không waste XP vào peacekeeping)

### Tuần 3 (D-14 đến D-8): Commander Lock

Đây là tuần quan trọng nhất. Commander không sẵn sàng = mày đi KvK tay không.

- **Commander KvK cần lv60 + expertise:**
  - Primary: Yi Seong-Gye / Cao Pi (tùy meta server)
  - Secondary: Trajan / Alexander (tank)
  - Support: Scipio Africanus (march speed buff)

- **Commander không cần lv60 trước KvK:**
  - Peacekeeping commanders (Boudica, Lohar) — pause
  - Gathering commanders — pause tuần 3

- **Action:**
  - Dùng ALL XP tome vào key commander
  - Alliance commander talent reset nếu cần respec KvK tree
  - Check commander skill tree: có đúng talent point vào KvK nodes chưa

> 🤖 V3 RokdBot auto-rotate commander theo schedule — peacekeeping ban ngày, KvK setup ban đêm. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

### Tuần 4 (D-7 đến D-1): Final Prep

- **D-7:** Kiểm tra alliance assignment — mày đã có rally slot chưa?
- **D-5:** Hospital capacity check — mày có thể absorb bao nhiêu wounded trước khi city die?
- **D-3:** Speedup audit — có đủ speedup cho training emergency không?
- **D-1:** Bot schedule config — set KvK mode, honor farming priority ON

## Nỗi đau của Manual Prep

Thực tế khi mày cố manual 30-day prep này:

- **Gather 24/7:** Ngủ 7 tiếng = mất 7 tiếng tile L5. Nhân 30 ngày = mất 210 tiếng gather = ~63M food thiếu hụt
- **Training queue:** Quên heal troops một đêm = train queue đứng sáng hôm sau = mất 50k-100k T4
- **Commander XP:** Dùng sai XP tome vào commander không phải KvK priority = 3 tuần waste

Bot không ngủ. Bot không quên. Bot không click nhầm.

## Bot Schedule Tối Ưu 30 Ngày Pre-KvK

Cấu hình bot cho period này khác với routine thường:

- **Gather priority:** 3/5 march → tile L5 food, 2/5 march → stone/wood
- **Barb chain:** Tạm giảm từ max chain về 1 đạo — tiết kiệm AP cho KvK
- **Training:** T4 continuous, không pause kể cả đêm
- **Hospital:** Auto-heal immediately khi wounded > 10k

V3 có profile "Pre-KvK Mode" — switch 1 click, bot tự điều chỉnh tất cả priority.

## FAQ

### Nếu server mình KvK sớm hơn lịch dự kiến thì sao?
Lilith thông báo trước 7 ngày. Nếu mày đã bắt đầu prep từ D-30, tới D-7 về cơ bản đã xong phase quan trọng nhất (RSS + troop). Tuần 4 chỉ là fine-tune.

### Alliance có ảnh hưởng đến pre-prep không?
Lớn. Nếu alliance mày có RSS donation system tốt, buffer cần thiết giảm 20-30%. Nếu không — phải tự lo full buffer.

### Bot có bị detect khác không trong KvK so với thường?
Không — bot chạy cùng architecture, chỉ thay đổi priority queue. Ban rate <0,1% cả trong và ngoài KvK.

## Bắt đầu ngay

**V3 Siêu Cấp 1.200.000đ/tháng** — Pre-KvK Mode + 2 đạo chain KvK honor farming:
- Auto gather 24/7 với L5 tile priority
- 2 đạo barb chain đồng thời (430 rợ/ngày)
- Commander rotation tự động theo KvK schedule

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [F2P to VIP2 Bot Progression Roadmap RoK 2026](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
- [KvK Season Prep Bot Checklist RoK 2026](/blog/kvk-season-prep-bot-checklist-rok-2026)
- [RokdBot V3 vs V2 vs V1 ROI Comparison 2026](/blog/rokdbot-v3-vs-v2-vs-v1-roi-comparison-2026)
  `,
};
