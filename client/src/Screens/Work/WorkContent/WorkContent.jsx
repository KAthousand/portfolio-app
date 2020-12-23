import React from "react";
import "../WorkContent/WorkContent.css";

function WorkContent(props) {
  const { visible } = props;
  return (
    <div className="screen">
      <div className={visible ? "title transition" : "title"}>
        <h1>Work Content</h1>
      </div>
    </div>
  );
}

export default WorkContent;
