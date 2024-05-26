import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Header from "./Components/Header/Header"
import Slider from './Components/Slider/Slider';
import ItemCategory from './Components/Category/ItemCategory';
import OfferSection from './Components/OfferZone/OfferSection';
import Product from './Components/Products/Product';
import BestSeller from './Components/BestSeller/BestSeller';

function App() {
  return(
    <>
      <Header />
      <Slider />
      <ItemCategory />
      <OfferSection />
      <Product />
      <BestSeller />
    </>
  ) 
  }

export default App;
