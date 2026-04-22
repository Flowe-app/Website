"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function BetaCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "serverError">("idle");
  const { t } = useLanguage();

  const handleSupportClick = async () => {
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    
    setStatus("loading");
    
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        setStatus("serverError");
        return;
      }

      setStatus("success");
    } catch (err) {
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
          <div className="email-form reveal" id="betaForm">
            <input
              type="email"
              className="email-input"
              placeholder={t.beta.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSupportClick();
              }}
              style={{
                borderColor:
                  status === "error" ? "rgba(91,143,185,0.8)" : undefined,
              }}
            />
            <button className="btn-rose" onClick={handleSupportClick} disabled={status === "loading"}>
              {status === "loading" ? "..." : t.beta.button}
            </button>
          </div>
        ) : (
            <div
              className="form-success reveal visible"
              style={{ display: "flex", animation: "fadeUp 0.5s ease both" }}
            >
              ✅ {t.beta.success}
            </div>
          )}
  
          {status === "error" && (
            <p style={{ color: "rgba(91,143,185,0.8)", fontSize: "0.8rem", marginTop: "-0.5rem", marginBottom: "1rem" }}>
              {t.beta.error}
            </p>
          )}

          {status === "serverError" && (
            <p style={{ color: "var(--warning)", fontSize: "0.85rem", marginTop: "-0.5rem", marginBottom: "1rem", fontWeight: 600 }}>
              {/* Note: In a production app you might parse text from the API error JSON here */}
              {t.beta.serverError || "Error interno del servidor. Por favor intenta de nuevo."}
            </p>
          )}
  
          <p className="beta-note reveal">
            {t.beta.note}
          </p>
  
          <div className="beta-perks reveal">
            {t.beta.perks.map((perk, index) => (
              <div key={index} className="beta-perk" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ✅ {perk}
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
