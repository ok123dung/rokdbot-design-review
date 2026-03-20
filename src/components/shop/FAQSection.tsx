import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Bot có an toàn không? Account có bị ban không?",
    a: "Bot RokdBot sử dụng công nghệ giả lập hành vi người chơi thật, giảm thiểu tối đa rủi ro. Tuy nhiên, việc sử dụng bot luôn có rủi ro nhất định — chúng tôi khuyến khích đọc kỹ Điều khoản dịch vụ.",
  },
  {
    q: "Thanh toán như thế nào?",
    a: "Chọn gói → Scan QR code VietQR → Hệ thống tự động xác nhận trong vài giây. Hỗ trợ chuyển khoản ngân hàng HD Bank.",
  },
  {
    q: "Bao lâu bot bắt đầu chạy?",
    a: "Sau khi thanh toán và gửi thông tin account qua Discord/Zalo, bot sẽ được setup và bắt đầu chạy trong vòng 24 giờ.",
  },
  {
    q: "Có hoàn tiền không?",
    a: "Có hỗ trợ hoàn tiền trong 24h đầu nếu bot chưa được activate. Sau khi bot đã chạy, không hỗ trợ hoàn tiền.",
  },
  {
    q: "Hỗ trợ những server nào?",
    a: "RokdBot hỗ trợ tất cả các server Rise of Kingdoms, bao gồm cả server mới mở.",
  },
  {
    q: "Làm sao theo dõi tiến độ bot?",
    a: "Liên hệ admin qua Discord/Zalo để nhận báo cáo tiến độ. Chúng tôi sẽ gửi screenshot và thống kê định kỳ.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-[800px] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Câu hỏi thường gặp
        </h2>
        <p className="text-[#9db0ca]">
          Giải đáp thắc mắc phổ biến về dịch vụ RokdBot.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="card-glass overflow-hidden"
            style={{ padding: 0 }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#9db0ca] shrink-0 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 pt-0">
                <p className="text-[#9db0ca] text-sm leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
