import React from "react";
import "../AboutTitle/AboutTitle.css";

function AboutTitle(props) {
  const { visible } = props;
  return (
    <div className="screen">
      <div className={visible ? "title transition" : "title"}>
        <h1>About Title</h1>
      </div>
    </div>
  );
}

export default AboutTitle;
