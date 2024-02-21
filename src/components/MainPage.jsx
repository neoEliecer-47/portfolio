import { useEffect, useState } from "react";
import js from "../assets/some-skills/js.png";
import ts from "../assets/some-skills/typescript.png";
import reactLogo from "../assets/logos/reactjs2.png";
import nextLogo from "../assets/some-skills/nextjs.png";
import NameAnimation from "./ui/NameAnimation";

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

  const words = ['Eliecer', 'users', 'Everyone', 'mother fuckers']

  return (
    <div className="flex mx-4 flex-col gap-2 items-center font-bold justify-center my-6 border-2 pb-5 px-4">
      <h1 className="flex mt-8 text-2xl md:text-5xl lg:text-6xl gap-[6px]">
        <h1 style={h2Style}>Frontend</h1>Developer
      </h1>
     <NameAnimation words={words}/>
      <div className="bg-gray-100 group relative overflow-hidden py-2 px-6 mt-14 rounded-lg">
        <div
          style={{ backgroundColor: `${h2Style.color}` }}
          className="w-3 border border-black/5 absolute inset-0 transition-all duration-500 ease-out group-hover:w-full"
        ></div>
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
