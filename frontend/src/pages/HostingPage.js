import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const HostingPage = () => {
  const { language } = useLanguage();

  const content = {
    de: {
      title: 'Zuverlässiges Hosting & Domains',
      subtitle: 'Die technische Grundlage für Ihren Online-Erfolg',
      intro: 'Wir kümmern uns um die technische Infrastruktur Ihrer Website: schnelles Hosting, sichere Domains und professioneller Support. Damit Sie sich auf Ihr Geschäft konzentrieren können.',
      sections: [
        {
          title: 'Was wir bieten',
          text: 'Unser Hosting-Service umfasst leistungsstarke Server, SSL-Zertifikate, regelmäßige Backups und proaktive Wartung. Wir übernehmen die komplette technische Betreuung Ihrer Website: Updates, Sicherheit und Performance-Optimierung. Dazu bieten wir Domainregistrierung und E-Mail-Hosting aus einer Hand.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
        },
        {
          title: 'Für wen ist das geeignet?',
          text: 'Unser Hosting eignet sich für alle, die eine zuverlässige und sichere Online-Präsenz benötigen. Besonders für Unternehmen, die keine eigene IT-Abteilung haben und sich nicht mit technischen Details befassen möchten. Wir sind Ihr Partner für alles Technische im Hintergrund.',
          image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80'
        },
        {
          title: 'Ihre Vorteile',
          text: 'Mit unserem Hosting haben Sie einen Ansprechpartner für alle technischen Fragen. Keine Ausfälle, keine Sicherheitslücken, keine Kopfschmerzen. Wir garantieren schnelle Ladezeiten, höchste Verfügbarkeit und sofortigen Support bei Problemen. Ihr Business läuft – wir kümmern uns um den Rest.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
        }
      ],
      features: [
        'Schnelles SSD-Hosting',
        'SSL-Zertifikate inklusive',
        'Tägliche Backups',
        'Domainregistrierung',
        'E-Mail-Hosting',
        '24/7 Überwachung'
      ],
      cta: 'Hosting anfragen',
      ctaText: 'Benötigen Sie zuverlässiges Hosting? Wir haben die passende Lösung für Sie.'
    },
    en: {
      title: 'Reliable Hosting & Domains',
      subtitle: 'The technical foundation for your online success',
      intro: 'We take care of your website\'s technical infrastructure: fast hosting, secure domains, and professional support. So you can focus on your business.',
      sections: [
        {
          title: 'What We Offer',
          text: 'Our hosting service includes powerful servers, SSL certificates, regular backups, and proactive maintenance. We handle the complete technical support of your website: updates, security, and performance optimization. Additionally, we offer domain registration and email hosting from a single source.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
        },
        {
          title: 'Who Is It For?',
          text: 'Our hosting is suitable for anyone who needs a reliable and secure online presence. Especially for companies that don\'t have their own IT department and don\'t want to deal with technical details. We\'re your partner for everything technical behind the scenes.',
          image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80'
        },
        {
          title: 'Your Benefits',
          text: 'With our hosting, you have one contact for all technical questions. No outages, no security gaps, no headaches. We guarantee fast loading times, maximum availability, and immediate support when problems arise. Your business runs – we take care of the rest.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
        }
      ],
      features: [
        'Fast SSD Hosting',
        'SSL Certificates Included',
        'Daily Backups',
        'Domain Registration',
        'Email Hosting',
        '24/7 Monitoring'
      ],
      cta: 'Request Hosting',
      ctaText: 'Need reliable hosting? We have the right solution for you.'
    },
    sr: {
      title: 'Pouzdani Hosting & Domene',
      subtitle: 'Tehnička osnova za vaš online uspjeh',
      intro: 'Brinemo se o tehničkoj infrastrukturi vaše web stranice: brzi hosting, sigurne domene i profesionalna podrška. Tako da se vi možete fokusirati na svoje poslovanje.',
      sections: [
        {
          title: 'Šta nudimo',
          text: 'Naša hosting usluga uključuje moćne servere, SSL certifikate, redovne backup-e i proaktivno održavanje. Preuzimamo kompletnu tehničku brigu o vašoj web stranici: ažuriranja, sigurnost i optimizaciju performansi. Dodatno nudimo registraciju domena i email hosting iz jednog izvora.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80'
        },
        {
          title: 'Za koga je namijenjeno?',
          text: 'Naš hosting je pogodan za sve koji trebaju pouzdanu i sigurnu online prisutnost. Posebno za firme koje nemaju vlastiti IT odjel i ne žele se baviti tehničkim detaljima. Mi smo vaš partner za sve tehničko u pozadini.',
          image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80'
        },
        {
          title: 'Vaše prednosti',
          text: 'Sa našim hostingom imate jedan kontakt za sva tehnička pitanja. Bez prekida, bez sigurnosnih propusta, bez glavobolja. Garantujemo brzo učitavanje, maksimalnu dostupnost i trenutnu podršku kada se pojave problemi. Vaš biznis radi – mi se brinemo o ostatku.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
        }
      ],
      features: [
        'Brzi SSD Hosting',
        'SSL certifikati uključeni',
        'Dnevni backup-i',
        'Registracija domena',
        'Email Hosting',
        '24/7 Monitoring'
      ],
      cta: 'Zatražite hosting',
      ctaText: 'Trebate pouzdan hosting? Imamo pravo rješenje za vas.'
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

      <main data-testid="hosting-page">
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
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" alt="" className="w-full h-full object-cover" />
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
              data-testid="hosting-cta"
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

export default HostingPage;
