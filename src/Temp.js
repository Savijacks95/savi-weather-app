import React from "react";
import Forecast from "./Forecast";
import sun from "./sun.jpg";

export default function Temp() {
  return (
    <div className="row">
      <div className="column">
        <div className="card two">
          <div>
            <img src={sun} width="100" height="50" alt="" />
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
