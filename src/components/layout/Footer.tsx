import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-brand flex items-center gap-2">
              <Image src="/logo-flowe.png" alt="Flowē Logo" width={32} height={32} className="object-contain" />
              <span>Flowē<span>.</span></span>
            </div>
            <p className="footer-tagline">
              Your rhythm, your flow.
              <br />A productivity app for neurodivergent minds.
            </p>
            <div className="footer-social">
              <a href="#" className="social-btn" title="Twitter/X">
                𝕏
              </a>
              <a href="#" className="social-btn" title="Instagram">
                ◻
              </a>
              <a href="#" className="social-btn" title="Discord">
                ◈
              </a>
              <a href="#" className="social-btn" title="GitHub">
                ⌥
              </a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Product</div>
            <ul className="footer-links">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#compare">Why Flowē</a>
              </li>
              <li>
                <a href="#beta">Join Beta</a>
              </li>
              <li>
                <a href="#">Roadmap</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Updates</div>
            <ul className="footer-links">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Dev Notes</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Info</div>
            <ul className="footer-links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2025 Flowē. All rights reserved.</span>
          <span className="footer-made">Made with care in Costa Rica 🇨🇷</span>
        </div>
      </div>
    </footer>
  );
}
