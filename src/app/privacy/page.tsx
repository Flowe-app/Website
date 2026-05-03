"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<"en" | "es">("en");

  return (
    <>
      <Navbar />
      <div className="legal-page">
        <div className="legal-lang-toggle">
          <button
            className={`legal-lang-btn${lang === "en" ? " active" : ""}`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            className={`legal-lang-btn${lang === "es" ? " active" : ""}`}
            onClick={() => setLang("es")}
          >
            ES
          </button>
        </div>

        {lang === "en" ? <PrivacyEN /> : <PrivacyES />}
      </div>
      <Footer />
    </>
  );
}

function PrivacyEN() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p className="legal-meta">Version 1.0 — May 2026</p>

      <h2>1. Who we are</h2>
      <p>
        Flowē (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website{" "}
        <a href="https://www.useflowe.com">www.useflowe.com</a>. We are the data
        controller responsible for your personal information. Contact us at{" "}
        <a href="mailto:privacy@useflowe.com">privacy@useflowe.com</a>.
      </p>

      <h2>2. What we collect</h2>
      <p>
        When you join the waitlist, we collect your <strong>email address</strong> and
        a record of your consent (timestamp and policy version). We collect nothing
        else — no name, no device data, no cookies beyond what is strictly necessary
        for the site to function.
      </p>

      <h2>3. Why we collect it</h2>
      <p>
        We use your email solely to notify you about beta access, product updates, and
        Flowē launch news. We will never use it for unrelated marketing or share it
        with third parties for their own marketing purposes.
      </p>

      <h2>4. Legal basis</h2>
      <p>
        We process your email on the basis of your freely given, informed consent
        (GDPR Art. 6(1)(a) / LGPD Art. 7(I)). You may withdraw this consent at any
        time by emailing{" "}
        <a href="mailto:privacy@useflowe.com">privacy@useflowe.com</a> and we will
        delete your data within 30 days.
      </p>

      <h2>5. How long we keep your data</h2>
      <p>
        We retain your email until you request removal, or until 12 months after the
        public launch of Flowē — whichever comes first.
      </p>

      <h2>6. Data processor</h2>
      <p>
        Your email is stored securely on{" "}
        <a href="https://supabase.com" target="_blank" rel="noopener noreferrer">
          Supabase
        </a>
        , our database provider. Supabase acts as a data processor under our
        instructions and is bound by a{" "}
        <a
          href="https://supabase.com/legal/dpa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Data Processing Agreement
        </a>
        . No other third parties have access to your data.
      </p>

      <h2>7. Your rights</h2>
      <p>
        Under GDPR and LGPD you have the right to:
      </p>
      <ul>
        <li><strong>Access</strong> — request a copy of the data we hold about you</li>
        <li><strong>Rectification</strong> — ask us to correct inaccurate data</li>
        <li><strong>Erasure</strong> — ask us to delete your data (&quot;right to be forgotten&quot;)</li>
        <li><strong>Portability</strong> — receive your data in a machine-readable format</li>
        <li><strong>Withdraw consent</strong> — opt out at any time without penalty</li>
      </ul>
      <p>
        To exercise any of these rights, email{" "}
        <a href="mailto:privacy@useflowe.com">privacy@useflowe.com</a>. We will
        respond within 30 days.
      </p>

      <h2>8. Data security</h2>
      <p>
        Data is stored in an encrypted Supabase database with access restricted to
        authorised team members only. We use HTTPS on all connections.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        If we make material changes, we will update the version number and date at the
        top of this page. Continued use of the waitlist after changes constitutes
        acceptance of the updated policy.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about this policy?{" "}
        <a href="mailto:privacy@useflowe.com">privacy@useflowe.com</a>
      </p>
    </>
  );
}

function PrivacyES() {
  return (
    <>
      <h1>Política de Privacidad</h1>
      <p className="legal-meta">Versión 1.0 — Mayo 2026</p>

      <h2>1. Quiénes somos</h2>
      <p>
        Flowē (&quot;nosotros&quot;) opera el sitio web{" "}
        <a href="https://www.useflowe.com">www.useflowe.com</a>. Somos el responsable
        del tratamiento de tus datos personales. Puedes contactarnos en{" "}
        <a href="mailto:privacy@useflowe.com">privacy@useflowe.com</a>.
      </p>

      <h2>2. Qué recopilamos</h2>
      <p>
        Al unirte a la lista de espera, recopilamos tu <strong>dirección de correo
        electrónico</strong> y un registro de tu consentimiento (fecha y versión de la
        política). No recopilamos nada más — sin nombre, sin datos del dispositivo, sin
        cookies más allá de las estrictamente necesarias para el funcionamiento del
        sitio.
      </p>

      <h2>3. Para qué lo usamos</h2>
      <p>
        Usamos tu correo únicamente para notificarte sobre el acceso beta, actualizaciones
        del producto y el lanzamiento de Flowē. Nunca lo usaremos para marketing no
        relacionado ni lo compartiremos con terceros para sus propios fines de marketing.
      </p>

      <h2>4. Base legal</h2>
      <p>
        Tratamos tu correo con base en tu consentimiento libre, informado y expreso
        (LGPD Art. 7(I) / GDPR Art. 6(1)(a)). Puedes retirar este consentimiento en
        cualquier momento escribiendo a{" "}
        <a href="mailto:privacy@useflowe.com">privacy@useflowe.com</a> y eliminaremos
        tus datos en un plazo de 30 días.
      </p>

      <h2>5. Por cuánto tiempo guardamos tus datos</h2>
      <p>
        Conservamos tu correo hasta que solicites su eliminación, o hasta 12 meses
        después del lanzamiento público de Flowē — lo que ocurra primero.
      </p>

      <h2>6. Procesador de datos</h2>
      <p>
        Tu correo se almacena de forma segura en{" "}
        <a href="https://supabase.com" target="_blank" rel="noopener noreferrer">
          Supabase
        </a>
        , nuestro proveedor de base de datos. Supabase actúa como encargado del
        tratamiento bajo nuestras instrucciones y está vinculado por un{" "}
        <a
          href="https://supabase.com/legal/dpa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acuerdo de Tratamiento de Datos
        </a>
        . Ningún otro tercero tiene acceso a tus datos.
      </p>

      <h2>7. Tus derechos</h2>
      <p>Bajo la LGPD y el GDPR tienes derecho a:</p>
      <ul>
        <li><strong>Acceso</strong> — solicitar una copia de los datos que tenemos sobre ti</li>
        <li><strong>Rectificación</strong> — pedirnos que corrijamos datos inexactos</li>
        <li><strong>Supresión</strong> — pedirnos que eliminemos tus datos</li>
        <li><strong>Portabilidad</strong> — recibir tus datos en un formato legible por máquina</li>
        <li><strong>Retirar el consentimiento</strong> — en cualquier momento y sin penalización</li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, escríbenos a{" "}
        <a href="mailto:privacy@useflowe.com">privacy@useflowe.com</a>. Responderemos
        en un plazo de 30 días.
      </p>

      <h2>8. Seguridad de los datos</h2>
      <p>
        Los datos se almacenan en una base de datos Supabase cifrada, con acceso
        restringido únicamente a los miembros autorizados del equipo. Usamos HTTPS en
        todas las conexiones.
      </p>

      <h2>9. Cambios en esta política</h2>
      <p>
        Si realizamos cambios importantes, actualizaremos el número de versión y la
        fecha en la parte superior de esta página. El uso continuado de la lista de
        espera tras los cambios implica la aceptación de la política actualizada.
      </p>

      <h2>10. Contacto</h2>
      <p>
        ¿Preguntas sobre esta política?{" "}
        <a href="mailto:privacy@useflowe.com">privacy@useflowe.com</a>
      </p>
    </>
  );
}
