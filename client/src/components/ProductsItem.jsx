import React, { useContext } from 'react';
import { CartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom';

const ProductsItem = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const filteredCart = cartItems.find((cartItem) => cartItem.id === product.id);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
      <div className="relative aspect-w-4 aspect-h-3">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.img.singleImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="p-6">
        <Link to={`/product/${product.id}`} className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600">
          {product.name}
        </Link>
        
        <div className="flex items-center mb-3">
          {[...Array(4)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs text-gray-500 ml-1">(24)</span>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-lg font-medium text-blue-600">
            ${product.price.newPrice.toFixed(2)}
          </span>
          {product.price.oldPrice && (
            <span className="text-sm text-gray-400 line-through ml-2">
              ${product.price.oldPrice.toFixed(2)}
            </span>
          )}
          {product.discount && (
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded ml-2">
              -{product.discount}%
            </span>
          )}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => addToCart(product)}
            disabled={filteredCart}
            className={`flex-1 py-2 px-4 rounded-lg transition-all duration-300 ${
              filteredCart ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {filteredCart ? 'Sepete Eklendi' : 'Sepete Ekle'}
          </button>
          <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;