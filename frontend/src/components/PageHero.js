import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const HERO_VIDEO = "https://customer-assets.emergentagent.com/job_d0828124-8795-483a-ac40-b8b706fba433/artifacts/fg3mvmw0_24496-344562743.mp4";
const LOGO_WHITE = "https://customer-assets.emergentagent.com/job_d0828124-8795-483a-ac40-b8b706fba433/artifacts/djol97cf_LOGO%20Allgau%20Media.png";

const PageHero = ({ title, subtitle, badge }) => {
  return (
    <section 
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
      data-testid="page-hero-section"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="page-hero-video"
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center py-20">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={LOGO_WHITE} 
            alt="Allgau Media" 
            className="h-32 md:h-40 lg:h-48 mx-auto"
            data-testid="page-hero-logo"
          />
        </div>

        {/* Badge */}
        {badge && (
          <span 
            className="text-xs uppercase tracking-[0.2em] text-zinc-400 mb-4 block animate-fade-in"
            data-testid="page-hero-badge"
          >
            {badge}
          </span>
        )}

        {/* Title */}
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-white max-w-4xl mx-auto mb-6 animate-fade-in-up"
          data-testid="page-hero-title"
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p 
            className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto animate-fade-in-up"
            data-testid="page-hero-subtitle"
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
