import type { Metadata } from "next";
import "./globals.css";
import { ShaderBackground } from "@/components/layout/ShaderBackground";
import { LanguageProvider } from "@/context/LanguageContext";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Flowē",
  description:
    "A routines app designed for the way your brain actually works — with adaptive AI, visual schedules, and zero overwhelm.",
  url: "https://www.useflowe.com",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/PreOrder",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.useflowe.com"),
  title: "Flowē — Your rhythm, your flow.",
  description:
    "A routines app designed for the way your brain actually works — with adaptive AI, visual schedules, and zero overwhelm.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Flowē — Your rhythm, your flow.",
    description:
      "A routines app designed for the way your brain actually works — with adaptive AI, visual schedules, and zero overwhelm.",
    url: "https://www.useflowe.com",
    siteName: "Flowē",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flowē — Your rhythm, your flow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowē — Your rhythm, your flow.",
    description:
      "A routines app designed for the way your brain actually works — with adaptive AI, visual schedules, and zero overwhelm.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Mono:wght@300;400&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <ShaderBackground />
          <main className="w-full relative z-10 flex flex-col">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
