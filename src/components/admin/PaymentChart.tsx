import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import { format, subDays, startOfDay, startOfWeek, endOfWeek, eachDayOfInterval, eachWeekOfInterval, subWeeks } from "date-fns";
import { vi, enUS, ko, zhCN } from "date-fns/locale";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface Order {
  id: string;
  status: string;
  total_amount: number;
  created_at: string;
  paid_at?: string | null;
}

interface PaymentChartProps {
  orders: Order[];
}

export default function PaymentChart({ orders }: PaymentChartProps) {
  const { t, i18n } = useTranslation();
  const [viewMode, setViewMode] = useState<"daily" | "weekly">("daily");

  const getLocale = () => {
    switch (i18n.language) {
      case "vi": return vi;
      case "ko": return ko;
      case "zh": return zhCN;
      default: return enUS;
    }
  };

  const paidOrders = useMemo(() => 
    orders.filter(o => o.status !== "pending" && o.status !== "cancelled"),
    [orders]
  );

  const dailyData = useMemo(() => {
    const last14Days = eachDayOfInterval({
      start: subDays(new Date(), 13),
      end: new Date()
    });

    return last14Days.map(day => {
      const dayStart = startOfDay(day);
      const dayEnd = new Date(dayStart);
      dayEnd.setHours(23, 59, 59, 999);

      const dayOrders = paidOrders.filter(order => {
        const orderDate = new Date(order.paid_at || order.created_at);
        return orderDate >= dayStart && orderDate <= dayEnd;
      });

      const revenue = dayOrders.reduce((sum, o) => sum + Number(o.total_amount), 0);
      const count = dayOrders.length;

      return {
        date: format(day, "dd/MM", { locale: getLocale() }),
        fullDate: format(day, "EEEE, dd/MM", { locale: getLocale() }),
        revenue,
        count,
      };
    });
  }, [paidOrders, i18n.language]);

  const weeklyData = useMemo(() => {
    const last8Weeks = eachWeekOfInterval({
      start: subWeeks(new Date(), 7),
      end: new Date()
    }, { weekStartsOn: 1 });

    return last8Weeks.map(weekStart => {
      const weekEnd = endOfWeek(weekStart, { weekStartsOn: 1 });

      const weekOrders = paidOrders.filter(order => {
        const orderDate = new Date(order.paid_at || order.created_at);
        return orderDate >= weekStart && orderDate <= weekEnd;
      });

      const revenue = weekOrders.reduce((sum, o) => sum + Number(o.total_amount), 0);
      const count = weekOrders.length;

      return {
        date: format(weekStart, "dd/MM", { locale: getLocale() }),
        fullDate: `${format(weekStart, "dd/MM", { locale: getLocale() })} - ${format(weekEnd, "dd/MM", { locale: getLocale() })}`,
        revenue,
        count,
      };
    });
  }, [paidOrders, i18n.language]);

  const chartData = viewMode === "daily" ? dailyData : weeklyData;

  const trend = useMemo(() => {
    if (chartData.length < 2) return { percentage: 0, direction: "neutral" as const };
    
    const current = chartData[chartData.length - 1].revenue;
    const previous = chartData[chartData.length - 2].revenue;
    
    if (previous === 0) return { percentage: current > 0 ? 100 : 0, direction: current > 0 ? "up" as const : "neutral" as const };
    
    const percentage = ((current - previous) / previous) * 100;
    const direction = percentage > 0 ? "up" as const : percentage < 0 ? "down" as const : "neutral" as const;
    
    return { percentage: Math.abs(percentage).toFixed(1), direction };
  }, [chartData]);

  const totalRevenue = chartData.reduce((sum, d) => sum + d.revenue, 0);
  const totalOrders = chartData.reduce((sum, d) => sum + d.count, 0);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="glass rounded-lg p-3 border border-border/50 shadow-xl">
          <p className="font-medium text-sm mb-1">{data.fullDate}</p>
          <p className="text-primary font-bold">
            {Number(data.revenue).toLocaleString()}đ
          </p>
          <p className="text-xs text-muted-foreground">
            {data.count} {t("admin.chart.orders")}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass rounded-2xl border border-border/50 p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg font-bold">{t("admin.chart.title")}</h3>
          <p className="text-sm text-muted-foreground">{t("admin.chart.subtitle")}</p>
        </div>
        
        <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as "daily" | "weekly")}>
          <TabsList className="glass border border-border/50">
            <TabsTrigger value="daily">{t("admin.chart.daily")}</TabsTrigger>
            <TabsTrigger value="weekly">{t("admin.chart.weekly")}</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 rounded-lg bg-primary/10">
          <p className="text-2xl font-bold text-primary">{totalRevenue.toLocaleString()}đ</p>
          <p className="text-xs text-muted-foreground">{t("admin.chart.totalRevenue")}</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-muted/30">
          <p className="text-2xl font-bold">{totalOrders}</p>
          <p className="text-xs text-muted-foreground">{t("admin.chart.totalOrders")}</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-muted/30">
          <div className="flex items-center justify-center gap-1">
            {trend.direction === "up" && <TrendingUp className="w-5 h-5 text-green-500" />}
            {trend.direction === "down" && <TrendingDown className="w-5 h-5 text-red-500" />}
            {trend.direction === "neutral" && <Minus className="w-5 h-5 text-muted-foreground" />}
            <span className={`text-2xl font-bold ${
              trend.direction === "up" ? "text-green-500" : 
              trend.direction === "down" ? "text-red-500" : ""
            }`}>
              {trend.percentage}%
            </span>
          </div>
          <p className="text-xs text-muted-foreground">{t("admin.chart.trend")}</p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              axisLine={{ stroke: "hsl(var(--border))" }}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => value >= 1000000 ? `${(value / 1000000).toFixed(1)}M` : value >= 1000 ? `${(value / 1000).toFixed(0)}K` : value}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
