import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import type { FAQItem } from "@/components/shop/faq-data";

export interface ArticleMeta {
  datePublished: string;        // ISO 8601 e.g. "2026-03-20"
  dateModified?: string;
  author?: string;              // default "RokdBot Team"
  section?: string;
  wordCount?: number;
}

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  keywords?: string;
  noIndex?: boolean;
  article?: ArticleMeta;
  /** When provided, emit a FAQPage JSON-LD block. Pass on the home page only — Google
   * flags FAQ schemas whose Q/A don't appear in visible content on the same URL. */
  faq?: FAQItem[];
}

const BASE_URL = "https://rokdbot.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const PUBLISHER_LOGO = `${BASE_URL}/favicon-512.png`; // raster, ≥112×112 per Google guidelines

const OG_LOCALE: Record<string, string> = {
  vi: "vi_VN",
  en: "en_US",
  ko: "ko_KR",
  zh: "zh_CN",
};
const ARTICLE_LOCALE: Record<string, string> = {
  vi: "vi-VN",
  en: "en-US",
  ko: "ko-KR",
  zh: "zh-CN",
};

export function SEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  keywords,
  noIndex = false,
  article,
  faq,
}: SEOProps) {
  const { i18n } = useTranslation();
  // Normalize to language-only ISO 639-1 code: "vi-VN" → "vi", "en-US" → "en".
  const currentLang = (i18n.language || "vi").split("-")[0];

  const fullTitle = title
    ? `${title} | RokdBot`
    : "RokdBot - Dịch vụ Bot Farm Rise of Kingdoms #1 Việt Nam";

  const defaultDescription = "RokdBot - Dịch vụ bot farm Rise of Kingdoms hàng đầu Việt Nam. Tối ưu tài nguyên, phát triển tài khoản 24/7 với công nghệ bot tiên tiến nhất.";
  const metaDescription = description || defaultDescription;

  const defaultKeywords = "RokdBot, Rise of Kingdoms, bot farm, ROK bot, auto farm, game bot, Việt Nam";
  const metaKeywords = keywords || defaultKeywords;

  const canonicalUrl = url ? `${BASE_URL}${url}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content="RokdBot" />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={OG_LOCALE[currentLang] ?? "vi_VN"} />
      <meta property="og:site_name" content="RokdBot" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Hreflang: site is single-locale (Vietnamese) — only emit x-default + vi.
          Re-add per-language alternates here when standalone /en/, /ko/, /zh/ routes ship. */}
      <link rel="alternate" hrefLang="vi" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      <html lang={currentLang} />

      {/* Article schema (BlogPosting + Speakable) — emitted only on blog posts */}
      {article && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": `${canonicalUrl}#article`,
            mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
            headline: title,
            description: metaDescription,
            image,
            datePublished: article.datePublished,
            dateModified: article.dateModified ?? article.datePublished,
            author: { "@type": "Person", name: article.author ?? "RokdBot Team" },
            publisher: {
              "@type": "Organization",
              "@id": "https://rokdbot.com/#organization",
              name: "RokdBot",
              logo: {
                "@type": "ImageObject",
                url: PUBLISHER_LOGO,
                width: 512,
                height: 512,
              },
            },
            inLanguage: ARTICLE_LOCALE[currentLang] ?? "vi-VN",
            ...(article.section ? { articleSection: article.section } : {}),
            ...(article.wordCount ? { wordCount: article.wordCount } : {}),
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", ".lead", "article p:first-of-type"],
            },
          })}
        </script>
      )}

      {/* FAQPage schema — emitted on home only (data sourced from same array as FAQSection) */}
      {faq && faq.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${canonicalUrl}#faq`,
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          })}
        </script>
      )}
    </Helmet>
  );
}

/**
 * Compute Article `wordCount` from a markdown-ish blog body, stripping syntax tokens
 * (`##`, `###`, `**`, `- `, `| ... |`) so the count reflects readable prose only.
 */
export function countWords(markdown: string): number {
  const stripped = markdown
    .replace(/^#{1,6}\s+/gm, "")          // heading markers
    .replace(/\*\*([^*]+)\*\*/g, "$1")    // bold
    .replace(/\*([^*]+)\*/g, "$1")        // italic
    .replace(/`([^`]+)`/g, "$1")          // inline code
    .replace(/^\s*[-*+]\s+/gm, "")        // list bullets
    .replace(/^\s*\|.*\|\s*$/gm, "")      // table rows
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links → text only
    .replace(/[#*_`>|]+/g, " ")           // residual punctuation
    .replace(/\s+/g, " ")
    .trim();
  return stripped ? stripped.split(/\s+/).length : 0;
}
