import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { TwitterIcon, InstagramIcon, DiscordIcon, GithubIcon } from "@/components/ui/Icons";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand flex items-center gap-2">
              <Image src="/logo-flowe.png" alt="Flowē Logo" width={32} height={32} className="object-contain" />
              <span>Flowē<span>.</span></span>
            </div>
            <p 
              className="footer-tagline"
              dangerouslySetInnerHTML={{ __html: t.footer.tagline }}
            />
            <div className="footer-social">
              <a href="#" className="social-link" title="Twitter/X">
                <TwitterIcon />
              </a>
              <a href="#" className="social-link" title="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="social-link" title="Discord">
                <DiscordIcon />
              </a>
              <a href="#" className="social-link" title="GitHub">
                <GithubIcon />
              </a>
            </div>
          </div>

          <div className="footer-nav-grid">
            <div>
              <div className="footer-col-title">{t.footer.cols.product.title}</div>
              <ul className="footer-links">
                <li><a href="#features">{t.footer.cols.product.links[0]}</a></li>
                <li><a href="#compare">{t.footer.cols.product.links[1]}</a></li>
                <li><a href="#beta">{t.footer.cols.product.links[2]}</a></li>
                <li><a href="#">{t.footer.cols.product.links[3]}</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">{t.footer.cols.updates.title}</div>
              <ul className="footer-links">
                <li><a href="#">{t.footer.cols.updates.links[0]}</a></li>
                <li><a href="#">{t.footer.cols.updates.links[1]}</a></li>
                <li><a href="#">{t.footer.cols.updates.links[2]}</a></li>
                <li><a href="#">{t.footer.cols.updates.links[3]}</a></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">{t.footer.cols.info.title}</div>
              <ul className="footer-links">
                <li><a href="#">{t.footer.cols.info.links[0]}</a></li>
                <li><a href="#">{t.footer.cols.info.links[1]}</a></li>
                <li><a href="#">{t.footer.cols.info.links[2]}</a></li>
                <li><a href="#">{t.footer.cols.info.links[3]}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-line"></div>
          <div className="footer-bottom-content">
            <span className="footer-copy">{t.footer.copy}</span>
            <span className="footer-made">{t.footer.made}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
