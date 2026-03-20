import { useState } from "react";
import {
  Wheat, Gem, Swords, Castle, Users, Shield,
  ChevronDown, Zap, Star
} from "lucide-react";

interface FeatureGroup {
  title: string;
  icon: React.ElementType;
  color: string;
  isHighlight?: boolean;
  features: { name: string; desc: string; unique?: boolean }[];
}

const groups: FeatureGroup[] = [
  {
    title: "Farm & Gather",
    icon: Wheat,
    color: "#34d399",
    features: [
      { name: "Gather Resources", desc: "Auto farm food, wood, stone, gold trên map 24/7" },
      { name: "Collect Gems", desc: "Farm gem tối ưu ở Home Kingdom + KvK map" },
      { name: "Alliance Territory RSS", desc: "Thu hoạch tài nguyên trong lãnh thổ alliance" },
      { name: "City Resources", desc: "Thu hoạch tài nguyên trong thành phố" },
      { name: "Transport Resources", desc: "Điều động/vận chuyển tài nguyên giữa các acc" },
      { name: "Auto Use Items", desc: "Tự dùng resource items, keys từ inventory" },
      { name: "Auto Use Speedups", desc: "Tự dùng tăng tốc theo cấu hình" },
    ],
  },
  {
    title: "Combat",
    icon: Swords,
    color: "#fb7185",
    isHighlight: true,
    features: [
      { name: "Fight Barbarians", desc: "Đánh man rợ đơn lẻ, farm AP + XP" },
      { name: "Spam Barbarians", desc: "Gọi man rợ xuất hiện xung quanh bằng items triệu hồi", unique: true },
      { name: "Barbarian Luring + AOE", desc: "Kéo man rợ lại gần → dùng skill AOE đánh cùng lúc, farm AP gấp 3-5x", unique: true },
      { name: "Farm Marauders & Events", desc: "Auto farm Lohar, Marauders, event đặc biệt" },
      { name: "Participate in Rally", desc: "Tự động tham gia rally alliance" },
    ],
  },
  {
    title: "City & Development",
    icon: Castle,
    color: "#38bdf8",
    features: [
      { name: "Upgrade Buildings", desc: "Auto upgrade buildings theo priority" },
      { name: "Research Technology", desc: "Auto research công nghệ liên tục" },
      { name: "Train Troops", desc: "Auto train binh tất cả loại" },
    ],
  },
  {
    title: "Alliance",
    icon: Users,
    color: "#a78bfa",
    features: [
      { name: "Help Alliance", desc: "Auto bấm help cho alliance members" },
      { name: "Alliance Gifts", desc: "Auto nhận quà alliance" },
      { name: "Donate Tech", desc: "Auto donate công nghệ alliance" },
      { name: "Open Report/Mail", desc: "Auto mở và xử lý thư/báo cáo" },
    ],
  },
  {
    title: "Daily Tasks & Collection",
    icon: Star,
    color: "#f8c36b",
    features: [
      { name: "VIP Gifts", desc: "Auto nhận quà VIP hàng ngày" },
      { name: "Daily Task Chests", desc: "Auto mở rương nhiệm vụ" },
      { name: "Free Tavern Chests", desc: "Auto mở rương miễn phí quán rượu" },
      { name: "Tribal Villages", desc: "Auto thăm làng bộ lạc" },
      { name: "Mysterious Caves", desc: "Auto khám phá hang động (High/Medium/Low)" },
      { name: "Explore Fog", desc: "Auto khám phá sương mù bản đồ" },
    ],
  },
  {
    title: "Safety & Utility",
    icon: Shield,
    color: "#34d399",
    features: [
      { name: "Heal Troops", desc: "Auto chữa thương binh" },
      { name: "Auto Shield", desc: "Tự bật khiên bảo vệ thành" },
      { name: "Auto Captcha", desc: "Tự giải captcha khi game yêu cầu" },
      { name: "Teleport", desc: "Auto di chuyển/du lịch thành phố" },
    ],
  },
];

export function FeaturesSection() {
  const [expandedGroup, setExpandedGroup] = useState<number | null>(1); // Combat open by default

  const totalFeatures = groups.reduce((sum, g) => sum + g.features.length, 0);
  const uniqueCount = groups.reduce(
    (sum, g) => sum + g.features.filter((f) => f.unique).length, 0
  );

  return (
    <section className="max-w-[1240px] mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          <span className="text-gold">{totalFeatures}</span> tính năng tự động hóa
        </h2>
        <p className="text-[#9db0ca] max-w-lg mx-auto">
          Bao gồm {uniqueCount} tính năng độc quyền không đối thủ nào có.
          <br />
          Cloud hosted — bạn không cần cài đặt gì.
        </p>
      </div>

      {/* Unique combo highlight */}
      <div className="card-glass p-5 mb-8 border-[#fb7185]/30" style={{ background: "linear-gradient(135deg, rgba(251,113,133,0.08), rgba(10,16,32,0.9))" }}>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#fb7185]/15 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-[#fb7185]" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-white font-bold">Combo độc quyền: Spam + Luring + AOE</h3>
              <span className="text-[10px] font-bold bg-[#fb7185]/20 text-[#fb7185] px-2 py-0.5 rounded-full">ONLY ROKDBOT</span>
            </div>
            <p className="text-[#9db0ca] text-sm leading-relaxed">
              Gọi man rợ xuất hiện xung quanh → Kéo man rợ lại gần nhau → Dùng skill AOE đánh cùng lúc.
              Farm AP/XP nhanh gấp <strong className="text-white">3-5 lần</strong> so với đánh thường. Không bot nào khác có combo này.
            </p>
          </div>
        </div>
      </div>

      {/* Feature groups */}
      <div className="space-y-3">
        {groups.map((group, gi) => (
          <div key={gi} className="card-glass overflow-hidden" style={{ padding: 0 }}>
            <button
              onClick={() => setExpandedGroup(expandedGroup === gi ? null : gi)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${group.color}15` }}
                >
                  <group.icon className="w-5 h-5" style={{ color: group.color }} />
                </div>
                <div>
                  <span className="text-white font-semibold">{group.title}</span>
                  {group.isHighlight && (
                    <span className="ml-2 text-[10px] font-bold bg-[#fb7185]/20 text-[#fb7185] px-2 py-0.5 rounded-full">
                      2 UNIQUE
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#9db0ca] text-sm">{group.features.length} features</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#9db0ca] transition-transform duration-200 ${
                    expandedGroup === gi ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {expandedGroup === gi && (
              <div className="px-4 pb-4 pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {group.features.map((f, fi) => (
                    <div
                      key={fi}
                      className={`flex items-start gap-2.5 p-3 rounded-lg ${
                        f.unique
                          ? "bg-[#fb7185]/8 border border-[#fb7185]/20"
                          : "bg-white/[0.02]"
                      }`}
                    >
                      <span className={`text-xs mt-0.5 ${f.unique ? "text-[#fb7185]" : "text-[#34d399]"}`}>
                        {f.unique ? "★" : "✓"}
                      </span>
                      <div>
                        <p className="text-white text-sm font-medium">
                          {f.name}
                          {f.unique && (
                            <span className="ml-1.5 text-[9px] font-bold bg-[#fb7185]/20 text-[#fb7185] px-1.5 py-0.5 rounded">
                              UNIQUE
                            </span>
                          )}
                        </p>
                        <p className="text-[#9db0ca] text-xs leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
