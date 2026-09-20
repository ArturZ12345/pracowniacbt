"use client";

import { useEffect } from "react";

/**
 * Obserwuje wszystkie elementy z atrybutem [data-reveal] i odsłania je
 * przy wejściu w obszar widoku. Montowany raz, dzięki czemu strona
 * pozostaje komponentem serwerowym.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (nodes.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || !("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return null;
}
