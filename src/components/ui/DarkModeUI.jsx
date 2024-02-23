import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DarkModeUI.module.css";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";



const DarkModeUI = () => {
  const [darkMode, setDarkMode] = useState(false);
  const refICon = useRef(null)
  useEffect(() => {
    setTimeout(() => {
        refICon.current.classList.add(styles.animated)
    }, 50);
  }, [darkMode])
  
  return (
    <div className={styles.btn} onClick={() => setDarkMode(!darkMode)}>
      <section
        className={classNames(
          styles.btn__indicator,
          darkMode ? styles.btn_indicator_sun : styles.btn_indicator_moon
        )}
      >
        <div className={styles.btn__icon__container}>
          <FontAwesomeIcon
            className={classNames(
              "w-[3em] h-[3em]",
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
