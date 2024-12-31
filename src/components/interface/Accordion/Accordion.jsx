import classNames from "classnames";
import { useRef, useState } from "react";
import styles from "./Accordion.module.css";
import AccordionArrow from "./AccordionArrow";

const Accordion = ({ summary, children, subtitle, height }) => {
  const [hiddenContent, setHiddenContent] = useState(true);
  const accordionRef = useRef(null);

  function handleAccordion() {
    return setHiddenContent(!hiddenContent);
  }
  return (
    <section
      className={classNames(styles.container, "lg:w-[25rem] gap-3 m-auto")}
      onClick={handleAccordion}
    >
      <div className={styles.containerTitle}>
        <summary
          className={classNames(
            styles.summary,
            "bg-blue-100 dark:bg-gray-200"
          )}
        >
          {summary}
        </summary>
        <AccordionArrow
          className={classNames(
            styles.arrow,
            !hiddenContent && styles.arrwAnimation,
            'dark:bg-blue-100'
          )}
          stroke={5}
        />
      </div>
      <div
        ref={accordionRef}
        className={classNames(
          styles.content,
          !hiddenContent && styles.contentActive,
          "bg-white dark:bg-black/20 dark:text-white"
        )}
        onClick={!hiddenContent ? handleAccordion : ""}
        style={{
          height: hiddenContent
            ? "0px"
            : `${accordionRef.current?.scrollHeight}px`,
        }}
      >
        <span
          className="font-bold mb-2 text-[1rem] lg:text-xl p-[0.5rem] m-0 block text-black dark:text-white"
        >
          {subtitle}
        </span>
        <p
          style={{
            padding: "0.5rem",
            margin: "0",
          }}
          className={styles.parrafo}
        >
          {children}
        </p>
      </div>
    </section>
  );
};

export default Accordion;
