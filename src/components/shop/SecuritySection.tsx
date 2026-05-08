import { Shield, Lock, Eye, Server } from "lucide-react";

const points = [
  {
    icon: Eye,
    title: "Giả lập hành vi thật",
    desc: "Bot mô phỏng cách chơi của người thật — thời gian nghỉ, click pattern, session duration ngẫu nhiên.",
  },
  {
    icon: Lock,
    title: "Mã hóa thông tin",
    desc: "Thông tin đăng nhập được mã hóa và không lưu trữ sau khi setup. Chỉ bạn có quyền truy cập.",
  },
  {
    icon: Server,
    title: "Server riêng biệt",
    desc: "Mỗi account chạy trên môi trường riêng, không chia sẻ IP hay tài nguyên với account khác.",
  },
  {
    icon: Shield,
    title: "Cập nhật liên tục",
    desc: "Bot được cập nhật thường xuyên để tương thích với phiên bản game mới nhất.",
  },
];

export function SecuritySection() {
  return (
    <section className="max-w-[1240px] mx-auto px-4 py-20 md:py-24" id="security">
      <div className="card-glass p-8 md:p-12" style={{ background: "linear-gradient(135deg, rgba(52, 211, 153, 0.05), rgba(10, 16, 32, 0.9))", borderColor: "rgba(52, 211, 153, 0.15)" }}>
        <div className="max-w-[720px] mx-auto text-center mb-10">
          <span className="section-eyebrow" style={{ background: "rgba(52, 211, 153, 0.1)", borderColor: "rgba(52, 211, 153, 0.3)", color: "#34d399" }}>Bảo mật & An toàn</span>
          <h2 className="text-3xl md:text-4xl text-white mb-3 leading-tight">
            Account của bạn <span className="gold-grad">được bảo vệ.</span>
          </h2>
          <p className="text-[17px] text-[#9db0ca] leading-relaxed">
            Chúng tôi đặt an toàn account của khách hàng lên hàng đầu — IP riêng, mã hóa AES-256, hành vi giả lập.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                <p.icon className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                <p className="text-[#9db0ca] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
