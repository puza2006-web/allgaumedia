import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const STUDIO_IMAGE = "https://customer-assets.emergentagent.com/job_allgau-media-preview/artifacts/ora9i7hq_pexels-photography-1850469.jpg";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 bg-[#050505] relative overflow-hidden"
      data-testid="about-section"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <span 
              className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 block"
              data-testid="about-badge"
            >
              {t('about.badge')}
            </span>

            {/* Title */}
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-8"
              data-testid="about-title"
            >
              {t('about.title')}
            </h2>

            {/* Description */}
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p data-testid="about-description-1">{t('about.description1')}</p>
              <p data-testid="about-description-2">{t('about.description2')}</p>
              <p data-testid="about-description-3">{t('about.description3')}</p>
              <p data-testid="about-description-4">{t('about.description4')}</p>
            </div>
          </div>

          {/* Right: Studio Image with creative overlay */}
          <div className="relative">
            <div className="relative overflow-hidden">
              {/* Main Image */}
              <img 
                src={STUDIO_IMAGE}
                alt="Allgau Media Studio"
                className="w-full h-auto object-cover"
                data-testid="about-studio-image"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Creative text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-[1px] bg-white/50" />
                  <span className="text-white/80 text-sm uppercase tracking-[0.2em]">
                    Creative Studio
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
