import React from "react";
import "../Title/Title.css";

function Title(props) {
  const { visible } = props;
  return (
    <div className="title-content">
      <div className={visible ? "title transition" : "title"}>
        <h1>Title Content</h1>
      </div>
    </div>
  );
}

export default Title;
