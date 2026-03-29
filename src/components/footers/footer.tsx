import styles from "./footer.module.scss";

const COPYRIGHT = "本線上履歷由 陳暐龍 本人製作";
const PHONE = "123-456-7890";
const EMAIL = "info@mysite.com";

export function Footer() {
  return (
    <footer className={styles.root}>
      <p className={styles.left}>{COPYRIGHT}</p>
      <div className={styles.right}>
        <div className={styles.contactBlock}>
          <span className={styles.contactLabel}>phone</span>
          <span className={styles.contactValue}>{PHONE}</span>
        </div>
        <div className={styles.contactBlock}>
          <span className={styles.contactLabel}>email</span>
          <span className={styles.contactValue}>{EMAIL}</span>
        </div>
      </div>
    </footer>
  );
}
