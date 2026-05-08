import { useState } from "react";
import { Search, MessageCircle, Menu, X } from "lucide-react";

interface NavbarProps {
  onOrderLookup: () => void;
}

// V3 redesign: brand mark "R" + section nav + gradient CTA.
// Keeps `onOrderLookup` prop and Discord/Zalo links so PaymentModal/OrderLookupModal flow is preserved.
export function Navbar({ onOrderLookup }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-glass border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 h-14 flex items-center justify-between gap-4">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3" aria-label="RokdBot — về trang chủ">
          <div className="brand-mark-v3">R</div>
          <span className="brand-name-v3 hidden sm:block">RokdBot</span>
        </a>

        {/* Desktop section nav */}
        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#9db0ca]">
          <li><a href="#features" className="hover:text-white transition">Tính năng</a></li>
          <li><a href="#packages" className="hover:text-white transition">Gói cước</a></li>
          <li><a href="#stats" className="hover:text-white transition">Số liệu</a></li>
          <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
          <li>
            <button onClick={onOrderLookup} className="hover:text-white transition flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5" />
              Tra cứu đơn
            </button>
          </li>
        </ul>

        {/* Desktop CTA cluster */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://discord.gg/UPuFYCw4JG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#9db0ca] hover:text-white transition flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discord</span>
          </a>
          <a href="#packages" className="nav-cta-v3">Bắt đầu →</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#050913]/95 backdrop-blur-xl px-4 py-4 flex flex-col gap-2">
          <a href="#features" onClick={() => setMobileOpen(false)} className="text-[#c8d3e3] py-2 text-sm">Tính năng</a>
          <a href="#packages" onClick={() => setMobileOpen(false)} className="text-[#c8d3e3] py-2 text-sm">Gói cước</a>
          <a href="#stats" onClick={() => setMobileOpen(false)} className="text-[#c8d3e3] py-2 text-sm">Số liệu</a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="text-[#c8d3e3] py-2 text-sm">FAQ</a>
          <button
            onClick={() => { onOrderLookup(); setMobileOpen(false); }}
            className="text-[#c8d3e3] py-2 text-sm text-left flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            Tra cứu đơn
          </button>
          <a
            href="https://discord.gg/UPuFYCw4JG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c8d3e3] py-2 text-sm flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Discord
          </a>
          <a
            href="#packages"
            onClick={() => setMobileOpen(false)}
            className="nav-cta-v3 mt-2 text-center"
          >
            Bắt đầu →
          </a>
        </div>
      )}
    </nav>
  );
}
