import React, { useState } from "react";
import "./App.css";
export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
 

  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
   
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="temp">
        <span id="temperature">{Math.round(props.celsius)} </span>
        <span className="units">
          °C{" "}
          <a 
            href="/"
            onClick={showFahrenheit}
          >
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className = "temp">
        <span id="temperature">{Math.round(fahrenheit())} </span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          °F
        </span>
      </div>
    );
  }
}
