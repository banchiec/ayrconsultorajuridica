import logo from './logo.svg';
import Navbar from './components/Navbar'
import Preheader from './components/preheader'
import BtnHamburguer from './btnhamburguer/BtnHamburguer'
import BannerCarousel from './components/carousel/BannerCarousel'
import './App.css';


function App() {
  return (
    <div className="App">
      <Preheader></Preheader>
      <Navbar></Navbar>
      <BtnHamburguer></BtnHamburguer>
        {/* <BannerCarousel></BannerCarousel> */}
      <header className="navbar">
      </header>
    </div>
  );
}

export default App;
