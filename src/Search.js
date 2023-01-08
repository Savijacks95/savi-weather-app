import React from "react";

export default function Search() {
  return (
    <form id="search-form">
      <div className="container">
        <div className="col-3 city">
          <input
            type="text"
            className="form-control bg-transparent"
            id="city"
            placeholder="Search City"
            autoFocus="on"
          />
          <button className="col-4 bg-transparent btn">GO</button>
        </div>
      </div>
    </form>
  );
}
