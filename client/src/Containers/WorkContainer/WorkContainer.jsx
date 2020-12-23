import React, { useLayoutEffect, useState, useRef } from "react";

function WorkContainer(props) {
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
    <div className="work-container" id="work-container">
      <div className="work-title" ref={refA}>
        <WorkTitle visible={visible.title} />
      </div>
      <div className="work-content" ref={refB}>
        <WorkContent visible={visible.content} />
      </div>
    </div>
  );
}

export default WorkContainer;
