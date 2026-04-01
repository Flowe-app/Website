"use client";

import { useState } from "react";

export default function BetaCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

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
        <h2 className="beta-title reveal">
          Be part of<br />
          <em>the first wave.</em>
        </h2>
        <p className="beta-body reveal">
          Join the Flowē beta and help shape the app. You'll get early access,
          a direct line to the team, and be the first to experience every new
          feature.
        </p>

        {status !== "success" ? (
          <div className="email-form reveal" id="betaForm">
            <input
              type="email"
              className="email-input"
              placeholder="your@email.com"
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
              Join Beta →
            </button>
          </div>
        ) : (
          <div
            className="form-success reveal visible"
            style={{ display: "flex", animation: "fadeUp 0.5s ease both" }}
          >
            <span>✓</span> You're on the list! We'll be in touch soon.
          </div>
        )}

        {status === "error" && (
          <p style={{ color: "rgba(91,143,185,0.8)", fontSize: "0.8rem", marginTop: "-0.5rem", marginBottom: "1rem" }}>
            Please enter a valid email
          </p>
        )}

        <p className="beta-note reveal">
          We respect your inbox. No spam, ever.
        </p>

        <div className="beta-perks reveal">
          <div className="beta-perk">
            <span className="perk-check">✓</span> Free during beta
          </div>
          <div className="beta-perk">
            <span className="perk-check">✓</span> Android & iOS
          </div>
          <div className="beta-perk">
            <span className="perk-check">✓</span> Shape the product
          </div>
          <div className="beta-perk">
            <span className="perk-check">✓</span> Discord community
          </div>
        </div>
      </div>
    </section>
  );
}
