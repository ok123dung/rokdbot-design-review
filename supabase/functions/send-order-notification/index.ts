import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.89.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OrderNotificationRequest {
  order_id: string;
  new_status: string;
  user_email?: string;
  user_name?: string;
  package_name?: string;
  game_account_id?: string;
  total_amount?: number;
}

const getStatusText = (status: string, lang: string = 'vi'): string => {
  const statusMap: Record<string, Record<string, string>> = {
    pending: { vi: 'Chờ thanh toán', en: 'Pending Payment' },
    paid: { vi: 'Đã thanh toán', en: 'Paid' },
    processing: { vi: 'Đang xử lý', en: 'Processing' },
    running: { vi: 'Đang chạy', en: 'Running' },
    completed: { vi: 'Hoàn thành', en: 'Completed' },
    cancelled: { vi: 'Đã hủy', en: 'Cancelled' },
  };
  return statusMap[status]?.[lang] || status;
};

const getStatusColor = (status: string): string => {
  const colorMap: Record<string, string> = {
    pending: '#f59e0b',
    paid: '#10b981',
    processing: '#3b82f6',
    running: '#8b5cf6',
    completed: '#22c55e',
    cancelled: '#ef4444',
  };
  return colorMap[status] || '#6b7280';
};

const getDiscordColor = (status: string): number => {
  const colorMap: Record<string, number> = {
    pending: 0xf59e0b,
    paid: 0x10b981,
    processing: 0x3b82f6,
    running: 0x8b5cf6,
    completed: 0x22c55e,
    cancelled: 0xef4444,
  };
  return colorMap[status] || 0x6b7280;
};

const getStatusEmoji = (status: string): string => {
  const emojiMap: Record<string, string> = {
    pending: '⏳',
    paid: '💰',
    processing: '⚙️',
    running: '🚀',
    completed: '✅',
    cancelled: '❌',
  };
  return emojiMap[status] || '📦';
};

const sendDiscordNotification = async (
  orderId: string,
  status: string,
  packageName?: string,
  gameAccountId?: string,
  totalAmount?: number
): Promise<void> => {
  const webhookUrl = Deno.env.get("DISCORD_WEBHOOK_URL");
  
  if (!webhookUrl) {
    console.log("Discord webhook URL not configured, skipping Discord notification");
    return;
  }

  try {
    const statusEmoji = getStatusEmoji(status);
    const statusText = getStatusText(status, 'vi');
    const discordColor = getDiscordColor(status);
    const siteUrl = Deno.env.get('SITE_URL') || 'https://rokdbot.lovable.app';

    const embed = {
      title: `${statusEmoji} Thông báo đơn hàng`,
      description: `Đơn hàng **#${orderId.slice(0, 8).toUpperCase()}** đã được cập nhật.`,
      color: discordColor,
      fields: [
        {
          name: "📦 Gói dịch vụ",
          value: packageName || "Không xác định",
          inline: true
        },
        {
          name: "🎮 Governor ID",
          value: gameAccountId || "Không xác định",
          inline: true
        },
        {
          name: "📊 Trạng thái",
          value: `${statusEmoji} ${statusText}`,
          inline: true
        },
        {
          name: "💰 Số tiền",
          value: totalAmount ? `${totalAmount.toLocaleString('vi-VN')}đ` : "Không xác định",
          inline: true
        }
      ],
      footer: {
        text: "🎮 RokdBot - Dịch vụ Bot Rise of Kingdoms",
        icon_url: `${siteUrl}/favicon.ico`
      },
      timestamp: new Date().toISOString(),
      url: `${siteUrl}/orders/${orderId}`
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: "RokdBot",
        avatar_url: `${siteUrl}/favicon.ico`,
        embeds: [embed]
      }),
    });

    if (!response.ok) {
      console.error("Failed to send Discord notification:", await response.text());
    } else {
      console.log("Discord notification sent successfully");
    }
  } catch (error) {
    console.error("Error sending Discord notification:", error);
  }
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify authentication - require valid JWT or service role key
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const token = authHeader.replace('Bearer ', '');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
    
    // Allow service role key (internal calls from other edge functions)
    const isServiceRole = token === serviceRoleKey;

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      serviceRoleKey
    );

    if (!isServiceRole) {
      // Verify user JWT and admin role
      const supabaseAuth = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_ANON_KEY') ?? ''
      );
      const { data: { user: authUser }, error: authError } = await supabaseAuth.auth.getUser(token);
      
      if (authError || !authUser) {
        return new Response(
          JSON.stringify({ error: 'Unauthorized' }),
          { status: 401, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }

      const { data: roleData } = await supabaseAdmin
        .from('user_roles')
        .select('role')
        .eq('user_id', authUser.id)
        .eq('role', 'admin')
        .single();

      if (!roleData) {
        return new Response(
          JSON.stringify({ error: 'Forbidden - admin access required' }),
          { status: 403, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    }

    const { order_id, new_status, user_name, package_name, game_account_id, total_amount }: OrderNotificationRequest = await req.json();

    console.log(`Processing order notification for order ${order_id}, status: ${new_status}`);

    // Get order with user_id and total_amount
    const { data: orderData, error: orderError } = await supabaseAdmin
      .from('orders')
      .select('user_id, total_amount, game_account_id')
      .eq('id', order_id)
      .single();

    if (orderError || !orderData) {
      console.error('Failed to get order:', orderError);
      return new Response(
        JSON.stringify({ error: 'Order not found' }),
        { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Get package name separately if not provided
    let resolvedPackageName = package_name;
    if (!resolvedPackageName) {
      const { data: pkgData } = await supabaseAdmin
        .from('orders')
        .select('service_packages(name)')
        .eq('id', order_id)
        .single();
      resolvedPackageName = (pkgData?.service_packages as any)?.name;
    }

    // Send Discord notification in background
    const discordPromise = sendDiscordNotification(
      order_id,
      new_status,
      resolvedPackageName,
      game_account_id || orderData.game_account_id,
      total_amount || orderData.total_amount
    );

    // Get user email from auth.users
    const { data: { user }, error: userError } = await supabaseAdmin.auth.admin.getUserById(orderData.user_id);

    if (userError || !user?.email) {
      console.error('Failed to get user email:', userError);
      // Still wait for Discord notification
      await discordPromise;
      return new Response(
        JSON.stringify({ error: 'User email not found' }),
        { status: 404, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const userEmail = user.email;
    console.log(`Sending email to ${userEmail}`);

    const statusTextVi = getStatusText(new_status, 'vi');
    const statusColor = getStatusColor(new_status);

    const siteUrl = Deno.env.get('SITE_URL') || 'https://rokdbot.lovable.app';

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; background-color: #0a0a0f;">
        <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <div style="text-align: center; margin-bottom: 40px;">
            <h1 style="color: #a855f7; font-size: 28px; margin: 0;">🎮 RokdBot</h1>
            <p style="color: #9ca3af; margin-top: 8px;">Dịch vụ Bot Rise of Kingdoms</p>
          </div>

          <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16162a 100%); border-radius: 16px; padding: 32px; border: 1px solid rgba(168, 85, 247, 0.2);">
            <h2 style="color: #ffffff; font-size: 20px; margin: 0 0 24px 0; text-align: center;">
              Cập nhật trạng thái đơn hàng
            </h2>

            <div style="text-align: center; margin-bottom: 32px;">
              <span style="display: inline-block; background-color: ${statusColor}; color: #ffffff; padding: 8px 24px; border-radius: 999px; font-weight: 600; font-size: 16px;">
                ${statusTextVi}
              </span>
            </div>

            <div style="background: rgba(0,0,0,0.3); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="color: #9ca3af; padding: 8px 0; font-size: 14px;">Mã đơn hàng:</td>
                  <td style="color: #ffffff; padding: 8px 0; text-align: right; font-family: monospace; font-size: 14px;">${order_id.slice(0, 8).toUpperCase()}</td>
                </tr>
                ${package_name ? `
                <tr>
                  <td style="color: #9ca3af; padding: 8px 0; font-size: 14px;">Gói dịch vụ:</td>
                  <td style="color: #ffffff; padding: 8px 0; text-align: right; font-size: 14px;">${package_name}</td>
                </tr>
                ` : ''}
                ${game_account_id ? `
                <tr>
                  <td style="color: #9ca3af; padding: 8px 0; font-size: 14px;">Governor ID:</td>
                  <td style="color: #ffffff; padding: 8px 0; text-align: right; font-size: 14px;">${game_account_id}</td>
                </tr>
                ` : ''}
              </table>
            </div>

            <div style="text-align: center;">
              <a href="${siteUrl}/orders/${order_id}" 
                 style="display: inline-block; background: linear-gradient(135deg, #a855f7 0%, #6366f1 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 14px;">
                Xem chi tiết đơn hàng
              </a>
            </div>
          </div>

          <div style="text-align: center; margin-top: 32px;">
            <p style="color: #6b7280; font-size: 12px; margin: 0;">
              Email này được gửi tự động từ RokdBot.<br>
              Nếu bạn có thắc mắc, vui lòng liên hệ hỗ trợ qua Zalo hoặc Discord.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailResponse = await resend.emails.send({
      from: "RokdBot <onboarding@resend.dev>",
      to: [userEmail],
      subject: `[RokdBot] Đơn hàng #${order_id.slice(0, 8).toUpperCase()} - ${statusTextVi}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    // Wait for Discord notification to complete
    await discordPromise;

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-order-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
