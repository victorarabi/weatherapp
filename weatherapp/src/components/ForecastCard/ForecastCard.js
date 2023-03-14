import { DateTime } from 'luxon';
import './ForecastCard.scss';

//temp
import forecastWeather from '../../assets/data/forecast.json';

export default function ForecastCard() {
  const forecast = forecastWeather[0].list;
  //returns weather icon
  function returnWeatherIcon(description) {
    switch (description) {
      case 'thunderstorm with light rain':
        return <i className="wi wi-thunderstorm forecast-card__icon" />;
      case 'thunderstorm with rain':
        return <i className="wi wi-thunderstorm forecast-card__icon" />;
      case 'thunderstorm with heavy rain':
        return <i className="wi wi-thunderstorm forecast-card__icon" />;
      case 'light thunderstorm':
        return <i className="wi wi-thunderstorm forecast-card__icon" />;
      case 'thunderstorm':
        return <i className="wi wi-thunderstorm forecast-card__icon" />;
      case 'heavy thunderstorm':
        return <i className="wi wi-thunderstorm forecast-card__icon" />;
      case 'ragged thunderstorm':
        return <i className="wi wi-thunderstorm forecast-card__icon" />;
      case 'thunderstorm with light drizzle':
        return <i className="wi wi-thunderstorm forecast-card__icon" />;
      case 'thunderstorm with drizzle':
        return <i className="wi wi-thunderstorm forecast-card__icon" />;
      case 'thunderstorm with heavy drizzle':
        return <i className="wi wi-thunderstorm forecast-card__icon" />;
      case 'light intensity drizzle':
        return <i className="wi wi-sleet forecast-card__icon" />;
      case 'drizzle':
        return <i className="wi wi-sleet forecast-card__icon" />;
      case 'heavy intensity drizzle':
        return <i className="wi wi-sleet forecast-card__icon" />;
      case 'light intensity drizzle rain':
        return <i className="wi wi-sleet forecast-card__icon" />;
      case 'drizzle rain':
        return <i className="wi wi-sleet forecast-card__icon" />;
      case 'heavy intensity drizzle rain':
        return <i className="wi wi-sleet forecast-card__icon" />;
      case 'shower rain and drizzle':
        return <i className="wi wi-sleet forecast-card__icon" />;
      case 'heavy shower rain and drizzle':
        return <i className="wi wi-sleet forecast-card__icon" />;
      case 'shower drizzle':
        return <i className="wi wi-sleet forecast-card__icon" />;
      case 'light rain':
        return <i className="wi wi-rain forecast-card__icon" />;
      case 'moderate rain':
        return <i className="wi wi-rain forecast-card__icon" />;
      case 'heavy intensity rain':
        return <i className="wi wi-rain forecast-card__icon" />;
      case 'very heavy rain':
        return <i className="wi wi-rain forecast-card__icon" />;
      case 'extreme rain':
        return <i className="wi wi-rain forecast-card__icon" />;
      case 'light intensity shower rain':
        return <i className="wi wi-rain forecast-card__icon" />;
      case 'shower rain':
        return <i className="wi wi-rain forecast-card__icon" />;
      case 'heavy intensity shower rain':
        return <i className="wi wi-rain forecast-card__icon" />;
      case 'ragged shower rain':
        return <i className="wi wi-rain forecast-card__icon" />;
      case 'freezing rain':
        return <i className="wi wi-snowflake-cold forecast-card__icon" />;
      case 'light snow':
        return <i className="wi wi-snow forecast-card__icon" />;
      case 'snow':
        return <i className="wi wi-snow forecast-card__icon" />;
      case 'heavy snow':
        return <i className="wi wi-snow forecast-card__icon" />;
      case 'sleet':
        return <i className="wi wi-snow forecast-card__icon" />;
      case 'light shower sleet':
        return <i className="wi wi-snow forecast-card__icon" />;
      case 'shower sleet':
        return <i className="wi wi-snow forecast-card__icon" />;
      case 'light rain and snow':
        return <i className="wi wi-snow forecast-card__icon" />;
      case 'rain and snow':
        return <i className="wi wi-snow forecast-card__icon" />;
      case 'light shower snow':
        return <i className="wi wi-snow forecast-card__icon" />;
      case 'shower snow':
        return <i className="wi wi-snow forecast-card__icon" />;
      case 'heavy shower snow':
        return <i className="wi wi-snow forecast-card__icon" />;
      case 'mist':
        return <i className="wi wi-fog forecast-card__icon" />;
      case 'smoke':
        return <i className="wi wi-fog forecast-card__icon" />;
      case 'haze':
        return <i className="wi wi-fog forecast-card__icon" />;
      case 'sand/dust whirls':
        return <i className="wi wi-fog forecast-card__icon" />;
      case 'fog':
        return <i className="wi wi-fog forecast-card__icon" />;
      case 'sand':
        return <i className="wi wi-fog forecast-card__icon" />;
      case 'dust':
        return <i className="wi wi-fog forecast-card__icon" />;
      case 'volcanic ash':
        return <i className="wi wi-fog forecast-card__icon" />;
      case 'squalls':
        return <i className="wi wi-fog forecast-card__icon" />;
      case 'tornado':
        return <i className="wi wi-fog forecast-card__icon" />;
      case 'clear sky':
        return <i className="wi wi-day-sunny forecast-card__icon" />;
      case 'few clouds':
        return <i className="wi wi-cloudy forecast-card__icon" />;
      case 'scattered clouds':
        return <i className="wi wi-cloudy forecast-card__icon" />;
      case 'broken clouds':
        return <i className="wi wi-cloudy forecast-card__icon" />;
      case 'overcast clouds':
        return <i className="wi wi-cloudy forecast-card__icon" />;
      default:
        return null;
    }
  }
  return (
    <div className="forecast-card">
      <h2 className="forecast-card__title">Next 5 Days</h2>
      <div className="forecast-card__table">
        {forecast.map((day, i) => {
          const { main, weather } = day;
          //converts unix string
          const dt = DateTime.fromSeconds(day.dt);
          //get the weekday from the unix time string
          let weekday;
          switch (dt.weekday) {
            case 1:
              weekday = 'Mon';
              break;
            case 2:
              weekday = 'Tue';
              break;
            case 3:
              weekday = 'Wed';
              break;
            case 4:
              weekday = 'Thurs';
              break;
            case 5:
              weekday = 'Fri';
              break;
            case 6:
              weekday = 'Sun';
              break;
            case 7:
              weekday = 'Mon';
              break;
            default:
              break;
          }
          const date = dt.toLocaleString(DateTime.DATETIME_MED);
          const temp = Math.round(main.temp);
          const feels_like = Math.round(main.feels_like);
          const description = weather[0].description;
          const weatherIcon = returnWeatherIcon(weather[0].description);
          return (
            <div className="forecast-card__row" key={i}>
              <div className="forecast-card__data-container">
                <p className="forecast-card__sub-title">{weekday}</p>
                <p className="forecast-card__label">{date}</p>
              </div>
              <div className="forecast-card__data-container">{weatherIcon}</div>
              <div className="forecast-card__data-container">
                <p className="forecast-card__sub-title">{temp}°C</p>
                <p className="forecast-card__data">Feel Like {feels_like}°C</p>
              </div>
              <div className="forecast-card__data-container">
                <p className="forecast-card__label">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
