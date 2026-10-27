import Link from "@/components/Link";
import Img from "@/components/Img";
import { ArrowRight, ExternalIcon } from "@/components/Icons";
import { links, rysStatement } from "@/lib/site";
import styles from "./about.module.css";

export const metadata = {
  title: "About YogaFX and Founder Mr. Ian Terry",
  description:
    "YogaFX International Yoga Teacher Training Academy in Seminyak, Bali: our mission, teaching approach, Yoga Alliance registration and founder Mr. Ian Terry, E-RYT 500.",
  alternates: { canonical: "/about" },
};

const facts = [
  ["Launched", "2017"],
  ["Based in", "Seminyak, Bali"],
  ["Yoga Alliance", "RYS 200"],
  ["Also approved by", "ACE"],
];

const benefits = [
  "Gain international certification recognized by Yoga Alliance USA",
  "Learn the original Bikram Hot Yoga 26&2 series with expert instruction",
  "Study online at your own pace and attend a 6-day intensive in-person training",
  "Build teaching confidence with real-time feedback and mentorship",
  "Join a supportive global community of like-minded yogis and mentors",
];

const alignment = ["Feet", "Knees", "Pelvis", "Spine", "Rib cage", "Skull"];

const credentials = [
  "Yoga Alliance E-RYT 500",
  "Bikram Yoga Certified Teacher, certification started in Los Angeles in 2012",
  "ACE Certified, American Council on Exercise",
  "YACEP, Yoga Alliance Continuing Education Provider",
  "Founder of a Yoga Alliance Registered Yoga School (RYS 200), approved by the American Council on Exercise (ACE)",
  "Applied Neuroscience and Brain Health, a certification accredited by the International Coaching Federation (ICF), by the National Board for Health and Wellness Coaching (NBHWC) as a continuing education provider, and by HCANZA",
  "Master Trainer, Republic of Indonesia Yogasana Sports Federation",
];

const story = [
  {
    title: "A fork in the road",
    text: "Despite years of teaching alongside Bikram, Mr. Ian faced a surprising reality: Bikram Yoga Teacher Training was not recognised by Yoga Alliance. He went back to being a student, completed a Yoga Alliance RYT 200, and later advanced to E-RYT 500. The goal was never the title. It was to make sure others would not face the same roadblock.",
  },
  {
    title: "Why YogaFX was born",
    text: "To make high-quality, internationally accredited Bikram-style yoga teacher training more affordable, more accessible, and more aligned with the modern yoga world: a Yoga Alliance certified curriculum, the authentic Hot 26&2 sequence, and a hybrid format of online theory plus a 6-day in-person intensive in Bali.",
  },
  {
    title: "His teaching style",
    text: "Mr. Ian’s teaching is clear, compassionate and empowering. What sets him apart is his dedication to preserving the integrity of the original method, and making sure each student gets personal attention and constructive feedback.",
  },
];

const timeline = [
  ["2019", ["January: YogaFX Yoga Teacher Training RYT 200-Hours Bali", "July: YogaFX Yoga Teacher Training RYT 200-Hours Bali"]],
  ["2020", ["Set-up YogaFX Online Yoga Teacher Training RYT 200-Hours"]],
  ["2021", ["Production of 50+ high-quality teacher training lectures"]],
  ["2022", ["September: YogaFX Yoga Teacher Training RYT 200-Hours Bali", "October: International Yoga Event in Villa IPSA Buleleng, 250+ participants"]],
  [
    "2023",
    [
      "January: YogaFX Yoga Teacher Training RYT 200-Hours Bali",
      "March and July: YogaFX RYT 200 in Manchester, UK",
      "International Yoga Event in Batam, 800 participants",
      "Indonesian Yoga Event, Villa IPSA Buleleng, 300+ participants",
      "Launch of 200, 100 and 50-Hour Certifications",
      "International Day of Yoga Bali, 5,000+ participants",
    ],
  ],
  ["2025", ["July: FORNAS VIII Indonesia Championships, Palembang", "August: 6th Asian Yogasana Championship, Fujairah, United Arab Emirates"]],
  ["2026", ["June: World Yogasana Sports Federation Championships, Ahmedabad, Gujarat, India", "June: appointed Master Trainer of the Republic of Indonesia Yogasana Sports Federation"]],
];

const graduates = [
  {
    name: "Ms Ivara Candra Kartika",
    year: "2023 graduate",
    text: "Gold and Bronze at the World Championships in Ahmedabad, June 2026; Silver at the Asian Yogasana Championships, UAE, August 2025; MasterClass Gold at FORNAS VIII Indonesia, July 2025.",
  },
  {
    name: "Mr Arkan Fauzan Riyanto",
    year: "2022 graduate",
    text: "2 Silver and 3 Bronze at the World Championships in Ahmedabad, June 2026; three-time Gold medallist at the FORNAS Indonesia Championships in 2022, 2023 and 2025.",
  },
  {
    name: "Mr Slamet Ariyanto",
    year: "2024 graduate",
    text: "Chairman of the Yoga Practitioner Association of Indonesia (PPYNI) and Indonesian Yogasana Team Manager.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="about-title">
        <div className={`container grid ${styles.heroGrid}`}>
          <div className={`span-6 ${styles.heroCopy}`}>
            <h1 id="about-title" className={styles.title}>
              <span className="line-mask">
                <span data-hero-line>About</span>
              </span>
              <span className="line-mask">
                <span data-hero-line className="red">
                  YogaFX
                </span>
              </span>
            </h1>
            <p className={styles.lead} data-hero-fade>
              Yoga FX International Yoga Teacher Training Academy specializes in the original Bikram Hot Yoga 26&amp;2 series, offering accessible, authentic, and accredited
              yoga teacher training programs to students from all over the world.
            </p>
          </div>
          <div className={`span-6 frame ${styles.heroImage}`} data-hero-fade>
            <Img
              name="about-group"
              alt="Mr. Ian with a large group of YogaFX students and graduates at a training event in Bali"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
          <dl className={`span-12 ${styles.facts}`} data-hero-fade>
            {facts.map(([term, value]) => (
              <div key={term}>
                <dt className="term">{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="mission-title">
        <div className="container grid">
          <div className={`span-6 ${styles.intro}`} data-reveal>
            <h2 id="mission-title">Our mission</h2>
            <p className={styles.statement}>
              To empower individuals from around the world to experience the life-changing benefits of yoga, not just as a physical practice, but as a complete path to
              healing, transformation, and personal growth.
            </p>
            <p>
              We offer internationally recognized Yoga Teacher Training programs with a focus on the original Bikram Hot Yoga 26&amp;2 series. Our courses are certified by Yoga
              Alliance USA and are available in both online and hybrid formats, making it easier than ever to begin your journey, no matter where you are in the world.
            </p>
            <div className={styles.links}>
              <Link href="/bali-masterclass" className="text-link">
                Bali MasterClass <ArrowRight />
              </Link>
              <Link href="/online-course" className="text-link">
                Online course <ArrowRight />
              </Link>
            </div>
          </div>
          <div className={`span-6 ${styles.panel}`} data-reveal>
            <h3>Benefits of joining</h3>
            <ul className="list list--ruled">
              {benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="approach-title">
        <div className="container grid">
          <div className={`span-7 ${styles.intro}`} data-reveal>
            <h2 id="approach-title">How we teach</h2>
            <p className={styles.statement}>YogaFX teaching is based on proper alignment, sequencing, keyword dialogues, anatomical awareness, and education.</p>
            <p>
              Our yoga teacher training’s core aim is to restore proper, balanced posture to the body. This is achieved through neutral positioning of the limbs, starting at the
              feet and moving to the knees, pelvis, spine, rib cage, and skull.
            </p>
            <p>
              Yoga FX aim is to create a supportive, inspiring and empowering learning community that promotes education and personal growth whilst cultivating the craft of
              teaching yoga, so that trainees may transition confidently from student to guide.
            </p>
          </div>
          <ol className={`span-5 ${styles.alignment}`} aria-label="Order of alignment, from the ground up">
            <span className={styles.alignmentTrack} aria-hidden="true">
              <span data-progress="y" />
            </span>
            {alignment.map((part) => (
              <li key={part}>{part}</li>
            ))}
          </ol>
          <div className={`span-12 ${styles.ya}`} data-reveal>
            <Img name="ya-badge" alt="Registered Yoga Teacher RYT 200 Yoga Alliance badge" sizes="120px" className={styles.badge} />
            <div className={styles.yaText}>
              <h3>Yoga Alliance registered</h3>
              <p>{rysStatement}</p>
              <p>Students who complete a verified training with YogaFX will be eligible to register with Yoga Alliance as Registered Yoga Teachers (RYTs).</p>
            </div>
            <a href={links.yogaAllianceProfile} className={`btn btn--outline ${styles.yaLink}`} target="_blank" rel="noopener noreferrer">
              School profile <ExternalIcon size={14} />
            </a>
          </div>
        </div>
      </section>

      <section id="founder" className="section section--dark" aria-labelledby="founder-title">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2 id="founder-title">Mr. Ian Terry, founder</h2>
            <p>
              Founder and CEO of YogaFX International Yoga Teacher Training Academy, launched in 2017. An E-RYT 500 with more than 12,000 hours of teaching experience, he has
              certified over 1,500 yoga teachers from more than 80 countries.
            </p>
          </div>
          <div className="grid">
            <div className={`span-5 frame ${styles.founderImage}`} data-reveal>
              <Img name="ian-bali" alt="Mr. Ian Terry guiding students through a backbend during a class in Bali" sizes="(min-width: 1024px) 40vw, 100vw" />
            </div>
            <div className={`span-7 ${styles.block}`} data-reveal>
              <p>
                Before founding the academy he assisted on Bikram Choudhury’s staff across five major international training events, and he has taught in London, Los
                Angeles, Beijing, Dubai, Moscow, Sydney and Thailand. Beyond traditional practitioners, he has coached MMA fighters, professional footballers and gymnasts.
              </p>
              <h3>Credentials</h3>
              <ul className="list list--ruled">
                {credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            {story.map((s) => (
              <div key={s.title} className={`span-4 ${styles.story}`} data-reveal>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="timeline-title">
        <div className="container grid">
          <div className={`span-5 ${styles.mapCol}`} data-reveal>
            <h2 id="timeline-title">Mr. Ian’s yoga experience</h2>
            <p className="muted">His teaching locations span the globe, including the UK, USA, Thailand, Philippines, Russia, India, Dubai, China, Bali, South Korea, New York, and Paris.</p>
            <div className={`frame ${styles.map}`}>
              <Img
                name="teaching-map"
                alt="World map of Mr. Ian’s yoga teaching locations, from Los Angeles and Manchester to Moscow, Beijing, Bali and Sydney"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
          <ol className={`span-7 ${styles.timeline}`}>
            {timeline.map(([year, events]) => (
              <li key={year} className={styles.year} data-reveal>
                <span className={styles.yearLabel}>{year}</span>
                <ul>
                  {events.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="grads-title">
        <div className="container">
          <div className="split-head" data-reveal>
            <h2 id="grads-title">Graduates competing at world level</h2>
            <p>
              In June 2026, YogaFX graduates represented Indonesia at the World Yogasana Sports Federation Championships in Ahmedabad, Gujarat, India.
            </p>
          </div>
          <div className="grid">
            <div className={`span-7 frame ${styles.gradsImage}`} data-reveal>
              <Img
                name="championship"
                alt="Indonesian Yogasana team members, including YogaFX graduates, at the World Yogasana Championship 2026 in Ahmedabad, India"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
            <ul className={`span-5 ${styles.gradList}`}>
              {graduates.map((g) => (
                <li key={g.name} data-reveal>
                  <h3>{g.name}</h3>
                  <p className={styles.gradYear}>{g.year}</p>
                  <p>{g.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="join-title">
        <div className={`container grid ${styles.ctaGrid}`} data-reveal>
          <div className="span-7">
            <h2 id="join-title">Join our yoga teacher training</h2>
            <p className={styles.ctaText}>
              Whether you’re aiming to become a certified yoga teacher or seeking personal growth through a transformative learning experience, our training is thoughtfully
              designed for you.
            </p>
          </div>
          <div className={`span-5 btn-row ${styles.ctaActions}`}>
            <Link href="/dates-pricing" className="btn btn--dark">
              Dates &amp; pricing <ArrowRight />
            </Link>
            <Link href="/contact#enquire" className="btn btn--light">
              Enquire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
