import React from "react";
import "../WorkTitle/WorkTitle.css";

function WorkTitle(props) {
  const { visible } = props;
  return (
    <div className="screen">
      <div className={visible ? "title transition" : "title"}>
        <h1>Work Title</h1>
      </div>
    </div>
  );
}

export default WorkTitle;
