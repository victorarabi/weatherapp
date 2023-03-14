import { useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../WeatherCard/WeatherCard';
import './CurrentWeather.scss';

//Weather api key
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

//currentWeather component
export default function CurrentWeather({
  lat,
  lng,
  isLoading,
  currentWeather,
  setCurrentWeather,
}) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCurrentWeather(response.data);
      })
      .catch((err) => console.log(err));
  }, [setCurrentWeather, url]);
  //checks if data has been fetched, if state is empty renders nothing
  if (isLoading) {
    return null;
  }
  return <WeatherCard currentWeather={currentWeather} />;
}
