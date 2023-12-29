import "./App.css";
import React, { useState } from "react";

const defaultFormFields = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const locations = {
  region: "",
  city: "",
  state: "",
  zipcode: [""],
};

function App() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, subject, message } = formFields;
  const [buttonText, setButtonText] = useState("Submit");
  const [zipCodeSearch, setZipCodeSearch] = useState(""); //rename this to [locationSearch, setLocationSearch] ?

  const resetFormFields = () => {
    //TODO
    setFormFields(defaultFormFields);
  };

  const handleButtonClick = () => {
    // Change the button text when clicked
    // would be cool if this changed from a button to a checkmark once clicked instead of just saying "Thanks!"
    setButtonText("Thanks!");
  };

  //once user inputs zipcode into search, page should redirect to information on specific zipcode/region
  //should user be able to search by city and state as well as zipcode?
  //will the information available be specific enough to zipcode or only cover the region that zipcode is in?

  const handleZipCodeSearch = (e) => {
    //TODO
    e.preventDefault();
  };

  //Form code: do you want users to have the capability to give feedback as a guest or do they need and account?

  const handleFormSubmit = (event) => {
    //TODO
    event.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="App">
      {/* replica of navigation for adding the zipcode/location search.
      the onClick should lead user to a new page with that specific locations information  */}

      <div className="nav-container">
        <div className="nav-menu">
          <img
            className="logo"
            src="/assets/61520fa346e5a67b68fd5039_justair-logo-full-color-rgb.svg"
            alt="logo"
          />
          <div className="search-bar">
            <>
              <input
                type="text"
                name="zip-code"
                className="zip"
                placeholder="search by zipcode"
                value={zipCodeSearch}
              />
              <button className="searchbtn" onClick={handleZipCodeSearch}>
                Search
              </button>
            </>

            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>

      {/* form component starts here */}
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
}

export default App;
