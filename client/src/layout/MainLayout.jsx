import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Footer from "../components/Header";
import Header from "..//components/Footer";

import  CartProvider  from "../context/CartProvider"; // CartContext entegrasyonu
import { BrowserRouter } from "react-router-dom"; // Router entegrasyonu

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(false);

  useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog");
    if (dialogStatus === null) {
      localStorage.setItem("dialog", JSON.stringify(true));
    }
    
    const timer = setTimeout(() => {
      setIsDialogShow(dialogStatus ? JSON.parse(dialogStatus) : true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleDialogClose = () => {
    setIsDialogShow(false);
    localStorage.setItem("dialog", JSON.stringify(false));
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="main-layout">
          <Dialog 
            isDialogShow={isDialogShow} 
            onClose={handleDialogClose} 
          />
          <Search 
            isSearchShow={isSearchShow} 
            onClose={() => setIsSearchShow(false)} 
          />
          <Header 
            onSearchClick={() => setIsSearchShow(true)} 
          />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;