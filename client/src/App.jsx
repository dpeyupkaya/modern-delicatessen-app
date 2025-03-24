import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import React from 'react';
import CartProvider, { CartContext } from './context/CartProvider';
import MainLayout from './layout/MainLayout';
function App() {
  return (
    <BrowserRouter>
    <CartProvider>
      <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </MainLayout>
    </CartProvider>
    
    </BrowserRouter>
  );
}

export default App;