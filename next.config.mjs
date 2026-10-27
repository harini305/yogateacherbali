/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images are pre-sized locally (scripts/build-images.py), so Next.js / Vercel
  // image optimization is disabled.
  images: { unoptimized: true },

  // Browsers and the CDN keep images for a year instead of revalidating them on
  // every visit. When an image's content changes, give it a new file name.
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  // Original WordPress URLs that were consolidated into the new pages.
  async redirects() {
    return [
      { source: "/yogafx-main-event", destination: "/bali-masterclass", permanent: true },
      { source: "/course-inclusions", destination: "/bali-masterclass#inclusions", permanent: true },
      { source: "/yoga-teacher-training-bali", destination: "/bali-masterclass", permanent: true },
      { source: "/course-dates", destination: "/dates-pricing", permanent: true },
      { source: "/yoga-teacher-training-online", destination: "/online-course", permanent: true },
      { source: "/training-course-question", destination: "/faq", permanent: true },
      { source: "/our-teacher", destination: "/about#founder", permanent: true },
    ];
  },
};

export default nextConfig;
