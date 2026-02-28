

## Bug Fixes Plan

### Bug 1: FAQ Discord/Zalo links are "#"
- **File**: `src/components/landing/FAQSection.tsx` lines 137, 146
- Change `href="#"` to `href="https://discord.gg/UPuFYCw4JG"` and `href="https://zalo.me/g/rqgqyd878"`, add `target="_blank" rel="noopener noreferrer"`

### Bug 2: Stats mismatch (Hero "1000+" vs Testimonials "500+")
- **File**: `src/components/landing/HeroSection.tsx` line 10 — change `"1000+"` to `"5000+"`
- **File**: `src/components/landing/TestimonialsSection.tsx` line 250 — change `"500+"` to `"5000+"`

### Bug 3: Auth email validation issue
- Already has Zod validation (`emailSchema` line 17, `validateForm` line 38). The `type="email"` is set on the input. Code looks correct — the issue is likely the email input not triggering `validateForm` on empty/invalid submissions. Will verify the form flow works correctly and ensure validation fires before API call.

### Bug 4: Footer copyright duplication
- **Files**: All 4 locale JSON files — update `footer.copyright` from `"© 2025"` to `"© 2026"` consistently
- The duplication "© 2026 RokdBot. © 2025 RokdBot." suggests `index.html` might also have a hardcoded copyright. Will check and ensure only `t("footer.copyright")` is used.

### Bug 5: NotFound page not translated, missing navbar/footer
- **File**: `src/pages/NotFound.tsx` — add `useTranslation`, wrap with Header/Footer, translate text
- **Files**: Add translation keys `notFound.title`, `notFound.message`, `notFound.backHome` to all 4 locale files

### Bug 6: Service card descriptions all same
- **File**: `src/components/landing/ServicesSection.tsx` — change `descriptionKey` for each service to unique keys
- **Files**: Add unique description keys to all 4 locale files (e.g., `services.weeklyDesc`, `services.v1Desc`, `services.v3Desc`)

### Bug 7: Carousel dots missing aria-label
- **File**: `src/components/landing/TestimonialsSection.tsx` line 225 — already has `aria-label={`Go to slide ${index + 1}`}`. This is already fixed.

### Bug 8: OG image using relative path
- **File**: `index.html` lines 28, 36 — change `/og-image.png` to `https://rokdbot.com/og-image.png`

### Summary of files to edit
1. `src/components/landing/FAQSection.tsx` — fix Discord/Zalo hrefs
2. `src/components/landing/HeroSection.tsx` — fix stats to 5000+
3. `src/components/landing/TestimonialsSection.tsx` — fix stats to 5000+
4. `src/i18n/locales/vi.json` — fix copyright year, add NotFound keys, add service descriptions
5. `src/i18n/locales/en.json` — same
6. `src/i18n/locales/ko.json` — same
7. `src/i18n/locales/zh.json` — same
8. `src/pages/NotFound.tsx` — add i18n, Header, Footer
9. `src/components/landing/ServicesSection.tsx` — unique descriptionKey per service
10. `index.html` — absolute OG image URLs

