import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export function HeroBanner() {
  const [stats, setStats] = useState({ totalOrders: 0, packages: 0, inStock: 0 });

  useEffect(() => {
    async function fetchStats() {
      const [ordersRes, packagesRes] = await Promise.all([
        supabase.from("orders").select("id", { count: "exact", head: true }),
        supabase.from("service_packages").select("id, stock, sold_count").eq("is_active", true),
      ]);

      const packages = packagesRes.data || [];
      const inStock = packages.filter(
        (p) => p.stock === null || p.sold_count < p.stock
      ).length;

      setStats({
        totalOrders: ordersRes.count || 0,
        packages: packages.length,
        inStock,
      });
    }
    fetchStats();
  }, []);

  return (
    <div className="hero-banner">
      <div className="max-w-[1240px] mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Bot Farm <span className="text-primary">Rise of Kingdoms</span>
        </h1>
        <p className="text-muted max-w-xl mx-auto mb-8">
          Dịch vụ treo bot 24/7 — thanh toán tự động, giao dịch nhanh gọn.
        </p>

        <div className="flex justify-center gap-6 md:gap-10">
          <div className="stat-item">
            <strong className="text-2xl md:text-3xl font-extrabold text-white font-mono">
              {stats.totalOrders.toLocaleString()}
            </strong>
            <span className="text-muted text-sm">Đơn hoàn thành</span>
          </div>
          <div className="stat-item">
            <strong className="text-2xl md:text-3xl font-extrabold text-white font-mono">
              {stats.packages}
            </strong>
            <span className="text-muted text-sm">Gói dịch vụ</span>
          </div>
          <div className="stat-item">
            <strong className="text-2xl md:text-3xl font-extrabold text-white font-mono">
              {stats.inStock}
            </strong>
            <span className="text-muted text-sm">Còn hàng</span>
          </div>
        </div>
      </div>
    </div>
  );
}
