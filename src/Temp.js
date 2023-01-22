import React from "react";
import Forecast from "./Forecast";
import sun from "./sun.jpg";
import axios from "axios";

export default function Temp() {
  let apiKey = `0f801bba3d6t60a3b33a098o4965a127`;
  let city = `Savannah`;
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  return (
    <div className="row">
      <div className="column">
        <div className="card two">
          <div>
            <img
              src={sun}
              width="100"
              height="100"
              alt=""
              className="weather-icon"
            />
            <p className="temp">81</p>
            <button className="fahrenheit">F°</button>
            <button className="celsius">C°</button>
            <div>
              <p className="weather-condition">Partly Cloudy</p>
            </div>
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
}
