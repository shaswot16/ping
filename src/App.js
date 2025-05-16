// import './App.css';
import MainPage from './Components/General/MainPage'
import Footer from './Components/General/Footer';
import NavBar from './Components/General/Navbar';
import ProductList from './Components/Product/ProductList';
import ProductDetail from './Components/Product/ProductDetail';
import Offers from './Components/Product/Offer';
import ProductListWithFilters from './Components/Product/ProductListFilter';

import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={
            <>
              <MainPage />
              <Offers />
              <Footer />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/filter" element={<ProductListWithFilters />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
