import React, { useState } from "react";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

export const Form = () => {
  const { firstName, lastName, email, subject, message } = formFields;
  const [buttonText, setButtonText] = useState("Submit");
  const [formFields, setFormFields] = useState(defaultFormFields);

  const resetFormFields = () => {
    //TODO
    setFormFields(defaultFormFields);
  };

  const handleButtonClick = () => {
    // Change the button text when clicked
    // would be cool if this changed from a button to a checkmark once clicked instead of just saying "Thanks!"
    setButtonText("Thanks!");
  };

  const handleFormSubmit = (event) => {
    //TODO
    event.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div>
      <h2>Contact Us</h2>
      <div className="form-container">
        <form onSubmit={handleFormSubmit}>
          <h3>First Name</h3>
          <label className="name">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              required
              onChange={handleInputChange}
              value={firstName}
            />
          </label>
          <h3>Last Name</h3>
          <label className="name">
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              required
              onChange={handleInputChange}
              value={lastName}
            />
          </label>
          <h3>Email</h3>
          <label className="email">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleInputChange}
              value={email}
            />
          </label>
          <h3>Subject</h3>
          <label className="subject">
            <input
              type="subject"
              name="subject"
              placeholder="Subject"
              required
              onChange={handleInputChange}
              value={subject}
            />
          </label>
          <h3>Message</h3>
          <div className="message-container">
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              required
              onChange={handleInputChange}
              value={message}
            />
          </div>
          <button type="submit" className="formbtn" onClick={handleButtonClick}>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
