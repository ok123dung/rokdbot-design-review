import { useState } from "react";
import { Gamepad2, Search, MessageCircle, Menu, X } from "lucide-react";

interface NavbarProps {
  onOrderLookup: () => void;
}

export function Navbar({ onOrderLookup }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-glass border-b border-white/10">
      <div className="max-w-[1240px] mx-auto px-4 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Gamepad2 className="w-7 h-7 text-primary" />
          <span className="text-lg font-bold text-white">RokdBot</span>
        </a>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOrderLookup}
            className="btn-secondary text-sm"
          >
            <Search className="w-4 h-4" />
            <span>Tra cứu đơn</span>
          </button>
          <a
            href="https://discord.gg/YOUR_INVITE"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discord</span>
          </a>
          <a
            href="https://zalo.me/g/YOUR_GROUP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            <span>Zalo</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[var(--bg-color)] px-4 py-3 flex flex-col gap-2">
          <button
            onClick={() => { onOrderLookup(); setMobileOpen(false); }}
            className="btn-secondary text-sm w-full justify-center"
          >
            <Search className="w-4 h-4" />
            Tra cứu đơn
          </button>
          <a
            href="https://discord.gg/YOUR_INVITE"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm w-full justify-center"
          >
            <MessageCircle className="w-4 h-4" />
            Discord
          </a>
          <a
            href="https://zalo.me/g/YOUR_GROUP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm w-full justify-center"
          >
            Zalo
          </a>
        </div>
      )}
    </nav>
  );
}
