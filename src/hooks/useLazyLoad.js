import { useEffect, useRef, useState, createRef } from "react";
export function useLazyLoad(projectData = null) {
  const [isVisible, setIsVisible] = useState(false);

  const refMultipleElements = useRef([]);
  const refOneSingleElement = useRef(null);
  let elementos = [];
  //depending on the available data is gonna create elements(refs) for each data
  if (projectData) {
    elementos.push(
      (refMultipleElements.current = projectData?.map(
        (_, index) => refMultipleElements.current[index] ?? createRef()
      ))
    ); //this evaluate every hiddenElement to push them in an array, otherwise if it is undefined it creates a reference for that hiddemElement
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      const entry = entries[0];

      setIsVisible(entry.isIntersecting); //its better to do it with only vanilla js in this case, to avoid renders every time the state changes
    });

    // if (projectData) {
    //   //its going to get in here when there are at leasts two elements
    //   elementos?.forEach((element, index) =>
    //     observer.observe(element[index].current)
    //   );

    // }
    if (refOneSingleElement.current) {
      //it was giving error because at the beggining the ref is null

      observer.observe(refOneSingleElement.current);
    }

    return () => {
      if (refOneSingleElement.current) {
        observer.unobserve(refOneSingleElement.current);
        //observer destruction
        //so we can remove the observer from the component not to leave it mounted
      }
    };
  }, []);

  return { isVisible, refMultipleElements, refOneSingleElement };
}
