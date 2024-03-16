import logo from './logo.svg';
import './App.css';
import Navi from './components/Navi';
import Top from './components/Top';
import About from './components/About';
import Packages from './components/Packages';
import Details from './components/Details';
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Top/>
      <About/><hr />
      <Packages />
      <Details/>
      <Reviews/>
    </div>
  );
}

export default App;
