

import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { FileText, CreditCard, AlertCircle, Ban, RefreshCw, Gavel } from "lucide-react";

const TermsOfService = () => {
  const { i18n } = useTranslation();
  const isVietnamese = i18n.language === "vi";

  const sections = isVietnamese
    ? [
        {
          icon: FileText,
          iconBg: "bg-primary/10",
          iconColor: "text-primary",
          title: "Điều Khoản Chung",
          content: [
            "Bằng việc sử dụng RokdBot, bạn đồng ý tuân thủ các điều khoản này",
            "Chúng tôi có quyền thay đổi điều khoản bất cứ lúc nào",
            "Bạn phải từ 18 tuổi trở lên để sử dụng dịch vụ",
            "Một tài khoản RokdBot chỉ được sử dụng bởi một người",
          ],
        },
        {
          icon: CreditCard,
          iconBg: "bg-gaming-blue/10",
          iconColor: "text-gaming-blue",
          title: "Thanh Toán & Gói Dịch Vụ",
          content: [
            "Tất cả giá được niêm yết bằng VND (Việt Nam Đồng)",
            "Thanh toán phải hoàn tất trước khi dịch vụ được kích hoạt",
            "Chúng tôi chấp nhận chuyển khoản ngân hàng và các phương thức thanh toán điện tử",
            "Gói dịch vụ có thời hạn cố định và không được gia hạn tự động",
          ],
        },
        {
          icon: RefreshCw,
          iconBg: "bg-gaming-green/10",
          iconColor: "text-gaming-green",
          title: "Chính Sách Hoàn Tiền",
          content: [
            "Hoàn tiền 100% nếu dịch vụ chưa được kích hoạt",
            "Hoàn tiền theo tỷ lệ nếu có lỗi từ phía chúng tôi làm gián đoạn dịch vụ",
            "Không hoàn tiền nếu tài khoản game bị khóa do vi phạm điều khoản game",
            "Yêu cầu hoàn tiền phải được gửi trong vòng 7 ngày kể từ khi xảy ra sự cố",
          ],
        },
        {
          icon: Ban,
          iconBg: "bg-destructive/10",
          iconColor: "text-destructive",
          title: "Hành Vi Bị Cấm",
          content: [
            "Chia sẻ tài khoản RokdBot với người khác",
            "Sử dụng dịch vụ cho mục đích bất hợp pháp",
            "Cố gắng hack, phá hoại hoặc làm gián đoạn hệ thống của chúng tôi",
            "Cung cấp thông tin sai lệch khi đăng ký",
            "Lạm dụng hệ thống hỗ trợ khách hàng",
          ],
        },
        {
          icon: AlertCircle,
          iconBg: "bg-gaming-purple/10",
          iconColor: "text-gaming-purple",
          title: "Giới Hạn Trách Nhiệm",
          content: [
            "RokdBot không chịu trách nhiệm nếu tài khoản game của bạn bị khóa",
            "Chúng tôi không đảm bảo dịch vụ hoạt động 100% liên tục",
            "Thiệt hại tối đa được bồi thường không vượt quá số tiền bạn đã thanh toán",
            "Chúng tôi không chịu trách nhiệm cho các thiệt hại gián tiếp",
          ],
        },
        {
          icon: Gavel,
          iconBg: "bg-gaming-blue/10",
          iconColor: "text-gaming-blue",
          title: "Chấm Dứt Dịch Vụ",
          content: [
            "Chúng tôi có quyền chấm dứt dịch vụ nếu bạn vi phạm điều khoản",
            "Bạn có thể hủy dịch vụ bất cứ lúc nào (không hoàn tiền phần còn lại)",
            "Khi dịch vụ kết thúc, thông tin đăng nhập game sẽ bị xóa",
            "Tài khoản không hoạt động trong 12 tháng có thể bị xóa",
          ],
        },
      ]
    : [
        {
          icon: FileText,
          iconBg: "bg-primary/10",
          iconColor: "text-primary",
          title: "General Terms",
          content: [
            "By using RokdBot, you agree to comply with these terms",
            "We reserve the right to change terms at any time",
            "You must be 18 years or older to use the service",
            "One RokdBot account may only be used by one person",
          ],
        },
        {
          icon: CreditCard,
          iconBg: "bg-gaming-blue/10",
          iconColor: "text-gaming-blue",
          title: "Payments & Service Packages",
          content: [
            "All prices are listed in VND (Vietnamese Dong)",
            "Payment must be completed before service activation",
            "We accept bank transfers and electronic payment methods",
            "Service packages have fixed durations and do not auto-renew",
          ],
        },
        {
          icon: RefreshCw,
          iconBg: "bg-gaming-green/10",
          iconColor: "text-gaming-green",
          title: "Refund Policy",
          content: [
            "100% refund if service has not been activated",
            "Pro-rated refund if service interruption is due to our fault",
            "No refund if game account is banned due to game terms violation",
            "Refund requests must be submitted within 7 days of the incident",
          ],
        },
        {
          icon: Ban,
          iconBg: "bg-destructive/10",
          iconColor: "text-destructive",
          title: "Prohibited Behavior",
          content: [
            "Sharing RokdBot account with others",
            "Using the service for illegal purposes",
            "Attempting to hack, sabotage, or disrupt our systems",
            "Providing false information during registration",
            "Abusing customer support system",
          ],
        },
        {
          icon: AlertCircle,
          iconBg: "bg-gaming-purple/10",
          iconColor: "text-gaming-purple",
          title: "Limitation of Liability",
          content: [
            "RokdBot is not responsible if your game account is banned",
            "We do not guarantee 100% continuous service operation",
            "Maximum compensation does not exceed the amount you paid",
            "We are not responsible for indirect damages",
          ],
        },
        {
          icon: Gavel,
          iconBg: "bg-gaming-blue/10",
          iconColor: "text-gaming-blue",
          title: "Service Termination",
          content: [
            "We reserve the right to terminate service if you violate terms",
            "You can cancel service at any time (no refund for remaining period)",
            "When service ends, game login information will be deleted",
            "Accounts inactive for 12 months may be deleted",
          ],
        },
      ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={isVietnamese ? "Điều Khoản Dịch Vụ - RokdBot" : "Terms of Service - RokdBot"}
        description={
          isVietnamese
            ? "Điều khoản dịch vụ của RokdBot. Tìm hiểu các quy định và điều kiện khi sử dụng dịch vụ bot farm Rise of Kingdoms."
            : "RokdBot terms of service. Learn about the rules and conditions when using our Rise of Kingdoms bot farm service."
        }
        url="/terms"
        noIndex={false}
      />
      <div className="p-4 border-b border-border/50"><a href="/" className="text-primary hover:underline text-sm">&larr; Trang chủ</a></div>
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isVietnamese ? "Điều Khoản Dịch Vụ" : "Terms of Service"}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isVietnamese
                ? "Vui lòng đọc kỹ các điều khoản dịch vụ trước khi sử dụng RokdBot. Việc sử dụng dịch vụ của chúng tôi đồng nghĩa với việc bạn chấp nhận các điều khoản này."
                : "Please read these terms of service carefully before using RokdBot. By using our service, you agree to these terms."}
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <section
                key={index}
                className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${section.iconBg} flex items-center justify-center shrink-0`}
                  >
                    <section.icon className={`w-6 h-6 ${section.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <ul className="space-y-2">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="text-center py-8 mt-8">
            <p className="text-muted-foreground">
              {isVietnamese
                ? "Nếu bạn có câu hỏi về điều khoản dịch vụ, vui lòng liên hệ: "
                : "If you have questions about these terms, please contact: "}
              <a
                href="mailto:contact@rokdbot.com"
                className="text-primary hover:underline"
              >
                contact@rokdbot.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground/70 mt-4">
              {isVietnamese
                ? "Cập nhật lần cuối: Tháng 1, 2026"
                : "Last updated: January 2026"}
            </p>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default TermsOfService;
