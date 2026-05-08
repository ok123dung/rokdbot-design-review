import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PackageCard } from "./PackageCard";

interface ServicePackage {
  id: string;
  name: string;
  description: string | null;
  price: number;
  duration_days: number | null;
  features: string[] | null;
  stock: number | null;
  sold_count: number;
}

interface PackageGridProps {
  onBuy: (packageId: string) => void;
}

// V3 redesign: 4-column grid where the V2 / "Premium" / "Phổ biến" package is elevated
// as a centerpiece (1.35fr column, gold glow, "★ Phổ biến nhất" badge).
// Detection priority: name match → 2nd-most-expensive → none.
function detectFeatured(pkgs: ServicePackage[]): string | null {
  if (pkgs.length === 0) return null;

  // 1. Heuristic: package whose name contains "v2", "premium", or "phổ biến"
  const byName = pkgs.find((p) => /v2|premium|phổ biến/i.test(p.name));
  if (byName) return byName.id;

  // 2. Fallback: 2nd-most-expensive (mid-tier is usually the hero)
  if (pkgs.length >= 2) {
    const sortedDesc = [...pkgs].sort((a, b) => b.price - a.price);
    return sortedDesc[1]?.id ?? null;
  }

  return null;
}

export function PackageGrid({ onBuy }: PackageGridProps) {
  const [packages, setPackages] = useState<ServicePackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function fetchPackages() {
      try {
        const { data, error: fetchErr } = await supabase
          .from("service_packages")
          .select("id, name, description, price, duration_days, features, stock, sold_count")
          .eq("is_active", true)
          .order("price", { ascending: true });

        if (cancelled) return;
        if (fetchErr) {
          setError(true);
        } else if (data) {
          setPackages(
            data.map((pkg) => ({
              ...pkg,
              features:
                typeof pkg.features === "string"
                  ? JSON.parse(pkg.features)
                  : Array.isArray(pkg.features)
                  ? pkg.features
                  : null,
            }))
          );
        }
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchPackages();
    return () => { cancelled = true; };
  }, []);

  const featuredId = detectFeatured(packages);

  return (
    <section className="max-w-[1240px] mx-auto px-4 py-20 md:py-24" id="packages">
      <header className="max-w-[720px] mx-auto text-center mb-14">
        <span className="section-eyebrow">Bảng giá</span>
        <h2 className="text-3xl md:text-4xl text-white mb-3 leading-tight" style={{ textWrap: "balance" } as React.CSSProperties}>
          Bốn gói, <span className="cyan-grad">một câu trả lời rõ ràng.</span>
        </h2>
        <p className="text-[17px] text-[#9db0ca] leading-relaxed">
          Hầu hết khách chọn <strong style={{ color: "#fde68a" }}>V2 Premium</strong> — Combo Spam+Luring+AOE độc quyền. Mua nhiều tháng giảm 10–25%. Hoàn 100% + 1 tháng nếu acc bị ban do bot.
        </p>
      </header>

      {loading && (
        <div className="pkg-grid-v3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="pkg-card-v3 animate-pulse h-80" />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="text-center text-[#9db0ca] py-8">
          Không tải được danh sách gói. Vui lòng thử lại sau hoặc liên hệ Discord.
        </div>
      )}

      {!loading && !error && packages.length === 0 && (
        <div className="text-center text-[#9db0ca] py-8">
          Chưa có gói dịch vụ nào.
        </div>
      )}

      {!loading && !error && packages.length > 0 && (
        <div className="pkg-grid-v3">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              id={pkg.id}
              name={pkg.name}
              description={pkg.description}
              price={pkg.price}
              durationDays={pkg.duration_days}
              features={pkg.features}
              stock={pkg.stock}
              soldCount={pkg.sold_count}
              isFeatured={pkg.id === featuredId}
              onBuy={onBuy}
            />
          ))}
        </div>
      )}
    </section>
  );
}
