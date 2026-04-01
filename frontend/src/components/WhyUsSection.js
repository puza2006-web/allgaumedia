import React from 'react';
import { Zap, Award, Sparkles, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const STUDIO_IMAGE = "https://customer-assets.emergentagent.com/job_allgau-media-preview/artifacts/ora9i7hq_pexels-photography-1850469.jpg";

const WhyUsSection = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: Zap,
      title: t('whyUs.items.fast.title'),
      description: t('whyUs.items.fast.description'),
    },
    {
      icon: Award,
      title: t('whyUs.items.quality.title'),
      description: t('whyUs.items.quality.description'),
    },
    {
      icon: Sparkles,
      title: t('whyUs.items.modern.title'),
      description: t('whyUs.items.modern.description'),
    },
    {
      icon: HeadphonesIcon,
      title: t('whyUs.items.support.title'),
      description: t('whyUs.items.support.description'),
    },
  ];

  return (
    <section 
      id="why-us" 
      className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden"
      data-testid="why-us-section"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 block"
            data-testid="why-us-badge"
          >
            {t('whyUs.badge')}
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4"
            data-testid="why-us-title"
          >
            {t('whyUs.title')}
          </h2>
          <p 
            className="text-zinc-400 max-w-2xl mx-auto"
            data-testid="why-us-subtitle"
          >
            {t('whyUs.subtitle')}
          </p>
        </div>

        {/* Studio Image with Items Overlay */}
        <div className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <img 
              src={STUDIO_IMAGE}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Items Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-950/80 backdrop-blur-sm border border-white/10 p-8 text-center card-hover group"
                  data-testid={`why-us-item-${index}`}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white/5 mb-6 group-hover:bg-white/10 transition-colors">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
