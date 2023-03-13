import { useRef, useEffect } from 'react';
import './SearchCard.scss';

//Google API key
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

//search card component
export default function SearchCard() {
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
        <button className="searchCard__submit-btn" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </article>
  );
}
