import React, { useEffect, useRef, useState } from "react";
import styles from "./scrollToView.module.css";

function ScrollToView(props: any) {
  const [isVisible, setVisible] = useState(true);
  const domRef: any = useRef();

  const scrollIntoView = props.scrollIntoView;

  useEffect(() => {
    // disable fade in section when scrollIntoView
    if (props.scrollIntoView) {
      setVisible(true);

      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);

    const domRefCurrent = domRef.current;

    return () => observer.unobserve(domRefCurrent);
  }, []);

  return (
    <div
      className={`${styles["fadeInSection"]} ${
        isVisible ? styles["isVisible"] : ""
      }`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default ScrollToView;
