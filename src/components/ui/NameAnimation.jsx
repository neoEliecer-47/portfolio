import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./NameAnimation.module.css";

const NameAnimation = ({ words }) => {
  const [currentWord, setCurrentWord] = useState(null);

  function wordToShow() {
    words.forEach(function (element, index) {
      setTimeout(() => {
        setCurrentWord(element);
      }, index * 3200);
    });
  }

  useEffect(() => {
    wordToShow();
  }, []);

  return (
    <section className={classNames("flex gap-[1rem]", styles.caja)}>
      <h2 className="md:text-2xl">Hello,</h2>
      <h2 className={classNames("md:text-2xl", styles.list)}>{currentWord}!</h2>
    </section>
  );
};

export default NameAnimation;
