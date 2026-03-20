import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.89.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SepayWebhookPayload {
  id: number;
  gateway: string;
  transactionDate: string;
  accountNumber: string;
  subAccount: string | null;
  code: string | null;
  content: string;
  transferType: string;
  description: string;
  transferAmount: number;
  referenceCode: string;
  accumulated: number;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Validate API key
    const apiKey = req.headers.get("Authorization")?.replace("Apikey ", "");
    const expectedApiKey = Deno.env.get("SEPAY_API_KEY");
    
    if (!apiKey || apiKey !== expectedApiKey) {
      console.error("Invalid or missing API key");
      return new Response(
        JSON.stringify({ success: false, error: "Unauthorized" }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const payload: SepayWebhookPayload = await req.json();
    console.log("Received SePay webhook:", JSON.stringify(payload, null, 2));

    // Only process incoming transfers (money coming in)
    if (payload.transferType !== "in") {
      console.log("Skipping outgoing transfer");
      return new Response(
        JSON.stringify({ success: true, message: "Skipped outgoing transfer" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Extract payment code from content (format: "ROK XXXXXX" or contains "ROK XXXXXX")
    const content = payload.content.toUpperCase();
    const match = content.match(/ROK\s*([A-Z0-9]{6})/);
    
    if (!match) {
      console.log("No payment code found in content:", payload.content);
      return new Response(
        JSON.stringify({ success: true, message: "No payment code found" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const paymentCode = match[1];
    console.log("Extracted payment code:", paymentCode);

    // Create Supabase client with service role
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Find order by payment_code
    const { data: order, error: orderError } = await supabaseAdmin
      .from("orders")
      .select("id, total_amount, status, user_id, package_id")
      .eq("payment_code", paymentCode)
      .maybeSingle();

    if (orderError) {
      console.error("Error finding order:", orderError);
      return new Response(
        JSON.stringify({ success: false, error: "Database error" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!order) {
      console.log("No order found for payment code:", paymentCode);
      return new Response(
        JSON.stringify({ success: true, message: "Order not found" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Check if already paid
    if (order.status !== "pending") {
      console.log("Order already processed, status:", order.status);
      return new Response(
        JSON.stringify({ success: true, message: "Order already processed" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Verify amount matches
    const receivedAmount = payload.transferAmount;
    const expectedAmount = Number(order.total_amount);
    
    if (receivedAmount < expectedAmount) {
      console.log(`Amount mismatch: received ${receivedAmount}, expected ${expectedAmount}`);
      return new Response(
        JSON.stringify({ success: true, message: "Insufficient amount" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log(`Amount verified: received ${receivedAmount}, expected ${expectedAmount}`);

    // Update order status to paid
    const { error: updateOrderError } = await supabaseAdmin
      .from("orders")
      .update({
        status: "paid",
        paid_at: new Date().toISOString()
      })
      .eq("id", order.id);

    if (updateOrderError) {
      console.error("Error updating order:", updateOrderError);
      return new Response(
        JSON.stringify({ success: false, error: "Failed to update order" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Update payment record
    const { error: updatePaymentError } = await supabaseAdmin
      .from("payments")
      .update({
        status: "verified",
        transaction_id: String(payload.id),
        verified_at: new Date().toISOString()
      })
      .eq("order_id", order.id);

    if (updatePaymentError) {
      console.error("Error updating payment:", updatePaymentError);
      // Don't fail the request, order is already updated
    }

    console.log(`Order ${order.id} marked as paid successfully`);

    // Trigger email notification
    try {
      const { data: pkgData } = await supabaseAdmin
        .from("service_packages")
        .select("name")
        .eq("id", order.package_id)
        .single();

      await supabaseAdmin.functions.invoke("send-order-notification", {
        body: {
          order_id: order.id,
          new_status: "paid",
          package_name: pkgData?.name
        }
      });
      console.log("Email notification sent");
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // Don't fail the webhook for email errors
    }

    // Discord notification is handled by send-order-notification (email + Discord webhook)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Order confirmed",
        order_id: order.id,
        payment_code: paymentCode,
        amount: receivedAmount
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error processing SePay webhook:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
