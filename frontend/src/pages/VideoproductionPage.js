import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const STUDIO_IMAGE = "https://customer-assets.emergentagent.com/job_allgau-media-preview/artifacts/ora9i7hq_pexels-photography-1850469.jpg";

const VideoproductionPage = () => {
  const { language } = useLanguage();

  const content = {
    de: {
      title: 'Professionelle Videoproduktion im Allgäu',
      subtitle: 'Wir erzählen Ihre Geschichte durch beeindruckende Videos',
      intro: 'Ob Imagefilm, Werbevideo oder Produktpräsentation – wir produzieren hochwertige Videos, die Ihre Marke zum Leben erwecken und Ihre Zielgruppe begeistern.',
      sections: [
        {
          title: 'Was wir bieten',
          text: 'Unsere Videoproduktion umfasst den gesamten Prozess von der Konzeption bis zur Auslieferung. Wir arbeiten mit modernster Ausrüstung und einem erfahrenen Team, um Videos zu erstellen, die Ihre Botschaft klar und eindrucksvoll vermitteln. Ob für Social Media, Ihre Website oder Präsentationen – wir liefern das passende Format.',
          image: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?w=800&q=80'
        },
        {
          title: 'Für wen ist das geeignet?',
          text: 'Unsere Videoproduktion richtet sich an kleine und mittelständische Unternehmen, Start-ups, lokale Geschäfte und Marken, die ihre Online-Präsenz stärken möchten. Egal ob Sie ein Restaurant, Fitnessstudio, Handwerksbetrieb oder Dienstleister sind – professionelle Videos helfen Ihnen, Vertrauen aufzubauen und neue Kunden zu gewinnen.',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
        },
        {
          title: 'Ihre Vorteile',
          text: 'Mit professionellen Videos heben Sie sich von der Konkurrenz ab. Videos erzeugen mehr Engagement als jedes andere Medium, erhöhen Ihre Sichtbarkeit in Suchmaschinen und sozialen Netzwerken und schaffen eine emotionale Verbindung zu Ihren Kunden. Investieren Sie in Qualität, die sich langfristig auszahlt.',
          image: STUDIO_IMAGE
        }
      ],
      features: [
        'Imagefilme & Unternehmensvideos',
        'Werbevideos & Commercials',
        'Produktvideos & Erklärfilme',
        'Event-Dokumentationen',
        'Social Media Content',
        'Drohnenaufnahmen'
      ],
      cta: 'Projekt besprechen',
      ctaText: 'Bereit für Ihr nächstes Videoprojekt? Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.'
    },
    en: {
      title: 'Professional Video Production in Allgäu',
      subtitle: 'We tell your story through impressive videos',
      intro: 'Whether corporate film, commercial, or product presentation – we produce high-quality videos that bring your brand to life and excite your target audience.',
      sections: [
        {
          title: 'What We Offer',
          text: 'Our video production covers the entire process from conception to delivery. We work with state-of-the-art equipment and an experienced team to create videos that convey your message clearly and impressively. Whether for social media, your website, or presentations – we deliver the right format.',
          image: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?w=800&q=80'
        },
        {
          title: 'Who Is It For?',
          text: 'Our video production is aimed at small and medium-sized businesses, start-ups, local shops, and brands looking to strengthen their online presence. Whether you run a restaurant, fitness studio, craft business, or service company – professional videos help you build trust and win new customers.',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
        },
        {
          title: 'Your Benefits',
          text: 'Professional videos help you stand out from the competition. Videos generate more engagement than any other medium, increase your visibility in search engines and social networks, and create an emotional connection with your customers. Invest in quality that pays off in the long run.',
          image: STUDIO_IMAGE
        }
      ],
      features: [
        'Corporate Films & Company Videos',
        'Commercials & Advertisements',
        'Product Videos & Explainers',
        'Event Documentations',
        'Social Media Content',
        'Drone Footage'
      ],
      cta: 'Discuss Your Project',
      ctaText: 'Ready for your next video project? Contact us for a free consultation.'
    },
    sr: {
      title: 'Profesionalna Video Produkcija u Allgäu',
      subtitle: 'Ispričamo vašu priču kroz impresivne video sadržaje',
      intro: 'Bilo da se radi o korporativnom filmu, reklami ili prezentaciji proizvoda – proizvodimo kvalitetne video sadržaje koji oživljavaju vaš brend i oduševljavaju vašu ciljnu publiku.',
      sections: [
        {
          title: 'Šta nudimo',
          text: 'Naša video produkcija pokriva cijeli proces od koncepcije do isporuke. Radimo sa najmodernijom opremom i iskusnim timom kako bismo kreirali video sadržaje koji jasno i impresivno prenose vašu poruku. Bilo za društvene mreže, vašu web stranicu ili prezentacije – isporučujemo pravi format.',
          image: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?w=800&q=80'
        },
        {
          title: 'Za koga je namijenjeno?',
          text: 'Naša video produkcija je namijenjena malim i srednjim preduzećima, startupima, lokalnim prodavnicama i brendovima koji žele ojačati svoju online prisutnost. Bilo da vodite restoran, fitness studio, zanatsku radnju ili uslužnu firmu – profesionalni video sadržaji vam pomažu da izgradite povjerenje i pridobijete nove klijente.',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
        },
        {
          title: 'Vaše prednosti',
          text: 'Profesionalni video sadržaji vam pomažu da se izdvojite od konkurencije. Video generiše više angažmana od bilo kog drugog medija, povećava vašu vidljivost na pretraživačima i društvenim mrežama i stvara emocionalnu vezu sa vašim klijentima. Investirajte u kvalitet koji se dugoročno isplati.',
          image: STUDIO_IMAGE
        }
      ],
      features: [
        'Korporativni filmovi',
        'Reklamni spotovi',
        'Video proizvoda i objašnjenja',
        'Dokumentacije događaja',
        'Sadržaj za društvene mreže',
        'Snimci dronom'
      ],
      cta: 'Razgovarajmo o projektu',
      ctaText: 'Spremni za vaš sljedeći video projekat? Kontaktirajte nas za besplatne konsultacije.'
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

      <main data-testid="videoproduction-page">
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
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
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
            <img src={STUDIO_IMAGE} alt="" className="w-full h-full object-cover" />
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
              data-testid="videoproduction-cta"
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

export default VideoproductionPage;
