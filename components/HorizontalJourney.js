"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HorizontalJourney.module.css";

gsap.registerPlugin(ScrollTrigger);

// On large screens (with motion allowed) the section pins below the header and
// its panels travel sideways as the visitor scrolls down. Everywhere else the
// same panels are a native, swipeable scroll-snap row, so nothing depends on JS.
export default function HorizontalJourney({ heading, children }) {
  const section = useRef(null);
  const track = useRef(null);
  const bar = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const el = section.current;
      el.classList.add(styles.pinned);
      const header = document.querySelector("header");
      // Travel until the last panel's right edge meets the container's right
      // edge (mirroring the left padding), measured from real layout.
      const distance = () => {
        const t = track.current;
        const last = t.lastElementChild;
        const edge = parseFloat(getComputedStyle(t).paddingLeft) || 0;
        return Math.max(0, last.offsetLeft + last.offsetWidth - (t.clientWidth - edge));
      };

      const tween = gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: () => `top ${header ? header.offsetHeight : 0}px`,
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          // Pins sit above later triggers, so measure this one first.
          refreshPriority: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => gsap.set(bar.current, { scaleX: self.progress }),
        },
      });

      ScrollTrigger.sort();
      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        el.classList.remove(styles.pinned);
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={section} className={styles.journey} aria-labelledby="journey-title">
      <div className={`container ${styles.head}`}>
        {heading}
        <span className={styles.progress} aria-hidden="true">
          <span ref={bar} />
        </span>
      </div>
      <div ref={track} className={styles.track}>
        {children}
      </div>
    </section>
  );
}
