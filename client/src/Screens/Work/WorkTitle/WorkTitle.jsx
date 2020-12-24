import React from "react";
import "../WorkTitle/WorkTitle.css";
import WorkTitleImg from "../../../Components/WorkTitleImg/WorkTitleImg";

function WorkTitle(props) {
  const { visible } = props;
  return (
    <div className="screen">
      <WorkTitleImg visible={visible} />
    </div>
  );
}

export default WorkTitle;
