import React from 'react';
import { Link } from 'react-router-dom';
import { Video, Film, Code, Server, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ServicesSection = ({ showFull = false }) => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'videoproduction',
      icon: Video,
      title: t('services.videoproduction.title'),
      description: t('services.videoproduction.description'),
      features: t('services.videoproduction.features'),
    },
    {
      id: 'videoediting',
      icon: Film,
      title: t('services.videoediting.title'),
      description: t('services.videoediting.description'),
      features: t('services.videoediting.features'),
    },
    {
      id: 'webdesign',
      icon: Code,
      title: t('services.webdesign.title'),
      description: t('services.webdesign.description'),
      features: t('services.webdesign.features'),
    },
    {
      id: 'hosting',
      icon: Server,
      title: t('services.hosting.title'),
      description: t('services.hosting.description'),
      features: t('services.hosting.features'),
    },
  ];

  return (
    <section 
      id="services" 
      className="py-24 md:py-32 bg-[#0a0a0a]"
      data-testid="services-section"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header - only show if not on dedicated page */}
        {!showFull && (
          <div className="text-center mb-16">
            <span 
              className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 block"
              data-testid="services-badge"
            >
              {t('services.badge')}
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4"
              data-testid="services-title"
            >
              {t('services.title')}
            </h2>
            <p 
              className="text-zinc-400 max-w-2xl mx-auto"
              data-testid="services-subtitle"
            >
              {t('services.subtitle')}
            </p>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-zinc-950 border border-white/10 p-8 md:p-12 card-hover group"
                data-testid={`service-card-${service.id}`}
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center bg-white/5 mb-6 group-hover:bg-white/10 transition-colors">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-medium text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                {showFull && service.features && (
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-zinc-400 text-sm">
                        <span className="w-1.5 h-1.5 bg-white/50 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA */}
                <Link
                  to={showFull ? '/#contact' : '/services'}
                  className="inline-flex items-center text-white text-sm uppercase tracking-wider group/link"
                  data-testid={`service-cta-${service.id}`}
                >
                  <span>{t('services.cta')}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
