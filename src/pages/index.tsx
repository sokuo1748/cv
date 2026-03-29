"use client";

import { Footer } from "@/components/footers/footer";
import { Header } from "@/components/headers/header";
import { useAppContext } from "@/context/app.context";
import { AboutMe } from "@/pages-panels/about-me";
import { Contact } from "@/pages-panels/contact";
import { Projects } from "@/pages-panels/projects";
import { Resume } from "@/pages-panels/resume";
import styles from "@/styles/home-layout.module.scss";

function MainTab() {
  const { activeTab } = useAppContext();

  switch (activeTab) {
    case "about-me":
      return <AboutMe/>;
    case "resume":
      return <Resume/>;
    case "projects":
      return <Projects />;
    case "contact":
      return <Contact />;
    default:
      return <AboutMe />;
  }
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
