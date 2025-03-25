import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  // Sepet state'i
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Ürünler
  const products = [
    {
      id: 1,
      name: "Siyah Zeytin",
      image: "/images/goşt.jpg",
      price: 45.99,
      oldPrice: 55.99,
      discount: 18,
      description: "Naturel fermantasyon ile hazırlanmış sele zeytini"
    },
    {
      id: 2,
      name: "Beyaz Peynir",
      image: "/images/goşt.jpg",
      price: 89.50,
      oldPrice: 99.99,
      discount: 10,
      description: "Tam yağlı taze beyaz peynir"
    },
    {
      id: 3,
      name: "Sucuk",
      image: "/images/goşt.jpg",
      price: 129.99,
      oldPrice: 149.99,
      discount: 13,
      description: "Geleneksel yöntemlerle hazırlanmış %100 dana sucuk"
    },
    {
      id: 4,
      name: "Pastırma",
      image: "/images/goşt.jpg",
      price: 179.90,
      oldPrice: 199.90,
      discount: 10,
      description: "Kayseri usulü çemenli pastırma"
    },
    {
      id: 5,
      name: "Tulum Peyniri",
      image: "/images/goşt.jpg",
      price: 75.00,
      oldPrice: 85.00,
      discount: 12,
      description: "Erzincan yöresel tulum peyniri"
    }
  ];

  // Slider state'leri
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Sepet işlevleri
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      let newItems;
      
      if (existingItem) {
        newItems = prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...prevItems, { ...product, quantity: 1 }];
      }
      
      localStorage.setItem('cartItems', JSON.stringify(newItems));
      return newItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== productId);
      localStorage.setItem('cartItems', JSON.stringify(newItems));
      return newItems;
    });
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.price * item.quantity), 
    0
  );

  const cartCount = cartItems.reduce(
    (count, item) => count + item.quantity, 
    0
  );

  // Slider otomatik geçiş efekti
  useEffect(() => {
    if (isPaused || products.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, products.length]);

  // Slider kontrol fonksiyonları
  const goToNext = () => setActiveIndex(prev => (prev + 1) % products.length);
  const goToPrev = () => setActiveIndex(prev => (prev - 1 + products.length) % products.length);
  const goToIndex = (index) => setActiveIndex(index);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Üst Bilgi ve Sepet Göstergesi */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Ürünlerimiz</h1>
        <div className="relative">
          <button className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Ürün Slider */}
      <div 
        className="relative mb-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative h-96 overflow-hidden rounded-lg shadow-md">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === activeIndex 
                  ? 'opacity-100 translate-x-0'
                  : index < activeIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="h-full flex flex-col md:flex-row bg-white">
                <div className="md:w-1/2 h-64 md:h-full">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xl font-bold text-blue-600">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                    {product.discount && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                        %{product.discount} indirim
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Kontrolleri */}
        {products.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Sepet Özeti */}
      {cartItems.length > 0 && (
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <h2 className="text-xl font-bold mb-4">Sepetiniz ({cartCount} ürün)</h2>
          
          <div className="space-y-4 mb-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b pb-3">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <button 
                      onClick={() => {
                        if (item.quantity > 1) {
                          addToCart({...item, quantity: item.quantity - 1});
                        } else {
                          removeFromCart(item.id);
                        }
                      }}
                      className="text-gray-500 hover:text-red-500"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => addToCart({...item, quantity: item.quantity + 1})}
                      className="text-gray-500 hover:text-green-500"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="block text-red-500 hover:text-red-700 text-sm mt-1"
                  >
                    Kaldır
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t pt-4">
            <span className="font-bold">Toplam:</span>
            <span className="text-xl font-bold">${cartTotal.toFixed(2)}</span>
          </div>

          <Link
            to="/checkout"
            className="block mt-6 bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg transition"
          >
            Ödemeye Geç
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;