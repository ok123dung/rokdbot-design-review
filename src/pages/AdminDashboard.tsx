import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Gamepad2,
  Package,
  DollarSign,
  Clock,
  Loader2,
  Eye,
  ShoppingCart,
  Boxes,
  BarChart3,
  Search,
  Filter,
  LogOut,
  Download,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import PackagesManagement from "@/components/admin/PackagesManagement";
import PaymentChart from "@/components/admin/PaymentChart";

interface Order {
  id: string;
  user_id: string | null;
  status: string;
  total_amount: number;
  created_at: string;
  payment_code: string | null;
  payment_proof_url: string | null;
  service_packages: { name: string } | null;
}

interface Stats {
  totalOrders: number;
  totalRevenue: number;
  pendingOrders: number;
  runningOrders: number;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [isAdmin, setIsAdmin] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    runningOrders: 0,
  });
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingData, setLoadingData] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [updating, setUpdating] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("orders");

  // Auth check
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        navigate("/login");
        return;
      }
      supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle()
        .then(({ data }) => {
          if (!data) {
            toast({ title: "Access denied", variant: "destructive" });
            navigate("/");
          } else {
            setIsAdmin(true);
            fetchOrders();
          }
          setAuthLoading(false);
        });
    });
  }, []);

  useEffect(() => {
    filterOrders();
  }, [orders, statusFilter, searchQuery]);

  // Realtime order updates
  useEffect(() => {
    if (!isAdmin) return;
    const channel = supabase
      .channel("admin-order-updates")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "orders" },
        (payload) => {
          const newOrder = payload.new as { id: string; status: string; payment_code?: string };
          const oldOrder = payload.old as { status: string };
          if (oldOrder.status === "pending" && newOrder.status === "paid") {
            toast({
              title: "Payment received!",
              description: `Order ${newOrder.payment_code || newOrder.id.slice(0, 8)}`,
            });
            fetchOrders();
          }
        }
      )
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, [isAdmin]);

  const fetchOrders = async () => {
    const { data } = await supabase
      .from("orders")
      .select("id, status, total_amount, created_at, payment_proof_url, user_id, payment_code, service_packages(name)")
      .order("created_at", { ascending: false });

    if (data) {
      setOrders(data as unknown as Order[]);
      calculateStats(data as unknown as Order[]);
    }
    setLoadingData(false);
  };

  const calculateStats = (ordersData: Order[]) => {
    setStats({
      totalOrders: ordersData.length,
      totalRevenue: ordersData
        .filter((o) => o.status !== "pending" && o.status !== "cancelled")
        .reduce((sum, o) => sum + Number(o.total_amount), 0),
      pendingOrders: ordersData.filter((o) => o.status === "pending").length,
      runningOrders: ordersData.filter((o) => o.status === "running").length,
    });
  };

  const filterOrders = () => {
    let filtered = [...orders];
    if (statusFilter !== "all") {
      filtered = filtered.filter((o) => o.status === statusFilter);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (o) =>
          o.payment_code?.toLowerCase().includes(q) ||
          o.service_packages?.name?.toLowerCase().includes(q)
      );
    }
    setFilteredOrders(filtered);
  };

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    setUpdating(true);
    const updateData: Record<string, unknown> = { status: newStatus };
    if (newStatus === "paid") updateData.paid_at = new Date().toISOString();
    else if (newStatus === "running") updateData.started_at = new Date().toISOString();
    else if (newStatus === "completed") updateData.completed_at = new Date().toISOString();

    const { error } = await supabase.from("orders").update(updateData).eq("id", orderId);

    if (error) {
      toast({ title: "Update failed", variant: "destructive" });
    } else {
      toast({ title: `Status updated to ${newStatus}` });
      try {
        await supabase.functions.invoke("send-order-notification", {
          body: { order_id: orderId, new_status: newStatus },
        });
      } catch { /* notification failure is non-critical */ }
      fetchOrders();
      setSelectedOrder(null);
    }
    setUpdating(false);
  };

  const exportToCSV = () => {
    const headers = ["Order ID", "Code", "Package", "Amount", "Status", "Created"];
    const rows = filteredOrders.map((order) => [
      order.id.slice(0, 8).toUpperCase(),
      order.payment_code || "N/A",
      order.service_packages?.name || "N/A",
      order.total_amount,
      order.status,
      new Date(order.created_at).toLocaleDateString("vi-VN"),
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `rokdbot-orders-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500/20 text-green-400";
      case "running": return "bg-blue-500/20 text-blue-400";
      case "processing": return "bg-yellow-500/20 text-yellow-400";
      case "paid": return "bg-purple-500/20 text-purple-400";
      case "cancelled": return "bg-red-500/20 text-red-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  if (authLoading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
        <Loader2 className="w-8 h-8 animate-spin text-sky-400" />
      </div>
    );
  }

  if (!isAdmin) return null;

  const navItems = [
    { id: "orders", label: "Orders", icon: ShoppingCart },
    { id: "packages", label: "Packages", icon: Boxes },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f1f5f9] flex">
      {/* Sidebar overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-60 bg-[#0f172a]/95 border-r border-white/10 backdrop-blur-xl z-50 flex flex-col transition-transform lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-white/10 flex items-center gap-2">
          <Gamepad2 className="w-6 h-6 text-sky-400" />
          <span className="text-lg font-bold text-sky-400">RokdBot</span>
          <span className="text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded-full ml-1">ADMIN</span>
        </div>

        <nav className="flex-1 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-5 py-3 text-sm transition-colors border-l-3 ${
                activeTab === item.id
                  ? "bg-sky-400/10 text-sky-400 border-l-[3px] border-sky-400"
                  : "text-[#94a3b8] hover:bg-white/5 border-l-[3px] border-transparent"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-[#94a3b8] hover:text-red-400 transition-colors rounded-lg hover:bg-white/5"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 lg:ml-60">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-[#0f172a]/90 backdrop-blur-xl border-b border-white/10 px-4 lg:px-6 h-14 flex items-center gap-4">
          <button className="lg:hidden text-white" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold capitalize">{activeTab}</h1>
        </header>

        <div className="p-4 lg:p-6 max-w-[1400px] mx-auto">
          {/* Stats */}
          {activeTab === "orders" && (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-[#1e293b]/70 border border-white/10 rounded-xl p-4">
                  <Package className="w-7 h-7 text-sky-400 mb-2" />
                  <p className="text-2xl font-bold">{stats.totalOrders}</p>
                  <p className="text-sm text-[#94a3b8]">Total Orders</p>
                </div>
                <div className="bg-[#1e293b]/70 border border-white/10 rounded-xl p-4">
                  <DollarSign className="w-7 h-7 text-green-400 mb-2" />
                  <p className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()}d</p>
                  <p className="text-sm text-[#94a3b8]">Revenue</p>
                </div>
                <div className="bg-[#1e293b]/70 border border-white/10 rounded-xl p-4">
                  <Clock className="w-7 h-7 text-yellow-400 mb-2" />
                  <p className="text-2xl font-bold">{stats.pendingOrders}</p>
                  <p className="text-sm text-[#94a3b8]">Pending</p>
                </div>
                <div className="bg-[#1e293b]/70 border border-white/10 rounded-xl p-4">
                  <Loader2 className="w-7 h-7 text-blue-400 mb-2" />
                  <p className="text-2xl font-bold">{stats.runningOrders}</p>
                  <p className="text-sm text-[#94a3b8]">Running</p>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-col md:flex-row gap-3 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                  <Input
                    placeholder="Search by code or package..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-[#1e293b]/50 border-white/10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-44 bg-[#1e293b]/50 border-white/10">
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All ({orders.length})</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="running">Running</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={exportToCSV} className="border-white/10">
                  <Download className="w-4 h-4 mr-2" />
                  CSV
                </Button>
              </div>

              {/* Orders Table */}
              <div className="bg-[#1e293b]/50 border border-white/10 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px]">
                    <thead>
                      <tr className="border-b border-white/10 bg-[#0f172a]/50">
                        <th className="text-left p-4 text-sm font-medium text-[#94a3b8]">Code</th>
                        <th className="text-left p-4 text-sm font-medium text-[#94a3b8]">Package</th>
                        <th className="text-left p-4 text-sm font-medium text-[#94a3b8]">Amount</th>
                        <th className="text-left p-4 text-sm font-medium text-[#94a3b8]">Status</th>
                        <th className="text-left p-4 text-sm font-medium text-[#94a3b8]">Created</th>
                        <th className="text-left p-4 text-sm font-medium text-[#94a3b8]">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredOrders.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="text-center py-12 text-[#94a3b8]">
                            No orders found
                          </td>
                        </tr>
                      ) : (
                        filteredOrders.map((order) => (
                          <tr key={order.id} className="border-b border-white/5 hover:bg-white/[0.02]">
                            <td className="p-4 font-mono text-sm font-bold">{order.payment_code || "—"}</td>
                            <td className="p-4 text-sm">{order.service_packages?.name || "N/A"}</td>
                            <td className="p-4 font-bold text-sm">{Number(order.total_amount).toLocaleString()}d</td>
                            <td className="p-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="p-4 text-sm text-[#94a3b8]">
                              {new Date(order.created_at).toLocaleDateString("vi-VN")}
                            </td>
                            <td className="p-4">
                              <Button size="sm" variant="outline" className="border-white/10" onClick={() => setSelectedOrder(order)}>
                                <Eye className="w-4 h-4" />
                              </Button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeTab === "packages" && <PackagesManagement />}

          {activeTab === "analytics" && <PaymentChart orders={orders} />}
        </div>
      </main>

      {/* Order Detail Modal */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-lg bg-[#1e293b] border-white/10">
          <DialogHeader>
            <DialogTitle>Order Detail</DialogTitle>
          </DialogHeader>

          {selectedOrder && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-[#94a3b8]">Payment Code</p>
                  <p className="font-mono font-bold">{selectedOrder.payment_code || "N/A"}</p>
                </div>
                <div>
                  <p className="text-[#94a3b8]">Package</p>
                  <p className="font-medium">{selectedOrder.service_packages?.name || "N/A"}</p>
                </div>
                <div>
                  <p className="text-[#94a3b8]">Amount</p>
                  <p className="font-bold">{Number(selectedOrder.total_amount).toLocaleString()}d</p>
                </div>
                <div>
                  <p className="text-[#94a3b8]">Created</p>
                  <p>{new Date(selectedOrder.created_at).toLocaleString("vi-VN")}</p>
                </div>
              </div>

              <div>
                <p className="text-[#94a3b8] text-sm mb-2">Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {["pending", "paid", "processing", "running", "completed", "cancelled"].map((status) => (
                    <Button
                      key={status}
                      size="sm"
                      variant={selectedOrder.status === status ? "default" : "outline"}
                      onClick={() => updateOrderStatus(selectedOrder.id, status)}
                      disabled={updating || selectedOrder.status === status}
                      className={selectedOrder.status === status ? "bg-sky-500" : "border-white/10"}
                    >
                      {status}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" className="border-white/10" onClick={() => setSelectedOrder(null)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
