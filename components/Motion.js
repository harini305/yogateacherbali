"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Page-level scroll motion, mounted once per route by app/template.js.
//   [data-hero-line]  masked headline lines that rise in on load
//   [data-hero-fade]  hero supporting content that follows the headline
//   [data-reveal]     content that fades up when scrolled into view
//   [data-parallax]   images that drift slightly inside their frame
//   [data-progress]   timeline rules that fill as the section is read
// Everything is skipped when the visitor prefers reduced motion.
export default function Motion() {
  useEffect(() => {
    window.__yfxMotion = true;
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const lines = gsap.utils.toArray("[data-hero-line]");
      if (lines.length) {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
        // y: 0 clears the pixel offset GSAP reads from the CSS pre-hide transform.
        tl.fromTo(lines, { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, duration: 1.05, stagger: 0.09 });
        const follow = gsap.utils.toArray("[data-hero-fade]");
        if (follow.length) {
          tl.fromTo(follow, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" }, "-=0.6");
        }
      }

      // Only hide what the visitor has not seen yet, so nothing flashes.
      // Opacity only (never visibility) so unrevealed content stays focusable.
      const pending = gsap.utils
        .toArray("[data-reveal]")
        .filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92);
      gsap.set(pending, { opacity: 0, y: 28 });
      ScrollTrigger.batch(pending, {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { opacity: 1, y: 0, duration: 0.85, stagger: 0.09, ease: "power3.out", overwrite: true }),
      });

      // Keyboard focus inside content that has not been revealed yet shows it at once.
      const onFocus = (e) => {
        const el = e.target.closest?.("[data-reveal]");
        if (el && pending.includes(el)) gsap.to(el, { opacity: 1, y: 0, duration: 0.3, overwrite: true });
      };
      document.addEventListener("focusin", onFocus);

      gsap.utils.toArray("[data-parallax]").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -5, scale: 1.12 },
          {
            yPercent: 5,
            scale: 1.12,
            ease: "none",
            scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      gsap.utils.toArray("[data-progress]").forEach((el) => {
        const horizontal = el.dataset.progress === "x";
        gsap.fromTo(
          el,
          horizontal ? { scaleX: 0 } : { scaleY: 0 },
          {
            ...(horizontal ? { scaleX: 1 } : { scaleY: 1 }),
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement,
              start: horizontal ? "top 80%" : "top 65%",
              end: horizontal ? "bottom 55%" : "bottom 55%",
              scrub: 0.6,
            },
          },
        );
      });

      return () => document.removeEventListener("focusin", onFocus);
    });

    return () => mm.revert();
  }, []);

  return null;
}
