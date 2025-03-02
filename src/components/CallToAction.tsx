import React from 'react';
import { useI18n } from '../i18n';
import { useCalendly } from '../hooks/useCalendly';

const CallToAction: React.FC = () => {
  const { t, language } = useI18n();
  const isCalendlyLoaded = useCalendly();

  const url = language === 'fr' 
    ? 'https://calendly.com/techn9/consultationfr'
    : 'https://calendly.com/techn9/consultationen';

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url });
    }
  };

  return (
    <section className="bg-[#0A0A0A] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center border border-gray-800 rounded-xl p-12 bg-[#111111]">
        <h2 className="text-4xl font-bold text-white mb-4">
          Kickstart your journey with a free 30-minute intro call!
        </h2>
        <p className="text-gray-400 mb-6">
          No pressure, just a friendly chat and expert advice to explore how we can streamline your business.
        </p>
        
        <button 
          onClick={handleBookCall}
          disabled={!isCalendlyLoaded}
          className="w-full sm:w-auto px-10 py-5 text-lg font-semibold text-black rounded-full bg-gradient-to-r from-[#40E0D0] to-[#2bb8e3] hover:from-[#2bb8e3] hover:to-[#40E0D0] transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#40E0D0]/25"
        >
          🔗 Book your call now!
        </button>
        
        <p className="text-gray-500 text-sm mt-4">
          {t('callToAction.noCreditCard')}
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
