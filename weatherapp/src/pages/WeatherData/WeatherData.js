import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import FiveDayForecast from '../../components/FiveDayForecast/FiveDayForecast';
import './WeatherData.scss';

//Weather Data component
export default function WeatherData() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const { location, lat, lng } = useParams();
  useEffect(() => {
    //controls isLoading state based on weather the data has been fetched by the api
    if (!currentWeather || !forecastWeather) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  });
  //verifies if route parameters are not empty and return NotFound if empty
  if (!location || !lat || !lng) {
    return (
      <ContentContainer background="main">
        <section className="weather-data">
          <NotFound />;
        </section>
      </ContentContainer>
    );
    //renders "Loading data while fetching data from the weather api"
  } else if (isLoading) {
    return (
      <ContentContainer background="main">
        <section className="weather-data">
          <h1 className="weather-data__loading">Loading data</h1>
          <CurrentWeather
            lat={lat}
            lng={lng}
            isLoading={isLoading}
            currentWeather={currentWeather}
            setCurrentWeather={setCurrentWeather}
          />
          <FiveDayForecast
            lat={lat}
            lng={lng}
            isLoading={isLoading}
            forecastWeather={forecastWeather}
            setForecastWeather={setForecastWeather}
          />
        </section>
      </ContentContainer>
    );
  }
  return (
    <ContentContainer background="main">
      <section className="weather-data">
        <h4>location</h4>
        <p>{location || 'n/a'}</p>
        <CurrentWeather
          lat={lat}
          lng={lng}
          isLoading={isLoading}
          currentWeather={currentWeather}
          setCurrentWeather={setCurrentWeather}
        />
        <FiveDayForecast
          lat={lat}
          lng={lng}
          isLoading={isLoading}
          forecastWeather={forecastWeather}
          setForecastWeather={setForecastWeather}
        />
      </section>
    </ContentContainer>
  );
}
