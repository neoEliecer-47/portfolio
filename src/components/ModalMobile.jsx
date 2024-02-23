import { Link } from "react-scroll";
import CloseIcon from "../assets/icons/CloseIcon";
import { useRef } from "react";
import classNames from "classnames";

const Modal = ({ setModal, modal }) => {
  const refModal = useRef(null);

  if (modal) {
    setTimeout(() => {
      refModal.current.classList.remove("-translate-x-full");
    }, 50);
  }

  return (
    <div
      ref={refModal}
      className={classNames(
        `absolute shadow-2xl shadow-gray-500 bg-opacity-80  transform -translate-x-full  flex flex-col top-12 -left-[12rem] z-10 md:hidden h-52 rounded-lg w-36  bg-blue-300 transition-all duration-500 ease-linear ${
          !modal && "-left-[135px]"
        }`,
        `${!modal && "translate-x-full"}` //this whould have been easier to design with pure css
      )}
    >
      <CloseIcon onClick={() => setModal(false)} />

      <Link
        to="projets"
        smooth={true}
        duration={700}
        className="font-semibold mt-10 p-2 bg-white rounded-tl-lg rounded-tr-lg hover:bg-blue-500 hover:text-white duration-500 mx-4"
      >
        Projects
      </Link>

      <Link
        to="skills"
        smooth={true}
        duration={700}
        className="font-semibold p-2 bg-white hover:bg-blue-500 hover:text-white duration-500 mx-4 shadow-xl"
      >
        Skills
      </Link>

      <Link
        to="contact"
        smooth={true}
        duration={700}
        className="font-semibold p-2 bg-white rounded-bl-lg rounded-br-lg hover:bg-blue-500 hover:text-white duration-500 mx-4 shadow-xl"
      >
        Contact
      </Link>
    </div>
  );
};

export default Modal;
