import { Link } from "react-router-dom";
import { Gamepad2, Clock, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { blogMeta, type BlogPostMeta } from "./blogMeta";

// Categorize by slug pattern (no need to add field on each post)
function categorize(post: BlogPostMeta): "guide" | "comparison" | "feature" | "legacy" {
  const s = post.slug;
  if (
    s.startsWith("farm-fatigue") ||
    s.startsWith("f2p-") ||
    s.startsWith("lohar-") ||
    s.startsWith("kvk-season-prep")
  ) return "guide";
  if (
    s.startsWith("rokdbot-v3-vs") ||
    s.startsWith("why-mid-tier") ||
    s.startsWith("bot-vs-bluestacks") ||
    s.startsWith("rokdbot-safety") ||
    s.startsWith("tier-list-")
  ) return "comparison";
  if (
    s.startsWith("cach-farm-gem-hieu") ||
    s.startsWith("bot-rise-of-kingdoms-co-an-toan") ||
    s.startsWith("huong-dan-su-dung-rokdbot")
  ) return "legacy";
  return "feature";
}

const SECTION_META = {
  guide: { title: "Hướng dẫn & Roadmap", subtitle: "F2P → VIP, KvK prep, mistakes tránh" },
  comparison: { title: "So sánh & ROI", subtitle: "Tier comparison, BlueStacks vs cloud, safety" },
  feature: { title: "Tính năng RokdBot", subtitle: "Combo / Rally / Honor / AI Commander / Multi-account" },
  legacy: { title: "Bài cũ", subtitle: "Hướng dẫn cơ bản trước Aurora redesign" },
};

function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
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
            Đọc thêm <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogList() {
  const grouped: Record<string, BlogPostMeta[]> = { guide: [], comparison: [], feature: [], legacy: [] };
  for (const post of blogMeta) grouped[categorize(post)].push(post);

  const order: Array<keyof typeof SECTION_META> = ["guide", "comparison", "feature", "legacy"];

  return (
    <div className="min-h-screen aurora-bg">
      <SEO
        title={`Blog RokdBot — ${blogMeta.length} bài Rise of Kingdoms 2026`}
        description={`${blogMeta.length} bài hướng dẫn Rise of Kingdoms, ROI bot tier comparison, Combo Spam+Luring+AOE, AI Commander Rotation, Honor Farming, KvK strategy. Cập nhật 2026.`}
        url="/blog"
        keywords="Rise of Kingdoms blog, RoK 2026 guide, bot RokdBot, Combo Spam Luring AOE, kéo rợ, Honor farming, KvK strategy"
        breadcrumbs={[
          { name: "Trang chủ", url: "/" },
          { name: "Blog", url: "/blog" },
        ]}
      />

      <nav className="navbar-glass border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-[1240px] mx-auto px-4 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-[#7ce7ff]" />
            <span className="text-lg font-bold text-white">RokdBot</span>
          </a>
          <a href="/#packages" className="btn-secondary text-sm">Xem 5 gói cước</a>
        </div>
      </nav>

      <main className="max-w-[1000px] mx-auto px-4 py-12">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Blog RokdBot — <span className="text-[#7ce7ff]">{blogMeta.length} bài</span>
          </h1>
          <p className="text-[#9db0ca]">
            Hướng dẫn Rise of Kingdoms 2026, ROI bot tier comparison, kéo rợ, Honor farming, KvK strategy.
            Cập nhật theo meta Season 8.
          </p>
        </header>

        {order.map((key) => {
          const posts = grouped[key];
          if (posts.length === 0) return null;
          const meta = SECTION_META[key];
          return (
            <section key={key} className="mb-12">
              <div className="mb-5 pb-3 border-b border-white/10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {meta.title} <span className="text-[#9db0ca] text-base font-normal">· {posts.length} bài</span>
                </h2>
                <p className="text-[#6b7a94] text-sm">{meta.subtitle}</p>
              </div>
              <div className="space-y-4">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
