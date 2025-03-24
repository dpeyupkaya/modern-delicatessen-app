import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  });

  // Sepet toplamını hesapla
  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.price.newPrice * item.quantity),
    0
  );

  // Sepet öğe sayısını hesapla
  const cartCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  // LocalStorage senkronizasyonu
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Sepete ekleme fonksiyonu (miktar artırma desteğiyle)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [
        ...prevItems,
        {
          ...product,
          quantity: 1,
          addedAt: new Date().toISOString() // Eklenme zamanı
        }
      ];
    });
  };

  // Sepetten çıkarma fonksiyonu
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  // Miktar güncelleme fonksiyonu
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Sepeti tamamen boşaltma
  const clearCart = () => {
    setCartItems([]);
  };

  // Ürünün sepette olup olmadığını kontrol etme
  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <CartContext.Provider
    
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;