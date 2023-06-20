
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import MainImageSection from './Components/mainImageSection/MainImageSection';
import InputBtn from './Components/inputbtn/InputBtn';
import BrandStatistic from './Components/BrandStatistic/BrandStatistic';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainImageSection/>
      <InputBtn/>
      <BrandStatistic/>
      <Footer/>
    </div>
  );
}

export default App;
