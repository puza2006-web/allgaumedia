import React from 'react';
import { Zap, Award, Sparkles, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
      {/* Background texture */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://static.prod-images.emergentagent.com/jobs/d0828124-8795-483a-ac40-b8b706fba433/images/4c927dff77fcb9a583b3d59a0f60bd5514cca7677be6648ff0251c5fa56c297c.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

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

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-zinc-950/50 border border-white/10 p-8 text-center card-hover group"
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
    </section>
  );
};

export default WhyUsSection;
