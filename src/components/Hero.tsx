import React from 'react';
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
    <div className="relative min-h-screen bg-[#111111] hero-pattern flex flex-col items-center justify-center text-center px-4 py-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/80 to-[#111111] pointer-events-none" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 md:space-y-16">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            {t('hero.mainTitle.prefix')}{' '}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-[#2bb8e3]">
                {t('hero.mainTitle.highlight')}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#40E0D0]/20 to-[#2bb8e3]/20 blur-xl" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-400 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Book a Call Button (Primary) */}
            <button
              onClick={handleBookCall}
              className="w-full sm:w-auto px-10 py-5 text-lg font-semibold text-black rounded-full bg-gradient-to-r from-[#40E0D0] to-[#2bb8e3] hover:from-[#2bb8e3] hover:to-[#40E0D0] transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#40E0D0]/25"
            >
              {t('hero.cta.secondary')}
            </button>

            {/* Learn More Button (Secondary) */}
            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto px-10 py-5 text-lg font-semibold text-white rounded-full border-2 border-[#40E0D0]/20 hover:border-[#40E0D0]/30 bg-[#40E0D0]/5 hover:bg-[#40E0D0]/10 backdrop-blur-sm transform transition-all duration-200 hover:scale-105"
            >
              {t('hero.cta.primary')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
