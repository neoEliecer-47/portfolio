import { useEffect, useRef, useState } from "react";
export function useLazyLoad() {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      setIsVisible(entry.isIntersecting); //its better to do it with only vanilla js in this case, to avoid renders every time the state changes
    });

    observer.observe(ref.current);
  }, []);

  return { isVisible, ref };
}
