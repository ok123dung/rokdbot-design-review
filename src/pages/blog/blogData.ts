// DEPRECATED — historical aggregator. As of 2026-05-11, code-split refactor:
// - BlogList → imports `./blogMeta` (metadata only, ~53KB chunk)
// - BlogPost → lazy-loads `./posts/<slug>.ts` via `import.meta.glob` (5-12KB per article chunk)
//
// This file remains for type re-export backwards compat. New code: import from blogTypes.

export type { BlogPost } from "./blogTypes";
