import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/images/meat.jpg'; // Resminizi import edin

const About = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, 
        backgroundPosition: 'center center',
        backgroundSize: 'cover', 
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
      <section className="container mx-auto px-4 py-24 flex-grow bg-opacity-70 bg-black opacity-60 rounded-lg shadow-lg attached-fixed">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-8 text-yellow-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Şarküterim Hakkında
        </motion.h2>
        <motion.p
          className="text-gray-300 text-center text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          2005 yılında kurulan Şarküterim, <span className="text-orange-500">lezzetli ve taze</span> ürünleriyle
          sektördeki yerini sağlamlaştırmıştır. Müşteri memnuniyetini her zaman ön planda tutarak,{' '}
          <span className="text-yellow-400">sağlıklı ve kaliteli</span> gıda seçenekleri sunmayı hedefliyoruz.
          Bizim için her müşterinin ihtiyacı özeldir, bu yüzden ürünlerimiz tamamen müşteri taleplerine göre
          özenle seçilmektedir.
        </motion.p>
        <motion.p
          className="text-gray-300 text-center text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Şarküterim'de taze etten peynir çeşitlerine, sağlıklı ve doğal ürünlere kadar geniş bir yelpazeye sahibiz.
          <span className="text-red-500">Müşterilerimize en iyi hizmeti sunmayı amaçlıyoruz!</span>
        </motion.p>
        <motion.p
          className="text-gray-300 text-center text-xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Her geçen gün müşteri portföyümüzü genişletirken, müşteri memnuniyetini birinci önceliğimiz olarak
          koruyoruz. Bizim için en önemli şey, Şarküterim'i bir yaşam tarzı olarak benimseyen bir topluluk yaratmaktır.
        </motion.p>
      </section>
      <Footer />
    </div>
  );
};

export default About;
