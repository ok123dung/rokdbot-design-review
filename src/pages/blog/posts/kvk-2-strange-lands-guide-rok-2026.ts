import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "kvk-2-strange-lands-guide-rok-2026",
  title: "KvK 2 Strange Lands Guide RoK 2026 — Pháo Đài Trung Lập + Altar Capture",
  description: "KvK 2 Strange Lands thêm Neutral Fortress và Altar — hai mục tiêu thay đổi hoàn toàn strategy so với KvK 1. Guide đầy đủ từ pháo đài trung lập đến altar capture, coordination, và cách bot V3 optimize honor farming trong Strange Lands.",
  date: "2026-05-11",
  readTime: "8 phút",
  coverImage: "/og-image.png",
  content: `
## KvK 2 Strange Lands Không Phải KvK 1 Với Tên Khác

Nhiều server đến KvK 2 Strange Lands vẫn dùng playbook của Lost Kingdom — migrate vào, farm barb, PvP khi thấy. Sai. Strange Lands có **2 mechanic mới thay đổi hoàn toàn priority:** Neutral Fortress và Altar.

Những server biết focus đúng 2 mục tiêu này trong tuần đầu tiên thường dẫn score lớn trước khi enemy kịp respond. Bài này breakdown Strange Lands từ ngày đầu đến altar capture — và tại sao V3 bot là infrastructure cần thiết cho honor farming marathon.

## Cơ Chế Strange Lands — Neutral Fortress Và Altar

### Neutral Fortress

Strange Lands có pháo đài trung lập — không thuộc kingdom nào từ đầu. Chiếm pháo đài trung lập:
- Cho alliance buff (ATK/DEF boost % cho member trong vùng)
- Contribute kingdom KvK score mỗi giờ giữ
- Block enemy advance vào territory của kingdom bạn

**Mechanics chiếm pháo đài:**
- Rally attack với đủ power (level pháo đài quyết định sức kháng)
- Sau khi chiếm: phải garrison để giữ — không có garrison = pháo đài trở về neutral sau vài phút
- Enemy counter-rally có thể chiếm lại

**Priority neutral fortress:**
- Fortress gần boundary territory của kingdom: chiếm để tạo buffer zone
- Fortress có location advantage (tile cao, coverage rộng): buff area lớn hơn
- Fortress không có coverage sau lưng: easy to defend

### Altar

Altar là mục tiêu win-condition chính của Strange Lands. Giữ Altar:
- Kingdom giữ Altar cuối mùa = thắng KvK 2
- Score bonus per giờ giữ = massive
- Drop holy buff cho toàn kingdom khi giữ >2 giờ liên tục

**Altar capture mechanics:**
- Không thể rally Altar như pháo đài thông thường — cần **Altar-specific rally** (set bởi R4/R5)
- Garrison Altar cần power lớn hơn neutral fortress
- Defend Altar = reinforce liên tục vì enemy sẽ tấn công 24/7

## Phase Timeline Strange Lands

### Ngày 1-3: Land Rush

Mục tiêu: chiếm neutral fortress gần border, scout enemy position, barb farm trong vùng an toàn.

Actions:
- R5/R4 whale: chiếm neutral fortress tier cao nhất gần boundary
- Mid-tier (50-80M): barb farm trong territory đã secured, contribute honor
- Power thấp (<30M): barb farm xa front, không đến gần enemy territory

**Sai lầm:** power thấp tự ý march vào enemy territory để PvP solo = zeroed không đóng góp được gì.

### Ngày 3-7: Fortress Consolidation

Mục tiêu: giữ fortress đã chiếm, clear enemy attempt counter-rally, expand territory.

Actions:
- Reinforce fortress: 3-5 strong governors assign garrison mỗi fortress
- Scout Altar position: prepare rally force cho assault
- Honor farming: barb camp trong secured territory cường độ cao nhất mùa này

### Ngày 7-14: Altar Phase

Mục tiêu: assault và giữ Altar cho đến end của mùa.

Altar assault requires:
- Full alliance online cùng lúc (15-20 strong governors)
- Rally lead (R4/R5 designate)
- Reinforce wave: sau assault, liên tục reinforce để không bị solo'd
- Heal cycle: wounded troops heal ngay để available cho defend

## Barb Farming During Strange Lands — Honor Per Day Strategy

Strange Lands barb camp level cao hơn Lost Kingdom → honor per barb cao hơn. Nhưng cũng nguy hiểm hơn vì enemy active xung quanh.

**Safe farming zone:**
- Barb camp trong territory alliance đã secured (fortress coverage)
- Không march solo vào unclaimed territory
- Farm trong nhóm: 2-3 governor farm cùng zone, reinforce nhau nếu needed

**Honor per day estimate:**
- Player 30M power, barb camp level phù hợp, in secured zone: ~1.200-1.800 honor/ngày
- V3 bot với barb chain 24/7 trong secured zone: ~3.000-4.500 honor/ngày

> 🤖 Bot V3 RokdBot auto-farm barb trong vùng alliance secured — không bao giờ march ra khỏi safety zone, không bị zeroed. Honor farming Strange Lands tối đa mà không risk. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Bot V3 Làm Gì Khác

Trong Strange Lands, V3 bot:
- **Territory awareness:** chỉ farm barb trong zone alliance đã secure, không auto-march vào enemy territory
- **24/7 chain barb:** không miss khung giờ barb respawn, không miss overnight sessions
- **Auto-reinforce:** nếu R5 send reinforce request đến city, bot tự march troops vào fortress
- **Honor leaderboard tracking:** monitor personal honor rank, prioritize high-value barb camp khi cần catch-up

## So Sánh Strategy KvK 1 vs KvK 2

| Element | KvK 1 Lost Kingdom | KvK 2 Strange Lands |
|---|---|---|
| Win condition | Wonder control | Altar control |
| Key structure | Holy Site | Neutral Fortress + Altar |
| Entry timing | Ngày 3-5 | Ngày 1-3 (faster land rush) |
| Barb honor rate | Base | Cao hơn 20-30% |
| Risk level | Trung bình | Cao (Altar fighting) |

## FAQ

### Altar có thể chiếm solo không?

Không. Altar assault cần alliance rally — minimum 10-15 người online. Solo march vào Altar = killed trước khi deal damage.

### F2P có contribute được gì trong Strange Lands?

Barb farming honor trong secured zone là contribution quan trọng nhất từ F2P — không cần fight PvP. Honor aggregate từ toàn alliance barb farm là significant bonus.

### Bot có thể auto-garrison fortress không?

V3 bot khi được R5 trigger reinforce march → tự march troops vào fortress. Không auto-rally assault (assault cần human judgment về timing và coordination).

## Bắt Đầu Ngay

Strange Lands KvK 2 — focus đúng priority:
- Neutral fortress trong 3 ngày đầu (land rush)
- Barb farming secured zone cường độ cao (honor marathon)
- Altar assault coordination ngày 7+ (win condition)

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)

Đọc tiếp:
- [KvK Season 8 Complete Guide RoK 2026](/blog/kvk-season-8-complete-guide-rok-2026)
- [KvK Phase 3 Final Battle Altar Capture RoK 2026](/blog/kvk-phase-3-final-battle-altar-capture-rok-2026)
- [Heroic Anthem KvK Fort Build RoK 2026](/blog/heroic-anthem-kvk-fort-build-rok-2026)
  `,
};
