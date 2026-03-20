import { Gamepad2, MessageCircle } from "lucide-react";

export function CTASection() {
  const scrollToPackages = () => {
    const el = document.querySelector("h2");
    if (el) {
      const packagesHeading = Array.from(document.querySelectorAll("h2")).find(
        (h) => h.textContent?.includes("Gói dịch vụ")
      );
      packagesHeading?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="max-w-[1240px] mx-auto px-4 py-16">
      <div
        className="card-glass p-10 md:p-14 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(124, 231, 255, 0.06), rgba(10, 16, 32, 0.9), rgba(248, 195, 107, 0.04))",
          borderColor: "rgba(124, 231, 255, 0.15)",
        }}
      >
        <Gamepad2 className="w-10 h-10 text-[#7ce7ff] mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Sẵn sàng bắt đầu?
        </h2>
        <p className="text-[#9db0ca] max-w-md mx-auto mb-8">
          Chọn gói phù hợp và để bot làm việc cho bạn. Thanh toán tự động, setup trong 24h.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={scrollToPackages} className="btn-buy px-8 py-3 text-base">
            Chọn gói ngay
          </button>
          <a
            href="https://discord.gg/UPuFYCw4JG"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-3 text-base justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            Tư vấn qua Discord
          </a>
        </div>
      </div>
    </section>
  );
}
