"use client";

import { useId, useRef, useState } from "react";
import { gsap } from "gsap";
import { PlusIcon } from "./Icons";
import styles from "./FaqAccordion.module.css";

function Item({ item, open, onToggle }) {
  const uid = useId();
  const body = useRef(null);

  const toggle = () => {
    const el = body.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && el) {
      if (open) {
        gsap.to(el, { height: 0, duration: 0.35, ease: "power2.inOut", onComplete: onToggle });
        return;
      }
      onToggle();
      requestAnimationFrame(() => gsap.fromTo(el, { height: 0 }, { height: "auto", duration: 0.45, ease: "power3.out" }));
      return;
    }
    onToggle();
  };

  return (
    <div className={`${styles.item} ${open ? styles.open : ""}`}>
      <h3 className={styles.question}>
        <button type="button" aria-expanded={open} aria-controls={`${uid}-a`} id={`${uid}-q`} onClick={toggle}>
          <span>{item.q}</span>
          <span className={styles.icon}>
            <PlusIcon />
          </span>
        </button>
      </h3>
      <div ref={body} id={`${uid}-a`} role="region" aria-labelledby={`${uid}-q`} className={styles.answer} hidden={!open}>
        <div className={styles.answerInner}>{item.a}</div>
      </div>
    </div>
  );
}

// FAQ list with topic filter. Answers are original copy from the live site.
export default function FaqAccordion({ groups }) {
  const [filter, setFilter] = useState("all");
  const [openKey, setOpenKey] = useState(null);

  const visible = groups.filter((g) => filter === "all" || g.id === filter);

  return (
    <div>
      <div className={styles.filters} role="group" aria-label="Filter questions">
        {[{ id: "all", title: "All questions" }, ...groups].map((g) => (
          <button
            key={g.id}
            type="button"
            className={styles.filter}
            aria-pressed={filter === g.id}
            onClick={() => {
              setFilter(g.id);
              setOpenKey(null);
            }}
          >
            {g.short || g.title}
          </button>
        ))}
      </div>

      {visible.map((group) => (
        <section key={group.id} className={styles.group} aria-labelledby={`faq-${group.id}`}>
          <h2 id={`faq-${group.id}`} className={styles.groupTitle}>
            {group.title}
          </h2>
          {group.items.map((item, i) => {
            const key = `${group.id}-${i}`;
            return <Item key={key} item={item} open={openKey === key} onToggle={() => setOpenKey(openKey === key ? null : key)} />;
          })}
        </section>
      ))}
    </div>
  );
}
