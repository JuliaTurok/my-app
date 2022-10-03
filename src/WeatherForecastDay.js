import React from "react";
import Icon from "./Icon";

export default function WeatherForecastDay (props){
    function day(){
        let date = new Date (props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu","Fri","Sat"]
        return days[day];
    }
    return (
      <div>
        <div>{day()}</div>
        <div class="icon">
          {" "}
          <Icon
            code={props.data.weather[0].icon}
            alt={props.data.description}
            size={28}
            color="#1919FF"
          />
        </div>
        <div class="info">
          <span class="max-temp">{Math.round(props.data.temp.max)}°C</span>
          <span class="min-temp">{Math.round(props.data.temp.min)}°C</span>
        </div>
      </div>
    );
}