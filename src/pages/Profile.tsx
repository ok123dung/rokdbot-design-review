import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
import { SEO } from "@/components/SEO";

interface Profile {
  full_name: string | null;
  username: string | null;
  phone: string | null;
  zalo: string | null;
  discord: string | null;
  balance: number;
}

export default function Profile() {
  const { t } = useTranslation();
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
        title: t("profile.updateError"),
        description: t("profile.updateErrorDesc"),
        variant: "destructive"
      });
    } else {
      toast({
        title: t("profile.updateSuccess"),
        description: t("profile.updateSuccessDesc")
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
      <SEO 
        title={t("profile.title")}
        description={t("profile.subtitle")}
        url="/profile"
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
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold mb-2">{t("profile.title")}</h1>
            <p className="text-muted-foreground mb-8">{t("profile.subtitle")}</p>

            {/* Balance Card */}
            <div className="glass rounded-2xl p-6 border border-border/50 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">{t("profile.walletBalance")}</p>
                  <p className="text-3xl font-bold text-gradient-gold">
                    {(profile?.balance || 0).toLocaleString()}đ
                  </p>
                </div>
                <Button variant="outline" disabled>
                  {t("profile.deposit")} ({t("profile.comingSoon")})
                </Button>
              </div>
            </div>

            {/* Profile Form */}
            <div className="glass rounded-2xl p-6 border border-border/50 mb-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                {t("profile.personalInfo")}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">{t("auth.email")}</Label>
                  <div className="relative mt-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      value={user?.email || ""}
                      disabled
                      className="pl-10 bg-muted/50"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{t("profile.emailCannotChange")}</p>
                </div>

                <div>
                  <Label htmlFor="fullName">{t("auth.fullName")}</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="fullName"
                      placeholder={t("profile.enterName")}
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
                    placeholder={t("profile.enterUsername")}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">{t("order.phone")}</Label>
                  <div className="relative mt-1">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      placeholder={t("profile.enterPhone")}
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
                    placeholder={t("profile.zaloPlaceholder")}
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
                      placeholder={t("profile.discordPlaceholder")}
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
                      {t("profile.saveChanges")}
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="glass rounded-2xl p-6 border border-red-500/30">
              <h2 className="text-xl font-bold mb-4 text-red-500">{t("profile.dangerZone")}</h2>
              <p className="text-muted-foreground text-sm mb-4">
                {t("profile.dangerZoneDesc")}
              </p>
              <Button 
                variant="destructive" 
                onClick={handleSignOut}
              >
                {t("common.logout")}
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}