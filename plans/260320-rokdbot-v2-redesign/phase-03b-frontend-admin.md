---
title: "Phase 3b: Frontend — Admin Redesign"
status: pending
priority: HIGH
days: 10-12
depends_on: phase-03a
---

# Phase 3b: Frontend — Admin Redesign

## Overview

Redesign admin panel with dark theme matching the shop aesthetic. Sidebar navigation, order management, package CRUD, payment analytics.

## Context Links

- [Plan Overview](./plan.md)
- [Phase 3a: Shop Redesign](./phase-03a-frontend-shop.md)
- sumistore.me /login — admin reference (dark slate theme, sidebar nav)

## Design Reference (sumistore.me admin)

```css
:root {
  --bg-color: #0f172a;
  --primary-color: #38bdf8;
  --secondary-color: #1e293b;
  --text-color: #f1f5f9;
  --text-muted: #94a3b8;
  --card-bg: rgba(30, 41, 59, 0.7);
  --success-color: #22c55e;
  --danger-color: #ef4444;
}
```

### Layout
```
+----------+----------------------------------+
| Sidebar  |  Main Content                    |
|          |                                  |
| Logo     |  [Header: page title + actions]  |
| -------- |                                  |
| Orders   |  [Content area]                  |
| Packages |                                  |
| Analytics|                                  |
| Settings |                                  |
|          |                                  |
| -------- |                                  |
| Logout   |                                  |
+----------+----------------------------------+
```

## Files to CREATE

```
src/pages/AdminLogin.tsx (rewrite from current /login concept)
src/pages/AdminDashboard.tsx (rewrite)
src/components/admin/AdminLayout.tsx (sidebar + main content wrapper)
src/components/admin/AdminSidebar.tsx
src/components/admin/OrdersTable.tsx
src/components/admin/OrderDetailModal.tsx
src/components/admin/PackagesManagement.tsx (rewrite)
src/components/admin/PaymentChart.tsx (rewrite)
src/components/admin/StatsCards.tsx
```

## Files to DELETE (replaced by rewrites)

```
src/pages/AdminDashboard.tsx (current version)
src/components/admin/PackagesManagement.tsx (current version)
src/components/admin/PaymentChart.tsx (current version)
```

## Implementation Steps

### Step 1: AdminLogin page (Day 10)

Simple dark-themed login:
- Admin-only (Supabase Auth)
- After login, check user_roles for admin role
- Redirect to /admin on success
- No registration link

### Step 2: AdminLayout + Sidebar (Day 10)

- Fixed sidebar with nav links
- Collapsible on mobile (hamburger)
- Active state highlighting
- SPA-like navigation (client-side routing)

### Step 3: Stats Cards (Day 10)

- Total orders, revenue, pending orders, running orders
- Fetch from Supabase with count queries (not loading all data)
- Separate from paginated order list

### Step 4: Orders Table (Day 11)

- Server-side pagination (.range())
- Filters: status, search (payment_code, package name)
- Columns: Order ID, Package, Amount, Status, Created, Actions
- Click row -> OrderDetailModal
- Note: no customer name/phone (anonymous orders)

### Step 5: Order Detail Modal (Day 11)

- Order info: payment_code, package, amount, status, timestamps
- Status update buttons: pending -> paid -> processing -> running -> completed / cancelled
- Manual "Verify Payment" button for pending orders
- Send notification on status change

### Step 6: Packages Management (Day 11-12)

- Table: name, price, duration, stock, sold_count, active, actions
- Create/Edit dialog (name, slug, description, price, duration_days, features, stock, is_active)
- Toggle active/inactive
- Delete with confirmation

### Step 7: Payment Analytics Chart (Day 12)

- Revenue over time (daily/weekly)
- Orders by status (pie/bar chart)
- Keep using recharts (already in dependencies)

### Step 8: CSV Export (Day 12)

- Export filtered orders as CSV
- Client-side generation (current scale is fine)
- UTF-8 BOM for Vietnamese characters

### Step 9: Admin auth guard

```tsx
// Simple auth check for admin routes
function AdminRoute({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { navigate('/login'); return; }
      supabase.from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .eq('role', 'admin')
        .maybeSingle()
        .then(({ data }) => {
          if (!data) navigate('/login');
          else setIsAdmin(true);
          setLoading(false);
        });
    });
  }, []);

  if (loading) return <Spinner />;
  if (!isAdmin) return null;
  return children;
}
```

## Todo List

- [ ] Create AdminLogin page (dark theme)
- [ ] Create AdminLayout with sidebar
- [ ] Create AdminSidebar navigation
- [ ] Create StatsCards (count queries)
- [ ] Create OrdersTable with pagination
- [ ] Create OrderDetailModal with status update
- [ ] Create PackagesManagement (CRUD)
- [ ] Create PaymentChart (recharts)
- [ ] Add CSV export button + function
- [ ] Create AdminRoute auth guard
- [ ] Wire up App.tsx admin routes
- [ ] Mobile responsive sidebar (collapsible)
- [ ] Test: admin login flow
- [ ] Test: orders pagination + filters
- [ ] Test: status update + notification
- [ ] Test: package CRUD
- [ ] Test: CSV export with Vietnamese chars

## Success Criteria

- Admin login works (Supabase Auth + role check)
- Dark theme matches shop aesthetic
- Sidebar navigation with active states
- Orders paginated (not loading all at once)
- Package CRUD works with RLS enforcement
- CSV export downloads correctly
- Mobile responsive admin panel
