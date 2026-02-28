import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-gradient">404</h1>
          <p className="mb-6 text-xl text-muted-foreground">{t("notFound.message")}</p>
          <a href="/" className="text-primary underline hover:text-primary/90 text-lg">
            {t("notFound.backHome")}
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
