# Code Standards — rokdbot.com

## File Size

- **<200 lines per code file** (per global CLAUDE.md). Data files (blog content) acceptable up to ~150 lines per article.
- Pre-existing `index.css` (1.310 lines) is grandfathered — refactor scheduled.

## Naming

- **kebab-case** cho file names: `auto-rally-captain-rok-2026.ts`
- **PascalCase** cho component files: `BlogPost.tsx`, `PackageGrid.tsx`
- **camelCase** cho variables, functions
- Slug = URL-safe kebab-case

## TypeScript

- Strict mode enabled
- Branded types cho domain primitives (e.g., `ISODate` cho blog dates)
- Runtime guards on imported data (slug uniqueness, ISO date format)
- Avoid `any` — use `unknown` + type narrowing

## React Components

- Functional components only (no class components)
- Hooks: prefer `useState` + `useEffect` over external state libraries
- Async cleanup: use `cancelled` flag pattern in `useEffect`
- Props: destructure with explicit types

## Error Handling

- **`JSON.parse` MUST be wrapped in try/catch** (especially DB-sourced data)
- Component should handle null/undefined gracefully (404 fallback for missing data)
- Network errors logged + displayed user-friendly message

## SEO + Meta

- Single source of truth: `src/components/SEO.tsx`
- Schema.org markup: `BlogPosting`, `Service`, `SoftwareApplication`, `Organization`, `BreadcrumbList`
- Canonical URL set per page
- OG + Twitter card images: 1200×630

## Blog Content Style

- **Vietnamese-native terms**: "rợ" (not "barb"), "đạo" (not "march"), "kéo rợ" (not "barb chain")
- **PAS structure**: Vấn đề (gameplay) → Khó khăn (thao tác) → Giải pháp (bot giúp gì)
- **Case study + benchmark angle**: real numbers > generic claims
- **Tier-aware CTA**: link to relevant package tier (V2 features → V2 CTA)
- **Cross-link cluster**: every article links to 2-3 others
- **Markdown subset**: H2/H3, bullet lists, tables (any column count), `[link](url)`, `**bold**`, `> blockquote` CTA boxes, `![alt](url)` images

## Markdown Renderer Limitations

`BlogPost.tsx` custom renderer (no `react-markdown` dep) supports:

- ✅ `## H2`, `### H3`
- ✅ `- bullet`, `| table |` (any column count)
- ✅ Inline `[text](url)`, `**bold**`
- ✅ `![alt](url)` images + placeholder mode (`url === "placeholder"`)
- ✅ `> blockquote` CTA boxes

NOT supported (document if needed):

- ❌ `*italic*`
- ❌ Nested formatting `**[bold link](url)**`
- ❌ Headings beyond H3
- ❌ Ordered lists
- ❌ Code blocks
- ❌ URLs containing `)`

## Git Workflow

- Conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`
- No AI references in commit messages
- No `--no-verify`
- Commit before deploy

## Deploy

- Build local with env baked (Vercel `framework: null` blocks git auto-build)
- `vercel deploy --prebuilt --prod` then `vercel promote` for custom domain alias
- Verify bundle has env strings via `grep -c "inondhimzqiguvdhyjng" dist/assets/*.js`
