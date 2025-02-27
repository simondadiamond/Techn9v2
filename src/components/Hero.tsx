import React, { useState } from 'react';
import { useI18n } from '../i18n';
import CalendlyModal from './CalendlyModal';

const Hero = () => {
  const { t, language } = useI18n();
  const [showCalendly, setShowCalendly] = useState(false);

  const url =
    language === 'fr'
      ? 'https://calendly.com/techn9/30-minute-meeting-clone'
      : 'https://calendly.com/techn9/30min';

  return (
    <div className="relative min-h-screen bg-[#111111] hero-pattern flex flex-col items-center justify-center text-center px-4 py-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/80 to-[#111111] pointer-events-none" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 md:space-y-16">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            Scale Faster with{' '}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-[#2bb8e3]">
                Smart Automation
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#40E0D0]/20 to-[#2bb8e3]/20 blur-xl" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-400 leading-relaxed">
            Discover tailored automation strategies designed to optimize operations and drive exponential growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Primary CTA */}
            <button className="w-full sm:w-auto px-10 py-5 text-lg font-semibold text-black rounded-full bg-gradient-to-r from-[#40E0D0] to-[#2bb8e3] hover:from-[#2bb8e3] hover:to-[#40E0D0] transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#40E0D0]/25">
              {t('hero.getStarted')}
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => setShowCalendly(true)}
              className="w-full sm:w-auto px-10 py-5 text-lg font-semibold text-white rounded-full border-2 border-[#40E0D0]/20 hover:border-[#40E0D0]/30 bg-[#40E0D0]/5 hover:bg-[#40E0D0]/10 backdrop-blur-sm transform transition-all duration-200 hover:scale-105"
            >
              {t('hero.bookCall')}
            </button>
          </div>
        </div>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <CalendlyModal url={url} onClose={() => setShowCalendly(false)} />
      )}
    </div>
  );
};

export default Hero;
