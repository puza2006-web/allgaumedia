import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const WebdesignPage = () => {
  const { language } = useLanguage();

  const content = {
    de: {
      title: 'Modernes Webdesign & Entwicklung',
      subtitle: 'Websites, die überzeugen und konvertieren',
      intro: 'Wir gestalten und entwickeln moderne, responsive Websites, die nicht nur gut aussehen, sondern auch Ergebnisse liefern. Von der Landing Page bis zum kompletten Webauftritt.',
      sections: [
        {
          title: 'Was wir bieten',
          text: 'Unser Webdesign-Service umfasst das komplette Paket: UX/UI Design, Entwicklung, SEO-Optimierung und Content-Management. Wir erstellen Websites, die auf allen Geräten perfekt funktionieren und für Suchmaschinen optimiert sind. Von WordPress bis maßgeschneiderten Lösungen – wir finden die richtige Technologie für Ihr Projekt.',
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80'
        },
        {
          title: 'Für wen ist das geeignet?',
          text: 'Unser Webdesign richtet sich an Unternehmen, die ihre Online-Präsenz neu aufbauen oder modernisieren möchten. Ob Sie ein lokales Geschäft, ein wachsendes Start-up oder ein etabliertes Unternehmen sind – eine professionelle Website ist heute unverzichtbar für Ihren Geschäftserfolg.',
          image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80'
        },
        {
          title: 'Ihre Vorteile',
          text: 'Eine professionelle Website ist Ihre digitale Visitenkarte und oft der erste Kontakt mit potenziellen Kunden. Wir sorgen dafür, dass dieser Eindruck überzeugt: schnelle Ladezeiten, intuitive Navigation, ansprechendes Design und klare Handlungsaufforderungen. Das Ergebnis: mehr Besucher, mehr Anfragen, mehr Umsatz.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
        }
      ],
      features: [
        'Responsive Webdesign',
        'UX/UI Design',
        'SEO-Optimierung',
        'WordPress & CMS',
        'E-Commerce Lösungen',
        'Landing Pages'
      ],
      cta: 'Website anfragen',
      ctaText: 'Bereit für Ihren neuen Webauftritt? Lassen Sie uns gemeinsam Ihre Website planen.'
    },
    en: {
      title: 'Modern Web Design & Development',
      subtitle: 'Websites that convince and convert',
      intro: 'We design and develop modern, responsive websites that not only look good but also deliver results. From landing pages to complete web presence.',
      sections: [
        {
          title: 'What We Offer',
          text: 'Our web design service includes the complete package: UX/UI design, development, SEO optimization, and content management. We create websites that work perfectly on all devices and are optimized for search engines. From WordPress to custom solutions – we find the right technology for your project.',
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80'
        },
        {
          title: 'Who Is It For?',
          text: 'Our web design is aimed at businesses looking to build or modernize their online presence. Whether you\'re a local shop, a growing start-up, or an established company – a professional website is essential for your business success today.',
          image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80'
        },
        {
          title: 'Your Benefits',
          text: 'A professional website is your digital business card and often the first contact with potential customers. We make sure this impression convinces: fast loading times, intuitive navigation, appealing design, and clear calls to action. The result: more visitors, more inquiries, more revenue.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
        }
      ],
      features: [
        'Responsive Web Design',
        'UX/UI Design',
        'SEO Optimization',
        'WordPress & CMS',
        'E-Commerce Solutions',
        'Landing Pages'
      ],
      cta: 'Request a Website',
      ctaText: 'Ready for your new web presence? Let\'s plan your website together.'
    },
    sr: {
      title: 'Moderni Web Dizajn & Razvoj',
      subtitle: 'Web stranice koje ubjeđuju i konvertuju',
      intro: 'Dizajniramo i razvijamo moderne, responzivne web stranice koje ne samo da dobro izgledaju, već donose i rezultate. Od landing stranica do kompletne web prezentacije.',
      sections: [
        {
          title: 'Šta nudimo',
          text: 'Naša usluga web dizajna uključuje kompletan paket: UX/UI dizajn, razvoj, SEO optimizaciju i upravljanje sadržajem. Kreiramo web stranice koje savršeno funkcionišu na svim uređajima i optimizirane su za pretraživače. Od WordPressa do prilagođenih rješenja – pronalazimo pravu tehnologiju za vaš projekat.',
          image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80'
        },
        {
          title: 'Za koga je namijenjeno?',
          text: 'Naš web dizajn je namijenjen firmama koje žele izgraditi ili modernizovati svoju online prisutnost. Bilo da ste lokalna prodavnica, rastući startup ili etablirana firma – profesionalna web stranica je danas neophodna za vaš poslovni uspjeh.',
          image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80'
        },
        {
          title: 'Vaše prednosti',
          text: 'Profesionalna web stranica je vaša digitalna vizit-karta i često prvi kontakt sa potencijalnim klijentima. Pobrinuemo se da taj utisak uvjeri: brzo učitavanje, intuitivna navigacija, privlačan dizajn i jasni pozivi na akciju. Rezultat: više posjetilaca, više upita, više prihoda.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
        }
      ],
      features: [
        'Responzivni Web Dizajn',
        'UX/UI Dizajn',
        'SEO Optimizacija',
        'WordPress & CMS',
        'E-Commerce rješenja',
        'Landing stranice'
      ],
      cta: 'Zatražite web stranicu',
      ctaText: 'Spremni za vašu novu web prezentaciju? Planirajmo zajedno vašu web stranicu.'
    }
  };

  const currentLang = language || 'de';
  const t = content[currentLang] || content.de;

  return (
    <>
      <Helmet>
        <title>{`${t.title} | Allgau Media`}</title>
        <meta name="description" content={t.intro || ''} />
      </Helmet>

      <main data-testid="webdesign-page">
        <PageHero 
          title={t.title}
          subtitle={t.subtitle}
        />

        {/* Intro Section */}
        <section className="py-16 md:py-24 bg-[#050505]">
          <div className="container mx-auto px-6 md:px-12">
            <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto text-center leading-relaxed">
              {t.intro}
            </p>
          </div>
        </section>

        {/* Content Sections */}
        {t.sections.map((section, index) => (
          <section 
            key={index}
            className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-[#0a0a0a]' : 'bg-[#050505]'}`}
          >
            <div className="container mx-auto px-6 md:px-12">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                {/* Text */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
                    {section.title}
                  </h2>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    {section.text}
                  </p>
                </div>
                
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={section.image}
                    alt={section.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-white/10 -z-10" />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Features List */}
        <section className="py-16 md:py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-12 text-center">
              {language === 'de' ? 'Unsere Leistungen im Überblick' : 'Our Services at a Glance'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {t.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
              {t.cta}
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
              {t.ctaText}
            </p>
            <Link 
              to="/#contact"
              className="btn-primary inline-flex items-center space-x-2 group"
              data-testid="webdesign-cta"
            >
              <span>{language === 'de' ? 'Kontakt aufnehmen' : 'Get in Touch'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default WebdesignPage;
