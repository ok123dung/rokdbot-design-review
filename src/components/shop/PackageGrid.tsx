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

// V3 redesign: grid with V2 Cao Cấp (mid-tier sweet spot) elevated as centerpiece
// (1.35fr column, gold glow, "★ Phổ biến nhất" badge). VIP top-tier is anchor on right.
// Detection priority: V2/Cao Cấp/phổ biến match → mid-tier by price → none.
function detectFeatured(pkgs: ServicePackage[]): string | null {
  if (pkgs.length === 0) return null;

  // 1. Heuristic: V2 / Cao Cấp / Phổ biến (NOT "Premium VIP" top tier)
  const byName = pkgs.find((p) => /v2|cao cấp|phổ biến/i.test(p.name) && !/vip/i.test(p.name));
  if (byName) return byName.id;

  // 2. Fallback: middle-priced package (sweet-spot conversion)
  if (pkgs.length >= 3) {
    const sortedAsc = [...pkgs].sort((a, b) => a.price - b.price);
    return sortedAsc[Math.floor(pkgs.length / 2)]?.id ?? null;
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
          // Fix H7: wrap JSON.parse in inner try — malformed DB row should not crash the page
          const parseFeatures = (f: unknown): string[] | null => {
            if (Array.isArray(f)) return f as string[];
            if (typeof f === "string") {
              try {
                return JSON.parse(f);
              } catch {
                return null;
              }
            }
            return null;
          };
          setPackages(
            data.map((pkg) => ({
              ...pkg,
              features: parseFeatures(pkg.features),
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
          Năm gói, <span className="cyan-grad">một câu trả lời rõ ràng.</span>
        </h2>
        <p className="text-[17px] text-[#9db0ca] leading-relaxed">
          Hầu hết khách chọn <strong style={{ color: "#fde68a" }}>Gói Cao Cấp V2</strong> — Combo Spam+Luring+AOE độc quyền. Top tier <strong style={{ color: "#fde68a" }}>Premium VIP</strong> dành cho người chơi Power 50M+ với support 1-1. Mua nhiều tháng giảm 10–25%. Hoàn 100% + 1 tháng nếu acc bị ban do bot.
        </p>
      </header>

      {loading && (
        <div className="pkg-grid-v3">
          {[0, 1, 2, 3, 4].map((i) => (
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
