import React from 'react';
import { useI18n } from '../i18n';
import { createConsultationURL } from '../lib/utils';

const CallToAction: React.FC = () => {
  const { t, language } = useI18n();

  const handleBookCall = (e: React.MouseEvent) => {
    e.preventDefault();
    const consultationURL = createConsultationURL(language);
    window.location.href = consultationURL;
  };

  return (
    <section className="bg-[#0A0A0A] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center p-12">
        <h2 className="text-4xl font-bold text-white mb-4">
          {t('callToAction.title')}
        </h2>
        <p className="text-gray-400 mb-6">
          {t('callToAction.subtitle')}
        </p>
        
        <button 
          onClick={handleBookCall}
          className="w-full sm:w-auto px-10 py-5 text-lg font-semibold text-black rounded-full bg-gradient-to-r from-[#40E0D0] to-[#2bb8e3] hover:from-[#2bb8e3] hover:to-[#40E0D0] transform transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#40E0D0]/25"
        >
          {t('callToAction.buttonText')}
        </button>
        
        <p className="text-gray-500 text-sm mt-4">
          {t('callToAction.noCreditCard')}
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
