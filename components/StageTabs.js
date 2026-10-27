"use client";

import { useEffect, useId, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./StageTabs.module.css";

// Accessible tabs (WAI-ARIA pattern, arrow-key navigation) used to walk
// through the stages of the hybrid training format.
export default function StageTabs({ stages, label }) {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const panel = useRef(null);
  const first = useRef(true);
  const uid = useId();

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = panel.current;
    gsap.fromTo(el.querySelector("[data-stage-media]"), { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" });
    gsap.fromTo(el.querySelector("[data-stage-body]").children, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power3.out" });
  }, [active]);

  const onKeyDown = (e) => {
    const last = stages.length - 1;
    let next = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  const stage = stages[active];

  return (
    <div className={styles.tabs}>
      <div role="tablist" aria-label={label} className={styles.list} onKeyDown={onKeyDown}>
        {stages.map((s, i) => (
          <button
            key={s.id}
            ref={(el) => (tabs.current[i] = el)}
            role="tab"
            type="button"
            id={`${uid}-tab-${i}`}
            aria-selected={i === active}
            aria-controls={`${uid}-panel`}
            tabIndex={i === active ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(i)}
          >
            <span className={styles.tabLabel}>{s.label}</span>
            <span className={styles.tabHint}>{s.hint}</span>
          </button>
        ))}
        <span className={styles.indicator} style={{ "--count": stages.length, "--index": active }} aria-hidden="true" />
      </div>

      <div ref={panel} role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${active}`} className={styles.panel}>
        <div className={styles.media} data-stage-media>
          {stage.media}
        </div>
        <div className={styles.body} data-stage-body>
          <h3>{stage.title}</h3>
          {stage.content}
        </div>
      </div>
    </div>
  );
}
