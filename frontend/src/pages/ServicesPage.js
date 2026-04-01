import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

const ServicesPage = () => {
  const { language, t } = useLanguage();

  const seoData = {
    de: {
      title: 'Leistungen – Videoproduktion & Webdesign | Allgau Media',
      description: 'Unsere Leistungen: Professionelle Videoproduktion, Video Editing, Webdesign & Entwicklung, Hosting & Domains in Memmingen und dem Allgäu.',
    },
    en: {
      title: 'Services – Video Production & Web Design | Allgau Media',
      description: 'Our services: Professional video production, video editing, web design & development, hosting & domains in Memmingen and the Allgäu region.',
    }
  };

  return (
    <>
      <Helmet>
        <title>{seoData[language].title}</title>
        <meta name="description" content={seoData[language].description} />
        <link rel="canonical" href="https://allgaumedia.de/services" />
      </Helmet>

      <main data-testid="services-page">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#050505]">
          <div className="container mx-auto px-6 md:px-12">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 block">
              {t('services.badge')}
            </span>
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-white mb-6"
              data-testid="services-page-title"
            >
              {t('services.title')}
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              {t('services.subtitle')}
            </p>
          </div>
        </section>

        {/* Services with full details */}
        <ServicesSection showFull={true} />

        {/* Contact CTA */}
        <ContactSection />
      </main>
    </>
  );
};

export default ServicesPage;
