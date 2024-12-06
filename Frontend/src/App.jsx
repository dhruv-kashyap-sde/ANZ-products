import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './utils/Navbar/Navbar';
import Homepage from './components/pages/Homepage/Homepage';
import Aboutpage from './components/pages/Aboutpage/Aboutpage';
import Contactpage from './components/pages/Contactpage/Contactpage';
import Productpage from './components/pages/Productpage/Productpage';
import Footer from './utils/Footer/Footer';
import Loginpage from './components/pages/Loginpage/Loginpage';
import PrivateRoute from './utils/Private/PrivateRoute';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/contact" element={<Contactpage/>} />
        <Route path="/products" element={<Productpage/>} />
        <Route path="/login" element={<Loginpage/>} />
        <Route path="/dashboard" element={<PrivateRoute role="admin"/>}>
          <Route path="" element={<AdminDashboard/>}/>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
