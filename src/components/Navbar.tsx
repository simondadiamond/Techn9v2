import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react'; // Removed
// import { useI18n } from '../i18n'; // Removed
// import LanguageSwitcher from './LanguageSwitcher'; // Removed
// import { useNavigate, useLocation } from 'react-router-dom'; // Removed

// const logoUrl = '...'; // Removed

const Navbar = () => {
  // const { t } = useI18n(); // Removed
  // const navigate = useNavigate(); // Removed
  // const location = useLocation(); // Removed
  // const [isMenuOpen, setIsMenuOpen] = useState(false); // Removed
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const handleNavigation = (sectionId: string) => { ... }; // Removed

  return (
    <nav
      className={`
        fixed z-50
        top-0 left-0 right-0 w-full
        transition-all duration-300
        ${scrolled ? 'bg-black shadow-md' : 'bg-red-500'} /* Changed transparent to red for visibility */
        h-16 /* Added temporary height */
      `}
    >
      <div
        className={`
          flex justify-between items-center /* Kept basic flex */
          px-4 py-2
          max-w-7xl
          mx-auto
          h-full /* Make inner div fill nav height */
          border border-blue-500 /* Added border for visibility */
        `}
      >
         {/* --- All Content Removed --- */}
         <div className="text-white">Simplified Nav - Left</div>
         <div className="text-white">Simplified Nav - Right</div>
      </div>
    </nav>
  );
};

export default Navbar;
