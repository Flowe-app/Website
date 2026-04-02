import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  
  return (
    <section className="testimonials">
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">{t.testimonials.eyebrow}</p>
          <h2 
            className="section-title"
            dangerouslySetInnerHTML={{ __html: t.testimonials.title }}
          />
        </div>

        <div className="testimonials-grid">
          {t.testimonials.items.map((item, index) => (
            <div 
              key={index}
              className="testimonial-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="testimonial-quote-mark">"</div>
              <p className="testimonial-text">
                {item.text}
              </p>
              <div className="testimonial-author">
                <div className={`author-avatar av-${index + 1}`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="author-name">{item.name}</div>
                  <div className="author-label">{item.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
