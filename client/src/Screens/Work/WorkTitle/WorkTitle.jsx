import React from "react";
import "../WorkTitle/WorkTitle.css";

function WorkTitle(props) {
  const { visible } = props;
  return (
    <div className="screen">
      <div
        className={
          visible
            ? "work-title-content work-title-transition"
            : "work-title-content"
        }
      ></div>
    </div>
  );
}

export default WorkTitle;
