import { Shield, Zap, Gamepad2, Globe, CreditCard, Clock } from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Full Auto Farm",
    desc: "Farm tài nguyên, train binh, xây dựng, tham gia event — tất cả tự động 24/7.",
    color: "#7ce7ff",
  },
  {
    icon: Shield,
    title: "An toàn tối đa",
    desc: "Bot giả lập hành vi người chơi thật, hoạt động thông minh, giảm thiểu rủi ro bị phát hiện.",
    color: "#34d399",
  },
  {
    icon: Zap,
    title: "Custom Strategy",
    desc: "Tùy chỉnh chiến lược farm, lịch chạy bot, ưu tiên tài nguyên theo yêu cầu riêng.",
    color: "#f8c36b",
  },
  {
    icon: Globe,
    title: "Đa ngôn ngữ",
    desc: "Phục vụ khách hàng Việt Nam và quốc tế. Hỗ trợ tiếng Việt, Anh, Hàn, Trung.",
    color: "#a78bfa",
  },
  {
    icon: CreditCard,
    title: "Thanh toán tự động",
    desc: "Scan QR VietQR, hệ thống xác nhận thanh toán tức thì. Không cần chờ admin.",
    color: "#38bdf8",
  },
  {
    icon: Clock,
    title: "Hỗ trợ 24/7",
    desc: "Đội ngũ hỗ trợ qua Discord & Zalo, phản hồi nhanh chóng mọi lúc.",
    color: "#fb7185",
  },
];

export function FeaturesSection() {
  return (
    <section className="max-w-[1240px] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Tại sao chọn <span className="text-gold">RokdBot</span>?
        </h2>
        <p className="text-[#9db0ca] max-w-lg mx-auto">
          Dịch vụ bot farm Rise of Kingdoms uy tín, an toàn và tiện lợi nhất.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <div key={i} className="card-glass p-5 group">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
              style={{ background: `${f.color}15` }}
            >
              <f.icon className="w-5 h-5" style={{ color: f.color }} />
            </div>
            <h3 className="text-white font-semibold mb-2">{f.title}</h3>
            <p className="text-[#9db0ca] text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
