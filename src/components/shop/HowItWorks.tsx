import { ShoppingCart, QrCode, MessageCircle, Rocket } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Chọn gói",
    desc: "Chọn gói dịch vụ phù hợp với nhu cầu của bạn.",
    color: "#7ce7ff",
  },
  {
    icon: QrCode,
    title: "Thanh toán",
    desc: "Scan QR code VietQR, hệ thống tự động xác nhận thanh toán.",
    color: "#f8c36b",
  },
  {
    icon: MessageCircle,
    title: "Gửi thông tin",
    desc: "Liên hệ Discord/Zalo, gửi mã đơn hàng + thông tin acc game.",
    color: "#34d399",
  },
  {
    icon: Rocket,
    title: "Bot chạy",
    desc: "Bot được setup và bắt đầu chạy trong vòng 24 giờ.",
    color: "#a78bfa",
  },
];

export function HowItWorks() {
  return (
    <section className="max-w-[1240px] mx-auto px-4 py-20 md:py-24" id="how-it-works">
      <header className="max-w-[720px] mx-auto text-center mb-12 md:mb-14">
        <span className="section-eyebrow">Quy trình</span>
        <h2 className="text-3xl md:text-4xl text-white mb-3 leading-tight">
          Cách hoạt động — <span className="cyan-grad">4 bước.</span>
        </h2>
        <p className="text-[17px] text-[#9db0ca] leading-relaxed">
          Từ thanh toán đến lúc bot chạy thật, mỗi bước rõ ràng và minh bạch.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="relative text-center">
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-white/10 to-white/5" />
            )}

            {/* Step number + icon */}
            <div className="relative inline-flex flex-col items-center mb-4">
              <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0f172a] border border-white/20 flex items-center justify-center text-xs font-bold text-white">
                {i + 1}
              </span>
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: `${step.color}12`, border: `1px solid ${step.color}30` }}
              >
                <step.icon className="w-7 h-7" style={{ color: step.color }} />
              </div>
            </div>

            <h3 className="text-white font-semibold mb-2">{step.title}</h3>
            <p className="text-[#9db0ca] text-sm leading-relaxed px-2">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
