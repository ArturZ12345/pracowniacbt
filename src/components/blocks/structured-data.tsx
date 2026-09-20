/**
 * Dane strukturalne schema.org dla wyszukiwarek — opisują gabinet jako lokalną
 * działalność: adres, telefon, współrzędne, zakres usług i ceny. To one, a nie
 * meta keywords, są dziś czytane przez Google przy wynikach lokalnych.
 *
 * Wszystkie wartości pochodzą z treści strony — nic nie jest zmyślone.
 */
const dane = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://psychoterapiacbt.org.pl/#gabinet",
  name: "Pracownia Psychoterapii Poznawczo-Behawioralnej Ewa Zając-Łękawa",
  url: "https://psychoterapiacbt.org.pl",
  description:
    "Psychoterapia poznawczo-behawioralna (CBT), terapia schematu oraz psychoterapia uzależnień w Bielsku-Białej. Terapia indywidualna, konsultacje dla par, spotkania online.",
  medicalSpecialty: "Psychiatric",
  telephone: "+48515419680",
  email: "ewazajaclekawa@gmail.com",
  priceRange: "200–300 zł",
  currenciesAccepted: "PLN",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. T. Sixta 5/202",
    postalCode: "43-300",
    addressLocality: "Bielsko-Biała",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.827444,
    longitude: 19.043917,
  },
  areaServed: { "@type": "City", name: "Bielsko-Biała" },
  founder: {
    "@type": "Person",
    name: "Ewa Zając-Łękawa",
    jobTitle: "Psychoterapeutka poznawczo-behawioralna",
    memberOf: {
      "@type": "Organization",
      name: "Polskie Towarzystwo Terapii Poznawczej i Behawioralnej",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Certyfikat psychoterapeuty poznawczo-behawioralnego PTTPB nr 1510",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Certyfikat specjalisty psychoterapii uzależnień SP 1356/2017",
      },
    ],
  },
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Psychoterapia poznawczo-behawioralna (CBT)",
    },
    { "@type": "MedicalTherapy", name: "Terapia schematu" },
    { "@type": "MedicalTherapy", name: "Psychoterapia uzależnień" },
    { "@type": "MedicalTherapy", name: "Konsultacje dla par" },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Spotkanie indywidualne (50 minut)",
      price: "200",
      priceCurrency: "PLN",
    },
    {
      "@type": "Offer",
      name: "Spotkanie dla par lub rodzinne (50–70 minut)",
      price: "300",
      priceCurrency: "PLN",
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dane) }}
    />
  );
}
