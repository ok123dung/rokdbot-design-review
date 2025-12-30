import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Check, Star, Sparkles, Crown, Sword } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Weekly",
    icon: Star,
    price: "150K",
    periodKey: "perWeek",
    descriptionKey: "services.subtitle",
    features: [
      "Farm tài nguyên tự động",
      "Gather liên tục 24/7",
      "Training quân cơ bản",
      "Hỗ trợ Zalo/Discord",
    ],
    popular: false,
    gradient: "from-gaming-cyan/20 to-gaming-purple/20",
    borderColor: "border-gaming-cyan/30",
  },
  {
    name: "V1 Package",
    icon: Sparkles,
    price: "500K",
    periodKey: "perMonth",
    descriptionKey: "services.popular",
    features: [
      "Tất cả tính năng Weekly",
      "Auto barbarians & forts",
      "Multi-account support",
      "Priority support 24/7",
      "Báo cáo tiến độ hàng ngày",
    ],
    popular: true,
    gradient: "from-gaming-orange/30 to-gaming-pink/30",
    borderColor: "border-gaming-orange/50",
  },
  {
    name: "V2 Premium",
    icon: Crown,
    price: "800K",
    periodKey: "perMonth",
    descriptionKey: "services.subtitle",
    features: [
      "Tất cả tính năng V1",
      "Smart gathering optimization",
      "Alliance help automation",
      "Research & building queue",
      "VIP support trực tiếp",
      "Custom scripts theo yêu cầu",
    ],
    popular: false,
    gradient: "from-gaming-purple/20 to-gaming-pink/20",
    borderColor: "border-gaming-purple/30",
  },
  {
    name: "KvK Special",
    icon: Sword,
    price: "1.2M",
    periodKey: "perMonth",
    descriptionKey: "services.subtitle",
    features: [
      "Tất cả tính năng V2",
      "KvK rally coordination",
      "Honor points farming",
      "Castle siege support",
      "Real-time battle alerts",
      "Dedicated account manager",
      "Performance analytics",
    ],
    popular: false,
    gradient: "from-gaming-pink/20 to-gaming-cyan/20",
    borderColor: "border-gaming-pink/30",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={cardVariants}
              className={`relative rounded-2xl overflow-hidden ${
                service.popular ? "lg:scale-105 lg:-my-4 z-10" : ""
              }`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gaming-orange to-gaming-pink text-center py-2 text-sm font-semibold text-primary-foreground z-10">
                  🔥 {t("services.popular")}
                </div>
              )}

              {/* Card content */}
              <div
                className={`h-full flex flex-col p-6 bg-gradient-to-br ${service.gradient} backdrop-blur-sm border ${service.borderColor} rounded-2xl ${
                  service.popular ? "pt-12" : ""
                }`}
              >
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{service.name}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {t(service.descriptionKey)}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-gradient-gold">
                    {service.price}
                  </span>
                  <span className="text-muted-foreground">{t(`services.${service.periodKey}`)}</span>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a href="/auth" className="w-full">
                  <Button
                    className={`w-full ${
                      service.popular
                        ? "btn-gaming text-primary-foreground"
                        : "btn-gaming-outline"
                    }`}
                  >
                    {t("services.orderNow")}
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
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          * {t("order.paymentMethod")}: MoMo, {t("order.bankTransfer")}.
        </motion.p>
      </div>
    </section>
  );
}
