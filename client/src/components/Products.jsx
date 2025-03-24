import React, { useState, useEffect } from 'react';

const products = [
  { id: 1, name: "Zeytin", price: "50 TL", image: "/images/goşt.jpg" },
  { id: 2, name: "Peynir", price: "80 TL", image: "/images/goşt.jpg" },
  { id: 3, name: "Sucuk", price: "120 TL", image: "/images/goşt.jpg" },
  { id: 4, name: "Pastırma", price: "150 TL", image: "/images/goşt.jpg" },
  { id: 5, name: "Salam", price: "90 TL", image: "/images/goşt.jpg" },
  { id: 6, name: "Kavurma", price: "200 TL", image: "/images/goşt.jpg" },
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Otomatik kaydırma efekti
  useEffect(() => {
    if (isPaused) return; // Eğer slider duraklatıldıysa otomatik kaydırmayı durdur

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 1000); // 3 saniyede bir kaydır

    return () => clearInterval(interval); // Temizleme fonksiyonu
  }, [isPaused]);

  // Bir sonraki ürüne geç
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Bir önceki ürüne geç
  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  // Belirli bir indekse git
  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className="container mx-auto px-4 py-12 overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)} // Slider'ın üzerine gelindiğinde duraklat
      onMouseLeave={() => setIsPaused(false)} // Slider'ın üzerinden çıkıldığında devam et
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Ürünlerimiz</h2>

      {/* Slider Container */}
      <div className="relative w-full h-96">
        <div
          className="relative flex transition-transform duration-1000"
          style={{
            transform: `translateX(-${activeIndex * (100 / 3)}%)`, // Her defasında 3 ürün gösterilecek
          }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="w-1/3 h-full flex-shrink-0 px-2" // 3 ürün gösterilecek şekilde genişlik ayarı
            >
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-w-4 aspect-h-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg font-medium text-blue-600 mb-4">
                    {product.price}
                  </p>
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300">
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Önceki ve Sonraki Düğmeler */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300"
      >
        &#10094; {/* Sol ok simgesi */}
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-75 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all duration-300"
      >
        &#10095; {/* Sağ ok simgesi */}
      </button>

      {/* Slider Düğmeleri (Noktalar) */}
      <div className="flex justify-center mt-4 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
