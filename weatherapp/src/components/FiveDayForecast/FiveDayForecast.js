import { useEffect } from 'react';
import axios from 'axios';
import './FiveDayForecast.scss';

//Weather api key
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

//Forecast Weather component
export default function FiveDayForecast({
  lat,
  lng,
  isLoading,
  forecastWeather,
  setForecastWeather,
}) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  useEffect(() => {
    //only makes the api call if the current weather info has already been fetched.
    if (!currentWeather) {
      return;
    }
    axios
      .get(url)
      .then((response) => {
        setForecastWeather(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, [setForecastWeather, url, currentWeather]);
  //waits for all the data to be fetched
  if (isLoading) {
    return null;
  }
  return (
    <article className="forecast">
      <h1 className="forecast__title">Five day forecast</h1>
      <h4>temperature</h4>
      <p>{forecastWeather?.list[0].main.temp} C</p>
      <h4>Feels like</h4>
      <p>{forecastWeather?.list[0].main.feels_like} C</p>
    </article>
  );
}
