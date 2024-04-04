import classNames from "classnames";
import myphoto from "../assets/personal/new-portfolio-photo1.jpg";
import cvlogo from "../assets/personal/cvicon.png";
import cvpdf from "../cv/CV-DEV-ES1.pdf";
import styles from "./styles/scrollbar.module.css";
import animations from "@midudev/tailwind-animations";
import aboutStyles from "./About.module.css";
import { useLazyLoad } from "../hooks/useLazyLoad";
import React from "react";
import Accordion from "./interface/Accordion/Accordion";

const About = () => {
  const { isVisible, refOneSingleElement: ref } = useLazyLoad();
  const { isVisible: isVisible2, refOneSingleElement: ref2 } = useLazyLoad();
  const { isVisible: isVisible3, refOneSingleElement: ref3 } = useLazyLoad();
  const { isVisible: isVisible4, refOneSingleElement: ref4 } = useLazyLoad();

  return (
    <div className=" md:grid flex flex-col justify-center items-center md:grid-cols-2 h-full lg:mx-[7rem] md:mb-[8rem] mb-[2rem]">
      <aside
        className={classNames(
          "flex items-center justify-center md:ml-24 m-0 p-0 h-full w-full"
        )}
      >
        <h1
          className={classNames(
            "dark:text-white p-4 text-lg md:p-0 md:text-xl font-semibold border-b-[6px] border-orange-500 border-opacity-0 hover:border-opacity-50 transition-all duration-500",
            isVisible && "animate-fade-in-left"
          )}
          ref={ref}
        >
          About Me
        </h1>
      </aside>

      <div
        className={classNames(
          " md:h-[17rem] h-[18rem] w-[22rem] md:w-[25rem] flex flex-col md:mt-[5rem] dark:bg-black/50 dark:hover:bg-black/35 dark:text-white/85 bg-gray-100 border-t-[3px] border-blue-500 md:border-green-400 lg:border-black py-6 px-4 mx-4 md:mx-0 rounded-lg lg:mx-auto md:hover:bg-blue-50 shadow-lg hover:shadow-blue-300 md:hover:shadow-gray-400 transition-all duration-700 delay-500 md:mb-[3rem] ",
          `${
            isVisible2 && "animate-bounce-fade-in"
          }` /*el estado esta haciendo que se vuelva a renderizar cada vez que hay un cambio por ende se vuelve a ejecutar el observer en el useEffect*/
        )}
        ref={ref2}
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
            "flex mt-[1.80rem] md:mt-4 gap-2 p-1 items-center justify-center bg-blue-400 dark:bg-blue-500 text-sm md:text-base dark:hover:bg-violet-600 rounded-bl-lg rounded-br-lg hover:bg-violet-500 text-white w-full",
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
        <h1
          className={classNames(
            "text-lg dark:text-white p-5 md:p-0 md:ml-24 md:text-xl font-semibold border-b-[6px] border-orange-500 border-opacity-0 hover:border-opacity-50 transition-all duration-500",
            isVisible3 && "animate-fade-in-right"
          )}
          ref={ref3}
        >
          Education and Relevant Experience
        </h1>
      </aside>
      <aside
        className={classNames(
          "h-full flex justify-start items-start flex-col gap-3 px-4 w-full",
          isVisible4 && "animate-fade-in-up"
        )}
        ref={ref4}
      >
        <Accordion
          summary={"Bachelor's Degree"}
          subtitle="Institute of Technology 'Antonio Jose de Sucre (2014 - 2019)'"
          height={8}
        >
          Graduated in computer science where I started my world in coding with
          languages such as C, Java and database.
        </Accordion>
        <Accordion
          summary={"Frontend Developer"}
          subtitle="Kanon Gaming Limited"
          height={6.7}
        >
          Frontend developer in iGaming industry in Malta where I had the opportunity to work with JavaSciript, React, Nextjs and CSS
        </Accordion>
        <Accordion
          summary={"Freelancer JavaScript Developer"}
          subtitle="Alimentos El Tunal"
          height={6.3}
        >
          I have Worked on some projects as a Freelancer, mostly on the frontend with JavaScript and React but also with Nodejs
        </Accordion>
      </aside>
    </div>
  );
};

export default About;
