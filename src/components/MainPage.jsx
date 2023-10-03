import { useEffect, useState } from "react";
import mongoLogo from '../assets/logos/mongo4.png'
import expressLogo from '../assets/logos/express1.png'
import reactLogo from '../assets/logos/reactjs2.png'
import nodeLogo from '../assets/logos/nodejs.png'




const Main = () => {
  
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
const colors = ["#FF4C4C", "#45A7D5", "#31DC03", "#8B14F4", "#FF7E19", "#A25B01"];
const h2Style = {
transition: "color 0.9s ease",
color: colors[currentColorIndex]
};

useEffect(() => {
const intervalId = setInterval(() => {
setCurrentColorIndex(currentColorIndex => (currentColorIndex + 1) % colors.length);
}, 1000);
return () => clearInterval(intervalId);
}, [colors.length]);

  
  return (
    <div className="flex mx-4 flex-col gap-2 items-center font-bold justify-center my-6 border-2 pb-5 px-4">
      <h1 className="flex mt-8 text-2xl md:text-5xl lg:text-6xl gap-[6px]"><h1 style={h2Style}>Fullstack</h1>Developer</h1>
      <div className="bg-gray-100 group relative overflow-hidden py-2 px-6 mt-2 rounded-lg">
      <div className="w-3 bg-gray-300 border border-black/5 absolute inset-0 transition-all duration-500 ease-out group-hover:w-full"></div>
      <article className="relative flex  gap-1 bg-contain duration-500 border-black/10">
        <img src={mongoLogo} alt="mongodb" className="h-8 w-8 md:h-10 md:w-10" title="Mongo DB"/>
        <img src={expressLogo} alt="" className="h-8 w-8 md:h-10 md:w-10" title="Express js"/>
        <img src={reactLogo} alt="" className="h-8 w-[34px] md:h-10 md:w-11" title="React js"/>
        <img src={nodeLogo} alt="" className="h-8 w-8 md:h-10 md:w-10" title="Node js"/>
      </article>
      </div>
    </div>
  )
}

export default Main