import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Şarküterim Bilgisi */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 transition-all duration-300 transform hover:scale-105 hover:text-yellow-400">
              Şarküterim
            </h3>
            <p className="text-sm text-gray-300">Lezzetli ve taze ürünlerimizle hizmetinizdeyiz.</p>
          </div>
          
          {/* Hızlı Bağlantılar */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 transition-all duration-300 transform hover:scale-105 hover:text-yellow-400">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-yellow-400 transition-all duration-300">Anasayfa</a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:text-yellow-400 transition-all duration-300">Hakkımızda</a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-yellow-400 transition-all duration-300">İletişim</a>
              </li>
            </ul>
          </div>
          
          {/* İletişim Bilgileri */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 transition-all duration-300 transform hover:scale-105 hover:text-yellow-400">
              İletişim
            </h3>
            <p className="text-sm text-gray-300 mb-1">ERCİŞ</p>
            <p className="text-sm text-gray-300">+90555 555 5555</p>
          </div>
        </div>
      </div>

      {/* Alt metin */}
      <div className="text-center mt-6 text-gray-300">
        <p className="text-xs">&copy; 2025 Eyüp KAYA. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;