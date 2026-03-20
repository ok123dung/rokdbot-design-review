import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { AlertTriangle, Shield, Scale, Users } from "lucide-react";

const Disclaimer = () => {
  const { t, i18n } = useTranslation();
  const isVietnamese = i18n.language === "vi";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={isVietnamese ? "Miễn trừ trách nhiệm - RokdBot" : "Disclaimer - RokdBot"}
        description={
          isVietnamese
            ? "Thông tin miễn trừ trách nhiệm của RokdBot. Đây là dịch vụ bên thứ 3, không liên quan đến nhà phát hành game Rise of Kingdoms."
            : "RokdBot disclaimer information. This is a third-party service, not affiliated with the Rise of Kingdoms game publisher."
        }
        url="/disclaimer"
        noIndex={false}
      />
      <div className="p-4 border-b border-border/50">
        <a href="/" className="text-primary hover:underline text-sm">&larr; Trang chủ</a>
      </div>
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            {isVietnamese ? "Miễn Trừ Trách Nhiệm" : "Disclaimer"}
          </h1>

          <div className="space-y-8">
            {/* Third Party Service */}
            <section className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    {isVietnamese ? "Dịch Vụ Bên Thứ 3" : "Third-Party Service"}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {isVietnamese
                      ? "RokdBot là một dịch vụ hỗ trợ bên thứ 3 độc lập. Chúng tôi KHÔNG liên kết, được ủy quyền, chứng thực hoặc có bất kỳ mối quan hệ nào với Lilith Games, nhà phát triển và phát hành của Rise of Kingdoms."
                      : "RokdBot is an independent third-party support service. We are NOT affiliated with, authorized by, endorsed by, or in any way connected to Lilith Games, the developer and publisher of Rise of Kingdoms."}
                  </p>
                </div>
              </div>
            </section>

            {/* Trademark Notice */}
            <section className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gaming-blue/10 flex items-center justify-center shrink-0">
                  <Scale className="w-6 h-6 text-gaming-blue" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    {isVietnamese ? "Nhãn Hiệu & Bản Quyền" : "Trademarks & Copyright"}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {isVietnamese
                      ? '"Rise of Kingdoms" và tất cả các nhãn hiệu, hình ảnh, logo liên quan là tài sản của Lilith Games. RokdBot không sử dụng bất kỳ tài sản trí tuệ nào của Lilith Games. Mọi tên sản phẩm, logo và thương hiệu là tài sản của các chủ sở hữu tương ứng.'
                      : '"Rise of Kingdoms" and all related trademarks, images, and logos are the property of Lilith Games. RokdBot does not use any intellectual property of Lilith Games. All product names, logos, and brands are property of their respective owners.'}
                  </p>
                </div>
              </div>
            </section>

            {/* User Responsibility */}
            <section className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gaming-green/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-gaming-green" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    {isVietnamese ? "Trách Nhiệm Người Dùng" : "User Responsibility"}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {isVietnamese
                      ? "Bằng việc sử dụng dịch vụ của RokdBot, bạn đồng ý và chấp nhận:"
                      : "By using RokdBot services, you agree and accept:"}
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {isVietnamese
                          ? "Bạn tự chịu hoàn toàn trách nhiệm về việc sử dụng dịch vụ"
                          : "You bear full responsibility for the use of the service"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {isVietnamese
                          ? "Việc sử dụng bot có thể vi phạm Điều khoản Dịch vụ của game"
                          : "Using bots may violate the game's Terms of Service"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {isVietnamese
                          ? "RokdBot không chịu trách nhiệm cho bất kỳ hậu quả nào đối với tài khoản game của bạn"
                          : "RokdBot is not responsible for any consequences to your game account"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        {isVietnamese
                          ? "Mọi rủi ro liên quan đến việc sử dụng dịch vụ do bạn tự gánh chịu"
                          : "All risks associated with using the service are borne by you"}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* No Warranty */}
            <section className="bg-card/50 border border-border/50 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">
                    {isVietnamese ? "Không Bảo Đảm" : "No Warranty"}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {isVietnamese
                      ? 'Dịch vụ được cung cấp "nguyên trạng" mà không có bất kỳ bảo đảm nào, dù rõ ràng hay ngụ ý. Chúng tôi không đảm bảo rằng dịch vụ sẽ không bị gián đoạn, không có lỗi hoặc hoàn toàn an toàn. Mặc dù chúng tôi nỗ lực hết sức để bảo vệ tài khoản của bạn, nhưng chúng tôi không thể đảm bảo 100% rằng tài khoản sẽ không bị ảnh hưởng.'
                      : 'The service is provided "as is" without any warranties, express or implied. We do not guarantee that the service will be uninterrupted, error-free, or completely secure. While we do our best to protect your account, we cannot guarantee 100% that your account will not be affected.'}
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="text-center py-8">
              <p className="text-muted-foreground">
                {isVietnamese
                  ? "Nếu bạn có bất kỳ câu hỏi nào về miễn trừ trách nhiệm này, vui lòng liên hệ chúng tôi qua "
                  : "If you have any questions about this disclaimer, please contact us at "}
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
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Disclaimer;
