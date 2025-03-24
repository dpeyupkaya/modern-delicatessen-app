import React, { useState, useEffect } from 'react';
import ProductsItem from './ProductsItem';

const products = [
  {
    id: 1,
    name: "Zeytin",
    img: {
      singleImage: "/images/goşt.jpg",
      thumbs: ["/images/goşt.jpg", "/images/goşt.jpg", "/images/goşt.jpg", "/images/goşt.jpg"]
    },
    price: {
      newPrice: 50,
      oldPrice: 60
    },
    discount: 17
  },
  // Diğer ürünler aynı formatta...
];

const Products = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, products.length]);

  const goToNext = () => setActiveIndex((prev) => (prev + 1) % products.length);
  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  const goToIndex = (index) => setActiveIndex(index);

  return (
    <section 
      className="container mx-auto px-4 py-12 relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Ürünlerimiz</h2>

      <div className="relative h-[500px] overflow-hidden">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-transform duration-500 ${
              index === activeIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <ProductsItem product={product} />
          </div>
        ))}
      </div>

      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        ❯
      </button>

      <div className="flex justify-center mt-6 gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;