import Link from "@/components/Link";
import Img from "@/components/Img";
import Countdown from "@/components/Countdown";
import HomeEffects from "@/components/HomeEffects";
import HorizontalJourney from "@/components/HorizontalJourney";
import { ArrowRight, ExternalIcon, WhatsAppIcon } from "@/components/Icons";
import { links, masterclass, nextIntake, onlineCourse, whatsappLink } from "@/lib/site";
import styles from "./home.module.css";

export const metadata = {
  title: { absolute: "Yoga Teacher Training Bali 2027 | YogaFX Teacher Training" },
  description:
    "Yoga teacher training in Bali with YogaFX: hybrid RYT 200 Bikram Hot 26&2 MasterClass led by Ian Terry. Next intake 24–29 January 2027.",
  alternates: { canonical: "/" },
};

// Facts for the moving band, all taken from the original site.
const ticker = [
  "Yoga Alliance Registered Yoga School RYS 200",
  "6-day hybrid MasterClass",
  "Seminyak, Bali",
  "Original Bikram Hot 26&2 series",
  "1,500+ teachers certified",
  "Graduates from 80+ countries",
  "Led by Mr. Ian Terry, E-RYT 500",
];

const stats = [
  { count: 6, suffix: "-day", label: "hybrid MasterClass in Seminyak, Bali" },
  { text: "RYT 200", label: "Yoga Alliance certification on graduation" },
  { count: 1500, suffix: "+", label: "yoga teachers certified by Mr. Ian" },
  { count: 80, suffix: "+", label: "countries our graduates come from" },
];

const benefits = [
  "Gain international certification recognized by Yoga Alliance USA",
  "Learn the original Bikram Hot Yoga 26&2 series with expert instruction",
  "Build teaching confidence with real-time feedback and mentorship",
  "Join a supportive global community of like-minded yogis and mentors",
];

const journey = [
  {
    stage: "At home",
    image: "precourse",
    alt: "YogaFX pre-course preparation workbook and online lecture videos",
    text: "Before arriving in Bali you complete the Exclusive YogaFX Pre-Course Preparation in the comfort of your home.",
    items: ["Your Full Series Dialogue", "Exclusive Access to Online Yoga Lectures", "Download Your Workbooks"],
  },
  {
    stage: "Six days in Bali",
    image: "correction",
    alt: "Mr. Ian correcting a student’s posture during a YogaFX hot yoga class",
    text: "Then join us in Seminyak for your 6-day Bikram 26&2 Hot Yoga Teacher Training practical experience.",
    items: ["Teach your first yoga class", "Learn your yoga teaching dialogue", "Join our Interactive Posture Clinics", "Learn How To Open a Yoga Studio"],
  },
  {
    stage: "Graduate",
    image: "grad-2019",
    alt: "A YogaFX graduating group holding their certificates in Bali",
    text: "Upon completion of your 6-day training in Bali you graduate with Yoga Alliance RYT 200 Hours International Yoga Certification.",
    items: ["Yoga Alliance RYT 200 certified", "Existing teachers level up to YACEP", "Graduates’ access to the Online Premium Yoga Library, 50+ lectures"],
  },
];

export default function HomePage() {
  return (
    <>
      <HomeEffects />

      {/* ---------- Hero ---------- */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`container grid ${styles.heroInner}`}>
          <div className={`span-6 ${styles.heroCopy}`}>
            <h1 id="hero-title" className={styles.heroTitle}>
              <span className="line-mask">
                <span data-hero-line>Hot yoga</span>
              </span>
              <span className="line-mask">
                <span data-hero-line>teacher</span>
              </span>
              <span className="line-mask">
                <span data-hero-line>training</span>
              </span>
              <span className="line-mask">
                <span data-hero-line className={styles.heroBali}>
                  Bali
                </span>
              </span>
            </h1>
            <p className={styles.heroLead} data-hero-fade>
              Join our 6-day unique hybrid Bikram Hot 26&amp;2 Yoga Teacher Training MasterClass, led in person by founder Mr. Ian Terry (E-RYT 500).
            </p>
            <div className="btn-row" data-hero-fade>
              <Link href="/dates-pricing" className="btn">
                Book your place <ArrowRight />
              </Link>
              <a href={links.quiz} className="btn btn--light" target="_blank" rel="noopener noreferrer">
                Take The Quiz Now <ExternalIcon />
              </a>
            </div>
          </div>

          <div className={`span-6 ${styles.heroVisual}`}>
            <div className={styles.heroFrame} data-hero-reveal>
              <Img
                name="hero-ian"
                alt="Mr. Ian Terry adjusting a student in Standing Bow Pulling Pose during a packed YogaFX hot yoga class"
                sizes="(min-width: 1024px) 55vw, 100vw"
                priority
                data-hero-zoom
              />
            </div>
            <div className={styles.heroCard} data-hero-fade>
              <p className="term">Mr Ian’s next MasterClass</p>
              <p className={styles.heroDate}>{nextIntake.label}</p>
              <p className={styles.heroPlace}>Seminyak, Bali</p>
              <Countdown target={masterclass.nextStart} tone="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Moving facts band ---------- */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {ticker.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* ---------- Intro + numbers ---------- */}
      <section className="section" aria-labelledby="intro-title">
        <div className={`container grid ${styles.intro}`}>
          <div className={`span-6 ${styles.introCopy}`} data-reveal>
            <h2 id="intro-title" className={styles.introTitle}>
              Become an internationally certified <span className="red">hot yoga teacher</span>
            </h2>
            <p className={styles.introLead}>
              Complete all theory online, then fly to Bali for an intensive 6-day training led by Mr. Ian. Begin your learning journey from home, on your own schedule, and arrive
              in Bali prepared and ready to teach.
            </p>
          </div>
          <dl className={`span-6 ${styles.stats}`} data-reveal>
            {stats.map((s) => (
              <div key={s.label}>
                <dt className={styles.statValue}>
                  {s.count ? (
                    <span data-count={s.count} data-suffix={s.suffix}>
                      {s.count.toLocaleString("en-US")}
                      {s.suffix}
                    </span>
                  ) : (
                    s.text
                  )}
                </dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
          <ul className={`span-12 ${styles.benefits}`}>
            {benefits.map((b) => (
              <li key={b} data-reveal>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Journey (pinned horizontal scroll on desktop) ---------- */}
      <HorizontalJourney
        heading={
          <div className={styles.journeyHead}>
            <h2 id="journey-title">The hybrid MasterClass</h2>
            <Link href="/bali-masterclass" className="text-link">
              Explore the MasterClass <ArrowRight />
            </Link>
          </div>
        }
      >
        {journey.map((step) => (
          <article key={step.stage} className={styles.panel}>
            <div className={styles.panelMedia}>
              <Img name={step.image} alt={step.alt} sizes="(min-width: 1024px) 36vw, 86vw" />
            </div>
            <div className={styles.panelBody}>
              <h3>{step.stage}</h3>
              <p>{step.text}</p>
              <ul className="list">
                {step.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
        <Link href="/dates-pricing" className={styles.panelCta}>
          <span className="term">Next intake</span>
          <span className={styles.panelCtaDate}>{nextIntake.label}</span>
          <span className={styles.panelCtaLink}>
            See dates &amp; pricing <ArrowRight size={22} />
          </span>
        </Link>
      </HorizontalJourney>

      {/* ---------- Gallery with drifting columns ---------- */}
      <section className="section" aria-labelledby="gallery-title">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2 id="gallery-title">Inside the training</h2>
            <p>Classes, posture clinics and graduation days from YogaFX trainings in Bali.</p>
          </div>
          <div className={styles.gallery}>
            <div className={`frame ${styles.gA}`} data-reveal>
              <Img name="street-group" alt="A YogaFX training group gathered on a street in Seminyak, Bali" sizes="(min-width: 768px) 42vw, 100vw" data-drift />
            </div>
            <blockquote className={styles.galleryQuote} data-reveal>
              <p>“Loved the journey we went on together. Ian helped us internally grow and look at ourselves. He built a beautiful community.”</p>
              <footer>Siobhan Flaherty</footer>
            </blockquote>
            <div className={`frame ${styles.gC}`} data-reveal>
              <Img name="about-group" alt="Mr. Ian with a large group of YogaFX students and graduates at a training event in Bali" sizes="(min-width: 768px) 25vw, 50vw" data-drift />
            </div>
            <div className={`frame ${styles.gD}`} data-reveal>
              <Img name="selfie-2019" alt="YogaFX trainees celebrating together in their YogaFX shirts" sizes="(min-width: 768px) 25vw, 50vw" data-drift />
            </div>
            <div className={`frame ${styles.gE}`} data-reveal>
              <Img name="grad-slide" alt="A YogaFX graduating class celebrating together with their certificates" sizes="(min-width: 768px) 42vw, 100vw" data-drift />
            </div>
            <div className={`frame ${styles.gF}`} data-reveal>
              <Img name="mat-group" alt="Mr. Ian with a group of smiling YogaFX trainees on their yoga mats" sizes="(min-width: 768px) 33vw, 50vw" data-drift />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Two ways to train ---------- */}
      <section className="section section--paper" aria-labelledby="formats-title">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2 id="formats-title">Two ways to train</h2>
            <p>Start online from home, or join Mr. Ian in Bali. Your online course fee is credited in full if you join the MasterClass later.</p>
          </div>
          <div className="grid">
            <Link href="/bali-masterclass" className={`span-6 ${styles.format}`} data-reveal>
              <Img name="mat-circle" alt="A YogaFX training group sitting together on yoga mats in Bali" sizes="(min-width: 1024px) 50vw, 100vw" />
              <span className={styles.formatShade} aria-hidden="true" />
              <span className={styles.formatBody}>
                <span className="term">In person · 6 days</span>
                <span className={styles.formatTitle}>Hot 26&amp;2 MasterClass, Bali</span>
                <span className={styles.formatText}>Live teaching practice in a heated room with supervision. Next intake {nextIntake.label}.</span>
                <span className={styles.formatLink}>
                  View the MasterClass <ArrowRight />
                </span>
              </span>
            </Link>
            <Link href="/online-course" className={`span-6 ${styles.format}`} data-reveal>
              <Img name="kit-table" alt="YogaFX posture dialogue guides and teacher training workbooks" sizes="(min-width: 1024px) 50vw, 100vw" />
              <span className={styles.formatShade} aria-hidden="true" />
              <span className={styles.formatBody}>
                <span className="term">Online · self-paced</span>
                <span className={styles.formatTitle}>Online course, {onlineCourse.price}</span>
                <span className={styles.formatText}>Fully online from home, no travel, lifetime access to every lecture and workbook.</span>
                <span className={styles.formatLink}>
                  View the online course <ArrowRight />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Teacher + proof ---------- */}
      <section className="section section--dark" aria-labelledby="teacher-title">
        <div className="container grid">
          <div className={`span-6 ${styles.teacherMedia}`} data-reveal>
            <div className={`frame ${styles.teacherFrame}`}>
              <Img name="ian-bali" alt="Mr. Ian Terry guiding students through a backbend during a YogaFX class in Bali" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
          </div>
          <div className={`span-6 ${styles.teacherCopy}`} data-reveal>
            <h2 id="teacher-title">Meet your teacher, Mr. Ian</h2>
            <p className={styles.teacherLead}>
              Mr. Ian Terry is the founder and CEO of YogaFX International Yoga Teacher Training Academy, launched in 2017, and has been appointed a Master Trainer of the
              Republic of Indonesia Yogasana Sports Federation.
            </p>
            <dl className={styles.teacherStats}>
              <div>
                <dt>
                  <span data-count="12000" data-suffix="+">
                    12,000+
                  </span>
                </dt>
                <dd>hours of international teaching and teacher training</dd>
              </div>
              <div>
                <dt>E-RYT 500</dt>
                <dd>Yoga Alliance, the highest standard of teacher accreditation</dd>
              </div>
            </dl>
            <Link href="/about#founder" className="text-link">
              About Mr. Ian and YogaFX <ArrowRight />
            </Link>
          </div>

          <div className={`span-12 ${styles.proof}`} data-reveal>
            <div className={`frame ${styles.proofFrame}`}>
              <Img
                name="championship"
                alt="Indonesian Yogasana team members, including YogaFX graduates, at the World Yogasana Championship 2026 in Ahmedabad"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className={styles.proofBody}>
              <h3>Graduates competing at world level</h3>
              <p>
                Under Mr. Ian’s guidance, YogaFX graduates represented Indonesia at the World Yogasana Sports Federation Championships in Ahmedabad, Gujarat, India in June
                2026.
              </p>
              <Link href="/about" className="text-link">
                See their results <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Closing call to action ---------- */}
      <section className={styles.cta} aria-labelledby="cta-title">
        <div className={`container grid ${styles.ctaInner}`}>
          <div className={`span-6 ${styles.ctaCopy}`} data-reveal>
            <p className="term">Mr Ian’s next MasterClass</p>
            <h2 id="cta-title" className={styles.ctaDate}>
              {nextIntake.label}
            </h2>
            <p className={styles.ctaText}>
              Our Yoga FX Hot Yoga Teacher Training are in high demand, and spaces are limited. For instant access Q&amp;A on course prices and information please WhatsApp us
              directly.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/dates-pricing" className="btn btn--dark">
                Book your place <ArrowRight />
              </Link>
              <a href={whatsappLink()} className="btn btn--light btn--whatsapp" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> WhatsApp us
              </a>
            </div>
          </div>
          <div className={`span-6 ${styles.ctaVisual}`}>
            <Img name="correction" alt="Mr. Ian correcting a student’s arm position during a YogaFX hot yoga class" sizes="(min-width: 1024px) 50vw, 100vw" data-drift />
            <div className={styles.ctaTimer}>
              <p className="term">Starts in</p>
              <Countdown target={masterclass.nextStart} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
