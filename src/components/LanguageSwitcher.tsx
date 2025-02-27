import React from 'react';
import { useI18n } from '../i18n';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useI18n();

  return (
    <div className="flex items-center text-sm">
      <button
        className={`px-2 py-1 transition-colors duration-200 ${
          language === 'en'
            ? 'text-[#40E0D0]'
            : 'text-gray-500 hover:text-gray-300'
        }`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <span className="text-gray-600">/</span>
      <button
        className={`px-2 py-1 transition-colors duration-200 ${
          language === 'fr'
            ? 'text-[#40E0D0]'
            : 'text-gray-500 hover:text-gray-300'
        }`}
        onClick={() => changeLanguage('fr')}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
