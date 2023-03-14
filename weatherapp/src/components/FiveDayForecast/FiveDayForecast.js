import { useEffect } from 'react';
import axios from 'axios';
import ForecastCard from '../ForecastCard/ForecastCard';
import './FiveDayForecast.scss';

//Weather api key
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

//Forecast Weather component
export default function FiveDayForecast({
  lat,
  lng,
  isLoading,
  currentWeather,
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
      })
      .catch((err) => console.log(err));
  }, [setForecastWeather, url, currentWeather]);
  //waits for all the data to be fetched
  if (isLoading) {
    return null;
  }
  return <ForecastCard forecastWeather={forecastWeather} />;
}
