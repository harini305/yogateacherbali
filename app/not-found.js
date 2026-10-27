import Link from "@/components/Link";
import { ArrowRight } from "@/components/Icons";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container prose">
        <h1>Page not found</h1>
        <p className="lead" style={{ marginTop: "1.5rem" }}>
          The page you were looking for is not here. It may have moved when the site was reorganised.
        </p>
        <div className="btn-row" style={{ marginTop: "2rem" }}>
          <Link href="/" className="btn">
            Go to the homepage <ArrowRight />
          </Link>
          <Link href="/bali-masterclass" className="btn btn--outline">
            Bali MasterClass
          </Link>
        </div>
      </div>
    </section>
  );
}
