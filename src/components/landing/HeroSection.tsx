import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Users, TrendingUp, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { t } = useTranslation();

  const stats = [
    { icon: Users, value: "5000+", label: t("hero.stats.users") },
    { icon: Shield, value: "100%", label: t("features.safe.title").split(" ")[0] },
    { icon: TrendingUp, value: "Top 10", label: "Alliances" },
    { icon: Zap, value: "24/7", label: t("hero.stats.uptime") },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-[10%] left-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gaming-purple/20 rounded-full blur-[100px] pulse-glow" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-[20%] right-[5%] w-[250px] h-[250px] md:w-[450px] md:h-[450px] bg-gaming-cyan/15 rounded-full blur-[100px] pulse-glow" 
          style={{ animationDelay: "2s" }} 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-gaming-blue/10 rounded-full blur-[120px]" 
        />
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 md:mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-xs sm:text-sm text-primary font-medium">
              #1 Rise of Kingdoms Bot Service
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-[1.1] tracking-tight"
          >
            {t("hero.title")}{" "}
            <span className="text-gradient">{t("hero.titleHighlight")}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-16 px-4"
          >
            <a href="/auth" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="btn-gaming text-primary-foreground w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg group rounded-xl"
              >
                <span>{t("hero.cta")}</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline"
                className="btn-gaming-outline w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl"
              >
                <Play className="mr-2 w-4 h-4" />
                {t("hero.ctaSecondary")}
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 px-2"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="group card-glass p-4 md:p-6 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="icon-container w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-0.5 md:mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
