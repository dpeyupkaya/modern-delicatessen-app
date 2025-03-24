import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS kütüphanesini import et

const Hero = () => {
  // AOS başlatma
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animasyonlar sadece bir kere çalışsın
  }, []);

  return (
    <section className="relative bg-blue-50 h-screen">
      {/* Video Arka Plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          src="/images/real_gost.mp4" // Video dosyasının yolunu doğru şekilde belirtin
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* İçerik */}
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center text-center">
        <div
          className="md:w-1/2"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1500"
        >
          <h2 className="text-5xl font-bold mb-6 text-black transition-transform duration-500">
            Lezzetli Şarküteri Ürünleri
          </h2>
          <p className="text-xl text-black-200 mb-8 transition-opacity duration-500 hover:opacity-75">
            En taze ve kaliteli ürünlerimizle hizmetinizdeyiz.
          </p>
          <a
            href="/products"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Ürünleri Gör
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;