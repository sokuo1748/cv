import { useAppContext, type AppTabId } from "@/context/app.context";
import styles from "./header.module.scss";

const NAV: { id: AppTabId; label: string }[] = [
  { id: "about-me", label: "ABOUT ME" },
  { id: "resume", label: "RESUME" },
  { id: "projects", label: "PROJECTS" },
];

export function Header() {
  const { activeTab, handleChangeTab } = useAppContext();

  return (
    <header className={styles.headerMain}>
      <div className={styles.brand}>
        <span className={styles.icon} aria-hidden />
        <div className={styles.brandText}>
          <span className={styles.nameLine}>
            <strong className={styles.namePrimary}>陳暐龍</strong>
            <br />
            <span className={styles.nameSecondary}>Sokuo</span>
          </span>
          <span className={styles.separator}>/</span>
          <span className={styles.role}>Front-End Engineer</span>
        </div>
      </div>
      <div className={styles.nav} role="navigation" aria-label="主要導覽">
        {NAV.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={
              activeTab === id
                ? `${styles.navLink} ${styles.navLinkActive}`
                : styles.navLink
            }
            onClick={() => handleChangeTab(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </header>
  );
}
