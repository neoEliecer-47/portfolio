import { useEffect, useState } from "react";
import classNames from "classnames";
import js from "../assets/some-skills/js.png";
import ts from "../assets/some-skills/typescript.png";
import reactLogo from "../assets/logos/reactjs2.png";
import nextLogo from "../assets/some-skills/nextjs.png";
//import graphqlLogo from "../assets/some-skills/graphql.png"; // add a GraphQL logo here
import NameAnimation from "./ui/NameAnimation";
import styles from "./rubberBand.module.css";

const COLORS = ["#FF4C4C", "#45A7D5", "#31DC03", "#8B14F4", "#FF7E19", "#A25B01"];

const WORDS = [
  "I'm Eliecer",
  "Recruiters",
  "Code Enthusiasts",
  "Developers",
  "Users",
  "Technologists",
  "Frontend Engineers",
  "Software Developers",
  "Everyone, welcome",
];

const ICON = "h-8 w-8 md:h-10 md:w-10";

const SKILLS = [
  { src: js, name: "JavaScript", className: ICON },
  { src: reactLogo, name: "React", className: ICON },
  { src: nextLogo, name: "Next.js", className: "h-8 w-[34px] md:h-10 md:w-11 pr-[0.1rem]" },
  { src: ts, name: "TypeScript", className: ICON },
  //{ src: graphqlLogo, name: "GraphQL", className: ICON },
];

const Letters = ({ word, style }) =>
  word.split("").map((letter, i) => (
    <span key={i} style={style} className={classNames(styles.RB, styles.word)}>
      {letter}
    </span>
  ));

const Main = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setColorIndex((i) => (i + 1) % COLORS.length);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const color = COLORS[colorIndex];
  const colorStyle = { transition: "color 0.9s ease", color };

  return (
    <div
      style={{ overflowAnchor: "none" }}
      className="h-[100vh] bg-white/35 dark:bg-black/85 flex flex-col gap-2 items-center font-bold justify-center pb-5 transition-all duration-700 ease-in"
    >
      <p className="mt-8 text-sm md:text-xl tracking-[0.5em] font-bold text-black/60 dark:text-white/60">
        SENIOR
      </p>

      <section
        className={classNames(
          "dark:text-white/90 mb-16 flex flex-col md:flex-row items-center justify-center text-xl md:text-3xl lg:text-7xl gap-[1rem] md:gap-2 tracking-widest font-extrabold",
          styles.wrapperRB
        )}
      >
        <div className={classNames("m-0 p-0 md:mr-[1.2rem]", styles.bounceFirstAnimation)}>
          <Letters word="Frontend" style={colorStyle} />
        </div>
        <div className="m-0 p-0">
          <Letters word="Engineer" />
        </div>
      </section>

      <NameAnimation words={WORDS} />

      <div className="bg-gray-100 group relative overflow-hidden py-2 px-6 mt-14 rounded-lg">
        <div
          style={{ backgroundColor: color }}
          className="w-3 border border-black/5 absolute inset-0 transition-all duration-500 ease-out group-hover:w-full"
        />
        <article className="relative flex gap-1 bg-contain duration-500 border-black/10">
          {SKILLS.map(({ src, name, className }) => (
            <img key={name} src={src} alt={name} title={name} className={className} />
          ))}
        </article>
      </div>
    </div>
  );
};

export default Main;
