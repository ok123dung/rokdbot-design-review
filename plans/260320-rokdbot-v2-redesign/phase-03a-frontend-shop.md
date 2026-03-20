---
title: "Phase 3a: Frontend — Shop Redesign"
status: pending
priority: HIGH
days: 6-9
depends_on: phase-02
---

# Phase 3a: Frontend — Shop Redesign (sumistore.me style)

## Overview

Rewrite the landing page as an anonymous one-page shop with dark aurora theme. Delete all customer auth pages. Add payment modal overlay and order lookup.

## Context Links

- [Plan Overview](./plan.md)
- [Brainstorm Report](../reports/brainstorm-rokdbot-v2-redesign.md)
- sumistore.me — visual reference

## sumistore.me Design Reference

### Theme
```css
:root {
  color-scheme: dark;
  --primary-color: #7ce7ff;
  --bg-color: #050913;
  --card-bg: rgba(10, 16, 32, 0.78);
  --text-color: #f8fbff;
  --text-muted: #9db0ca;
  --success-color: #34d399;
  --danger-color: #fb7185;
  --gold-color: #f8c36b;
}
```

### Key Visual Elements
- Dark background with aurora gradient blobs (animated, blurred)
- Cards with glassmorphism (backdrop-filter: blur)
- Font: Be Vietnam Pro (body), JetBrains Mono (prices/codes)
- Gold gradient for prices
- Cyan/blue primary color
- Smooth hover transitions on cards
- Top loading bar on navigation

### Layout Structure
```
[Navbar: Logo | Zalo button | Telegram button]
[Announcement marquee: "Join Zalo group for sale alerts"]
[Hero: Stats banner + best seller highlight]
[Category nav: horizontal scrollable chips]
[Product grid: cards with buy buttons]
[Pagination]
[Footer: branding + links]
[Payment modal: overlay on buy click]
[Order lookup modal]
```

## Files to DELETE

```
src/pages/Auth.tsx
src/pages/Dashboard.tsx
src/pages/Order.tsx
src/pages/Orders.tsx
src/pages/OrderDetail.tsx
src/pages/Profile.tsx
src/pages/ForgotPassword.tsx
src/pages/ResetPassword.tsx
src/contexts/AuthContext.tsx
src/components/skeletons/DashboardSkeleton.tsx
src/components/skeletons/OrdersSkeleton.tsx
src/components/skeletons/ProfileSkeleton.tsx
src/components/landing/HeroSection.tsx (rewrite)
src/components/landing/ServicesSection.tsx (rewrite)
src/components/landing/FeaturesSection.tsx (rewrite)
src/components/landing/TestimonialsSection.tsx (rewrite)
src/components/landing/FAQSection.tsx (rewrite)
src/components/landing/Header.tsx (rewrite)
src/components/landing/Footer.tsx (rewrite)
```

## Files to CREATE

```
src/pages/Index.tsx (rewrite — one-page shop)
src/pages/OrderLookup.tsx (or modal component)
src/components/shop/Navbar.tsx
src/components/shop/AnnouncementBar.tsx
src/components/shop/HeroBanner.tsx
src/components/shop/CategoryNav.tsx
src/components/shop/PackageGrid.tsx
src/components/shop/PackageCard.tsx
src/components/shop/PaymentModal.tsx
src/components/shop/OrderConfirmation.tsx
src/components/shop/OrderLookupModal.tsx
src/components/shop/ShopFooter.tsx
src/components/shop/CountdownTimer.tsx
src/styles/aurora-theme.css
```

## Files to MODIFY

```
src/App.tsx — remove auth routes, add order-lookup, remove AuthProvider
src/App.css / src/index.css — dark aurora theme
```

## Implementation Steps

### Step 1: Clean up — delete old pages + auth (Day 6)

1. Delete all files listed above
2. Remove routes from App.tsx
3. Remove AuthProvider wrapper
4. Remove AuthContext import
5. Keep: admin routes, legal pages, UI components (shadcn)

### Step 2: Aurora theme CSS (Day 6)

Create `src/styles/aurora-theme.css`:
- CSS custom properties matching sumistore.me
- Aurora gradient background with animated blobs
- Glass card styles
- Gold price gradient
- Font imports (Be Vietnam Pro, JetBrains Mono)

### Step 3: Navbar (Day 6)

```
[Logo: RokdBot] [spacer] [Discord btn] [Zalo btn] [Order Lookup btn]
```
- Sticky top, glassmorphism background
- Mobile: hamburger menu

### Step 4: Hero Banner (Day 7)

```
[Stats: X orders served | Y packages | Z in stock]
[Best seller highlight: package name + price + "Buy" CTA]
```
- Fetch stats from Supabase (count orders, count packages)
- Animated counter for total orders

### Step 5: Package Grid (Day 7-8)

- Fetch packages from `service_packages` where is_active=true
- Card layout: name, description, price (gold), duration, stock count, "Buy" button
- Category filter chips (if categories exist, else skip)
- Sort: featured, price asc/desc
- Responsive: 1 col mobile, 2 cols tablet, 3 cols desktop

### Step 6: Payment Modal (Day 8-9) — CRITICAL

On "Buy" click -> overlay modal:
```
+------------------------------------------+
|  [X close]                               |
|                                          |
|  Package: Bot Farm 30 Days               |
|  Amount: 150,000d                        |
|                                          |
|  +--------------------+                  |
|  |   [Dynamic QR]     |                  |
|  |   from VietQR      |                  |
|  +--------------------+                  |
|                                          |
|  Transfer content:                       |
|  ROK ABC123  [Copy]                      |
|                                          |
|  HD Bank: 0915966853                     |
|  NGUYEN HUU DUNG                         |
|                                          |
|  Time remaining: 4:32                    |
|  [spinner] Waiting for payment...        |
+------------------------------------------+
```

Flow:
1. Click Buy -> call create-order Edge Function
2. Show loading spinner while creating
3. Display QR + payment info
4. Start 5-min countdown
5. Subscribe to Supabase Realtime for order status
6. On payment confirmed -> show OrderConfirmation

### Step 7: Order Confirmation (Day 9)

After payment confirmed:
```
+------------------------------------------+
|  [checkmark animation]                   |
|                                          |
|  Payment Confirmed!                      |
|                                          |
|  Your order code:                        |
|  ABC123  [Copy]                          |
|                                          |
|  Contact us with this code:              |
|  [Discord button] [Zalo button]          |
|                                          |
|  We'll set up your bot within 24 hours   |
+------------------------------------------+
```

### Step 8: Order Lookup (Day 9)

Simple modal or page:
- Input: payment code
- Output: order status, package, amount, date
- No auth required

### Step 9: Footer (Day 9)

- Branding: RokdBot
- Links: Discord, Zalo, Telegram
- Legal: Terms, Privacy, Disclaimer
- Copyright

### Step 10: App.tsx routes update

```tsx
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/order-lookup" element={<OrderLookup />} />
  <Route path="/login" element={<AdminLogin />} />
  <Route path="/admin" element={<AdminDashboard />} />
  <Route path="/disclaimer" element={<Disclaimer />} />
  <Route path="/privacy" element={<PrivacyPolicy />} />
  <Route path="/terms" element={<TermsOfService />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## Todo List

- [ ] Delete old auth pages (8 files)
- [ ] Delete AuthContext + skeletons
- [ ] Delete old landing components (7 files)
- [ ] Create aurora-theme.css
- [ ] Create Navbar component (Discord + Zalo + Order Lookup)
- [ ] Create HeroBanner (stats + best seller)
- [ ] Create PackageGrid + PackageCard (fetch from DB)
- [ ] Create PaymentModal (QR + countdown + realtime)
- [ ] Create OrderConfirmation (code + Discord/Zalo CTA)
- [ ] Create OrderLookupModal
- [ ] Create CountdownTimer component
- [ ] Create ShopFooter
- [ ] Update App.tsx (remove auth, new routes)
- [ ] Update index.css with dark aurora theme
- [ ] Mobile responsive: 320px, 375px, 768px, 1024px
- [ ] Test: buy flow end-to-end (select -> pay -> confirm)
- [ ] Test: order lookup by code
- [ ] Test: countdown expiry UI
- [ ] Test: realtime payment notification

## Success Criteria

- One-page shop loads with packages from DB
- Buy click opens payment modal with dynamic QR
- Payment confirmation shows order code + Discord/Zalo links
- Order lookup works anonymously
- Dark aurora theme matches sumistore.me quality
- Mobile responsive across all breakpoints
- No customer auth anywhere
