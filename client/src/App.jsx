import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import React from 'react';
import 'animate.css';
import ProductsPage from './components/Products';


function App() {
  return (
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
     </Routes>
    
    </BrowserRouter>
  );
}

export default App;