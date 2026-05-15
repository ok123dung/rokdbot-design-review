// V3 redesign: fake 5-star reviews replaced with a "Stats Wall" — committed numbers
// only (per điều khoản dịch vụ). Component name kept so Index.tsx import works.
const stats: Array<{ num: string; lbl: string; sub: string; gold?: boolean }> = [
  { num: "≥99%", lbl: "Uptime cam kết", sub: "theo điều khoản" },
  { num: "29", lbl: "Tính năng tự động", sub: "farm + combat + city", gold: true },
  { num: "24h", lbl: "Kích hoạt sau VietQR", sub: "thanh toán → bot chạy" },
  { num: "<0,1%", lbl: "Tỷ lệ ban", sub: "IP riêng + anti-detect", gold: true },
  { num: "5 gói", lbl: "Trial → Premium VIP", sub: "từ 150k → 3M / tháng" },
  { num: "7–30", lbl: "Ngày theo gói", sub: "Trial 7 ngày · V1–V3 30 ngày", gold: true },
];

export function Testimonials() {
  return (
    <section className="max-w-[1240px] mx-auto px-4 py-20 md:py-24" id="stats">
      <header className="max-w-[720px] mx-auto text-center mb-12 md:mb-14">
        <span className="section-eyebrow">Số liệu</span>
        <h2 className="text-3xl md:text-4xl text-white mb-3 leading-tight" style={{ textWrap: "balance" } as React.CSSProperties}>
          Con số nói thay <span className="cyan-grad">lời quảng cáo.</span>
        </h2>
        <p className="text-[17px] text-[#9db0ca] leading-relaxed">
          Tất cả số liệu dưới đây là cam kết có trong điều khoản dịch vụ — không phải marketing fluff.
        </p>
      </header>

      <div className="stats-wall">
        {stats.map((s, i) => (
          <div className="stat-cell" key={i}>
            <div className={`num ${s.gold ? "gold" : ""}`}>{s.num}</div>
            <div className="lbl">{s.lbl}</div>
            <div className="sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
