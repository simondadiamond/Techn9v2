import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { useNavigate, useLocation } from 'react-router-dom';

const logoUrl = 'https://github.com/simondadiamond/techn9-media/blob/63ff8bc48fd105deb4e4c68265ef1610e19d6818/techn9-logo-darkbg.png?raw=true';

const Navbar = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed z-50 
        top-6 left-1/2 transform -translate-x-1/2
        w-full max-w-7xl
        transition-all duration-300
        ${scrolled ? 'shadow-md' : ''}
      `}
    >
      <div
        className={`
          flex flex-col md:flex-row justify-between items-center
          px-6 py-4
          bg-stone-950
          border border-gray-700/50
          rounded-md
          transition-all duration-300
          ${scrolled ? 'shadow-md' : ''}
        `}
      >
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="text-white text-xl font-semibold tracking-wider">
            <img 
              src={logoUrl} 
              alt="TECHN9" 
              className="h-6 md:h-8 w-auto max-w-full"
              style={{
                mixBlendMode: 'screen'
              }}
            />
          </div>
          <div className="md:hidden flex items-center">
            <LanguageSwitcher />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 text-gray-300 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-6 ml-0 md:ml-6 mt-4 md:mt-0">
          <button onClick={() => handleNavigation('services')} className="text-gray-300 hover:text-white">{t('nav.services')}</button>
          <button onClick={() => handleNavigation('process')} className="text-gray-300 hover:text-white">{t('nav.process')}</button>
          <button onClick={() => handleNavigation('work')} className="text-gray-300 hover:text-white">{t('nav.work')}</button>
          <button onClick={() => handleNavigation('about')} className="text-gray-300 hover:text-white">{t('nav.about')}</button>
          <button onClick={() => handleNavigation('faqs')} className="text-gray-300 hover:text-white">{t('nav.faqs')}</button>
        </div>
        
        <div className="hidden md:flex items-center ml-0 md:ml-6 mt-4 md:mt-0">
          <LanguageSwitcher />
        </div>

        {isMenuOpen && (
          <div className="md:hidden w-full border-t border-gray-800 mt-4">
            <div className="flex flex-col space-y-4 p-4">
              <button onClick={() => handleNavigation('services')} className="text-left text-gray-300 hover:text-white">{t('nav.services')}</button>
              <button onClick={() => handleNavigation('process')} className="text-left text-gray-300 hover:text-white">{t('nav.process')}</button>
              <button onClick={() => handleNavigation('work')} className="text-left text-gray-300 hover:text-white">{t('nav.work')}</button>
              <button onClick={() => handleNavigation('about')} className="text-left text-gray-300 hover:text-white">{t('nav.about')}</button>
              <button onClick={() => handleNavigation('faqs')} className="text-left text-gray-300 hover:text-white">{t('nav.faqs')}</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
