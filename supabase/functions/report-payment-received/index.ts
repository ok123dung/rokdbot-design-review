// Customer self-report: "Đã chuyển khoản" button on PaymentModal.
// Sets customer_reported_paid_at (NOT verified by bank) and pings Discord
// admin channel so admin can manually verify against HD Bank statement.
//
// This is the fallback path when SePay webhook fails to fire automatically.

import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.89.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ReportPaymentRequest {
  order_id: string;
  /** Optional note from customer (e.g., bank reference code from their app) */
  note?: string;
}

// Rate limit: max 3 reports per IP per minute (prevent spam)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const MAX_REPORTS_PER_MINUTE = 3;

function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= MAX_REPORTS_PER_MINUTE) return false;
  entry.count++;
  return true;
}

async function pingDiscord(
  orderId: string,
  paymentCode: string,
  amount: number,
  packageName: string,
  contact: string | null,
  contactMethod: string | null,
  note: string | null
): Promise<void> {
  const webhookUrl = Deno.env.get("DISCORD_WEBHOOK_URL");
  if (!webhookUrl) {
    console.log("DISCORD_WEBHOOK_URL not set, skipping Discord alert");
    return;
  }

  const fields = [
    { name: "Payment code", value: `ROK ${paymentCode}`, inline: true },
    { name: "Amount", value: `${amount.toLocaleString("vi-VN")}đ`, inline: true },
    { name: "Package", value: packageName, inline: true },
  ];
  if (contact) {
    fields.push({
      name: "Customer contact",
      value: `${contactMethod ?? "?"}: ${contact}`,
      inline: false,
    });
  }
  if (note) {
    fields.push({ name: "Customer note", value: note, inline: false });
  }

  const embed = {
    title: "🔔 Customer reported payment (manual verify required)",
    description: `Order **${orderId.slice(0, 8).toUpperCase()}** — verify against HD Bank 0915966853 statement, then mark paid in AdminDashboard.`,
    color: 0xf59e0b, // amber
    fields,
    footer: { text: "RokdBot · report-payment-received" },
    timestamp: new Date().toISOString(),
  };

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "RokdBot Payment Bot",
        embeds: [embed],
      }),
    });
  } catch (err) {
    console.error("Discord webhook failed:", err);
  }
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const ip = getClientIp(req);
    if (!checkRateLimit(ip)) {
      return new Response(
        JSON.stringify({ error: "Too many reports. Try again in 1 minute." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const body: ReportPaymentRequest = await req.json();
    if (!body.order_id) {
      return new Response(
        JSON.stringify({ error: "Missing order_id" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const note = body.note?.trim().slice(0, 500) || null;

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Lookup order + package
    const { data: order, error: orderError } = await supabaseAdmin
      .from("orders")
      .select(
        "id, status, payment_code, total_amount, customer_contact, customer_contact_method, package_id, customer_reported_paid_at"
      )
      .eq("id", body.order_id)
      .maybeSingle();

    if (orderError || !order) {
      return new Response(
        JSON.stringify({ error: "Order not found" }),
        { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (order.status !== "pending") {
      // Already processed — no need to re-alert
      return new Response(
        JSON.stringify({
          success: true,
          message: "Order already processed",
          status: order.status,
        }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Update customer_reported_paid_at (don't change status — admin must verify)
    const { error: updateError } = await supabaseAdmin
      .from("orders")
      .update({
        customer_reported_paid_at: new Date().toISOString(),
        ...(note ? { notes: note } : {}),
      })
      .eq("id", order.id);

    if (updateError) {
      console.error("Failed to update order:", updateError);
      return new Response(
        JSON.stringify({ error: "Failed to record report" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Fetch package name for Discord
    const { data: pkg } = await supabaseAdmin
      .from("service_packages")
      .select("name")
      .eq("id", order.package_id)
      .single();

    // Fire-and-forget Discord ping (don't block response)
    pingDiscord(
      order.id,
      order.payment_code ?? "?",
      Number(order.total_amount),
      pkg?.name ?? "Unknown",
      order.customer_contact,
      order.customer_contact_method,
      note
    );

    return new Response(
      JSON.stringify({
        success: true,
        message: "Report received. Admin will verify within 30 minutes during business hours.",
        order_id: order.id,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("report-payment-received error:", message);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
