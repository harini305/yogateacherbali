import Link from "@/components/Link";
import { contact, nav, rysStatement, social, whatsappLink } from "@/lib/site";
import styles from "./Footer.module.css";

// Compact footer: logo, page links and social on one row; the RYS statement
// and contact details on a second; legal links on a slim last row.
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <img src="/images/logo-yoga-life-white.gif" width="272" height="90" alt="YOGA LIFE – The Art Of Yoga" className={styles.logo} loading="lazy" />
        <nav aria-label="Footer">
          <ul className={styles.links}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className={styles.links} aria-label="Follow us">
          {social.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={`container ${styles.mid}`}>
        <p className={styles.statement}>{rysStatement}</p>
        <ul className={styles.contact}>
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp {contact.whatsappDisplay}
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>{contact.location}</li>
        </ul>
      </div>

      <div className={`container ${styles.sub}`}>
        <p>© YogaFX International</p>
        <ul className={styles.links}>
          <li>
            <Link href="/terms-of-service">Terms of Service</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
