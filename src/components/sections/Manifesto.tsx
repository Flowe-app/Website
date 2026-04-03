import { useLanguage } from "@/context/LanguageContext";

export default function Manifesto() {
  const { t } = useLanguage();

  return (
    <section className="manifesto">
      <div className="container">
        <p 
          className="manifesto-quote"
          dangerouslySetInnerHTML={{ __html: t.manifesto.quote }}
        />
        <p className="manifesto-body">
          {t.manifesto.body}
        </p>
      </div>
    </section>
  );
}
