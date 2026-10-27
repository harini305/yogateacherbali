import Link from "@/components/Link";
import Img from "@/components/Img";
import PageHead from "@/components/PageHead";
import FaqAccordion from "@/components/FaqAccordion";
import { ExternalIcon, WhatsAppIcon } from "@/components/Icons";
import { links, onlineCourse, whatsappLink } from "@/lib/site";
import styles from "./faq.module.css";

export const metadata = {
  title: "FAQ – Yoga Teacher Training Questions",
  description:
    "Plain English answers about the YogaFX 6-day hybrid MasterClass in Bali and the self-paced online course: experience, certification, Yoga Alliance, visas and more.",
  alternates: { canonical: "/faq" },
};

// Answers are taken from the original FAQ page (/training-course-question/) and,
// where marked, the Bali training post. Wording is shortened, not rewritten.
const groups = [
  {
    id: "training",
    title: "The training",
    items: [
      {
        q: "How is yoga different from other styles of fitness?",
        a: <p>Unlike other styles of fitness regimens, yoga focuses on the wellness of the complete human body, encompassing mind, body, and the spirit. It not only brings about agility and fitness in the body but also in the mind.</p>,
      },
      {
        q: "My body feels stiff, can I still learn yoga?",
        a: (
          <>
            <p>Yes! Of course. Saying that I am not flexible enough to practice yoga is like saying that I am too dirty to take a shower.</p>
            <p>Lack of flexibility does not impede learning yoga. Our experienced team will work with you to make you flexible and fit.</p>
          </>
        ),
      },
      {
        q: "Do I need to be a trained yoga professional to join the course?",
        a: (
          <>
            <p>
              No. Some students have very little experience and perform exceedingly well in our yoga teacher training. Some have a basic knowledge of yoga, some practice
              regularly and have studied before, and some have taken other RYT 200 hour courses elsewhere.
            </p>
            <p>
              We also have existing professional yoga teachers who join to deepen their knowledge and upgrade their routines, and budding new yoga teachers wanting a complete
              career change.
            </p>
          </>
        ),
      },
      {
        q: "What style of yoga will I be learning?",
        a: (
          <p>
            Hatha Yoga. Practicing the world’s most popular series in hatha yoga today will enable you to focus on a manageable number of postures. You will build a strong
            yoga sequence foundation, which will provide you with a more holistic view of how and what you would like to teach in the future.
          </p>
        ),
      },
      {
        q: "Will I be qualified to teach when I graduate?",
        a: (
          <>
            <p>
              Students who pass the course, by attending all the classes and completing the coursework, will receive graduation certificates detailing their success on the RYT
              200 Hours Yoga Alliance approved YogaFX Teacher Training Course.
            </p>
            <p>After graduation and upon your RYT 200 Hours certificate registration with Yoga Alliance, which we confirm, you will be recognized as an internationally registered yoga teacher.</p>
          </>
        ),
      },
      {
        q: "I want to join the course to deepen my practice and not teach. Is this fine?",
        a: <p>Absolutely. Many yoga students and existing yoga teachers come to us to get more intensive yoga teacher training, and a better understanding of yoga philosophy through practice and meditation.</p>,
      },
      {
        q: "What is Yoga Alliance?",
        a: (
          <>
            <p>Yoga Alliance® is an education and support organization for Registered Yoga Schools (RYS) such as Yoga FX International Yoga Teaching Academy. It is a non-profit organization.</p>
            <p>
              For YogaFX to be a Yoga Alliance Registered Yoga School we must adhere to a very clear set of standards in terms of our course, planning, training, and
              qualification. Most yoga studios will expect this Yoga Teaching Certificate from their teachers.
            </p>
          </>
        ),
      },
      {
        q: "Will I need to apply for Yoga Alliance separately to register my RYT 200-hour Certificate?",
        a: (
          <p>
            Yes. The certification that you will receive from YogaFX on completion of the course will allow you to apply for Yoga Alliance Registration as a certified yoga
            teacher. It is not mandatory, but it will significantly improve your yoga teaching opportunities. We will take you through the Yoga Alliance registration process
            step by step.
          </p>
        ),
      },
      {
        q: "What happens if I miss a class?",
        a: (
          <>
            <p>There should be no reason other than genuine illness not to achieve 100% class attendance. Your yoga teacher training course is only 6 days in Bali.</p>
            <p>
              To be graduated as a Yoga Alliance Certified Teacher there are several compulsory Contact Hours in the teacher training that you must complete. It is not always
              possible for us to catch up compulsory hours that you may have missed, putting your graduation certificate in doubt.
            </p>
          </>
        ),
      },
      {
        q: "How much time do I need for private study?",
        a: (
          <>
            <p>
              It really is up to you how much time and effort you put into your own study and practice. The more you put in, the more you get out. We allocate time in your
              syllabus for self-practice and study, so make the most of it.
            </p>
            <p>We do not run a military-style boot camp. Our YogaFX staff will treat you respectfully as adults at all times.</p>
          </>
        ),
      },
    ],
  },
  {
    id: "bali",
    title: "Bali & travel",
    items: [
      {
        q: "What do I bring with me?",
        a: <p>You should bring comfortable clothing for your practice, along with essentials that you carry with you while traveling. Also a notebook, pen, a sense of humor, and general items for attending any course.</p>,
      },
      {
        q: "Will I have free time?",
        a: <p>Yes. Daily, you will get free time between classes, posture clinics, and lectures. Later parts of the evenings are your own group study and self-practice.</p>,
      },
      {
        q: "Extra stays before or after the course?",
        a: <p>It is recommended to be fully set up before we start. Two days prior is the norm, and two days after to see Bali is normal. Let us know and we will do our best to accommodate all requests.</p>,
      },
      {
        q: "Are meals included?",
        a: <p>No. We give you freedom to choose your own food options in Bali. There are plenty of healthy cafes nearby.</p>,
      },
      {
        q: "Do I need a tourist visa for Bali?",
        a: (
          <>
            <p>
              There are different rules for different foreign visitors to Indonesia. Most countries get a free 30-day visa while other countries need to apply for a visa before
              traveling. Every foreign visitor needs:
            </p>
            <ul className="list">
              <li>A passport that is valid for at least 6 months from the day you enter Indonesia</li>
              <li>A passport that has at least one completely blank page</li>
              <li>Proof of a return flight or onward flight out of Indonesia</li>
            </ul>
          </>
        ),
      },
      {
        q: "Where is YogaFX based?",
        a: <p>YogaFX is based in Seminyak, Bali, Indonesia, with a second studio in Canggu, and every 6-day Hot 26&amp;2 intensive is led in person by founder Mr. Ian Terry (E-RYT 500).</p>,
      },
    ],
  },
  {
    id: "online",
    title: "Online course",
    items: [
      {
        q: "Do you offer a fully online course, separate from the Bali training?",
        a: (
          <p>
            Yes. The YogaFX Bikram Hot 26&amp;2 Online Course is a complete self-paced programme you can take from home, with no travel required. It stands alone, and it also
            serves as the pre-course preparation for the 6-day Bali MasterClass if you add that later. <Link href="/online-course">Full detail is on the online course page.</Link>
          </p>
        ),
      },
      {
        q: "How much does the online course cost?",
        a: (
          <p>
            The online course is {onlineCourse.price}, reduced from a standard price of {onlineCourse.standardPrice}. You can pay in full, or split it into 4 interest-free monthly
            payments of USD 82. That price includes lifetime access, all workbooks, the dialogue MP3 files, and the 250-page reference manual.
          </p>
        ),
      },
      {
        q: "Is the online course credited toward the 6-day Bali MasterClass?",
        a: (
          <p>
            Yes, in full. If you later enrol in the live Hot 26&amp;2 MasterClass in Seminyak, your entire {onlineCourse.price} is credited against it, and the online study also
            satisfies the MasterClass pre-course preparation requirement. You never pay twice, and you never repeat the work.
          </p>
        ),
      },
      {
        q: "Are there live Zoom classes or fixed deadlines in the online course?",
        a: <p>No. There are no scheduled video calls, no live chat rooms, no written essays, and no deadlines. Every module is self-paced with lifetime access.</p>,
      },
      {
        q: "What do I actually receive in the online course?",
        a: (
          <p>
            The complete Standing and Floor Series dialogue as a downloadable workbook and as MP3 audio files, full posture demonstrations on video, 15 premium lectures with
            workbooks and multiple-choice assessments, the 250-page reference manual, and lifetime access to all of it.
          </p>
        ),
      },
      {
        q: "Can I see the online course before I pay?",
        a: (
          <p>
            Yes. A free preview is available with a sample posture demonstration, a sample premium lecture, and a downloadable sample of the dialogue MP3.{" "}
            <a href={links.onlinePreview} target="_blank" rel="noopener noreferrer">
              Open the free course preview
            </a>
            .
          </p>
        ),
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHead
        lines={[{ text: "Your questions," }, { text: "plain answers", red: true }]}
        lead="Answers about the 6-day hybrid MasterClass in Bali and the self-paced online course."
        media={<Img name="faq-book" alt="An open YogaFX FAQs notebook beside a cup of tea" sizes="(min-width: 900px) 46vw, 100vw" priority />}
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div className={styles.list}>
            <FaqAccordion groups={groups} />
          </div>
          <aside className={styles.aside} aria-label="Ask us directly">
            <div className={styles.askBox}>
              <h2 className={styles.askTitle}>Still have a question?</h2>
              <p>For instant access Q&amp;A on course prices and information please WhatsApp us directly.</p>
              <a href={whatsappLink()} className="btn btn--whatsapp" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> WhatsApp us
              </a>
              <a href={links.quiz} className="text-link" target="_blank" rel="noopener noreferrer">
                Take the readiness quiz <ExternalIcon size={14} />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
