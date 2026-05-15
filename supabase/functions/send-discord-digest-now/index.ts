// Daily/manual digest of pending orders posted to admin Discord channel.
// Auth: DIGEST_API_KEY env var OR fallback bootstrap token (rotated by
// redeploy). DISCORD_WEBHOOK_URL is read from env (already configured).
//
// Triggered by:
//   1. GitHub Actions cron daily 08:00 VN time (uses bootstrap token by
//      default; can override by setting DIGEST_API_KEY in repo secrets).
//   2. Manual curl with bootstrap token (admin one-shot).

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.89.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Bootstrap token allows manual invocation when DIGEST_API_KEY env var
// is not yet set. Rotate by redeploying with new value.
const BOOTSTRAP_TOKEN = "7e4f9c2a-rokdbot-digest-bootstrap-2026-05-14";

serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");
    const configuredKey = Deno.env.get("DIGEST_API_KEY");
    const isValidConfigured = configuredKey && token === configuredKey;
    const isValidBootstrap = token === BOOTSTRAP_TOKEN;
    if (!isValidConfigured && !isValidBootstrap) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const webhookUrl = Deno.env.get("DISCORD_WEBHOOK_URL");
    if (!webhookUrl) {
      return new Response(JSON.stringify({ error: "DISCORD_WEBHOOK_URL not set" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { data: orders, error } = await supabase
      .from("orders")
      .select(
        "id, payment_code, total_amount, created_at, customer_contact, customer_contact_method, customer_reported_paid_at, service_packages(name)"
      )
      .eq("status", "pending")
      .order("total_amount", { ascending: false });
    if (error) {
      return new Response(JSON.stringify({ error: "Failed to fetch orders" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const list = orders ?? [];
    if (list.length === 0) {
      return new Response(
        JSON.stringify({ success: true, count: 0, message: "No pending orders" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const total = list.reduce((s, o) => s + Number(o.total_amount), 0);
    const reported = list.filter((o) => o.customer_reported_paid_at);
    const noReport = list.filter((o) => !o.customer_reported_paid_at);

    function ageDays(iso: string): number {
      return Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
    }
    function ageStr(iso: string): string {
      const d = ageDays(iso);
      if (d === 0) return "today";
      if (d === 1) return "1d";
      return `${d}d`;
    }
    function line(o: typeof list[number]): string {
      const code = o.payment_code ?? "?";
      const amount = Number(o.total_amount).toLocaleString("vi-VN");
      const age = ageStr(o.created_at);
      const contact = o.customer_contact
        ? ` - ${o.customer_contact_method ?? "?"}: ${o.customer_contact}`
        : "";
      return `\`ROK ${code}\` - **${amount}d** - ${age}${contact}`;
    }

    const fields: { name: string; value: string; inline: boolean }[] = [
      {
        name: "Summary",
        value: `${list.length} pending orders - Total **${total.toLocaleString("vi-VN")}d**`,
        inline: false,
      },
    ];
    if (reported.length > 0) {
      fields.push({
        name: `[ACTION] Customer reported (${reported.length}) - verify bank statement`,
        value: reported.slice(0, 10).map(line).join("\n") || "(none)",
        inline: false,
      });
    }
    if (noReport.length > 0) {
      fields.push({
        name: `No customer report (${noReport.length}) - check sao ke HD Bank`,
        value: noReport.slice(0, 10).map(line).join("\n") || "(none)",
        inline: false,
      });
    }
    fields.push({
      name: "Action",
      value:
        "1. Login HD Bank Internet Banking -> sao ke 60d -> search 'ROK'\n2. Match -> [/admin](https://rokdbot.com/admin) -> mark paid\n3. No match -> mark cancelled",
      inline: false,
    });

    const embed = {
      title: `Daily pending orders digest`,
      description: `Orders stuck in **pending** status. If SePay webhook works, these would all auto-resolve.`,
      color: 0xa855f7,
      fields,
      footer: { text: "RokdBot - send-discord-digest-now (cron 08:00 VN)" },
      timestamp: new Date().toISOString(),
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "RokdBot Payment Bot", embeds: [embed] }),
    });

    return new Response(
      JSON.stringify({
        success: true,
        count: list.length,
        total_amount: total,
        customer_reported: reported.length,
        no_report: noReport.length,
        discord_status: res.status,
        discord_ok: res.ok,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("send-discord-digest-now error:", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
