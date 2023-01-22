import React from "react";
import sun from "./sun.jpg";
import moon from "./moon.jpg";
import axios from "axios";

export default function HiLo() {
  let apiKey = `0f801bba3d6t60a3b33a098o4965a127`;
  let city = `Savannah`;
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  return (
    <div>
      <div className="row">
        <div className="column">
          <div className="card four">
            <div className="HighTemp">Highs</div>
            <img
              src={sun}
              width="100"
              height="100"
              alt=""
              className="high-icon"
            />
          </div>
        </div>
        <div className="column">
          <div className="card five">
            <div className="LowTemp">Low</div>
            <img
              src={moon}
              width="100"
              height="100"
              alt=""
              className="high-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
