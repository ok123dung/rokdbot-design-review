import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Bot, 
  Shield, 
  Clock, 
  Headphones, 
  BarChart3, 
  Smartphone,
  Zap,
  Lock
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Bot,
      title: t("features.autoFarm.title"),
      description: t("features.autoFarm.description"),
      color: "gaming-cyan",
    },
    {
      icon: Shield,
      title: t("features.safe.title"),
      description: t("features.safe.description"),
      color: "gaming-green",
    },
    {
      icon: Clock,
      title: t("hero.stats.uptime"),
      description: t("features.autoFarm.description"),
      color: "gaming-purple",
    },
    {
      icon: Headphones,
      title: t("features.support.title"),
      description: t("features.support.description"),
      color: "gaming-orange",
    },
    {
      icon: BarChart3,
      title: t("features.dashboard.title"),
      description: t("features.dashboard.description"),
      color: "gaming-blue",
    },
    {
      icon: Smartphone,
      title: t("features.remoteControl.title"),
      description: t("features.remoteControl.description"),
      color: "gaming-pink",
    },
    {
      icon: Zap,
      title: t("features.quickSetup.title"),
      description: t("features.quickSetup.description"),
      color: "gaming-cyan",
    },
    {
      icon: Lock,
      title: t("features.safe.title"),
      description: t("features.safe.description"),
      color: "gaming-purple",
    },
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gaming-cyan/8 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-gaming-purple/8 rounded-full blur-[150px] translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            {t("features.title")} <span className="text-gradient">RokdBot</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            {t("features.subtitle")}
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {features.map((feature, index) => (
            <motion.div
              key={`${feature.title}-${index}`}
              variants={itemVariants}
              className="group"
            >
              <div className="h-full card-glass p-5 md:p-6 text-center rounded-2xl transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                {/* Icon */}
                <div className="icon-container w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
