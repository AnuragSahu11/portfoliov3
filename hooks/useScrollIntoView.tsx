import { useRef, useState, useEffect } from "react";

const useScrollIntoView = () => {
  const [isVisible, setVisible] = useState(true);
  const domRef: any = useRef();

  //   const scrollIntoView = props.scrollIntoView;

  useEffect(() => {
    // disable fade in section when scrollIntoView
    // if (props.scrollIntoView) {
    //   setVisible(true);

    //   return;
    // }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);

    const domRefCurrent = domRef.current;

    return () => observer.unobserve(domRefCurrent);
  }, []);

  return { elementRef: domRef, showElement: isVisible };
};

export default useScrollIntoView;
