import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Gamepad2, 
  Package, 
  DollarSign,
  ChevronLeft,
  Filter,
  Search,
  Clock,
  Loader2,
  Eye
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Order {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
  game_account_id: string;
  game_server: string;
  game_kingdom: string;
  payment_proof_url: string | null;
  profiles: {
    full_name: string | null;
    phone: string | null;
  } | null;
  service_packages: {
    name: string;
  } | null;
}

interface Stats {
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
  runningOrders: number;
}

export default function AdminDashboard() {
  const { t } = useTranslation();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isAdmin, setIsAdmin] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [stats, setStats] = useState<Stats>({ totalOrders: 0, totalRevenue: 0, pendingOrders: 0, runningOrders: 0 });
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingData, setLoadingData] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      checkAdminRole();
    }
  }, [user]);

  useEffect(() => {
    filterOrders();
  }, [orders, statusFilter, searchQuery]);

  const checkAdminRole = async () => {
    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user?.id)
      .eq("role", "admin")
      .maybeSingle();

    if (data) {
      setIsAdmin(true);
      fetchOrders();
    } else {
      toast({
        title: t("admin.noAccess"),
        description: t("admin.noAccessDesc"),
        variant: "destructive"
      });
      navigate("/dashboard");
    }
  };

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
        payment_proof_url,
        user_id,
        service_packages (name)
      `)
      .order("created_at", { ascending: false });
    
    if (data) {
      // Fetch profiles separately
      const userIds = [...new Set(data.map(o => o.user_id))];
      const { data: profilesData } = await supabase
        .from("profiles")
        .select("user_id, full_name, phone")
        .in("user_id", userIds);
      
      const profilesMap = new Map(profilesData?.map(p => [p.user_id, p]) || []);
      
      const ordersWithProfiles = data.map(order => ({
        ...order,
        profiles: profilesMap.get(order.user_id) || null
      })) as unknown as Order[];

      setOrders(ordersWithProfiles);
      calculateStats(ordersWithProfiles);
    }
    setLoadingData(false);
  };

  const calculateStats = (ordersData: Order[]) => {
    setStats({
      totalOrders: ordersData.length,
      totalRevenue: ordersData
        .filter(o => o.status !== "pending" && o.status !== "cancelled")
        .reduce((sum, o) => sum + Number(o.total_amount), 0),
      pendingOrders: ordersData.filter(o => o.status === "pending").length,
      runningOrders: ordersData.filter(o => o.status === "running").length
    });
  };

  const filterOrders = () => {
    let filtered = [...orders];
    
    if (statusFilter !== "all") {
      filtered = filtered.filter(o => o.status === statusFilter);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(o => 
        o.game_account_id?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.profiles?.full_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.profiles?.phone?.includes(searchQuery)
      );
    }
    
    setFilteredOrders(filtered);
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    setUpdating(true);
    
    const updateData: Record<string, unknown> = { status: newStatus };
    
    if (newStatus === "paid") {
      updateData.paid_at = new Date().toISOString();
    } else if (newStatus === "running") {
      updateData.started_at = new Date().toISOString();
    } else if (newStatus === "completed") {
      updateData.completed_at = new Date().toISOString();
    }

    const { error } = await supabase
      .from("orders")
      .update(updateData)
      .eq("id", orderId);

    if (error) {
      toast({
        title: t("admin.updateError"),
        description: t("admin.updateErrorDesc"),
        variant: "destructive"
      });
    } else {
      toast({
        title: t("admin.updateSuccess"),
        description: `${t("admin.updateStatus")}: ${t(`dashboard.status.${newStatus}`)}`
      });
      fetchOrders();
      setSelectedOrder(null);
    }
    
    setUpdating(false);
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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-gradient">RokdBot</span>
              <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full ml-2">ADMIN</span>
            </div>
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              {t("common.dashboard")}
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold mb-2">{t("admin.title")}</h1>
            <p className="text-muted-foreground mb-8">{t("admin.subtitle")}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="glass rounded-xl p-4 border border-border/50">
                <Package className="w-8 h-8 text-primary mb-2" />
                <p className="text-2xl font-bold">{stats.totalOrders}</p>
                <p className="text-sm text-muted-foreground">{t("admin.totalOrders")}</p>
              </div>
              <div className="glass rounded-xl p-4 border border-border/50">
                <DollarSign className="w-8 h-8 text-green-500 mb-2" />
                <p className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()}đ</p>
                <p className="text-sm text-muted-foreground">{t("admin.revenue")}</p>
              </div>
              <div className="glass rounded-xl p-4 border border-border/50">
                <Clock className="w-8 h-8 text-yellow-500 mb-2" />
                <p className="text-2xl font-bold">{stats.pendingOrders}</p>
                <p className="text-sm text-muted-foreground">{t("admin.pendingOrders")}</p>
              </div>
              <div className="glass rounded-xl p-4 border border-border/50">
                <Loader2 className="w-8 h-8 text-blue-500 mb-2" />
                <p className="text-2xl font-bold">{stats.runningOrders}</p>
                <p className="text-sm text-muted-foreground">{t("admin.runningOrders")}</p>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder={t("admin.searchPlaceholder")}
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
                  <SelectItem value="all">{t("common.all")} ({orders.length})</SelectItem>
                  <SelectItem value="pending">{t("dashboard.status.pending")}</SelectItem>
                  <SelectItem value="paid">{t("dashboard.status.paid")}</SelectItem>
                  <SelectItem value="processing">{t("dashboard.status.processing")}</SelectItem>
                  <SelectItem value="running">{t("dashboard.status.running")}</SelectItem>
                  <SelectItem value="completed">{t("dashboard.status.completed")}</SelectItem>
                  <SelectItem value="cancelled">{t("dashboard.status.cancelled")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Orders Table */}
            <div className="glass rounded-2xl border border-border/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50 bg-muted/30">
                      <th className="text-left p-4 font-medium">{t("admin.customer")}</th>
                      <th className="text-left p-4 font-medium">{t("admin.package")}</th>
                      <th className="text-left p-4 font-medium">{t("admin.gameInfo")}</th>
                      <th className="text-left p-4 font-medium">{t("admin.amount")}</th>
                      <th className="text-left p-4 font-medium">{t("admin.status")}</th>
                      <th className="text-left p-4 font-medium">{t("admin.createdAt")}</th>
                      <th className="text-left p-4 font-medium">{t("admin.actions")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="text-center py-12 text-muted-foreground">
                          {t("admin.noOrders")}
                        </td>
                      </tr>
                    ) : (
                      filteredOrders.map((order) => (
                        <tr key={order.id} className="border-b border-border/30 hover:bg-muted/20">
                          <td className="p-4">
                            <p className="font-medium">{order.profiles?.full_name || "N/A"}</p>
                            <p className="text-sm text-muted-foreground">{order.profiles?.phone || "N/A"}</p>
                          </td>
                          <td className="p-4">{order.service_packages?.name || "N/A"}</td>
                          <td className="p-4">
                            <p className="text-sm">ID: {order.game_account_id}</p>
                            <p className="text-sm text-muted-foreground">
                              S{order.game_server} / K{order.game_kingdom}
                            </p>
                          </td>
                          <td className="p-4 font-bold">{Number(order.total_amount).toLocaleString()}đ</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {getStatusText(order.status)}
                            </span>
                          </td>
                          <td className="p-4 text-sm text-muted-foreground">
                            {new Date(order.created_at).toLocaleDateString("vi-VN")}
                          </td>
                          <td className="p-4">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => setSelectedOrder(order)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              {t("common.view")}
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Order Detail Modal */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{t("admin.orderDetail")}</DialogTitle>
          </DialogHeader>
          
          {selectedOrder && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">{t("admin.customer")}</p>
                  <p className="font-medium">{selectedOrder.profiles?.full_name || "N/A"}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t("admin.phone")}</p>
                  <p className="font-medium">{selectedOrder.profiles?.phone || "N/A"}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t("admin.package")}</p>
                  <p className="font-medium">{selectedOrder.service_packages?.name}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t("admin.amount")}</p>
                  <p className="font-medium">{Number(selectedOrder.total_amount).toLocaleString()}đ</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t("orderDetail.governorId")}</p>
                  <p className="font-medium">{selectedOrder.game_account_id}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">{t("admin.serverKingdom")}</p>
                  <p className="font-medium">S{selectedOrder.game_server} / K{selectedOrder.game_kingdom}</p>
                </div>
              </div>

              {selectedOrder.payment_proof_url && (
                <div>
                  <p className="text-muted-foreground text-sm mb-2">{t("admin.paymentProof")}</p>
                  <a 
                    href={selectedOrder.payment_proof_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm"
                  >
                    {t("admin.viewProof")} →
                  </a>
                </div>
              )}

              <div>
                <p className="text-muted-foreground text-sm mb-2">{t("admin.updateStatus")}</p>
                <div className="flex flex-wrap gap-2">
                  {["pending", "paid", "processing", "running", "completed", "cancelled"].map((status) => (
                    <Button
                      key={status}
                      size="sm"
                      variant={selectedOrder.status === status ? "default" : "outline"}
                      onClick={() => updateOrderStatus(selectedOrder.id, status)}
                      disabled={updating || selectedOrder.status === status}
                      className={selectedOrder.status === status ? "btn-gaming text-primary-foreground" : ""}
                    >
                      {getStatusText(status)}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedOrder(null)}>
              {t("common.close")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}