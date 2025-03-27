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
        top-0 left-0 right-0 w-full // Use w-full, removed mx-auto
        transition-all duration-300
        ${scrolled ? 'bg-black shadow-md' : 'bg-transparent'}
      `}
      // Removed the inline style with overflow: hidden and maxWidth
    >
      <div
        className={`
          flex flex-wrap justify-between items-center // Added flex-wrap as a safeguard
          px-4 py-2
          max-w-7xl // Optional: Constrain content width on very wide screens
          mx-auto  // Centers the content if max-w is applied
        `}
      >
        {/* Logo and Mobile Toggle Container */}
        <div className="flex justify-between items-center w-full md:w-auto flex-shrink-0 mr-4"> {/* Added mr-4 for spacing, ensure logo doesn't prevent shrinking unnecessarily if space is tight */}
          <div
            className="text-white text-xl font-semibold tracking-wider"
            // Removed fixed width/height style - let content size it or use Tailwind classes
          >
            <img
              src={logoUrl}
              alt="TECHN9"
              className="h-8 w-auto" // Use Tailwind height, let width be auto
              style={{
                mixBlendMode: 'screen',
                // maxWidth: '120px' // Can keep if needed, but h-8 might be enough
              }}
            />
          </div>
         <div className="md:hidden flex items-center">
           {/*   <LanguageSwitcher /> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 text-gray-300 focus:outline-none"
              aria-label="Toggle menu" // Added aria-label for accessibility
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
             <button onClick={() => navigate('/blog')} className="text-gray-300 hover:text-white whitespace-nowrap">
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
