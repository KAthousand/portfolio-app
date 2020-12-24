import React from "react";
import "../AboutTitle/AboutTitle.css";
import PhotoCard from "../../../Components/PhotoCard/PhotoCard";

function AboutTitle(props) {
  const { visible } = props;
  return (
    <div className="screen">
      <PhotoCard visible={visible} />
    </div>
  );
}

export default AboutTitle;
