import React from "react";
import axios from "axios";

export default function Search() {
  let apiKey = `0f801bba3d6t60a3b33a098o4965a127`;
  let city = `Savannah`;
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  return (
    <div className="row">
      <div className="column city">
        <div className="card">
          <form id="search-form">
            <div className="city-name">City</div>;
            <div>
              <p className="date">Sunday, 12</p>
            </div>
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
    </div>
  );
}
