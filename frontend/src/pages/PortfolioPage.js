import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';

const PortfolioPage = () => {
  const { language, t } = useLanguage();

  const seoData = {
    de: {
      title: 'Portfolio – Unsere Arbeiten | Allgau Media',
      description: 'Entdecken Sie unser Portfolio: Professionelle Videoproduktionen und Webdesign-Projekte aus Memmingen und dem Allgäu.',
    },
    en: {
      title: 'Portfolio – Our Work | Allgau Media',
      description: 'Discover our portfolio: Professional video productions and web design projects from Memmingen and the Allgäu region.',
    }
  };

  return (
    <>
      <Helmet>
        <title>{seoData[language].title}</title>
        <meta name="description" content={seoData[language].description} />
        <link rel="canonical" href="https://allgaumedia.de/portfolio" />
      </Helmet>

      <main data-testid="portfolio-page">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#050505]">
          <div className="container mx-auto px-6 md:px-12">
            <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 block">
              {t('portfolio.badge')}
            </span>
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter text-white mb-6"
              data-testid="portfolio-page-title"
            >
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl">
              {t('portfolio.subtitle')}
            </p>
          </div>
        </section>

        {/* Portfolio with full grid and filters */}
        <PortfolioSection showFull={true} />

        {/* Contact CTA */}
        <ContactSection />
      </main>
    </>
  );
};

export default PortfolioPage;
