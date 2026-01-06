import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { Shield, Eye, Lock, Database, Share2, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const { i18n } = useTranslation();
  const isVietnamese = i18n.language === "vi";

  const sections = isVietnamese
    ? [
        {
          icon: Database,
          iconBg: "bg-primary/10",
          iconColor: "text-primary",
          title: "Thông Tin Chúng Tôi Thu Thập",
          content: [
            "Thông tin tài khoản: Email, tên người dùng, số điện thoại (tùy chọn)",
            "Thông tin game: ID tài khoản game, server, vương quốc để cung cấp dịch vụ",
            "Thông tin thanh toán: Lịch sử giao dịch, phương thức thanh toán",
            "Thông tin kỹ thuật: Địa chỉ IP, loại trình duyệt, thiết bị sử dụng",
          ],
        },
        {
          icon: Eye,
          iconBg: "bg-gaming-blue/10",
          iconColor: "text-gaming-blue",
          title: "Cách Chúng Tôi Sử Dụng Thông Tin",
          content: [
            "Cung cấp và duy trì dịch vụ bot farm",
            "Xử lý thanh toán và quản lý đơn hàng",
            "Liên lạc với bạn về dịch vụ và hỗ trợ",
            "Cải thiện và phát triển dịch vụ",
            "Phát hiện và ngăn chặn gian lận",
          ],
        },
        {
          icon: Lock,
          iconBg: "bg-gaming-green/10",
          iconColor: "text-gaming-green",
          title: "Bảo Mật Thông Tin",
          content: [
            "Mã hóa dữ liệu trong quá trình truyền tải (SSL/TLS)",
            "Lưu trữ an toàn trên máy chủ bảo mật",
            "Hạn chế truy cập chỉ cho nhân viên được ủy quyền",
            "Không lưu trữ mật khẩu game của bạn ở dạng văn bản thuần",
            "Xóa thông tin đăng nhập game sau khi dịch vụ kết thúc",
          ],
        },
        {
          icon: Share2,
          iconBg: "bg-gaming-purple/10",
          iconColor: "text-gaming-purple",
          title: "Chia Sẻ Thông Tin",
          content: [
            "Chúng tôi KHÔNG bán thông tin cá nhân của bạn cho bên thứ 3",
            "Chỉ chia sẻ với nhà cung cấp dịch vụ thanh toán để xử lý giao dịch",
            "Có thể tiết lộ nếu pháp luật yêu cầu",
            "Không chia sẻ thông tin game với bất kỳ ai ngoài đội ngũ vận hành",
          ],
        },
      ]
    : [
        {
          icon: Database,
          iconBg: "bg-primary/10",
          iconColor: "text-primary",
          title: "Information We Collect",
          content: [
            "Account information: Email, username, phone number (optional)",
            "Game information: Game account ID, server, kingdom to provide services",
            "Payment information: Transaction history, payment methods",
            "Technical information: IP address, browser type, device used",
          ],
        },
        {
          icon: Eye,
          iconBg: "bg-gaming-blue/10",
          iconColor: "text-gaming-blue",
          title: "How We Use Your Information",
          content: [
            "Provide and maintain bot farm services",
            "Process payments and manage orders",
            "Communicate with you about services and support",
            "Improve and develop our services",
            "Detect and prevent fraud",
          ],
        },
        {
          icon: Lock,
          iconBg: "bg-gaming-green/10",
          iconColor: "text-gaming-green",
          title: "Information Security",
          content: [
            "Data encryption during transmission (SSL/TLS)",
            "Secure storage on protected servers",
            "Access limited to authorized personnel only",
            "Game passwords are not stored in plain text",
            "Game login information deleted after service ends",
          ],
        },
        {
          icon: Share2,
          iconBg: "bg-gaming-purple/10",
          iconColor: "text-gaming-purple",
          title: "Information Sharing",
          content: [
            "We do NOT sell your personal information to third parties",
            "Only share with payment service providers to process transactions",
            "May disclose if required by law",
            "Game information is not shared with anyone outside the operations team",
          ],
        },
      ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={isVietnamese ? "Chính Sách Bảo Mật - RokdBot" : "Privacy Policy - RokdBot"}
        description={
          isVietnamese
            ? "Chính sách bảo mật của RokdBot. Tìm hiểu cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn."
            : "RokdBot privacy policy. Learn how we collect, use, and protect your information."
        }
        url="/privacy"
        noIndex={false}
      />
      <Header />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isVietnamese ? "Chính Sách Bảo Mật" : "Privacy Policy"}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {isVietnamese
                ? "Tại RokdBot, chúng tôi cam kết bảo vệ quyền riêng tư và bảo mật thông tin của bạn. Chính sách này giải thích cách chúng tôi xử lý dữ liệu của bạn."
                : "At RokdBot, we are committed to protecting your privacy and security of your information. This policy explains how we handle your data."}
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

            {/* Your Rights */}
            <section className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    {isVietnamese ? "Quyền Của Bạn" : "Your Rights"}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {isVietnamese
                      ? "Bạn có quyền:"
                      : "You have the right to:"}
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {isVietnamese
                          ? "Truy cập và xem thông tin cá nhân của bạn"
                          : "Access and view your personal information"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {isVietnamese
                          ? "Yêu cầu chỉnh sửa thông tin không chính xác"
                          : "Request correction of inaccurate information"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {isVietnamese
                          ? "Yêu cầu xóa tài khoản và dữ liệu của bạn"
                          : "Request deletion of your account and data"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {isVietnamese
                          ? "Liên hệ chúng tôi bất cứ lúc nào qua email: contact@rokdbot.com"
                          : "Contact us anytime via email: contact@rokdbot.com"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="text-center py-8 mt-8">
            <p className="text-sm text-muted-foreground/70">
              {isVietnamese
                ? "Cập nhật lần cuối: Tháng 1, 2026"
                : "Last updated: January 2026"}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
