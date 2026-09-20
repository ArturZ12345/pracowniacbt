import Image from "next/image";
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import ContactMap from "@/components/blocks/contact-map";

const PHONE = "515 419 680";
const EMAIL = "ewazajaclekawa@gmail.com";

/** Krótkie opóźnienie startu animacji — do kaskadowego odsłaniania list. */
const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

const PRACUJE = [
  "z osobami z zaburzeniami osobowości,",
  "z zaburzeniami nastroju (m.in. depresyjne)",
  "w kryzysach życiowych, adaptacyjnych, pourazowych",
  "uzależnionymi od substancji psychoaktywnych, a także w obszarze uzależnień behawioralnych, czynnościowych",
  "ASD, ADHD",
];

const A_TAKZE = [
  "w trudnych sytuacjach życiowych uniemożliwiających funkcjonalne rozwiązywanie problemów",
  "w konfliktach w relacjach",
  "w sytuacji poczucia braku wpływu, kontroli nad istotnymi obszarami życia",
  "w trudnościach związanych z aktywnością zawodową ( wypalenie zawodowe, konflikty)",
  "w sytuacji poczucia bezsilności, niemożności podejmowania działań i samodzielnego rozwiązywania problemów",
];

const CERTYFIKATY = [
  "Certyfikat psychoterapeuty terapii poznawczo-behawioralnej wzbogaconej podejściem terapii schematu mindfulness i akceptacji - w duchu dialogu motywującego - nr certyfikatu PTTPB 1510",
  "Ukończone szkolenie akredytowane przez Międzynarodowe Towarzystwo Terapii Schematu (ISST) przygotowujące do certyfikatu terapeuty schematu ISST",
  "Certyfikat specjalisty psychoterapii uzależnień -SP 1356/2017",
];

const CENNIK = [
  {
    opis: "Spotkanie indywidualne trwa 50 minut.",
    etykieta: "Cena",
    kwota: "200 zł.",
  },
  {
    opis: "Spotkanie dla par, rodzinne trwa od 50 do 70 minut.",
    etykieta: "Cena",
    kwota: "250 zł.",
  },
];

const DOSWIADCZENIE = [
  "Prowadzenie psychoterapii indywidualnej",
  "Psychoterapeuta w terapii grupowej oraz w społeczności terapeutycznej",
  "Co-trener treningów interpersonalnych (w szkoleniu PTZN Oddz. w Katowicach)",
  "Terapeuta socjoterapii dzieci i młodzieży",
];

export default function HomePage() {
  return (
    <>
      {/* ——— HERO ——— */}
      <section
        id="top"
        className="on-dark relative flex min-h-[92vh] items-end overflow-hidden rounded-b-[20px] bg-espresso pb-16 pt-36 sm:pb-24 lg:min-h-screen"
      >
        <Image
          src="/zdjecia/hero-rozmowa.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-drift-slow object-cover object-[center_38%]"
        />
        {/* Przyciemnienie pod tekstem — pionowy gradient plus zagęszczenie od lewej,
            żeby nagłówek czytał się niezależnie od jasności zdjęcia */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/85 to-espresso/55"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/30 to-transparent"
        />

        <div className="container relative z-10">
          <p
            className="eyebrow animate-rise-in text-peach"
            style={{ animationDelay: "120ms" }}
          >
            Bielsko-Biała
          </p>

          <h1 className="mt-6 font-display text-peach">
            <span
              className="block animate-rise-in text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
              style={{ animationDelay: "220ms" }}
            >
              Pracownia psychoterapii
            </span>
            <span
              className="mt-2 block animate-rise-in text-[2.6rem] italic leading-[1.05] sm:text-6xl lg:text-7xl xl:text-[5.2rem]"
              style={{ animationDelay: "340ms" }}
            >
              Ewa Zając-Łękawa
            </span>
          </h1>

          <span
            aria-hidden="true"
            className="mt-8 block h-[6px] w-full max-w-[420px] origin-left animate-grow-x rounded-full bg-coral"
            style={{ animationDelay: "560ms" }}
          />

          <div
            className="mt-8 animate-rise-in space-y-1 font-display text-xl text-peach sm:text-2xl lg:text-[1.75rem]"
            style={{ animationDelay: "660ms" }}
          >
            <p>Psychoterapia poznawczo-behawioralna</p>
            <p>Psychoterapia uzależnień</p>
          </div>

          <div
            className="mt-12 flex animate-rise-in flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "780ms" }}
          >
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="btn-coral">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Umów wizytę
            </a>
            <a href="#oferta" className="btn-outline-cream">
              Poznaj ofertę
            </a>
          </div>
        </div>

        <a
          href="#wstep"
          aria-label="Przewiń do treści"
          className="absolute bottom-10 right-6 z-10 hidden text-peach transition-colors hover:text-coral lg:right-12 lg:block"
        >
          <ArrowDown className="h-7 w-7 animate-cue-bounce" aria-hidden="true" />
        </a>
      </section>

      {/* ——— WSTĘP ——— */}
      <section id="wstep" className="bg-cream py-24 sm:py-32">
        <div className="container max-w-4xl">
          <p
            data-reveal
            className="font-display text-2xl leading-[1.5] text-espresso sm:text-3xl lg:text-[2.35rem] lg:leading-[1.45]"
          >
            W Pracowni Psychoterapii Poznawczo-Behawioralnej zapewniam
            profesjonalne wsparcie psychiczne, niezależnie od rodzaju
            trudności, z jakimi się zmagasz. Prowadzę różnorodne formy terapii,
            dostosowane zarówno do indywidualnych problemów, jak i sytuacji
            rodzinnych czy relacyjnych. W każdym przypadku zapewniam{" "}
            <span className="text-coral-ink">bezpieczną przestrzeń</span> do pracy
            nad trudnościami emocjonalnymi, stresem czy kryzysami życiowymi,
            poza tym daję wsparcie i szansę na rozwój umiejętności
            interpersonalnych w kontakcie z innymi ludźmi.
          </p>
        </div>
      </section>

      {/* ——— O MNIE ——— */}
      <section id="o-mnie" className="scroll-mt-24 bg-peach py-24 sm:py-32">
        <div className="container max-w-4xl">
          <div>
            <h2
              data-reveal
              className="font-display text-3xl font-semibold text-coral-ink sm:text-4xl"
            >
              O mnie:
            </h2>
            <div className="mt-8 space-y-7 text-[1.0625rem] leading-[1.85] text-espresso/85 sm:text-lg">
              <p data-reveal style={delay(80)}>
                Swoją przygodę z psychoterapią rozpoczęłam od rozwoju
                osobistego. Poznanie siebie, swoich zasobów i ograniczeń, uważam
                jest niezbędne, gdy myślimy o pracy związanej z pomaganiem
                drugiej osobie. Następnym krokiem było zdobycie profesjonalnych
                uprawnień zawodowych.
              </p>
              <p data-reveal style={delay(160)}>
                Certyfikat terapeuty ma znaczenie, ponieważ potwierdza
                ukończenie specjalistycznego szkolenia, zweryfikowanie
                umiejętności i wiedzy terapeuty, a także świadczy o
                doświadczeniu w zawodzie. Dla pacjentów jest to gwarancja
                kompetencji, a dla terapeuty oznacza możliwość samodzielnej
                praktyki i dalszego rozwoju zawodowego.
              </p>
            </div>

            {/* ——— CERTYFIKATY ——— */}
            <div id="certyfikaty" className="mt-16 scroll-mt-28">
              <h2
                data-reveal
                className="font-display text-3xl font-semibold text-coral-ink sm:text-4xl"
              >
                Certyfikaty:
              </h2>
              <figure
                data-reveal
                style={delay(80)}
                className="mt-8 max-w-[440px] overflow-hidden rounded-[10px] border border-espresso/25 bg-white shadow-sm"
              >
                <div className="relative aspect-[1360/844] w-full">
                  <Image
                    src="/zdjecia/certyfikat-pttpb-1510.jpg"
                    alt="Certyfikat psychoterapeuty poznawczo-behawioralnego Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej, nr 1510"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-contain"
                  />
                </div>
              </figure>

              <ul className="bullet-list mt-8 border-t border-espresso/25">
                {CERTYFIKATY.map((item, i) => (
                  <li
                    key={item}
                    data-reveal
                    style={delay(i * 90)}
                    className="rule-row text-[1.0625rem] leading-[1.8] text-espresso/85"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-4 text-[1.0625rem] leading-[1.8] text-espresso/85">
                <p data-reveal style={delay(60)}>
                  Jestem członkiem Polskiego Towarzystwa Terapii Poznawczej i
                  Behawioralnej
                </p>
                <p data-reveal style={delay(120)}>
                  Swoją pracę poddaję systematycznej superwizji, co gwarantuje
                  jakość i profesjonalizm podejmowanych działań.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— CYTAT ——— */}
      <section className="on-dark grain bg-espresso py-24 text-peach sm:py-32">
        <div className="container max-w-4xl">
          <blockquote
            data-reveal
            className="font-display text-xl italic leading-[1.6] sm:text-2xl lg:text-[1.9rem] lg:leading-[1.55]"
          >
            <span
              aria-hidden="true"
              className="mb-8 block h-[3px] w-16 rounded-full bg-coral"
            />
            Kiedyś, dawno, na początku, ktoś zapytał mnie : jak myślisz, co ma
            znaczenie w byciu dobrym pomagaczem, jaką masz hierarchię? Pojawił
            się dylemat: wiedza, inteligencja....a może empatia, współczucie,
            zrozumienie? Doświadczenie pracy w różnych środowiskach miało
            znaczenie, dało niebagatelną perspektywę, wszystko to, co zbudowało
            moje kompetencje w pracy w relacji z drugim człowiekiem.
          </blockquote>
        </div>
      </section>

      {/* ——— DOŚWIADCZENIE ——— */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="container">
          <h2
            data-reveal
            className="max-w-xl font-display text-3xl text-espresso sm:text-4xl lg:text-5xl"
          >
            Doświadczenie zawodowe:
          </h2>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[10px] bg-espresso/25 sm:grid-cols-2">
            {DOSWIADCZENIE.map((item, i) => (
              <li
                key={item}
                data-reveal
                style={delay(i * 90)}
                className="flex items-center bg-cream p-8 transition-colors duration-500 hover:bg-peach sm:min-h-[132px] sm:p-10"
              >
                <p className="text-[1.0625rem] leading-[1.75] text-espresso/85">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— OFERTA ——— */}
      <section id="oferta" className="scroll-mt-24 bg-peach py-24 sm:py-32">
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <h2
                data-reveal
                className="font-display text-4xl text-espresso sm:text-5xl"
              >
                Oferta:
              </h2>
            </div>
            <div className="space-y-7 text-[1.0625rem] leading-[1.85] text-espresso/85 sm:text-lg lg:col-span-7">
              <p data-reveal>
                Prowadzę terapię indywidualną, konsultacje dla par. Pracuję z
                osobami dorosłymi oraz młodzieżą powyżej 16 lat.
              </p>
              <p data-reveal style={delay(90)}>
                W pracy psychoterapeutycznej stawiam na skuteczność oraz
                bezpieczeństwo. Skupiam się na psychoterapii w nurcie
                poznawczo-behawioralnym (CBT), na terapii schematu. Oferuję
                również wsparcie w zakresie terapii uzależnień, zaburzeń
                lękowych czy kryzysów rodzinnych. Głównym celem jest nie tylko
                łagodzenie objawów, lecz też głębsze zrozumienie ich źródeł,
                dzięki czemu pacjent zyskuje narzędzia do radzenia sobie w
                codziennym życiu.
              </p>
            </div>
          </div>

          <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h3
                data-reveal
                className="font-display text-3xl font-semibold text-coral-ink sm:text-4xl"
              >
                Pracuję:
              </h3>
              <ul className="bullet-list mt-8 border-t border-espresso/25">
                {PRACUJE.map((item, i) => (
                  <li
                    key={item}
                    data-reveal
                    style={delay(i * 70)}
                    className="rule-row text-[1.0625rem] leading-[1.75] text-espresso/85 transition-colors duration-300 hover:text-espresso"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3
                data-reveal
                className="font-display text-3xl font-semibold text-coral-ink sm:text-4xl"
              >
                A także:
              </h3>
              <ul className="bullet-list mt-8 border-t border-espresso/25">
                {A_TAKZE.map((item, i) => (
                  <li
                    key={item}
                    data-reveal
                    style={delay(i * 70)}
                    className="rule-row text-[1.0625rem] leading-[1.75] text-espresso/85 transition-colors duration-300 hover:text-espresso"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ——— PRZEBIEG I CENNIK ——— */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="container grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="space-y-6 lg:col-span-7">
            <article
              data-reveal
              className="rounded-[10px] border border-espresso/15 bg-peach/60 p-8 transition-colors duration-500 hover:border-coral-ink/70 sm:p-10"
            >
              <h2 className="font-display text-3xl text-espresso sm:text-4xl">
                Konsultacja
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-[1.85] text-espresso/85">
                to pierwsze 1-3 spotkania klienta i psychoterapeuty. Jest to
                czas, abyśmy wspólnie mogli skonkretyzować problem i wybrać
                najlepszą dla Ciebie formę pomocy. Podczas konsultacji
                podejmujemy wspólną decyzję, czy rozpoczynamy terapię. Następnie
                ustalamy cele i kontrakt.
              </p>
            </article>
            <article
              data-reveal
              style={delay(90)}
              className="rounded-[10px] border border-espresso/15 bg-peach/60 p-8 transition-colors duration-500 hover:border-coral-ink/70 sm:p-10"
            >
              <h2 className="font-display text-3xl text-espresso sm:text-4xl">
                Psychoterapia
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-[1.85] text-espresso/85">
                ma formę serii regularnych spotkań raz w tygodniu w terminie
                dostosowanym do możliwości.
              </p>
            </article>
          </div>

          <div className="lg:col-span-5 lg:self-center">
            {/* Gabinet — para ujęć o wspólnym traktowaniu: równa wysokość,
                szerokość kolumn pod orientację kadru, delikatne ocieplenie,
                żeby chłodne zdjęcia telefonem zgrały się z paletą strony */}
            <div
              data-reveal
              className="grid grid-cols-2 gap-3"
            >
              <figure className="group relative aspect-square overflow-hidden rounded-[10px] ring-1 ring-espresso/15">
                <Image
                  src="/zdjecia/gabinet-1.jpg"
                  alt="Gabinet: kanapa z poduszkami, fotele i flipchart przy oknie"
                  fill
                  sizes="(max-width: 1024px) 60vw, 25vw"
                  className="object-cover object-[22%_center] saturate-[0.92] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-peach/20 mix-blend-soft-light"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/25 to-transparent"
                />
              </figure>
              <figure className="group relative aspect-square overflow-hidden rounded-[10px] ring-1 ring-espresso/15">
                <Image
                  src="/zdjecia/gabinet-2.jpg"
                  alt="Gabinet: fotele i kanapa wokół niskiego stolika"
                  fill
                  sizes="(max-width: 1024px) 40vw, 17vw"
                  className="object-cover object-[center_62%] saturate-[0.92] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-peach/20 mix-blend-soft-light"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/25 to-transparent"
                />
              </figure>
            </div>

          </div>
        </div>

        {/* Cennik — osobny pas pod spodem, żeby kwoty miały miejsce i wagę */}
        <div className="container mt-16 sm:mt-20">
          <ul className="grid gap-5 sm:grid-cols-2">
            {CENNIK.map((poz, i) => (
              <li
                key={poz.kwota}
                data-reveal
                style={delay(i * 90)}
                className="group flex flex-col justify-between rounded-[10px] border border-espresso/25 bg-peach p-8 transition-colors duration-500 hover:border-coral-ink sm:p-10"
              >
                <p className="text-[1.0625rem] leading-[1.75] text-espresso">
                  {poz.opis}
                </p>
                <p className="mt-8 flex items-baseline gap-3 border-t border-espresso/25 pt-6">
                  <span className="eyebrow text-coral-ink">{poz.etykieta}</span>
                  <span className="font-display text-5xl leading-none text-espresso sm:text-6xl">
                    {poz.kwota}
                  </span>
                </p>
              </li>
            ))}
          </ul>

          {/* Terapia online — zdjęcie zdalnej sesji obok akapitu o Teams */}
          <div
            data-reveal
            style={delay(180)}
            className="mt-6 grid items-center gap-8 overflow-hidden rounded-[10px] border border-espresso/25 bg-peach sm:grid-cols-2 sm:gap-0"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/zdjecia/online-sesja.jpg"
                alt="Otwarty notatnik z długopisem, a za nim laptop z trwającą rozmową wideo"
                fill
                sizes="(max-width: 640px) 100vw, 45vw"
                className="object-cover object-[center_43%]"
              />
            </div>
            <div className="p-8 sm:p-10">
              <p className="eyebrow text-coral-ink">Online</p>
              <p className="mt-4 font-display text-xl italic leading-[1.5] text-espresso sm:text-2xl lg:text-[1.75rem]">
                Prowadzę konsultacje oraz terapię również on - line. Zapraszam
                do kontaktu za pośrednictwem Teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— KONTAKT ——— */}
      <section
        id="kontakt"
        className="on-dark grain scroll-mt-24 bg-espresso py-24 text-peach sm:py-32"
      >
        <div className="container grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div data-reveal className="order-2 lg:order-1">
            <ContactMap />
          </div>

          <div className="order-1 lg:order-2">
            <h2
              data-reveal
              className="font-display text-4xl text-peach sm:text-5xl"
            >
              Kontakt:
            </h2>
            <p
              data-reveal
              style={delay(80)}
              className="mt-6 max-w-md text-[1.0625rem] leading-[1.85] text-peach/80"
            >
              W celu umówienia spotkania proszę o kontakt telefoniczny lub email
            </p>

            <div
              data-reveal
              style={delay(160)}
              className="mt-10 font-display text-2xl leading-snug text-peach sm:text-3xl"
            >
              <p>Pracownia Psychoterapii</p>
              <p>Poznawczo-Behawioralnej</p>
            </div>

            <ul className="mt-10 space-y-5">
              <li data-reveal style={delay(220)}>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="group flex items-center gap-4 text-lg text-peach transition-colors duration-300 hover:text-coral sm:text-xl"
                >
                  <Phone
                    className="h-5 w-5 shrink-0 text-coral"
                    aria-hidden="true"
                  />
                  <span className="link-sweep">tel: {PHONE}</span>
                </a>
              </li>
              <li data-reveal style={delay(280)}>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-4 break-all text-lg text-peach transition-colors duration-300 hover:text-coral sm:text-xl"
                >
                  <Mail
                    className="h-5 w-5 shrink-0 text-coral"
                    aria-hidden="true"
                  />
                  <span className="link-sweep">mail: {EMAIL}</span>
                </a>
              </li>
              <li
                data-reveal
                style={delay(340)}
                className="flex items-start gap-4 text-lg text-peach/80 sm:text-xl"
              >
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-coral"
                  aria-hidden="true"
                />
                <span>
                  ul. T. Sixta 5/202
                  <br />
                  43-300 Bielsko-Biała
                </span>
              </li>
            </ul>

            <a
              data-reveal
              style={delay(400)}
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="btn-coral mt-12 w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Umów wizytę
            </a>
          </div>
        </div>
      </section>

      {/* ——— STOPKA ——— */}
      <footer className="on-dark bg-espresso-deep py-10 text-peach/70">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p className="font-display text-base tracking-wide">
            Pracownia Psychoterapii Poznawczo-Behawioralnej — Ewa Zając-Łękawa
          </p>
          <p>Bielsko-Biała</p>
        </div>
      </footer>
    </>
  );
}
