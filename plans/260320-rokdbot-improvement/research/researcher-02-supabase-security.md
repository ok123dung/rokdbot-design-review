# Researcher Report: Supabase RLS Policies & Edge Functions Security

**Date:** 2026-03-20 | **Status:** Complete

## 1. RLS Policies for Multi-Role Systems

### Core Syntax
RLS policies protect data at the database level using PostgreSQL security. Define policies with SELECT, INSERT, UPDATE, DELETE operations targeting specific roles.

### Multi-Role Example: Orders Table
```sql
-- User sees only own orders
CREATE POLICY orders_user_select ON orders
FOR SELECT USING (user_id = auth.uid());

-- Admin sees all orders
CREATE POLICY orders_admin_select ON orders
FOR SELECT USING ((SELECT role FROM user_roles WHERE user_id = auth.uid()) = 'admin');

-- Combined: Users see own, admins see all
CREATE POLICY orders_select ON orders
FOR SELECT USING (
  user_id = auth.uid()
  OR EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);
```

### Role Checking Best Practices
- Use security definer functions for complex role checks to avoid nested auth.uid() calls
- Always add indexes on user_id for performance: `CREATE INDEX idx_orders_user_id ON orders(user_id)`
- Test RLS from client SDK, not as postgres admin
- Avoid RLS policies relying solely on `auth.uid()` without explicit role checks; use explicit role lookups
- Never trust `auth.uid()` without role verification for sensitive operations

### Performance Optimization
```sql
-- Bad: Multiple subqueries in policy
CREATE POLICY slow_policy ON orders
FOR SELECT USING (
  (SELECT role FROM user_roles WHERE user_id = auth.uid()) = 'admin'
  OR user_id = auth.uid()
);

-- Good: Use security definer function
CREATE OR REPLACE FUNCTION is_admin() RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  );
$$ LANGUAGE SQL SECURITY DEFINER;

CREATE POLICY fast_policy ON orders
FOR SELECT USING (is_admin() OR user_id = auth.uid());
```

## 2. Edge Functions Architecture

### Project Structure
```
supabase/
├── functions/
│   ├── create-order/
│   │   ├── index.ts          # Entry point
│   │   ├── deno.json         # Dependencies
│   │   └── _shared/           # Shared utilities
│   └── process-payment/
│       └── index.ts
```

### Deno Runtime Pattern
```typescript
// supabase/functions/create-order/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL"),
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")
  );

  const { data, error } = await supabase
    .from("orders")
    .insert([{ user_id: req.headers.get("Authorization"), status: "pending" }]);

  return new Response(JSON.stringify({ data, error }), { status: 200 });
});
```

### Client-Side Invocation
```typescript
// Browser/client code
const supabase = createClient(ANON_KEY, PROJECT_URL);

const { data, error } = await supabase.functions.invoke('create-order', {
  body: JSON.stringify({ amount: 100 }),
  headers: { Authorization: `Bearer ${session.access_token}` }
});
```

### CORS Headers Pattern
```typescript
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Max-Age": "86400",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  return new Response(JSON.stringify({ success: true }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" }
  });
});
```

## 3. Secrets Management

### Setting Secrets (CLI)
```bash
# Set individual secret
supabase secrets set SERVICE_KEY=sk_live_abc123

# Set from .env file
supabase secrets set < .env.production
```

### Accessing in Edge Functions
```typescript
const serviceKey = Deno.env.get("SERVICE_KEY");
const dbUrl = Deno.env.get("DATABASE_URL");

if (!serviceKey) {
  throw new Error("SERVICE_KEY not configured");
}
```

**Critical:** Never log secrets; never commit .env files with production values.

## 4. pg_cron for Auto-Cancellation

### Cancel Expired Orders (Every 5 Minutes)
```sql
-- Create function
CREATE OR REPLACE FUNCTION cancel_expired_orders()
RETURNS void AS $$
BEGIN
  UPDATE orders
  SET status = 'cancelled'
  WHERE status = 'pending'
  AND created_at < NOW() - INTERVAL '5 minutes';
END;
$$ LANGUAGE plpgsql;

-- Schedule cron job (every 5 minutes)
SELECT cron.schedule(
  'cancel-expired-orders',
  '*/5 * * * *',
  $$SELECT cancel_expired_orders();$$
);
```

### Cron Format Reference
- `0 * * * *` — Every hour
- `0 2 * * *` — Daily at 2 AM
- `*/5 * * * *` — Every 5 minutes
- `30 3 * * 6` — Saturdays at 3:30 AM

## 5. Rate Limiting Strategies

### Approach A: Token Bucket in Edge Function (Using Upstash Redis)
```typescript
import { Redis } from "https://esm.sh/@upstash/redis@1.19.0";

const redis = new Redis({
  url: Deno.env.get("UPSTASH_REDIS_REST_URL"),
  token: Deno.env.get("UPSTASH_REDIS_REST_TOKEN"),
});

serve(async (req) => {
  const clientIp = req.headers.get("cf-connecting-ip") || "unknown";
  const key = `rate:${clientIp}`;

  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 60);

  if (count > 30) {
    return new Response("Rate limit exceeded", { status: 429 });
  }

  return new Response("OK", { status: 200 });
});
```

### Approach B: PostgreSQL Token Bucket (pg_cron + Table)
```sql
CREATE TABLE rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  tokens INT DEFAULT 30,
  last_refill TIMESTAMP DEFAULT NOW()
);

CREATE OR REPLACE FUNCTION refill_tokens()
RETURNS void AS $$
BEGIN
  UPDATE rate_limits
  SET tokens = 30,
      last_refill = NOW()
  WHERE NOW() - last_refill > INTERVAL '1 minute';
END;
$$ LANGUAGE plpgsql;

SELECT cron.schedule('refill-tokens', '* * * * *', $$SELECT refill_tokens();$$);
```

## Key Takeaways

| Feature | Best Practice |
|---------|---------------|
| **RLS Roles** | Use security definer functions; add indexes on user_id |
| **Edge Functions** | Use service_role key server-side only; client uses anon_key |
| **Secrets** | Set via CLI; access with `Deno.env.get()`; never log |
| **Auto-Cancellation** | Use pg_cron + PL/pgSQL function; run every 5 minutes |
| **Rate Limiting** | Upstash Redis preferred for serverless; fallback to pg_cron |

## Sources

- [Row Level Security | Supabase Docs](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [RLS Performance and Best Practices | Supabase Docs](https://supabase.com/docs/guides/troubleshooting/rls-performance-and-best-practices-Z5Jjwv)
- [Edge Functions | Supabase Docs](https://supabase.com/docs/guides/functions)
- [Environment Variables / Secrets | Supabase Docs](https://supabase.com/docs/guides/functions/secrets)
- [pg_cron: Schedule Recurring Jobs | Supabase Docs](https://supabase.com/docs/guides/database/extensions/pg_cron)
- [Rate Limiting Edge Functions | Supabase Docs](https://supabase.com/docs/guides/functions/examples/rate-limiting)
