import { useRef, useEffect } from 'react';
import useScript from '../../hooks/useScript';
import './SearchCard.scss';

//API key
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const url = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&callback=initMap`;

//search card component
export default function SearchCard() {
  //useScript to Load google places api
  useScript(url);
  //ref declaration
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  //options for the google places api
  const options = {
    fields: ['location', 'address_components'],
    types: ['regions'],
  };
  useEffect(() => {
    //creates a new instance of the places api autocomplete and saves it on the autoComplete ref
    autoCompleteRef.current = new window.google.maps.places.AutoComplete(
      inputRef.current,
      options
    );
    //monitors when user select one of the items from the drop down list of suggestions
    autoCompleteRef.current.addListener('place_changed', async function () {
      const place = await autoCompleteRef.current.getPlace();
      console.log({ place });
    });
  }, []);
  return (
    <article className="search-card">
      <div className="search-card__form">
        <label className="search-card__label" htmlFor="location">
          Search location
        </label>
        <input className="search-card__input" id="location" ref={inputRef} />
      </div>
    </article>
  );
}
