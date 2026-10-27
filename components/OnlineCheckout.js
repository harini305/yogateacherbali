"use client";

import { useState } from "react";
import { onlineCourse } from "@/lib/site";
import { ArrowRight } from "./Icons";
import styles from "./OnlineCheckout.module.css";

// Currency switch for the online course. Each option links to the existing
// PayPal transfer page for that currency on the current YogaFX site.
export default function OnlineCheckout() {
  const [currency, setCurrency] = useState("USD");
  const option = onlineCourse.payment.find((p) => p.currency === currency);

  return (
    <div className={styles.box}>
      <div className={styles.switch} role="group" aria-label="Payment currency">
        {onlineCourse.payment.map((p) => (
          <button key={p.currency} type="button" aria-pressed={currency === p.currency} onClick={() => setCurrency(p.currency)}>
            {p.currency}
          </button>
        ))}
      </div>

      <p className={styles.price} aria-live="polite">
        {option.amount}
      </p>
      <p className={styles.terms}>
        {currency === "USD" ? (
          <>
            Reduced from {onlineCourse.standardPrice}, or {onlineCourse.plan}.
          </>
        ) : (
          <>Payment page in pounds sterling.</>
        )}{" "}
        Lifetime access.
      </p>

      <a href={option.href} className="btn">
        Enrol for {option.amount} <ArrowRight />
      </a>
      <p className={styles.small}>Payments open the secure YogaFX PayPal transfer page.</p>
    </div>
  );
}
