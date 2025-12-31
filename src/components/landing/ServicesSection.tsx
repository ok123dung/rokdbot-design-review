import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Check, Star, Sparkles, Crown, Sword, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    nameKey: "Weekly",
    icon: Star,
    priceKey: "weeklyPrice",
    periodKey: "perWeek",
    descriptionKey: "services.subtitle",
    featuresKey: "weekly",
    featureCount: 4,
    popular: false,
    accentColor: "gaming-cyan",
  },
  {
    nameKey: "V1 Package",
    icon: Sparkles,
    priceKey: "v1Price",
    periodKey: "perMonth",
    descriptionKey: "services.subtitle",
    featuresKey: "v1",
    featureCount: 5,
    popular: false,
    accentColor: "gaming-orange",
  },
  {
    nameKey: "V2 Premium",
    icon: Crown,
    priceKey: "v2Price",
    periodKey: "perMonth",
    descriptionKey: "services.popular",
    featuresKey: "v2",
    featureCount: 7,
    popular: true,
    accentColor: "gaming-purple",
  },
  {
    nameKey: "V3 Ultimate",
    icon: Sword,
    priceKey: "v3Price",
    periodKey: "perMonth",
    descriptionKey: "services.subtitle",
    featuresKey: "v3",
    featureCount: 7,
    popular: false,
    accentColor: "gaming-pink",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gaming-purple/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gaming-cyan/10 rounded-full blur-[150px] pointer-events-none" />

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
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.nameKey}
              variants={cardVariants}
              className={`relative group ${
                service.popular ? "sm:scale-105 z-10" : ""
              }`}
            >
              {/* Card */}
              <div
                className={`h-full flex flex-col p-5 md:p-6 card-glass rounded-2xl transition-all duration-500 hover:border-${service.accentColor}/50 ${
                  service.popular 
                    ? `ring-2 ring-${service.accentColor}/50 ring-offset-2 ring-offset-background` 
                    : ""
                }`}
                style={{
                  borderColor: service.popular ? `hsl(var(--${service.accentColor}) / 0.5)` : undefined
                }}
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gaming-orange to-gaming-pink text-xs font-semibold text-primary-foreground whitespace-nowrap overflow-hidden">
                    <span className="relative z-10">🔥 {t("services.popular")}</span>
                    <div className="absolute inset-0 badge-shine" />
                  </div>
                )}

                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="icon-container w-11 h-11 md:w-12 md:h-12">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">{service.nameKey}</h3>
                    <p className="text-muted-foreground text-xs">
                      {t(service.descriptionKey)}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4 md:mb-5">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-gold">
                    {t(`services.${service.priceKey}`)}
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">
                    {t(`services.${service.periodKey}`)}
                  </span>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-2 md:space-y-2.5 mb-5 md:mb-6">
                  {Array.from({ length: service.featureCount }, (_, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                        {t(`services.${service.featuresKey}.f${i + 1}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a href="/auth" className="w-full mt-auto">
                  <Button
                    className={`w-full group/btn rounded-xl ${
                      service.popular
                        ? "btn-gaming text-primary-foreground"
                        : "btn-gaming-outline"
                    }`}
                  >
                    <span>{t("services.orderNow")}</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-muted-foreground text-xs sm:text-sm mt-8 md:mt-10"
        >
          * {t("order.paymentMethod")}: MoMo, {t("order.bankTransfer")}.
        </motion.p>
      </div>
    </section>
  );
}
