import styles from "./skill-card.module.scss";
import { IconMap } from "@/components/icon-map/icon-map";
type SkillCardProps = {
  icon: string;
  title: string;
  intro?: string;
  description: string[];
  tags?: string[];
};

export function SkillCard({
  icon,
  title,
  intro,
  description,
  tags,
}: SkillCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.icon}>{IconMap[icon] ?? null}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.body}>
        {intro && <p className={styles.intro}>{intro}</p>}
        {description.length > 0 && (
          <ul className={styles.list}>
            {description.map((text, index) => (
              <li key={index} className={styles.item}>
                {text}
              </li>
            ))}
          </ul>
        )}
      </div>

      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
