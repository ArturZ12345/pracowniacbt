import "@/styles/globals.css";
import { ThemeProvider } from "@/components/blocks/theme-provider";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gabinet psychoterapii poznawczo-behawioralnej - Bielsko Biała",
  description:
    "Gabinet psychoterapii Ewa Zając w Bielsko-Białej specjalizujący się w terapii poznawczo-behawioralnej (CBT) oraz psychoterapii uzależnień. Oferuję profesjonalną pomoc osobom zmagającym się z trudnościami w obszarze emocji, myśli i zachowań. Jestem certyfikowanym psychoterapeutą z certyfikatem PTTPB oraz specjalistą psychoterapii uzależnień - KBPN. Pracuję z osobami z zaburzeniami osobowości, depresją, lękiem, fobiami, zaburzeniami obsesyjno-kompulsyjnymi, a także uzależnionymi od substancji i czynności. Prowadzę terapię indywidualną, konsultacje dla par oraz sesje online. Terapia skoncentrowana na rozwiązaniu problemów, krótko- i długoterminowa, dostosowana do potrzeb klienta.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning={true}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="Uzależnienia, Zaburzenia osobowości, Psychoterapia Bielsko-Biała"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${inter.className} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex flex-col ">
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
