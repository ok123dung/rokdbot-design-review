import { useNavigate, useSearchParams } from "react-router-dom";
import { OrderLookupModal } from "@/components/shop/OrderLookupModal";
import { SEO } from "@/components/SEO";

/**
 * Standalone page that hosts the OrderLookupModal.
 *
 * Why this exists: the homepage `WebSite` schema declares a SearchAction with
 * `urlTemplate=https://rokdbot.com/tra-cuu?ma={search_term_string}`. Google needs
 * that URL to resolve. The page also serves as a deep-link target for support
 * messages like "tra cứu đơn của bạn: rokdbot.com/tra-cuu?ma=ROKABC123".
 */
export default function TraCuuDon() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const initialCode = params.get("ma") ?? undefined;

  return (
    <>
      <SEO
        title="Tra cứu đơn hàng — RokdBot"
        description="Nhập mã đơn (ví dụ ROKABC123) để xem trạng thái thanh toán và tiến độ bot Rise of Kingdoms của bạn."
        url="/tra-cuu"
      />
      <div className="min-h-screen aurora-bg flex items-center justify-center">
        <OrderLookupModal initialCode={initialCode} onClose={() => navigate("/")} />
      </div>
    </>
  );
}
