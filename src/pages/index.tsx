import { Footer } from "@/components/footers/footer";
import { Header } from "@/components/headers/header";
import { useAppContext } from "@/context/app.context";
import AboutMe  from "@/pages/about-me/about-me";
import Projects from "@/pages/pages-panels/projects";
import Resume from "@/pages/pages-panels/resume";
import styles from "@/styles/home-layout.module.scss";

function MainTab() {
  const { activeTab, isTransitioning } = useAppContext();

  return (
    <main
    className={styles.mainTab}
      style={{
        opacity: isTransitioning ? 0 : 1,
        transition: "opacity 0.3s ease",
      }}
    >
      {(() => {
        switch (activeTab) {
          case "about-me":
            return <AboutMe />;
          case "resume":
            return <Resume />;
          case "projects":
            return <Projects />;
          default:
            return <AboutMe />;
        }
      })()}
    </main>
  );
}

export default function Home() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <MainTab />
      </main>
      <Footer />
    </div>
  );
}
