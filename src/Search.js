import React from "react";

export default function Search() {
  return (
    <div className="column city">
      <form id="search-form">
        <input
          type="text"
          className="form-control bg-transparent"
          id="city"
          placeholder="Search City"
          autoFocus="on"
        />
        <button className="bg-transparent btn">GO</button>
      </form>
      <div>
        <p className="date">Sunday, 12</p>
      </div>
    </div>
  );
}
