import { useState } from "react";
import { Navbar } from "@/components/shop/Navbar";
import { AnnouncementBar } from "@/components/shop/AnnouncementBar";
import { HeroBanner } from "@/components/shop/HeroBanner";
import { FeaturesSection } from "@/components/shop/FeaturesSection";
import { PackageGrid } from "@/components/shop/PackageGrid";
import { HowItWorks } from "@/components/shop/HowItWorks";
import { SecuritySection } from "@/components/shop/SecuritySection";
import { Testimonials } from "@/components/shop/Testimonials";
import { FAQSection } from "@/components/shop/FAQSection";
import { CTASection } from "@/components/shop/CTASection";
import { PaymentModal } from "@/components/shop/PaymentModal";
import { OrderLookupModal } from "@/components/shop/OrderLookupModal";
import { ShopFooter } from "@/components/shop/ShopFooter";
import { SEO } from "@/components/SEO";
import { faqs } from "@/components/shop/faq-data";

export default function Index() {
  const [buyingPackageId, setBuyingPackageId] = useState<string | null>(null);
  const [showOrderLookup, setShowOrderLookup] = useState(false);

  return (
    <div className="min-h-screen aurora-bg">
      <SEO
        title="RokdBot — Bot Farm Rise of Kingdoms"
        description="RokdBot - Cloud-hosted Rise of Kingdoms bot farm service. Auto gather resources, gems, train troops 24/7. No download needed. VietQR & PayPal payment."
        url="/"
        keywords="RokdBot, Rise of Kingdoms, bot farm, ROK bot, auto farm, gem farming, RSS gathering, cloud bot service, Vietnam, PayPal"
        faq={faqs}
      />
      {/* Site-wide schemas (Organization, WebSite, WebPage, BreadcrumbList,
          Service, SoftwareApplication) live in index.html `<head>`.
          FAQPage is emitted by <SEO faq={faqs}> above so it stays in sync with
          the visible FAQSection and is scoped to the home route only. */}

      <Navbar onOrderLookup={() => setShowOrderLookup(true)} />

      <main className="pt-14">
        <AnnouncementBar />
        <HeroBanner />
        <FeaturesSection />
        <PackageGrid onBuy={(id) => setBuyingPackageId(id)} />
        <HowItWorks />
        <SecuritySection />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>

      <ShopFooter />

      {buyingPackageId && (
        <PaymentModal
          packageId={buyingPackageId}
          onClose={() => setBuyingPackageId(null)}
        />
      )}

      {showOrderLookup && (
        <OrderLookupModal onClose={() => setShowOrderLookup(false)} />
      )}
    </div>
  );
}
