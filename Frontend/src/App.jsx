import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './utils/Navbar/Navbar';
import Homepage from './components/pages/Homepage/Homepage';
import Aboutpage from './components/pages/Aboutpage/Aboutpage';
import Contactpage from './components/pages/Contactpage/Contactpage';
import Productpage from './components/pages/Productpage/Productpage';
import Footer from './utils/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/contact" element={<Contactpage/>} />
        <Route path="/products" element={<Productpage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
