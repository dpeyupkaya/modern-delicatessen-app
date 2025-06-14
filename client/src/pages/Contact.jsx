import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  // Form verilerini yönetmek için state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Animasyonları başlatmak için useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    alert('Mesajınız için teşekkür ederiz! En kısa sürede size geri döneceğiz.');
    console.log('Form Verisi:', formData);
    setFormData({ name: '', email: '', message: '' }); // Formu temizle
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-6 py-20">
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
            Bize Ulaşın
          </h1>
          <p className="text-lg text-gray-300">Sorularınız, önerileriniz veya siparişleriniz için buradayız.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Sol Sütun: İletişim Bilgileri ve Harita */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Doğrudan İletişim</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center text-lg">
                  <FaMapMarkerAlt className="text-amber-400 mr-4 flex-shrink-0" />
                  <span> Türkiye</span>
                </li>
                <li className="flex items-center text-lg">
                  <FaPhoneAlt className="text-amber-400 mr-4 flex-shrink-0" />
                  <a href="tel:+905555555555" className="hover:text-amber-300 transition-colors">+90 555 555 55 55</a>
                </li>
                <li className="flex items-center text-lg">
                  <FaEnvelope className="text-amber-400 mr-4 flex-shrink-0" />
                  <a href="mailto:info@sarkuterim.com" className="hover:text-amber-300 transition-colors">info@sarkuterim.com</a>
                </li>
              </ul>
            </div>
            {/* Harita */}
            <div className="h-80 w-full bg-gray-800 rounded-lg overflow-hidden shadow-xl">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.2255772813!2d32.7544325515609!3d39.90352199015116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara%2C%20T%C3%BCrkiye!5e0!3m2!1str!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
               
                className="filter invert(90%) hue-rotate(180deg)"
              ></iframe>
            </div>
          </div>
          
          {/* Sağ Sütun: İletişim Formu */}
          <div className="bg-gray-800/50 p-8 rounded-xl shadow-2xl" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-white mb-6">Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Adınız Soyadınız</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-posta Adresiniz</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mesajınız</label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out text-lg"
              >
                Mesajı Gönder
              </button>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;