import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
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
    <section id="faq" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gaming-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gaming-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-gaming-purple to-gaming-pink mb-6 glow-purple"
          >
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">{t("faq.title")}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            {t("faq.subtitle")}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto px-4"
        >
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="card-glass rounded-xl md:rounded-2xl px-4 md:px-6 border border-white/10 data-[state=open]:border-gaming-cyan/30 data-[state=open]:glow-cyan transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 md:py-5 text-sm md:text-base lg:text-lg font-medium group [&[data-state=open]>svg]:text-gaming-cyan">
                    <div className="flex items-center gap-3 md:gap-4 pr-4">
                      <span className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-gaming-cyan/20 to-gaming-purple/20 flex items-center justify-center text-xs md:text-sm font-bold text-gaming-cyan border border-gaming-cyan/20">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="group-hover:text-gaming-cyan transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 md:pb-5 pl-10 md:pl-12 pr-4 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 md:mt-12 px-4"
        >
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            Còn thắc mắc khác? Liên hệ ngay với chúng tôi!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://discord.gg/UPuFYCw4JG"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gaming-outline px-6 py-3 rounded-xl text-sm md:text-base font-medium inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Discord
            </a>
            <a
              href="https://zalo.me/g/rqgqyd878"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gaming px-6 py-3 rounded-xl text-sm md:text-base font-medium inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48" fill="currentColor">
                <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm9.8 14.4c-.2 4.4-2.4 15-3.4 19.8-.4 2-1.2 2.6-2 2.8-1.6.2-2.8-1-4.4-2-2.4-1.6-3.8-2.6-6.2-4.2-2.6-1.8-.8-2.8.6-4.4.4-.4 7-6.4 7.2-7 0-.2 0-.4-.2-.4-.2 0-.4 0-.6.2-1 .4-4.2 2.6-7.8 5.2-1.4 1-2.8 1.4-4.2 1.4-1.4 0-4.2-1-6.2-1.6-2.4-.8-4.4-1.2-4.2-2.6 0-.8 1.2-1.4 3.4-2.2 13.2-5.8 22-9.6 26.4-11.4 6-2.4 7.2-2.8 8-2.8.2 0 .6 0 .8.2.2.2.4.4.4.8v.4z"/>
              </svg>
              Zalo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
