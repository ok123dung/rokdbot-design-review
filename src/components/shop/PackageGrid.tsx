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

export function PackageGrid({ onBuy }: PackageGridProps) {
  const [packages, setPackages] = useState<ServicePackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPackages() {
      const { data } = await supabase
        .from("service_packages")
        .select("id, name, description, price, duration_days, features, stock, sold_count")
        .eq("is_active", true)
        .order("price", { ascending: true });

      if (data) {
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
      setLoading(false);
    }
    fetchPackages();
  }, []);

  // Mark 2nd most expensive as popular (or most sold)
  const popularId = packages.length >= 2 ? packages[packages.length - 2]?.id : null;

  if (loading) {
    return (
      <div className="max-w-[1240px] mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card-glass animate-pulse h-56" />
          ))}
        </div>
      </div>
    );
  }

  if (packages.length === 0) {
    return (
      <div className="max-w-[1240px] mx-auto px-4 py-16 text-center">
        <p className="text-[#9db0ca]">Chưa có gói dịch vụ nào.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Gói dịch vụ</h2>
        <span className="text-sm text-[#9db0ca]">{packages.length} gói đang bán</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
            isPopular={pkg.id === popularId}
            onBuy={onBuy}
          />
        ))}
      </div>
    </div>
  );
}
