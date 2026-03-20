import { Crown } from "lucide-react";

interface PackageCardProps {
  id: string;
  name: string;
  description: string | null;
  price: number;
  durationDays: number | null;
  features: string[] | null;
  stock: number | null;
  soldCount: number;
  isPopular?: boolean;
  onBuy: (id: string) => void;
}

export function PackageCard({
  id,
  name,
  description,
  price,
  durationDays,
  features,
  stock,
  soldCount,
  isPopular,
  onBuy,
}: PackageCardProps) {
  const remaining = stock !== null ? stock - soldCount : null;
  const outOfStock = remaining !== null && remaining <= 0;

  return (
    <div className={`card-glass relative ${isPopular ? "card-popular" : ""}`}>
      {isPopular && <span className="badge-popular">Phổ biến</span>}

      <div className="flex items-center gap-2 mb-2">
        <Crown className={`w-5 h-5 ${isPopular ? "text-[#f8c36b]" : "text-[#7ce7ff]"}`} />
        <h3 className="font-bold text-white text-lg">{name}</h3>
      </div>

      {description && (
        <p className="text-[#9db0ca] text-sm mb-4">{description}</p>
      )}

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="feature-list mb-4">
          {features.slice(0, 4).map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}

      {/* Price */}
      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="text-2xl font-extrabold text-gold font-mono">
            {price.toLocaleString()}đ
          </span>
          {durationDays && (
            <span className="text-[#9db0ca] text-sm ml-1">/ {durationDays} ngày</span>
          )}
        </div>
        {remaining !== null && (
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              remaining > 10
                ? "bg-green-500/15 text-green-400"
                : remaining > 0
                ? "bg-yellow-500/15 text-yellow-400"
                : "bg-red-500/15 text-red-400"
            }`}
          >
            {outOfStock ? "Hết hàng" : `Còn ${remaining}`}
          </span>
        )}
      </div>

      <button
        onClick={() => onBuy(id)}
        disabled={outOfStock}
        className="btn-buy w-full"
      >
        {outOfStock ? "Hết hàng" : "Mua ngay"}
      </button>
    </div>
  );
}
