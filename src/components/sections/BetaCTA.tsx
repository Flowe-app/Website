"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import DynamicIcon from "@/components/ui/DynamicIcon";

export default function BetaCTA() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "serverError">("idle");
  const { t } = useLanguage();

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      });

      if (!res.ok) {
        setStatus("serverError");
        return;
      }

      setStatus("success");
    } catch (_err) {
      setStatus("serverError");
    }
  };

  return (
    <section className="beta-cta" id="beta">
      <div className="beta-inner">
        <h2
          className="beta-title reveal"
          dangerouslySetInnerHTML={{ __html: t.beta.title }}
        />
        <p className="beta-body reveal">
          {t.beta.body}
        </p>

        {status !== "success" ? (
          <form className="email-form reveal" id="betaForm" onSubmit={handleSubmit}>
            <label htmlFor="beta-email" className="sr-only">
              {t.beta.placeholder}
            </label>
            <input
              id="beta-email"
              type="email"
              className="email-input"
              placeholder={t.beta.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              style={{
                borderColor:
                  status === "error" ? "rgba(91,143,185,0.8)" : undefined,
              }}
            />
            <button
              className="btn-rose"
              type="submit"
              disabled={status === "loading" || !consent}
            >
              {status === "loading" ? "..." : t.beta.button}
            </button>
            <div className="consent-row">
              <input
                id="beta-consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
              />
              <label
                htmlFor="beta-consent"
                dangerouslySetInnerHTML={{ __html: t.beta.consent }}
              />
            </div>
          </form>
        ) : (
          <div
            className="form-success reveal visible"
            style={{ display: "flex", animation: "fadeUp 0.5s ease both" }}
          >
            <DynamicIcon type="check" /> {t.beta.success}
          </div>
        )}

        {status === "error" && (
          <p style={{ color: "rgba(91,143,185,0.8)", fontSize: "0.8rem", marginTop: "-0.5rem", marginBottom: "1rem" }}>
            {t.beta.error}
          </p>
        )}

        {status === "serverError" && (
          <p style={{ color: "var(--warning)", fontSize: "0.85rem", marginTop: "-0.5rem", marginBottom: "1rem", fontWeight: 600 }}>
            {t.beta.serverError || "Error interno del servidor. Por favor intenta de nuevo."}
          </p>
        )}

        <p className="age-note reveal">{t.beta.ageNote}</p>

        <p className="beta-note reveal">
          {t.beta.note}
        </p>

        <div className="beta-perks reveal">
          {t.beta.perks.map((perk, index) => (
            <div key={index} className="beta-perk" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <DynamicIcon type="check" /> {perk}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
