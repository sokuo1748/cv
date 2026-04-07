import styles from "./footer.module.scss";


export function Footer() {
  return (
    <footer className={styles.foolterMain}>
      <p className={styles.left}>本線上履歷由 陳暐龍 本人製作</p>
      <div className={styles.right}>
        <div className={styles.phoneBlock}>
          <span className={styles.header}>phone</span>
          <span className={styles.contactValue}>0905-232-087</span>
        </div>
        <div className={styles.emailBlock}>
          <span className={styles.header}>email</span>
          <span className={styles.value}>sokuo1748@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}
