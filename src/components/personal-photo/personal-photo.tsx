import Image from "next/image";
import styles from "./personal-photo.module.scss";

export function PersonalPhoto() {
  return (
    <div className={styles.main}>
      <div className={styles.photoWrapper}>
        <Image
          src="/assets/images/person-photo/photo.JPG"
          alt="陳暐龍"
          fill
        />
      </div>
      <strong className={styles.name}>陳暐龍</strong>
      <span className={styles.divider} />
      <span className={styles.role}>Front-End Engineer</span>
    </div>
  );
}
