import { useLanguage } from "@/context/LanguageContext";

export default function Updates() {
  const { t } = useLanguage();
  
  return (
    <section className="updates" id="updates">
      <div className="container">
        <div className="reveal">
          <p className="section-eyebrow">{t.updates.eyebrow}</p>
          <h2 className="section-title">{t.updates.title}</h2>
          <p className="section-body">
            {t.updates.body}
          </p>
        </div>

        <div className="updates-grid">
          {t.updates.posts.map((post, index) => (
            <a 
              key={index}
              href="#" 
              className="update-card reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`update-banner ${index === 2 ? 'lav-bg' : index === 1 ? 'sage-bg' : 'rose-bg'}`}>
                {index === 2 ? '🎨' : index === 1 ? '🤖' : '🌊'}
              </div>
              <div className="update-body">
                <div className="update-tag">{post.tag}</div>
                <div className="update-title">
                  {post.title}
                </div>
                <div className="update-excerpt">
                  {post.excerpt}
                </div>
                <div className="update-date">{post.date}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
