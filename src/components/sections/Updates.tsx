import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Updates() {
  const { t } = useLanguage();
  
  const postImages = [
    "/updates/update-dev-1.png",
    "/updates/update-ai-2.png",
    "/updates/update-design-3.png"
  ];

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
              <div className="update-banner">
                <Image 
                  src={postImages[index]} 
                  alt={post.title}
                  fill
                  className="object-cover"
                />
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
