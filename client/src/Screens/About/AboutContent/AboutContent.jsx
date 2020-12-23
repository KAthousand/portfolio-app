import React from "react";
import "../AboutContent/AboutContent.css";

function AboutContent(props) {
  const { visible } = props;
  return (
    <div className="screen">
      <div className={visible ? "title transition" : "title"}>
        <h1>About Content</h1>
      </div>
    </div>
  );
}

export default AboutContent;
