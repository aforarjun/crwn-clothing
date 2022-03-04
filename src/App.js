import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header';
import HomePage from './Pages/homepage/homepage';
import ShopPage from './Pages/shop-page/shop-page';
import AboutUsPage from './Pages/about-us-page/AboutUsPage';

import Errorpage from './Pages/error-page/Errorpage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />

        <Route path='*' element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;