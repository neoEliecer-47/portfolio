import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import ModalMobile from "./ModalMobile";
import MenuIcon from "../assets/icons/MenuIcon";
import DarkModeUI from "./ui/DarkModeUI";
import classNames from "classnames";
import styles from "./Header.module.css";

const Header = () => {
  const [modal, setModal] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  function listenToScroll() {
    let heightToHideFrom = 150;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }

  return (
    <div
      className={classNames(
        "z-20 fixed w-full gap-2 py-5 px-4  bg-black/45 md:bg-[url('./assets/bg/wp9109672.jpg')] md:bg-cover md:bg-center transition-all duration-700 dark:bg-black/35 dark:backdrop-invert",
        isVisible && styles.header,
        !isVisible && styles.headerScroll
      )}
    >
      
        <section 
          className={classNames(
            "hidden w-full md:flex md:items-center md:justify-center rounded-[10em] m-0",
            
          )}
        >
          <DarkModeUI />
        </section>
        <div style={{transition: 'all 1s', display: `${isVisible && ''}`}} className={classNames("relative md:hidden w-full justify-between items-center", !isVisible && styles.darkModeContainer)}>
          {isVisible && (
            <button
              onClick={() => setModal(!modal)}
              className="h-[2.3rem] w-9 relative rounded-lg flex items-center justify-center hover:bg-blue-500 duration-500 p-1 bg-blue-400 md:hidden"
            >
              <MenuIcon />

              <ModalMobile modal={modal} setModal={setModal} />
            </button>
          )}
          <div className="absolute -top-2 left-60">
          <DarkModeUI />
          </div>
        </div>
      
      <section className="hidden md:flex bg-blue-400 py-2 px-4 rounded-lg bg-opacity-40 items-center">
        <Link
          to="projets"
          className="cursor-pointer rounded-tl-lg rounded-bl-lg hover:bg-white py-2 px-4 duration-500 text-white font-bold hover:text-gray-800"
          smooth={true}
          duration={700}
        >
          Projets
        </Link>

        <Link
          to="skills"
          className="cursor-pointer hover:bg-white py-2 px-4 duration-500 text-white font-bold hover:text-gray-800"
          smooth={true}
          duration={700}
        >
          Skills
        </Link>

        <Link
          to="contact"
          className="cursor-pointer rounded-tr-lg rounded-br-lg hover:bg-white py-2 px-4 duration-500 text-white font-bold hover:text-gray-800"
          smooth={true}
          duration={700}
        >
          Contact
        </Link>
      </section>
    </div>
  );
};

export default Header;
