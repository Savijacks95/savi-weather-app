import React from "react";
import ReactDOM from "react-dom/client";

import Search from "./Search";
import City from "./City";
import Temp from "./Temp";

import Description from "./Description";

import "./App.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Search />
    <City />
    <Temp />
    <Description />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
