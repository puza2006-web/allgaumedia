import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LOGO_WHITE = "https://customer-assets.emergentagent.com/job_d0828124-8795-483a-ac40-b8b706fba433/artifacts/djol97cf_LOGO%20Allgau%20Media.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/portfolio', label: t('nav.portfolio') },
    { to: '/#contact', label: t('nav.contact') },
  ];

  const handleNavClick = (to) => {
    if (to.includes('#')) {
      const [path, hash] = to.split('#');
      if (location.pathname === path || (path === '/' && location.pathname === '/')) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-black/80 border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" data-testid="navbar-logo">
            <img 
              src={LOGO_WHITE} 
              alt="Allgau Media" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className="text-sm uppercase tracking-[0.15em] text-zinc-300 hover:text-white transition-colors link-underline"
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: Language + CTA */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-sm text-zinc-300 hover:text-white transition-colors"
              data-testid="language-switcher"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{language}</span>
            </button>

            {/* CTA Button */}
            <Link
              to="/#contact"
              onClick={() => handleNavClick('/#contact')}
              className="btn-primary text-sm uppercase tracking-wider"
              data-testid="nav-cta-button"
            >
              {t('nav.cta')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-zinc-300 hover:text-white transition-colors"
              data-testid="mobile-language-switcher"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 animate-fade-in"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col py-6 px-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="text-lg text-zinc-300 hover:text-white transition-colors py-2"
                  data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#contact"
                onClick={() => handleNavClick('/#contact')}
                className="btn-primary text-center mt-4"
                data-testid="mobile-nav-cta"
              >
                {t('nav.cta')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
