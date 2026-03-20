# Phase 3: UI/UX Improvements

## Context Links

- [Plan Overview](./plan.md)
- [Phase 2: Auto Payment](./phase-02-auto-payment-sepay.md) (dependency)
- [Brainstorm Report](../reports/brainstorm-rokdbot-improvement.md)

## Overview

- **Days:** 7-10
- **Priority:** MEDIUM -- polish after core payment flow works
- **Status:** pending
- **Description:** Optimize order flow UX, add proper caching/pagination, improve landing page with live data, add error boundaries, mobile responsive audit

## Key Insights

- Order flow has 4 steps currently; Phase 2 reduces to 2 steps -- this phase refines the 2-step UI
- `QueryClient` in App.tsx (line 23) has zero configuration -- no staleTime, no cacheTime, every navigation re-fetches
- Dashboard.tsx fetches orders with `.limit(5)` but no pagination -- users with many orders can't browse history
- ServicesSection.tsx (lines 6-51) hardcodes 4 service packages -- won't reflect DB changes
- No React Error Boundary exists anywhere in the app
- Admin dashboard fetches ALL orders with no pagination (AdminDashboard.tsx line 156-171)

## Requirements

### Functional
- 2-step order flow: (1) select package + game info, (2) QR payment + confirmation
- Landing page services section fetches from DB
- Dashboard shows paginated order history
- Admin dashboard has server-side pagination
- Error boundaries catch and display runtime errors gracefully

### Non-Functional
- QueryClient staleTime 30s, cacheTime 5min reduces redundant API calls
- Page load performance maintained (no unnecessary re-renders)
- Mobile responsive across all order flow steps

## Architecture

### QueryClient Configuration

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,     // 30 seconds
      gcTime: 5 * 60 * 1000,    // 5 minutes (renamed from cacheTime in v5)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
```

### Pagination Pattern (Supabase .range())

```typescript
// Dashboard: paginated orders
const PAGE_SIZE = 10;
const from = page * PAGE_SIZE;
const to = from + PAGE_SIZE - 1;

const { data, count } = await supabase
  .from("orders")
  .select("*", { count: "exact" })
  .eq("user_id", user.id)
  .order("created_at", { ascending: false })
  .range(from, to);
```

## Related Code Files

### Modify
- `src/App.tsx` -- QueryClient config, add ErrorBoundary wrapper
- `src/pages/Order.tsx` -- refine 2-step flow UI (continued from Phase 2)
- `src/pages/Dashboard.tsx` -- add pagination to orders list
- `src/pages/Orders.tsx` -- add pagination
- `src/pages/AdminDashboard.tsx` -- add server-side pagination
- `src/components/landing/ServicesSection.tsx` -- fetch packages from DB

### Create
- `src/components/ErrorBoundary.tsx` -- React error boundary component

## Implementation Steps

### Step 1: Configure QueryClient (Day 7, ~15 min)

In `src/App.tsx`, replace line 23:

```typescript
// OLD:
const queryClient = new QueryClient();

// NEW:
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

### Step 2: Create ErrorBoundary component (Day 7, ~30 min)

Create `src/components/ErrorBoundary.tsx`:

```typescript
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-muted-foreground mb-6">
              {this.state.error?.message || "An unexpected error occurred."}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
```

Wrap in `src/App.tsx`:

```typescript
const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      {/* ... existing tree ... */}
    </QueryClientProvider>
  </ErrorBoundary>
);
```

### Step 3: Refine 2-step Order.tsx UI (Day 7-8, ~3 hr)

The 4-step flow was already collapsed to 2 steps in Phase 2. This step polishes the UI:

**Step 1 (combined package selection + game info):**
- Left column: package cards grid (scrollable if many packages)
- Right column: game info form (appears after package is selected)
- "Continue to Payment" button (validates both sections)

**Step 2 (QR payment + confirmation):**
- Full-width centered layout
- Large dynamic QR code (w-64 h-64 or larger)
- Amount displayed prominently below QR
- Transfer content "ROK {CODE}" with copy button
- Bank info (HD Bank, account, holder)
- Countdown timer with pulse animation when < 60s
- Loading spinner with "Waiting for payment..." text
- On confirmation: green checkmark animation, auto-redirect after 2s

Key CSS additions:
```css
/* Pulse animation for countdown */
@keyframes pulse-warning {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-pulse-warning {
  animation: pulse-warning 1s ease-in-out infinite;
}
```

### Step 4: Dashboard pagination (Day 8, ~1.5 hr)

In `src/pages/Dashboard.tsx`:

1. Add state: `const [page, setPage] = useState(0);` and `const [totalOrders, setTotalOrders] = useState(0);`
2. Replace `.limit(5)` with `.range()` + `{ count: "exact" }`:

```typescript
const PAGE_SIZE = 10;

const { data: ordersData, count } = await supabase
  .from("orders")
  .select(`id, status, total_amount, created_at, service_packages (name)`, { count: "exact" })
  .eq("user_id", user?.id)
  .order("created_at", { ascending: false })
  .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);

setOrders(ordersData || []);
setTotalOrders(count || 0);
```

3. Add pagination controls below order list:
```typescript
const totalPages = Math.ceil(totalOrders / PAGE_SIZE);

<div className="flex justify-between items-center mt-4">
  <Button
    variant="outline" size="sm"
    onClick={() => setPage(p => Math.max(0, p - 1))}
    disabled={page === 0}
  >
    Previous
  </Button>
  <span className="text-sm text-muted-foreground">
    Page {page + 1} of {totalPages}
  </span>
  <Button
    variant="outline" size="sm"
    onClick={() => setPage(p => p + 1)}
    disabled={page >= totalPages - 1}
  >
    Next
  </Button>
</div>
```

4. Re-fetch when page changes:
```typescript
useEffect(() => {
  if (user) fetchData();
}, [user, page]);
```

### Step 5: Admin dashboard pagination (Day 9, ~1.5 hr)

In `src/pages/AdminDashboard.tsx`:

1. Add state for pagination: `page`, `totalOrders`, `PAGE_SIZE = 20`
2. Replace `fetchOrders` to use `.range()` + count
3. Add pagination controls below orders table
4. Filter/search should reset page to 0
5. Stats calculation should use separate count queries (not rely on loaded page data)

### Step 6: ServicesSection.tsx -- fetch from DB (Day 9, ~1.5 hr)

Replace hardcoded `services` array with DB fetch in `src/components/landing/ServicesSection.tsx`:

```typescript
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ServicePackage {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  duration_days: number;
  features: string[];
  is_active: boolean;
}

export function ServicesSection() {
  const { t } = useTranslation();
  const [packages, setPackages] = useState<ServicePackage[]>([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const { data } = await supabase
        .from("service_packages")
        .select("*")
        .eq("is_active", true)
        .order("price", { ascending: true });

      if (data) {
        setPackages(data.map(pkg => ({
          ...pkg,
          features: typeof pkg.features === "string" ? JSON.parse(pkg.features) : (pkg.features || []),
        })));
      }
    };
    fetchPackages();
  }, []);

  // Render packages dynamically instead of hardcoded array
  // Keep icon assignment logic (map by index or slug)
}
```

Icon mapping strategy: assign icons based on package index or slug pattern:
```typescript
const icons = [Star, Sparkles, Crown, Sword];
const accentColors = ["gaming-cyan", "gaming-orange", "gaming-purple", "gaming-pink"];
```

### Step 7: Mobile responsive audit (Day 10, ~2 hr)

Check and fix responsive issues across:

1. **Order flow Step 1**: Package grid -- ensure single column on mobile, 2 cols on tablet
2. **Order flow Step 2**: QR code should be 80% viewport width on mobile, max 256px
3. **Dashboard**: Stats grid -- 2 cols on mobile (already correct)
4. **Admin dashboard**: Orders table -- horizontal scroll on mobile (already has `overflow-x-auto`)
5. **Landing ServicesSection**: Package cards -- single column on mobile (already `grid-cols-1 sm:grid-cols-2`)
6. **Navigation**: Ensure all header buttons are accessible on small screens

Test breakpoints: 320px, 375px, 768px, 1024px, 1440px

## Todo List

- [ ] Configure QueryClient with staleTime/gcTime in App.tsx
- [ ] Create ErrorBoundary component
- [ ] Wrap App with ErrorBoundary
- [ ] Refine 2-step Order.tsx layout and animations
- [ ] Add countdown pulse animation CSS
- [ ] Dashboard: implement pagination with .range()
- [ ] Dashboard: add pagination controls UI
- [ ] Dashboard: re-fetch on page change
- [ ] Admin dashboard: implement server-side pagination
- [ ] Admin dashboard: separate stats queries from paginated data
- [ ] ServicesSection: replace hardcoded array with DB fetch
- [ ] ServicesSection: dynamic icon/color mapping
- [ ] Mobile responsive audit (5 breakpoints)
- [ ] Fix any responsive issues found

## Success Criteria

- Order flow is 2 steps, not 4
- QR payment screen is clean and focused
- Countdown timer visible and animates when < 60s
- Dashboard shows paginated orders with page controls
- Admin dashboard paginates (no fetching all orders at once)
- Landing page services reflect DB packages
- ErrorBoundary catches runtime errors gracefully
- No UI breakage on mobile (320px-768px)

## Risk Assessment

| Risk | Severity | Mitigation |
|------|----------|------------|
| Pagination changes break order display | LOW | Test with 0, 1, and 50+ orders |
| DB-fetched services section flickers on load | LOW | Add skeleton loading state |
| ErrorBoundary hides useful errors in dev | LOW | Only show generic message in production |
| QueryClient gcTime too aggressive | LOW | 5 min is conservative; adjust if stale data reported |

## Security Considerations

- Pagination uses `.range()` which is subject to RLS -- no data leakage
- ServicesSection only fetches `is_active = true` packages (RLS enforces this too)
- ErrorBoundary must not expose stack traces in production

## Next Steps

- After UI polish, proceed to [Phase 4: New Features](./phase-04-new-features.md)
- Monitor user order completion rate to measure UX improvement
- Gather user feedback on 2-step flow
