import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "commander-expedition-stamina-farming-rok-2026",
  title: "Commander Expedition Stamina Farming RoK 2026 — Auto Stage Clear với Bot",
  description: "Expedition stamina bỏ phí mỗi ngày = mất sculpture, mất commander copy, mất progression. F2P lý ra phải clear expedition daily nhưng manual quá tốn thời gian. Bot V2 auto-clear từng stage, thu thập reward tự động không bỏ ngày nào.",
  date: "2026-05-10",
  readTime: "6 phút",
  coverImage: "/og-image.png",
  content: `
## Expedition Stamina Mà Bỏ Phí = Waste Commander Progression

Expedition system RoK cho 2 stamina / 10 phút = 288 stamina / ngày (cap 500). Nếu bạn không dùng, cap rồi ngừng gen — stamina vượt cap = mất.

Phần thưởng expedition không phải nhỏ:
- **Commander copy** (Pelagius, Lohar, Minamoto — tất cả commander free đến từ đây)
- **Universal Sculpture** — mỗi stage reward
- **Golden Key** — mở chest commander bronze/silver
- **Speedup** + **Resource chest**

Player bỏ expedition 1 tuần = mất khoảng 2016 stamina = mất 2-3 commander copy + 50-80 sculpture equivalent. Nhân với 12 tháng = mất progression không thể bù lại.

## Tại Sao Manual Expedition Khó Maintain?

Expedition không phải "click một nút xong". Mỗi stage có:
- Chọn commander pair phù hợp với enemy type của stage
- Kéo march vào đúng vị trí
- Wait for combat resolution (5-15 giây/stage)
- Collect reward, claim chest, advance

Khoảng 8-12 stage / ngày = 15-20 phút daily nếu không có lag. Cộng với manual farm rợ, gather, build, research — player maintain được 3-4 ngày rồi skip.

**Cumulative miss:** skip 3 ngày expedition = miss 6+ commander copy chance = miss 1/10 của Minamoto progress. Không nhìn thấy ngay nhưng 6 tháng sau thấy commander cùng server của người khác maxed còn mình star 1-2.

## Expedition Stage Priority — Không Phải Clear All Là Optimal

Đây là điều ít guide nào nói: **không phải stage nào cũng worth clear với stamina giới hạn**.

Stage reward phân loại:
- **Stage 1-5 (early):** resource chest, bronze key. Low value.
- **Stage 6-12 (mid):** silver key, Universal Sculpture tier thấp. Medium.
- **Stage 13-20 (late):** Golden Key, commander copy, Universal Sculpture tier cao. High value.

Với 288 stamina/ngày, ưu tiên clear stage cao trước. Không grind stage thấp nếu đã có đủ resource.

Vấn đề: stage cao hơn yêu cầu commander pair tốt hơn. F2P mới chơi bị bottleneck ở commander tier → phải grind stage thấp trước để farm commander copy để unlock stage cao → vòng lặp tiến chậm.

Bot giải quyết bằng cách auto-select đúng commander pair cho từng stage, không bao giờ gửi sai pair làm miss combat.

> 🤖 Bot V2 RokdBot auto-clear expedition mỗi ngày — chọn đúng commander pair cho từng stage, collect reward, advance stage. 15-20 phút manual = 0 phút với bot. [Xem V2 Cao Cấp →](/#packages) · 900.000đ/tháng.

## Commander Pair Tốt Nhất Cho Expedition Stages

Expedition có 3 enemy categories: infantry-heavy, cavalry-heavy, archer-heavy. Cần commander counter đúng:

**vs. Infantry stage:** Cavalry primary (Pelagius + Minamoto) — cavalry có advantage vs. infantry in expedition combat.

**vs. Cavalry stage:** Infantry primary (Sun Tzu + Constantine) — infantry counter cavalry.

**vs. Archer stage:** Infantry primary hoặc cavalry with shield (infantry tanky hơn vs. archer splash).

**Universal pair cho beginner:** Boudica + Pelagius — Boudica passive bonus damage anti-barb/any enemy, Pelagius heal sustain. Không phải tối ưu nhưng clear được 80% stage trong expedition.

## Stamina Management — Không Để Cap Overflow

Cap 500 stamina. Gen 2/10 phút. Nếu ngủ 8 tiếng = gen 96 stamina khi ngủ. Nếu có 500 trước khi ngủ = 96 stamina bị mất.

**Rule đơn giản:** Clear expedition trước khi ngủ đến khi stamina xuống dưới 200. Gen ban đêm sẽ không overflow.

Manual: nhớ làm mỗi tối. Bot: auto-clear khi stamina đạt ngưỡng, không cần nghĩ đến.

Bot V2 monitor stamina real-time — khi stamina đạt 80% cap (400), tự động start expedition clear sequence. Player ngủ yên, stamina không bao giờ overflow.

## ROI Expedition vs. Barb Farm — So Sánh Thực

| Source | Resource/giờ | Commander Copy | Sculpture/ngày |
|---|---|---|---|
| Barb farm manual | Trung bình | 0 | ~2-5 |
| Expedition manual | Thấp | Yes | ~5-10 |
| Expedition bot V2 | N/A | Yes, tự động | ~8-15 |
| Barb farm bot V2 | Cao | 0 | ~3-6 via XP |
| Cả 2 đồng thời (bot) | Cao | Yes | ~15-20 |

Bot V2 làm cả 2 đồng thời — barb farm march và expedition march hoạt động song song (V2 có 1 march chính + expedition). Đây là advantage không thể replicate bằng manual.

## Stage Clear Không Thành Công — Lỗi Thường Gặp

**Lỗi 1:** Gửi damaged troops vào expedition stage. Troops bị thương = combat power giảm = có thể fail stage cao. Bot auto-check troop HP trước khi gửi expedition.

**Lỗi 2:** Sai commander pair. Infantry march vào cavalry-heavy stage = disadvantage. Fail stage = tốn stamina mà không có reward.

**Lỗi 3:** Không claim reward sau khi clear. Stage cleared nhưng không collect = reward không apply vào inventory. Nhiều player quên collect rồi thắc mắc sao không nhận được.

Bot handle cả 3: check troop HP, chọn đúng pair, auto-collect sau khi clear.

## Expedition Chest Value vs. Recruit Chest

**Expedition chest:** miễn phí từ stamina clear, nhận commander copy guaranteed ở milestone stage. Cost = 0.

**Recruit chest:** tốn gems / gold, commander copy random 1-3%. Cost = cao.

Expedition là cách duy nhất để F2P grind commander copy guaranteed mà không RNG. Đây là lý do auto-expedition là feature critical cho bot F2P, không phải nice-to-have.

> 🤖 Auto expedition + barb farm đồng thời — V2 Cao Cấp 900k/tháng. Commander free maxed nhanh gấp 3x manual vì không bỏ ngày nào. [Đăng ký V2 →](/#packages)

## FAQ

### Expedition stamina có thể mua thêm không?

Có, bằng gem. Nhưng F2P không nên mua — gem nên dùng cho VIP và other priority. Stamina gen tự nhiên đủ nếu không waste.

### Bot có clear expedition ban đêm không?

Có. Bot V2 chạy 24/7 — nếu stamina cap sắp overflow lúc 3am, bot sẽ tự clear. Player không cần thức.

### Expedition có giới hạn stage max không?

Mỗi season expedition reset và thêm stage mới. Season 8 có thêm 5 stage so với Season 7. Bot auto-adapt với stage mới mà không cần update thủ công.

### V1 có auto expedition không?

V1 focus vào barb farm, không có expedition automation. V2 trở lên mới có expedition auto-clear.

## Tổng Kết

Expedition stamina = nguồn commander copy và sculpture free quan trọng nhất game. Waste = mất progression thật sự.

1. Clear daily, ưu tiên stage cao
2. Manage stamina không overflow cap
3. Chọn đúng commander pair cho từng enemy type
4. Bot V2 làm tất cả tự động, không bỏ ngày nào

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · **V2 900k** · V3 1,2M · Premium VIP 3M)

Đọc tiếp:
- [Best Free Commanders RoK 2026 — Không Cần Recruit](/blog/best-free-commanders-rok-2026-no-recruit)
- [Commander Expert Sculpture Investment RoK 2026](/blog/commander-expert-sculpture-investment-rok-2026)
- [AI Commander Rotation V3 RoK](/blog/ai-commander-rotation-v3-rok)
  `,
};
