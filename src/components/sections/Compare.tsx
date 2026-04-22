import { useLanguage } from "@/context/LanguageContext";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function Compare() {
  const { t } = useLanguage();
  
  return (
    <section className="compare" id="compare">
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">{t.compare.eyebrow}</p>
          <h2 
            className="section-title"
            dangerouslySetInnerHTML={{ __html: t.compare.title }}
          />
          <p className="section-body">
            {t.compare.body}
          </p>
        </div>

        <div className="compare-header reveal">
          <div className="compare-col-head">
            <div className="compare-brand">{t.compare.header[0]}</div>
          </div>
          <div className="compare-col-head">
            <div className="compare-brand">{t.compare.header[1]}</div>
            <div className="compare-tagline">{t.compare.subtitles[0]}</div>
          </div>
          <div className="compare-col-head flowe">
            <div className="compare-brand flowe-brand">{t.compare.header[2]}</div>
            <div className="compare-tagline">{t.compare.subtitles[1]}</div>
          </div>
        </div>

        <div className="compare-body reveal">
          {t.compare.rows.map((row, index) => (
            <div key={index} className="compare-row">
              <div className="compare-cell feature-name">{row.name}</div>
              <div className="compare-cell">
                {!row.check && <DynamicIcon type="cross" className="compare-icon-cross" />} {row.tiimo}
              </div>
              <div className="compare-cell flowe-cell">
                {row.check && <DynamicIcon type="check" className="compare-icon-check" />} {row.flowe}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
