import CardProject from "./projects/CardProject";
import todoAppImg from "../assets/projects/todoapp.jpg";
import goSearchImg from "../assets/projects/gosearch.jpg";
import apiRestImg from "../assets/projects/apirest.jpg";
import dallEclone from "../assets/projects/dall-e-clone.jpg";
import chatWs from "../assets/projects/chatws.jpg";
import airbnbClone from "../assets/projects/airbnb-clone.jpg";

import reactLogo from "../assets/logos/reactjs2.png";
import tailwindLogo from "../assets/some-skills/tailwind.png";
import nodejsLogo from "../assets/logos/nodejs.png";
import expressLogo from "../assets/logos/express.png";
import mongoLogo from "../assets/logos/mongo4.png";

import styles from "./Projects.module.css";
import { useLazyLoad } from "../hooks/useLazyLoad";

const projectsData = [
  {
    id: 1,
    img: todoAppImg,
    name: "To-do",
    subitle: "",
    features: ["Drag and drop", "Dark mode", "Task filtering"],
    icons: [reactLogo, tailwindLogo],
    urlRepo: "https://github.com/neoEliecer-47/tailwind-todoApp-react",
    urlDemo: "https://todo-pro-react.netlify.app/",
  },
  {
    id: 2,
    img: goSearchImg,
    name: "GoSearch",
    subtitle: "Search Engine",
    features: ["Text and images", "Dark mode", "Responsive"],
    icons: [reactLogo, tailwindLogo],
    urlRepo: "https://github.com/neoEliecer-47/go-search-react-rapidapi",
    urlDemo: "https://go-search-react.netlify.app",
  },
  {
    id: 3,
    img: apiRestImg,
    name: "API REST",
    subtitle: "shortlink",
    features: ["JWT", "CRUD", "REST standards"],
    icons: [nodejsLogo, expressLogo, mongoLogo],
    urlRepo: "https://github.com/neoEliecer-47/backend-ApiRest1",
    urlDemo: "https://api-rest-1.onrender.com/api/v1/links/xbo2eo",
  },
  {
    id: 4,
    img: dallEclone,
    name: "DALL-E",
    subtitle: "clone",
    features: ["AI power", "Open AI"],
    icons: [tailwindLogo, reactLogo, nodejsLogo, expressLogo, mongoLogo],
    urlRepo: "https://github.com/neoEliecer-47/dall-e-clone-mern",
    urlDemo: "https://dall-e-mern-clone.netlify.app",
  },
  {
    id: 5,
    img: chatWs,
    name: "E-Chat",
    features: ["Real time", "Web Sockets"],
    icons: [tailwindLogo, reactLogo, nodejsLogo, expressLogo, mongoLogo],
    urlRepo: "https://github.com/neoEliecer-47/chat-mern-websocket",
    urlDemo: "https://chat-mern-ws.netlify.app",
  },
  {
    id: 6,
    img: airbnbClone,
    name: "Airbnb",
    subtitle: "clone",
    features: ["CRUD", "FullStack"],
    icons: [tailwindLogo, reactLogo, nodejsLogo, expressLogo, mongoLogo],
    urlRepo: "https://github.com/neoEliecer-47/airbnb-clone-mern",
    urlDemo: "https://airbnb-mern.netlify.app",
  },
];

const Projects = () => {
  const { isVisible: visible1, refMultipleElements: ref1 } = useLazyLoad(projectsData);
  const { isVisible: visible2, refMultipleElements: ref2 } = useLazyLoad(projectsData);

  return (
    <>
      <div
        className="py-6 px-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[1080px] lg:mx-auto"
        id="projets"
        key={''}
      >
        {projectsData.length > 0 &&
          projectsData
            .slice(0, 3)
            .map(
              ({
                id,
                img,
                name,
                subtitle,
                features,
                icons,
                urlRepo,
                urlDemo,
              }, index) => (
                <div  >
                  <CardProject
                    key={id}
                    img={img}
                    name={name}
                    feature={features}
                    icon={icons}
                    subtitle={subtitle}
                    urlRepo={urlRepo}
                    urlDemo={urlDemo}
                    
                    
                  />
                </div>
              )
            )}
        {projectsData.length > 0 &&
          projectsData
            .slice(3, 6)
            .map(
              ({
                id,
                img,
                name,
                subtitle,
                features,
                icons,
                urlRepo,
                urlDemo,
              }, index) => (
                <div>
                  <CardProject
                    key={id}
                    img={img}
                    name={name}
                    feature={features}
                    icon={icons}
                    subtitle={subtitle}
                    urlRepo={urlRepo}
                    urlDemo={urlDemo}
                  />
                </div>
              )
            )}
      </div>
    </>
  );
};

export default Projects;
