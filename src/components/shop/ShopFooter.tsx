// V3 redesign: 4-column footer matching prototype.
// Pháp lý footer per chat decision: bỏ MST/địa chỉ, giữ link điều khoản + bảo mật.
export function ShopFooter() {
  return (
    <footer className="border-t border-white/10 mt-12 shop-footer">
      <div className="max-w-[1240px] mx-auto px-4 py-14">
        <div className="foot-grid-v3">
          <div className="foot-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="brand-mark-v3">R</div>
              <div className="brand-name-v3">RokdBot</div>
            </div>
            <p>
              Bot tự động hóa Rise of Kingdoms — Combo Spam+Luring+AOE độc quyền. Cloud server + IP riêng + uptime ≥99%. Made in Vietnam.
            </p>
          </div>

          <div className="foot-col">
            <h4>Sản phẩm</h4>
            <ul>
              <li><a href="#packages">Các gói</a></li>
              <li><a href="#features">Tính năng</a></li>
              <li><a href="/tra-cuu">Tra cứu đơn</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Cộng đồng</h4>
            <ul>
              <li>
                <a href="https://discord.gg/UPuFYCw4JG" target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://zalo.me/g/rqgqyd878" target="_blank" rel="noopener noreferrer">
                  Zalo
                </a>
              </li>
              <li>
                <a href="https://facebook.com/rokdbot" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Pháp lý</h4>
            <ul>
              <li><a href="/terms">Điều khoản</a></li>
              <li><a href="/privacy">Bảo mật</a></li>
              <li><a href="/disclaimer">Miễn trừ</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <div>© {new Date().getFullYear()} RokdBot. Không liên kết với Lilith Games / Rise of Kingdoms.</div>
          <div>v3.0 redesign · last updated {new Date().toLocaleDateString("vi-VN", { month: "short", year: "numeric" })}</div>
        </div>
      </div>
    </footer>
  );
}
