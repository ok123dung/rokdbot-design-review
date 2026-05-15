// Shared FAQ source of truth.
// Used by:
//   - FAQSection.tsx  (visible UI)
//   - Index.tsx → SEO.tsx (FAQPage JSON-LD schema)
// Keep these in sync — Google flags FAQ schemas whose Q/A don't appear on the page.
//
// V3 redesign: 6 câu mới — focus vào ban rate, Combo độc quyền, VietQR, cloud, giảm giá, support.

export interface FAQItem {
  q: string;
  a: string;
}

export const faqs: FAQItem[] = [
  {
    q: "RokdBot có bị ban không?",
    a: "Tỷ lệ ban <0,1% nhờ IP riêng + anti-detect nhiều lớp. Theo điều khoản, nếu account bị ban do lỗi của bot, RokdBot hoàn 100% phí + tặng 1 tháng miễn phí. Không bot nào tuyệt đối an toàn — chúng tôi khuyên dùng farm account thay vì main whale tier.",
  },
  {
    q: "Combo Spam + Luring + AOE là gì?",
    a: "Tính năng độc quyền chỉ có ở RokdBot (gói V2+). Bot tự Spam troops duy trì áp lực → Luring quân địch vào vị trí lý tưởng → kích hoạt AOE skill commander đúng frame để gây sát thương diện rộng. Hiệu quả farm Honor KvK tăng đến 300% so với chơi thủ công.",
  },
  {
    q: "Thanh toán bằng cách nào?",
    a: "Quét VietQR bằng app banking (mọi ngân hàng VN). Admin xác nhận đơn trong 30 phút giờ hành chính, hoặc tự động trong 5 giây nếu SePay webhook đã active. Mã đơn ROKxxxxxx gửi qua Discord/Zalo. Bot kích hoạt trong vòng 24h sau khi bạn cung cấp account.",
  },
  {
    q: "Tôi có cần để máy mở 24/7?",
    a: "Không. RokdBot chạy trên cloud server riêng do chúng tôi vận hành. Bạn chỉ cần đăng nhập dashboard để cấu hình và xem report. Bot vẫn hoạt động khi bạn tắt máy, đi ngủ, đi du lịch.",
  },
  {
    q: "Có giảm giá khi mua nhiều tháng không?",
    a: "Có. Mua 3 tháng giảm 10%, 6 tháng giảm 15%, 12 tháng giảm 25%. Liên hệ Discord #payment-help để được báo giá và VietQR riêng.",
  },
  {
    q: "Hỗ trợ ở đâu?",
    a: "Discord chính: discord.gg/UPuFYCw4JG. Zalo: zalo.me/g/rqgqyd878. Phản hồi trung bình <5 phút giờ hành chính, <30 phút ngoài giờ.",
  },
];
