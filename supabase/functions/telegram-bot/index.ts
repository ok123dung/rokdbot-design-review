import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.89.0";

const BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN") ?? "";
const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

interface TelegramUpdate {
  message?: {
    chat: { id: number };
    text?: string;
    from?: { first_name?: string };
  };
}

async function sendMessage(chatId: number, text: string) {
  await fetch(`${TELEGRAM_API}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

serve(async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("OK", { status: 200 });
  }

  try {
    const update: TelegramUpdate = await req.json();
    const message = update.message;
    if (!message?.text) return new Response("OK", { status: 200 });

    const chatId = message.chat.id;
    const text = message.text.trim();

    if (text === "/start") {
      await sendMessage(
        chatId,
        "Welcome to RokdBot!\n\n" +
          "Commands:\n" +
          "/order {CODE} - Look up order by payment code\n" +
          "/status {CODE} - Check order status\n\n" +
          "Example: /order ABC123"
      );
    } else if (text.startsWith("/order") || text.startsWith("/status")) {
      const code = text.split(/\s+/)[1]?.toUpperCase();
      if (!code) {
        await sendMessage(chatId, "Usage: /order ABC123");
        return new Response("OK", { status: 200 });
      }

      const supabase = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
      );

      const { data: order } = await supabase
        .from("orders")
        .select(
          "id, status, total_amount, created_at, payment_code, service_packages(name)"
        )
        .eq("payment_code", code)
        .maybeSingle();

      if (!order) {
        await sendMessage(chatId, `No order found for code: ${code}`);
      } else {
        const statusEmoji: Record<string, string> = {
          pending: "Pending",
          paid: "Paid",
          processing: "Processing",
          running: "Running",
          completed: "Completed",
          cancelled: "Cancelled",
        };
        const pkgName =
          (order.service_packages as Record<string, string>)?.name || "N/A";
        await sendMessage(
          chatId,
          `Order: #${order.id.slice(0, 8).toUpperCase()}\n` +
            `Status: ${statusEmoji[order.status] || order.status}\n` +
            `Package: ${pkgName}\n` +
            `Amount: ${Number(order.total_amount).toLocaleString()}d\n` +
            `Created: ${new Date(order.created_at).toLocaleString("vi-VN")}`
        );
      }
    } else {
      await sendMessage(chatId, "Unknown command. Try /start for help.");
    }

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Telegram bot error:", error);
    return new Response("OK", { status: 200 });
  }
});
