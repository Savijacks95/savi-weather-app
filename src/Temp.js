import React from "react";

export default function Temp() {
  return (
    <div>
      <p className="temp">81</p>
      <button className="fahrenheit">F°</button>
      <button className="celsius">C°</button>
      <div>
        <p className="weather-condition">Partly Cloudy</p>
      </div>
    </div>
  );
}
