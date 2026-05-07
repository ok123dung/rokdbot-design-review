// Shared FAQ source of truth.
// Used by:
//   - FAQSection.tsx  (visible UI)
//   - Index.tsx → SEO.tsx (FAQPage JSON-LD schema)
// Keep these in sync — Google flags FAQ schemas whose Q/A don't appear on the page.

export interface FAQItem {
  q: string;
  a: string;
}

export const faqs: FAQItem[] = [
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
