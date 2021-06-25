import logo from './logo.svg';
import Navbar from './components/Navbar'
import Preheader from './components/preheader'
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
