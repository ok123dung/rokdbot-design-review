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
      />
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "RokdBot",
            url: "https://rokdbot.com",
            description: "Cloud-hosted Rise of Kingdoms bot farm service. Auto gather resources, gems, train troops 24/7.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://rokdbot.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "RokdBot",
            url: "https://rokdbot.com",
            logo: "https://rokdbot.com/favicon.ico",
            sameAs: [
              "https://discord.gg/UPuFYCw4JG",
              "https://zalo.me/g/rqgqyd878",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              availableLanguage: ["Vietnamese", "English", "Korean"],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Is the Rise of Kingdoms bot safe?", acceptedAnswer: { "@type": "Answer", text: "RokdBot uses human behavior simulation technology to minimize detection risk. Each account runs on isolated environments." }},
              { "@type": "Question", name: "How long until the bot starts running?", acceptedAnswer: { "@type": "Answer", text: "After payment and providing your game account info via Discord/Zalo, the bot is set up within 24 hours." }},
              { "@type": "Question", name: "What payment methods are accepted?", acceptedAnswer: { "@type": "Answer", text: "VietQR (instant bank transfer) for Vietnamese customers and PayPal for international customers." }},
              { "@type": "Question", name: "Do I need to download any software?", acceptedAnswer: { "@type": "Answer", text: "No. RokdBot is a cloud-hosted service. We run the bot on our servers. You don't need to install anything." }},
            ],
          }),
        }}
      />

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
