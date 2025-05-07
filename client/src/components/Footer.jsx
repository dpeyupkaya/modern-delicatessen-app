import React from 'react';
import { FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa'; // React Icons'ı kullanarak simgeler ekliyoruz

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-20 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Şarküterim Bilgisi */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3 text-gray-300 hover:text-blue-500 transition-all duration-300">
              Şarküterim
            </h3>
            <p className="text-sm text-gray-400">Lezzetli ve taze ürünlerimizle hizmetinizdeyiz.</p>
          </div>
          
          {/* Hızlı Bağlantılar */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3 text-gray-300 hover:text-blue-500 transition-all duration-300">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="flex items-center text-sm hover:text-blue-400 transition-all duration-300">
                  <FaHome className="mr-2" /> Anasayfa
                </a>
              </li>
              <li>
                <a href="/about" className="flex items-center text-sm hover:text-blue-400 transition-all duration-300">
                  <FaInfoCircle className="mr-2" /> Hakkımızda
                </a>
              </li>
              <li>
                <a href="/contact" className="flex items-center text-sm hover:text-blue-400 transition-all duration-300">
                  <FaPhone className="mr-2" /> İletişim
                </a>
              </li>
            </ul>
          </div>
          
          {/* İletişim Bilgileri */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3 text-gray-300 hover:text-blue-500 transition-all duration-300">
              İletişim
            </h3>
            <p className="text-sm text-gray-400 mb-1">ERCİŞ</p>
            <p className="text-sm text-gray-400">+90555 555 5555</p>
          </div>
        </div>
      </div>

      {/* Alt metin */}
      <div className="text-center mt-8 text-gray-400">
        <p className="text-xs">&copy; 2025 Eyüp KAYA. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
