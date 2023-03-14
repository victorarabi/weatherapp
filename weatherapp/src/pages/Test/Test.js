import './Test.scss';
import WeatherCard from '../../components/WeatherCard/WeatherCard';
import ForecastCard from '../../components/ForecastCard/ForecastCard';

export default function Test() {
  return (
    <div className="test">
      <WeatherCard />
      <ForecastCard />
    </div>
  );
}
