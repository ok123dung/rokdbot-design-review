// V3 redesign: Accordion 6 nhóm cũ → Bento grid 12 ô, 3 cụm Combat / Farm / Safety.
// Largest centerpiece: Combo Spam + Luring + AOE (gold, span-2).
import {
  Sword,
  Shield,
  Settings,
  Wheat,
  Bot,
  Cloud,
  Target,
  Zap,
  Wallet,
  Bell,
} from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="max-w-[1240px] mx-auto px-4 py-20 md:py-24" id="features">
      <header className="max-w-[720px] mx-auto text-center mb-12 md:mb-14">
        <span className="section-eyebrow">Capabilities</span>
        <h2 className="text-3xl md:text-4xl text-white mb-3 leading-tight" style={{ textWrap: "balance" } as React.CSSProperties}>
          Một bộ công cụ, <span className="gold-grad">phục vụ mọi giai đoạn KvK.</span>
        </h2>
        <p className="text-[17px] text-[#9db0ca] leading-relaxed">
          12 năng lực cốt lõi, gom thành 3 cụm: Combat — Farm — Safety. Tất cả đều đã chiến đấu thật trên server.
        </p>
      </header>

      <div className="bento-grid">
        {/* Row 1 — gold span-2 centerpiece */}
        <div className="bento span-2 gold">
          <div className="flex gap-3.5 items-start">
            <div className="bento-icon"><Sword className="w-5 h-5" /></div>
            <div>
              <div className="bento-tag">Combat · Độc quyền V2+</div>
              <h3>Combo Spam + Luring + AOE</h3>
            </div>
          </div>
          <p>
            Bot Spam troops duy trì áp lực → Luring quân địch vào vị trí lý tưởng → kích hoạt AOE skill commander đúng frame. Tính năng chỉ có ở RokdBot.
          </p>
          <div className="bento-mini-stat">
            <div><div className="v">+300%</div><div className="l">Honor / KvK</div></div>
            <div><div className="v">25/29</div><div className="l">tính năng V2</div></div>
            <div><div className="v">24h</div><div className="l">kích hoạt</div></div>
          </div>
          <div className="bento-arc" />
        </div>

        <div className="bento">
          <div className="bento-icon"><Shield className="w-5 h-5" /></div>
          <div className="bento-tag">Safety</div>
          <h3>IP riêng + Anti-detect</h3>
          <p>Mỗi khách một IP cloud server riêng. Tỷ lệ ban &lt;0,1%. Hoàn 100% + 1 tháng free nếu acc bị ban do bot.</p>
        </div>

        <div className="bento">
          <div className="bento-icon"><Settings className="w-5 h-5" /></div>
          <div className="bento-tag">Combat</div>
          <h3>Auto Rally Captain</h3>
          <p>Tự đánh giá fortress, barb level và launch rally đúng phút. Stack rage và trigger active skill tự động.</p>
        </div>

        {/* Row 2 */}
        <div className="bento">
          <div className="bento-icon"><Wheat className="w-5 h-5" /></div>
          <div className="bento-tag">Farm</div>
          <h3>Farm 4 loại RSS</h3>
          <p>Auto gather Food / Wood / Stone / Gold trong territory alliance. Chọn tile Lv5+ để tối ưu yield/h.</p>
        </div>

        <div className="bento gold">
          <div className="bento-icon"><Bot className="w-5 h-5" /></div>
          <div className="bento-tag">V3 Ultimate</div>
          <h3>AI Commander Rotation</h3>
          <p>Công nghệ độc quyền gói V3. Tự đổi commander pairing theo mục tiêu (farm / KvK / SoG) — tối ưu từng phase.</p>
          <div className="bento-bullet">
            <span className="bento-chip">29/29 tính năng</span>
            <span className="bento-chip">Multi-account sync</span>
          </div>
        </div>

        <div className="bento span-2">
          <div className="flex gap-3.5 items-start">
            <div className="bento-icon"><Cloud className="w-5 h-5" /></div>
            <div>
              <div className="bento-tag">Infrastructure</div>
              <h3>Cloud server + IP riêng — không cần máy của bạn</h3>
            </div>
          </div>
          <p>
            Bot chạy trên hạ tầng cloud do RokdBot vận hành. Mỗi khách IP riêng — không share, không pattern detect. Tắt máy, đi ngủ, đi du lịch — bot vẫn farm.
          </p>
          <div className="bento-bullet">
            <span className="bento-chip">IP riêng</span>
            <span className="bento-chip">Uptime ≥99%</span>
            <span className="bento-chip">AES-256 bảo mật login</span>
            <span className="bento-chip">VietQR kích hoạt 24h</span>
          </div>
        </div>

        {/* Row 3 */}
        <div className="bento">
          <div className="bento-icon"><Target className="w-5 h-5" /></div>
          <div className="bento-tag">KvK</div>
          <h3>Auto Honor farming</h3>
          <p>Hit barbarian, fortress, garrison mục tiêu để tối ưu Honor + Kill points cho KvK season.</p>
        </div>

        <div className="bento">
          <div className="bento-icon"><Zap className="w-5 h-5" /></div>
          <div className="bento-tag">City</div>
          <h3>Auto build & research</h3>
          <p>Auto-spend free speedup, auto-claim daily, auto-upgrade theo template VIP / F2P. Không bỏ lỡ reward.</p>
        </div>

        <div className="bento gold">
          <div className="bento-icon"><Wallet className="w-5 h-5" /></div>
          <div className="bento-tag">Pricing</div>
          <h3>Mua nhiều tháng giảm sâu</h3>
          <p>3 tháng ⋅ -10%. 6 tháng ⋅ -15%. 12 tháng ⋅ -25%. Liên hệ Discord #payment-help.</p>
        </div>

        <div className="bento">
          <div className="bento-icon"><Bell className="w-5 h-5" /></div>
          <div className="bento-tag">Support</div>
          <h3>Discord & Zalo · 24/7</h3>
          <p>Phản hồi &lt;5 phút giờ hành chính. Tra cứu đơn, báo lỗi, support kỹ thuật qua Discord/Zalo.</p>
        </div>
      </div>
    </section>
  );
}
