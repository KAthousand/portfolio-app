import React, { useLayoutEffect, useState, useRef } from "react";
import AboutTitle from "../../Screens/About/AboutTitle/AboutTitle";
import AboutContent from "../../Screens/About/AboutContent/AboutContent";

function AboutContainer(props) {
  const [visible, setVisible] = useState({
    title: false,
    content: false,
  });
  const refA = useRef(null);
  const refB = useRef(null);

  useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top;
    const titlePosition = topPosition(refA.current);
    const contentPosition = topPosition(refB.current);
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (titlePosition < scrollPosition && scrollPosition <= contentPosition) {
        setVisible((prevState) => ({ ...prevState, title: true }));
      } else if (contentPosition < scrollPosition) {
        setVisible((prevState) => ({
          ...prevState,
          title: true,
          content: true,
        }));
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="container about" id="about-container">
      <div className="about-container-title" ref={refA}>
        <AboutTitle visible={visible.title} />
      </div>
      <div className="about-container-content" ref={refB}>
        <AboutContent visible={visible.content} />
      </div>
    </div>
  );
}

export default AboutContainer;
