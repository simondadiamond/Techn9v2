import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n';
import { createConsultationURL } from '../lib/utils';

const Hero = () => {
  const { t, language } = useI18n();

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    const consultationURL = createConsultationURL(language);
    window.location.href = consultationURL;
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      className="relative h-screen lg:h-[75vh] w-full flex flex-col items-center justify-center text-center bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: "url('https://github.com/simondadiamond/techn9-media/blob/64637c5fb7251d5836c9bec3d8deb3b5c72f4fa7/skyscrapers.webp?raw=true')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="space-y-6 md:space-y-8">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.mainTitle.prefix')}{' '}
            <span className="relative inline-block">
              <motion.span 
                className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-[#2bb8e3]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {t('hero.mainTitle.highlight')}
              </motion.span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-[#40E0D0]/20 to-[#2bb8e3]/20 blur-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </motion.h1>

          <motion.p 
            className="max-w-xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookCall}
              className="w-full sm:w-auto px-6 py-2 text-sm sm:text-base font-semibold text-black rounded-full bg-gradient-to-r from-[#40E0D0] to-[#2bb8e3] hover:from-[#2bb8e3] hover:to-[#40E0D0] transition-all duration-200 hover:shadow-lg hover:shadow-[#40E0D0]/25"
            >
              {t('hero.cta.secondary')}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
              className="w-full sm:w-auto px-6 py-2 text-sm sm:text-base font-semibold text-white rounded-full border-2 border-[#40E0D0]/20 hover:border-[#40E0D0]/30 bg-[#40E0D0]/5 hover:bg-[#40E0D0]/10 backdrop-blur-sm transition-all duration-200"
            >
              {t('hero.cta.primary')}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
