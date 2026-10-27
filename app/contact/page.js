import Img from "@/components/Img";
import PageHead from "@/components/PageHead";
import { ExternalIcon, WhatsAppIcon } from "@/components/Icons";
import { contact, links, rysStatement, social, whatsappLink } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact & Enquire",
  description: "Contact YogaFX Teacher Training in Seminyak, Bali: WhatsApp +62 811 3888 330, email info@yogafx.com, or register your interest in the next MasterClass.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHead
        lines={[{ text: "Contact" }, { text: "& enquire", red: true }]}
        lead="Drop us a line today! We would love to hear from you."
        media={<Img name="mat-group" alt="Mr. Ian with a group of smiling YogaFX trainees on their yoga mats" sizes="(min-width: 900px) 46vw, 100vw" priority />}
      />

      <section id="enquire" className="section">
        <div className={`container ${styles.grid}`}>
          <div className={styles.primary} data-reveal>
            <WhatsAppIcon size={40} />
            <h2 className={styles.primaryTitle}>WhatsApp us</h2>
            <p className={styles.primaryText}>For instant access Q&amp;A on course prices and information please WhatsApp us directly.</p>
            <p className={styles.sign}>
              Thank you for your interest in Yoga FX, it really is appreciated. Have a great day.
              <br />
              Regards, Ms Ivara
            </p>
            <a href={whatsappLink()} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Chat on {contact.whatsappDisplay}
            </a>
          </div>

          <div className={styles.options}>
            <div className={styles.option} data-reveal>
              <h2 className={styles.optionTitle}>Register your interest</h2>
              <p>Want to be a yoga teacher? Register your interest now and receive instant access to the FREE Bikram Dialogue E-Book.</p>
              <a href={links.interestForm} className="btn btn--outline" target="_blank" rel="noopener noreferrer">
                Open the interest form <ExternalIcon />
              </a>
              <p className={styles.small}>The form opens on the current YogaFX website.</p>
            </div>

            <div className={styles.option} data-reveal>
              <h2 className={styles.optionTitle}>Email</h2>
              <a href={`mailto:${contact.email}`} className={styles.big}>
                {contact.email}
              </a>
            </div>

            <div className={styles.option} data-reveal>
              <h2 className={styles.optionTitle}>Location</h2>
              <p className={styles.address}>
                {contact.legalName}
                <br />
                Seminyak, Bali, Indonesia
              </p>
              <a href={links.googleProfile} className="text-link" target="_blank" rel="noopener noreferrer">
                Google profile <ExternalIcon size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="more-title">
        <div className={`container ${styles.more}`}>
          <div className={`frame ${styles.moreFrame}`} data-reveal>
            <Img name="kit-collage" alt="YogaFX course kit: shirts, workbooks, ID cards and bags, with students in class" sizes="(min-width: 900px) 45vw, 100vw" />
          </div>
          <div data-reveal>
            <h2 id="more-title" className={styles.moreTitle}>
              Before you message
            </h2>
            <p>{rysStatement}</p>
            <ul className={styles.links}>
              <li>
                <a href={links.quiz} target="_blank" rel="noopener noreferrer">
                  Take the readiness quiz: 19 simple yes or no questions <ExternalIcon size={14} />
                </a>
              </li>
              <li>
                <a href={links.yogaAllianceProfile} target="_blank" rel="noopener noreferrer">
                  Yoga Alliance school profile <ExternalIcon size={14} />
                </a>
              </li>
              {social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    YogaFX on {s.label} <ExternalIcon size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
