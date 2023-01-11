import React from "react";

export default function Search() {
  return (
    <div className="row">
      <div className="column city">
        <div>
          <p className="date">Sunday, 12</p>
        </div>
        <form id="search-form">
          <input
            type="text"
            className="form-control bg-transparent"
            id="city"
            placeholder="Enter City"
            autoFocus="on"
          />
        </form>
        <button className="bg-transparent btn">GO</button>
      </div>
    </div>
  );
}
