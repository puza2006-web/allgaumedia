import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';

const PortfolioPage = () => {
  const { language, t } = useLanguage();

  const seoData = {
    de: {
      title: 'Portfolio – Unsere Arbeiten | Allgau Media',
      description: 'Entdecken Sie unser Portfolio: Professionelle Videoproduktionen und Webdesign-Projekte aus dem Allgäu.',
    },
    en: {
      title: 'Portfolio – Our Work | Allgau Media',
      description: 'Discover our portfolio: Professional video productions and web design projects from the Allgäu region.',
    },
    sr: {
      title: 'Portfolio – Naši radovi | Allgau Media',
      description: 'Otkrijte naš portfolio: Profesionalne video produkcije i web dizajn projekti iz Allgäu regije.',
    }
  };

  const currentSeo = seoData[language] || seoData.de;

  return (
    <>
      <Helmet>
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <link rel="canonical" href="https://allgaumedia.de/portfolio" />
      </Helmet>

      <main data-testid="portfolio-page">
        {/* Hero with Video Background */}
        <PageHero 
          badge={t('portfolio.badge')}
          title={t('portfolio.title')}
          subtitle={t('portfolio.subtitle')}
        />

        {/* Portfolio with full grid and filters */}
        <PortfolioSection showFull={true} />

        {/* Contact CTA */}
        <ContactSection />
      </main>
    </>
  );
};

export default PortfolioPage;
