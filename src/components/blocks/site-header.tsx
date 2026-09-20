"use client";

import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "@/components/blocks/logo";

const NAV = [
  { href: "#o-mnie", label: "O mnie" },
  { href: "#certyfikaty", label: "Certyfikaty" },
  { href: "#oferta", label: "Oferta" },
  { href: "#kontakt", label: "Kontakt" },
];

const PHONE = "515 419 680";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Chowamy pasek przy przewijaniu w dół, pokazujemy przy powrocie w górę
      setHidden(y > 240 && y > last);
      last = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
        scrolled || open
          ? "border-b border-espresso/15 bg-cream/95 backdrop-blur-md"
          : "on-dark border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      {!scrolled && !open && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-espresso/70 to-transparent"
        />
      )}

      <div className="container relative flex h-[76px] items-center justify-between gap-6 lg:h-[92px]">
        <a
          href="#top"
          aria-label="Pracownia psychoterapii Ewa Zając-Łękawa — początek strony"
          className={[
            "group transition-colors duration-300",
            scrolled || open ? "text-espresso" : "text-peach",
          ].join(" ")}
        >
          <Logo variant={scrolled || open ? "dark" : "light"} />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={[
                "link-sweep text-[13px] uppercase tracking-[0.16em] transition-colors duration-300",
                scrolled
                  ? "text-espresso hover:text-coral-ink"
                  : "text-peach hover:text-coral",
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className={[
              "btn px-7 py-3 text-sm",
              scrolled
                ? "border border-espresso/40 text-espresso hover:bg-espresso hover:text-peach"
                : "border border-peach/70 text-peach hover:bg-peach hover:text-espresso",
            ].join(" ")}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Umów wizytę
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          className={[
            "flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden",
            scrolled || open
              ? "border-espresso/30 text-espresso"
              : "border-peach/50 text-peach",
          ].join(" ")}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Menu mobilne */}
      <div
        className={[
          "overflow-hidden border-t border-espresso/10 bg-cream transition-[max-height,opacity] duration-500 ease-out lg:hidden",
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav className="container flex flex-col gap-1 py-6">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 45}ms` }}
              className="border-b border-espresso/20 py-4 font-display text-2xl text-espresso transition-colors duration-300 hover:text-coral-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            onClick={() => setOpen(false)}
            className="btn-coral mt-6 w-full"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Umów wizytę
          </a>
        </nav>
      </div>
    </header>
  );
}
