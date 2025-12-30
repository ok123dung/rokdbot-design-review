import { Gamepad2, Phone, Mail, Facebook, Users } from "lucide-react";

// Custom Zalo icon component
const ZaloIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 17.703c-.353.295-.779.459-1.226.459H7.332c-.447 0-.873-.164-1.226-.459-.707-.592-.707-1.555 0-2.147l5.127-4.28c.177-.148.177-.388 0-.536l-5.127-4.28c-.707-.592-.707-1.555 0-2.147.353-.295.779-.459 1.226-.459h9.336c.447 0 .873.164 1.226.459.707.592.707 1.555 0 2.147l-5.127 4.28c-.177.148-.177.388 0 .536l5.127 4.28c.707.592.707 1.555 0 2.147z"/>
  </svg>
);

// Custom Discord icon component  
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const socialLinks = [
  { name: "Zalo Group", icon: ZaloIcon, href: "https://zalo.me/g/rokservices", color: "hover:text-blue-400" },
  { name: "Discord Server", icon: DiscordIcon, href: "https://discord.gg/rokservices", color: "hover:text-indigo-400" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/rokdbot", color: "hover:text-blue-500" },
];

const quickLinks = [
  { name: "Trang chủ", href: "#home" },
  { name: "Dịch vụ", href: "#services" },
  { name: "Tính năng", href: "#features" },
  { name: "Đánh giá", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

const services = [
  { name: "Weekly Package", href: "#services" },
  { name: "V1 Package", href: "#services" },
  { name: "V2 Premium", href: "#services" },
  { name: "KvK Special", href: "#services" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gaming-purple/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4 group">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-gradient">RokdBot</span>
            </a>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Dịch vụ bot Rise of Kingdoms #1 Việt Nam. Nâng tầm gameplay, tiết kiệm thời gian.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`p-2 rounded-lg bg-muted/50 text-muted-foreground transition-colors ${link.color}`}
                  title={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liên kết nhanh</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Dịch vụ</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>Hotline: +84 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <DiscordIcon className="w-5 h-5 text-primary" />
                <a href="https://discord.gg/rokservices" className="hover:text-primary transition-colors">discord.gg/rokservices</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contact@rokdbot.com" className="hover:text-primary transition-colors">contact@rokdbot.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 RokdBot. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Điều khoản sử dụng
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Chính sách bảo mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
