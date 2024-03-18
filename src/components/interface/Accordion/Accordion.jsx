import classNames from "classnames";
import { useState } from "react";
import styles from "./Accordion.module.css";
import AccordionArrow from "./AccordionArrow";

const Accordion = ({ summary, children, subtitle }) => {
  const [hiddenContent, setHiddenContent] = useState(true);
 
  function handleActiveAcordion() {
    return setHiddenContent(!hiddenContent);
  }
  return (
    <section className={classNames(styles.container, "lg:w-[25rem] gap-3 m-auto")} onClick={handleActiveAcordion}>
      <div className={styles.containerTitle}>
        <summary className={styles.summary}>{summary}</summary>
        <AccordionArrow className={classNames(styles.arrow, !hiddenContent && styles.arrwAnimation)} stroke={5}/>
      </div>
      <div
        className={classNames(
          styles.content,
          !hiddenContent ? styles.contentActive : styles.contentUnactive
  
        )}
        onClick={!hiddenContent ? handleActiveAcordion : ''}
        
      >
        <span
          style={{
            display: `${hiddenContent ? "none" : ""}`,
            transition: "all 700ms linear ease-out",
            fontWeight: '600'
          }}
        >
          {subtitle}
        </span>
        <p
          style={{
            display: `${hiddenContent ? "none" : ""}`,
            transition: "all 600ms linear",
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
