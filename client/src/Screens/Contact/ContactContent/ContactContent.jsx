import React from "react";
import "../ContactContent/ContactContent.css";
import ContactForm from "../../../Components/ContactForm/ContactForm";

function ContactContent(props) {
  // const { visible } = props;
  return (
    <div className="screen">
      <ContactForm />
    </div>
  );
}

export default ContactContent;
