import CardProject from './projects/CardProject'
import todoAppImg from '../assets/projects/todoapp.jpg'
import goSearchImg from '../assets/projects/gosearch.jpg'
import apiRestImg from '../assets/projects/apirest.jpg'
import dallEclone from '../assets/projects/dall-e-clone.jpg'
import chatWs from '../assets/projects/chatws.jpg'
import airbnbClone from '../assets/projects/airbnb-clone.jpg'

import reactLogo from '../assets/logos/reactjs2.png'
import tailwindLogo from '../assets/logos/tailwind.png'
import nodejsLogo from '../assets/logos/nodejs.png'
import expressLogo from '../assets/logos/express.png'
import mongoLogo from '../assets/logos/mongo4.png'



const projectsData = [
  {
    id: 1,
    img: todoAppImg,
    name: "To-do",
    subitle: "",
    features: ['Drag and drop', 'Dark mode','Task filtering'],
    icons: [reactLogo, tailwindLogo]
  },
  {
    id: 2,
    img: goSearchImg,
    name: "GoSearch",
    subtitle: "Search Engine",
    features: ["Text and images","Dark mode","Responsive"],
    icons: [reactLogo, tailwindLogo]
  },
  {
    id:3,
    img: apiRestImg,
    name: "API REST",
    subtitle: "shortlink",
    features: ["JWT", "CRUD", "REST standards"],
    icons: [nodejsLogo, expressLogo, mongoLogo]
  },
  {
    id: 4,
    img: dallEclone,
    name: "DALL-E",
    subtitle: "clone",
    features: ["AI power", "Open AI"],
    icons: [tailwindLogo, reactLogo, nodejsLogo, expressLogo, mongoLogo]
  },
  {
    id: 5,
    img: chatWs,
    name: "E-Chat",
    features: ["Real time", "Web Sockets"],
    icons: [tailwindLogo, reactLogo, nodejsLogo, expressLogo, mongoLogo]
  },
  {
    id: 6,
    img: airbnbClone,
    name: "Airbnb",
    subtitle: "clone",
    features: ["CRUD", "FullStack"],
    icons: [tailwindLogo, reactLogo, nodejsLogo, expressLogo, mongoLogo]
  }
]

const Projects = () => {
  return (
      <>
        
        <div className='py-6 px-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[1080px] lg:mx-auto' id='projets'>
          {
            projectsData.length > 0 && projectsData.map(({ id, img, name, subtitle, features, icons }) => (
              <CardProject key={id} img={img} name={name} feature={features} icon={icons} subtitle={subtitle}/>
            ))
          }
        </div> 
      </>
  )
}

export default Projects