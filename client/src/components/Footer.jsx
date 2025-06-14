import React from 'react';
import { FaHome, FaInfoCircle, FaPhone, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    { icon: <FaInstagram size={20} />, url: "#" },
    { icon: <FaFacebook size={20} />, url: "#" },
    { icon: <FaTwitter size={20} />, url: "#" }
  ];

  const quickLinks = [
    { icon: <FaHome className="mr-2" />, text: "Anasayfa", url: "/" },
    { icon: <FaInfoCircle className="mr-2" />, text: "Hakkımızda", url: "/about" },
    { icon: <FaPhone className="mr-2" />, text: "İletişim", url: "/contact" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 py-12 px-4 mt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
        className="container mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Logo ve Açıklama */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">
              Şarküterim
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Lezzetli ve taze ürünlerimizle hizmetinizdeyiz. Kalitenin adresi...
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Hızlı Bağlantılar */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a
                    href={link.url}
                    className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                  >
                    {link.icon} {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* İletişim */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-white">İletişim</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p className="flex items-start">
                <span className="block">TÜRKİYE</span>
              </p>
              <p className="flex items-center">
                <span>+90 555 555 5555</span>
              </p>
              <p className="flex items-center">
                <span>info@sarkuterim.com</span>
              </p>
            </div>
          </motion.div>

          {/* Çalışma Saatleri */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Çalışma Saatleri</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p>Pazartesi - Cuma: 08:00 - 19:00</p>
              <p>Cumartesi: 09:00 - 18:00</p>
              <p>Pazar: Kapalı</p>
            </div>
          </motion.div>
        </div>

        {/* Alt Kısım */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 mt-12 pt-6 text-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Eyüp KAYA. Tüm Hakları Saklıdır.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;