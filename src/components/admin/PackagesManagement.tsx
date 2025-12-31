import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { 
  Plus, 
  Pencil, 
  Trash2, 
  Loader2,
  Package,
  Check,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ServicePackage {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  duration_days: number | null;
  features: string[] | null;
  is_active: boolean | null;
  created_at: string;
}

interface PackageFormData {
  name: string;
  slug: string;
  description: string;
  price: string;
  duration_days: string;
  features: string;
  is_active: boolean;
}

const initialFormData: PackageFormData = {
  name: "",
  slug: "",
  description: "",
  price: "",
  duration_days: "",
  features: "",
  is_active: true,
};

export default function PackagesManagement() {
  const { t } = useTranslation();
  const { toast } = useToast();
  
  const [packages, setPackages] = useState<ServicePackage[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<ServicePackage | null>(null);
  const [formData, setFormData] = useState<PackageFormData>(initialFormData);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    const { data, error } = await supabase
      .from("service_packages")
      .select("*")
      .order("price", { ascending: true });

    if (error) {
      toast({
        title: t("admin.packages.fetchError"),
        variant: "destructive",
      });
    } else {
      setPackages(data as ServicePackage[]);
    }
    setLoading(false);
  };

  const openCreateDialog = () => {
    setSelectedPackage(null);
    setFormData(initialFormData);
    setIsDialogOpen(true);
  };

  const openEditDialog = (pkg: ServicePackage) => {
    setSelectedPackage(pkg);
    setFormData({
      name: pkg.name,
      slug: pkg.slug,
      description: pkg.description || "",
      price: pkg.price.toString(),
      duration_days: pkg.duration_days?.toString() || "",
      features: Array.isArray(pkg.features) ? pkg.features.join("\n") : "",
      is_active: pkg.is_active ?? true,
    });
    setIsDialogOpen(true);
  };

  const openDeleteDialog = (pkg: ServicePackage) => {
    setSelectedPackage(pkg);
    setIsDeleteDialogOpen(true);
  };

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleNameChange = (name: string) => {
    setFormData({
      ...formData,
      name,
      slug: selectedPackage ? formData.slug : generateSlug(name),
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.price) {
      toast({
        title: t("admin.packages.validationError"),
        description: t("admin.packages.requiredFields"),
        variant: "destructive",
      });
      return;
    }

    setSaving(true);

    const packageData = {
      name: formData.name.trim(),
      slug: formData.slug || generateSlug(formData.name),
      description: formData.description.trim() || null,
      price: parseFloat(formData.price),
      duration_days: formData.duration_days ? parseInt(formData.duration_days) : null,
      features: formData.features.trim() 
        ? formData.features.split("\n").map(f => f.trim()).filter(Boolean)
        : null,
      is_active: formData.is_active,
    };

    if (selectedPackage) {
      // Update
      const { error } = await supabase
        .from("service_packages")
        .update(packageData)
        .eq("id", selectedPackage.id);

      if (error) {
        toast({
          title: t("admin.packages.updateError"),
          variant: "destructive",
        });
      } else {
        toast({
          title: t("admin.packages.updateSuccess"),
        });
        setIsDialogOpen(false);
        fetchPackages();
      }
    } else {
      // Create
      const { error } = await supabase
        .from("service_packages")
        .insert(packageData);

      if (error) {
        toast({
          title: t("admin.packages.createError"),
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: t("admin.packages.createSuccess"),
        });
        setIsDialogOpen(false);
        fetchPackages();
      }
    }

    setSaving(false);
  };

  const handleDelete = async () => {
    if (!selectedPackage) return;

    const { error } = await supabase
      .from("service_packages")
      .delete()
      .eq("id", selectedPackage.id);

    if (error) {
      toast({
        title: t("admin.packages.deleteError"),
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: t("admin.packages.deleteSuccess"),
      });
      fetchPackages();
    }

    setIsDeleteDialogOpen(false);
    setSelectedPackage(null);
  };

  const toggleActive = async (pkg: ServicePackage) => {
    const { error } = await supabase
      .from("service_packages")
      .update({ is_active: !pkg.is_active })
      .eq("id", pkg.id);

    if (error) {
      toast({
        title: t("admin.packages.updateError"),
        variant: "destructive",
      });
    } else {
      fetchPackages();
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{t("admin.packages.title")}</h2>
          <p className="text-muted-foreground">{t("admin.packages.subtitle")}</p>
        </div>
        <Button onClick={openCreateDialog}>
          <Plus className="w-4 h-4 mr-2" />
          {t("admin.packages.add")}
        </Button>
      </div>

      <div className="glass rounded-2xl border border-border/50 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead>{t("admin.packages.name")}</TableHead>
              <TableHead>{t("admin.packages.price")}</TableHead>
              <TableHead>{t("admin.packages.duration")}</TableHead>
              <TableHead>{t("admin.packages.status")}</TableHead>
              <TableHead className="text-right">{t("admin.actions")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {packages.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-12 text-muted-foreground">
                  <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>{t("admin.packages.noPackages")}</p>
                </TableCell>
              </TableRow>
            ) : (
              packages.map((pkg) => (
                <TableRow key={pkg.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{pkg.name}</p>
                      <p className="text-sm text-muted-foreground">{pkg.slug}</p>
                    </div>
                  </TableCell>
                  <TableCell className="font-bold">
                    {pkg.price.toLocaleString()}đ
                  </TableCell>
                  <TableCell>
                    {pkg.duration_days ? `${pkg.duration_days} ${t("admin.packages.days")}` : "-"}
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => toggleActive(pkg)}
                      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium transition-colors ${
                        pkg.is_active
                          ? "bg-green-500/20 text-green-500 hover:bg-green-500/30"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {pkg.is_active ? (
                        <>
                          <Check className="w-3 h-3" />
                          {t("admin.packages.active")}
                        </>
                      ) : (
                        <>
                          <X className="w-3 h-3" />
                          {t("admin.packages.inactive")}
                        </>
                      )}
                    </button>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => openEditDialog(pkg)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-destructive hover:text-destructive"
                        onClick={() => openDeleteDialog(pkg)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Create/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {selectedPackage ? t("admin.packages.edit") : t("admin.packages.add")}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t("admin.packages.name")} *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="VD: Gói Tuần"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="vd: goi-tuan"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">{t("admin.packages.price")} (VNĐ) *</Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="100000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">{t("admin.packages.duration")} ({t("admin.packages.days")})</Label>
                <Input
                  id="duration"
                  type="number"
                  value={formData.duration_days}
                  onChange={(e) => setFormData({ ...formData, duration_days: e.target.value })}
                  placeholder="7"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">{t("admin.packages.description")}</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder={t("admin.packages.descriptionPlaceholder")}
                rows={2}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="features">{t("admin.packages.features")}</Label>
              <Textarea
                id="features"
                value={formData.features}
                onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                placeholder={t("admin.packages.featuresPlaceholder")}
                rows={3}
              />
              <p className="text-xs text-muted-foreground">
                {t("admin.packages.featuresHint")}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="is_active">{t("admin.packages.activeLabel")}</Label>
              <Switch
                id="is_active"
                checked={formData.is_active}
                onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              {t("common.cancel")}
            </Button>
            <Button onClick={handleSubmit} disabled={saving}>
              {saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {selectedPackage ? t("common.save") : t("common.create")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("admin.packages.deleteConfirm")}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("admin.packages.deleteWarning", { name: selectedPackage?.name })}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("common.cancel")}</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {t("common.delete")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
