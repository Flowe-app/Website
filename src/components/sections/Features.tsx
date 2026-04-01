export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">What makes Flowē different</p>
          <h2 className="section-title">
            Built around
            <br />
            how you think
          </h2>
          <p className="section-body">
            No rigid systems, no guilt-tripping streaks. Just a calm, flexible
            tool that learns your patterns.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card rose reveal">
            <div className="feature-icon rose">🌊</div>
            <h3 className="feature-title">Adaptive Routines</h3>
            <p className="feature-body">
              AI learns your energy patterns across the day and week. Bad sleep
              last night? Flowē adjusts your morning routine automatically — no
              willpower needed.
            </p>
          </div>

          <div
            className="feature-card sage reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="feature-icon sage">🎨</div>
            <h3 className="feature-title">Visual Timelines</h3>
            <p className="feature-body">
              See your day at a glance with color-coded, icon-rich visual
              schedules. Designed specifically for minds that think in pictures,
              not lists.
            </p>
          </div>

          <div
            className="feature-card lavender reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="feature-icon lavender">💬</div>
            <h3 className="feature-title">Emotional Check-ins</h3>
            <p className="feature-body">
              A gentle pulse check before high-demand tasks. Flowē notices when
              you're overwhelmed and suggests breaks, modifications, or shorter
              alternatives.
            </p>
          </div>

          <div
            className="feature-card sage reveal"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="feature-icon sage">🔔</div>
            <h3 className="feature-title">Gentle Reminders</h3>
            <p className="feature-body">
              No harsh buzzers or red notifications. Soft, non-anxiety-inducing
              nudges that feel like a kind friend — not a school bell.
            </p>
          </div>

          <div
            className="feature-card rose reveal"
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="feature-icon rose">🤖</div>
            <h3 className="feature-title">AI Task Decomposition</h3>
            <p className="feature-body">
              Type "Write my report" and Flowē breaks it into 5-minute
              micro-steps. The overwhelm disappears. The doing begins.
            </p>
          </div>

          <div
            className="feature-card lavender reveal"
            style={{ transitionDelay: "0.5s" }}
          >
            <div className="feature-icon lavender">🌙</div>
            <h3 className="feature-title">Wind-Down Mode</h3>
            <p className="feature-body">
              A structured end-of-day ritual that helps your brain transition
              out of hyperfocus and actually rest. Sleep hygiene,
              neurodivergent-style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
