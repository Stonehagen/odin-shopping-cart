import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Header from './components/Header';

function Routeswitch() {
  return (
    <BrowserRouter
    basename='/odin-shopping-cart'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routeswitch;
