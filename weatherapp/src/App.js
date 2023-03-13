import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import WeatherData from './pages/WeatherData/WeatherData';
import './App.scss';

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/weatherdata/:lat/:lng">
            <WeatherData />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
