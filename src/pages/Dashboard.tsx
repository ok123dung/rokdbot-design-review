import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Gamepad2, 
  Package, 
  Clock, 
  CheckCircle2, 
  LogOut, 
  ShoppingCart,
  BarChart3,
  Settings,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Order {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
  service_packages: {
    name: string;
  } | null;
}

interface Profile {
  full_name: string | null;
  username: string | null;
}

export default function Dashboard() {
  const { t } = useTranslation();
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [orders, setOrders] = useState<Order[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingData, setLoadingData] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    try {
      // Fetch profile
      const { data: profileData } = await supabase
        .from("profiles")
        .select("full_name, username")
        .eq("user_id", user?.id)
        .maybeSingle();
      
      setProfile(profileData);

      // Check if user is admin
      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user?.id)
        .eq("role", "admin")
        .maybeSingle();
      
      setIsAdmin(!!roleData);

      // Fetch orders
      const { data: ordersData } = await supabase
        .from("orders")
        .select(`
          id,
          status,
          total_amount,
          created_at,
          service_packages (name)
        `)
        .eq("user_id", user?.id)
        .order("created_at", { ascending: false })
        .limit(5);

      setOrders(ordersData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoadingData(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: t("dashboard.signedOut"),
      description: t("dashboard.signedOutDesc")
    });
    navigate("/");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-500";
      case "running": return "text-blue-500";
      case "processing": return "text-yellow-500";
      case "paid": return "text-purple-500";
      default: return "text-muted-foreground";
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
            
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground hidden md:block">
                {profile?.full_name || user?.email}
              </span>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleSignOut}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Welcome */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {t("dashboard.welcomeBack")}, <span className="text-gradient">{profile?.full_name || t("dashboard.welcome")}</span>!
            </h1>
            <p className="text-muted-foreground">
              {t("dashboard.manageOrders")}
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="glass rounded-xl p-4 border border-border/50">
              <Package className="w-8 h-8 text-primary mb-2" />
              <p className="text-2xl font-bold">{orders.length}</p>
              <p className="text-sm text-muted-foreground">{t("dashboard.totalOrders")}</p>
            </div>
            <div className="glass rounded-xl p-4 border border-border/50">
              <Clock className="w-8 h-8 text-yellow-500 mb-2" />
              <p className="text-2xl font-bold">
                {orders.filter(o => o.status === "running").length}
              </p>
              <p className="text-sm text-muted-foreground">{t("dashboard.running")}</p>
            </div>
            <div className="glass rounded-xl p-4 border border-border/50">
              <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
              <p className="text-2xl font-bold">
                {orders.filter(o => o.status === "completed").length}
              </p>
              <p className="text-sm text-muted-foreground">{t("dashboard.completed")}</p>
            </div>
            <div className="glass rounded-xl p-4 border border-border/50">
              <BarChart3 className="w-8 h-8 text-accent mb-2" />
              <p className="text-2xl font-bold">
                {orders.reduce((sum, o) => sum + Number(o.total_amount), 0).toLocaleString()}đ
              </p>
              <p className="text-sm text-muted-foreground">{t("dashboard.totalSpent")}</p>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`grid grid-cols-1 ${isAdmin ? 'md:grid-cols-4' : 'md:grid-cols-3'} gap-4 mb-8`}
          >
            <Button 
              onClick={() => navigate("/order")}
              className="btn-gaming text-primary-foreground h-16 text-lg font-semibold"
            >
              <ShoppingCart className="w-6 h-6 mr-2" />
              {t("dashboard.newOrder")}
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/orders")}
              className="h-16 text-lg border-border/50 hover:border-primary"
            >
              <Package className="w-6 h-6 mr-2" />
              {t("dashboard.viewAllOrders")}
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate("/profile")}
              className="h-16 text-lg border-border/50 hover:border-primary"
            >
              <Settings className="w-6 h-6 mr-2" />
              {t("dashboard.accountSettings")}
            </Button>
            {isAdmin && (
              <Button 
                variant="outline"
                onClick={() => navigate("/admin")}
                className="h-16 text-lg border-red-500/50 hover:border-red-500 text-red-500 hover:text-red-400"
              >
                <Shield className="w-6 h-6 mr-2" />
                {t("dashboard.adminPanel")}
              </Button>
            )}
          </motion.div>

          {/* Recent Orders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6 border border-border/50"
          >
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              {t("dashboard.recentOrders")}
            </h2>
            
            {orders.length === 0 ? (
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground mb-4">{t("dashboard.noOrders")}</p>
                <Button onClick={() => navigate("/order")} className="btn-gaming text-primary-foreground">
                  {t("dashboard.orderNow")}
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                {orders.map((order) => (
                  <div 
                    key={order.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/30 hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => navigate(`/orders/${order.id}`)}
                  >
                    <div>
                      <p className="font-medium">{order.service_packages?.name || t("admin.package")}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.created_at).toLocaleDateString("vi-VN")}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{Number(order.total_amount).toLocaleString()}đ</p>
                      <p className={`text-sm ${getStatusColor(order.status)}`}>
                        {getStatusText(order.status)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}