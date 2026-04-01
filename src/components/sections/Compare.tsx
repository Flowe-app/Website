export default function Compare() {
  return (
    <section className="compare" id="compare">
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">Why Flowē</p>
          <h2 className="section-title">
            The app Tiimo
            <br />
            isn't giving you
          </h2>
          <p className="section-body">
            We built Flowē because great tools shouldn't be exclusive to iOS
            users in wealthy countries.
          </p>
        </div>

        <div className="compare-header reveal">
          <div className="compare-col-head">
            <div className="compare-brand">Feature</div>
          </div>
          <div className="compare-col-head">
            <div className="compare-brand">Tiimo</div>
            <div className="compare-tagline">iOS · €/month</div>
          </div>
          <div className="compare-col-head flowe">
            <div className="compare-brand flowe-brand">Flowē</div>
            <div className="compare-tagline">Android + iOS · LATAM pricing</div>
          </div>
        </div>

        <div className="compare-body reveal">
          <div className="compare-row">
            <div className="compare-cell feature-name">Android support</div>
            <div className="compare-cell">
              <span className="cross">✕</span> iOS only
            </div>
            <div className="compare-cell flowe-cell">
              <span className="check">✓</span> Yes
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-cell feature-name">LATAM pricing</div>
            <div className="compare-cell">
              <span className="cross">✕</span> ~$10–15/mo
            </div>
            <div className="compare-cell flowe-cell">
              <span className="check">✓</span> Affordable tiers
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-cell feature-name">
              Adaptive AI routines
            </div>
            <div className="compare-cell">
              <span className="cross">✕</span> Static
            </div>
            <div className="compare-cell flowe-cell">
              <span className="check">✓</span> Learns your patterns
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-cell feature-name">
              AI task decomposition
            </div>
            <div className="compare-cell">
              <span className="cross">✕</span> No
            </div>
            <div className="compare-cell flowe-cell">
              <span className="check">✓</span> Yes
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-cell feature-name">
              Emotional check-ins
            </div>
            <div className="compare-cell">
              <span className="cross">✕</span> No
            </div>
            <div className="compare-cell flowe-cell">
              <span className="check">✓</span> Yes
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-cell feature-name">
              Spanish-first support
            </div>
            <div className="compare-cell">
              <span className="cross">✕</span> English only
            </div>
            <div className="compare-cell flowe-cell">
              <span className="check">✓</span> ES + EN
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-cell feature-name">Open beta</div>
            <div className="compare-cell">
              <span className="cross">✕</span> Waitlist
            </div>
            <div className="compare-cell flowe-cell">
              <span className="check">✓</span> Free beta access
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
