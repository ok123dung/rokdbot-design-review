import { Link } from "react-router-dom";
import { Gamepad2, Clock, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { blogPosts } from "./blogData";

export default function BlogList() {
  return (
    <div className="min-h-screen aurora-bg">
      <SEO
        title="Blog — RokdBot"
        description="Blog về Rise of Kingdoms: hướng dẫn farm gem, bot an toàn, tips & tricks cho governors."
        url="/blog"
        keywords="Rise of Kingdoms blog, RoK tips, farm gem, bot an toàn, RokdBot hướng dẫn"
      />

      {/* Header */}
      <nav className="navbar-glass border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-[1240px] mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-[#7ce7ff]" />
            <span className="text-lg font-bold text-white">RokdBot</span>
          </a>
          <a href="/" className="btn-secondary text-sm">Shop</a>
        </div>
      </nav>

      <main className="max-w-[800px] mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Blog</h1>
        <p className="text-[#9db0ca] mb-10">Tips, hướng dẫn và tin tức về Rise of Kingdoms.</p>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="card-glass block p-6 group hover:border-[#7ce7ff]/30"
            >
              <div className="flex items-center gap-3 text-[#9db0ca] text-xs mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-[#7ce7ff] transition-colors">
                {post.title}
              </h2>
              <p className="text-[#9db0ca] text-sm leading-relaxed mb-3">{post.description}</p>
              <span className="text-[#7ce7ff] text-sm font-medium flex items-center gap-1">
                Đọc thêm <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
