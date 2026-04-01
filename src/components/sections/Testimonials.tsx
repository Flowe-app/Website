export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">From the community</p>
          <h2 className="section-title">
            What beta testers
            <br />
            are already saying
          </h2>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card reveal">
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-text">
              Finally an app that doesn't make me feel bad for not completing my
              tasks. The AI just... adapts. It felt like it understood me on the
              first day.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar av-1">M</div>
              <div>
                <div className="author-name">Mariana R.</div>
                <div className="author-label">ADHD · México DF</div>
              </div>
            </div>
          </div>

          <div
            className="testimonial-card reveal"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-text">
              I've tried every productivity app. Flowē is the first one I didn't
              uninstall after a week. The visual timeline is exactly how my
              brain needs to see time.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar av-2">D</div>
              <div>
                <div className="author-name">Diego A.</div>
                <div className="author-label">Autism + ADHD · Bogotá</div>
              </div>
            </div>
          </div>

          <div
            className="testimonial-card reveal"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-text">
              Tiimo was too expensive and wasn't even on Android. Flowē does
              more, costs less, and the dev actually listens in the Discord.
              This is the one.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar av-3">S</div>
              <div>
                <div className="author-name">Sofía V.</div>
                <div className="author-label">Dyslexia · San José, CR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
