import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Gamepad2, Shield, Zap } from "lucide-react";

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
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-[#9db0ca]">Hệ thống đang hoạt động</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-5 leading-tight">
            Bot Farm{" "}
            <span className="text-gold">Rise of Kingdoms</span>
          </h1>
          <p className="text-lg md:text-xl text-[#9db0ca] max-w-2xl mx-auto leading-relaxed">
            Dịch vụ treo bot trên cloud server — bạn không cần cài đặt gì.
            <br className="hidden md:block" />
            Thanh toán tự động, bot chạy trong 24h. Hỗ trợ VietQR & PayPal.
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-4 md:gap-6 mb-10">
          <div className="stat-item">
            <strong className="text-2xl md:text-4xl font-extrabold text-white font-mono">
              {stats.totalOrders.toLocaleString()}
            </strong>
            <span className="text-[#9db0ca] text-xs md:text-sm">Đơn hoàn thành</span>
          </div>
          <div className="stat-item">
            <strong className="text-2xl md:text-4xl font-extrabold text-white font-mono">
              {stats.packages}
            </strong>
            <span className="text-[#9db0ca] text-xs md:text-sm">Gói dịch vụ</span>
          </div>
          <div className="stat-item">
            <strong className="text-2xl md:text-4xl font-extrabold text-white font-mono">
              {stats.inStock}
            </strong>
            <span className="text-[#9db0ca] text-xs md:text-sm">Còn hàng</span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex justify-center gap-6 md:gap-10 text-[#9db0ca]">
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <Zap className="w-4 h-4 text-[#f8c36b]" />
            <span>Giao dịch tức thì</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <Shield className="w-4 h-4 text-[#34d399]" />
            <span>Bảo mật thanh toán</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <Gamepad2 className="w-4 h-4 text-[#7ce7ff]" />
            <span>Hỗ trợ 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
}
