export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      <div className="hero-blob blob-3"></div>

      <h1 className="hero-title">
        <span className="word-your">Your</span> <span className="word-rhythm">rhythm,</span><br />
        <em>your flow.</em>
      </h1>

      <p className="hero-sub">
        A routines app designed for the way your brain actually works — with
        adaptive AI, visual schedules, and zero overwhelm.
      </p>

      <div className="hero-actions">
        <a href="#beta" className="btn-minimal">
          Join the Beta ⟶
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
                <div className="phone-greeting">Good morning, Alex ✦</div>
                <div className="phone-sub">Your flow looks great today</div>

                <div className="phone-card">
                  <div className="phone-card-label">Morning Routine</div>
                  <div className="phone-card-title">3 of 5 complete</div>
                  <div className="phone-progress-bar">
                    <div className="phone-progress-fill"></div>
                  </div>
                </div>

                <div className="phone-tasks">
                  <div className="phone-task">
                    <div className="task-dot rose"></div>
                    <span className="task-text">Take medication</span>
                    <span className="task-time">✓ 8:05</span>
                  </div>
                  <div className="phone-task">
                    <div className="task-dot sage"></div>
                    <span className="task-text">15 min movement</span>
                    <span className="task-time">Now</span>
                  </div>
                  <div className="phone-task">
                    <div className="task-dot lavender"></div>
                    <span className="task-text">Deep work session</span>
                    <span className="task-time">10:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-chip chip-left">
            <span className="chip-emoji">🧠</span> ADHD-friendly
          </div>
          <div className="hero-chip chip-right">
            <span className="chip-emoji">✨</span> AI adapts to you
          </div>
          <div className="hero-chip chip-bottom">
            <span className="chip-emoji">🌍</span> Made for LATAM
          </div>
        </div>
      </div>
    </section>
  );
}
