import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Bot có an toàn không? Tài khoản có bị ban không?",
    answer: "RokdBot sử dụng công nghệ anti-detection tiên tiến, mô phỏng hành vi người chơi thực. Trong suốt thời gian hoạt động, tỷ lệ ban gần như bằng 0. Chúng tôi cũng liên tục cập nhật để đảm bảo an toàn cho tài khoản của bạn.",
  },
  {
    question: "Làm thế nào để bắt đầu sử dụng dịch vụ?",
    answer: "Rất đơn giản! Bước 1: Đăng ký tài khoản và chọn gói dịch vụ. Bước 2: Thanh toán qua MoMo hoặc chuyển khoản. Bước 3: Team support sẽ liên hệ và hướng dẫn setup trong vòng 15 phút. Chỉ mất 5 phút để bot bắt đầu hoạt động!",
  },
  {
    question: "Tôi có thể theo dõi tiến độ tài khoản như thế nào?",
    answer: "Bạn sẽ có quyền truy cập vào dashboard cá nhân để theo dõi mọi hoạt động của bot: resources gathered, troops trained, barbarians killed,... Ngoài ra, với gói V1 trở lên, bạn sẽ nhận được báo cáo tiến độ hàng ngày qua Zalo/Discord.",
  },
  {
    question: "Có hỗ trợ nhiều tài khoản không?",
    answer: "Có! Từ gói V1 trở lên, bạn có thể sử dụng bot cho nhiều tài khoản. Mỗi tài khoản được quản lý độc lập và bạn có thể theo dõi tất cả trên cùng một dashboard.",
  },
  {
    question: "Nếu gặp vấn đề thì sao? Hỗ trợ như thế nào?",
    answer: "Team support của chúng tôi hoạt động 24/7 qua Zalo và Discord. Với gói V2 và KvK Special, bạn sẽ có VIP support với thời gian phản hồi dưới 5 phút. Chúng tôi cam kết giải quyết mọi vấn đề trong thời gian ngắn nhất.",
  },
  {
    question: "Có thể hủy hoặc đổi gói dịch vụ không?",
    answer: "Bạn có thể nâng cấp gói bất cứ lúc nào và chỉ trả phần chênh lệch. Việc hủy dịch vụ cũng rất linh hoạt - chỉ cần báo trước 3 ngày. Chúng tôi sẽ hoàn tiền cho thời gian chưa sử dụng (với gói tháng).",
  },
  {
    question: "Bot hoạt động trên những thiết bị nào?",
    answer: "Bot chạy trên server của chúng tôi nên bạn không cần cài đặt gì trên thiết bị cá nhân. Bạn chỉ cần cung cấp thông tin đăng nhập game và bot sẽ hoạt động 24/7 mà không ảnh hưởng đến điện thoại hay máy tính của bạn.",
  },
  {
    question: "Thanh toán như thế nào?",
    answer: "Chúng tôi hỗ trợ nhiều phương thức thanh toán: MoMo, chuyển khoản ngân hàng (Vietcombank, Techcombank, MB Bank,...). Sau khi thanh toán, bạn upload ảnh chứng từ và dịch vụ sẽ được kích hoạt trong vòng 15 phút.",
  },
];

export function FAQSection() {
  const { t } = useTranslation();

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("faq.subtitle")}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-gradient rounded-xl px-6 border-border/50 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-base md:text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
