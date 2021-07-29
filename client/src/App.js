import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route } from 'react-router-dom';

// Component Imports
import NavbarComponent from './components/navbar'
import HomePageComponent from './components/homePage';
import QuoteFormComponent from './components/quoteForm';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Route exact path="/" component={HomePageComponent} />
        <Route exact path="/quote" component={QuoteFormComponent} />
      </div>
    </Router>
  );
}

export default App;
