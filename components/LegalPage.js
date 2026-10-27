import styles from "./LegalPage.module.css";

export default function LegalPage({ title, effective, notice, children }) {
  return (
    <article className="section">
      <div className={`container ${styles.layout}`}>
        <header className={styles.head}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.meta}>
            YogaFX Teacher Training
            <br />
            Effective Date: {effective}
          </p>
        </header>
        <div className={styles.body}>
          {notice && <p className="note">{notice}</p>}
          {children}
        </div>
      </div>
    </article>
  );
}
