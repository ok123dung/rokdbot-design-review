import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Gamepad2, Phone, Mail, ExternalLink } from "lucide-react";
import { ZaloIcon, DiscordIcon, socialLinks } from "@/components/SocialIcons";

const services = [
  { name: "Weekly Package", href: "#services" },
  { name: "V1 Package", href: "#services" },
  { name: "V2 Premium", href: "#services" },
  { name: "V3 Ultimate", href: "#services" },
];

export function Footer() {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t("common.home"), href: "#home" },
    { name: t("common.services"), href: "#services" },
    { name: t("common.features"), href: "#features" },
    { name: t("common.testimonials"), href: "#testimonials" },
    { name: t("common.faq"), href: "#faq" },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gaming-purple/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-2 mb-4 group">
              <div className="icon-container w-9 h-9">
                <Gamepad2 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-gradient">RokdBot</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 max-w-xs">
              {t("footer.description")}
            </p>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  title={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm md:text-base mb-4 text-foreground">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm md:text-base mb-4 text-foreground">{t("footer.servicesTitle")}</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm md:text-base mb-4 text-foreground">{t("footer.contact")}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>0915966853</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <DiscordIcon className="w-4 h-4 text-primary" />
                </div>
                <a 
                  href="https://discord.gg/UPuFYCw4JG" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  Discord
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:contact@rokdbot.com" className="hover:text-primary transition-colors truncate">
                  contact@rokdbot.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 md:pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            {t("footer.copyright")}
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
