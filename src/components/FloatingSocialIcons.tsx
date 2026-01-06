import { ZaloIcon, DiscordIcon } from "./SocialIcons";
import { Facebook } from "lucide-react";

const floatingSocialLinks = [
  { 
    name: "Zalo", 
    icon: ZaloIcon, 
    url: "https://zalo.me/g/rqgqyd878", 
    hoverBg: "hover:bg-blue-500",
    hoverShadow: "hover:shadow-blue-500/40",
    mobileBg: "bg-blue-500"
  },
  { 
    name: "Discord", 
    icon: DiscordIcon, 
    url: "https://discord.gg/UPuFYCw4JG", 
    hoverBg: "hover:bg-indigo-500",
    hoverShadow: "hover:shadow-indigo-500/40",
    mobileBg: "bg-indigo-500"
  },
  { 
    name: "Facebook", 
    icon: Facebook, 
    url: "https://facebook.com/rokdbot", 
    hoverBg: "hover:bg-blue-600",
    hoverShadow: "hover:shadow-blue-600/40",
    mobileBg: "bg-blue-600"
  },
];

export function FloatingSocialIcons() {
  return (
    <>
      {/* Desktop: Floating icons on the right side */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {floatingSocialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative p-3 rounded-full 
              bg-background/80 backdrop-blur-sm border border-border
              shadow-lg transition-all duration-300 ease-out
              hover:scale-110 hover:-translate-x-2 hover:-rotate-6
              hover:shadow-xl ${social.hoverShadow} ${social.hoverBg}
              hover:border-transparent hover:text-white
            `}
            aria-label={social.name}
          >
            <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            
            {/* Tooltip */}
            <span className="
              absolute right-full mr-3 top-1/2 -translate-y-1/2
              px-3 py-1.5 rounded-lg text-sm font-medium
              bg-background border border-border shadow-lg
              opacity-0 -translate-x-2 pointer-events-none
              transition-all duration-300
              group-hover:opacity-100 group-hover:translate-x-0
              whitespace-nowrap
            ">
              {social.name}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile: Fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-background/95 backdrop-blur-md border-t border-border/50 px-4 py-3 safe-area-bottom">
          <div className="flex items-center justify-center gap-4">
            <span className="text-xs text-muted-foreground mr-2">Liên hệ:</span>
            {floatingSocialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-2.5 rounded-full ${social.mobileBg} text-white
                  shadow-lg transition-all duration-200 ease-out
                  active:scale-95
                `}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
