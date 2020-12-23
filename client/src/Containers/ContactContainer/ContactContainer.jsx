import React, { useLayoutEffect, useState, useRef } from "react";
import ContactTitle from "../../Screens/Contact/ContactTitle/ContactTitle";
import ContactContent from "../../Screens/Contact/ContactContent/ContactContent";

function ContactContainer(props) {
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
    <div className="contact-container" id="contact-container">
      <div className="contact-title" ref={refA}>
        <ContactTitle visible={visible.title} />
      </div>
      <div className="contact-content" ref={refB}>
        <ContactContent visible={visible.content} />
      </div>
    </div>
  );
}

export default ContactContainer;
