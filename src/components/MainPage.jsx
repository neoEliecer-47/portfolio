import { useEffect, useState } from "react";
import js from "../assets/some-skills/js.png";
import ts from "../assets/some-skills/typescript.png";
import reactLogo from "../assets/logos/reactjs2.png";
import nextLogo from "../assets/some-skills/nextjs.png";
import NameAnimation from "./ui/NameAnimation";
import classNames from "classnames";
import styles from "./rubberBand.module.css";

const Main = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = [
    "#FF4C4C",
    "#45A7D5",
    "#31DC03",
    "#8B14F4",
    "#FF7E19",
    "#A25B01",
  ];
  const h2Style = {
    transition: "color 0.9s ease",
    color: colors[currentColorIndex],
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex(
        (currentColorIndex) => (currentColorIndex + 1) % colors.length
      );
    }, 1000);
    return () => clearInterval(intervalId); //clean the interval
  }, [colors.length]);

  const words = [
    "I am Eliecer",
    "Recruiters",
    "Code Enthusiasts",
    "Developers",
    "Users",
    "Technologists",
    "Frontend Engineers",
    "Software Developers",
    "Everyone, welcome",
  ];

  return (
    <div
      style={{ overflowAnchor: "none" }}
      className="h-[100vh] bg-white/35 dark:bg-black/85 flex flex-col gap-2 items-center font-bold justify-center  pb-5   transition-all duration-700 ease-in"
    >
      <section
        className={classNames(
          "dark:text-white/90 mb-16 flex flex-col md:flex-row items-center justify-center mt-8 text-xl md:text-3xl lg:text-7xl gap-[1rem] md:gap-2 tracking-widest font-extrabold",
          styles.wrapperRB
        )}
      >
        <div className="m-0 p-0">
          <span style={h2Style} className={classNames(styles.RB, styles.word)}>
            F
          </span>
          <span style={h2Style} className={classNames(styles.RB, styles.word)}>
            r
          </span>
          <span style={h2Style} className={classNames(styles.RB, styles.word)}>
            o
          </span>
          <span style={h2Style} className={classNames(styles.RB, styles.word)}>
            n
          </span>
          <span style={h2Style} className={classNames(styles.RB, styles.word)}>
            t
          </span>
          <span style={h2Style} className={classNames(styles.RB, styles.word)}>
            e
          </span>
          <span style={h2Style} className={classNames(styles.RB, styles.word)}>
            n
          </span>
          <span
            style={h2Style}
            className={classNames(
              "mr-[0.8rem] md:mr-[1.2rem]",
              styles.RB,
              styles.word
            )}
          >
            d
          </span>
        </div>

        <div className="m-0 p-0">
          <span className={classNames(styles.RB, styles.word)}>D</span>
          <span className={classNames(styles.RB, styles.word)}>e</span>
          <span className={classNames(styles.RB, styles.word)}>v</span>
          <span className={classNames(styles.RB, styles.word)}>e</span>
          <span className={classNames(styles.RB, styles.word)}>l</span>
          <span className={classNames(styles.RB, styles.word)}>o</span>
          <span className={classNames(styles.RB, styles.word)}>p</span>
          <span className={classNames(styles.RB, styles.word)}>e</span>
          <span className={classNames(styles.RB, styles.word)}>r</span>
        </div>
      </section>
      <NameAnimation words={words} />
      <div className="bg-gray-100 group relative overflow-hidden py-2 px-6 mt-14 rounded-lg">
        <div
          style={{ backgroundColor: `${h2Style.color}` }}
          className=" w-3 border border-black/5 absolute inset-0 transition-all duration-500 ease-out group-hover:w-full"
        />
        <article className="relative flex  gap-1 bg-contain duration-500 border-black/10">
          <img
            src={js}
            alt="js"
            className="h-2rem] w-[2rem] md:h-10 md:w-10"
            title="JavaScript"
          />
          <img
            src={reactLogo}
            alt="rc"
            className="h-8 w-8 md:h-10 md:w-10"
            title="React"
          />
          <img
            src={nextLogo}
            alt="nx"
            className="h-8 w-[34px] md:h-10 md:w-11 pr-[0.1rem]"
            title="Next.js"
          />
          <img
            src={ts}
            alt="ts"
            className="h-8 w-8 md:h-10 md:w-10"
            title="TypeScript"
          />
        </article>
      </div>
    </div>
  );
};

export default Main;
