import Link from "@/components/Link";
import Img from "@/components/Img";
import OnlineCheckout from "@/components/OnlineCheckout";
import { ArrowRight, ExternalIcon, WhatsAppIcon } from "@/components/Icons";
import { contact, links, onlineCourse, whatsappLink } from "@/lib/site";
import styles from "./online.module.css";

export const metadata = {
  title: "Bikram Hot Yoga Teacher Training Online | USD 329",
  description:
    "Self-paced Bikram Hot 26&2 teacher training online. USD 329 or 4 x USD 82. 15 lectures, dialogue MP3s, world champion demonstrations, lifetime access. No Zoom calls.",
  alternates: { canonical: "/online-course" },
};

// Component table from the original online course page, split into its two parts.
const method = [
  ["Complete Standing & Floor Series dialogue", "Downloadable workbook", "The full script, laid out for memorisation rather than reading"],
  ["Full dialogue, both series", "MP3 audio files", "Practise on a commute, in the car, walking to the studio"],
  ["Full posture demonstrations", "Video, with Miss Ivara", "Stop, rewind, pause, or mute and teach the demonstration yourself"],
];

const academic = [
  ["15 premium online lectures", "Short-format video plus workbook", "Anatomical planes, muscular system, skeletal system, 8 limbs of yoga and more"],
  ["Assessments", "Multiple-choice quiz per module", "Fulfils the credential requirements without written essays"],
  ["250-page reference manual", "Lifetime PDF", "The same manual used on the Bali MasterClass"],
  ["Access period", "Lifetime", "Revisit any module at any point in your teaching career"],
];

const excludes = [
  ["No scheduled Zoom calls", "Nothing to miss, nothing to reschedule around."],
  ["No live chat rooms", "Your progress does not depend on a group keeping pace with you."],
  ["No long written essays", "Assessment is multiple-choice, tied to each lecture workbook."],
  ["No rigid deadlines", "Lifetime access means the course waits for you, not the reverse."],
];

const comparison = [
  ["Format", "Fully online, self-paced, from home", "6 days in person in Seminyak, Bali, with online pre-course study first"],
  ["Travel needed", "None", "Flights and accommodation to Bali"],
  ["Live teaching practice", "No", "Yes, in a heated room with supervision"],
  ["You finish with", "Course completion, plus the Yoga Alliance RYT-200 or YACEP designation upgrade pathway", "Yoga Alliance RYT 200 certification"],
];

const fit = [
  "You practise regularly but cannot take a week off work to travel.",
  "You live somewhere without a Hot 26&2 studio within reasonable distance.",
  "You have family commitments that make a six-day absence impractical right now.",
  "You have plateaued and want alignment and modification knowledge rather than more classes.",
  "You intend to do the Bali MasterClass eventually and want the pre-course work done well in advance.",
];

function ComponentList({ title, items }) {
  return (
    <div className={styles.group}>
      <h3 className={styles.groupTitle}>{title}</h3>
      <ul className={styles.components}>
        {items.map(([name, format, what]) => (
          <li key={name}>
            <span className={styles.compName}>{name}</span>
            <span className={styles.compFormat}>{format}</span>
            <span className={styles.compWhat}>{what}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OnlinePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="online-title">
        <div className={`container grid ${styles.heroGrid}`}>
          <div className={`span-7 ${styles.heroCopy}`}>
            <h1 id="online-title" className={styles.title}>
              <span className="line-mask">
                <span data-hero-line>Bikram Hot 26&amp;2</span>
              </span>
              <span className="line-mask">
                <span data-hero-line>teacher training</span>
              </span>
              <span className="line-mask">
                <span data-hero-line className="red">
                  online
                </span>
              </span>
            </h1>
            <p className={styles.lead} data-hero-fade>
              Fully self-paced, from home. The complete Standing and Floor Series dialogue as a workbook and MP3 audio, full posture demonstrations filmed with World
              Champion Miss Ivara, and lifetime access to all of it.
            </p>
            <div className="btn-row" data-hero-fade>
              <a href={links.onlinePreview} className="btn" target="_blank" rel="noopener noreferrer">
                Watch the free preview <ExternalIcon />
              </a>
              <a href="#enrol" className="btn btn--light">
                How to enrol
              </a>
            </div>
            <dl className={styles.facts} data-hero-fade>
              <div>
                <dt className="term">Lectures</dt>
                <dd>15 premium</dd>
              </div>
              <div>
                <dt className="term">Manual</dt>
                <dd>250 pages</dd>
              </div>
              <div>
                <dt className="term">Access</dt>
                <dd>Lifetime</dd>
              </div>
            </dl>
          </div>

          <div className={`span-5 ${styles.heroSide}`} data-hero-fade>
            {/* The cover artwork says "Click here to start", so it opens the free preview. */}
            <a href={links.onlinePreview} className={styles.cover} target="_blank" rel="noopener noreferrer">
              <Img
                name="online-cover"
                alt="Bikram Hot 26&2 Yoga Teacher Training Online Course: open the free course preview"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </a>
            <OnlineCheckout />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="get-title">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2 id="get-title">What you get for {onlineCourse.price}</h2>
            <p>
              Part 1 is the method itself: the sequence, the dialogue, the demonstrations. Part 2 is the academic layer required for Yoga Alliance credentialling: the lecture
              series, the workbooks, and the assessments.
            </p>
          </div>
          <div className="grid">
            <div className="span-6" data-reveal>
              <ComponentList title="Part 1: the method" items={method} />
            </div>
            <div className="span-6" data-reveal>
              <ComponentList title="Part 2: the academic layer" items={academic} />
            </div>
            <p className={`span-12 note ${styles.bonus}`} data-reveal>
              Enrolling now also unlocks 10 additional premium lectures beyond the core 15, a USD 490 value, plus the Yoga Alliance RYT-200 or YACEP designation upgrade
              pathway.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="not-title">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2 id="not-title">What this course deliberately does not include</h2>
            <p>
              The people who buy it are usually working full-time, raising a family, or living somewhere without a hot yoga studio, and a fixed Thursday-night Zoom slot is
              exactly what stops them finishing.
            </p>
          </div>
          <ul className={`grid ${styles.notList}`}>
            {excludes.map(([title, text]) => (
              <li key={title} className="span-6" data-reveal>
                <strong>{title}</strong>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="credit-title">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2 id="credit-title">Credited in full to the Bali MasterClass</h2>
            <p>
              If you later join Mr. Ian’s live Bikram Hot 26&amp;2 MasterClass in Bali, your full {onlineCourse.price} is credited against it, and your MasterClass pre-course
              preparation requirement is covered, because the online course is that preparation.
            </p>
          </div>
          <div className="table-wrap" data-reveal>
            <table className={`table ${styles.compare}`}>
              <caption className="visually-hidden">Online course compared with the Bali MasterClass</caption>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="visually-hidden">Feature</span>
                  </th>
                  <th scope="col">Online course</th>
                  <th scope="col">Hot 26&amp;2 MasterClass, Bali</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, online, bali]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{online}</td>
                    <td>{bali}</td>
                  </tr>
                ))}
                <tr>
                  <th scope="row">Price</th>
                  <td>
                    <strong>{onlineCourse.price}</strong>
                  </td>
                  <td>
                    <Link href="/dates-pricing" className="text-link">
                      See dates &amp; pricing <ArrowRight />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="who-title">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2 id="who-title">Who built it and who it is for</h2>
            <p>You do not need to be an advanced practitioner. There is no audition, no flexibility requirement, and no minimum years of practice.</p>
          </div>
          <div className="grid">
            <div className={`span-5 ${styles.who}`} data-reveal>
              <h3>Curated by Mr. Ian, demonstrated by Miss Ivara</h3>
              <p>
                The course was curated by Mr. Ian Terry, E-RYT 500 and founder of YogaFX. In June 2026 he was appointed Master Trainer of the Republic of Indonesia Yogasana
                Sports Federation.
              </p>
              <p>
                The posture demonstrations are filmed with Miss Ivara Candra Kartika, a 2023 YogaFX graduate who went on to take Gold and Bronze at the World Yogasana Sports
                Federation Championships in Ahmedabad in June 2026. Stop, rewind, pause, mute the audio, or cover the dialogue and teach Miss Ivara using your own developing
                script.
              </p>
            </div>
            <div className={`span-7 ${styles.who}`} data-reveal>
              <h3>It fits well if you recognise yourself in any of these</h3>
              <ul className="list list--ruled">
                {fit.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="research-title">
        <div className={`container grid ${styles.research}`}>
          <h2 id="research-title" className="span-5" data-reveal>
            What the research says about Hot 26&amp;2
          </h2>
          <div className={`span-7 ${styles.researchText}`} data-reveal>
            <p>
              A randomised trial run through Harvard-affiliated Massachusetts General Hospital (Nyer et al., 2023) found that 59 percent of participants in a heated yoga
              intervention cut their depression symptoms by half or more after eight weeks, versus 6 percent on the waitlist. A 2025 systematic review covering 43 studies and 942
              participants found consistent gains in flexibility, bone density, and general well-being.
            </p>
            <p className="note">
              Those findings describe group averages in controlled studies, not guaranteed individual outcomes. Anyone with a medical condition should consult a healthcare
              professional before starting a heated practice.
            </p>
          </div>
        </div>
      </section>

      <section id="enrol" className="section section--dark" aria-labelledby="enrol-title">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2 id="enrol-title">How to enrol</h2>
            <p>
              {onlineCourse.price}, or {onlineCourse.plan}. Payments open YogaFX’s existing secure PayPal transfer pages.
            </p>
          </div>
          <ol className={`grid ${styles.steps}`}>
            <li className="span-4" data-reveal>
              <h3>Watch the free preview</h3>
              <p>A sample posture demonstration, a sample premium lecture, and a downloadable sample of the dialogue MP3.</p>
              <a href={links.onlinePreview} className="text-link" target="_blank" rel="noopener noreferrer">
                Free course preview <ExternalIcon size={14} />
              </a>
            </li>
            <li className="span-4" data-reveal>
              <h3>Pay for the course</h3>
              <p>Choose the payment page in your currency.</p>
              <div className={styles.payLinks}>
                {onlineCourse.payment.map((p) => (
                  <a key={p.currency} href={p.href} className="text-link">
                    Pay {p.amount} <ArrowRight />
                  </a>
                ))}
              </div>
            </li>
            <li className="span-4" data-reveal>
              <h3>Complete your enrollment</h3>
              <p>Fill in the online course enrollment application after your payment.</p>
              <a href={links.onlineEnrollment} className="text-link">
                Enrollment application <ExternalIcon size={14} />
              </a>
            </li>
          </ol>
          <div className={styles.question} data-reveal>
            <p>
              Want a question answered first? Message the YogaFX team on WhatsApp at {contact.whatsappDisplay} and ask for the online course.
            </p>
            <a href={whatsappLink(["Course: Online course"])} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Open WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
