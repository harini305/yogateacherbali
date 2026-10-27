"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const format = (value, el) => `${el.dataset.prefix || ""}${Math.round(value).toLocaleString("en-US")}${el.dataset.suffix || ""}`;

// Home-page-only motion:
//   [data-hero-reveal] hero photo wipes in from the right on load
//   [data-hero-zoom]   hero photo settles from a slight zoom, then drifts on scroll
//   [data-count]       numbers count up once when scrolled into view
//   [data-drift]       gallery photos drift inside their fixed frames (tablet up)
// It also publishes the header + footer height as --chrome-h, so the closing
// call to action and the footer together fill exactly one screen.
export default function HomeEffects() {
  useEffect(() => {
    const header = document.querySelector("header");
    const footer = [...document.querySelectorAll("body footer")].pop();
    const root = document.documentElement;
    const observer = new ResizeObserver(() => root.style.setProperty("--chrome-h", `${header.offsetHeight + footer.offsetHeight}px`));
    observer.observe(header);
    observer.observe(footer);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--chrome-h");
    };
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const reveal = document.querySelector("[data-hero-reveal]");
      if (reveal) {
        gsap.fromTo(reveal, { clipPath: "inset(0 0 0 100%)" }, { clipPath: "inset(0 0 0 0%)", duration: 1.3, ease: "power4.inOut", clearProps: "clipPath" });
      }

      const hero = document.querySelector("[data-hero-zoom]");
      if (hero) {
        gsap.fromTo(hero, { scale: 1.18 }, { scale: 1.04, duration: 2.4, ease: "power2.out" });
        gsap.to(hero, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: hero.closest("section"), start: "top top", end: "bottom top", scrub: true },
        });
      }

      gsap.utils.toArray("[data-count]").forEach((el) => {
        const end = Number(el.dataset.count);
        const state = { v: 0 };
        el.textContent = format(0, el);
        gsap.to(state, {
          v: end,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate: () => (el.textContent = format(state.v, el)),
          onComplete: () => (el.textContent = format(end, el)),
        });
      });
    });

    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray("[data-drift]").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -6, scale: 1.14 },
          {
            yPercent: 6,
            scale: 1.14,
            ease: "none",
            scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    });

    return () => mm.revert();
  }, []);

  return null;
}
