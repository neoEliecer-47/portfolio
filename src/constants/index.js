import carHub from "../assets/projects/car-hub-landing-page.png";
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

export const projectsData = [
  {
    id: 1,
    img: carHub,
    name: "Car Hub",
    subitle: "",
    features: ["Drag and drop", "Dark mode", "Task filtering"],
    icons: [reactLogo, tailwindLogo],
    urlRepo: "https://github.com/neoEliecer-47/concessionaire-app",
    urlDemo: "https://concessionaire-app.vercel.app/",
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
