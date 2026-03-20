import { Star } from "lucide-react";

const reviews = [
  {
    name: "Minh Quân",
    server: "Server 1852",
    text: "Dùng RokdBot được 3 tháng, acc farm lên nhanh cực kỳ. Bot chạy ổn định, không bị ban lần nào.",
    stars: 5,
  },
  {
    name: "Alex T.",
    server: "Server 2401",
    text: "Best bot service I've found. The custom strategy option is amazing. My alliance is now top 5!",
    stars: 5,
  },
  {
    name: "Hải Đăng",
    server: "Server 1645",
    text: "Thanh toán nhanh, hỗ trợ nhiệt tình. Bot setup trong vài tiếng là chạy luôn. Recommend cho anh em.",
    stars: 5,
  },
  {
    name: "김준호",
    server: "Server 2103",
    text: "매우 좋은 서비스입니다. 봇이 안정적이고 고객 지원이 빠릅니다. 추천합니다!",
    stars: 4,
  },
];

export function Testimonials() {
  return (
    <section className="max-w-[1240px] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Khách hàng nói gì?
        </h2>
        <p className="text-[#9db0ca] max-w-lg mx-auto">
          Hàng nghìn người chơi tin tưởng sử dụng dịch vụ của chúng tôi.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reviews.map((r, i) => (
          <div key={i} className="card-glass p-5">
            {/* Stars */}
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className={`w-4 h-4 ${j < r.stars ? "text-[#f8c36b] fill-[#f8c36b]" : "text-white/20"}`}
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-[#9db0ca] text-sm leading-relaxed mb-4">
              "{r.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7ce7ff] to-[#38bdf8] flex items-center justify-center text-xs font-bold text-[#050913]">
                {r.name.charAt(0)}
              </div>
              <div>
                <p className="text-white text-sm font-medium">{r.name}</p>
                <p className="text-[#9db0ca] text-xs">{r.server}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
