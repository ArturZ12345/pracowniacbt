import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import SiteHeader from "@/components/blocks/site-header";
import ScrollReveal from "@/components/blocks/scroll-reveal";

// Serif o wysokim kontraście do nagłówków + neutralny grotesk do treści
const display = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psychoterapiacbt.org.pl"),
  title: "Gabinet psychoterapii poznawczo-behawioralnej - Bielsko Biała",
  description:
    "Gabinet psychoterapii Ewa Zając w Bielsko-Białej specjalizujący się w terapii poznawczo-behawioralnej (CBT) oraz psychoterapii uzależnień. Oferuję profesjonalną pomoc osobom zmagającym się z trudnościami w obszarze emocji, myśli i zachowań. Jestem certyfikowanym psychoterapeutą z certyfikatem PTTPB oraz specjalistą psychoterapii uzależnień - KBPN. Pracuję z osobami z zaburzeniami osobowości, depresją, lękiem, fobiami, zaburzeniami obsesyjno-kompulsyjnymi, a także uzależnionymi od substancji i czynności. Prowadzę terapię indywidualną, konsultacje dla par oraz sesje online. Terapia skoncentrowana na rozwiązaniu problemów, krótko- i długoterminowa, dostosowana do potrzeb klienta.",
  keywords: [
    "Ewa Zając",
    "Depresja",
    "Zaburzenia lękowe",
    "Natręctwa",
    "Poczucie własnej wartości",
    "Rozwój osobisty",
    "Relacje",
    "Kryzysy",
    "Uzależnienia",
    "Zaburzenia osobowości",
    "Psychoterapia Bielsko-Biała",
    "Zając",
    "Ewa Zając Łękawa",
    "Łękawa",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF2EB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-espresso antialiased">
        {/* Ustawiane synchronicznie: animacje wejścia działają tylko z JS,
            bez JS cała treść jest od razu widoczna. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <SiteHeader />
        <main>{children}</main>
        <ScrollReveal />
      </body>
    </html>
  );
}
