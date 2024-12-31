import CardProject from "./projects/CardProject";


import { useLazyLoad } from "../hooks/useLazyLoad";
import classNames from "classnames";
import { projectsData } from "../constants/index";



const Projects = () => {
  //CREATE A LOOP (MAYBE A FOR) TO PASS THROUGHT PROPS CSS CLASSES EVERY 3 ELEMENTS FROM THE DATA
  const { isVisible, refOneSingleElement } = useLazyLoad()

  function buildAnimationCards(id) {
    if (id <= 2) return "animate-fade-in-right";
    else if (id <= 5) return "animate-fade-in-left";  
    return "animate-fade-in-down";
  }
  return (
    <div className="h-full w-full p-0 m-0 dark:bg-black/20">
      <section className='w-full flex items-center justify-center mb-6'>
        <h1 ref={refOneSingleElement} className={classNames('text-black dark:text-white text-lg lg:text-2xl font-semibold mt-4 border-b-[6px] border-orange-500 border-opacity-0 hover:border-opacity-50 transition-all duration-500')}>Some projects I have worked on</h1>
      </section>
      <div
        className="h-full py-6 px-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[1080px] lg:mx-auto"
        id="projets"
      >
        {projectsData.length > 0 &&
          projectsData.map(
            ({
              id,
              img,
              name,
              subtitle,
              features,
              icons,
              urlRepo,
              urlDemo,
            }) => (
              <CardProject
                key={id}
                img={img}
                name={name}
                feature={features}
                icon={icons}
                subtitle={subtitle}
                urlRepo={urlRepo}
                urlDemo={urlDemo}
                animation={buildAnimationCards(id)}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Projects;
