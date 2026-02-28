import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Minh Tuấn",
    role: "Thống đốc Kingdom 1234",
    avatar: "MT",
    content: "Dùng RokdBot được 6 tháng rồi, tài khoản lên top 10 power trong kingdom. Support rất nhiệt tình, recommend cho mọi người!",
    rating: 5,
    gradient: "from-gaming-cyan to-gaming-blue",
  },
  {
    name: "Hoàng Anh",
    role: "R4 Alliance TOP",
    avatar: "HA",
    content: "Bot chạy ổn định, không bao giờ bị ban. Team hỗ trợ setup nhanh chóng, giải đáp mọi thắc mắc. Rất hài lòng với dịch vụ.",
    rating: 5,
    gradient: "from-gaming-purple to-gaming-pink",
  },
  {
    name: "Thanh Hà",
    role: "F2P Player",
    avatar: "TH",
    content: "Là người chơi F2P, dịch vụ này giúp mình cạnh tranh được với các whale. Farm resources hiệu quả gấp 3 lần so với chơi tay.",
    rating: 5,
    gradient: "from-gaming-orange to-gaming-pink",
  },
  {
    name: "Đức Phong",
    role: "KvK Champion",
    avatar: "DP",
    content: "Gói KvK Special thực sự đáng giá. Tự động rally, farm honor points cực kỳ tiện. Giúp alliance mình win 2 mùa KvK liên tiếp!",
    rating: 5,
    gradient: "from-gaming-green to-gaming-cyan",
  },
  {
    name: "Quốc Bảo",
    role: "Multi-account Player",
    avatar: "QB",
    content: "Quản lý 5 accounts cùng lúc mà không tốn công sức. Dashboard theo dõi rất tiện, báo cáo chi tiết. Tuyệt vời!",
    rating: 5,
    gradient: "from-gaming-blue to-gaming-purple",
  },
  {
    name: "Văn Nam",
    role: "Thống đốc mới",
    avatar: "VN",
    content: "Mới chơi RoK được 2 tháng nhưng nhờ bot mà phát triển nhanh hơn bạn bè rất nhiều. Gói Weekly rất phù hợp cho người mới.",
    rating: 5,
    gradient: "from-gaming-pink to-gaming-orange",
  },
];

export function TestimonialsSection() {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gaming-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gaming-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-gaming-orange to-gaming-pink mb-6 glow-orange"
          >
            <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">{t("testimonials.title")}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Navigation buttons - Desktop */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full card-glass border border-white/10 items-center justify-center text-foreground hover:text-gaming-cyan hover:border-gaming-cyan/50 transition-all duration-300 hover:glow-cyan"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full card-glass border border-white/10 items-center justify-center text-foreground hover:text-gaming-cyan hover:border-gaming-cyan/50 transition-all duration-300 hover:glow-cyan"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)] min-w-0"
                >
                  <div className="h-full card-glass rounded-2xl p-5 md:p-6 relative group hover:border-gaming-cyan/30 transition-all duration-500">
                    {/* Quote icon with glow */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-gaming-cyan/20 to-gaming-purple/20 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-gaming-cyan" />
                    </div>

                    {/* Rating stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-4 h-4 fill-gaming-orange text-gaming-orange drop-shadow-[0_0_4px_hsl(var(--gaming-orange)/0.5)]" 
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-foreground/90 mb-6 leading-relaxed text-sm md:text-base min-h-[80px]">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-sm font-bold text-white shadow-lg`}>
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gaming-cyan/5 to-gaming-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation & Dots */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Mobile arrows */}
            <button
              onClick={scrollPrev}
              className="md:hidden w-10 h-10 rounded-full card-glass border border-white/10 flex items-center justify-center text-foreground hover:text-gaming-cyan transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? "bg-gaming-cyan w-6 glow-cyan" 
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Mobile arrows */}
            <button
              onClick={scrollNext}
              className="md:hidden w-10 h-10 rounded-full card-glass border border-white/10 flex items-center justify-center text-foreground hover:text-gaming-cyan transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Stats or trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {[
            { value: "5000+", label: "Khách hàng hài lòng" },
            { value: "4.9/5", label: "Đánh giá trung bình" },
            { value: "99%", label: "Tỷ lệ recommend" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}