import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Gamepad2, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Upload, 
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

const gameInfoSchema = z.object({
  gameAccountId: z.string().min(1, "Vui lòng nhập ID tài khoản game"),
  gameServer: z.string().min(1, "Vui lòng nhập Server"),
  gameKingdom: z.string().min(1, "Vui lòng nhập Kingdom"),
});

export default function Order() {
  const [searchParams] = useSearchParams();
  const preselectedPackage = searchParams.get("package");
  
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
          title: "File quá lớn",
          description: "Vui lòng chọn file nhỏ hơn 5MB",
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
        title: "Chưa chọn gói dịch vụ",
        description: "Vui lòng chọn một gói dịch vụ",
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
        title: "Chưa upload chứng từ",
        description: "Vui lòng upload ảnh chứng từ thanh toán",
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
        title: "Đặt hàng thành công!",
        description: "Đơn hàng của bạn đang chờ xác nhận thanh toán"
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Order error:", error);
      toast({
        title: "Lỗi đặt hàng",
        description: "Có lỗi xảy ra. Vui lòng thử lại.",
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
              Quay lại
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
            <span className={step >= 1 ? "text-primary" : ""}>Chọn gói</span>
            <span className={step >= 2 ? "text-primary" : ""}>Thông tin</span>
            <span className={step >= 3 ? "text-primary" : ""}>Thanh toán</span>
            <span className={step >= 4 ? "text-primary" : ""}>Xác nhận</span>
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
                <h2 className="text-2xl font-bold mb-6">Chọn gói dịch vụ</h2>
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
                          /{pkg.duration_days} ngày
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
                <h2 className="text-2xl font-bold mb-6">Thông tin tài khoản game</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="gameAccountId">ID Tài khoản / Governor ID</Label>
                    <div className="relative mt-1">
                      <Gamepad2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="gameAccountId"
                        placeholder="Nhập Governor ID"
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
                    <Label htmlFor="gameServer">Server</Label>
                    <div className="relative mt-1">
                      <Server className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="gameServer"
                        placeholder="Ví dụ: 1001"
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
                    <Label htmlFor="gameKingdom">Kingdom</Label>
                    <div className="relative mt-1">
                      <Crown className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="gameKingdom"
                        placeholder="Ví dụ: 1234"
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
                    <Label htmlFor="notes">Ghi chú (tùy chọn)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Thông tin thêm về yêu cầu của bạn..."
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
                <h2 className="text-2xl font-bold mb-6">Thanh toán</h2>
                
                {selectedPkg && (
                  <div className="bg-primary/10 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{selectedPkg.name}</p>
                        <p className="text-sm text-muted-foreground">{selectedPkg.duration_days} ngày</p>
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
                      Chuyển khoản ngân hàng
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-muted-foreground">Ngân hàng:</span> <strong>MB Bank</strong></p>
                      <p><span className="text-muted-foreground">Số TK:</span> <strong>0915966853</strong></p>
                      <p><span className="text-muted-foreground">Chủ TK:</span> <strong>NGUYEN VAN A</strong></p>
                      <p><span className="text-muted-foreground">Nội dung:</span> <strong>ROK {user?.email?.split("@")[0]}</strong></p>
                    </div>
                  </div>

                  {/* MoMo */}
                  <div className="border border-border/50 rounded-xl p-4">
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <div className="w-5 h-5 bg-pink-500 rounded-full" />
                      MoMo
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-muted-foreground">Số điện thoại:</span> <strong>0915966853</strong></p>
                      <p><span className="text-muted-foreground">Tên:</span> <strong>NGUYEN VAN A</strong></p>
                      <p><span className="text-muted-foreground">Nội dung:</span> <strong>ROK {user?.email?.split("@")[0]}</strong></p>
                    </div>
                  </div>
                </div>

                {/* Upload Proof */}
                <div className="mt-6">
                  <Label className="mb-2 block">Upload ảnh chứng từ thanh toán</Label>
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
                        <p className="text-sm text-muted-foreground">Click để đổi ảnh khác</p>
                      </div>
                    ) : (
                      <div>
                        <ImageIcon className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">Click để upload ảnh chứng từ</p>
                        <p className="text-sm text-muted-foreground">PNG, JPG, tối đa 5MB</p>
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
                <h2 className="text-2xl font-bold mb-6">Xác nhận đơn hàng</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Gói dịch vụ</span>
                    <span className="font-medium">{selectedPkg?.name}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Thời hạn</span>
                    <span className="font-medium">{selectedPkg?.duration_days} ngày</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Governor ID</span>
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
                    <span className="text-muted-foreground">Chứng từ thanh toán</span>
                    <span className="font-medium text-green-500">
                      {paymentProof ? "Đã upload ✓" : "Chưa upload"}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 text-xl">
                    <span className="font-bold">Tổng tiền</span>
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
                Quay lại
              </Button>
              
              {step < 4 ? (
                <Button onClick={handleNext} className="btn-gaming text-primary-foreground">
                  Tiếp tục
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
                      Xác nhận đặt hàng
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
