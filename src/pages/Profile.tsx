import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Gamepad2, 
  User,
  ChevronLeft,
  Mail,
  Phone,
  Save,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Profile {
  full_name: string | null;
  username: string | null;
  phone: string | null;
  zalo: string | null;
  discord: string | null;
  balance: number;
}

export default function Profile() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingData, setLoadingData] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [zalo, setZalo] = useState("");
  const [discord, setDiscord] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    const { data } = await supabase
      .from("profiles")
      .select("full_name, username, phone, zalo, discord, balance")
      .eq("user_id", user?.id)
      .maybeSingle();

    if (data) {
      setProfile(data);
      setFullName(data.full_name || "");
      setUsername(data.username || "");
      setPhone(data.phone || "");
      setZalo(data.zalo || "");
      setDiscord(data.discord || "");
    }
    setLoadingData(false);
  };

  const handleSave = async () => {
    setSaving(true);
    
    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: fullName,
        username,
        phone,
        zalo,
        discord
      })
      .eq("user_id", user?.id);

    if (error) {
      toast({
        title: "Lỗi",
        description: "Không thể cập nhật thông tin. Vui lòng thử lại.",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Thành công",
        description: "Đã cập nhật thông tin cá nhân"
      });
    }
    
    setSaving(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
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
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              <ChevronLeft className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold mb-2">Cài đặt tài khoản</h1>
            <p className="text-muted-foreground mb-8">Quản lý thông tin cá nhân của bạn</p>

            {/* Balance Card */}
            <div className="glass rounded-2xl p-6 border border-border/50 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Số dư ví</p>
                  <p className="text-3xl font-bold text-gradient-gold">
                    {(profile?.balance || 0).toLocaleString()}đ
                  </p>
                </div>
                <Button variant="outline" disabled>
                  Nạp tiền (Coming soon)
                </Button>
              </div>
            </div>

            {/* Profile Form */}
            <div className="glass rounded-2xl p-6 border border-border/50 mb-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Thông tin cá nhân
              </h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      value={user?.email || ""}
                      disabled
                      className="pl-10 bg-muted/50"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Email không thể thay đổi</p>
                </div>

                <div>
                  <Label htmlFor="fullName">Họ tên</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="fullName"
                      placeholder="Nhập họ tên"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Nhập username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      placeholder="0123456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="zalo">Zalo</Label>
                  <Input
                    id="zalo"
                    placeholder="Số Zalo hoặc link Zalo"
                    value={zalo}
                    onChange={(e) => setZalo(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="discord">Discord</Label>
                  <div className="relative mt-1">
                    <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="discord"
                      placeholder="username#1234"
                      value={discord}
                      onChange={(e) => setDiscord(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleSave} 
                  disabled={saving}
                  className="w-full btn-gaming text-primary-foreground"
                >
                  {saving ? (
                    <div className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Lưu thay đổi
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="glass rounded-2xl p-6 border border-red-500/30">
              <h2 className="text-xl font-bold mb-4 text-red-500">Vùng nguy hiểm</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Đăng xuất khỏi tài khoản của bạn
              </p>
              <Button 
                variant="destructive" 
                onClick={handleSignOut}
              >
                Đăng xuất
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
