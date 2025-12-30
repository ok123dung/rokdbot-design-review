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

const features = [
  {
    icon: Bot,
    title: "AI Bot thông minh",
    description: "Bot tự động học và thích nghi với gameplay của bạn, tối ưu hóa mọi hoạt động.",
  },
  {
    icon: Shield,
    title: "An toàn tuyệt đối",
    description: "Công nghệ anti-detection tiên tiến, tài khoản của bạn luôn được bảo vệ.",
  },
  {
    icon: Clock,
    title: "Hoạt động 24/7",
    description: "Bot chạy liên tục không nghỉ, tối đa hóa hiệu quả farm và gather.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ tận tâm",
    description: "Team support nhiệt tình qua Zalo, Discord - sẵn sàng giúp đỡ mọi lúc.",
  },
  {
    icon: BarChart3,
    title: "Báo cáo chi tiết",
    description: "Theo dõi tiến độ tài khoản qua dashboard trực quan và báo cáo hàng ngày.",
  },
  {
    icon: Smartphone,
    title: "Quản lý từ xa",
    description: "Kiểm soát bot mọi lúc mọi nơi qua web dashboard hoặc app.",
  },
  {
    icon: Zap,
    title: "Setup siêu nhanh",
    description: "Chỉ mất 5 phút để setup và bắt đầu sử dụng dịch vụ.",
  },
  {
    icon: Lock,
    title: "Bảo mật thông tin",
    description: "Thông tin tài khoản được mã hóa và bảo mật theo chuẩn cao nhất.",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gaming-cyan/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gaming-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

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
            Tại sao chọn <span className="text-gradient">RokdBot</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Chúng tôi mang đến trải nghiệm bot Rise of Kingdoms tốt nhất với công nghệ tiên tiến
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group card-gradient-hover rounded-xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
