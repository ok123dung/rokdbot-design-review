import type { BlogPost } from "../blogTypes";

export const post: BlogPost = {
  slug: "field-battle-troop-loss-math-rok-2026",
  title: "Field Battle Troop Loss Math RoK 2026 — Tính Toán Worth Đánh Hay Không",
  description: "Field battle troop loss math RoK 2026: công thức tính break-even khi đánh field, khi nào đánh có lời, khi nào bỏ chạy tốt hơn — và bot V3 optimize troop survival rate 24/7.",
  date: "2026-05-10",
  readTime: "7 phút",
  coverImage: "/og-image.png",
  content: `
## Mày Có Biết Mình Đang Đốt Bao Nhiêu Troops Mỗi Field Battle?

Đa số players RoK không biết số. Họ thấy kẻ địch trên field → tap attack → troops chết → ngạc nhiên tại sao army mỏng dần sau 2 tuần KvK.

Field battle troop loss không phải con số cảm giác. Có công thức tính được — và nếu mày không tính, mày đang tặng army cho kẻ địch mà không biết.

Bài này cho mày framework tính: khi nào đánh field có lời, khi nào rút về city tốt hơn.

## Troop Loss Formula Cơ Bản

Khi 2 march đụng nhau field, loss tính theo:

**Dead = (Enemy ATK × Enemy Troop Count) ÷ (Own DEF × Own HP modifier)**

Simplified cho field battle 1v1 equal power:
- Bên nào có **ATK buff cao hơn** → loss của đối phương cao hơn
- Bên nào có **DEF thấp hơn** → loss của mình cao hơn
- Cavalry vs Cavalry (same tier) tỷ lệ loss xấp xỉ **1:1**

Nhưng đây là điều ít người để ý: **T5 vs T4 field battle không phải 1:1**.

### T4 vs T5 Field Battle Loss Ratio

| Attacker | Defender | Loss Ratio (Atk:Def) |
|---|---|---|
| T5 (ATK+30% vs T4) | T4 | **1:2.8** |
| T4 | T5 | **2.8:1** |
| T4 | T4 | **~1:1** |

Nghĩa là: 100 T5 của địch giết được ~280 T4 của mày trong cùng 1 field engagement. Nếu mày tap vào march T5 với army T4 → mày thua math từ trước khi combat bắt đầu.

## Break-Even Point: Khi Nào Đánh Field Có Lời?

Field battle "có lời" khi honor hoặc strategic value thu được **lớn hơn** resource cost để train lại troops chết.

### Resource Cost Mỗi Troop Chết

| Troop Tier | Resource Cost Mỗi Con | Heal Cost (Wounded) |
|---|---|---|
| T3 | ~120 resource | ~40 resource |
| T4 | ~800 resource | ~250 resource |
| T5 | ~2.000 resource | ~600 resource |

T4 chết không phải mất ~800 resource — thực tế mày mất **training time** (speedup) nữa. 1.000 T4 dead = 800.000 resource + **~120 giờ speedup** training lại.

### Field Battle Honor vs Cost

Đánh field player cùng power:
- Honor/kill: ~1 honor per 1 troop killed
- 1 field win (kill 2.000 T4 địch): **~2.000 honor**
- Loss của mày trong battle đó: ~1.800 T4 (gần 1:1 loss ratio)
- Replacement cost: 1.800 × 800 = **1.440.000 resource + 216 giờ speedup**

So sánh với barb fort lv5 rally:
- Honor/win: ~6.000 honor
- Loss: ~500 T4
- Replacement cost: 400.000 resource + 60 giờ speedup

**Barb fort lv5 = 3x honor với 1/4 cost** so với đánh field player cùng power.

> 🤖 Bot V3 auto-join barb fort rally với timing tối ưu, không đánh field không worth. [Xem V3 Siêu Cấp →](/#packages) · 1.200.000đ/tháng.

## Khi Nào Field Battle Worth Đánh?

Field battle có lợi trong **3 kịch bản cụ thể**:

### 1. Kẻ Địch Rõ Ràng Yếu Hơn (>40% Power Gap)

Nếu địch có power 60M, mày có 100M → T tier không quan trọng nhiều bằng số lượng. Loss ratio nghiêng hẳn về phía mày: mày kill 3-4 T4 địch cho mỗi T4 mày mất.

**Check trước khi attack**: tap profile địch → xem power. Nếu power gap <30% → không worth field battle.

### 2. Intercept March Địch Đang Yếu (Returning From Battle)

March địch vừa đánh fort, troops bị thương, rage reset → intercept lúc này là 1-sided massacre. Loss ratio của địch tăng 50-60% vì họ không có full force.

### 3. Defense Strategic Position (Không Phải Aggression)

Địch attack lên flag của alliance mày → mày reinforce garrison → field resolve theo garrison math (DEF buff +100% tại home territory). Đây là trường hợp field battle "worth" vì DEF buff đổi loss ratio hẳn.

## Trường Hợp Không Bao Giờ Đánh Field

- **Đánh march T5 khi mày có T4**: loss ratio 1:2.8 như trên
- **Solo field vs group 3+ march địch**: AoE commander buff stack = mày chết nhanh gấp đôi
- **Phase 1 KvK không có buff**: honor từ field Phase 1 thấp, troops loss không compensate được
- **Khi hospital gần đầy**: wounded troops không có chỗ → trực tiếp chết thay vì wounded

> 🤖 V3 monitor hospital capacity real-time, pause march khi hospital >80% để tránh dead cap. [Xem V3 →](/#packages).

## Power Gap Calculator Nhanh

Trước khi tap attack bất kỳ march nào, tính nhanh:

**Rule of thumb**: (Mày power ÷ Địch power) > 1.4 → attack worth. <1.4 → skip.

Cụ thể hơn:
- Mày 100M, địch 70M → ratio 1.43 → **đánh được**
- Mày 100M, địch 80M → ratio 1.25 → **skip**
- Mày 80M, địch 100M → ratio 0.8 → **chạy ngay**

## Phase KvK Ảnh Hưởng Loss Math Như Nào?

| Phase KvK | Field Battle Worth? | Lý Do |
|---|---|---|
| Phase 1 | Hiếm khi | Honor/AP thấp, không có battle buff |
| Phase 2 | Có, nếu power gap rõ | Battle buff x1.5 honor từ kill |
| Phase 3 | Có, mọi engagement | All-in, honor cực cao |

Phase 3 là lúc field battle worth nhất vì mọi kill đều cho honor cao hơn 2x. Đây là lúc botters V3 switch sang aggressive mode — bot join rally liên tục, không bỏ bất kỳ fort nào trong range.

## So Sánh: Manual Field vs Bot-Assisted

| Metric | Manual Player | V3 Bot |
|---|---|---|
| Field battle decision | Cảm tính | Math-based threshold |
| Miss optimal intercept timing | 60-70% lần | <5% lần |
| Hospital overflow troop death | Xảy ra thường | Tự động pause march |
| 3am peak KvK battle | Ngủ | Vẫn join rally |

Lợi thế bot không phải "chơi hộ" — là **không bao giờ bỏ lỡ window** và **không bao giờ mắc lỗi hospital overflow**.

## Kết Luận: Đánh Hay Không Đánh?

Math rõ ràng:
1. **Power gap >40%** → đánh field
2. **Intercept returning march** → đánh
3. **Garrison defense** → đánh (DEF buff có lợi)
4. **Tất cả trường hợp còn lại** → farm barb fort, cao hơn honor/AP

Bài tiếp theo đọc kèm:
- [Rally Attack vs Defense KvK RoK 2026](/blog/rally-attack-vs-defense-kvk-rok-2026)
- [Auto Rally Captain RoK 2026](/blog/auto-rally-captain-rok-2026)
- [Best Troop Types KvK RoK 2026](/blog/best-troop-types-kvk-rok-2026)

[→ Xem 5 gói cước](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1,2M** · Premium VIP 3M)
  `,
};
