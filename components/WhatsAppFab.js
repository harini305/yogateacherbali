"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";
import styles from "./WhatsAppFab.module.css";

// Persistent, compact enquiry action. Opens the verified WhatsApp chat.
// It appears once the visitor scrolls, so it never sits on top of the
// opening screen's own calls to action.
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 360);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink()}
      className={`${styles.fab} ${visible ? styles.visible : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={visible ? undefined : -1}
      aria-hidden={visible ? undefined : true}
    >
      <WhatsAppIcon size={26} />
      <span className={styles.label}>WhatsApp us</span>
    </a>
  );
}
