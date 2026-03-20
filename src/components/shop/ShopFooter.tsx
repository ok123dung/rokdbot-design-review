import { Gamepad2 } from "lucide-react";

export function ShopFooter() {
  return (
    <footer className="border-t border-white/10 mt-12">
      <div className="max-w-[1240px] mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-primary" />
            <span className="font-bold text-white">RokdBot</span>
            <span className="text-muted text-sm ml-2">Bot Farm Rise of Kingdoms</span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a href="/terms" className="text-muted hover:text-white transition">Điều khoản</a>
            <a href="/privacy" className="text-muted hover:text-white transition">Chính sách</a>
            <a href="/disclaimer" className="text-muted hover:text-white transition">Miễn trừ</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://discord.gg/YOUR_INVITE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition text-sm"
            >
              Discord
            </a>
            <a
              href="https://zalo.me/g/YOUR_GROUP"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition text-sm"
            >
              Zalo
            </a>
          </div>
        </div>

        <p className="text-center text-muted text-xs mt-6">
          &copy; {new Date().getFullYear()} RokdBot
        </p>
      </div>
    </footer>
  );
}
