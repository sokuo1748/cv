import { PersonalPhoto } from "@/components/personal-photo/personal-photo";
import { PersonalIntroduction } from "@/components/personal-introduction/personal-introduction";
import styles from "./about-me.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.leftBox}>
            <PersonalPhoto />
          </div>
          <div className={styles.rightBox}>
            <PersonalIntroduction />
          </div>
        </div>
      </div>
    </div>
  );
}
