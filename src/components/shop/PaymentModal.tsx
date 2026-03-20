import { useEffect, useState, useCallback } from "react";
import { X, Copy, Check, Loader2, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { CountdownTimer } from "./CountdownTimer";

interface PaymentModalProps {
  packageId: string;
  onClose: () => void;
}

interface OrderResult {
  order_id: string;
  payment_code: string;
  qr_url: string;
  amount: number;
  package_name: string;
}

type ModalState = "loading" | "paying" | "confirmed" | "expired" | "error";

export function PaymentModal({ packageId, onClose }: PaymentModalProps) {
  const [state, setState] = useState<ModalState>("loading");
  const [order, setOrder] = useState<OrderResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  // Create order on mount
  useEffect(() => {
    async function createOrder() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-order`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ package_id: packageId }),
          }
        );

        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Failed to create order");
          setState("error");
          return;
        }

        setOrder(data);
        setState("paying");
      } catch {
        setError("Network error. Please try again.");
        setState("error");
      }
    }
    createOrder();
  }, [packageId]);

  // Subscribe to realtime order updates
  useEffect(() => {
    if (!order) return;

    const channel = supabase
      .channel(`order-${order.order_id}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "orders",
          filter: `id=eq.${order.order_id}`,
        },
        (payload) => {
          if (payload.new?.status === "paid") {
            setState("confirmed");
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [order]);

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const handleExpire = useCallback(() => {
    setState("expired");
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        {/* Loading */}
        {state === "loading" && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
            <p className="text-muted">Đang tạo đơn hàng...</p>
          </div>
        )}

        {/* Error */}
        {state === "error" && (
          <div className="text-center py-12">
            <p className="text-red-400 font-medium mb-4">{error}</p>
            <button onClick={onClose} className="btn-secondary">Đóng</button>
          </div>
        )}

        {/* Paying */}
        {state === "paying" && order && (
          <div className="text-center">
            <h2 className="text-lg font-bold text-white mb-1">Thanh toán đơn hàng</h2>
            <p className="text-muted text-sm mb-4">{order.package_name}</p>

            {/* QR Code */}
            <div className="bg-white rounded-xl p-3 inline-block mb-4">
              <img
                src={order.qr_url}
                alt="Payment QR Code"
                className="w-56 h-56 object-contain"
              />
            </div>

            {/* Amount */}
            <p className="text-3xl font-extrabold text-gold font-mono mb-4">
              {order.amount.toLocaleString()}đ
            </p>

            {/* Transfer content */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
              <p className="text-muted text-sm mb-2">Nội dung chuyển khoản:</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl font-bold text-primary font-mono">
                  ROK {order.payment_code}
                </span>
                <button
                  onClick={() => handleCopy(`ROK ${order.payment_code}`)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted" />
                  )}
                </button>
              </div>
            </div>

            {/* Bank info */}
            <div className="text-sm text-muted space-y-1 mb-4">
              <p>HD Bank: <strong className="text-white">0915966853</strong></p>
              <p>Chủ TK: <strong className="text-white">NGUYEN HUU DUNG</strong></p>
            </div>

            {/* Countdown */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-muted text-sm">Thời gian còn lại:</span>
              <CountdownTimer seconds={300} onExpire={handleExpire} />
            </div>

            {/* Waiting spinner */}
            <div className="flex items-center justify-center gap-2 text-muted text-sm">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Đang chờ thanh toán...</span>
            </div>
          </div>
        )}

        {/* Confirmed */}
        {state === "confirmed" && order && (
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <Check className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-xl font-bold text-green-400 mb-2">Thanh toán thành công!</h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
              <p className="text-muted text-sm mb-2">Mã đơn hàng của bạn:</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-primary font-mono">
                  {order.payment_code}
                </span>
                <button
                  onClick={() => handleCopy(order.payment_code)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted" />
                  )}
                </button>
              </div>
            </div>

            <p className="text-muted text-sm mb-4">
              Liên hệ chúng tôi với mã này để bắt đầu dịch vụ:
            </p>

            <div className="flex gap-3 justify-center">
              <a
                href="https://discord.gg/YOUR_INVITE"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="w-4 h-4" />
                Discord
              </a>
              <a
                href="https://zalo.me/g/YOUR_GROUP"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Zalo
              </a>
            </div>
          </div>
        )}

        {/* Expired */}
        {state === "expired" && (
          <div className="text-center py-8">
            <p className="text-red-400 font-medium mb-2">Đơn hàng đã hết hạn</p>
            <p className="text-muted text-sm mb-4">Vui lòng tạo đơn hàng mới.</p>
            <button onClick={onClose} className="btn-secondary">Đóng</button>
          </div>
        )}
      </div>
    </div>
  );
}
