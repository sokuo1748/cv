import { useAppContext } from "@/context/app.context";
import personalData from "./personal.json";
import styles from "./personal-introduction.module.scss";

export function PersonalIntroduction() {
  const { handleChangeTab } = useAppContext();
  const { title, subtitle, description } = personalData.personalIntroduction;

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.btnPrimary}
          onClick={() => handleChangeTab("resume")}
        >
          RESUME
        </button>
        <button
          type="button"
          className={styles.btnSecondary}
          onClick={() => handleChangeTab("projects")}
        >
          PROJECTS
        </button>
      </div>
      {description.map((text, index) => (
        <p key={index} className={styles.text}>{text}</p>
      ))}
    </div>
  );
}