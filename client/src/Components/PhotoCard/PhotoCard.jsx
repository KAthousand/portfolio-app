import React from "react";
import hand from "../../assets/handillustration.png";
import "../PhotoCard/PhotoCard.css";

function PhotoCard(props) {
  const { visible } = props;
  return (
    <div className="photo-card-container">
      <div className={visible ? "selfie slide-transition" : "selfie"}></div>
      <div className={visible ? "box-one box-one-transition" : "box-one"}></div>
      <div className={visible ? "box-two box-two-transition" : "box-two"}></div>
      <div
        className={visible ? "box-three box-three-transition" : "box-three"}
      ></div>
      <div
        className={
          visible ? "hand-illustration hand-transition" : "hand-illustration"
        }
      >
        <img src={hand} alt="hand-illustration" />
      </div>
      <div
        className={
          visible ? "photo-card-text photo-card-transition" : "photo-card-text"
        }
      >
        <h1>Meet Kyle.</h1>
      </div>
    </div>
  );
}

export default PhotoCard;
