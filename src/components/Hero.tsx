import React, { useEffect, useState } from 'react';
import { useI18n } from '../i18n';
import { createConsultationURL } from '../lib/utils';
import { motion } from 'framer-motion'; // Import motion

function getScreenSize() {
  // Ensure window is defined (for server-side rendering safety, though less critical here)
  if (typeof window === 'undefined') {
    return 'md'; // Default size or handle appropriately
  }
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width >= 1280 && height >= 800) {
    return 'xl';
  } else if (width >= 1024 && height >= 700) {
    return 'lg';
  } else if (width >= 768 && height >= 600) {
    return 'md';
  } else if (width >= 640 && height >= 500) {
    return 'sm';
  } else {
    return 'xs';
  }
}

const Hero = () => {
  const { t, language } = useI18n();
  // Initialize state safely for potential SSR
  const [screenSize, setScreenSize] = useState(() => typeof window !== 'undefined' ? getScreenSize() : 'md');

  useEffect(() => {
    // Ensure window is defined before adding listener
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setScreenSize(getScreenSize());
    };

    // Set initial size on mount in case calculation differs slightly after mount
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      className={`relative w-full flex flex-col items-center justify-center text-center bg-cover bg-center ${screenSize === 'xl' ? 'h-[60vh]' : screenSize === 'lg' ? 'h-[68vh]' : screenSize === 'md' ? 'h-[75vh]' : screenSize === 'sm' ? 'h-[85vh]' : 'h-screen'} pt-20 sm:pt-24`}
      style={{
        backgroundImage: "url('https://github.com/simondadiamond/techn9-media/blob/5c9bbb244fff0c9f5d2e32690ac452c02c4c1b4a/techn9-hero.png?raw=true')",
        backgroundPosition:'40% 30%'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 md:space-y-8">
          {/* --- Added motion to H1 --- */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight"
          >
            {t('hero.mainTitle.prefix')}{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-[#2bb8e3]">
                {t('hero.mainTitle.highlight')}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#40E0D0]/20 to-[#2bb8e3]/20 blur-xl" />
            </span>
          </motion.h1>

          {/* --- Added motion to P --- */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* --- Added motion to the DIV wrapping buttons --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={handleBookCall}
              className="w-full sm:w-auto px-6 py-2 text-sm sm:text-base font-semibold text-black rounded-full bg-gradient-to-r from-[#40E0D0] to-[#2bb8e3] hover:from-[#2bb8e3] hover:to-[#40E0D0] transition-all duration-200 hover:shadow-lg hover:shadow-[#40E0D0]/25"
            >
              {t('hero.cta.secondary')}
            </button>

            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto px-6 py-2 text-sm sm:text-base font-semibold text-white rounded-full border-2 border-[#40E0D0]/20 hover:border-[#40E0D0]/30 bg-[#40E0D0]/5 hover:bg-[#40E0D0]/10 backdrop-blur-sm transition-all duration-200"
            >
              {t('hero.cta.primary')}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
