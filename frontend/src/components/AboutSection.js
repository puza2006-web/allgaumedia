import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '150+', label: t('about.stats.projects') },
    { value: '80+', label: t('about.stats.clients') },
    { value: '5+', label: t('about.stats.years') },
  ];

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 bg-[#050505] relative overflow-hidden"
      data-testid="about-section"
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://static.prod-images.emergentagent.com/jobs/d0828124-8795-483a-ac40-b8b706fba433/images/f74ec94b014a25740b7c1dbb668c25b8ea6149941c61336306f5823804c8df3e.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-zinc-950 border border-white/10 p-6 md:p-8 text-center card-hover"
                data-testid={`about-stat-${index}`}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-[0.15em] text-zinc-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
