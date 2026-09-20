"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, MapPin } from "lucide-react";

// Współrzędne z istniejącego zrzutu mapy: 49°49'38.8"N 19°02'38.1"E
const LAT = 49.827444;
const LNG = 19.043917;
const LABEL = "Pracownia Psychoterapii Poznawczo-Behawioralnej, ul. T. Sixta 5/202, 43-300 Bielsko-Biała";

const EMBED_SRC = `https://www.google.com/maps?q=${LAT},${LNG}(${encodeURIComponent(
  "Pracownia Psychoterapii Poznawczo-Behawioralnej"
)})&z=17&hl=pl&output=embed`;
const DIRECTIONS_HREF = `https://www.google.com/maps/dir/?api=1&destination=${LAT},${LNG}`;

/**
 * Mapa wczytywana dopiero po kliknięciu — do tego momentu widoczny jest
 * statyczny podgląd, więc strona nie łączy się z serwerami Google
 * (i nie zapisuje ich ciasteczek) bez działania użytkownika.
 */
export default function ContactMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="space-y-4">
      <div className="relative aspect-[680/712] w-full overflow-hidden rounded-[10px] bg-peach">
        {loaded ? (
          <iframe
            src={EMBED_SRC}
            title={`Mapa — ${LABEL}`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full animate-fade-in border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            aria-label="Wczytaj interaktywną mapę Google"
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            <Image
              src="/mapka.png"
              alt={`Mapa dojazdu — ${LABEL}`}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-espresso/25 transition-colors duration-500 group-hover:bg-espresso/10"
            />
            <span className="btn-coral pointer-events-none absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-espresso/25">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Pokaż mapę
            </span>
          </button>
        )}
      </div>

      <a
        href={DIRECTIONS_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-peach/70 transition-colors duration-300 hover:text-coral"
      >
        <span className="link-sweep">Wyznacz trasę w Mapach Google</span>
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}
