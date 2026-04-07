import { ResumeCard } from "@/components/resume-card/resume-card";
import skillData from "@/data/skill.json";
import { SkillCard } from "@/components/skill-card/skill-card";
import resumeData from "@/data/resume.json";
import styles from "./resume.module.scss";

export default function Resume() {
  const { experience } = resumeData;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* Title */}
        <h1 className={styles.pageTitle}>
          <span className={styles.titleIcon} />
          履歷
        </h1>

        {/* Experience */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>工作經驗</h2>
          <div className={styles.list}>
            {experience.map((item, index) => (
              <ResumeCard
                key={index}
                period={item.period}
                duration={item.duration}
                title={item.position}
                company={item.company}
                subtitle={item.subtitle}
                iconSrc={item.iconSrc}
                intro={item.intro}
                descriptions={item.description}
                tags={item.tags}
              />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>技能專長</h2>
          <div className={styles.skillGrid}>
            {skillData.map((item, index) => (
              <SkillCard
                key={index}
                icon={item.icon}
                title={item.title}
                intro={item.intro}
                description={item.description}
                tags={item.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
