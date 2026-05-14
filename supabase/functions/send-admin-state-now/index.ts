// One-shot bootstrap: send admin email via Resend with current pending state.
// NOT currently usable — RESEND_API_KEY env var not set on this project.
// Kept for future activation if/when Resend is configured.
//
// To activate:
//   1. Get key from https://resend.com/api-keys
//   2. Set RESEND_API_KEY in Supabase Edge Functions secrets
//   3. Call: curl -X POST <fn-url> -H "Authorization: Bearer <BOOTSTRAP_TOKEN>"

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.89.0";
import { Resend } from "https://esm.sh/resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const ADMIN_EMAIL = "ok123dung@gmail.com";
const BOOTSTRAP_TOKEN = "7e4f9c2a-rokdbot-state-snapshot-2026-05-14";

serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");
    if (token !== BOOTSTRAP_TOKEN) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (!resendKey) {
      return new Response(
        JSON.stringify({ error: "RESEND_API_KEY env var not set" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
    const resend = new Resend(resendKey);

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { data: orders } = await supabase
      .from("orders")
      .select(
        "id, payment_code, total_amount, created_at, customer_contact, customer_contact_method, customer_reported_paid_at, service_packages(name)"
      )
      .eq("status", "pending")
      .order("created_at", { ascending: false });

    const list = orders ?? [];
    const total = list.reduce((s, o) => s + Number(o.total_amount), 0);

    const rows = list
      .map((o) => {
        const pkg = (o.service_packages as { name: string } | null)?.name ?? "?";
        const contact = o.customer_contact
          ? `${o.customer_contact_method ?? "?"}: ${o.customer_contact}`
          : "-";
        const reported = o.customer_reported_paid_at ? "yes" : "-";
        return `<tr><td>ROK ${o.payment_code}</td><td>${Number(o.total_amount).toLocaleString("vi-VN")}d</td><td>${pkg}</td><td>${new Date(o.created_at).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })}</td><td>${contact}</td><td>${reported}</td></tr>`;
      })
      .join("");

    const html = `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:800px;margin:0 auto;padding:20px">
  <h1>RokdBot - Payment audit state</h1>
  <p><strong>${list.length} pending orders</strong> - Total <strong>${total.toLocaleString("vi-VN")}d</strong></p>
  <p>Action: check HD Bank statement -> /admin -> mark each paid or cancelled.</p>
  <table border="1" cellpadding="6" style="border-collapse:collapse"><thead><tr><th>Code</th><th>Amount</th><th>Package</th><th>Created (VN)</th><th>Contact</th><th>Reported?</th></tr></thead><tbody>${rows}</tbody></table>
</body></html>`;

    const result = await resend.emails.send({
      from: "RokdBot <onboarding@resend.dev>",
      to: [ADMIN_EMAIL],
      subject: `[RokdBot] Payment audit - ${list.length} pending, ${total.toLocaleString("vi-VN")}d`,
      html,
    });

    return new Response(
      JSON.stringify({
        success: true,
        sent_to: ADMIN_EMAIL,
        pending_count: list.length,
        total_amount: total,
        resend_result: result,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("send-admin-state-now error:", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
