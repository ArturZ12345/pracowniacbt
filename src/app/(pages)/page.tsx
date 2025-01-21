import { Merriweather } from "next/font/google";
import Image from "next/image";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export default async function HomePage() {
  return (
    <section className="bg-[#E8F0F0] text-[#134F5C]">
      <section className="relative h-[80vh] w-full overflow-hidden ">
        <Image
          src="/bg-1.webp"
          alt="Sky background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 brightness-125 filter blur-sm opacity-30"
        />
        <div className="relative z-10 flex h-[80%] w-full justify-center">
          <div className="text-center">
            <h1
              className={`mb-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-[#134F5C] ${merriweather.className} italic`}
            >
              <span className="block p-[5%]"></span>
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
      <section
        className={`text-center py-16 px-4 max-w-4xl mx-auto ${merriweather.className} text-3xl leading-loose`}
      >
        <p className=" font-bold text-black">
          Psychoterapia trudności funkcjonowania w obszarze myśli, emocji i
          zachowań. Oferuję profesjonalną informację, wsparcie i pomoc.
        </p>
      </section>
      <section
        className={`py-16 px-4 max-w-5xl mx-auto ${merriweather.className} text-xl leading-loose `}
      >
        <p className=" font-normal ">
          Terapia poznawczo-behawioralna adresowana jest do osób z zaburzeniami
          depresyjnymi, fobiami, z zaniżoną samooceną. Skuteczna zwłaszcza w
          zaburzeniach lękowych, z atakami paniki, w trudnościach emocjonalnych,
          zaburzeniach obsesyjno-kompulsyjnych, w kryzysach życiowych.
        </p>
        <p className=" font-normal ">
          Krótkoterminowa. Skoncentrowana na rozwiązaniu problemu, o
          dowiedzionej naukowo skuteczności.
        </p>
        <section
          className={`pt-16 px-4 max-w-5xl mx-auto ${merriweather.className} text-xl leading-loose `}
        >
          <p className="font-bold text-2xl">
            O mnie
          </p>
             <p className="pt-2 font-sem">Kompetencje:</p>

          <p className=" font-normal ">
            - Certyfikat psychoterapeuty terapii poznawczo-behawioralnej wzbogaconej podejściem
terapii schematu mindfulness i akceptacji - w duchu dialogu motywującego - nr certyfikatu
PTTPB 1510
          </p>
          <p className=" font-normal ">
            - ukończone szkolenie akredytowane przez Międzynarodowe Towarzystwo Terapii Schematu
(ISST) przygotowujące do certyfikatu terapeuty schematu ISST
          </p>
          <p className=" font-normal ">
            Certyfikat specjalisty psychoterapii uzależnień -SP 1356/2017
Jestem członkiem Polskiego Towarzystwa Terapii Poznawczej i Behawioralnej.
          </p>
          <p className=" pt-2 font-sem ">Swoją pracę poddaję systematycznej superwizji, co gwarantuje jakość i profesjonalizm
podejmowanych działań.</p>
          <p className="pt-2 font-sem">Doświadczenie zawodowe</p>
          <p className=" font-normal ">
            <p className=" font-normal "> Psychoterapia indywidualna
          </p>
             <p className=" font-normal "> Terapia grupowa oraz w społeczności terapeutycznej
          </p>
             <p className=" font-normal "> Treningi interpersonalne ( współprowadząca w szkoleniu PTZN Oddz. w Katowicach)
          </p>
            <p className=" font-normal "> Socjoterapia
          </p>
           
           <p className="font-bold text-3xl">
            Oferta:
          </p>
          <p className=" pt-2 font-sem ">Prowadzę terapię indywidualną, konsultacje dla par.
Pracuję z osobami dorosłymi oraz młodzieżą powyżej 16 lat.</p>
           <p className=" pt-2 font-sem ">Oferuję profesjonalną psychoterapię, wsparcie i pomoc. Kieruję się ideą pracy opartej na partnerstwie,
poszanowaniu autonomii, odpowiedzialności, przy pełnej akceptacji dla wyborów i decyzji osób, które się do
mnie zgłaszają.</p>
          <p className=" pt-2 font-sem ">Pracuję:</p>
            <p className=" font-normal "> z osobami z zaburzeniami osobowości,
          </p>
            <p className=" font-normal "> z zaburzeniami nastroju (m.in. depresyjne)
          </p>
            <p className=" font-normal "> w kryzysach życiowych, adaptacyjnych, pourazowych
          </p>
            <p className=" font-normal "> uzależnionymi od substancji psychoaktywnych, a także w obszarze uzależnień behawioralnych,
czynnościowych
          </p>
            <p className=" font-normal ">ASD, ADHD
          </p>
           <p className=" pt-2 font-sem ">A także:</p>
            
            <p className=" font-normal ">w trudnych sytuacjach życiowych uniemożliwiających funkcjonalne rozwiązywanie problemów
          </p>
          <p className=" font-normal "> w konfliktach w relacjach
          </p>
        <p className=" font-normal "> w sytuacji poczucia braku wpływu, kontroli nad istotnymi obszarami życia
          </p>
      <p className=" font-normal "> w trudnościach związanych z aktywnością zawodową ( wypalenie zawodowe, konflikty)
          </p>
     <p className=" font-normal "> w sytuacji poczucia bezsilności, niemożności podejmowania działań i samodzielnego
rozwiązywania problemówh
          </p>
      </section>
      <section
        className={`px-4 pt-2 max-w-5xl mx-auto ${merriweather.className} text-xl leading-loose`}
      >
        <p className=" font-normal ">
          <b>Konsultacja</b> to pierwsze 1-3 spotkania klienta i
          psychoterapeuty. Jest to czas, abyśmy wspólnie mogli skonkretyzować
          problem i wybrać najlepszą dla Ciebie formę pomocy. Podczas
          konsultacji podejmujemy wspólną decyzję, czy rozpoczynamy terapię.
          Następnie ustalamy cele i kontrakt.
        </p>
        <p className=" font-normal pt-4 ">
          <b>Psychoterapia</b> ma formę serii regularnych spotkań raz w tygodniu
          w terminie dostosowanym do możliwości.
        </p>
        <p className=" font-normal pt-4 ">
          Spotkanie indywidualne trwa 50 minut. Cena 190 zł.
        </p>
        <p className=" font-normal pt-4 ">
          Spotkanie dla par, rodzinne trwa od 50 do 70 minut. Cena 250 zł.
        </p>
        <p className="font-normal pt-20 ">
          Prowadzę konsultacje oraz terapię również on - line. Zapraszam do
          kontaktu za pośrednictwem Skype : live:.cid.6b72d96fb4d18087
          <p className="font-bold text-2xl">
            Kontakt:
          </p>
        </p>
      </section>
      <section className={`py-16 max-w-5xl mx-auto ${merriweather.className}`}>
        <div className="grid grid-cols-2 gap-20">
          <div className="">
            <div className="relative h-full h-[500px]">
              <Image
                src="/mapka.png"
                alt="Sky background"
                layout="fill"
                objectFit="contain"
                className="absolute inset-0"
              />
            </div>
          </div>
          <div className="text-xl leading-loose">
            <p className=""></p>W celu umówienia spotkania proszę o kontakt
            telefoniczny lub email
            <p className="py-4 font-bold">Pracownia Psychoterapii</p>
            <p className="leading-normal font-bold">Poznawczo-Behawioralnej</p>
            <p className="py-4 font-bold">tel: 515 419 680</p>
            <p className="font-bold">mail: ewazajaclekawa@gmail.com</p>
            <p className="">ul. T. Sixta 5/202</p>
            <p className="">43-300 Bielsko-Biała</p>
          </div>
        </div>
      </section>

      <section
        className={`text-center py-16 px-4 max-w-5xl mx-auto ${merriweather.className} text-xl leading-loose`}
      >
       
      </section>
    </section>
  );
}
