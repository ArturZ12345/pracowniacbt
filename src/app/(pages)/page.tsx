import { Merriweather } from "next/font/google";
import Image from "next/image";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export default function HomePage() {
  return (
    <section className="bg-[#E8F0F0] text-[#134F5C]">
      {/* Główna sekcja z tłem */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/bg-1.webp"
          alt="Sky background"
          fill
          className="absolute inset-0 z-0 brightness-125 filter blur-sm opacity-30"
        />
        <div className="relative z-10 flex h-[80%] w-full justify-center">
          <div className="text-center">
            <h1
              className={`mb-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-[#134F5C] ${merriweather.className} italic`}
            >
              <div className="flex flex-col items-center">
                <span className="block z-10">Gabinet psychoterapii</span>
                <span className="block w-full max-w-lg border-b-[16px] border-solid border-[#69A297]"></span>
              </div>
              <span className="block mt-2 pt-20">poznawczo-behawioralnej</span>
              <span className="block mt-2 pt-8">Psychoterapia uzależnień</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Sekcja informacyjna */}
      <section
        className={`text-center py-16 px-4 max-w-4xl mx-auto ${merriweather.className} text-3xl leading-loose`}
      >
        <p className="font-bold text-black">
          Psychoterapia trudności funkcjonowania w obszarze myśli, emocji i
          zachowań. Oferuję profesjonalną informację, wsparcie i pomoc.
        </p>
      </section>

      {/* Sekcja o mnie */}
      <section
        className={`py-16 px-4 max-w-5xl mx-auto ${merriweather.className} text-xl leading-loose`}
      >
        <p className="font-bold text-2xl">O mnie</p>
        <p className="pt-2 font-semibold">Kompetencje:</p>
        <ul className="font-normal">
          <li>
            - Certyfikat psychoterapeuty terapii poznawczo-behawioralnej
            wzbogaconej podejściem terapii schematu mindfulness i akceptacji -
            w duchu dialogu motywującego - nr certyfikatu PTTPB 1510
          </li>
          <li>
            - Ukończone szkolenie akredytowane przez Międzynarodowe Towarzystwo
            Terapii Schematu (ISST) przygotowujące do certyfikatu terapeuty
            schematu ISST
          </li>
          <li>
            - Certyfikat specjalisty psychoterapii uzależnień -SP 1356/2017
          </li>
        </ul>
        <p className="pt-2 font-semibold">
          Swoją pracę poddaję systematycznej superwizji, co gwarantuje jakość i
          profesjonalizm podejmowanych działań.
        </p>
      </section>

      {/* Sekcja kontaktowa */}
      <section className="py-16 max-w-5xl mx-auto text-xl leading-loose">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative h-[300px] md:h-[500px]">
            <Image
              src="/mapka.png"
              alt="Mapa lokalizacji gabinetu psychoterapii"
              fill
              className="absolute inset-0 object-contain"
            />
          </div>
          <div>
            <p className="mb-4">
              W celu umówienia spotkania proszę o kontakt telefoniczny lub
              email:
            </p>
            <p className="font-bold">Pracownia Psychoterapii</p>
            <p className="font-bold mb-2">Poznawczo-Behawioralnej</p>
            <p>
              <a href="tel:+48515419680" className="font-bold text-primary">
                tel: 515 419 680
              </a>
            </p>
            <p>
              <a
                href="mailto:ewazajaclekawa@gmail.com"
                className="font-bold text-primary"
              >
                mail: ewazajaclekawa@gmail.com
              </a>
            </p>
            <p className="mt-4">ul. T. Sixta 5/202</p>
            <p>43-300 Bielsko-Biała</p>
          </div>
        </div>
      </section>
    </section>
  );
}

