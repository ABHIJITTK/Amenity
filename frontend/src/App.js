import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './PAGES/HomePage/Home'
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductPage from './PAGES/Product/ProductPage'
import Signup from './PAGES/Auth/Signup';
import Login from './PAGES/Auth/Login_';
import ForgotPassword from './PAGES/Auth/ForgotPassword';
import Cart from './PAGES/Cart/Cart';
import Vegetarian from './PAGES/Vegetarian/Vegetarian';
import About from './PAGES/About/About';
import Juice from './PAGES/Juice/Juice';
import Navbar from './COMPONENTS/Navbar/Navbar';
import Snacks from './PAGES/Snacks/Snacks';


function App() {
  return (
    
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/product/:prodid' element={<ProductPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forgotpassword' element={<ForgotPassword />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/vegetarian' element={<Vegetarian />} />
      <Route path='/non-vegetarian' element={<Vegetarian />} />
      <Route path='/about' element={<About />} />
      <Route path='/juice' element={<Juice />} />
      <Route path='/snack' element={<Snacks />} />
      <Route path='/contact' element={<Cart/>} />
      <Route path='*' element={<div><h1>404 ERROR</h1></div>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
