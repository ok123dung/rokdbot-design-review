import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Gamepad2, 
  Package, 
  ChevronLeft,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
  ExternalLink,
  CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface OrderDetailData {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
  paid_at: string | null;
  started_at: string | null;
  completed_at: string | null;
  game_account_id: string;
  game_server: string;
  game_kingdom: string;
  notes: string | null;
  payment_proof_url: string | null;
  service_packages: {
    name: string;
    description: string;
    duration_days: number;
  } | null;
}

export default function OrderDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderDetailData | null>(null);
  const [loadingData, setLoadingData] = useState(true);

  const statusSteps = [
    { key: "pending", label: t("dashboard.status.pending"), icon: Clock },
    { key: "paid", label: t("dashboard.status.paid"), icon: CreditCard },
    { key: "processing", label: t("dashboard.status.processing"), icon: Loader2 },
    { key: "running", label: t("dashboard.status.running"), icon: Package },
    { key: "completed", label: t("dashboard.status.completed"), icon: CheckCircle2 },
  ];

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user && id) {
      fetchOrder();
      
      // Subscribe to realtime updates
      const channel = supabase
        .channel(`order-${id}`)
        .on(
          'postgres_changes',
          {
            event: 'UPDATE',
            schema: 'public',
            table: 'orders',
            filter: `id=eq.${id}`
          },
          () => {
            fetchOrder();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [user, id]);

  const fetchOrder = async () => {
    const { data, error } = await supabase
      .from("orders")
      .select(`
        id,
        status,
        total_amount,
        created_at,
        paid_at,
        started_at,
        completed_at,
        game_account_id,
        game_server,
        game_kingdom,
        notes,
        payment_proof_url,
        service_packages (name, description, duration_days)
      `)
      .eq("id", id)
      .eq("user_id", user?.id)
      .maybeSingle();

    if (error || !data) {
      navigate("/orders");
      return;
    }

    setOrder(data);
    setLoadingData(false);
  };

  const getStatusIndex = (status: string) => {
    if (status === "cancelled") return -1;
    return statusSteps.findIndex(s => s.key === status);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-500";
      case "running": return "text-blue-500";
      case "processing": return "text-yellow-500";
      case "paid": return "text-purple-500";
      case "cancelled": return "text-red-500";
      default: return "text-muted-foreground";
    }
  };

  if (loading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!order) {
    return null;
  }

  const currentStatusIndex = getStatusIndex(order.status);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-gradient">RokdBot</span>
            </a>
            <Button variant="ghost" onClick={() => navigate("/orders")}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              {t("orderDetail.backToList")}
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Order Header */}
            <div className="glass rounded-2xl p-6 border border-border/50 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl font-bold mb-1">
                    {order.service_packages?.name}
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    {t("orderDetail.orderCode")}: {order.id.slice(0, 8).toUpperCase()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gradient-gold">
                    {Number(order.total_amount).toLocaleString()}đ
                  </p>
                  <p className={`text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status === "cancelled" ? t("orderDetail.cancelled") : statusSteps.find(s => s.key === order.status)?.label}
                  </p>
                </div>
              </div>

              {/* Status Timeline */}
              {order.status !== "cancelled" ? (
                <div className="relative">
                  <div className="flex justify-between">
                    {statusSteps.map((step, index) => {
                      const isActive = index <= currentStatusIndex;
                      const isCurrent = index === currentStatusIndex;
                      const Icon = step.icon;
                      
                      return (
                        <div key={step.key} className="flex flex-col items-center flex-1">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${
                            isActive 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-muted text-muted-foreground"
                          } ${isCurrent ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}>
                            <Icon className={`w-5 h-5 ${isCurrent && step.key === "processing" ? "animate-spin" : ""}`} />
                          </div>
                          <span className={`text-xs text-center ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                            {step.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Progress bar */}
                  <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted -z-10 mx-8">
                    <div 
                      className="h-full bg-primary transition-all duration-500"
                      style={{ width: `${(currentStatusIndex / (statusSteps.length - 1)) * 100}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center py-4">
                  <XCircle className="w-8 h-8 text-red-500 mr-2" />
                  <span className="text-red-500 font-medium">{t("orderDetail.cancelled")}</span>
                </div>
              )}
            </div>

            {/* Order Details */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Game Info */}
              <div className="glass rounded-xl p-6 border border-border/50">
                <h2 className="font-bold mb-4 flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-primary" />
                  {t("orderDetail.gameInfo")}
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("orderDetail.governorId")}</span>
                    <span className="font-medium">{order.game_account_id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Server</span>
                    <span className="font-medium">{order.game_server}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Kingdom</span>
                    <span className="font-medium">{order.game_kingdom}</span>
                  </div>
                  {order.notes && (
                    <div className="pt-3 border-t border-border/50">
                      <p className="text-muted-foreground text-sm">{t("orderDetail.notes")}:</p>
                      <p className="text-sm mt-1">{order.notes}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Timeline */}
              <div className="glass rounded-xl p-6 border border-border/50">
                <h2 className="font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  {t("orderDetail.history")}
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("orderDetail.createdAt")}</span>
                    <span className="font-medium">
                      {new Date(order.created_at).toLocaleString("vi-VN")}
                    </span>
                  </div>
                  {order.paid_at && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("orderDetail.paidAt")}</span>
                      <span className="font-medium">
                        {new Date(order.paid_at).toLocaleString("vi-VN")}
                      </span>
                    </div>
                  )}
                  {order.started_at && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("orderDetail.startedAt")}</span>
                      <span className="font-medium">
                        {new Date(order.started_at).toLocaleString("vi-VN")}
                      </span>
                    </div>
                  )}
                  {order.completed_at && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t("orderDetail.completedAt")}</span>
                      <span className="font-medium">
                        {new Date(order.completed_at).toLocaleString("vi-VN")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Payment Proof */}
            {order.payment_proof_url && (
              <div className="glass rounded-xl p-6 border border-border/50 mt-6">
                <h2 className="font-bold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  {t("orderDetail.paymentProof")}
                </h2>
                <a 
                  href={order.payment_proof_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  {t("orderDetail.viewProof")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}