import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Gamepad2, Shield, Zap, Sword, Crown, Castle } from "lucide-react";

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
    <div className="hero-banner relative overflow-hidden">
      {/* Floating game-themed decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-[15%] left-[8%] w-64 h-64 rounded-full bg-[#7ce7ff]/[0.07] blur-[80px] animate-float-slow" />
        <div className="absolute top-[40%] right-[5%] w-80 h-80 rounded-full bg-[#f8c36b]/[0.06] blur-[100px] animate-float-slow-reverse" />
        <div className="absolute bottom-[10%] left-[30%] w-48 h-48 rounded-full bg-[#a78bfa]/[0.08] blur-[60px] animate-float-slow" />

        {/* Floating icons */}
        <div className="hidden lg:block absolute top-[20%] left-[6%] opacity-[0.08] animate-float-slow">
          <Sword className="w-20 h-20 text-[#7ce7ff]" />
        </div>
        <div className="hidden lg:block absolute top-[25%] right-[8%] opacity-[0.08] animate-float-slow-reverse">
          <Crown className="w-24 h-24 text-[#f8c36b]" />
        </div>
        <div className="hidden lg:block absolute bottom-[20%] left-[12%] opacity-[0.06] animate-float-slow-reverse">
          <Castle className="w-16 h-16 text-[#a78bfa]" />
        </div>
        <div className="hidden lg:block absolute bottom-[30%] right-[12%] opacity-[0.07] animate-float-slow">
          <Shield className="w-18 h-18 text-[#34d399]" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(124,231,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,231,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="text-center mb-12">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-[#9db0ca]">Hệ thống đang hoạt động</span>
          </div>

          {/* Main heading with glow */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            <span className="relative">
              Bot Farm
              <span className="absolute -inset-1 bg-[#7ce7ff]/10 blur-2xl rounded-full" />
            </span>{" "}
            <span className="text-gold relative">
              Rise of Kingdoms
              <span className="absolute -inset-2 bg-[#f8c36b]/10 blur-3xl rounded-full" />
            </span>
          </h1>

          <p className="hero-sub text-lg md:text-xl text-[#9db0ca] max-w-2xl mx-auto leading-relaxed mb-4">
            Dịch vụ treo bot trên cloud server — bạn không cần cài đặt gì.
            <br className="hidden md:block" />
            Thanh toán tự động, bot chạy trong 24h. Hỗ trợ VietQR & PayPal.
          </p>

          {/* Unique selling point badge — `usp-pill` is a Speakable hook (see WebPage schema in index.html) */}
          <div className="usp-pill inline-flex items-center gap-2 bg-[#fb7185]/10 border border-[#fb7185]/25 rounded-full px-5 py-2 mb-8">
            <Zap className="w-4 h-4 text-[#fb7185]" />
            <span className="text-sm text-[#fb7185] font-medium">29 tính năng tự động • Combo Spam + Luring + AOE độc quyền</span>
          </div>
        </div>

        {/* Stats with glow */}
        <div className="flex justify-center gap-4 md:gap-6 mb-12">
          <div className="stat-item group hover:border-[#7ce7ff]/30 transition-all cursor-default">
            <strong className="text-2xl md:text-4xl font-extrabold text-white font-mono group-hover:text-[#7ce7ff] transition-colors">
              {stats.totalOrders.toLocaleString()}
            </strong>
            <span className="text-[#9db0ca] text-xs md:text-sm">Đơn hoàn thành</span>
          </div>
          <div className="stat-item group hover:border-[#f8c36b]/30 transition-all cursor-default">
            <strong className="text-2xl md:text-4xl font-extrabold text-white font-mono group-hover:text-[#f8c36b] transition-colors">
              {stats.packages}
            </strong>
            <span className="text-[#9db0ca] text-xs md:text-sm">Gói dịch vụ</span>
          </div>
          <div className="stat-item group hover:border-[#34d399]/30 transition-all cursor-default">
            <strong className="text-2xl md:text-4xl font-extrabold text-white font-mono group-hover:text-[#34d399] transition-colors">
              {stats.inStock}
            </strong>
            <span className="text-[#9db0ca] text-xs md:text-sm">Còn hàng</span>
          </div>
        </div>

        {/* Trust badges with icons */}
        <div className="flex justify-center gap-6 md:gap-10 text-[#9db0ca]">
          <div className="flex items-center gap-2 text-xs md:text-sm group cursor-default">
            <div className="w-8 h-8 rounded-lg bg-[#f8c36b]/10 flex items-center justify-center group-hover:bg-[#f8c36b]/20 transition">
              <Zap className="w-4 h-4 text-[#f8c36b]" />
            </div>
            <span>Giao dịch tức thì</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm group cursor-default">
            <div className="w-8 h-8 rounded-lg bg-[#34d399]/10 flex items-center justify-center group-hover:bg-[#34d399]/20 transition">
              <Shield className="w-4 h-4 text-[#34d399]" />
            </div>
            <span>Bảo mật thanh toán</span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm group cursor-default">
            <div className="w-8 h-8 rounded-lg bg-[#7ce7ff]/10 flex items-center justify-center group-hover:bg-[#7ce7ff]/20 transition">
              <Gamepad2 className="w-4 h-4 text-[#7ce7ff]" />
            </div>
            <span>Hỗ trợ 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
}
