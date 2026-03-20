import { useState } from "react";
import { X, Search, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface OrderLookupModalProps {
  onClose: () => void;
}

interface OrderInfo {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
  payment_code: string;
  service_packages: { name: string } | null;
}

const statusMap: Record<string, { label: string; color: string }> = {
  pending: { label: "Chờ thanh toán", color: "text-yellow-400" },
  paid: { label: "Đã thanh toán", color: "text-purple-400" },
  processing: { label: "Đang xử lý", color: "text-blue-400" },
  running: { label: "Đang chạy", color: "text-cyan-400" },
  completed: { label: "Hoàn thành", color: "text-green-400" },
  cancelled: { label: "Đã hủy", color: "text-red-400" },
};

export function OrderLookupModal({ onClose }: OrderLookupModalProps) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<OrderInfo | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) return;

    setLoading(true);
    setNotFound(false);
    setOrder(null);

    const { data } = await supabase
      .from("orders")
      .select("id, status, total_amount, created_at, payment_code, service_packages(name)")
      .eq("payment_code", trimmed)
      .maybeSingle();

    if (data) {
      setOrder(data as OrderInfo);
    } else {
      setNotFound(true);
    }
    setLoading(false);
  };

  const status = order ? statusMap[order.status] || { label: order.status, color: "text-gray-400" } : null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container max-w-md" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Đóng" className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-bold text-white mb-4">Tra cứu đơn hàng</h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Nhập mã đơn (VD: ABC123)"
            maxLength={6}
            className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:border-primary focus:outline-none font-mono text-lg tracking-wider"
          />
          <button onClick={handleSearch} disabled={loading} aria-label="Tìm kiếm" className="btn-primary px-4">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
          </button>
        </div>

        {notFound && (
          <p className="text-red-400 text-sm text-center">Không tìm thấy đơn hàng với mã này.</p>
        )}

        {order && status && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-muted text-sm">Mã đơn</span>
              <span className="font-mono font-bold text-white">{order.payment_code}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted text-sm">Gói</span>
              <span className="text-white">{order.service_packages?.name || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted text-sm">Số tiền</span>
              <span className="text-gold font-bold font-mono">{Number(order.total_amount).toLocaleString()}đ</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted text-sm">Trạng thái</span>
              <span className={`font-medium ${status.color}`}>{status.label}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted text-sm">Ngày tạo</span>
              <span className="text-white text-sm">{new Date(order.created_at).toLocaleString("vi-VN")}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
