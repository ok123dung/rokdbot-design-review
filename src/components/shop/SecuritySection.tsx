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
    <section className="max-w-[1240px] mx-auto px-4 py-16">
      <div className="card-glass p-8 md:p-12" style={{ background: "linear-gradient(135deg, rgba(52, 211, 153, 0.05), rgba(10, 16, 32, 0.9))", borderColor: "rgba(52, 211, 153, 0.15)" }}>
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-4">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">Bảo mật & An toàn</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Account của bạn được bảo vệ
          </h2>
          <p className="text-[#9db0ca] max-w-lg mx-auto">
            Chúng tôi đặt an toàn account của khách hàng lên hàng đầu.
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
