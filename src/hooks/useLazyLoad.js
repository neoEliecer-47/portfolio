
import { useEffect, useRef, useState, createRef } from "react";
export function useLazyLoad( projectData ) {
  const [isVisible, setIsVisible] = useState(false);
  console.log(projectData)
  const ref = useRef([]);
  let elementos = []
  elementos.push(ref.current = projectData?.map((_, index) => ref.current[index] ?? createRef()))//this evaluate every hiddenElement to push them in an array, otherwise if it is undefined it creates a reference for that hiddemElement
  console.log(elementos)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setIsVisible(entry.isIntersecting); //its better to do it with only vanilla js in this case, to avoid renders every time the state changes
    });

    elementos?.forEach((element, index) => observer.observe(element[index].current))
  }, []);

  return { isVisible, ref };
}
