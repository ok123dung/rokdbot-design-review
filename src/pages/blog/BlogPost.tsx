import { useParams, Link } from "react-router-dom";
import { Gamepad2, Clock, ArrowLeft } from "lucide-react";
import { SEO } from "@/components/SEO";
import { blogPosts } from "./blogData";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen aurora-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Bài viết không tồn tại</h1>
          <a href="/blog" className="btn-primary">Về Blog</a>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <br key={i} />;
      if (trimmed.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">{trimmed.slice(3)}</h2>;
      if (trimmed.startsWith("### ")) return <h3 key={i} className="text-xl font-semibold text-white mt-8 mb-3">{trimmed.slice(4)}</h3>;
      if (trimmed.startsWith("**") && trimmed.endsWith("**")) return <p key={i} className="text-white font-semibold mb-2">{trimmed.slice(2, -2)}</p>;
      if (trimmed.startsWith("- ")) return <li key={i} className="text-[#9db0ca] ml-4 mb-1 list-disc">{trimmed.slice(2)}</li>;
      if (trimmed.startsWith("| ")) {
        const cells = trimmed.split("|").filter(Boolean).map((c) => c.trim());
        if (trimmed.includes("---")) return null;
        return (
          <div key={i} className="grid grid-cols-4 gap-2 text-sm py-2 border-b border-white/5">
            {cells.map((cell, j) => (
              <span key={j} className={j === 0 ? "text-white font-medium" : "text-[#9db0ca]"}>{cell}</span>
            ))}
          </div>
        );
      }
      return <p key={i} className="text-[#9db0ca] leading-relaxed mb-3">{trimmed}</p>;
    });
  };

  return (
    <div className="min-h-screen aurora-bg">
      <SEO
        title={post.title}
        description={post.description}
        url={`/blog/${post.slug}`}
        keywords={`Rise of Kingdoms, RoK, ${post.title}, RokdBot`}
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

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight">
          {post.title}
        </h1>

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
