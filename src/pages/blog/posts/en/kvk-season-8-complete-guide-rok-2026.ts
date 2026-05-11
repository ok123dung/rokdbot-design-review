import type { BlogPost } from "../../blogTypes";

export const post: BlogPost = {
  slug: "kvk-season-8-complete-guide-rok-2026",
  title: "KvK Season 8 Complete Guide RoK 2026 — Daily Schedule + Bot Config From Day 1 to Day 14",
  description: "KvK Season 8 complete guide: 14-day phase breakdown, commander prep, Honor farming target, bot V3 config per phase. From pre-KvK 48h prep to final Field of Honor Day 14. Includes Top 30 alliance contribution target.",
  date: "2026-05-10",
  readTime: "10 min",
  coverImage: "/og-image.png",
  content: `
## KvK Season 8 Overview

KvK (Kingdom vs Kingdom) Season 8 runs 14 days. Two kingdoms matched against each other, with daily phase events building toward Day 14 Field of Honor finale.

Phase structure:

- **Pre-KvK (48h prep)**: Configure bot, commander pair, troop training
- **Phase 1 (Days 1-3)**: Gather phase — alliance territory expansion, RSS production
- **Phase 2 (Days 4-9)**: Combat phase — barb chain Honor farming, alliance rally
- **Phase 3 (Days 10-14)**: Field of Honor — open field battles, final Honor push

Top 30 alliance contribution requires ~300,000 Honor across the 14 days. With bot V3 (2 marches barb chain 24/7), that's achievable at ~430 barbs/day = 4,300 Honor/day × 14 = 60,200 base + Combo multiplier 2x = 120,400 Honor minimum. With Field of Honor bonus and rally Honor: 300,000+ realistic.

## Pre-KvK 48h Prep Checklist

Critical 48 hours before KvK opens. Do NOT skip:

- [ ] Bot V3 active and running 24h before
- [ ] Primary rally commander pair confirmed (Yi Seong-Gye + Cao Pi or equivalent)
- [ ] Secondary barb chain commander pair (Lohar + Sun Tzu)
- [ ] Troop training queue full T5
- [ ] Healing speedup stockpiled (200+ hours minimum)
- [ ] Alliance HQ placement decided with R4/R5
- [ ] Holy site rotation schedule in alliance chat
- [ ] Anti-captcha V3+ configured (for overnight farming)

If any item is missing, KvK Day 1 will lose 4-8 hours of farming time.

## Phase 1 — Gather Phase (Days 1-3)

Goal: Maximize alliance territory + RSS production for combat phase.

- **Bot config**: 4 marches gather on Lv 5-6 tiles, 1 march barb chain
- **Daily target**: 50M RSS contributed to alliance + 800 Honor
- **Commander pair**: Gather pair (Charles Martel + Scipio) on 3 marches, combat pair on 4th
- **Heal cycle**: Skip — no combat losses in Phase 1

Alliance territory expansion is everything in Phase 1. If your alliance HQ is in a weak position, alliance migration cost vs lost territory makes it worth migrating now (not later).

## Phase 2 — Combat Phase (Days 4-9)

Goal: Honor farming + alliance rally capture.

- **Bot config**: 2 marches barb chain with Combo Spam + Luring + AOE (V3 setup)
- **Daily target**: 4,300 Honor (430 barbs × 10 Honor/barb avg)
- **Commander pair**: Rally Lead (Yi Seong-Gye + Cao Pi) for rally, Lohar + Sun Tzu for chain
- **Heal cycle**: Every 6 hours, auto-trigger

Combo Spam + Luring + AOE technique on bot V3 is the secret weapon: pull 5-7 barbs per AOE cast = 4x throughput of manual barb farming. After 6 days at 4,300 Honor/day = 25,800 Honor base for Phase 2.

## Phase 3 — Field of Honor Finale (Days 10-14)

Goal: Final Honor push + rally captain participation.

- **Bot config**: 2 marches combat (Field of Honor + barb chain), 2 marches gather support
- **Daily target**: 8,000+ Honor (Field of Honor 2x multiplier active)
- **Commander pair**: Full rally lead setup, anti-cavalry archer if matching kingdom is cavalry-heavy
- **Heal cycle**: Every 4 hours during Field of Honor active windows

Field of Honor 2x multiplier on Days 10-14 = each kill counts double. This is when 40-50% of total KvK Honor is earned. Top 30 alliance members typically hit 8,000-12,000 Honor/day in this phase.

## Bot V3 Configuration Per Phase

| Phase | Marches Config | Heal Frequency | Captcha Sensitivity |
|---|---|---|---|
| Pre-KvK | 4 gather + 1 chain | Daily | Normal |
| Phase 1 | 4 gather + 1 chain | Skip | Normal |
| Phase 2 | 1 gather + 2 chain (Combo) + 1 rally + 1 heal | 6h | High (KvK = more captcha) |
| Phase 3 | 2 combat + 2 gather support + 1 rally | 4h | Maximum |

Auto-switch between configs at phase boundaries — V3 detects KvK day + auto-rotates.

## Target Honor Per Alliance Rank

| Rank | Honor Target Days 1-14 | Difficulty |
|---|---|---|
| R5 Leader | 500,000+ | Whale + bot needed |
| R4 Officer | 350,000+ | V3 + active 14 days |
| R3 Active | 200,000+ | **V3 minimum target** |
| R2 Member | 100,000+ | V2 viable |
| R1 Casual | 30,000+ | V1 or manual |

R3-Active is the sweet spot for V3 bot subscriber — sustained 14-day farming + Combo + rally capture lands at ~250,000 Honor consistently.

## Common KvK Mistakes (Avoid)

- **Bot start Day 1** (not 48h prior) — wastes 8 hours of Phase 1 setup
- **No Anti-captcha** during overnight farming — account restrict 3-5 times in 14 days = lost 12+ hours
- **Manual swap commander pair** at phase boundary — wastes 2-3 hours per swap = 6-8 hours total
- **Skip heal cycle** in Phase 2/3 — troops in hospital cap = no replacements for rally
- **Migration during KvK** — locks for 24-48h in critical Phase 2

## Pre-KvK Anxiety Bot Relief

If you're casual and KvK 8 is intimidating, the V3 bot eliminates 90% of the active management burden. Set it 48h before, check 2x/day for 5 minutes, and let the bot handle:

- Continuous barb chain (Honor)
- Heal cycles (troop preservation)
- Speedup smart burn (build queue)
- Rally participation (when captain calls)
- Field of Honor positioning (Phase 3)

Player intervention: only commander pair confirmation at phase boundaries (3 times in 14 days).

## FAQ

### When does KvK Season 8 open?
Check the in-game event calendar. Schedule varies per kingdom matchmaking date — typically 30 days after last KvK Season ended.

### Can bot run Field of Honor automatically?
Yes. Bot V3 detects FoH window open + auto-positions troops in zone + auto-rally on captain call. Manual override available if you want specific positioning.

### How much speedup do I need for 14 days?
Minimum 200 hours healing speedup + 100 hours training speedup. Pro players keep 500+ hours total reserves.

### What if my matched kingdom is much stronger?
Anti-zeroing strategy: Migrate troops to alliance fortress, max wall + watchtower, accept Phase 1-2 defensive role, push hard in Phase 3 FoH where positioning matters more than raw Power.

## Get Started

**V3 Siêu Cấp 1,200,000đ/month**:

- 2 march barb chain 24/7 with Combo Spam + Luring + AOE
- Auto heal + train + build during all 14 KvK days
- Honor ~430 barbs/day = top alliance contribution

[→ View all 5 packages](/#packages) (Trial 150k · V1 750k · V2 900k · **V3 1.2M** · Premium VIP 3M)

## Read More

- [KvK Season Prep Bot Checklist 2026](/blog/kvk-season-prep-bot-checklist-rok-2026)
- [Auto Honor Farming Case Study — 17-Month FREE AP](/blog/auto-honor-farming-kvk-rok-2026)
- [Rally Attack vs Defense KvK 2026](/blog/rally-attack-vs-defense-kvk-rok-2026)
  `,
};
