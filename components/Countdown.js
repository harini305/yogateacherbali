"use client";

import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

function remaining(target) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
  };
}

// Days/hours/minutes until the next MasterClass. Rendered after mount so the
// server HTML never carries a stale number.
export default function Countdown({ target, tone = "light" }) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(remaining(target));
    const id = setInterval(() => setTime(remaining(target)), 30000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    ["days", "Days"],
    ["hours", "Hours"],
    ["minutes", "Min"],
  ];

  return (
    <div className={`${styles.countdown} ${tone === "dark" ? styles.dark : ""}`} role="timer" aria-label="Time until the next MasterClass">
      {units.map(([key, label]) => (
        <div key={key} className={styles.unit}>
          <span className={styles.value}>{time ? String(time[key]).padStart(2, "0") : "--"}</span>
          <span className={styles.label}>{label}</span>
        </div>
      ))}
    </div>
  );
}
