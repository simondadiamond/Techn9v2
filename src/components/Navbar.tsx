import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';
import { useNavigate, useLocation } from 'react-router-dom';

const logoUrl = 'https://github.com/simondadiamond/techn9-media/blob/63ff8bc48fd105deb4e4c68265ef1610e19d6818/techn9-logo-darkbg.png';

const Navbar = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

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
      }, 100); // Small delay might be needed if route change takes time
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
        top-0 left-0 right-0 w-full
        transition-all duration-300
        ${scrolled ? 'bg-black shadow-md' : 'bg-transparent'}
      `}
    >
      <div
        className={`
          flex flex-wrap items-center // REMOVED justify-between here
          px-4 py-2
          max-w-7xl
          mx-auto
        `}
      >
        {/* Logo and Mobile Toggle Container */}
        {/* MODIFICATION 1: Removed 'justify-between' from this div */}
        <div className="flex items-center w-full md:w-auto">

          {/* Logo Div */}
          {/* MODIFICATION 2: Added 'mr-auto' to this div */}
          <div
            className="flex-shrink-0 mr-auto" // Added mr-auto here
          >
						{/*   <img
              src={logoUrl}
              alt="TECHN9"
              className="h-8 w-auto" // Use Tailwind height, let width be auto
              style={{
                mixBlendMode: 'screen',
                // maxWidth: '120px' // Optional: Adjust if needed
              }}
            /> */}
          </div>

          {/* Mobile Right Side Group (Only visible < md) */}
          <div className="md:hidden flex items-center">
             {/* LanguageSwitcher is already removed based on your previous test */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 text-gray-300 focus:outline-none" // Keeping ml-4 for now, adjust if needed
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        {/* Grouped Nav and Language Switcher for better flex control */}
        <div className="hidden md:flex flex-grow items-center justify-end"> {/* Use flex-grow to take remaining space, justify-end */}
           <div className="flex space-x-4 md:space-x-6 items-center">
             <button onClick={() => handleNavigation('services')} className="text-gray-300 hover:text-white whitespace-nowrap"> {/* Added whitespace-nowrap */}
               {t('nav.services')}
             </button>
             <button onClick={() => handleNavigation('process')} className="text-gray-300 hover:text-white whitespace-nowrap">
               {t('nav.process')}
             </button>
             <button onClick={() => handleNavigation('work')} className="text-gray-300 hover:text-white whitespace-nowrap">
               {t('nav.work')}
             </button>
             <button onClick={() => handleNavigation('about')} className="text-gray-300 hover:text-white whitespace-nowrap">
               {t('nav.about')}
             </button>
             <button onClick={() => handleNavigation('faqs')} className="text-gray-300 hover:text-white whitespace-nowrap">
               {t('nav.faqs')}
             </button>
             <button 
							  onClick={() => window.location.href = 'https://techn9.com/blog'} 
							  className="text-gray-300 hover:text-white whitespace-nowrap"
							>
							  {t('nav.blog')}
							</button>
             {/* Moved LanguageSwitcher here for desktop 
             <LanguageSwitcher />*/}
           </div>
        </div>


        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden w-full border-t border-gray-700 mt-2 pt-2"> {/* Adjusted border color/spacing */}
            <div className="flex flex-col items-center space-y-2">
              {/* Mobile links... (keep as they were) */}
               <button onClick={() => handleNavigation('services')} className="block w-full text-center py-1 text-gray-300 hover:text-white">
                {t('nav.services')}
              </button>
              <button onClick={() => handleNavigation('process')} className="block w-full text-center py-1 text-gray-300 hover:text-white">
                {t('nav.process')}
              </button>
              {/* ... other mobile links */}
               <button onClick={() => navigate('/blog')} className="block w-full text-center py-1 text-gray-300 hover:text-white">
                 {t('nav.blog')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
