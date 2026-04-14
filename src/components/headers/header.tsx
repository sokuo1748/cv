import { useAppContext, type AppTabId } from "@/context/app.context";
import { useState } from "react";
import { IconMap } from "@/components/icon-map/icon-map";
import styles from "./header.module.scss";

const NAV: { id: AppTabId; label: string }[] = [
  { id: "about-me", label: "ABOUT ME" },
  { id: "resume", label: "RESUME" },
  { id: "projects", label: "PROJECTS" },
];

export function Header() {
  const { activeTab, handleChangeTab } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = (id: AppTabId) => {
    handleChangeTab(id);
    setMenuOpen(false);
  };

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
      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "關閉導覽選單" : "開啟導覽選單"}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? IconMap.IconX : IconMap.IconMenu2}
      </button>
      {menuOpen && (
        <div
          className={styles.mobilePanel}
          role="menu"
          aria-label="手機導覽選單"
        >
          {NAV.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={
                activeTab === id
                  ? `${styles.mobileItem} ${styles.mobileItemActive}`
                  : styles.mobileItem
              }
              onClick={() => handleSelect(id)}
              role="menuitem"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
