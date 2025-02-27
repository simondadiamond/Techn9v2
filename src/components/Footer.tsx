import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { useI18n } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-[#40E0D0] text-xl font-semibold mb-4">Techn9</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-medium mb-4">{t('footer.navigation')}</h4>
              <ul className="space-y-2">
                <li><button onClick={() => handleNavigation('services')} className="text-gray-400 hover:text-white">{t('nav.services')}</button></li>
                <li><button onClick={() => handleNavigation('process')} className="text-gray-400 hover:text-white">{t('nav.process')}</button></li>
                <li><button onClick={() => handleNavigation('work')} className="text-gray-400 hover:text-white">{t('nav.work')}</button></li>
                <li><button onClick={() => handleNavigation('about')} className="text-gray-400 hover:text-white">{t('nav.about')}</button></li>
                <li><button onClick={() => handleNavigation('faqs')} className="text-gray-400 hover:text-white">{t('nav.faqs')}</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">{t('footer.legal')}</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => navigate('/privacy')} 
                    className="text-gray-400 hover:text-white"
                  >
                    Privacy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigate('/terms')} 
                    className="text-gray-400 hover:text-white"
                  >
                    Terms
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">{t('footer.getInTouch')}</h4>
              <p className="text-gray-400 mb-4">{t('contact.emailAddress')}</p>
              <div className="flex space-x-4">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-[#40E0D0] cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#40E0D0] cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-[#40E0D0] cursor-pointer" />
              </div>
              <div className="mt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
