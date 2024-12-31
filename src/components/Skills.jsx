import jwtLogo from "../assets/logos/jwt.png";
import socketIoLogo from "../assets/logos/socket-io.png";
import postmanLogo from "../assets/logos/postman.png";

import mysqlLogo from "../assets/logos/mysql.png";
import postgreLogo from "../assets/logos/postgree.png";



import tailwindLogo from "../assets/some-skills/tailwind.png";
import java from '../assets/some-skills/java.png'
import nodejs from '../assets/logos/nodejs.png'

import classNames from "classnames";
import styles from './lazyLoad.module.css'
import { useLazyLoad } from "../hooks/useLazyLoad";

const Skills = () => {

  const { isVisible, refOneSingleElement: ref } = useLazyLoad()
  const { isVisible: isVisible2, refOneSingleElement: ref2 } = useLazyLoad()

  return (
    <div
      className={classNames("flex flex-col items-center md:items-stretch md:flex-row md:max-w-[940px] md:mx-auto gap-1 mx-4 mt-4", `${false && styles.skills}`)}
      id="skills"
      
      
    >
      <div ref={ref} className={classNames("border-4 px-12 py-6 bg-blue-500 relative overflow-hidden group shadow-xl shadow-gray-500 hover:shadow-2xl items-center rounded-full", isVisible && 'animate-horizontal-bounce')}>
        <h1 className="text-white font-bold text-center text-sm">
          Technologies which I have also worked with:
        </h1>
        <article className="inset-0 absolute p-4 flex gap-1 items-center justify-center bg-[#3b3d3d] opacity-0 scale-110 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out">
          <img
            src={jwtLogo}
            alt=""
            className="w-9 h-9 lg:w-12 lg:h-12"
            title="JSON Web Tokens"
          />
          <img
            src={socketIoLogo}
            alt=""
            className="w-9 h-9 lg:w-12 lg:h-12"
            title="Socket.io"
          />
          <img
            src={postmanLogo}
            alt=""
            className="w-10 h-9 lg:w-14 lg:h-12"
            title="Postman API"
          />
          <img
            src={mysqlLogo}
            alt=""
            className="w-9 h-9 lg:w-12 lg:h-12"
            title="MySQL"
          />
          <img
            src={tailwindLogo}
            alt=""
            className="w-9 h-9 lg:w-12 lg:h-12"
            title="Tailwind CSS"
          />
          <img
            src={postgreLogo}
            alt=""
            className="w-9 h-9 lg:w-12 lg:h-12"
            title="PostgreSQL"
          />
        </article>
      </div>
      
      <section ref={ref2} className={classNames("flex mx-4", isVisible2 && 'animate-bounce-fade-in')}>
        <div className="border-4 px-11 md:px-24 py-6 group rounded-full relative overflow-hidden">
          <div className="h-2 bg-blue-300 absolute inset-0 transition-all duration-500 ease-out group-hover:h-full"></div>
          <span className="relative text-blue-400 group-hover:text-white">
            <h2 className="text-center dark:text-white">Backend</h2>
            <figure className="flex gap-1 items-center justify-center">
              <img
                src={nodejs}
                alt="nodejs logo"
                className="h-9 w-9 md:h-10 md:w-10"
                title="Node.js"
              />
              <img
                src={java}
                alt="java logo"
                className="h-9 w-9 md:h-10 md:w-10"
                title="Java"
              />
            </figure>
          </span>
        </div>

        <div
          className="border-4 bg-blue-400 px-7 md:px-12 py-6 group relative rounded-full overflow-hidden"
          title="English level"
        >
          <div className="h-2 bg-white absolute inset-0 transition-all duration-500 ease-out group-hover:h-full"></div>
          <span className="relative items-center text-gray-200 group-hover:text-blue-400 flex flex-col">
            <h2 className="text-center mb-1">English</h2>
            <figure className="flex gap-1 items-center justify-center">
              <h2 className="uppercase font-bold text-xl">C1</h2>
            </figure>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Skills;
