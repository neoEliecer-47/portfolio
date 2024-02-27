import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Main from "./components/MainPage";
import Skills from "./components/Skills";
import classNames from "classnames";
import styles from "./components/styles/scrollbar.module.css";
import { useEffect } from "react";

const app = () => {

  return (
    <div
      className={classNames(
        "min-h-screen w-full flex flex-col bg-[#e0e0e5] dark:bg-black/60 transition-all duration-700",
        styles.scroll
      )}
      style={{overflowAnchor: "none", scrollBehavior: "auto"}}
    >
      <Header />
      <Main />
      <section className="flex items-center justify-center">
        <About />
      </section>
      <Projects />
      <Skills />``
      <Contact />
    </div>
  );
};

export default app;
