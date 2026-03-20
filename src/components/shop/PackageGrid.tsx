import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PackageCard } from "./PackageCard";

interface ServicePackage {
  id: string;
  name: string;
  description: string | null;
  price: number;
  duration_days: number | null;
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
        .select("id, name, description, price, duration_days, stock, sold_count")
        .eq("is_active", true)
        .order("price", { ascending: true });

      if (data) setPackages(data);
      setLoading(false);
    }
    fetchPackages();
  }, []);

  if (loading) {
    return (
      <div className="max-w-[1240px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card-glass animate-pulse h-48" />
          ))}
        </div>
      </div>
    );
  }

  if (packages.length === 0) {
    return (
      <div className="max-w-[1240px] mx-auto px-4 py-12 text-center">
        <p className="text-muted">Chưa có gói dịch vụ nào.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8">
      <h2 className="text-xl font-bold text-white mb-6">Gói dịch vụ</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            id={pkg.id}
            name={pkg.name}
            description={pkg.description}
            price={pkg.price}
            durationDays={pkg.duration_days}
            stock={pkg.stock}
            soldCount={pkg.sold_count}
            onBuy={onBuy}
          />
        ))}
      </div>
    </div>
  );
}
