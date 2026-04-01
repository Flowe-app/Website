export default function Updates() {
  return (
    <section className="updates" id="updates">
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">Dev updates</p>
          <h2 className="section-title">Built in public</h2>
          <p className="section-body">
            Follow the journey from idea to product. We share everything —
            decisions, learnings, and honest progress.
          </p>
        </div>

        <div className="updates-grid">
          <a href="#" className="update-card reveal">
            <div className="update-banner rose-bg">🌊</div>
            <div className="update-body">
              <div className="update-tag">Announcement</div>
              <div className="update-title">
                Flowē is officially in development
              </div>
              <div className="update-excerpt">
                Introducing Flowē — a Flutter app for neurodivergent people who
                deserve better tools. Here's why we're building it and who it's
                for.
              </div>
              <div className="update-date">March 2025</div>
            </div>
          </a>

          <a
            href="#"
            className="update-card reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="update-banner sage-bg">🤖</div>
            <div className="update-body">
              <div className="update-tag">Feature Preview</div>
              <div className="update-title">
                How the AI adaptive engine works
              </div>
              <div className="update-excerpt">
                A deep dive into our RAG-powered routine engine — how Flowē
                learns your patterns without ever storing sensitive data.
              </div>
              <div className="update-date">March 2025</div>
            </div>
          </a>

          <a
            href="#"
            className="update-card reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="update-banner lav-bg">🎨</div>
            <div className="update-body">
              <div className="update-tag">Design</div>
              <div className="update-title">
                Designing for neurodivergent users: what we learned
              </div>
              <div className="update-excerpt">
                Our UX research process, the principles we adopted, and why
                most productivity apps fail this community from the first
                onboarding screen.
              </div>
              <div className="update-date">Coming soon</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
