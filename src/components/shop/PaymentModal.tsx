import { useEffect, useState, useCallback } from "react";
import { X, Copy, Check, Loader2, MessageCircle, ArrowRight, AlertCircle } from "lucide-react";
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

type ModalState =
  | "contact"        // step 1: capture customer contact
  | "loading"        // creating order
  | "paying"         // QR shown, waiting for webhook
  | "confirmed"      // webhook fired, paid_at set
  | "manual_wait"    // customer clicked "Đã chuyển khoản", waiting admin verify
  | "expired"        // 15 min countdown elapsed without webhook or self-report
  | "error";

type ContactMethod = "zalo" | "telegram" | "discord" | "email" | "phone";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// 15 minutes — was 5 min before. Real bank transfers can take 1-3 min;
// older bank apps + interbank routes need more buffer.
const COUNTDOWN_SECONDS = 900;

export function PaymentModal({ packageId, onClose }: PaymentModalProps) {
  const [state, setState] = useState<ModalState>("contact");
  const [order, setOrder] = useState<OrderResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  // Contact form state
  const [contactMethod, setContactMethod] = useState<ContactMethod>("zalo");
  const [contact, setContact] = useState("");
  const [contactError, setContactError] = useState("");

  // Self-report state
  const [reporting, setReporting] = useState(false);
  const [reportNote, setReportNote] = useState("");

  // Validate contact input
  const validateContact = (): boolean => {
    const trimmed = contact.trim();
    if (!trimmed) {
      setContactError("Vui lòng nhập thông tin liên hệ");
      return false;
    }
    if (trimmed.length < 3) {
      setContactError("Quá ngắn — vui lòng nhập đầy đủ");
      return false;
    }
    if (trimmed.length > 200) {
      setContactError("Quá dài (max 200 ký tự)");
      return false;
    }
    if (contactMethod === "email" && !trimmed.includes("@")) {
      setContactError("Email không hợp lệ");
      return false;
    }
    if ((contactMethod === "zalo" || contactMethod === "phone") && !/\d{8,}/.test(trimmed)) {
      setContactError("Số điện thoại phải có ít nhất 8 chữ số");
      return false;
    }
    setContactError("");
    return true;
  };

  // Step 1 → 2: submit contact + create order
  const handleSubmitContact = useCallback(async () => {
    if (!validateContact()) return;
    setState("loading");

    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_KEY,
        },
        body: JSON.stringify({
          package_id: packageId,
          customer_contact: contact.trim(),
          customer_contact_method: contactMethod,
        }),
      });

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [packageId, contact, contactMethod]);

  // Poll order status every 2s as primary mechanism. Reliable across
  // any Supabase Realtime config. Stops when status moves out of pending
  // or after 15-min countdown elapses (handled by handleExpire).
  //
  // (Also try Realtime broadcast as a faster signal — trigger
  // orders_broadcast_paid_trigger emits status_change via realtime.send()
  // on every status update; if the tenant supports it, subscriber sees
  // the event instantly. Polling catches it on the next tick regardless.)
  useEffect(() => {
    if (!order) return;
    let cancelled = false;

    // Broadcast listener (best-effort)
    const channel = supabase.channel(`order-${order.order_id}`);
    channel
      .on("broadcast", { event: "status_change" }, (payload) => {
        const next = (payload.payload as { status?: string } | undefined);
        if (next?.status === "paid" && !cancelled) setState("confirmed");
      })
      .subscribe();

    // Polling fallback (every 2s)
    const poll = async () => {
      if (cancelled) return;
      const { data } = await supabase
        .from("orders")
        .select("status")
        .eq("id", order.order_id)
        .maybeSingle();
      if (cancelled) return;
      if (data?.status === "paid") {
        setState("confirmed");
        return;
      }
      setTimeout(poll, 2000);
    };
    setTimeout(poll, 2000);

    return () => {
      cancelled = true;
      supabase.removeChannel(channel);
    };
  }, [order]);

  const handleCopy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const handleExpire = useCallback(() => {
    setState((prev) => (prev === "paying" ? "expired" : prev));
  }, []);

  // Customer self-reports payment (manual verify fallback)
  const handleReportPaid = useCallback(async () => {
    if (!order) return;
    setReporting(true);
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/report-payment-received`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_KEY,
        },
        body: JSON.stringify({
          order_id: order.order_id,
          note: reportNote.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to submit report");
        return;
      }
      if (data.status === "paid") {
        setState("confirmed");
      } else {
        setState("manual_wait");
      }
    } catch {
      setError("Network error. Try again or contact us directly.");
    } finally {
      setReporting(false);
    }
  }, [order, reportNote]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Đóng" className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        {/* Step 1: Capture contact BEFORE showing QR */}
        {state === "contact" && (
          <div>
            <h2 className="text-lg font-bold text-white mb-1">Thông tin liên hệ</h2>
            <p className="text-muted text-sm mb-4">
              Để chúng tôi liên hệ kích hoạt bot sau khi thanh toán.
            </p>

            {/* Contact method selector */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {(["zalo", "telegram", "discord"] as ContactMethod[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setContactMethod(m)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    contactMethod === m
                      ? "bg-primary text-white"
                      : "bg-white/5 text-muted hover:bg-white/10"
                  }`}
                >
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {(["email", "phone"] as ContactMethod[]).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setContactMethod(m)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    contactMethod === m
                      ? "bg-primary text-white"
                      : "bg-white/5 text-muted hover:bg-white/10"
                  }`}
                >
                  {m === "email" ? "Email" : "Số điện thoại"}
                </button>
              ))}
            </div>

            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder={
                contactMethod === "zalo"
                  ? "0912345678 (số Zalo)"
                  : contactMethod === "telegram"
                  ? "@username hoặc +84..."
                  : contactMethod === "discord"
                  ? "username#1234"
                  : contactMethod === "email"
                  ? "you@example.com"
                  : "0912345678"
              }
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-muted focus:outline-none focus:border-primary mb-2"
              autoFocus
            />
            {contactError && (
              <p className="text-red-400 text-xs mb-2 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {contactError}
              </p>
            )}

            <p className="text-muted text-xs mb-4">
              Chỉ admin RokdBot xem thông tin này. Không spam, không bán dữ liệu.
            </p>

            <button onClick={handleSubmitContact} className="btn-buy w-full py-3 flex items-center justify-center gap-2">
              Tiếp tục
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

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

        {/* Paying — QR shown, waiting for webhook */}
        {state === "paying" && order && (
          <div className="text-center">
            <h2 className="text-lg font-bold text-white mb-1">Thanh toán đơn hàng</h2>
            <p className="text-muted text-sm mb-4">{order.package_name}</p>

            <div className="bg-white rounded-xl p-3 inline-block mb-4">
              <img src={order.qr_url} alt="Payment QR Code" className="w-56 h-56 object-contain" />
            </div>

            <p className="text-3xl font-extrabold text-gold font-mono mb-4">
              {order.amount.toLocaleString()}đ
            </p>

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
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-muted" />}
                </button>
              </div>
            </div>

            <div className="text-sm text-muted space-y-1 mb-3">
              <p>HD Bank: <strong className="text-white">0915966853</strong></p>
              <p>Chủ TK: <strong className="text-white">NGUYEN HUU DUNG</strong></p>
            </div>

            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-3 mb-4 text-left">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-green-400 text-base shrink-0">🛡</span>
                <p className="text-green-100/90 text-xs leading-relaxed">
                  <strong className="text-green-300">Hoàn 100% + 1 tháng miễn phí</strong> nếu acc bị ban do bot. Cam kết trong điều khoản dịch vụ.
                </p>
              </div>
              <div className="flex items-start gap-2 mb-2">
                <span className="text-amber-400 text-base shrink-0">⚡</span>
                <p className="text-amber-100/90 text-xs leading-relaxed">
                  Admin xác nhận trong <strong className="text-amber-300">30 phút</strong> (giờ hành chính). Tự động trong 5 giây nếu SePay webhook đã active.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 text-base shrink-0">💬</span>
                <p className="text-cyan-100/90 text-xs leading-relaxed">
                  Cần hỏi trước khi chuyển?{" "}
                  <a
                    href={`https://zalo.me/g/rqgqyd878`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 underline hover:text-cyan-200"
                  >
                    Chat Zalo support
                  </a>
                  {" "}— admin trả lời nhanh.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-4">
              <p className="text-muted text-xs mb-2">International payment:</p>
              <a
                href={`https://paypal.me/ok123dung/${(order.amount / 25000).toFixed(0)}USD?note=ROK%20${order.payment_code}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0070ba] hover:bg-[#005ea6] text-white font-semibold rounded-lg px-5 py-2.5 text-sm transition-all"
              >
                Pay ~${(order.amount / 25000).toFixed(0)} USD via PayPal
              </a>
              <p className="text-muted text-[10px] mt-2">
                Include "ROK {order.payment_code}" in PayPal note
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-muted text-sm">Thời gian còn lại:</span>
              <CountdownTimer seconds={COUNTDOWN_SECONDS} onExpire={handleExpire} />
            </div>

            <div className="flex items-center justify-center gap-2 text-muted text-sm mb-3">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Đang chờ admin xác nhận (≤30 phút giờ HC)...</span>
            </div>

            {/* Fallback: customer self-report if webhook is slow */}
            <button
              onClick={() => setState("manual_wait")}
              className="text-primary text-sm hover:underline"
            >
              Đã chuyển khoản rồi? Nhấn để xác nhận →
            </button>
          </div>
        )}

        {/* Manual wait: customer self-reported */}
        {state === "manual_wait" && order && (
          <div className="text-center">
            <h2 className="text-lg font-bold text-white mb-2">Xác nhận đã chuyển khoản</h2>
            <p className="text-muted text-sm mb-4">
              Mã đơn hàng <span className="font-mono font-bold text-primary">ROK {order.payment_code}</span>
            </p>

            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-4 text-left">
              <p className="text-amber-200 text-sm mb-2 font-semibold">⏱ Quy trình xác nhận thủ công</p>
              <ol className="text-amber-100/80 text-xs space-y-1 list-decimal list-inside">
                <li>Admin kiểm tra sao kê HD Bank trong vòng 30 phút (giờ hành chính)</li>
                <li>Nếu giao dịch khớp → bot kích hoạt trong 24h</li>
                <li>Liên hệ qua {(order as OrderResult & { customer_contact_method?: string }).customer_contact_method ?? "Zalo/Discord"} đã nhập</li>
              </ol>
            </div>

            <textarea
              value={reportNote}
              onChange={(e) => setReportNote(e.target.value)}
              placeholder="Mã giao dịch ngân hàng (FT...) nếu có — giúp admin verify nhanh hơn"
              maxLength={500}
              rows={2}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder:text-muted focus:outline-none focus:border-primary mb-4"
            />

            <button
              onClick={handleReportPaid}
              disabled={reporting}
              className="btn-buy w-full py-3 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {reporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Đang gửi...
                </>
              ) : (
                <>Gửi xác nhận tới admin</>
              )}
            </button>

            {error && <p className="text-red-400 text-xs mt-3">{error}</p>}

            <div className="flex gap-2 mt-4 justify-center">
              <a href="https://discord.gg/UPuFYCw4JG" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                <MessageCircle className="w-3 h-3" /> Discord
              </a>
              <a href="https://zalo.me/g/rqgqyd878" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                Zalo
              </a>
            </div>
          </div>
        )}

        {/* Confirmed — webhook fired */}
        {state === "confirmed" && order && (
          <div className="text-center py-4">
            <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <Check className="w-10 h-10 text-green-400" />
            </div>
            <h2 className="text-xl font-bold text-green-400 mb-2">Thanh toán thành công!</h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
              <p className="text-muted text-sm mb-2">Mã đơn hàng của bạn:</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl font-bold text-primary font-mono">{order.payment_code}</span>
                <button
                  onClick={() => handleCopy(order.payment_code)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-muted" />}
                </button>
              </div>
            </div>

            <p className="text-muted text-sm mb-4">
              Bot sẽ được kích hoạt trong vòng 24 giờ. Admin sẽ liên hệ qua kênh đã nhập.
            </p>

            <div className="flex gap-3 justify-center">
              <a href="https://discord.gg/UPuFYCw4JG" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle className="w-4 h-4" /> Discord
              </a>
              <a href="https://zalo.me/g/rqgqyd878" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Zalo
              </a>
            </div>
          </div>
        )}

        {/* Expired — 15 min elapsed without webhook or self-report */}
        {state === "expired" && order && (
          <div className="text-center py-6">
            <p className="text-amber-400 font-medium mb-2">Hết thời gian chờ tự động</p>
            <p className="text-muted text-sm mb-4">
              Nếu mày đã chuyển khoản, click bên dưới để xác nhận. Admin sẽ verify thủ công.
            </p>
            <button onClick={() => setState("manual_wait")} className="btn-buy mb-3">
              Tôi đã chuyển khoản
            </button>
            <button onClick={onClose} className="block mx-auto text-muted text-sm hover:text-white">
              Đóng và tạo đơn mới
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
