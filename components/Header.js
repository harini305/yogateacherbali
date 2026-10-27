"use client";

import Link from "@/components/Link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { nav, whatsappLink, contact } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);
  const toggleRef = useRef(null);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;
    document.body.style.overflow = open ? "hidden" : "";

    if (!open) return;
    const items = drawer.querySelectorAll("[data-drawer-item]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      gsap.fromTo(items, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.out" });
    }
    drawer.querySelector("a")?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      // Keep focus inside the open drawer.
      if (e.key === "Tab") {
        const focusable = [toggleRef.current, ...drawer.querySelectorAll("a")];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${open ? styles.isOpen : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.logo} aria-label="YogaFX home">
          <img src="/images/logo-yogafx-360.png" srcSet="/images/logo-yogafx-360.png 1x, /images/logo-yogafx-720.png 2x" width="360" height="106" alt="YogaFX – you’ll love it!" />
        </Link>

        <nav className={styles.desktopNav} aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact#enquire" className={`btn ${styles.cta}`}>
          Enquire
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          <span className={styles.burger} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div id="mobile-menu" ref={drawerRef} className={styles.drawer} hidden={!open}>
        <nav aria-label="Mobile">
          <ul className={styles.drawerList}>
            <li data-drawer-item>
              <Link href="/" className={styles.drawerLink} aria-current={pathname === "/" ? "page" : undefined}>
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href} data-drawer-item>
                <Link href={item.href} className={styles.drawerLink} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.drawerFoot} data-drawer-item>
          <Link href="/contact#enquire" className="btn">
            Enquire now
          </Link>
          <a href={whatsappLink()} className="btn btn--light btn--whatsapp" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> {contact.whatsappDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
