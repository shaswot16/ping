import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Body from './Components/Body'
import Footer from './Components/Footer';
import Card from './Components/Card';
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<> <Body /><Card /><Footer /></>}></Route>
          <Route path="contact" element={<Contact />} ></Route>
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
