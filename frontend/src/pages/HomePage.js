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
      title: 'Allgau Media – Videoproduktion & Webdesign in Memmingen',
      description: 'Professionelle Videoproduktion, Video Editing und Webdesign in Memmingen & Allgäu. Jetzt Projekt starten.',
    },
    en: {
      title: 'Allgau Media – Video Production & Web Design in Memmingen',
      description: 'Professional video production, video editing and web design in Memmingen & Allgäu. Start your project now.',
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Allgau Media",
    "description": seoData[language].description,
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
        <title>{seoData[language].title}</title>
        <meta name="description" content={seoData[language].description} />
        <meta name="keywords" content="Videoproduktion Memmingen, Videograf Allgäu, Webdesign Memmingen, Video Editing Deutschland, Videograf Memmingen und Umgebung" />
        <meta property="og:title" content={seoData[language].title} />
        <meta property="og:description" content={seoData[language].description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={language === 'de' ? 'de_DE' : 'en_US'} />
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
