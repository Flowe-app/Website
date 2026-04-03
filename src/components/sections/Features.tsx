import { useLanguage } from "@/context/LanguageContext";
import { WaveIcon, PaletteIcon, ChatIcon, BellIcon, RobotIcon, MoonIcon } from "@/components/ui/Icons";

const FEATURE_ICONS = [
  <WaveIcon key="wave" />,
  <PaletteIcon key="palette" />,
  <ChatIcon key="chat" />,
  <BellIcon key="bell" />,
  <RobotIcon key="robot" />,
  <MoonIcon key="moon" />
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
                {FEATURE_ICONS[index]}
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
