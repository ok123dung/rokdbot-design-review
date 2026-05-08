interface PackageCardProps {
  id: string;
  name: string;
  description: string | null;
  price: number;
  durationDays: number | null;
  features: string[] | null;
  stock: number | null;
  soldCount: number;
  isFeatured?: boolean;
  onBuy: (id: string) => void;
}

// V3 redesign card.
// `isFeatured` triggers the elevated centerpiece: bigger padding, gold glow,
// gold-gradient price, "★ Phổ biến nhất" badge.
export function PackageCard({
  id,
  name,
  description,
  price,
  durationDays,
  features,
  stock,
  soldCount,
  isFeatured,
  onBuy,
}: PackageCardProps) {
  const remaining = stock !== null ? stock - soldCount : null;
  const outOfStock = remaining !== null && remaining <= 0;
  const formattedPrice = `${price.toLocaleString("vi-VN")}đ`;
  const unit = durationDays ? `/ ${durationDays} ngày` : "";

  return (
    <div className={`pkg-card-v3 ${isFeatured ? "featured" : ""}`}>
      {isFeatured && <div className="pkg-featured-badge">★ Phổ biến nhất</div>}

      <div>
        <div className="pkg-name-v3">{name}</div>
        {description && <div className="pkg-tagline-v3">{description}</div>}
      </div>

      <div className="pkg-price-v3">
        <span className="num">{formattedPrice}</span>
        {unit && <span className="unit">{unit}</span>}
      </div>

      {features && features.length > 0 && (
        <ul className="pkg-features-v3">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}

      {/* Stock pill — kept above the CTA for honesty about availability */}
      {remaining !== null && (
        <div
          className="text-xs font-medium px-2 py-1 rounded-full self-start"
          style={{
            background: outOfStock
              ? "rgba(239,68,68,0.15)"
              : remaining > 10
              ? "rgba(34,197,94,0.15)"
              : "rgba(234,179,8,0.18)",
            color: outOfStock
              ? "#fca5a5"
              : remaining > 10
              ? "#86efac"
              : "#fde68a",
          }}
        >
          {outOfStock ? "Hết hàng" : `Còn ${remaining}`}
        </div>
      )}

      <button
        type="button"
        className="pkg-cta-v3"
        onClick={() => onBuy(id)}
        disabled={outOfStock}
      >
        {outOfStock ? "Hết hàng" : isFeatured ? `Mua ${name} với VietQR →` : `Đăng ký ${name} →`}
      </button>
    </div>
  );
}
