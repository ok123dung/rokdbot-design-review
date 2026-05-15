// Lightweight client-side funnel tracker. Frontend fires modal_opened
// + contact_submitted; rest of the funnel (order created, customer
// reported paid, admin marked paid) is derived from the orders table.
//
// verify_jwt=false to match other public-facing fns (create-order,
// report-payment-received). Auth is by anon apikey + session_id rate
// limit inside the function.

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.89.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const VALID_EVENTS = new Set(["modal_opened", "contact_submitted"]);
const MAX_EVENTS_PER_SESSION_PER_HOUR = 20;
const sessionRateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(sessionId: string): boolean {
  const now = Date.now();
  const entry = sessionRateLimit.get(sessionId);
  if (!entry || now > entry.resetAt) {
    sessionRateLimit.set(sessionId, { count: 1, resetAt: now + 3600_000 });
    return true;
  }
  if (entry.count >= MAX_EVENTS_PER_SESSION_PER_HOUR) return false;
  entry.count++;
  return true;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const body = await req.json();
    const event_type = body?.event_type;
    const session_id = body?.session_id;
    const package_id = body?.package_id ?? null;
    const order_id = body?.order_id ?? null;

    if (!VALID_EVENTS.has(event_type)) {
      return new Response(JSON.stringify({ error: "Invalid event_type" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    if (typeof session_id !== "string" || session_id.length < 8 || session_id.length > 64) {
      return new Response(JSON.stringify({ error: "Invalid session_id" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
    if (!checkRateLimit(session_id)) {
      return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
        status: 429,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { error } = await supabase.from("funnel_events").insert({
      event_type,
      session_id,
      package_id,
      order_id,
    });

    if (error) {
      return new Response(JSON.stringify({ error: "Insert failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Bad request" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
