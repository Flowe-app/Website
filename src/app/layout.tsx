import type { Metadata } from "next";
import "./globals.css";
import { ShaderBackground } from "@/components/layout/ShaderBackground";

export const metadata: Metadata = {
  title: "Flowē — Your rhythm, your flow.",
  description: "A routines app designed for the way your brain actually works — with adaptive AI, visual schedules, and zero overwhelm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body>
        <ShaderBackground />
        <main className="w-full relative z-10 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
