import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Hakkımızda</h2>
        <p className="text-gray-600 text-center">
          Şarküterim, 2005 yılından beri taze ve kaliteli ürünler sunmaktadır. Müşteri memnuniyeti bizim için her zaman ön plandadır.
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default About;