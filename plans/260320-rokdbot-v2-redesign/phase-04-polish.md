---
title: "Phase 4: Polish + Features"
status: pending
priority: LOW
days: 13-14
depends_on: phase-03b
---

# Phase 4: Polish + Features

## Overview

Final polish: discount codes, flash sale badges, SEO, error boundaries, QueryClient config, performance audit.

## Implementation Steps

### Step 1: QueryClient Configuration

```tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
```

### Step 2: Error Boundary

Wrap App with ErrorBoundary component. Show user-friendly error page with reload button.

### Step 3: Discount Codes (Optional)

- New `discount_codes` table
- Validation in create-order Edge Function
- Discount code input in payment modal
- Admin management tab

### Step 4: Flash Sale Badges

- `sale_price` column on service_packages (optional)
- Badge on PackageCard: "-20%" with strikethrough original price
- Timer if sale has end date

### Step 5: SEO

- Meta tags on Index page
- Open Graph image
- Structured data (JSON-LD for Product)
- robots.txt + sitemap.xml updates

### Step 6: Performance

- Lazy load admin pages (React.lazy + Suspense)
- Image optimization (QR images already external)
- Lighthouse audit target: 90+ performance

## Todo List

- [ ] Configure QueryClient (staleTime, gcTime)
- [ ] Create ErrorBoundary component
- [ ] Wrap App with ErrorBoundary
- [ ] (Optional) Discount codes table + migration
- [ ] (Optional) Discount validation in create-order
- [ ] (Optional) Discount input in PaymentModal
- [ ] (Optional) Admin discount management
- [ ] Flash sale badges on PackageCard
- [ ] SEO meta tags + Open Graph
- [ ] Lazy load admin routes
- [ ] Lighthouse performance audit
- [ ] Final mobile responsive check

## Success Criteria

- Error boundary catches runtime errors gracefully
- QueryClient reduces redundant API calls
- Lighthouse performance score 90+
- All pages mobile responsive
- (If discount codes): codes work end-to-end
