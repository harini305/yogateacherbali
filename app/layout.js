import { Archivo, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import "./globals.css";

// The site's two font families: Archivo for headings, Open Sans for everything else.
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://yogafxteachertraining.com"),
  title: {
    default: "Yoga Teacher Training Bali | YogaFX Teacher Training",
    template: "%s | YogaFX Teacher Training",
  },
  description:
    "Yoga teacher training in Bali with YogaFX: hybrid RYT 200 Bikram Hot 26&2 MasterClass led by Ian Terry. Course dates, online course and enquiries.",
  openGraph: {
    type: "website",
    siteName: "YogaFX Teacher Training",
    images: [{ url: "/images/og-yogafx.jpg", width: 1200, height: 800 }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#111111",
};

// Hides hero lines before first paint only when JS and motion are available;
// a timeout reveals them if the motion script never runs.
const motionBoot = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var d=document.documentElement;d.classList.add('motion-ready');setTimeout(function(){if(!window.__yfxMotion)d.classList.add('motion-fallback')},2500)}}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${archivo.variable} ${openSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
