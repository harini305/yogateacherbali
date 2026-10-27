import styles from "./PageHead.module.css";

// Opening block for inner pages: masked title lines, lead text, optional
// actions and an optional image that bleeds to the right edge.
export default function PageHead({ lines, lead, children, media, tone = "light" }) {
  return (
    <section className={`${styles.head} ${tone === "dark" ? styles.dark : ""} ${media ? styles.withMedia : ""}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            {lines.map((line, i) => (
              <span className="line-mask" key={i}>
                <span data-hero-line className={line.red ? "red" : undefined}>
                  {line.text}
                </span>
              </span>
            ))}
          </h1>
          {lead && (
            <p className={styles.lead} data-hero-fade>
              {lead}
            </p>
          )}
          {children && (
            <div className={styles.actions} data-hero-fade>
              {children}
            </div>
          )}
        </div>
      </div>
      {media && (
        <div className={styles.media} data-hero-fade>
          {media}
        </div>
      )}
    </section>
  );
}
