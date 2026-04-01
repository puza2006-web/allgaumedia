import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import WhyUsSection from '../components/WhyUsSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  const { language } = useLanguage();

  const seoData = {
    de: {
      title: 'Allgau Media – Videoproduktion & Webdesign im Allgäu',
      description: 'Professionelle Videoproduktion, Video Editing und Webdesign im Allgäu. Jetzt Projekt starten.',
    },
    en: {
      title: 'Allgau Media – Video Production & Web Design in Allgäu',
      description: 'Professional video production, video editing and web design in Allgäu. Start your project now.',
    },
    sr: {
      title: 'Allgau Media – Video Produkcija & Web Dizajn u Allgäu',
      description: 'Profesionalna video produkcija, video montaža i web dizajn u Allgäu regiji. Pokrenite vaš projekat sada.',
    }
  };

  const currentSeo = seoData[language] || seoData.de;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Allgau Media",
    "description": currentSeo.description,
    "url": "https://allgaumedia.de",
    "telephone": "+49-8331-9966090",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Goethestraße 13a",
      "addressLocality": "Buxheim",
      "postalCode": "87740",
      "addressRegion": "Bavaria",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.0283,
      "longitude": 10.1366
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [],
    "priceRange": "$$",
    "areaServed": ["Memmingen", "Allgäu", "Bavaria", "Germany"]
  };

  return (
    <>
      <Helmet>
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <meta name="keywords" content="Videoproduktion Allgäu, Videograf Allgäu, Webdesign Allgäu, Video Editing Deutschland" />
        <meta property="og:title" content={currentSeo.title} />
        <meta property="og:description" content={currentSeo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'de' ? 'de_DE' : language === 'sr' ? 'sr_RS' : 'en_US'} />
        <link rel="canonical" href="https://allgaumedia.de" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main data-testid="home-page">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyUsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default HomePage;
