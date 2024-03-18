import classNames from "classnames";
import myphoto from "../assets/personal/new-portfolio-photo1.jpg";
import cvlogo from "../assets/personal/cvicon.png";
import cvpdf from "../cv/CV-DEV-ES1.pdf";
import styles from "./styles/scrollbar.module.css";

import aboutStyles from "./About.module.css";
import { useLazyLoad } from "../hooks/useLazyLoad";
import React from "react";
import Accordion from "./interface/Accordion/Accordion";

const About = () => {
  const { isVisible, refOneSingleElement: ref } = useLazyLoad();

  return (
    <div className="md:grid flex flex-col justify-center items-center md:grid-cols-2 h-full lg:mx-[7rem] mb-[13rem]">
      <aside className="flex items-center justify-center ml-24 m-0 p-0 h-full">
        <h1 className="md:text-xl font-semibold border-b-[6px] border-orange-500 border-opacity-0 hover:border-opacity-50 transition-all duration-500">
          About Me
        </h1>
      </aside>

      <div
        className={classNames(
          " h-[15rem] md:h-[17rem] w-[22rem] md:w-[25rem] flex flex-col mt-[5rem] dark:bg-black/50 dark:hover:bg-black/35 dark:text-white/85 bg-gray-100 border-t-[3px] border-blue-500 md:border-green-400 lg:border-black py-6 px-4 mx-4 md:mx-0 rounded-lg lg:mx-auto md:hover:bg-blue-50 shadow-lg hover:shadow-blue-300 md:hover:shadow-gray-400 transition-all duration-700 delay-500 mb-[3rem] ",
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
              "overflow-auto scroll-smooth overflow-x-hidden w-44",
              styles.scrollAbout
            )}
          >
            <p className="inline-block text-sm md:text-md pr-3">
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
            "flex md:mt-4 gap-2 p-1 items-center justify-center bg-blue-400 dark:bg-blue-500 text-sm md:text-base dark:hover:bg-violet-600 rounded-bl-lg rounded-br-lg hover:bg-violet-500 text-white w-full",
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
      <aside className="md:flex items-center justify-center m-0 p-0 h-full">
        <h1 className="md:ml-24 md:text-xl font-semibold border-b-[6px] border-orange-500 border-opacity-0 hover:border-opacity-50 transition-all duration-500">
          Education and Relevant Experience
        </h1>
      </aside>
      <aside className="h-full flex justify-start items-start flex-col gap-3">
        <Accordion
          summary={"Bachelor's Degree"}
          subtitle="Institute of Technology 'Antonio Jose de Sucre (2014 - 2019)'"
        >
         Graduated in computer science where I started my world in coding with languages such as C, Java and database. 
        </Accordion>
        <Accordion
          summary={"Frontend Developer"}
          subtitle="Institute of Technology 'Antonio Jose de Sucre (2014 - 2019)'"
        >
          I graduated bla bla bla
        </Accordion>
        <Accordion
          summary={"Freelancer FullStack Developer"}
          subtitle="Institute of Technology 'Antonio Jose de Sucre (2014 - 2019)'"
        >
          I graduated bla bla bla
        </Accordion>
      </aside>
    </div>
  );
};

export default About;
