// Daily Discord digest of pending orders > 24h old.
// Triggered by Supabase cron schedule (or external scheduler like GitHub Actions).
// Helps admin recover orders when SePay webhook fails to fire.
//
// Auth: require Authorization header matching DIGEST_API_KEY env var.

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.89.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PendingOrder {
  id: string;
  payment_code: string | null;
  total_amount: number;
  created_at: string;
  customer_contact: string | null;
  customer_contact_method: string | null;
  customer_reported_paid_at: string | null;
  service_packages: { name: string } | null;
}

function ageHours(createdAt: string): number {
  return Math.round((Date.now() - new Date(createdAt).getTime()) / 3_600_000);
}

function formatAge(hours: number): string {
  if (hours < 24) return `${hours}h`;
  return `${Math.round(hours / 24)}d`;
}

async function sendDigest(orders: PendingOrder[]): Promise<boolean> {
  const webhookUrl = Deno.env.get("DISCORD_WEBHOOK_URL");
  if (!webhookUrl) {
    console.log("DISCORD_WEBHOOK_URL not set");
    return false;
  }

  // Split into 2 buckets: customer-reported vs no-report
  const reported = orders.filter((o) => o.customer_reported_paid_at);
  const noReport = orders.filter((o) => !o.customer_reported_paid_at);

  const totalAmount = orders.reduce((sum, o) => sum + Number(o.total_amount), 0);

  const fields: { name: string; value: string; inline: boolean }[] = [
    {
      name: "Summary",
      value: `${orders.length} pending orders · Total ${totalAmount.toLocaleString("vi-VN")}đ`,
      inline: false,
    },
  ];

  if (reported.length > 0) {
    const lines = reported
      .slice(0, 10) // Discord field limit
      .map((o) => {
        const code = o.payment_code ?? "?";
        const amount = Number(o.total_amount).toLocaleString("vi-VN");
        const age = formatAge(ageHours(o.created_at));
        const contact = o.customer_contact
          ? ` · ${o.customer_contact_method ?? "?"}: ${o.customer_contact}`
          : "";
        return `\`ROK ${code}\` · ${amount}đ · ${age}${contact}`;
      })
      .join("\n");
    fields.push({
      name: `🔴 Customer-reported (${reported.length}) — verify bank statement`,
      value: lines || "(none)",
      inline: false,
    });
  }

  if (noReport.length > 0) {
    const lines = noReport
      .slice(0, 10)
      .map((o) => {
        const code = o.payment_code ?? "?";
        const amount = Number(o.total_amount).toLocaleString("vi-VN");
        const age = formatAge(ageHours(o.created_at));
        return `\`ROK ${code}\` · ${amount}đ · ${age}`;
      })
      .join("\n");
    fields.push({
      name: `⚪ No customer report (${noReport.length}) — likely abandoned`,
      value: lines || "(none)",
      inline: false,
    });
  }

  const embed = {
    title: "📊 Daily pending orders digest",
    description: "Orders stuck in `pending` for > 24h. If SePay webhook works, these should all auto-resolve.",
    color: 0xa855f7,
    fields,
    footer: { text: "RokdBot · pending-orders-digest" },
    timestamp: new Date().toISOString(),
  };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: "RokdBot Payment Bot", embeds: [embed] }),
  });

  return res.ok;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Auth: require DIGEST_API_KEY in Authorization header (for cron caller)
    const apiKey = req.headers.get("Authorization")?.replace("Bearer ", "");
    const expectedKey = Deno.env.get("DIGEST_API_KEY");
    if (!expectedKey || apiKey !== expectedKey) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Fetch orders pending > 24h
    const cutoff = new Date(Date.now() - 24 * 3_600_000).toISOString();
    const { data: orders, error } = await supabaseAdmin
      .from("orders")
      .select(
        "id, payment_code, total_amount, created_at, customer_contact, customer_contact_method, customer_reported_paid_at, service_packages(name)"
      )
      .eq("status", "pending")
      .lt("created_at", cutoff)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to fetch orders:", error);
      return new Response(
        JSON.stringify({ error: "Failed to fetch orders" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const pendingOrders = (orders as PendingOrder[]) || [];

    if (pendingOrders.length === 0) {
      return new Response(
        JSON.stringify({ success: true, message: "No pending orders > 24h", count: 0 }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const sent = await sendDigest(pendingOrders);

    return new Response(
      JSON.stringify({
        success: true,
        count: pendingOrders.length,
        total_amount: pendingOrders.reduce((s, o) => s + Number(o.total_amount), 0),
        discord_sent: sent,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("pending-orders-digest error:", message);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
