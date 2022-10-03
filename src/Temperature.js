import React from "react";
import "./App.css";
export default function Temperature(props) {
  
    return (
      <div className="temp">
        <span id="temperature">{Math.round(props.celsius)} </span>
        <span className="units">
          °C{" "}
         
        </span>
      </div>
    );
  } 

