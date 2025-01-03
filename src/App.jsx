import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Main from "./components/MainPage";
import Skills from "./components/Skills";
import classNames from "classnames";
import styles from "./components/styles/scrollbar.module.css";
import { LazyLoadElements } from "./hooks/LazyLoadElements";
import lazyStyles from "./hooks/lazyLoadStyles.module.css";

const app = () => {
  return (
    <div
      className={classNames(
        "w-full flex flex-col bg-[#e0e0e5] dark:bg-black/60 transition-all duration-700 overflow-y-hidden z-[999999999999999]",
        styles.scroll
      )}
      style={{ overflowAnchor: "none", scrollBehavior: "auto" }}
    >
      <Header />
      <Main />
      <section className="h-full" id="about">
        <LazyLoadElements
          lazyLoadFrom={lazyStyles.lazyFromAbout}
          lazyLoadTo={lazyStyles.lazyToAbout}
        >
          <About />
        </LazyLoadElements>
      </section>

      <Projects />
      <LazyLoadElements
        lazyLoadFrom={lazyStyles.lazyFromSkills}
        lazyLoadTo={lazyStyles.lazyToSkills}
      >
        <Skills />
      </LazyLoadElements>

      <Contact />
    </div>
  );
};

export default app;
