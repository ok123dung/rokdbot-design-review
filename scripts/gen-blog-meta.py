"""Regenerate blogMeta.ts from all posts/*.ts files.
Run via: python scripts/gen-blog-meta.py
"""
import os
import re

POSTS_DIR = os.path.join(os.path.dirname(__file__), "..", "src", "pages", "blog", "posts")
OUT_FILE = os.path.join(os.path.dirname(__file__), "..", "src", "pages", "blog", "blogMeta.ts")

metas = []

for fname in sorted(os.listdir(POSTS_DIR)):
    if not fname.endswith(".ts"):
        continue
    with open(os.path.join(POSTS_DIR, fname), "r", encoding="utf-8") as f:
        c = f.read()

    def get(field, src=c):
        pattern = field + r':\s*"((?:[^"\\]|\\.)*)"'
        m = re.search(pattern, src)
        return m.group(1) if m else ""

    slug = get("slug")
    title = get("title")
    desc = get("description")
    date = get("date")
    read = get("readTime")
    cover = get("coverImage")
    if not slug:
        continue
    metas.append({"slug": slug, "title": title, "description": desc, "date": date, "readTime": read, "coverImage": cover})

metas.sort(key=lambda m: m["date"], reverse=True)

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
