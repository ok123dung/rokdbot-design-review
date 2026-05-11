import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "f2p-beginner-mistakes-bot-solves-day-1-30-rok-2026",
  title: "10 Sai Lầm F2P Day 1-30 Mà Bot RokdBot Tránh Cho Bạn (Hướng Dẫn 2026)",
  description: "70% F2P bỏ game ở day 30. 50% trong số đó vì 10 sai lầm setup này: build queue idle, research path sai thứ tự, healing không claim quest, march sai tile level. Bot V1 tránh hết từ ngày đầu.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## 70% F2P bỏ game ở day 30 — không phải vì game khó

Theo dữ liệu Farm Fatigue phân tích ở bài trước: 70% F2P bỏ RoK trong 30 ngày đầu. Và 50% trong số đó không bỏ vì thua PvP, không bỏ vì hết resource — họ bỏ vì **accumulated frustration từ 10 sai lầm setup nhỏ** mà không ai chỉ ra trong tutorial.

Sai lầm này không phải "chơi kém". Chúng là hệ thống game design không rõ ràng, và bất kỳ player mới nào cũng mắc.

Bot V1 tránh hết 10 cái này từ ngày 1.

---

## Sai lầm #1 — Build Queue Idle (Queue trống quá 30 phút/ngày)

**Vấn đề:** Game tutorial không giải thích rõ: mỗi phút queue trống = mất tốc độ power growth. Player mới thường build xong 1 tòa nhà, quên đặt lệnh tiếp. Queue idle 4-8 tiếng mỗi ngày trong 30 ngày = mất 5-10 ngày power tương đương.

**Bot fix:** Auto-detect queue empty → fill ngay lệnh build tiếp theo theo priority order (Farm → Hospital → Training Camp → Research Hall). Không để queue trống quá 2 phút.

---

## Sai lầm #2 — Research Path Sai Thứ Tự

**Vấn đề:** Player mới thấy "Military Research" → rush vào đó ngay. Sai. Day 1-30 cần Economic Research trước: Farm Capacity, Gather Speed, Building Speed. Military không có tác dụng nếu không có resource để train troops hay build.

**Bot fix:** Research path được preset theo meta 2026 — Economic tree hoàn thành ưu tiên trước. Player không cần biết cây research, bot tự chọn đúng node.

---

## Sai lầm #3 — Healing Không Claim Quest

**Vấn đề:** Mỗi lần heal troops trong hospital xong → có quest reward chờ claim. Player mới không biết → để reward expire hoặc không claim. Quest reward thường bao gồm speedup 5-15 phút, gem 20-50 — tổng cộng 30 ngày = hàng chục tiếng speedup bị bỏ.

**Bot fix:** Auto-claim tất cả quest reward sau mỗi action cycle. Không bỏ sót.

> 🤖 Bot V1 auto-claim quest, heal, build — bạn chỉ cần bật và quên. [Xem V1 750k →](/#packages)

---

## Sai lầm #4 — March Sai Tile Level (Farm Tile Quá Cao)

**Vấn đề:** F2P mới march đến resource tile lv5 ngay ngày đầu. Vấn đề: lv5 tile có troops NPC defend → march bị đánh → troops bị thương → hospital full → build queue bị chặn vì cần free hospital slots. Domino effect.

**Bot fix:** V1 auto-detect power và troop capacity của account → target tile level phù hợp (lv1-2 ban đầu, leo dần theo power). Không bao giờ march vào tile quá mạnh cho giai đoạn hiện tại.

---

## Sai lầm #5 — Để AP Free Expire Mỗi Ngày

**Vấn đề:** AP free recover 1 điểm mỗi 3 phút, cap tại 1.000. Nếu không tiêu AP trước khi đầy → AP mới generate bị waste. Player ngủ 8 tiếng = cap đầy sau ~50 phút = 7 tiếng AP bị bỏ.

**Bot fix:** Khi AP gần cap → bot tự động dùng AP farm barb trước khi overflow. 24/7 không để AP expire.

---

## Sai lầm #6 — Alliance Chest Không Claim (Alliance Gift Bị Bỏ)

**Vấn đề:** Alliance member donate hoặc complete objectives → Alliance Chest available → player không login claim → chest expire. Mỗi chest có thể chứa speedup 30-60 phút, resource lớn.

**Bot fix:** Auto-claim Alliance Chest khi available. Không bao giờ expire.

---

## Sai lầm #7 — Training Troops Sai Type (Train Cavalry Day 1)

**Vấn đề:** Cavalry trông ngầu → player mới train ngay. Vấn đề: Cavalry training speed chậm nhất trong 3 type, feed cost cao nhất, và Cavalry không hiệu quả cho barb farm F2P (cần Infantry/Archer base). Lãng phí resource trong 30 ngày đầu.

**Bot fix:** V1 train theo priority: Infantry cho barb Lohar pair, Archer nếu có YSG. Không train Cavalry cho đến khi power đủ tier.

---

## Sai lầm #8 — Gem Spend Vào Sai Chỗ

**Vấn đề:** Tutorial gem dẫn player đến "Speed Up" random. F2P nên dành gem cho: VIP points, Key (mở treasure chest), hoặc Sculpture (nếu priority commander). Spend gem cho speedup là ROI tệ nhất trong game.

**Bot fix:** Gem mining 24/7 (bao gồm trong V1). Gem được tích lũy chứ không auto-spend — player quyết định dùng gem vào đâu. Bot không waste gem.

> ⚡ Gem mining 24/7 bao gồm trong V1 — accumulate gem thay vì waste. [Xem gói Trial 150k →](/#packages)

---

## Sai lầm #9 — Bỏ Lỡ Daily Login Bonus Chain

**Vấn đề:** Daily login bonus có streak multiplier — miss 1 ngày là reset về ngày 1. Day 7, Day 14, Day 28 có reward lớn nhất (sculpture, chest, speedup major). Player mới thường miss 2-3 ngày trong 30 ngày → không bao giờ đến được Day 28 streak reward.

**Bot fix:** Bot login account hàng ngày (daily maintenance cycle) → claim login bonus → streak không bao giờ break. Day 28 reward được nhận mỗi tháng đúng hạn.

---

## Sai lầm #10 — March Idle Khi Không Online

**Vấn đề:** Khi player offline, march đứng yên ở city. Không farm resource, không farm barb, không generate XP. 16h offline mỗi ngày × 30 ngày = 480 tiếng march idle.

**Bot fix:** March không bao giờ idle. Khi không KvK: farm barb + harvest rss tile song song. Khi KvK: honor farm 24/7. 24h × 30 ngày = 720 tiếng farm vs 240 tiếng manual (4h/ngày).

---

## Kết quả Day 30: Bot V1 vs Manual F2P

| Chỉ số | F2P Manual (tốt nhất) | F2P + Bot V1 |
|---|---|---|
| Power | 3-5M | 10-15M |
| Lohar level | Lv 40-50 | Lv 55-60 |
| Gem tích lũy | 500-800 | 2.000-3.500 |
| Quest speedup claimed | 40-60% | 100% |
| Daily streak | 15-20 ngày | 30 ngày đủ |
| March idle time | 480+ tiếng | <5 tiếng |

Power gap 3x ở day 30 không phải vì bot cheat. Là vì bot **không mắc 10 sai lầm trên**, còn manual player mắc tất cả.

---

## Trial 150k — Xem thử 7 ngày trước khi quyết định

Nếu chưa chắc, thử **Trial 150k/7 ngày** — đủ thời gian thấy bot fix sai lầm nào ngay trong tuần đầu. Claim quest, build queue không idle, gem mining bắt đầu từ ngày 1.

Sau 7 ngày thấy power gap vs bạn bè cùng ngày start → nâng lên V1 750k để giữ momentum.

[→ Xem 5 gói cước](/#packages) (Trial **150k/7 ngày** · V1 750k · V2 900k · V3 1,2M · Premium VIP 3M)

---

## FAQ

### Bot V1 có giúp được nếu account đã qua day 30 rồi không?
Có. Các sai lầm như AP expire, quest không claim, march idle vẫn đang diễn ra ở mọi account không dùng bot. Bắt đầu bất kỳ lúc nào vẫn giúp được.

### Tôi đã mắc sai lầm research tree — có cách recover không?
Có, nhưng chậm. Bot tự adjust research priority dựa trên current tree state của bạn — tối ưu hóa từ điểm bạn đang đứng, không cần reset.

### Trial 150k có đủ thấy sự khác biệt không?
7 ngày đủ thấy: AP không expire, quest auto-claim, gem mining bắt đầu, build queue không idle. Đủ để so sánh với tốc độ manual.

---

Đọc tiếp:
- [Farm Fatigue — Tại Sao 70% F2P Bỏ RoK và Cách Bot Giải Quyết](/blog/farm-fatigue-quit-rate-bots-solution-rok-2026)
- [F2P → VIP2 Bot Progression Roadmap 2026](/blog/f2p-to-vip2-bot-progression-roadmap-rok-2026)
- [Auto Build & Research — Queue Không Bao Giờ Idle](/blog/auto-build-research-rok-vip-template)
  `,
};
