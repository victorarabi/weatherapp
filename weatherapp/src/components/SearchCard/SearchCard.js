import { useState, useEffect } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import './SearchCard.scss';

//Environment variables
const CLIENT_URL = process.env.REACT_APP_CLIENT_URL;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

//search card component
export default function SearchCard() {
  //state definition
  const [queryResult, setQueryResult] = useState(null);
  const [geocode, setGeocode] = useState(null);
  useEffect(() => {
    //checks if user select any valid option from the input text
    if (queryResult) {
      //utility function that provides details on the city selected on the input text.
      geocodeByPlaceId(queryResult.value.place_id)
        .then((results) => {
          //if valid locaiton is selected, geocode state updates with lat, lng object
          setGeocode({
            location: results[0].formatted_address,
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        })
        .catch((error) => console.error(error));
    }
  }, [queryResult]);
  function handleSubmit(e) {
    if (!queryResult) {
      alert('please select a valid location');
      return;
    }

    window.location.href =
      CLIENT_URL +
      `/weatherdata/${geocode.lat}/${geocode.lng}/${geocode.location}`;
  }
  return (
    <article className="search-card">
      <div className="search-card__form">
        <label className="search-card__label" htmlFor="location">
          Search location:
        </label>
        <GooglePlacesAutocomplete
          apiKey={GOOGLE_API_KEY}
          selectProps={{
            value: queryResult,
            onChange: setQueryResult,
          }}
        />
        <button className="search-card__btn" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </article>
  );
}
