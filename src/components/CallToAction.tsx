import React, { useState } from 'react';
import { useI18n } from '../i18n';
import CalendlyModal from './CalendlyModal';

const CallToAction: React.FC = () => {
  const { t, language } = useI18n();
  const [showCalendly, setShowCalendly] = useState(false);

  const url = language === 'fr' 
    ? 'https://calendly.com/techn9/consultationfr'
    : 'https://calendly.com/techn9/consultationen';

  return (
    <section className="bg-[#0A0A0A] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center border border-gray-800 rounded-xl p-12 bg-[#111111]">
        <h2 className="text-4xl font-bold text-white mb-4">
          {t('callToAction.title')}
        </h2>
        <p className="text-gray-400 mb-2">
          {t('callToAction.subtitle')}
        </p>
        <p className="text-gray-400 mb-8">
          {t('callToAction.bookNow')}
        </p>
        
        <button 
          onClick={() => setShowCalendly(true)}
          className="w-full sm:w-auto px-10 py-5 text-lg font-semibold text-black rounded-full bg-gradient-to-r from-[#40E0D0] to-[#2bb8e3] hover:from-[#2bb8e3] hover:to-[#40E0D0] transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#40E0D0]/25"
        >
          {t('callToAction.buttonText')}
        </button>
        
        <p className="text-gray-500 text-sm mt-4">
          {t('callToAction.noCreditCard')}
        </p>
      </div>

      {/* Calendly Modal */}
      {showCalendly && (
        <CalendlyModal url={url} onClose={() => setShowCalendly(false)} />
      )}
    </section>
  );
};

export default CallToAction;
