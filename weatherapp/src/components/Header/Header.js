import ContentContainer from '../ContentContainer/ContentContainer';
import './Header.scss';

//Header component
export default function Header() {
  return (
    <ContentContainer background="hf">
      <header className="header">
        <h1 className="header__title">Weather App</h1>
      </header>
    </ContentContainer>
  );
}
