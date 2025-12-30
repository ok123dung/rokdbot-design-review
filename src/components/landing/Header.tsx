import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("common.home"), href: "#home" },
    { name: t("common.services"), href: "#services" },
    { name: t("common.features"), href: "#features" },
    { name: t("common.testimonials"), href: "#testimonials" },
    { name: t("common.faq"), href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass shadow-lg shadow-background/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="icon-container w-9 h-9 md:w-10 md:h-10">
                <Gamepad2 className="w-5 h-5 md:w-6 md:h-6 text-primary transition-all group-hover:scale-110" />
              </div>
            </div>
            <span className="text-xl md:text-2xl font-bold text-gradient">
              RokdBot
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group rounded-lg hover:bg-muted/50"
              >
                {link.name}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 transition-transform origin-left group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <LanguageSwitcher />
            <a href="/auth">
              <Button 
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg"
              >
                {t("common.login")}
              </Button>
            </a>
            <a href="/auth">
              <Button className="btn-gaming text-primary-foreground px-5 lg:px-6 rounded-lg">
                <span>{t("common.register")}</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground rounded-lg hover:bg-muted/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-muted-foreground hover:text-foreground transition-colors py-3 px-3 rounded-lg hover:bg-muted/50"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border">
                <a href="/auth">
                  <Button variant="ghost" className="w-full justify-center hover:bg-muted/50">
                    {t("common.login")}
                  </Button>
                </a>
                <a href="/auth">
                  <Button className="btn-gaming text-primary-foreground w-full">
                    <span>{t("common.register")}</span>
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
