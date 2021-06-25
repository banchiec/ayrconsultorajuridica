import logo from './logo.svg';
import Navbar from './components/Navbar'
import Preheader from './components/preheader'
import BannerCarousel from './components/carousel/BannerCarousel'
import BtnHamburguer from './components/btnhamburguer/BtnHamburguer'
import Footer from './components/footer/Footer'
import Bienvenidos from './components/Bienvenidos/Bienvenidos'
// import BannerCarousel from './components/btnhamburguer/BtnHamburguer'
import './App.css';


function App() {
  return (
    <div className="App">
      <Preheader></Preheader>
      <Navbar></Navbar>
      <BtnHamburguer></BtnHamburguer>
      <BannerCarousel></BannerCarousel>
      <Footer></Footer>
      <Bienvenidos></Bienvenidos>

      <header className="navbar">
      </header>
    </div>
  );
}

export default App;
