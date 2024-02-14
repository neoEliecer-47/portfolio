import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Main from "./components/MainPage";
import Skills from "./components/Skills";
import classNames from "classnames";
import styles from './components/styles/scrollbar.module.css'

const app = () => {
  return (
    <div className={classNames("min-h-screen w-full flex flex-col bg-[#e0e0e5]", styles.scroll)}>
      <Header />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default app;
