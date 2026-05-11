"""Regenerate blogMeta.ts (vi), blogMetaEn.ts (en) and sitemap.xml.

Scans posts/*.ts and posts/en/*.ts, emits 3 generated files:
- src/pages/blog/blogMeta.ts (vi metadata)
- src/pages/blog/blogMetaEn.ts (en metadata)
- public/sitemap.xml (full sitemap with all URLs)

Run via: python scripts/gen-blog-meta.py
"""
import datetime
import os
import re

POSTS_DIR = os.path.join(os.path.dirname(__file__), "..", "src", "pages", "blog", "posts")
EN_POSTS_DIR = os.path.join(POSTS_DIR, "en")
OUT_FILE = os.path.join(os.path.dirname(__file__), "..", "src", "pages", "blog", "blogMeta.ts")
OUT_FILE_EN = os.path.join(os.path.dirname(__file__), "..", "src", "pages", "blog", "blogMetaEn.ts")
SITEMAP_FILE = os.path.join(os.path.dirname(__file__), "..", "public", "sitemap.xml")
BASE_URL = "https://rokdbot.com"


def scan_posts(directory):
    items = []
    if not os.path.isdir(directory):
        return items
    for fname in sorted(os.listdir(directory)):
        if not fname.endswith(".ts"):
            continue
        # Skip the en/ subdirectory when scanning vi posts dir
        full = os.path.join(directory, fname)
        if not os.path.isfile(full):
            continue
        with open(full, "r", encoding="utf-8") as f:
            c = f.read()

        def get(field, src=c):
            pattern = field + r':\s*"((?:[^"\\]|\\.)*)"'
            m = re.search(pattern, src)
            return m.group(1) if m else ""

        slug = get("slug")
        if not slug:
            continue
        items.append({
            "slug": slug,
            "title": get("title"),
            "description": get("description"),
            "date": get("date"),
            "readTime": get("readTime"),
            "coverImage": get("coverImage"),
        })
    items.sort(key=lambda m: m["date"], reverse=True)
    return items


metas = scan_posts(POSTS_DIR)
metas_en = scan_posts(EN_POSTS_DIR)

BS = chr(92)


def esc(s):
    return s.replace(BS, BS + BS).replace('"', BS + '"')


lines = [
    'import type { BlogPost } from "./blogTypes";',
    "",
    "/** Metadata-only index for BlogList. Lazy article content via ./posts/<slug>.ts. */",
    'export type BlogPostMeta = Omit<BlogPost, "content">;',
    "",
    "export const blogMeta: BlogPostMeta[] = [",
]

for m in metas:
    cover_field = (', coverImage: "' + esc(m["coverImage"]) + '"') if m["coverImage"] else ""
    line = (
        '  { slug: "' + m["slug"] + '"'
        ', title: "' + esc(m["title"]) + '"'
        ', description: "' + esc(m["description"]) + '"'
        ', date: "' + m["date"] + '"'
        ', readTime: "' + m["readTime"] + '"'
        + cover_field + " },"
    )
    lines.append(line)

lines.extend([
    "];",
    "",
    "// Build-time slug uniqueness check",
    "const _seen = new Set<string>();",
    "for (const p of blogMeta) {",
    '  if (_seen.has(p.slug)) throw new Error(`Duplicate blog slug: "${p.slug}"`);',
    "  _seen.add(p.slug);",
    "}",
    "",
])

with open(OUT_FILE, "w", encoding="utf-8", newline="\n") as f:
    f.write("\n".join(lines))

print("blogMeta.ts regenerated:", len(metas), "entries")


# Generate English meta (blogMetaEn.ts)
lines_en = [
    'import type { BlogPost } from "./blogTypes";',
    "",
    "/** English metadata-only index. Lazy article content via ./posts/en/<slug>.ts. */",
    'export type BlogPostMeta = Omit<BlogPost, "content">;',
    "",
    "export const blogMetaEn: BlogPostMeta[] = [",
]

for m in metas_en:
    cover_field = (', coverImage: "' + esc(m["coverImage"]) + '"') if m["coverImage"] else ""
    line = (
        '  { slug: "' + m["slug"] + '"'
        ', title: "' + esc(m["title"]) + '"'
        ', description: "' + esc(m["description"]) + '"'
        ', date: "' + m["date"] + '"'
        ', readTime: "' + m["readTime"] + '"'
        + cover_field + " },"
    )
    lines_en.append(line)

lines_en.extend([
    "];",
    "",
    "// Build-time slug uniqueness check",
    "const _seenEn = new Set<string>();",
    "for (const p of blogMetaEn) {",
    '  if (_seenEn.has(p.slug)) throw new Error(`Duplicate English blog slug: "${p.slug}"`);',
    "  _seenEn.add(p.slug);",
    "}",
    "",
])

with open(OUT_FILE_EN, "w", encoding="utf-8", newline="\n") as f:
    f.write("\n".join(lines_en))

print("blogMetaEn.ts regenerated:", len(metas_en), "entries")


# Generate sitemap.xml from both metas
def url_entry(loc, lastmod, changefreq, priority):
    return f'  <url><loc>{BASE_URL}{loc}</loc><lastmod>{lastmod}</lastmod><changefreq>{changefreq}</changefreq><priority>{priority}</priority></url>'


today = datetime.date.today().isoformat()
sitemap_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    url_entry("/", today, "weekly", "1.0"),
    url_entry("/blog", today, "daily", "0.9"),
    url_entry("/tra-cuu-don", "2026-05-09", "monthly", "0.6"),
]

# Vi articles sorted by slug for deterministic diff
for m in sorted(metas, key=lambda x: x["slug"]):
    sitemap_lines.append(url_entry(f"/blog/{m['slug']}", m["date"], "monthly", "0.7"))

# English blog list + articles
if metas_en:
    sitemap_lines.append(url_entry("/en/blog", today, "weekly", "0.8"))
    for m in sorted(metas_en, key=lambda x: x["slug"]):
        sitemap_lines.append(url_entry(f"/en/blog/{m['slug']}", m["date"], "monthly", "0.7"))

sitemap_lines.append("</urlset>")
sitemap_lines.append("")  # trailing newline

with open(SITEMAP_FILE, "w", encoding="utf-8", newline="\n") as f:
    f.write("\n".join(sitemap_lines))

total_urls = len(sitemap_lines) - 3  # subtract xml decl + urlset open + close
print("sitemap.xml regenerated:", total_urls, "URLs")
