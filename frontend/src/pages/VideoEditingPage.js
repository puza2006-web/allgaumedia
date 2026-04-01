import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import PageHero from '../components/PageHero';

const VideoEditingPage = () => {
  const { language } = useLanguage();

  const content = {
    de: {
      title: 'Professionelles Video Editing',
      subtitle: 'Aus Rohmaterial wird ein Meisterwerk',
      intro: 'Wir verwandeln Ihr Videomaterial in polierte, professionelle Inhalte. Von einfachen Schnitten bis hin zu komplexen Motion Graphics – wir bringen Ihre Vision zum Leben.',
      sections: [
        {
          title: 'Was wir bieten',
          text: 'Unser Video Editing Service umfasst professionellen Schnitt, Color Grading, Audiobearbeitung und Motion Graphics. Wir arbeiten mit den neuesten Tools wie DaVinci Resolve, Adobe Premiere Pro und After Effects, um höchste Qualität zu garantieren. Ob Sie bestehendes Material haben oder wir es für Sie drehen – wir liefern das perfekte Endergebnis.',
          image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80'
        },
        {
          title: 'Für wen ist das geeignet?',
          text: 'Unser Editing Service ist ideal für Content Creator, Unternehmen mit eigenem Videomaterial, Marketing-Abteilungen und alle, die professionelle Postproduktion benötigen. Wenn Sie Videos drehen aber keine Zeit oder Expertise für die Bearbeitung haben, sind wir Ihr Partner.',
          image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80'
        },
        {
          title: 'Ihre Vorteile',
          text: 'Professionelles Editing macht den Unterschied zwischen Amateur und Profi. Wir optimieren Ihr Material für maximale Wirkung: perfekte Schnitte, stimmungsvolle Farbkorrektur, klarer Sound und ansprechende Grafiken. Das Ergebnis: Videos, die Ihre Zuschauer fesseln und Ihre Botschaft verstärken.',
          image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80'
        }
      ],
      features: [
        'Professioneller Videoschnitt',
        'Color Grading & Farbkorrektur',
        'Motion Graphics & Animation',
        'Sound Design & Audiobearbeitung',
        'Untertitel & Texte',
        'Format-Anpassung für alle Plattformen'
      ],
      cta: 'Projekt besprechen',
      ctaText: 'Haben Sie Videomaterial, das bearbeitet werden soll? Wir machen mehr daraus!'
    },
    en: {
      title: 'Professional Video Editing',
      subtitle: 'Turning raw footage into a masterpiece',
      intro: 'We transform your video material into polished, professional content. From simple cuts to complex motion graphics – we bring your vision to life.',
      sections: [
        {
          title: 'What We Offer',
          text: 'Our video editing service includes professional cutting, color grading, audio processing, and motion graphics. We work with the latest tools like DaVinci Resolve, Adobe Premiere Pro, and After Effects to guarantee the highest quality. Whether you have existing footage or we shoot it for you – we deliver the perfect end result.',
          image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80'
        },
        {
          title: 'Who Is It For?',
          text: 'Our editing service is ideal for content creators, companies with their own video material, marketing departments, and anyone who needs professional post-production. If you shoot videos but don\'t have the time or expertise for editing, we\'re your partner.',
          image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80'
        },
        {
          title: 'Your Benefits',
          text: 'Professional editing makes the difference between amateur and pro. We optimize your material for maximum impact: perfect cuts, mood-setting color correction, clear sound, and appealing graphics. The result: videos that captivate your viewers and amplify your message.',
          image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80'
        }
      ],
      features: [
        'Professional Video Cutting',
        'Color Grading & Correction',
        'Motion Graphics & Animation',
        'Sound Design & Audio Processing',
        'Subtitles & Text Overlays',
        'Format Adaptation for All Platforms'
      ],
      cta: 'Discuss Your Project',
      ctaText: 'Have video material that needs editing? We\'ll make more out of it!'
    },
    sr: {
      title: 'Profesionalna Video Montaža',
      subtitle: 'Od sirovog materijala do remek-djela',
      intro: 'Pretvaramo vaš video materijal u uglađen, profesionalni sadržaj. Od jednostavnih rezova do kompleksne animacije – oživljavamo vašu viziju.',
      sections: [
        {
          title: 'Šta nudimo',
          text: 'Naša usluga video montaže uključuje profesionalno rezanje, korekciju boja, obradu zvuka i motion graphics. Radimo sa najnovijim alatima kao što su DaVinci Resolve, Adobe Premiere Pro i After Effects kako bismo garantovali najviši kvalitet. Bilo da imate postojeći materijal ili ga mi snimimo za vas – isporučujemo savršen krajnji rezultat.',
          image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80'
        },
        {
          title: 'Za koga je namijenjeno?',
          text: 'Naša usluga montaže je idealna za kreatore sadržaja, firme sa sopstvenim video materijalom, marketing odjele i sve koji trebaju profesionalnu postprodukciju. Ako snimate video sadržaje ali nemate vremena ili stručnosti za montažu, mi smo vaš partner.',
          image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=800&q=80'
        },
        {
          title: 'Vaše prednosti',
          text: 'Profesionalna montaža čini razliku između amatera i profesionalca. Optimizujemo vaš materijal za maksimalni uticaj: savršeni rezovi, atmosferična korekcija boja, čist zvuk i privlačna grafika. Rezultat: video sadržaji koji plene vaše gledaoce i pojačavaju vašu poruku.',
          image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80'
        }
      ],
      features: [
        'Profesionalno rezanje videa',
        'Color Grading & korekcija',
        'Motion Graphics & animacija',
        'Dizajn zvuka & obrada',
        'Titlovi & tekstualni prikazi',
        'Prilagođavanje formata za sve platforme'
      ],
      cta: 'Razgovarajmo o projektu',
      ctaText: 'Imate video materijal koji treba montirati? Mi ćemo napraviti više od toga!'
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

      <main data-testid="video-editing-page">
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
            <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80" alt="" className="w-full h-full object-cover" />
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
              data-testid="video-editing-cta"
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

export default VideoEditingPage;
