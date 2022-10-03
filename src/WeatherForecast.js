import axios from "axios";
import React, { useState, useEffect } from "react" ;
import WeatherForecastDay from"./WeatherForecastDay";

export default function WeatherForecast(props){
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null)
  
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response){
    setForecast(response.data.daily)
    setLoaded(true)
  }
  if(loaded){
return(<div className = "days-flex">
  {forecast.map(function(dailyForecast, index){
    if (index < 5){
      return (
        <div className="days" key={index}>
          <WeatherForecastDay data={dailyForecast} />
        </div>
      );
    } else{
      return null;
    }
  })}
</div>)
  }
  else{
    let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=914cbf8aca52842e5866dd42da649610&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return null;

  }
}