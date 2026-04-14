import Image from "next/image";
import styles from "./resume-card.module.scss";

type ResumeCardProps = {
  period: string;
  duration?: string;
  title: string;
  subtitle?: string;
  company?: string;
  iconSrc?: string;
  intro?: string;
  descriptions: string[];
  tags?: string[];
};

export function ResumeCard({
  period,
  duration,
  title,
  subtitle,
  company,
  iconSrc,
  intro,
  descriptions,
  tags,
}: ResumeCardProps) {
  return (
    <div className={styles.card}>
      {/* 左側 Icon */}
      <div className={styles.iconCol}>
        {iconSrc && (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/${iconSrc}`}
            alt={company ?? ""}
            width={50}
            height={50}
            className={styles.icon}
          />
        )}
      </div>

      {/* 中間主體 */}
      <div className={styles.body}>
        <span className={styles.title}>{title}</span>
        {company && <strong className={styles.company}>{company}</strong>}
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}

        {/* 手機版時間區塊 */}
        <div className={styles.periodColMobile}>
          <span className={styles.period}>{period}</span>
          {duration && <span className={styles.duration}>{duration}</span>}
        </div>

        {intro && <p className={styles.intro}>{intro}</p>}

        <ul className={styles.descList}>
          {descriptions.map((text, index) => (
            <li key={index} className={styles.descItem}>
              {text}
            </li>
          ))}
        </ul>

        {tags && tags.length > 0 && (
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 右側時間（桌面版） */}
      <div className={styles.periodCol}>
        <span className={styles.period}>{period}</span>
        {duration && <span className={styles.duration}>{duration}</span>}
      </div>
    </div>
  );
}
