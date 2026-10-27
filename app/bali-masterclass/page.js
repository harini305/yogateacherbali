import Link from "@/components/Link";
import Img from "@/components/Img";
import PageHead from "@/components/PageHead";
import StageTabs from "@/components/StageTabs";
import VideoFacade from "@/components/VideoFacade";
import { ArrowRight, PlusIcon, WhatsAppIcon } from "@/components/Icons";
import { nextIntake, whatsappLink } from "@/lib/site";
import styles from "./bali.module.css";

export const metadata = {
  title: "Hot Yoga Teacher Training Bali – 6-Day Hybrid MasterClass",
  description:
    "Join the 6-day hybrid Bikram Hot 26&2 Yoga Teacher Training MasterClass in Seminyak, Bali with Mr. Ian: pre-course preparation at home, practical training in Bali, Yoga Alliance RYT 200.",
  alternates: { canonical: "/bali-masterclass" },
};

const stages = [
  {
    id: "before",
    label: "Before Bali",
    hint: "Pre-course preparation at home",
    title: "Exclusive pre-course preparation",
    media: <Img name="precourse" alt="YogaFX pre-course preparation workbook and online lecture videos" sizes="(min-width: 768px) 50vw, 100vw" />,
    content: (
      <>
        <p>
          Reduce the amount of time that you need to be away from your job, family, and loved ones. Before arriving in Bali you will complete the Exclusive YogaFX Pre-Course
          Preparation in the comfort of your home, including:
        </p>
        <ul className="list">
          <li>Your Full Series Dialogue</li>
          <li>Exclusive Access to Online Yoga Lectures</li>
          <li>Download Your Workbooks</li>
        </ul>
        <p className="muted">
          Modules cover the 26 asanas and 2 pranayama techniques, anatomy and physiology, yoga philosophy and ethics, teaching methodology and cueing, and meditation and
          mindfulness tools.
        </p>
      </>
    ),
  },
  {
    id: "bali",
    label: "In Bali",
    hint: "Six days in Seminyak",
    title: "Practical experience in Bali",
    media: <Img name="in-bali" alt="Collage of YogaFX trainees practising and teaching during the training in Bali" sizes="(min-width: 768px) 50vw, 100vw" />,
    content: (
      <>
        <p>Then join us in Bali for your 6-day exclusive Bikram 26&amp;2 Hot Yoga Teacher Training practical experience. You will have the opportunity to:</p>
        <ul className="list">
          <li>Teach your first yoga class</li>
          <li>Learn your yoga teaching dialogue</li>
          <li>Join our Interactive Posture Clinics</li>
          <li>Learn How To Open a Yoga Studio</li>
          <li>Existing teachers level up to YACEP</li>
        </ul>
      </>
    ),
  },
  {
    id: "graduate",
    label: "Graduate",
    hint: "Yoga Alliance RYT 200",
    title: "Graduate as an RYT 200 teacher",
    media: <Img name="certification" alt="YogaFX graduates holding their certificates on graduation day" sizes="(min-width: 768px) 50vw, 100vw" />,
    content: (
      <>
        <p>Upon completion of your 6-day training in Bali you will graduate with Yoga Alliance RYT 200 Hours International Yoga Certification.</p>
        <p>
          After graduation and upon your RYT 200 Hours certificate registration with Yoga Alliance, which we confirm, you will be recognized as an internationally registered
          yoga teacher. We will take you through the Yoga Alliance registration process step by step.
        </p>
      </>
    ),
  },
];

const schedule = [
  ["07:00 – 08:30", "Morning Hot Yoga Class"],
  ["10:00 – 12:00", "Posture Clinic & Correction Sessions"],
  ["13:00 – 14:30", "Practical Teaching & Feedback"],
  ["17:00 – 18:30", "Evening Hot Yoga Class"],
  ["19:00 – 19:30", "Journaling & Reflection"],
  ["19:30 – 20:00", "Community Sharing Circles"],
];

const included = [
  "2 Classes of Hot Yoga Per Day",
  "E-book Training Manuals & Workbook",
  "Yoga Alliance RYT 200 Certified",
  "Exclusive Pre-course Preparation",
  "Real Teaching & Dialogue Coaching Experience Master Class",
  "Posture Clinics for Proper Alignment, Modifications and Dialogue Coaching",
  "YogaFX Bag, Shirt, Yoga Alliance Certified Yoga Teacher ID Card & more",
  "Bonus: Exclusive Graduates Access to YogaFX Online Premium Yoga Library 50+ Lectures",
];

const inclusions = [
  {
    title: "250-page YogaFX Lifetime PDF Reference Manual",
    body: (
      <>
        <p>This comprehensive 250-page manual has been carefully crafted to include among others:</p>
        <ul className="list">
          <li>Hatha yoga series of postures and benefits</li>
          <li>Ashtanga sequence of Hatha yoga postures</li>
          <li>Bikram Beginners Series of Hatha Yoga postures</li>
          <li>Secrets Of The Kundalini and Keys To Success In Life</li>
          <li>Importance of yoga, Obstacles of Yoga Sadhana, External and Internal Yoga</li>
          <li>Divine Power of The Mudras, Seven Chakra Energy Centres, Acupressure</li>
        </ul>
      </>
    ),
  },
  {
    title: "150-page YogaFX Posture Clinic Workbook",
    body: (
      <p>
        An at-a-glance quick reference guide for taking to your class and posture clinics. It details alignments, adjustments, and posture benefits, along with quick
        dialogue references and space for taking notes. There is also an easy video access link for educational tutorials, most helpful during your course non-contact hours.
      </p>
    ),
  },
  {
    title: "Joanne – My Yoga Dialogue Guru",
    body: (
      <p>
        Includes The 20 Most Important Yoga Teaching keywords, and a complete, detailed posture dialogue for a 45-minute, 60-minute and up to a 90-minute yoga class, with
        posture benefits and dialogue variations.
      </p>
    ),
  },
  {
    title: "Yoga Alliance Registration RYT 200 Certificate",
    body: (
      <p>
        The certification that you receive from YogaFX on completion of the course will allow you to apply to Yoga Alliance for registration as a certified yoga teacher. It is
        not mandatory, but it will significantly improve your yoga teaching opportunities.
      </p>
    ),
  },
  {
    title: "Teacher Training Rejoin Anytime Free",
    body: (
      <p>
        All of our YogaFX students, now teachers, are very welcome to come back and join us on future YogaFX Teacher Training Courses. Some teachers come back and join as
        staff.
      </p>
    ),
  },
  {
    title: "Graduates Private Members Lounge",
    body: (
      <p>
        Upon graduation you gain free access to our resource library of more than 60,000 words, covering topics from a good night’s sleep, stress, anxiety and travelling to
        Pranic Healing Yoga, practice starter kits and The Complete New Yoga Studio Marketing Plan. The general public can access it at a price of $349.
      </p>
    ),
  },
  {
    title: "Friends With Benefits",
    body: <p>When two friends join the same course at the same time both will receive a 10% Off their Yoga Course Investment.</p>,
  },
  {
    title: "Flexible food options",
    body: (
      <p>
        No one-size-fits-all food menu: set your own daily food budget and choose from local restaurants within walking distance, with Japanese, Chinese, Mediterranean,
        Balinese, Western, Vegetarian and Vegan menus.
      </p>
    ),
  },
];

const bonus = [
  "Yoga & Business: Learn how to grow your teaching career",
  "Yoga & Mindset: Strengthen your inner self",
  "Sound Healing: Deep relaxation and recovery",
  "Graduation Dinner: Celebrate your transformation",
  "Branding Yourself as a Yoga Teacher",
  "The Art of Creating Sequences",
  "Teaching Online vs In-Person Classes",
];

const testimonials = [
  {
    quote:
      "The experience in Bali with YogaFX far exceeded my expectations! The training was tough but so rewarding and we got to meet and become friends with some incredible people from all parts of the world! Thank you so much to Ian, Grace, Ivara and the whole team for making this a truly wonderful and worthwhile week! Highly recommend YogaFX",
    name: "Samantha Grove",
  },
  {
    quote:
      "Loved the journey we went on together. Ian helped us internally grow and look at ourselves. He built a beautiful community. Forever grateful. His knowledge of Bikram yoga is amazing. Would love to come back and learn to teach like him.",
    name: "Siobhan Flaherty",
  },
  {
    quote:
      "Mr.Ian and His team were amazing! We all had to work and learn hard, it was so rewarding. We are all so healed inside out. I recommend this course to everyone so we can all take better care of ourselves and each other.",
    name: "Celia Takahashi",
  },
];

export default function BaliPage() {
  return (
    <>
      <PageHead
        tone="dark"
        lines={[{ text: "The 6-day" }, { text: "hybrid" }, { text: "MasterClass", red: true }]}
        lead="Join our unique hybrid Bikram Hot 26&2 Yoga Teacher Training MasterClass in Seminyak, Bali, led in person by Mr. Ian."
        media={<Img name="correction" alt="Mr. Ian correcting a student’s posture during a YogaFX hot yoga class" sizes="(min-width: 900px) 46vw, 100vw" priority />}
      >
        <p className={styles.headDate}>Next intake: {nextIntake.label} | Bali</p>
        <div className="btn-row">
          <Link href="/dates-pricing" className="btn">
            Dates &amp; pricing <ArrowRight />
          </Link>
          <a href={whatsappLink()} className="btn btn--light btn--whatsapp" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Ask a question
          </a>
        </div>
      </PageHead>

      <section className="section" aria-labelledby="format-title">
        <div className="container">
          <div className={styles.sectionHead} data-reveal>
            <h2 id="format-title">How the hybrid format works</h2>
            <p className="lead">
              Complete all theory online, then fly to Bali for an intensive 6-day training. You begin from home, on your own schedule, and arrive in Bali prepared and ready
              to teach.
            </p>
          </div>
          <div data-reveal>
            <StageTabs stages={stages} label="Stages of the MasterClass" />
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="schedule-title">
        <div className={`container ${styles.schedule}`}>
          <div className={styles.scheduleIntro} data-reveal>
            <h2 id="schedule-title">A day in the training</h2>
            <p className="lead">Expect a powerful blend of learning, movement, and transformation, supported by experienced mentors and like-minded peers.</p>
            <div className={styles.teachNote}>
              <p className={styles.teachFigure}>Day 1</p>
              <p>
                You will teach starting Day 1, building real confidence by guiding classes of 50+ students. From leading sun salutations to giving alignment cues, you gain
                hands-on experience with personalized feedback.
              </p>
            </div>
          </div>
          <ol className={styles.timeline}>
            <span className={styles.timelineTrack} aria-hidden="true">
              <span data-progress="y" />
            </span>
            {schedule.map(([time, what]) => (
              <li key={time} data-reveal>
                <span className={styles.time}>{time}</span>
                <span className={styles.what}>{what}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="inclusions" className="section" aria-labelledby="inclusions-title">
        <div className={`container ${styles.inclusions}`}>
          <div className={styles.inclusionsMedia}>
            <div className={`frame ${styles.inclusionsFrame}`} data-reveal>
              <Img
                name="kit-table"
                alt="YogaFX course packs laid out on a table: posture dialogue guides, workbooks, bags and lanyards"
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
            </div>
          </div>
          <div className={styles.inclusionsBody}>
            <h2 id="inclusions-title" data-reveal>
              Course inclusions
            </h2>
            <div data-reveal>
              <h3 className={styles.subhead}>Also included in your course</h3>
              <ul className={`list list--ruled ${styles.included}`}>
                {included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <h3 className={styles.subhead}>Upon your arrival and registration you will receive</h3>
              <div className={styles.details}>
                {inclusions.map((item) => (
                  <details key={item.title} className={styles.detail}>
                    <summary>
                      <span>{item.title}</span>
                      <span className={styles.detailIcon}>
                        <PlusIcon size={18} />
                      </span>
                    </summary>
                    <div className={styles.detailBody}>{item.body}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="bonus-title">
        <div className={`container ${styles.bonus}`}>
          <div className={`frame ${styles.bonusFrame}`} data-reveal>
            <Img name="grad-slide" alt="A YogaFX graduating class celebrating together with their certificates" sizes="(min-width: 900px) 50vw, 100vw" data-parallax />
          </div>
          <div data-reveal>
            <h2 id="bonus-title">Special MasterClass activities</h2>
            <p className={styles.bonusLead}>Enhance your training experience with bonus sessions designed to build not just your skills, but your future as a professional yoga teacher.</p>
            <ul className="list list--ruled">
              {bonus.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="venue-title">
        <div className={`container ${styles.venue}`}>
          <div data-reveal>
            <h2 id="venue-title">Training in Seminyak</h2>
            <h3 className={styles.subhead}>Our training venue: Soham Wellness Center</h3>
            <p>
              Located in the heart of Seminyak, Soham Wellness Center offers a space with hot yoga rooms, showers, and a nourishing cafe. Cafes, beaches, and culture are just
              steps away.
            </p>
            <h3 className={styles.subhead}>Where to stay nearby</h3>
            <ul className="list">
              <li>Djabu Hotel, a 2-minute walk from the venue</li>
              <li>Isvara Hotel, peaceful and comfortable</li>
              <li>Local villas, affordable private options within walking distance</li>
            </ul>
            <p className={styles.venueNote}>Enquire to receive our package deals. We’re happy to assist you with booking and recommendations.</p>
          </div>
          <div className={`frame ${styles.venueFrame}`} data-reveal>
            <Img name="street-group" alt="A YogaFX training group gathered on a street in Seminyak, Bali" sizes="(min-width: 900px) 50vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="reviews-title">
        <div className="container">
          <h2 id="reviews-title" className={styles.reviewsTitle} data-reveal>
            From our graduates
          </h2>
          <div className={styles.reviews}>
            <div className={styles.videoCol} data-reveal>
              <VideoFacade id="_y3IuxMhbZM" title="Bikram Hot 26&2 Yoga Teacher Training, RYT 200H, Beautiful Bali – YogaFX" poster="mat-circle" />
            </div>
            <div className={styles.quotes}>
              {testimonials.map((t) => (
                <blockquote key={t.name} className={styles.quote} data-reveal>
                  <p>“{t.quote}”</p>
                  <footer>{t.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.next} aria-labelledby="next-title">
        <div className={`container ${styles.nextInner}`} data-reveal>
          <h2 id="next-title">
            Next intake <span className={styles.nextDate}>{nextIntake.label}</span>
          </h2>
          <div className="btn-row">
            <Link href="/dates-pricing" className="btn btn--dark">
              See all dates &amp; room options <ArrowRight />
            </Link>
            <Link href="/faq" className="btn btn--light">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
