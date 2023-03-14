import { Link } from 'react-router-dom';
import ContentContainer from '../ContentContainer/ContentContainer';
import './Header.scss';

//Header component
export default function Header() {
  return (
    <ContentContainer background="header">
      <header className="header">
        <Link className="header__link" to="/">
          <h1 className="header__title">Weather App</h1>
        </Link>
      </header>
    </ContentContainer>
  );
}
