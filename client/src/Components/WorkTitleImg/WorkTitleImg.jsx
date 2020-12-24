import React from "react";
import "../WorkTitleImg/WorkTitleImg.css";
function WorkTitleImg(props) {
  const { visible } = props;
  return (
    <div
      className={
        visible
          ? "work-title-content work-title-transition"
          : "work-title-content"
      }
    ></div>
  );
}

export default WorkTitleImg;
