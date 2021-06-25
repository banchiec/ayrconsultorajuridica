import logo from './logo.svg';
import Navbar from './components/Navbar'
import Preheader from './components/preheader'
import BannerCarousel from './components/carousel/BannerCarousel'
import BtnHamburguer from './components/btnhamburguer/BtnHamburguer'
import {Carousel } from 'react-bootstrap'
import foto from './images/banner.png'
import Footer from './components/footer/Footer'
import Bienvenidos from './components/Bienvenidos/Bienvenidos'
import Servicios from './components/MenuServicios/MenuServicios'
// import BannerCarousel from './components/btnhamburguer/BtnHamburguer'
import './App.css';


function App() {
  return (
    <div className="App">
      <Preheader></Preheader>
      <Navbar></Navbar>
      <BtnHamburguer></BtnHamburguer>
      <BannerCarousel></BannerCarousel>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=""
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      {/* <Bienvenidos></Bienvenidos>
      <Servicios></Servicios>
      <Footer></Footer>
 */}
      <header className="navbar">
      </header>
    </div>
  );
}

export default App;
