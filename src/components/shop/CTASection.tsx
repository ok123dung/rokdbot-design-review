// V3 redesign: cleaner copy, gradient background panel, two CTAs.
import { MessageCircle } from "lucide-react";

export function CTASection() {
  const scrollToPackages = () => {
    const el = document.getElementById("packages");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="max-w-[1240px] mx-auto px-4 py-20 md:py-24" id="cta">
      <div className="final-cta-v3">
        <h2 className="text-3xl md:text-5xl text-white mb-4 leading-tight" style={{ textWrap: "balance" } as React.CSSProperties}>
          Sẵn sàng để bot <span className="gold-grad">làm hộ phần việc nhàm chán?</span>
        </h2>
        <p className="text-[17px] text-[#c8d3e3] max-w-[560px] mx-auto mb-7">
          Gói Trial chỉ 150.000đ / 7 ngày. Thanh toán VietQR, kích hoạt trong 24h. Hoàn 100% nếu acc bị ban do bot.
        </p>
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center flex-wrap">
          <button onClick={scrollToPackages} className="btn-hero-primary">
            Bắt đầu với gói Trial →
          </button>
          <a
            href="https://discord.gg/UPuFYCw4JG"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-ghost justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            Tham gia Discord
          </a>
        </div>
      </div>
    </section>
  );
}
