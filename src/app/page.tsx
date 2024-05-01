import styles from "./main.module.css";

import bgImg from "../assets/079C.png";
import Header from "@/components/header";
import About from "@/components/about/main";
import Experience from "@/components/experience/main";
import Art from "@/components/art/main";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <About />
      <Experience />
      <Art />
    </main>
  );
}
