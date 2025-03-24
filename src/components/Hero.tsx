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
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-cover bg-center" style={{ backgroundImage: "url('https://replicate.delivery/xezq/vhkYtYQExco6BR1ttSVmxI5DOc1AUUAHSp2o7YxIEvenewbUA/out-0.webp')" }}>
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="space-y-12 md:space-y-16">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.mainTitle.prefix')}{' '}
            <span className="relative">
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
            className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookCall}
              className="w-full sm:w-auto px-10 py-5 text-lg font-semibold text-black rounded-full bg-gradient-to-r from-[#40E0D0] to-[#2bb8e3] hover:from-[#2bb8e3] hover:to-[#40E0D0] transform transition-all duration-200 hover:shadow-lg hover:shadow-[#40E0D0]/25"
            >
              {t('hero.cta.secondary')}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
              className="w-full sm:w-auto px-10 py-5 text-lg font-semibold text-white rounded-full border-2 border-[#40E0D0]/20 hover:border-[#40E0D0]/30 bg-[#40E0D0]/5 hover:bg-[#40E0D0]/10 backdrop-blur-sm transform transition-all duration-200"
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
