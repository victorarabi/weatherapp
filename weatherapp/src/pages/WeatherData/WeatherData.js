import { useParams } from 'react-router-dom';
import './WeatherData.scss';

//Weather Data component
export default function WeatherData() {
  const { lat, lng } = useParams();
  return (
    <div>
      <h4>latitude</h4>
      <p>{lat || 'n/a'}</p>
      <h4>longitude</h4>
      <p>{lng || 'n/a'}</p>
    </div>
  );
}
