import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DarkModeUI.module.css";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

const initialStateDarkMode =
  localStorage.getItem("theme") === "light" ? false : true;

const DarkModeUI = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);
  const refICon = useRef(null);
  
  useEffect(() => {
    setTimeout(() => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      refICon.current?.classList.add(styles.animated);
    }, 50);
  }, [darkMode]);

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={styles.btn} onClick={handleDarkMode}>
      <section
        className={classNames(
          styles.btn__indicator,
          darkMode ? styles.btn_indicator_sun : styles.btn_indicator_moon
        )}
      >
        <div
          className={classNames(
            styles.btn__icon__container,
            darkMode && styles.btn_icon_container_moon
          )}
        >
          <FontAwesomeIcon
            className={classNames(
              "w-[1.5em] h-[1.5em] md:w-[1.8em] md:h-[1.8em]",
              darkMode ? styles.btn_icon_moon : styles.btn_icon_sun
            )}
            icon={darkMode ? faMoon : faSun}
            ref={refICon}
          />
        </div>
      </section>
    </div>
  );
};

export default DarkModeUI;
