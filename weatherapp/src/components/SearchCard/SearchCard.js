import { useState } from 'react';
import axios from 'axios';
import cities from 'cities.json';
import './SearchCard.scss';

//API key
const API_KEY = process.env.REACT_APP_API_KEY;
//Array that contains the name of all cities
let listOfCities = [];
cities.forEach((city) => {
  const cityString = `${city.name}, ${city.country}`;
  listOfCities.push(cityString);
});
console.log(listOfCities);

//search card component
export default function SearchCard() {
  //state definition
  const [queryString, setQueryString] = useState('');
  //handle change to the input form
  function handleSearchForm(e) {
    setQueryString(e.target.value);
  }
  return (
    <article className="search-card">
      <div className="search-card__form">
        <label className="search-card__label" htmlFor="location">
          Search location
        </label>
        <input
          className="search-card__input"
          id="location"
          name="location"
          list="citiesList"
          placeholder="Search..."
          required
          onChange={handleSearchForm}
        />
        <datalist id="citiesList">
          {cities.map((city, index) => {
            return <option key={index} value={city} />;
          })}
        </datalist>
      </div>
    </article>
  );
}
