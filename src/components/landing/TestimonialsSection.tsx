import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Minh Tuấn",
    role: "Thống đốc Kingdom 1234",
    avatar: "MT",
    content: "Dùng RokdBot được 6 tháng rồi, tài khoản lên top 10 power trong kingdom. Support rất nhiệt tình, recommend cho mọi người!",
    rating: 5,
  },
  {
    name: "Hoàng Anh",
    role: "R4 Alliance TOP",
    avatar: "HA",
    content: "Bot chạy ổn định, không bao giờ bị ban. Team hỗ trợ setup nhanh chóng, giải đáp mọi thắc mắc. Rất hài lòng với dịch vụ.",
    rating: 5,
  },
  {
    name: "Thanh Hà",
    role: "F2P Player",
    avatar: "TH",
    content: "Là người chơi F2P, dịch vụ này giúp mình cạnh tranh được với các whale. Farm resources hiệu quả gấp 3 lần so với chơi tay.",
    rating: 5,
  },
  {
    name: "Đức Phong",
    role: "KvK Champion",
    avatar: "DP",
    content: "Gói KvK Special thực sự đáng giá. Tự động rally, farm honor points cực kỳ tiện. Giúp alliance mình win 2 mùa KvK liên tiếp!",
    rating: 5,
  },
  {
    name: "Quốc Bảo",
    role: "Multi-account Player",
    avatar: "QB",
    content: "Quản lý 5 accounts cùng lúc mà không tốn công sức. Dashboard theo dõi rất tiện, báo cáo chi tiết. Tuyệt vời!",
    rating: 5,
  },
  {
    name: "Văn Nam",
    role: "Thống đốc mới",
    avatar: "VN",
    content: "Mới chơi RoK được 2 tháng nhưng nhờ bot mà phát triển nhanh hơn bạn bè rất nhiều. Gói Weekly rất phù hợp cho người mới.",
    rating: 5,
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section id="testimonials" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gaming-purple/5 to-transparent" />

      <div className="container mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className="card-gradient-hover rounded-xl p-6 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gaming-orange text-gaming-orange" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gaming-cyan to-gaming-purple flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
