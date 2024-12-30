import classNames from "classnames";
import { useEffect, useRef, useState } from "react";


export function LazyLoadElements({ children, lazyLoadFrom, lazyLoadTo }) {
  const [loaded, setLoaded] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
         
          setLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } //it triggers when 10% of the element is visible
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div
      className={classNames(lazyLoadFrom, loaded && lazyLoadTo)}
      ref={elementRef}
    >
      {loaded ? children : null}
    </div>
  );
}
