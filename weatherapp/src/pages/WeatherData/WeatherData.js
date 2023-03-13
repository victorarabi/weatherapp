import { useParams } from 'react-router-dom';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import './WeatherData.scss';

//Weather Data component
export default function WeatherData() {
  const { location, lat, lng } = useParams();
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
