import { useEffect, useState, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";

// V3 Hero — Variant B (Live Dashboard).
// Realtime stats fetched from Supabase feed the dashboard counters.
// Log lines + map are visual-only mockups (no PII, no live game data).
export function HeroBanner() {
  const [supaStats, setSupaStats] = useState<{
    totalOrders: number;
    packages: number;
    inStock: number;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchStats() {
      try {
        const [ordersRes, packagesRes] = await Promise.all([
          supabase.from("orders").select("id", { count: "exact", head: true }),
          supabase.from("service_packages").select("id, stock, sold_count").eq("is_active", true),
        ]);
        if (cancelled) return;
        const packages = packagesRes.data || [];
        const inStock = packages.filter((p) => p.stock === null || p.sold_count < p.stock).length;
        setSupaStats({
          totalOrders: ordersRes.count || 0,
          packages: packages.length,
          inStock,
        });
      } catch {
        // Network/Supabase failure — leave fallback (null) → dashboard shows static values.
        if (!cancelled) setSupaStats(null);
      }
    }
    fetchStats();
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="hero-v3" id="hero">
      <div className="hero-v3-grid" aria-hidden="true" />
      <div className="max-w-[1240px] mx-auto px-4 relative z-[1]">
        <div className="hero-v3-content">
          <HeroCopy />
          <HeroDashboard supaStats={supaStats} />
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────
// HERO COPY — left column
// ────────────────────────────────────────────────────────────
function HeroCopy() {
  return (
    <div>
      <div className="hero-v3-badge">
        <span className="dot" />
        discord.gg/rokdbot · Uptime ≥99% · Hỗ trợ 24/7
      </div>
      <h1>
        Combo <span className="gold-grad">Spam + Luring + AOE</span>
        <br />
        tự động, <span className="cyan-grad">độc quyền.</span>
      </h1>
      <p className="hero-v3-lead">
        Bot tự Spam troops duy trì áp lực, Luring quân địch vào vị trí lý tưởng, kích hoạt AOE skill commander đúng frame. Cloud server riêng, IP riêng, anti-detect &lt;0,1% ban rate. VietQR thanh toán, kích hoạt trong 24h.
      </p>
      <div className="hero-v3-actions">
        <a href="#packages" className="btn-hero-primary">Xem các gói →</a>
        <a
          href="https://discord.gg/UPuFYCw4JG"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero-ghost"
        >
          Tham gia Discord
        </a>
      </div>
      <div className="hero-v3-trust">
        <div className="hero-v3-trust-item">
          <strong>≥99%</strong>uptime cam kết
        </div>
        <div className="hero-v3-trust-item">
          <strong>24h</strong>kích hoạt sau VietQR
        </div>
        <div className="hero-v3-trust-item">
          <strong>&lt;0,1%</strong>tỷ lệ ban
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────
// HERO DASHBOARD — right column (Variant B)
// Realtime: rotating log + cycling counters + animated map markers.
// Stats line: Supabase totalOrders / packages / inStock. Falls back gracefully.
// ────────────────────────────────────────────────────────────
interface SupaStats {
  totalOrders: number;
  packages: number;
  inStock: number;
}

function HeroDashboard({ supaStats }: { supaStats: SupaStats | null }) {
  const [logIdx, setLogIdx] = useState(0);
  const [tick, setTick] = useState(0);

  // Visual mockup counters that drift over time — purely decorative.
  const baseRss = 8537204;
  const baseTroops = 142891;
  const rss = baseRss + tick * 18000;
  const troops = baseTroops + tick * 8;
  const marches = 3 + (tick % 3);

  const logLines: ReactNode[] = [
    <><span>[14:32:18]</span> <span className="ok">✓</span> Bot #47 → Farm food node lv5 <span className="gold">+24K food</span></>,
    <><span>[14:32:21]</span> <span className="cyan">→</span> Bot #12 train troops queue 30/30 <span className="gold">[T5 cav]</span></>,
    <><span>[14:32:24]</span> <span className="ok">✓</span> Rally captain — barbarian fortress lv4 <span className="gold">success</span></>,
    <><span>[14:32:27]</span> <span className="cyan">→</span> Scout dispatched to (842, 1240) <span>ETA 12s</span></>,
    <><span>[14:32:31]</span> <span className="ok">✓</span> Bot #03 collected gathering tile <span className="gold">+18K stone</span></>,
    <><span>[14:32:34]</span> <span className="cyan">→</span> Healing wounded troops <span>[3,420 → barracks]</span></>,
    <><span>[14:32:38]</span> <span className="ok">✓</span> Alliance help sent to 8 members</>,
    <><span>[14:32:42]</span> <span className="cyan">→</span> Bot #21 research complete <span className="gold">[T4 archer III]</span></>,
  ];

  useEffect(() => {
    const t = setInterval(() => setLogIdx((i) => (i + 1) % logLines.length), 1800);
    return () => clearInterval(t);
  }, [logLines.length]);

  useEffect(() => {
    const t = setInterval(() => setTick((n) => n + 1), 1400);
    return () => clearInterval(t);
  }, []);

  // Show 7 lines from current index — gently fading toward the bottom.
  const visible: ReactNode[] = [];
  for (let i = 0; i < 7; i++) visible.push(logLines[(logIdx + i) % logLines.length]);

  // Real numbers when Supabase is up; fallback to mockup numbers if not.
  const fallbackOrders = "—";
  const ordersLabel = supaStats ? supaStats.totalOrders.toLocaleString() : fallbackOrders;

  return (
    <div className="hero-dash" aria-label="Live dashboard preview">
      <div className="dash-titlebar">
        <div className="dash-titlebar-l">
          <span className="dash-dot r" />
          <span className="dash-dot y" />
          <span className="dash-dot g" />
        </div>
        <div className="dash-titlebar-c hidden sm:block">rokdbot.com / dashboard / kingdom_2847</div>
        <div className="dash-status"><span className="dot" />LIVE</div>
      </div>

      <div className="dash-stats">
        <div className="dash-stat">
          <div className="l">RSS / hour</div>
          <div className="v">{(rss / 1e6).toFixed(2)}M</div>
          <div className="delta">▲ +14% vs avg</div>
        </div>
        <div className="dash-stat">
          <div className="l">Troops</div>
          <div className="v gold">{troops.toLocaleString()}</div>
          <div className="delta">▲ +0.3%</div>
        </div>
        <div className="dash-stat">
          <div className="l">Marches</div>
          <div className="v green">{marches}/7</div>
          <div className="delta">active</div>
        </div>
        <div className="dash-stat">
          <div className="l">{supaStats ? "Đơn hoàn thành" : "Uptime"}</div>
          <div className="v">{supaStats ? ordersLabel : "99.6%"}</div>
          <div className="delta">{supaStats ? `${supaStats.inStock}/${supaStats.packages} gói còn` : "7d window"}</div>
        </div>
      </div>

      <div className="dash-body">
        <div className="dash-log">
          <div className="dash-log-h">— action_log.live</div>
          <div className="dash-log-stream">
            {visible.map((line, i) => (
              <div key={`${logIdx}-${i}`} style={{ opacity: 1 - i * 0.13 }}>{line}</div>
            ))}
          </div>
        </div>
        <div className="dash-map">
          <div className="dash-map-h">— kingdom_map</div>
          <svg className="dash-map-svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
            {[40, 80, 120, 160].map((p) => (
              <g key={p}>
                <line x1={p} y1="0" x2={p} y2="200" stroke="rgba(124,231,255,.06)" />
                <line x1="0" y1={p} x2="200" y2={p} stroke="rgba(124,231,255,.06)" />
              </g>
            ))}
            <rect x="92" y="92" width="16" height="16" rx="2" fill="#7ce7ff" opacity=".9" />
            <rect x="50" y="60" width="9" height="9" rx="1" fill="#7ce7ff" opacity=".5" />
            <rect x="140" y="120" width="9" height="9" rx="1" fill="#7ce7ff" opacity=".5" />
            <rect x="60" y="140" width="9" height="9" rx="1" fill="#7ce7ff" opacity=".5" />
            <rect x="150" y="50" width="9" height="9" rx="1" fill="#7ce7ff" opacity=".5" />

            <circle className="dash-resource" cx="32" cy="40" r="3" />
            <circle className="dash-resource" cx="170" cy="80" r="3" style={{ animationDelay: ".5s" }} />
            <circle className="dash-resource" cx="46" cy="170" r="3" style={{ animationDelay: "1s" }} />
            <circle className="dash-resource" cx="178" cy="160" r="3" style={{ animationDelay: "1.4s" }} />

            <line className="dash-march-line" x1="100" y1="100" x2="32" y2="40" />
            <line className="dash-march-line" x1="100" y1="100" x2="170" y2="80" style={{ animationDelay: ".8s" }} />
            <line className="dash-march-line" x1="100" y1="100" x2="46" y2="170" style={{ animationDelay: "1.4s" }} />

            <circle className="dash-march" cx="60" cy="65" r="2.5" />
            <circle className="dash-march" cx="148" cy="88" r="2.5" />
            <circle className="dash-march" cx="68" cy="148" r="2.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
