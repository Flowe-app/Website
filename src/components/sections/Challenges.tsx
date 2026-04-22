import { useLanguage } from "@/context/LanguageContext";

export default function Challenges() {
  const { t } = useLanguage();
  
  return (
    <section className="challenges">
      <div className="challenges-bg-glow"></div>
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">{t.challenges.eyebrow}</p>
          <h2 
            className="section-title"
            dangerouslySetInnerHTML={{ __html: t.challenges.title }}
          />
        </div>

        <div className="challenges-grid">
          {t.challenges.items.map((item, index) => (
            <div 
              key={index}
              className={`challenge-card reveal challenge-card-${index + 1}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              }}
            >
              <div className="card-glow"></div>
              <div className="challenge-icon-wrap">
                <span className="challenge-icon">
                  {index === 0 && "🧠"}
                  {index === 1 && "⏳"}
                  {index === 2 && "✨"}
                </span>
              </div>
              <h3 className="challenge-card-title">{item.title}</h3>
              <p className="challenge-text">
                {item.description}
              </p>
              <div className="card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
