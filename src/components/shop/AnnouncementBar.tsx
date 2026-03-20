export function AnnouncementBar() {
  const messages = [
    "Thanh toán tự động qua VietQR — nhận dịch vụ ngay!",
    "Hỗ trợ 24/7 qua Discord & Zalo",
    "Bot farm Rise of Kingdoms uy tín #1",
    "Thanh toán tự động qua VietQR — nhận dịch vụ ngay!",
    "Hỗ trợ 24/7 qua Discord & Zalo",
    "Bot farm Rise of Kingdoms uy tín #1",
  ];

  return (
    <div className="announcement-bar">
      <div className="marquee-track">
        {messages.map((msg, i) => (
          <span key={i} className="marquee-item">
            <span className="dot" />
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
