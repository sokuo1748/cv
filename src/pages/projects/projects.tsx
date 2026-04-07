import styles from "./projects.module.scss";
import projectsData from "@/data//projects.json";
import { ProjectCard } from "@/components/project-card/project-card";

export default function Projects() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>
          <span className={styles.titleIcon} />
          作品集
        </h1>

        <p className={styles.intro}>以下是目前完成的專案，持續開發中。</p>

        <div className={styles.list}>
          {projectsData.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              role={item.role}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>

        {/* More 區塊 */}
        <div className={styles.more}>
          <div className={styles.moreIcon}>
            <span className={styles.moreDot} />
            <span className={styles.moreDot} />
            <span className={styles.moreDot} />
          </div>

          <p className={styles.moreText}>
            持續研究更多開發技術，專案將會持續更新。
          </p>
        </div>
      </div>
    </div>
  );
}
