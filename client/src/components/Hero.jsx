import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animasyon süresi
      once: true,     // Animasyonlar sadece bir kez çalışsın
    });
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Video Arka Planı ve Karartma Katmanı */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          src="/images/bg.mp4" // Video yolunuzu kontrol edin
          autoPlay
          loop
          muted
          // Video'nun yavaşça yakınlaşması için bir animasyon sınıfı ekliyoruz
          className="absolute inset-0 w-full h-full object-cover animate-zoom-in" 
        />
        {/* Yazıların okunabilirliği için videonun üzerine siyah bir katman */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      
      {/* İçerik */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Başlık: Gradient ve Animasyon */}
          <h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Lezzetli Şarküteri Ürünleri
          </h1>
          
          {/* Paragraf: Daha yumuşak bir renk ve farklı bir animasyon */}
          <p 
            className="text-xl md:text-2xl text-gray-200 mb-10"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            En taze ve kaliteli ürünlerimizle damak zevkinize hitap ediyoruz.
          </p>
          
          {/* Buton: Gelişmiş Hover Efektleri ve Gradient */}
          <a
            href="/products"
            className="inline-block bg-gradient-to-r from-amber-500 to-red-600 text-white px-10 py-4 rounded-full font-bold shadow-lg transform hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out text-lg"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Ürünleri Keşfet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;