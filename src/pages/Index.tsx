import { useState } from "react";
import { Navbar } from "@/components/shop/Navbar";
import { AnnouncementBar } from "@/components/shop/AnnouncementBar";
import { HeroBanner } from "@/components/shop/HeroBanner";
import { PackageGrid } from "@/components/shop/PackageGrid";
import { PaymentModal } from "@/components/shop/PaymentModal";
import { OrderLookupModal } from "@/components/shop/OrderLookupModal";
import { ShopFooter } from "@/components/shop/ShopFooter";
import { SEO } from "@/components/SEO";

export default function Index() {
  const [buyingPackageId, setBuyingPackageId] = useState<string | null>(null);
  const [showOrderLookup, setShowOrderLookup] = useState(false);

  return (
    <div className="min-h-screen aurora-bg">
      <SEO
        title="RokdBot — Bot Farm Rise of Kingdoms"
        description="Dịch vụ treo bot Rise of Kingdoms 24/7. Thanh toán tự động, giao dịch nhanh gọn."
        url="/"
        keywords="RokdBot, Rise of Kingdoms, bot farm, ROK bot, auto farm, dịch vụ bot"
      />

      <Navbar onOrderLookup={() => setShowOrderLookup(true)} />

      <main className="pt-14">
        <AnnouncementBar />
        <HeroBanner />
        <PackageGrid onBuy={(id) => setBuyingPackageId(id)} />
      </main>

      <ShopFooter />

      {/* Payment Modal */}
      {buyingPackageId && (
        <PaymentModal
          packageId={buyingPackageId}
          onClose={() => setBuyingPackageId(null)}
        />
      )}

      {/* Order Lookup Modal */}
      {showOrderLookup && (
        <OrderLookupModal onClose={() => setShowOrderLookup(false)} />
      )}
    </div>
  );
}
