import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import './WeatherData.scss';

//Weather Data component
export default function WeatherData() {
  const [isLoading, setIsLoading] = useState(false);
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
  } else if (isLoading) {
    return (
      <ContentContainer background="main">
        <section className="weather-data">
          <h1 className="weather-data__loading">Loading data</h1>
        </section>
      </ContentContainer>
    );
  }
  return (
    <ContentContainer background="main">
      <section className="weather-data">
        <h4>location</h4>
        <p>{location || 'n/a'}</p>
        <h4>latitude</h4>
        <p>{lat || 'n/a'}</p>
        <h4>longitude</h4>
        <p>{lng || 'n/a'}</p>
      </section>
    </ContentContainer>
  );
}
