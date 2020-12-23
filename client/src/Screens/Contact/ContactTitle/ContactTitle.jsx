import React from "react";
import "../ContactTitle/ContactTitle.css";

function ContactTitle(props) {
  const { visible } = props;
  return (
    <div className="screen">
      <div className={visible ? "title transition" : "title"}>
        <h1>Contact Title</h1>
      </div>
    </div>
  );
}

export default ContactTitle;
