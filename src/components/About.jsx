import classNames from "classnames";
import myphoto from "../assets/personal/new-portfolio-photo1.jpg";
import cvlogo from "../assets/personal/cvicon.png";
import cvpdf from "../cv/CV-DEV-ES1.pdf";
import styles from "./styles/scrollbar.module.css";

import aboutStyles from "./About.module.css";
import { useLazyLoad } from "../hooks/useLazyLoad";
import React from "react";

const About = () => {
  const { isVisible, refOneSingleElement: ref } = useLazyLoad();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <aside className="flex items-center justify-center underline p-2">
        <h1>text1</h1>
      </aside>

      <div
        className={classNames(
          " w-[22rem] md:w-[25rem] flex flex-col mt-[5rem] dark:bg-black/50 dark:hover:bg-black/35 dark:text-white/85 bg-gray-100 border-t-[3px] border-blue-500 md:border-green-400 lg:border-black py-6 px-4 mx-4 rounded-lg md:mx-auto md:hover:bg-blue-50 shadow-lg hover:shadow-blue-300 md:hover:shadow-gray-400 transition-all duration-700 delay-500 mb-[0.8rem]",
          `${
            isVisible ? aboutStyles.lazyLoad : ""
          }` /*el estado esta haciendo que se vuelva a renderizar cada vez que hay un cambio por ende se vuelve a ejecutar el observer en el useEffect*/
        )}
        ref={ref}
      >
        <div
          className="grid gap-2 w-[19.5rem] md:w-[23.6rem] h-44 md:h-44"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          <img
            src={myphoto}
            alt=""
            className="h-[190px] w-32 md:h-[175px] md:w-[12em] rounded-tl-lg md:object-cover md:object-top"
          />
          <section
            className={classNames(
              "overflow-auto overflow-x-hidden w-44",
              styles.scrollAbout
            )}
          >
            <p className={"text-sm md:text-md text-start p-3 "}>
              I am Eliecer, passionate about coding and technologies. 2+ Years
              of experience in the web development industry which I handle good
              logic and several years in develpment world since my beginnings.
              Experience in iGaming industry in europe as a Web Frontend
              Developer and as a self-taught I keep improving my skills.
              Experience with Java and Node.js. I like challenges and human
              quality above all. I like to grow and challenges.
            </p>
          </section>
        </div>
        <button
          className={classNames(
            "flex mt-6 md:mt-4 gap-2 p-1 items-center justify-center bg-blue-400 dark:bg-blue-500 text-sm md:text-base dark:hover:bg-violet-600 rounded-bl-lg rounded-br-lg hover:bg-violet-500 text-white w-full",
            aboutStyles.buttonCv
          )}
          style={{ overflowAnchor: "none" }}
        >
          <a href={cvpdf} className="flex gap-2 font-bold" target="_blank">
            CV
            <img src={cvlogo} alt="" className="w-6 h-6" />
          </a>
        </button>
      </div>
      <aside>text2</aside>
      <aside>
        <div className="p-2 bg-green-500 my-5 w-full"></div>
        <div className="p-2 bg-green-500 my-5 w-full"></div>
      </aside>
    </div>
  );
};

export default About;
