import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
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
  const [logoLoaded, setLogoLoaded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Use layout effect to trigger initial sizing
  useLayoutEffect(() => {
    const adjustNavWidth = () => {
      if (navRef.current) {
        // Force a reflow and reset
        navRef.current.style.width = '97%';
        navRef.current.style.left = '50%';
        navRef.current.style.transform = 'translateX(-50%)';
      }
    };

    // Adjust on initial render and after a short delay
    adjustNavWidth();
    const timer = setTimeout(adjustNavWidth, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      ref={navRef}
      className={`
        fixed z-50 
        top-2 left-1/2 transform -translate-x-1/2
        w-[97%]
        transition-all duration-300
        ${scrolled ? 'shadow-md' : ''}
      `}
    >
      <div
        className={`
          flex flex-col md:flex-row justify-between items-center
          px-4 py-2
          bg-stone-950
          border border-gray-700/50
          rounded-md
          max-w-full
          overflow-x-hidden
          ${scrolled ? 'shadow-md' : ''}
        `}
      >
        <div className="flex justify-between items-center w-full md:w-auto">
          <div 
            className="text-white text-xl font-semibold tracking-wider flex-shrink-0"
            style={{ width: '120px', height: '32px' }}
          >
            <img 
              src={logoUrl} 
              alt="TECHN9" 
              className="h-full w-auto max-w-full object-contain"
              style={{ 
                mixBlendMode: 'screen',
                maxWidth: '120px'
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
        
        <div className="hidden md:flex space-x-4 md:space-x-6 ml-0 md:ml-6 mt-2 md:mt-0">
          <button onClick={() => handleNavigation('services')} className="text-gray-300 hover:text-white">
            {t('nav.services')}
          </button>
          <button onClick={() => handleNavigation('process')} className="text-gray-300 hover:text-white">
            {t('nav.process')}
          </button>
          <button onClick={() => handleNavigation('work')} className="text-gray-300 hover:text-white">
            {t('nav.work')}
          </button>
          <button onClick={() => handleNavigation('about')} className="text-gray-300 hover:text-white">
            {t('nav.about')}
          </button>
          <button onClick={() => handleNavigation('faqs')} className="text-gray-300 hover:text-white">
            {t('nav.faqs')}
          </button>
        </div>
        
        <div className="hidden md:flex items-center ml-0 md:ml-6 mt-2 md:mt-0">
          <LanguageSwitcher />
        </div>

        {isMenuOpen && (
          <div className="md:hidden w-full border-t border-gray-800 mt-2">
            <div className="flex flex-col items-center space-y-2 p-2">
              <button onClick={() => handleNavigation('services')} className="text-center text-gray-300 hover:text-white">
                {t('nav.services')}
              </button>
              <button onClick={() => handleNavigation('process')} className="text-center text-gray-300 hover:text-white">
                {t('nav.process')}
              </button>
              <button onClick={() => handleNavigation('work')} className="text-center text-gray-300 hover:text-white">
                {t('nav.work')}
              </button>
              <button onClick={() => handleNavigation('about')} className="text-center text-gray-300 hover:text-white">
                {t('nav.about')}
              </button>
              <button onClick={() => handleNavigation('faqs')} className="text-center text-gray-300 hover:text-white">
                {t('nav.faqs')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
