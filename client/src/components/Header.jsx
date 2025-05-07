import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wider text-gray-100 hover:text-blue-500 transition-all duration-300">
          Şarküterim
        </h1>
        <nav className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="hover:text-blue-400 transition duration-300 transform hover:scale-105"
              >
                Anasayfa
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-400 transition duration-300 transform hover:scale-105"
              >
                Hakkımızda
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-400 transition duration-300 transform hover:scale-105"
              >
                İletişim
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobil menü animasyonu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <ul className="space-y-4 p-4 bg-gray-800 text-center">
          <li>
            <a
              href="/"
              className="hover:text-blue-400 transition duration-300 transform hover:scale-105"
            >
              Anasayfa
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-blue-400 transition duration-300 transform hover:scale-105"
            >
              Hakkımızda
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-blue-400 transition duration-300 transform hover:scale-105"
            >
              İletişim
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
