import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HERO_VIDEO = "https://customer-assets.emergentagent.com/job_d0828124-8795-483a-ac40-b8b706fba433/artifacts/fg3mvmw0_24496-344562743.mp4";
const LOGO_WHITE = "https://customer-assets.emergentagent.com/job_allgau-media-preview/artifacts/45q8sm31_LOGO%20Allgau%20Media%20crni.png";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="hero-video"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 video-overlay" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={LOGO_WHITE} 
            alt="Allgau Media" 
            className="h-20 sm:h-32 md:h-48 lg:h-56 w-auto max-w-[90vw] mx-auto object-contain"
            data-testid="hero-logo"
          />
        </div>

        {/* Headline */}
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tighter text-white max-w-5xl mx-auto mb-6 animate-fade-in-up opacity-0 stagger-1"
          data-testid="hero-headline"
        >
          {t('hero.headline')}
        </h1>

        {/* Subheadline */}
        <p 
          className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 stagger-2"
          data-testid="hero-subheadline"
        >
          {t('hero.subheadline')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 stagger-3">
          <button
            onClick={scrollToContact}
            className="btn-primary flex items-center space-x-2 group"
            data-testid="hero-cta-contact"
          >
            <span>{t('hero.ctaPrimary')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <Link
            to="/portfolio"
            className="btn-secondary flex items-center space-x-2 group"
            data-testid="hero-cta-portfolio"
          >
            <Play className="w-4 h-4" />
            <span>{t('hero.ctaSecondary')}</span>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
