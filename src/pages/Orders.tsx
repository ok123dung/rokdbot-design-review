import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Gamepad2, 
  Package, 
  ChevronLeft,
  Filter,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { SEO } from "@/components/SEO";
import { OrdersSkeleton } from "@/components/skeletons/OrdersSkeleton";

interface Order {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
  game_account_id: string;
  game_server: string;
  game_kingdom: string;
  service_packages: {
    name: string;
  } | null;
}

export default function Orders() {
  const { t } = useTranslation();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchOrders();
      
      // Subscribe to realtime updates
      const channel = supabase
        .channel('orders-changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'orders',
            filter: `user_id=eq.${user.id}`
          },
          () => {
            fetchOrders();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [user]);

  useEffect(() => {
    filterOrders();
  }, [orders, statusFilter, searchQuery]);

  const fetchOrders = async () => {
    const { data } = await supabase
      .from("orders")
      .select(`
        id,
        status,
        total_amount,
        created_at,
        game_account_id,
        game_server,
        game_kingdom,
        service_packages (name)
      `)
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false });

    setOrders(data || []);
    setLoadingData(false);
  };

  const filterOrders = () => {
    let filtered = [...orders];
    
    if (statusFilter !== "all") {
      filtered = filtered.filter(o => o.status === statusFilter);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(o => 
        o.game_account_id?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.service_packages?.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredOrders(filtered);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500/20 text-green-500";
      case "running": return "bg-blue-500/20 text-blue-500";
      case "processing": return "bg-yellow-500/20 text-yellow-500";
      case "paid": return "bg-purple-500/20 text-purple-500";
      case "cancelled": return "bg-red-500/20 text-red-500";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    return t(`dashboard.status.${status}`) || status;
  };

  if (loading || loadingData) {
    return <OrdersSkeleton />;
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title={t("orders.title")}
        description={t("orders.subtitle")}
        url="/orders"
        noIndex={true}
      />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-2">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-gradient">RokdBot</span>
            </a>
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              {t("common.dashboard")}
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold mb-2">{t("orders.title")}</h1>
            <p className="text-muted-foreground mb-8">{t("orders.subtitle")}</p>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder={t("orders.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder={t("orders.filterStatus")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("common.all")}</SelectItem>
                  <SelectItem value="pending">{t("dashboard.status.pending")}</SelectItem>
                  <SelectItem value="paid">{t("dashboard.status.paid")}</SelectItem>
                  <SelectItem value="processing">{t("dashboard.status.processing")}</SelectItem>
                  <SelectItem value="running">{t("dashboard.status.running")}</SelectItem>
                  <SelectItem value="completed">{t("dashboard.status.completed")}</SelectItem>
                  <SelectItem value="cancelled">{t("dashboard.status.cancelled")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
              {filteredOrders.length === 0 ? (
                <div className="glass rounded-2xl p-12 text-center border border-border/50">
                  <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
                  <p className="text-muted-foreground mb-4">
                    {orders.length === 0 
                      ? t("dashboard.noOrders") 
                      : t("orders.noOrdersFound")}
                  </p>
                  {orders.length === 0 && (
                    <Button onClick={() => navigate("/order")} className="btn-gaming text-primary-foreground">
                      {t("orders.orderNow")}
                    </Button>
                  )}
                </div>
              ) : (
                filteredOrders.map((order) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass rounded-xl p-4 md:p-6 border border-border/50 hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => navigate(`/orders/${order.id}`)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Package className="w-5 h-5 text-primary" />
                          <h3 className="font-bold">{order.service_packages?.name || t("admin.package")}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {getStatusText(order.status)}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span>ID: {order.game_account_id}</span>
                          <span>Server: {order.game_server}</span>
                          <span>Kingdom: {order.game_kingdom}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-gradient-gold">
                          {Number(order.total_amount).toLocaleString()}đ
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(order.created_at).toLocaleDateString("vi-VN")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}