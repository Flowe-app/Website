import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="hero">
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      <div className="hero-blob blob-3"></div>

      <h1 className="hero-title">
        <span className="word-your">{t.hero.your}</span> <span className="word-rhythm">{t.hero.rhythm}</span><br />
        <em>{t.hero.yourFlow}</em>
      </h1>

      <p className="hero-sub">
        {t.hero.sub}
      </p>

      <div className="hero-actions">
        <a href="#beta" className="btn-minimal">
          {t.hero.cta}
        </a>
      </div>

      <div className="hero-mockup">
        <div style={{ position: "relative", display: "inline-block" }}>
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="phone-status">
                <span className="phone-time">9:41</span>
                <div className="phone-icons">
                  <div className="phone-icon-dot"></div>
                  <div className="phone-icon-dot"></div>
                  <div className="phone-icon-dot"></div>
                </div>
              </div>
              <div className="phone-content">
                <div className="phone-greeting">{t.hero.mockup.greeting}</div>
                <div className="phone-sub">{t.hero.mockup.sub}</div>

                <div className="phone-card">
                  <div className="phone-card-label">{t.hero.mockup.morningRoutine}</div>
                  <div className="phone-card-title">3 of 5 {t.hero.mockup.complete}</div>
                  <div className="phone-progress-bar">
                    <div className="phone-progress-fill"></div>
                  </div>
                </div>

                <div className="phone-tasks">
                  <div className="phone-task">
                    <div className="task-dot rose"></div>
                    <span className="task-text">{t.hero.mockup.tasks.meds}</span>
                    <span className="task-time">✓ 8:05</span>
                  </div>
                  <div className="phone-task">
                    <div className="task-dot sage"></div>
                    <span className="task-text">{t.hero.mockup.tasks.movement}</span>
                    <span className="task-time">{t.hero.mockup.tasks.now}</span>
                  </div>
                  <div className="phone-task">
                    <div className="task-dot lavender"></div>
                    <span className="task-text">{t.hero.mockup.tasks.deepWork}</span>
                    <span className="task-time">10:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-chip chip-left">
            <span className="chip-emoji">🧠</span> {t.hero.chips.adhd}
          </div>
          <div className="hero-chip chip-right">
            <span className="chip-emoji">✨</span> {t.hero.chips.ai}
          </div>
          <div className="hero-chip chip-bottom">
            <span className="chip-emoji">🌍</span> {t.hero.chips.latam}
          </div>
        </div>
      </div>
    </section>
  );
}
