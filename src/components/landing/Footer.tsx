import { motion } from "framer-motion";
import { Gamepad2, MessageCircle, Phone, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  { name: "Zalo", icon: MessageCircle, href: "#", color: "hover:text-blue-400" },
  { name: "Discord", icon: MessageCircle, href: "#", color: "hover:text-indigo-400" },
  { name: "Facebook", icon: ExternalLink, href: "#", color: "hover:text-blue-500" },
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
                <span>Zalo: 0xxx.xxx.xxx</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span>Discord: RokdBot#1234</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@rokdbot.com</span>
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
