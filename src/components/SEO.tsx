import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  keywords?: string;
  noIndex?: boolean;
}

const BASE_URL = "https://rokdbot.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

export function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  keywords,
  noIndex = false,
}: SEOProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  const fullTitle = title 
    ? `${title} | RokdBot` 
    : "RokdBot - Dịch vụ Bot Farm Rise of Kingdoms #1 Việt Nam";
  
  const defaultDescription = "RokdBot - Dịch vụ bot farm Rise of Kingdoms hàng đầu Việt Nam. Tối ưu tài nguyên, phát triển tài khoản 24/7 với công nghệ bot tiên tiến nhất.";
  const metaDescription = description || defaultDescription;
  
  const defaultKeywords = "RokdBot, Rise of Kingdoms, bot farm, ROK bot, auto farm, game bot, Việt Nam";
  const metaKeywords = keywords || defaultKeywords;
  
  const canonicalUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  
  // Supported languages for hreflang
  const languages = ["vi", "en", "ko", "zh"];
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="RokdBot" />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={currentLang === "vi" ? "vi_VN" : currentLang === "en" ? "en_US" : currentLang === "ko" ? "ko_KR" : "zh_CN"} />
      <meta property="og:site_name" content="RokdBot" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Hreflang Tags for Multi-language */}
      {languages.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${canonicalUrl}${canonicalUrl.includes("?") ? "&" : "?"}lang=${lang}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      
      {/* Language */}
      <html lang={currentLang} />
    </Helmet>
  );
}
