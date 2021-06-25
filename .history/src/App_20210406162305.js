import logo from './logo.svg';
// import {library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'

import Navbar from './components/Navbar'
import Preheader from './components/preheader'
import BannerCarousel from './components/carousel/BannerCarousel'
import './App.css';

function App() {
  return (
    <div className="App">
      <Preheader></Preheader>
      <Navbar></Navbar>
      <BannerCarousel></BannerCarousel>
      <header className="navbar">
      </header>
    </div>
  );
}

export default App;
