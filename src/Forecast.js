import React from "react";
import GetDay from "./GetDay";
import "./App.css";
import Temperature from "./Temperature";
import Icon from "./Icon";

export default function Weather(props) {
  return (
    <div>
      <div className="city-box">
        <GetDay />
        <div className="city-container">
          <div id="city">{props.data.city}</div>
          <Temperature celsius={props.data.temperature} />
        </div>
      </div>
      <section>
        <div className="text">
          <div>
            Humidity:<span id="humidity">{props.data.humidity}</span>%
          </div>
          <div>
            Wind Speed: <span id="wind">{props.data.wind}</span> km/h
          </div>
        </div>
        <div className="weather">
          <div className="icon">
            <Icon
              code={props.data.icon}
              alt={props.data.description}
              size={182}
              color="#1919FF"
            />
          </div>
        </div>
        <div id="description">{props.data.description}</div>
      </section>
    </div>
  );
}
