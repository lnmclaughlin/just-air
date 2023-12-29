import React, { useState } from "react";

export const locations = {
  region: "",
  city: "",
  state: "",
  zipcode: [""],
};

//once user inputs zipcode into search, page should redirect to information on specific zipcode/region
//should user be able to search by city and state as well as zipcode?
//will the information available be specific enough to zipcode or only cover the region that zipcode is in?

export const SearchBar = () => {
  const [zipCodeSearch, setZipCodeSearch] = useState(""); //rename this to [locationSearch, setLocationSearch] ?

  const handleZipCodeSearch = (e) => {
    //TODO
    e.preventDefault();
  };

  return (
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
  );
};

export default SearchBar;
