import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import './WeatherData.scss';

//Weather Data component
export default function WeatherData() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const { location, lat, lng } = useParams();
  //verifies if route parameters aren't empty and return NotFound if empty
  if (!location || !lat || !lng) {
    return (
      <ContentContainer background="main">
        <section className="weather-data">
          <NotFound />;
        </section>
      </ContentContainer>
    );
    //If either current weather or forecast weather data are empty, renders "Loading"
    // } else if (isLoading) {
    //   return (
    //     <ContentContainer background="main">
    //       <section className="weather-data">
    //         <h1 className="weather-data__loading">Loading data</h1>
    //       </section>
    //     </ContentContainer>
    //   );
  }
  return (
    <ContentContainer background="main">
      <section className="weather-data">
        <h4>location</h4>
        <p>{location || 'n/a'}</p>
        <CurrentWeather
          lat={lat}
          lng={lng}
          currentWeather={currentWeather}
          setCurrentWeather={setCurrentWeather}
        />
      </section>
    </ContentContainer>
  );
}
