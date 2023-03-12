import ContentContainer from '../../components/ContentContainer/ContentContainer';
import SearchCard from '../../components/SearchCard/SearchCard';
import './Home.scss';

//Home page
export default function Home() {
  return (
    <ContentContainer background="main">
      <section className="home">
        <p className="home__txt">Welcome to our weather app</p>
        <SearchCard />
      </section>
    </ContentContainer>
  );
}
