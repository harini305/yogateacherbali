import Link from "@/components/Link";
import Img from "@/components/Img";
import PageHead from "@/components/PageHead";
import Countdown from "@/components/Countdown";
import IntakePlanner from "@/components/IntakePlanner";
import { ArrowRight, ExternalIcon, WhatsAppIcon } from "@/components/Icons";
import { balances, deposits, links, masterclass, nextIntake, onlineCourse, whatsappLink } from "@/lib/site";
import styles from "./dates.module.css";

export const metadata = {
  title: "Course Dates & Pricing – Bali MasterClass",
  description:
    "Course dates for the YogaFX 6-day hybrid MasterClass in Seminyak, Bali, from 24–29 January 2027. Room options, inclusions, deposits and enrollment.",
  alternates: { canonical: "/dates-pricing" },
};

export default function DatesPage() {
  return (
    <>
      <PageHead
        lines={[{ text: "Course dates" }, { text: "& pricing", red: true }]}
        lead="The 6-Day Hybrid MasterClass runs in Seminyak, Bali. Pick a date and room preference below and our team will confirm availability and the course fee for your intake."
        media={<Img name="grad-2019" alt="A YogaFX graduating group with their certificates at the training venue in Bali" sizes="(min-width: 900px) 46vw, 100vw" priority />}
      />

      <section className={styles.next} aria-labelledby="next-title">
        <div className={`container ${styles.nextInner}`}>
          <div>
            <h2 id="next-title" className={styles.nextLabel}>
              Mr Ian’s next MasterClass
            </h2>
            <p className={styles.nextDate}>{nextIntake.label}</p>
            <p className={styles.nextPlace}>Seminyak, Bali</p>
          </div>
          <Countdown target={masterclass.nextStart} />
          <a href={whatsappLink([`Course date: ${nextIntake.label}`])} className="btn btn--dark btn--whatsapp" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Enquire about January
          </a>
        </div>
      </section>

      <section className="section" aria-labelledby="planner-title">
        <div className="container">
          <div className={styles.head} data-reveal>
            <h2 id="planner-title">Plan your intake</h2>
            <p>
              Published course dates for 2027 and January 2028. Dates and availability are subject to change: contact us for the most up-to-date information and to secure your
              spot.
            </p>
          </div>
          <div data-reveal>
            <IntakePlanner />
          </div>
        </div>
      </section>

      <section className="section section--paper" aria-labelledby="value-title">
        <div className={`container ${styles.value}`}>
          <div data-reveal>
            <h2 id="value-title">What your fee covers</h2>
            <ul className={`list list--ruled ${styles.valueList}`}>
              <li>Exclusive pre-course preparation before you travel</li>
              <li>Six days of practical training in Bali with 2 classes of hot yoga per day</li>
              <li>E-book training manuals and workbook</li>
              <li>Yoga Alliance RYT 200 certification</li>
              <li>YogaFX bag, shirt, Yoga Alliance certified yoga teacher ID card and more</li>
            </ul>
            <Link href="/bali-masterclass#inclusions" className="text-link">
              All course inclusions <ArrowRight />
            </Link>
          </div>
          <div className={styles.save} data-reveal>
            <h3>Ways to save</h3>
            <div className={styles.saveItem}>
              <p className={styles.saveFigure}>10%</p>
              <p>When two friends join the same course at the same time both will receive a 10% Off their Yoga Course Investment.</p>
            </div>
            <div className={styles.saveItem}>
              <p className={styles.saveFigure}>{onlineCourse.price}</p>
              <p>
                Started with the online course? Your full {onlineCourse.price} is credited against the MasterClass, and the online study covers your pre-course preparation.{" "}
                <Link href="/online-course">About the online course</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="pay-title">
        <div className="container">
          <div className={styles.head} data-reveal>
            <h2 id="pay-title">Secure your place</h2>
            <p>Payments are made on YogaFX’s existing secure PayPal transfer pages. Please confirm your intake with our team before paying a deposit.</p>
          </div>

          <ol className={styles.steps}>
            <li className={styles.step} data-reveal>
              <h3>Confirm your intake</h3>
              <p>Message us with your preferred dates and room. We confirm availability, the course fee and the deposit amount.</p>
              <a href={whatsappLink()} className="btn btn--outline btn--whatsapp" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> WhatsApp us
              </a>
            </li>
            <li className={styles.step} data-reveal>
              <h3>Pay your deposit</h3>
              <p>Choose the payment page in your currency.</p>
              <ul className={styles.currencies}>
                {deposits.map((d) => (
                  <li key={d.currency}>
                    <a href={d.href} className={styles.currency}>
                      {d.currency} <ExternalIcon size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className={styles.step} data-reveal>
              <h3>Complete your enrollment</h3>
              <p>After your deposit transfer, complete the enrollment application form.</p>
              <a href={links.masterclassEnrollment} className="btn btn--outline">
                Enrollment application <ExternalIcon />
              </a>
            </li>
          </ol>

          <div className={styles.balance} data-reveal>
            <div>
              <h3>Already enrolled?</h3>
              <p>Pay your course balance in your currency.</p>
            </div>
            <ul className={styles.currencies}>
              {balances.map((b) => (
                <li key={b.currency}>
                  <a href={b.href} className={styles.currency}>
                    {b.currency} balance <ExternalIcon size={14} />
                  </a>
                </li>
              ))}
            </ul>
            <img src="/images/payment-methods.webp" width="797" height="130" alt="Accepted payment methods: PayPal, Mastercard, Visa, American Express, Discover" className={styles.cards} loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
}
