import Image from "next/image";
import styles from "./project-card.module.scss";

type ProjectCardProps = {
  title: string;
  role: string;
  description: string;
  image: string;
  link?: string;
};

export function ProjectCard({
  title,
  role,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.titleWrapper}>
          <span className={styles.accent} />
          <div>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.role}>{role}</span>
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            查看專案 →
          </a>
        )}
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/${image}`}
          alt={title}
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
}
