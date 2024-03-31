import { Link } from "react-scroll";
import CloseIcon from "../assets/icons/CloseIcon";
import { useRef } from "react";
import classNames from "classnames";

const Modal = ({ setModal, modal }) => {
  const refModal = useRef(null);

  if (modal) {
    setTimeout(() => {
      refModal.current.classList.remove("-translate-x-full");
    }, 20);
  }

  return (
    //`${!modal && " "}`
    <div
      ref={refModal}
      className={classNames(
        "absolute shadow-2xl shadow-gray-500 bg-opacity-80  transform -translate-x-full  flex flex-col top-12 -left-[21rem] z-10 md:hidden h-52 rounded-lg w-36  bg-blue-300 dark:bg-blue-800 transition-all duration-500 ease-linear",
        modal && "translate-x-full -left-[9rem]"
      )}
    >
      <CloseIcon onClick={() => setModal(false)} />
      <Link
        to="about"
        smooth={true}
        duration={700}
        className="dark:bg-white/85 font-semibold mt-8 p-2 bg-white rounded-tl-lg rounded-tr-lg md:hover:bg-blue-500 hover:text-white duration-500 mx-4"
      >
        About
      </Link>
      <Link
        to="projets"
        smooth={true}
        duration={700}
        className="dark:bg-white/85 font-semibold p-2 bg-white md:hover:bg-blue-500 hover:text-white duration-500 mx-4"
      >
        Projects
      </Link>

      <Link
        to="skills"
        smooth={true}
        duration={700}
        className="dark:bg-white/85 font-semibold p-2 bg-white md:hover:bg-blue-500 hover:text-white duration-500 mx-4 shadow-xl"
      >
        Skills
      </Link>

      <Link
        to="contact"
        smooth={true}
        duration={700}
        className="dark:bg-white/85 font-semibold p-2 bg-white rounded-bl-lg rounded-br-lg md:hover:bg-blue-500 hover:text-white duration-500 mx-4 shadow-xl"
      >
        Contact
      </Link>
    </div>
  );
};

export default Modal;
