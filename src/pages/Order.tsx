import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { 
  Gamepad2, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  CreditCard,
  Server,
  Crown,
  Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

interface ServicePackage {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  duration_days: number;
  features: string[];
}

export default function Order() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const preselectedPackage = searchParams.get("package");
  
  const gameInfoSchema = z.object({
    gameAccountId: z.string().min(1, `${t("order.requiredField")} ${t("order.gameAccountId")}`),
    gameServer: z.string().min(1, `${t("order.requiredField")} ${t("order.gameServer")}`),
    gameKingdom: z.string().min(1, `${t("order.requiredField")} ${t("order.gameKingdom")}`),
  });
  
  const [step, setStep] = useState(1);
  const [packages, setPackages] = useState<ServicePackage[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(preselectedPackage);
  const [gameAccountId, setGameAccountId] = useState("");
  const [gameServer, setGameServer] = useState("");
  const [gameKingdom, setGameKingdom] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [paymentProofPreview, setPaymentProofPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    const { data } = await supabase
      .from("service_packages")
      .select("*")
      .eq("is_active", true)
      .order("price", { ascending: true });
    
    if (data) {
      const parsed = data.map(pkg => ({
        ...pkg,
        features: typeof pkg.features === 'string' ? JSON.parse(pkg.features) : pkg.features
      }));
      setPackages(parsed);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: t("order.fileTooLarge"),
          description: t("order.fileTooLargeDesc"),
          variant: "destructive"
        });
        return;
      }
      setPaymentProof(file);
      setPaymentProofPreview(URL.createObjectURL(file));
    }
  };

  const validateStep2 = () => {
    const result = gameInfoSchema.safeParse({
      gameAccountId,
      gameServer,
      gameKingdom
    });
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          newErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleNext = () => {
    if (step === 1 && !selectedPackage) {
      toast({
        title: t("order.noPackageSelected"),
        description: t("order.noPackageSelectedDesc"),
        variant: "destructive"
      });
      return;
    }
    
    if (step === 2 && !validateStep2()) {
      return;
    }
    
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async () => {
    if (!paymentProof) {
      toast({
        title: t("order.noProofUploaded"),
        description: t("order.noProofUploadedDesc"),
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const selectedPkg = packages.find(p => p.id === selectedPackage);
      if (!selectedPkg) throw new Error("Package not found");

      // Upload payment proof
      const fileExt = paymentProof.name.split('.').pop();
      const fileName = `${user?.id}/${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from("payment-proofs")
        .upload(fileName, paymentProof);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("payment-proofs")
        .getPublicUrl(fileName);

      // Create order
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          user_id: user?.id,
          package_id: selectedPackage,
          game_account_id: gameAccountId,
          game_server: gameServer,
          game_kingdom: gameKingdom,
          notes,
          payment_proof_url: publicUrl,
          total_amount: selectedPkg.price,
          status: "pending"
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create payment record
      await supabase
        .from("payments")
        .insert({
          order_id: order.id,
          amount: selectedPkg.price,
          method: "bank_transfer",
          proof_url: publicUrl,
          status: "pending"
        });

      toast({
        title: t("order.orderSuccess"),
        description: t("order.orderSuccessDesc")
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Order error:", error);
      toast({
        title: t("order.orderError"),
        description: t("order.orderErrorDesc"),
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const selectedPkg = packages.find(p => p.id === selectedPackage);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
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
              {t("common.back")}
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12">
        <div className="container mx-auto max-w-4xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                    s <= step 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {s < step ? <Check className="w-5 h-5" /> : s}
                </div>
                {s < 4 && (
                  <div className={`w-16 md:w-24 h-1 mx-2 rounded ${
                    s < step ? "bg-primary" : "bg-muted"
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Labels */}
          <div className="flex justify-between text-sm text-muted-foreground mb-8 px-4">
            <span className={step >= 1 ? "text-primary" : ""}>{t("order.steps.package")}</span>
            <span className={step >= 2 ? "text-primary" : ""}>{t("order.steps.info")}</span>
            <span className={step >= 3 ? "text-primary" : ""}>{t("order.steps.payment")}</span>
            <span className={step >= 4 ? "text-primary" : ""}>{t("order.steps.confirm")}</span>
          </div>

          {/* Step Content */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass rounded-2xl p-6 md:p-8 border border-border/50"
          >
            {/* Step 1: Choose Package */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">{t("order.selectPackage")}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedPackage === pkg.id
                          ? "border-primary bg-primary/10"
                          : "border-border/50 hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <Crown className="w-6 h-6 text-primary" />
                        <h3 className="font-bold">{pkg.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{pkg.description}</p>
                      <p className="text-2xl font-bold text-gradient-gold">
                        {pkg.price.toLocaleString()}đ
                        <span className="text-sm text-muted-foreground font-normal">
                          /{pkg.duration_days} {t("order.days")}
                        </span>
                      </p>
                      <ul className="mt-3 space-y-1">
                        {pkg.features?.slice(0, 3).map((f: string, i: number) => (
                          <li key={i} className="text-sm flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Game Info */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">{t("order.gameInfo")}</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="gameAccountId">{t("order.gameAccountId")}</Label>
                    <div className="relative mt-1">
                      <Gamepad2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="gameAccountId"
                        placeholder={t("order.enterGovernorId")}
                        value={gameAccountId}
                        onChange={(e) => setGameAccountId(e.target.value)}
                        className={`pl-10 ${errors.gameAccountId ? "border-destructive" : ""}`}
                      />
                    </div>
                    {errors.gameAccountId && (
                      <p className="text-sm text-destructive mt-1">{errors.gameAccountId}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="gameServer">{t("order.gameServer")}</Label>
                    <div className="relative mt-1">
                      <Server className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="gameServer"
                        placeholder={t("order.enterServer")}
                        value={gameServer}
                        onChange={(e) => setGameServer(e.target.value)}
                        className={`pl-10 ${errors.gameServer ? "border-destructive" : ""}`}
                      />
                    </div>
                    {errors.gameServer && (
                      <p className="text-sm text-destructive mt-1">{errors.gameServer}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="gameKingdom">{t("order.gameKingdom")}</Label>
                    <div className="relative mt-1">
                      <Crown className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="gameKingdom"
                        placeholder={t("order.enterKingdom")}
                        value={gameKingdom}
                        onChange={(e) => setGameKingdom(e.target.value)}
                        className={`pl-10 ${errors.gameKingdom ? "border-destructive" : ""}`}
                      />
                    </div>
                    {errors.gameKingdom && (
                      <p className="text-sm text-destructive mt-1">{errors.gameKingdom}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="notes">{t("order.notes")}</Label>
                    <Textarea
                      id="notes"
                      placeholder={t("order.notesPlaceholder")}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">{t("order.payment")}</h2>
                
                {selectedPkg && (
                  <div className="bg-primary/10 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{selectedPkg.name}</p>
                        <p className="text-sm text-muted-foreground">{selectedPkg.duration_days} {t("order.days")}</p>
                      </div>
                      <p className="text-2xl font-bold text-gradient-gold">
                        {selectedPkg.price.toLocaleString()}đ
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Bank Transfer */}
                  <div className="border border-border/50 rounded-xl p-4">
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-primary" />
                      {t("order.bankTransfer")}
                    </h3>
                    <div className="flex flex-col items-center mb-4">
                      <img 
                        src="/assets/qr-bank.jpg" 
                        alt="QR Code" 
                        className="w-40 h-40 object-contain rounded-lg border border-border/30"
                      />
                      <p className="text-xs text-muted-foreground mt-2">{t("order.scanToPay")}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-muted-foreground">{t("order.bank")}:</span> <strong>HD Bank</strong></p>
                      <p><span className="text-muted-foreground">{t("order.accountNumber")}:</span> <strong>0915966853</strong></p>
                      <p><span className="text-muted-foreground">{t("order.accountHolder")}:</span> <strong>NGUYEN HUU DUNG</strong></p>
                      <p><span className="text-muted-foreground">{t("order.transferContent")}:</span> <strong>ROK {user?.email?.split("@")[0]}</strong></p>
                    </div>
                  </div>

                  {/* MoMo */}
                  <div className="border border-border/50 rounded-xl p-4">
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <div className="w-5 h-5 bg-pink-500 rounded-full" />
                      {t("order.momo")}
                    </h3>
                    <div className="flex flex-col items-center mb-4">
                      <img 
                        src="/assets/qr-bank.jpg" 
                        alt="QR Code MoMo" 
                        className="w-40 h-40 object-contain rounded-lg border border-border/30"
                      />
                      <p className="text-xs text-muted-foreground mt-2">{t("order.scanToPay")}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-muted-foreground">{t("order.phone")}:</span> <strong>0915966853</strong></p>
                      <p><span className="text-muted-foreground">{t("order.accountHolder")}:</span> <strong>NGUYEN HUU DUNG</strong></p>
                      <p><span className="text-muted-foreground">{t("order.transferContent")}:</span> <strong>ROK {user?.email?.split("@")[0]}</strong></p>
                    </div>
                  </div>
                </div>

                {/* Upload Proof */}
                <div className="mt-6">
                  <Label className="mb-2 block">{t("order.uploadProof")}</Label>
                  <div 
                    className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                      paymentProofPreview ? "border-primary bg-primary/5" : "border-border/50 hover:border-primary/50"
                    }`}
                    onClick={() => document.getElementById("payment-proof")?.click()}
                  >
                    {paymentProofPreview ? (
                      <div>
                        <img 
                          src={paymentProofPreview} 
                          alt="Payment proof" 
                          className="max-h-48 mx-auto rounded-lg mb-2"
                        />
                        <p className="text-sm text-muted-foreground">{t("order.dragDropImage")}</p>
                      </div>
                    ) : (
                      <div>
                        <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">{t("order.dragDropImage")}</p>
                        <p className="text-sm text-muted-foreground">{t("order.maxFileSize")}</p>
                      </div>
                    )}
                    <input
                      id="payment-proof"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">{t("order.summary")}</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">{t("admin.package")}</span>
                    <span className="font-medium">{selectedPkg?.name}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">{t("order.days")}</span>
                    <span className="font-medium">{selectedPkg?.duration_days} {t("order.days")}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">{t("orderDetail.governorId")}</span>
                    <span className="font-medium">{gameAccountId}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Server</span>
                    <span className="font-medium">{gameServer}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Kingdom</span>
                    <span className="font-medium">{gameKingdom}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">{t("orderDetail.paymentProof")}</span>
                    <span className="font-medium text-green-500">
                      {paymentProof ? "✓" : "—"}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 text-xl">
                    <span className="font-bold">{t("order.total")}</span>
                    <span className="font-bold text-gradient-gold">
                      {selectedPkg?.price.toLocaleString()}đ
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                {t("common.back")}
              </Button>
              
              {step < 4 ? (
                <Button onClick={handleNext} className="btn-gaming text-primary-foreground">
                  {t("common.next")}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit} 
                  disabled={isLoading}
                  className="btn-gaming text-primary-foreground"
                >
                  {isLoading ? (
                    <div className="animate-spin w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full" />
                  ) : (
                    <>
                      {t("order.confirmOrder")}
                      <Check className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}