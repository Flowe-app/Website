"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function BetaCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { t } = useLanguage();

  const handleSupportClick = () => {
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
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
            <button className="btn-rose" onClick={handleSupportClick}>
              {t.beta.button}
            </button>
          </div>
        ) : (
          <div
            className="form-success reveal visible"
            style={{ display: "flex", animation: "fadeUp 0.5s ease both" }}
          >
            <span>✓</span> {t.beta.success}
          </div>
        )}

        {status === "error" && (
          <p style={{ color: "rgba(91,143,185,0.8)", fontSize: "0.8rem", marginTop: "-0.5rem", marginBottom: "1rem" }}>
            {t.beta.error}
          </p>
        )}

        <p className="beta-note reveal">
          {t.beta.note}
        </p>

        <div className="beta-perks reveal">
          {t.beta.perks.map((perk, index) => (
            <div key={index} className="beta-perk">
              <span className="perk-check">✓</span> {perk}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
