import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../ContactForm/ContactForm.css";
function ContactForm(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      from_name: formData.email,
      to_name: formData.name,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_uwwhv4a",
        "template_jtqehcq",
        templateParams,
        "user_vl0Aylj3LGoA5wdsRilR1"
      )
      .then((res) => {
        alert("Message successfully sent!");
        console.log("Success!", res.status, res.text);
      })
      .catch((err) => {
        console.error("Failed...", err);
      });

    resetForm();
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-content">
        <h1>Say Hello</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              name="name"
              placeholder="Your Name..."
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              name="email"
              placeholder="Email Address..."
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <input
              name="subject"
              placeholder="Subject..."
              value={formData.subject}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            <textarea
              name="message"
              placeholder="Message..."
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
