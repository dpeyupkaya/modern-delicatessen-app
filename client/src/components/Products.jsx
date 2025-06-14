import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiSearch, FiHeart } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Simüle edilmiş API çağrısı
    const fetchProducts = async () => {
      try {
        // Gerçek uygulamada burada bir API isteği yapılır
        const mockProducts = [
          { id: 1, name: 'Sucuk', category: 'et', price: 120, image: '/images/image.jpg', isNew: true },
          { id: 2, name: 'Pastırma', category: 'et', price: 180, image: '/images/image.jpg' },
          { id: 3, name: 'Zeytin', category: 'kahvalti', price: 45, image: '/images/image.jpg', isNew: true },
          { id: 4, name: 'Peynir', category: 'kahvalti', price: 85, image: '/images/image.jpg' },
          { id: 5, name: 'Salam', category: 'et', price: 95, image: '/images/image.jpg' },
          { id: 6, name: 'Bal', category: 'kahvalti', price: 150, image: '/images/image.jpg' },
        ];
        
        setTimeout(() => {
          setProducts(mockProducts);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Ürünler yüklenirken hata oluştu:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'Tüm Ürünler' },
    { id: 'et', name: 'Et Ürünleri' },
    { id: 'kahvalti', name: 'Kahvaltılık' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Başlık ve Arama */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Ürünlerimiz</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            En taze ve kaliteli şarküteri ürünlerimizi keşfedin
          </p>
          
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Ürün ara..."
              className="w-full px-5 py-3 rounded-full border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FiSearch className="absolute right-5 top-3.5 text-gray-400" size={20} />
          </div>
        </div>

        {/* Kategoriler */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id 
                  ? 'bg-amber-500 text-white shadow-md' 
                  : 'bg-gray-800 text-gray-200 hover:bg-gray-700 shadow-sm'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Ürünler */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
                >
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-cover"
                    />
                    {product.isNew && (
                      <span className="absolute top-3 right-3 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        YENİ
                      </span>
                    )}
                    <button className="absolute top-3 left-3 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-700">
                      <FiHeart className="text-gray-300 hover:text-rose-500" />
                    </button>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-400 font-bold text-lg">{product.price} TL</span>
                      <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full flex items-center transition-colors duration-300">
                        <FiShoppingCart className="mr-2" />
                        Sepete Ekle
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-full text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className="text-xl text-gray-300">Aradığınız kriterlere uygun ürün bulunamadı</h3>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="mt-4 text-amber-400 hover:text-amber-500 font-medium"
                >
                  Filtreleri temizle
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
      <Footer />
    </div>
  );
};

export default ProductsPage;