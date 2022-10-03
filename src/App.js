import Forecast from "./Forecast";
import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import "./App.css";


export default function App(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=914cbf8aca52842e5866dd42da649610&units=metric`;
    axios.get(url).then(showTemperature);
  }
  if (weather.ready) {
    return (
      <div>
        <div className="container">
          <form id="search-form">
            <input
              type="search"
              placeholder="Enter a city"
              onChange={handleCityChange}
              id="text-input"
            />
            <button onClick={handleSubmit}>🔍</button>
          </form>
          <Forecast data={weather} />
          <WeatherForecast coordinates={weather.coordinates} />
        </div>
        <div className="link">
          <a href="https://github.com/JuliaTurok/my-app.git">
            Open-source code
          </a>
          , by Julia Turok
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
