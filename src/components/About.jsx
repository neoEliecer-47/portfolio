import classNames from "classnames";
import myphoto from "../assets/personal/new-portfolio-photo1.jpg";
import cvlogo from "../assets/personal/cvicon.png";
import cvpdf from "../cv/CV-DEV-ES1.pdf";
import styles from "./styles/scrollbar.module.css";

import aboutStyles from "./About.module.css";
import { useRef, useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log(entry);
      setIsVisible(entry.isIntersecting);//its better to do it with only vanilla js in this case, to avoid renders every time ths state changes
      //true o false
    });

    observer.observe(ref.current);
  }, []);

  return (
    <div
      className={classNames(
        "w-[22rem] flex flex-col bg-gray-100 mx-4 border-t-[3px] border-blue-500 md:border-green-400 lg:border-black py-6 px-4 rounded-lg md:w-[350px] md:mx-auto md:hover:bg-blue-50 shadow-lg hover:shadow-blue-300 md:hover:shadow-gray-400 transition-all",
        `${isVisible ? aboutStyles.lazyLoad : ""}`/*el estado esta haciendo que se vuelva a renderizar cada vez que hay un cambio por ende se vuelve a ejecutar el observer en el useEffect*/ 
      )}
      id="about"
      ref={ref}
    >
      <div
        className="grid gap-2 w-[19.5rem] h-44 md:h-44"
        style={{ gridTemplateColumns: "1fr 1fr" }}
      >
        <img
          src={myphoto}
          alt=""
          className="h-[190px] w-32 md:h-[175px] md:w-[8.2em]  rounded-tl-lg"
        />
        <section
          className={classNames(
            "overflow-auto overflow-x-hidden w-44",
            styles.scrollAbout
          )}
        >
          <p className={"text-sm md:text-md text-start p-3 "}>
            I am Eliecer, passionate about coding and technologies. 2+ Years of
            experience in the software development industry which I handle good
            logic. Experience in iGaming industry in europe as a Web Frontend
            Developer and as a self-taught I keep improving my skills.
            Experience with Java and Node.js. I like challenges and human
            quality above all. I like to grow and challenges.
          </p>
        </section>
      </div>
      <button
        className={classNames(
          "flex mt-6 md:mt-4 gap-2 p-1 items-center justify-center bg-blue-400 text-sm md:text-base border rounded-bl-lg rounded-br-lg hover:bg-violet-500 text-white w-full",
          aboutStyles.buttonCv
        )}
      >
        <a href={cvpdf} className="flex gap-2 font-bold" target="_blank">
          CV
          <img src={cvlogo} alt="" className="w-6 h-6" />
        </a>
      </button>
    </div>
  );
};

export default About;
