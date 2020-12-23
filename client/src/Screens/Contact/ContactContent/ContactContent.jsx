import React from "react";
import "../ContactContent/ContactContent.css";

function ContactContent(props) {
  const { visible } = props;
  return (
    <div className="screen">
      <div className={visible ? "title transition" : "title"}>
        <h1>Contact Content</h1>
      </div>
    </div>
  );
}

export default ContactContent;
