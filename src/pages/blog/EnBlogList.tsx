import { Link } from "react-router-dom";
import { Gamepad2, Clock, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { blogMetaEn, type BlogPostMeta } from "./blogMetaEn";

function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      to={`/en/blog/${post.slug}`}
      className="card-glass block group hover:border-[#7ce7ff]/30 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row gap-0">
        {post.coverImage && (
          <div className="md:w-[200px] md:flex-shrink-0 aspect-[1200/630] md:aspect-auto md:h-auto overflow-hidden border-r border-white/5">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex-1 p-5">
          <div className="flex items-center gap-3 text-[#9db0ca] text-xs mb-2">
            <span>{post.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h2 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#7ce7ff] transition-colors leading-tight">
            {post.title}
          </h2>
          <p className="text-[#9db0ca] text-sm leading-relaxed line-clamp-2 mb-2">{post.description}</p>
          <span className="text-[#7ce7ff] text-sm font-medium flex items-center gap-1">
            Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function EnBlogList() {
  return (
    <div className="min-h-screen aurora-bg">
      <SEO
        title={`RokdBot Blog — ${blogMetaEn.length} Rise of Kingdoms guides 2026`}
        description={`${blogMetaEn.length} guides on Rise of Kingdoms 2026, ROI bot tier comparison, Combo Spam+Luring+AOE, AI Commander Rotation, Honor Farming, KvK strategy. Updated 2026.`}
        url="/en/blog"
        keywords="Rise of Kingdoms blog, RoK 2026 guide, bot RokdBot, Combo Spam Luring AOE, barb farming, Honor farming, KvK strategy"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/en/blog" },
        ]}
      />

      <nav className="navbar-glass border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-[1240px] mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-[#7ce7ff]" />
            <span className="text-lg font-bold text-white">RokdBot</span>
          </a>
          <div className="flex items-center gap-3">
            <a href="/blog" className="btn-secondary text-sm">🇻🇳 Tiếng Việt</a>
            <a href="/#packages" className="btn-secondary text-sm">View 5 packages</a>
          </div>
        </div>
      </nav>

      <main className="max-w-[1000px] mx-auto px-4 py-12">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            RokdBot Blog — <span className="text-[#7ce7ff]">{blogMetaEn.length} articles</span>
          </h1>
          <p className="text-[#9db0ca]">
            Rise of Kingdoms 2026 guides, ROI bot tier comparison, barb farming, Honor farming, KvK strategy.
            Updated for Season 8 meta.
          </p>
          <p className="text-[#6b7a94] text-sm mt-2">
            Full Vietnamese catalog (204 articles) at <a href="/blog" className="text-[#7ce7ff] underline">/blog</a>.
          </p>
        </header>

        <section className="mb-12">
          <div className="mb-5 pb-3 border-b border-white/10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
              Featured guides <span className="text-[#9db0ca] text-base font-normal">· {blogMetaEn.length} articles</span>
            </h2>
            <p className="text-[#6b7a94] text-sm">Strategic English translations of top-performing Vietnamese articles</p>
          </div>
          <div className="space-y-4">
            {blogMetaEn.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
