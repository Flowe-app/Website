"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsOfService() {
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

        {lang === "en" ? <TermsEN /> : <TermsES />}
      </div>
      <Footer />
    </>
  );
}

function TermsEN() {
  return (
    <>
      <h1>Terms of Service</h1>
      <p className="legal-meta">Version 1.0 — May 2026</p>

      <h2>1. Nature of the service</h2>
      <p>
        Flowē is a pre-launch product currently in development. By joining the waitlist
        you are expressing interest in a future product — you are not purchasing,
        subscribing to, or receiving any software or service at this time. We make no
        guarantees about the final product, its features, pricing, or launch date.
      </p>

      <h2>2. Eligibility</h2>
      <p>
        You confirm that you are at least 13 years old. If you are under 16 and located
        in the European Union, you confirm that you have obtained the required parental
        or guardian consent.
      </p>

      <h2>3. Acceptable use</h2>
      <p>By joining the waitlist you agree not to:</p>
      <ul>
        <li>Provide false or misleading information</li>
        <li>Use automated tools to submit multiple entries</li>
        <li>Attempt to access systems or data beyond your authorisation</li>
      </ul>

      <h2>4. Communications</h2>
      <p>
        By joining the waitlist and providing consent, you agree to receive email
        updates about Flowē. You may unsubscribe at any time by contacting us at{" "}
        <a href="mailto:privacy@useflowe.com">privacy@useflowe.com</a> or by
        clicking the unsubscribe link in any email we send.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        All content on this website — including text, graphics, logos, and code — is
        the property of Flowē and protected by applicable intellectual property laws.
        You may not reproduce or distribute it without prior written permission.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        This website is provided &quot;as is&quot; without warranty of any kind. To the
        fullest extent permitted by applicable law, Flowē is not liable for any indirect,
        incidental, or consequential damages arising from your use of this site or the
        waitlist service.
      </p>

      <h2>7. Governing law</h2>
      <p>
        These terms are governed by the laws of Brazil, where our infrastructure is
        hosted. Any disputes will be subject to the exclusive jurisdiction of the courts
        of Brazil. Nothing in these terms limits your rights under applicable consumer
        protection or data protection laws in your country of residence.
      </p>

      <h2>8. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. We will update the version number
        and date above when we do. Continued use of the waitlist after changes means
        you accept the updated terms.
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions?{" "}
        <a href="mailto:privacy@useflowe.com">privacy@useflowe.com</a>
      </p>
    </>
  );
}

function TermsES() {
  return (
    <>
      <h1>Términos de Servicio</h1>
      <p className="legal-meta">Versión 1.0 — Mayo 2026</p>

      <h2>1. Naturaleza del servicio</h2>
      <p>
        Flowē es un producto en fase de desarrollo previo al lanzamiento. Al unirte a
        la lista de espera expresas interés en un producto futuro — no estás comprando,
        suscribiéndote ni recibiendo ningún software o servicio en este momento. No
        ofrecemos garantías sobre el producto final, sus funciones, precios ni fecha
        de lanzamiento.
      </p>

      <h2>2. Elegibilidad</h2>
      <p>
        Confirmas que tienes al menos 13 años. Si tienes menos de 16 años y te
        encuentras en la Unión Europea, confirmas que has obtenido el consentimiento
        de tu padre, madre o tutor legal.
      </p>

      <h2>3. Uso aceptable</h2>
      <p>Al unirte a la lista de espera aceptas no:</p>
      <ul>
        <li>Proporcionar información falsa o engañosa</li>
        <li>Usar herramientas automatizadas para enviar múltiples registros</li>
        <li>Intentar acceder a sistemas o datos más allá de tu autorización</li>
      </ul>

      <h2>4. Comunicaciones</h2>
      <p>
        Al unirte a la lista de espera y dar tu consentimiento, aceptas recibir
        actualizaciones por correo sobre Flowē. Puedes cancelar la suscripción en
        cualquier momento escribiendo a{" "}
        <a href="mailto:privacy@useflowe.com">privacy@useflowe.com</a> o haciendo
        clic en el enlace de baja en cualquier correo que te enviemos.
      </p>

      <h2>5. Propiedad intelectual</h2>
      <p>
        Todo el contenido de este sitio web — incluyendo textos, gráficos, logos y
        código — es propiedad de Flowē y está protegido por las leyes de propiedad
        intelectual aplicables. No puedes reproducirlo ni distribuirlo sin permiso
        previo por escrito.
      </p>

      <h2>6. Limitación de responsabilidad</h2>
      <p>
        Este sitio web se proporciona &quot;tal cual&quot; sin garantía de ningún tipo.
        En la medida máxima permitida por la ley aplicable, Flowē no es responsable
        de daños indirectos, incidentales o consecuentes derivados del uso de este
        sitio o del servicio de lista de espera.
      </p>

      <h2>7. Legislación aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de Brasil, donde se aloja nuestra
        infraestructura. Cualquier disputa estará sujeta a la jurisdicción exclusiva
        de los tribunales de Brasil. Nada en estos términos limita tus derechos bajo
        las leyes de protección al consumidor o protección de datos aplicables en tu
        país de residencia.
      </p>

      <h2>8. Cambios en estos términos</h2>
      <p>
        Podemos actualizar estos términos de vez en cuando. Actualizaremos el número
        de versión y la fecha indicada arriba cuando lo hagamos. El uso continuado de
        la lista de espera tras los cambios implica la aceptación de los términos
        actualizados.
      </p>

      <h2>9. Contacto</h2>
      <p>
        ¿Preguntas?{" "}
        <a href="mailto:privacy@useflowe.com">privacy@useflowe.com</a>
      </p>
    </>
  );
}
