import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/images/meat.jpg';
import { FaLeaf, FaAward, FaHeart, FaUsers } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaLeaf className="text-4xl text-green-400" />,
      title: "Doğal Ürünler",
      description: "Tamamen doğal ve katkısız ürünler sunuyoruz"
    },
    {
      icon: <FaAward className="text-4xl text-amber-400" />,
      title: "Kalite Garantisi",
      description: "20 yıllık tecrübemizle en kaliteli ürünleri seçiyoruz"
    },
    {
      icon: <FaHeart className="text-4xl text-rose-400" />,
      title: "Sağlıklı Beslenme",
      description: "Sağlıklı yaşam için özenle hazırlanmış ürünler"
    },
    {
      icon: <FaUsers className="text-4xl text-blue-400" />,
      title: "Müşteri Memnuniyeti",
      description: "Binlerce mutlu müşteriye hizmet verdik"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div 
        className="relative h-96 flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundImage})` }}
      >
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-amber-400 mb-4">Şarküterim</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            20 yıllık tecrübeyle, en kaliteli şarküteri ürünlerini sunuyoruz
          </p>
        </motion.div>
      </div>

      {/* About Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-4xl font-bold text-gray-800 mb-6"
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Hikayemiz
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                2003 yılında küçük bir dükkânla başlayan yolculuğumuz, bugün bölgenin en güvenilir şarküteri markası olarak devam ediyor. 
                <span className="text-amber-500 font-medium"> Geleneksel lezzetleri modern standartlarla birleştiriyoruz.</span>
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                Yerel üreticilerle çalışarak hem bölge ekonomisine katkı sağlıyor, hem de tazeliği garantiliyoruz. 
                <span className="text-amber-500 font-medium"> Ürünlerimiz tamamen doğal ve katkısızdır.</span>
              </motion.p>
            </div>
            
            <motion.div
              className="relative h-80 bg-gray-200 rounded-xl overflow-hidden shadow-xl"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-rose-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Neden Biz?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center text-gray-800 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Ekibimiz
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {['Eyüp KAYA', 'Ahmet YILMAZ', 'Mehmet DEMİR'].map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 overflow-hidden shadow-md">
                  {/* Buraya gerçek fotoğraf eklenebilir */}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{member}</h3>
                <p className="text-amber-600 font-medium">Uzman Şarküteri</p>
                <p className="text-gray-600 mt-2">20+ yıllık tecrübe</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;