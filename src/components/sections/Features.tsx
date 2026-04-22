import { useLanguage } from "@/context/LanguageContext";
import DynamicIcon from "@/components/ui/DynamicIcon";

const FEATURE_ICONS: ("wave" | "palette" | "chat" | "bell" | "robot" | "moon")[] = [
  "wave",
  "palette",
  "chat",
  "bell",
  "robot",
  "moon"
];

export default function Features() {
  const { t } = useLanguage();
  
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">{t.features.eyebrow}</p>
          <h2 
            className="section-title"
            dangerouslySetInnerHTML={{ __html: t.features.title }}
          />
          <p className="section-body">
            {t.features.body}
          </p>
        </div>

        <div className="features-grid">
          {t.features.items.map((item, index) => (
            <div 
              key={index}
              className={`feature-card ${index === 2 || index === 5 ? 'lavender' : index === 1 || index === 3 ? 'sage' : 'rose'} reveal`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`feature-icon ${index === 2 || index === 5 ? 'lavender' : index === 1 || index === 3 ? 'sage' : 'rose'}`}>
                <DynamicIcon type={FEATURE_ICONS[index]} />
              </div>
              <h3 className="feature-title">{item.title}</h3>
              <p className="feature-body">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
