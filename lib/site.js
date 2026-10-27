// Single source of truth for facts that appear on more than one page.
// Every value here comes from the Phase 1 audit (docs/source-audit). Where the
// original site publishes conflicting figures, the value is left as null and
// the UI shows "confirmed on enquiry" instead of choosing one. See
// docs/source-audit/08-issues-gaps-questions.md section A.

export const LIVE_SITE = "https://yogafxteachertraining.com";

export const contact = {
  // Click-to-Chat widget number (verified). The Contact page shows a different,
  // shorter number (+62811388330), so it is not used anywhere.
  whatsappNumber: "628113888330",
  whatsappDisplay: "+62 811 3888 330",
  email: "info@yogafx.com",
  location: "Seminyak, Bali",
  legalName: "Yoga FX International Yoga Teacher Training Academy",
};

// Prefilled text from the original Click-to-Chat configuration.
const WHATSAPP_MESSAGE =
  "Hello *YogaFX*\n\nI look *forward to receiving* more information and course prices for the _RYT200 Hours_ \n\n*YogaFX Yoga Teacher Training*\n\nSeminyak Bali\n\nBest Wishes\n\nMy Name Is ..";

export function whatsappLink(details = []) {
  const extra = details.filter(Boolean);
  const text = extra.length
    ? WHATSAPP_MESSAGE.replace("Seminyak Bali", `Seminyak Bali\n\n${extra.join("\n")}`)
    : WHATSAPP_MESSAGE;
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const social = [
  { label: "Facebook", href: "https://www.facebook.com/yogafxteachertraining" },
  { label: "Instagram", href: "https://www.instagram.com/yogafx/" },
  { label: "YouTube", href: "https://www.youtube.com/@YogaFXYoga" },
];

// External destinations documented in the audit. Payment and enrollment pages
// stay on the existing WordPress site; this frontend only links to them.
export const links = {
  quiz: "https://quiz.26and2yoga.com/are-you-ready-to-become-a-bikram-hot-yoga-teacher?utm_source=yogafxteachertraining.com",
  onlinePreview: "https://online.26and2yoga.com/preview/",
  onlineEnrollment: `${LIVE_SITE}/online-enrollment/`,
  masterclassEnrollment: `${LIVE_SITE}/enrollment/`,
  interestForm: `${LIVE_SITE}/contact/#forminator-module-31679`,
  yogaAllianceProfile:
    "https://app.yogaalliance.org/schoolpublicprofile/0013g000002pjyqAAA/yogafx-international-yoga-teaching-academy",
  googleProfile: "https://maps.app.goo.gl/L19b9oz9F2Z2maYL8",
  youtubeReviews: "https://www.youtube.com/@YogaFXYoga",
};

export const onlineCourse = {
  price: "USD 329",
  standardPrice: "USD 399",
  plan: "4 interest-free payments of USD 82",
  payment: [
    { currency: "USD", amount: "USD 329", href: `${LIVE_SITE}/online-course-transfer/` },
    { currency: "GBP", amount: "£249", href: `${LIVE_SITE}/online-course-transfer-gbp/` },
  ],
};

// PayPal pages by currency. Amounts are deliberately not repeated here: the
// deposit figures conflict across the original pages (audit A4).
export const deposits = [
  { currency: "USD", href: `${LIVE_SITE}/deposit-transfer/` },
  { currency: "AUD", href: `${LIVE_SITE}/deposit-transfer-request-aud/` },
  { currency: "NZD", href: `${LIVE_SITE}/deposit-transfer-request-nzd/` },
  { currency: "GBP", href: `${LIVE_SITE}/deposit-transfer-request-gbp/` },
];

export const balances = [
  { currency: "USD", href: `${LIVE_SITE}/course-balance-transfer-usd/` },
  { currency: "GBP", href: `${LIVE_SITE}/course-balance-transfer-gbp/` },
  { currency: "AUD", href: `${LIVE_SITE}/course-balance-transfer-aud/` },
];

export const masterclass = {
  name: "6-Day Hybrid Bikram Hot 26&2 MasterClass",
  // Conflicting published fees: $1699, US$1,899/1,999, $1,999-$2,799 room
  // table, $1799. Set one confirmed value here and every page updates.
  fee: null,
  // Countdown target: 24 Jan 2027, 00:00 Bali time (WITA, UTC+8).
  nextStart: "2027-01-24T00:00:00+08:00",
  // Room labels from the original price table. The duplicated "Private Single
  // Room" row (audit A2) is listed once, without prices.
  rooms: ["Private single room", "Double share room"],
  roomNote: "Accommodation Twin & Single Room Option Available",
};

// "COURSE DATES & AVAILABILITY" table on /course-dates/. The original marks every
// row "5 Days" while all other pages describe a 6-day course, so the duration
// column is not shown.
export const intakes = [
  { start: "24 January 2027", end: "29 January 2027", label: "24 – 29 January 2027" },
  { start: "21 February 2027", end: "26 February 2027", label: "21 – 26 February 2027" },
  { start: "21 March 2027", end: "26 March 2027", label: "21 – 26 March 2027" },
  { start: "18 April 2027", end: "23 April 2027", label: "18 – 23 April 2027" },
  { start: "23 May 2027", end: "28 May 2027", label: "23 – 28 May 2027" },
  { start: "20 June 2027", end: "25 June 2027", label: "20 – 25 June 2027" },
  { start: "25 July 2027", end: "30 July 2027", label: "25 – 30 July 2027" },
  { start: "22 August 2027", end: "27 August 2027", label: "22 – 27 August 2027" },
  { start: "19 September 2027", end: "24 September 2027", label: "19 – 24 September 2027" },
  { start: "24 October 2027", end: "29 October 2027", label: "24 – 29 October 2027" },
  { start: "21 November 2027", end: "26 November 2027", label: "21 – 26 November 2027" },
  { start: "19 December 2027", end: "24 December 2027", label: "19 – 24 December 2027" },
  { start: "23 January 2028", end: "28 January 2028", label: "23 – 28 January 2028" },
];

export const nextIntake = intakes[0];

export const nav = [
  { href: "/bali-masterclass", label: "Bali MasterClass" },
  { href: "/dates-pricing", label: "Dates & Pricing" },
  { href: "/online-course", label: "Online Course" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const rysStatement =
  "YogaFX International Yoga Teaching Academy is a Registered Yoga School (RYS) with Yoga Alliance, which designates our YogaFX Yoga Teacher Training Program as one which follows Yoga Alliance’s standards.";
