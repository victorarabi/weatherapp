import { DateTime } from 'luxon';
import './WeatherCard.scss';

//temp
import currentWeather from '../../assets/data/weather.json';

//Weather card component
export default function WeatherCard() {
  const { weather, main, dt, sys } = currentWeather[0];
  //returns the appropriated weather icon
  function returnWeatherIcon() {
    switch (weather[0].description) {
      case 'thunderstorm with light rain':
        return <i className="wi wi-thunderstorm weather-card__icon" />;
      case 'thunderstorm with rain':
        return <i className="wi wi-thunderstorm weather-card__icon" />;
      case 'thunderstorm with heavy rain':
        return <i className="wi wi-thunderstorm weather-card__icon" />;
      case 'light thunderstorm':
        return <i className="wi wi-thunderstorm weather-card__icon" />;
      case 'thunderstorm':
        return <i className="wi wi-thunderstorm weather-card__icon" />;
      case 'heavy thunderstorm':
        return <i className="wi wi-thunderstorm weather-card__icon" />;
      case 'ragged thunderstorm':
        return <i className="wi wi-thunderstorm weather-card__icon" />;
      case 'thunderstorm with light drizzle':
        return <i className="wi wi-thunderstorm weather-card__icon" />;
      case 'thunderstorm with drizzle':
        return <i className="wi wi-thunderstorm weather-card__icon" />;
      case 'thunderstorm with heavy drizzle':
        return <i className="wi wi-thunderstorm weather-card__icon" />;
      case 'light intensity drizzle':
        return <i className="wi wi-sleet weather-card__icon" />;
      case 'drizzle':
        return <i className="wi wi-sleet weather-card__icon" />;
      case 'heavy intensity drizzle':
        return <i className="wi wi-sleet weather-card__icon" />;
      case 'light intensity drizzle rain':
        return <i className="wi wi-sleet weather-card__icon" />;
      case 'drizzle rain':
        return <i className="wi wi-sleet weather-card__icon" />;
      case 'heavy intensity drizzle rain':
        return <i className="wi wi-sleet weather-card__icon" />;
      case 'shower rain and drizzle':
        return <i className="wi wi-sleet weather-card__icon" />;
      case 'heavy shower rain and drizzle':
        return <i className="wi wi-sleet weather-card__icon" />;
      case 'shower drizzle':
        return <i className="wi wi-sleet weather-card__icon" />;
      case 'light rain':
        return <i className="wi wi-rain weather-card__icon" />;
      case 'moderate rain':
        return <i className="wi wi-rain weather-card__icon" />;
      case 'heavy intensity rain':
        return <i className="wi wi-rain weather-card__icon" />;
      case 'very heavy rain':
        return <i className="wi wi-rain weather-card__icon" />;
      case 'extreme rain':
        return <i className="wi wi-rain weather-card__icon" />;
      case 'light intensity shower rain':
        return <i className="wi wi-rain weather-card__icon" />;
      case 'shower rain':
        return <i className="wi wi-rain weather-card__icon" />;
      case '	heavy intensity shower rain':
        return <i className="wi wi-rain weather-card__icon" />;
      case 'ragged shower rain':
        return <i className="wi wi-rain weather-card__icon" />;
      case 'freezing rain':
        return <i className="wi wi-snowflake-cold weather-card__icon" />;
      case 'light snow':
        return <i className="wi wi-snow-cold weather-card__icon" />;
      case 'snow':
        return <i className="wi wi-snow-cold weather-card__icon" />;
      case 'heavy snow':
        return <i className="wi wi-snow-cold weather-card__icon" />;
      case 'sleet':
        return <i className="wi wi-snow-cold weather-card__icon" />;
      case 'light shower sleet':
        return <i className="wi wi-snow-cold weather-card__icon" />;
      case 'shower sleet':
        return <i className="wi wi-snow-cold weather-card__icon" />;
      case 'light rain and snow':
        return <i className="wi wi-snow-cold weather-card__icon" />;
      case 'rain and snow':
        return <i className="wi wi-snow-cold weather-card__icon" />;
      case 'light shower snow':
        return <i className="wi wi-snow-cold weather-card__icon" />;
      case 'shower snow':
        return <i className="wi wi-snow-cold weather-card__icon" />;
      case 'heavy shower snow':
        return <i className="wi wi-snow-cold weather-card__icon" />;
      case 'mist':
        return <i className="wi wi-fog weather-card__icon" />;
      case 'smoke':
        return <i className="wi wi-fog weather-card__icon" />;
      case 'haze':
        return <i className="wi wi-fog weather-card__icon" />;
      case 'sand/dust whirls':
        return <i className="wi wi-fog weather-card__icon" />;
      case 'fog':
        return <i className="wi wi-fog weather-card__icon" />;
      case 'sand':
        return <i className="wi wi-fog weather-card__icon" />;
      case 'dust':
        return <i className="wi wi-fog weather-card__icon" />;
      case 'volcanic ash':
        return <i className="wi wi-fog weather-card__icon" />;
      case 'squalls':
        return <i className="wi wi-fog weather-card__icon" />;
      case 'tornado':
        return <i className="wi wi-fog weather-card__icon" />;
      case 'clear sky':
        return <i className="wi wi-day-sunny weather-card__icon" />;
      case 'few clouds':
        return <i className="wi wi-cloudy weather-card__icon" />;
      case 'scattered clouds':
        return <i className="wi wi-cloudy weather-card__icon" />;
      case 'broken clouds':
        return <i className="wi wi-cloudy weather-card__icon" />;
      case 'overcast clouds':
        return <i className="wi wi-cloudy weather-card__icon" />;
      default:
        return null;
    }
  }
  let { temp, feels_like, temp_min, temp_max, pressure, humidity } = main;
  //format unix time as needed
  const updateTime = DateTime.fromSeconds(dt).toLocaleString(
    DateTime.DATETIME_MED
  );
  let sunriseTime = DateTime.fromSeconds(sys.sunrise)
    .toLocaleString(DateTime.DATETIME_MED)
    .slice(14);
  const sunsetTime = DateTime.fromSeconds(sys.sunset)
    .toLocaleString(DateTime.DATETIME_MED)
    .slice(14);
  return (
    <div className="weather-card">
      <h2 className="weather-card__title">Current Conditions</h2>
      <span className="weather-card__title-time">As of {updateTime}</span>
      <div className="weather-card__container">
        <div className="weather-card__main">
          <h3 className="weather-card__current-temp">{Math.round(temp)}°C</h3>
          <h4 className="weather-card__sub-title">
            Feels like {Math.round(feels_like)}°C
          </h4>
          {returnWeatherIcon()}
        </div>
        <div className="weather-card__details">
          <div className="weather-card__column">
            <div className="weather-card__data-container">
              <p className="weather-card__label">High</p>
              <p className="weather-card__data">{Math.round(temp_max)}°C</p>
            </div>
            <div className="weather-card__data-container">
              <p className="weather-card__label">Humidity</p>
              <p className="weather-card__data">{humidity}%</p>
            </div>
            <div className="weather-card__data-container">
              <p className="weather-card__label">Sunrise</p>
              <p className="weather-card__data">{sunriseTime}</p>
            </div>
          </div>
          <div className="weather-card__column">
            <div className="weather-card__data-container">
              <p className="weather-card__label">Low</p>
              <p className="weather-card__data">{Math.round(temp_min)}°C</p>
            </div>
            <div className="weather-card__data-container">
              <p className="weather-card__label">Pressure</p>
              <p className="weather-card__data">{pressure / 10} kPa</p>
            </div>
            <div className="weather-card__data-container">
              <p className="weather-card__label">Sunset</p>
              <p className="weather-card__data">{sunsetTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
