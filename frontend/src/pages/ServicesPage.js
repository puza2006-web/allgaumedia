import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';
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
        {/* Hero with Video Background */}
        <PageHero 
          badge={t('services.badge')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        {/* Services with full details */}
        <ServicesSection showFull={true} />

        {/* Contact CTA */}
        <ContactSection />
      </main>
    </>
  );
};

export default ServicesPage;
