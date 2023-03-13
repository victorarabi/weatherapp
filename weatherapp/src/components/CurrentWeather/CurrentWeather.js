import { useState, useEffect } from 'react';
import axios from 'axios';
import './CurrentWeather.scss';

//Weather api key
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

//currentWeather component
export default function ({ lat, lng, currentWeather, setCurrentWeather }) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCurrentWeather(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!currentWeather) {
    return null;
  }
  return (
    <article className="current-weather">
      <h4>temperature</h4>
      <p>{currentWeather?.main.temp} C</p>
      <h4>Feels like</h4>
      <p>{currentWeather?.main.feels_like} C</p>
    </article>
  );
}
