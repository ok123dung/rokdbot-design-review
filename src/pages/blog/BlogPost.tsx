import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Gamepad2, Clock, ArrowLeft, List } from "lucide-react";
import { SEO, countWords } from "@/components/SEO";
import { blogMeta } from "./blogMeta";
import type { BlogPost as BlogPostType } from "./blogTypes";

// Code-splitting: each post file becomes its own lazy chunk via Vite glob.
// BlogList shows metadata only (~55KB); content payload (5-10KB/article) loads
// only when user opens a specific article — reduces /blog FCP/LCP significantly.
const postLoaders = import.meta.glob<{ post: BlogPostType }>("./posts/*.ts");

// Vietnamese-aware slugify for H2 anchor IDs (TOC + scroll).
// Strips diacritics, lowercases, replaces non-alphanumeric with hyphens.
function slugifyHeading(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/đ/gi, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

// Extract H2 headings from markdown content for TOC generation
function extractTOC(content: string): { id: string; text: string }[] {
  const lines = content.split("\n");
  const toc: { id: string; text: string }[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("## ") && !trimmed.startsWith("### ")) {
      const text = trimmed.slice(3);
      toc.push({ id: slugifyHeading(text), text });
    }
  }
  return toc;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [notFound, setNotFound] = useState(false);

  // Validate slug exists in metadata, then lazy-load full content
  useEffect(() => {
    if (!slug) return;
    const exists = blogMeta.some((m) => m.slug === slug);
    if (!exists) {
      setNotFound(true);
      return;
    }
    const loader = postLoaders[`./posts/${slug}.ts`];
    if (!loader) {
      setNotFound(true);
      return;
    }
    let cancelled = false;
    loader().then((mod) => {
      if (!cancelled) setPost(mod.post);
    }).catch(() => {
      if (!cancelled) setNotFound(true);
    });
    return () => { cancelled = true; };
  }, [slug]);

  if (notFound) {
    return (
      <div className="min-h-screen aurora-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Bài viết không tồn tại</h1>
          <a href="/blog" className="btn-primary">Về Blog</a>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen aurora-bg flex items-center justify-center">
        <div className="text-[#9db0ca] animate-pulse">Đang tải bài viết...</div>
      </div>
    );
  }

  // Inline markdown: [text](url) → <a>, **text** → <strong>
  // Returns array of strings/elements that React can render inside a paragraph
  const renderInline = (text: string, keyPrefix: string) => {
    const parts: (string | JSX.Element)[] = [];
    const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let i = 0;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
      if (match[1] && match[2]) {
        // Markdown link
        parts.push(
          <a key={`${keyPrefix}-l${i}`} href={match[2]} className="text-[#7ce7ff] hover:text-[#fde68a] underline underline-offset-2">
            {match[1]}
          </a>
        );
      } else if (match[3]) {
        // Inline bold
        parts.push(<strong key={`${keyPrefix}-b${i}`} className="text-white font-semibold">{match[3]}</strong>);
      }
      lastIndex = match.index + match[0].length;
      i++;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return parts.length > 0 ? parts : [text];
  };

  // Block-level markdown rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      // Image: ![alt](url) — supports placeholder for "image needed" slots
      if (trimmed.startsWith("![")) {
        const match = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (match) {
          const alt = match[1];
          const url = match[2];
          const isPlaceholder = url === "placeholder" || url === "TODO" || alt.startsWith("TODO:");
          if (isPlaceholder) {
            return (
              <div key={i} className="my-6 border-2 border-dashed border-[#7ce7ff]/30 bg-[#0a1428]/60 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">📸</div>
                <div className="text-[#7ce7ff] font-semibold text-xs uppercase tracking-wider mb-1">Cần ảnh in-game</div>
                <div className="text-[#9db0ca] text-sm">{alt.replace(/^TODO:\s*/, "")}</div>
              </div>
            );
          }
          return (
            <figure key={i} className="my-6">
              <img src={url} alt={alt} className="w-full rounded-xl border border-white/10" loading="lazy" />
              {alt && <figcaption className="text-center text-xs text-[#6b7a94] mt-2 italic">{alt}</figcaption>}
            </figure>
          );
        }
      }
      if (trimmed.startsWith("## ")) {
        const text = trimmed.slice(3);
        return <h2 key={i} id={slugifyHeading(text)} className="text-2xl font-bold text-white mt-10 mb-4 scroll-mt-20">{text}</h2>;
      }
      if (trimmed.startsWith("### ")) return <h3 key={i} className="text-xl font-semibold text-white mt-8 mb-3">{trimmed.slice(4)}</h3>;
      if (trimmed.startsWith("> ")) {
        // Blockquote / inline CTA box
        return (
          <div key={i} className="border-l-4 border-[#7ce7ff] bg-[#7ce7ff]/5 pl-4 py-3 my-5 rounded-r-lg text-[#c8d3e3]">
            {renderInline(trimmed.slice(2), `bq-${i}`)}
          </div>
        );
      }
      if (trimmed.startsWith("- ")) {
        return (
          <li key={i} className="text-[#9db0ca] ml-4 mb-1 list-disc">
            {renderInline(trimmed.slice(2), `li-${i}`)}
          </li>
        );
      }
      if (trimmed.startsWith("| ")) {
        const cells = trimmed.split("|").filter(Boolean).map((c) => c.trim());
        if (trimmed.includes("---")) return null;
        // Fix C1: dynamic columns based on actual cell count (not hardcoded 4)
        return (
          <div
            key={i}
            className="grid gap-2 text-sm py-2 border-b border-white/5"
            style={{ gridTemplateColumns: `repeat(${cells.length}, minmax(0, 1fr))` }}
          >
            {cells.map((cell, j) => (
              <span key={j} className={j === 0 ? "text-white font-medium" : "text-[#9db0ca]"}>
                {renderInline(cell, `td-${i}-${j}`)}
              </span>
            ))}
          </div>
        );
      }
      // Full-line bold: **text**
      if (trimmed.startsWith("**") && trimmed.endsWith("**") && trimmed.length > 4) {
        return <p key={i} className="text-white font-semibold mb-2">{trimmed.slice(2, -2)}</p>;
      }
      // Default paragraph with inline parsing
      return <p key={i} className="text-[#9db0ca] leading-relaxed mb-3">{renderInline(trimmed, `p-${i}`)}</p>;
    });
  };

  return (
    <div className="min-h-screen aurora-bg">
      <SEO
        title={post.title}
        description={post.description}
        url={`/blog/${post.slug}`}
        type="article"
        keywords={`Rise of Kingdoms, RoK, ${post.title}, RokdBot`}
        image={post.coverImage}
        article={{
          datePublished: post.date,
          author: post.author ?? "RokdBot Team",
          section: "Hướng dẫn Rise of Kingdoms",
          wordCount: countWords(post.content),
        }}
        breadcrumbs={[
          { name: "Trang chủ", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
      />

      <nav className="navbar-glass border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-[800px] mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-[#7ce7ff]" />
            <span className="text-lg font-bold text-white">RokdBot</span>
          </a>
          <Link to="/blog" className="btn-secondary text-sm">
            <ArrowLeft className="w-4 h-4" />
            Blog
          </Link>
        </div>
      </nav>

      <article className="max-w-[800px] mx-auto px-4 py-12">
        <div className="flex items-center gap-3 text-[#9db0ca] text-sm mb-4">
          <span>{post.date}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
          {post.title}
        </h1>

        {post.coverImage && (
          <figure className="mb-8">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full rounded-xl border border-white/10 aspect-[1200/630] object-cover"
              loading="eager"
            />
          </figure>
        )}

        {/* Table of contents — show for articles with ≥4 sections */}
        {(() => {
          const toc = extractTOC(post.content);
          if (toc.length < 4) return null;
          return (
            <nav className="card-glass p-5 mb-8" aria-label="Mục lục">
              <div className="flex items-center gap-2 text-[#7ce7ff] text-sm font-semibold uppercase tracking-wider mb-3">
                <List className="w-4 h-4" />
                Mục lục
              </div>
              <ol className="space-y-1.5 text-sm">
                {toc.map((item, idx) => (
                  <li key={item.id} className="flex gap-2 text-[#9db0ca]">
                    <span className="text-[#6b7a94] font-mono text-xs pt-0.5 w-5">{idx + 1}.</span>
                    <a href={`#${item.id}`} className="hover:text-[#fde68a] transition-colors leading-relaxed">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          );
        })()}

        <div className="prose-dark">
          {renderContent(post.content)}
        </div>

        {/* CTA */}
        <div className="card-glass p-8 mt-12 text-center" style={{ borderColor: "rgba(124, 231, 255, 0.2)" }}>
          <h3 className="text-xl font-bold text-white mb-3">Bắt đầu sử dụng RokdBot</h3>
          <p className="text-[#9db0ca] mb-5">29 tính năng tự động, thanh toán tức thì, bot chạy trong 24h.</p>
          <a href="/" className="btn-buy inline-block px-8 py-3">Xem gói dịch vụ</a>
        </div>
      </article>
    </div>
  );
}
