import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'Ürünler', href: '/products' },
    { name: 'İletişim', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="flex items-center">
              <span className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${scrolled ? 'from-amber-600 to-rose-600' : 'from-amber-300 to-rose-300'}`}>
                Şarküterim
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className={`relative px-3 py-2 font-medium transition-all ${scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'}`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg focus:outline-none"
            onClick={toggleMenu}
            aria-label="Menu"
            whileTap={{ scale: 0.9 }}
          >
            <div className={`w-6 flex flex-col gap-1 transition-all ${isMenuOpen ? 'rotate-180' : ''}`}>
              <span className={`h-0.5 w-full ${scrolled ? 'bg-gray-800' : 'bg-white'} transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`h-0.5 w-full ${scrolled ? 'bg-gray-800' : 'bg-white'} transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 w-full ${scrolled ? 'bg-gray-800' : 'bg-white'} transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.ul 
                className="py-4 space-y-3"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 100 }}
                  >
                    <a
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;