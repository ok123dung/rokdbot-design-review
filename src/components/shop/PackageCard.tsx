import { Crown } from "lucide-react";

interface PackageCardProps {
  id: string;
  name: string;
  description: string | null;
  price: number;
  durationDays: number | null;
  stock: number | null;
  soldCount: number;
  onBuy: (id: string) => void;
}

export function PackageCard({
  id,
  name,
  description,
  price,
  durationDays,
  stock,
  soldCount,
  onBuy,
}: PackageCardProps) {
  const remaining = stock !== null ? stock - soldCount : null;
  const outOfStock = remaining !== null && remaining <= 0;

  return (
    <div className="card-glass group">
      <div className="flex items-center gap-2 mb-3">
        <Crown className="w-5 h-5 text-primary" />
        <h3 className="font-bold text-white text-lg">{name}</h3>
      </div>

      {description && (
        <p className="text-muted text-sm mb-4 line-clamp-2">{description}</p>
      )}

      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="text-2xl font-extrabold text-gold font-mono">
            {price.toLocaleString()}đ
          </span>
          {durationDays && (
            <span className="text-muted text-sm ml-1">/ {durationDays} ngày</span>
          )}
        </div>
        {remaining !== null && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            remaining > 10
              ? "bg-green-500/20 text-green-400"
              : remaining > 0
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-red-500/20 text-red-400"
          }`}>
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
