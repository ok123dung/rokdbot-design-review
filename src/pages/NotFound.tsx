import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Gamepad2 } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen aurora-bg flex flex-col items-center justify-center px-4">
      <Gamepad2 className="w-12 h-12 text-primary mb-4" />
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-muted mb-6">Trang không tồn tại.</p>
      <a href="/" className="btn-primary">
        Về trang chủ
      </a>
    </div>
  );
};

export default NotFound;
