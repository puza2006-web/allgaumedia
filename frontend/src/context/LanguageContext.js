import React, { createContext, useContext, useState, useCallback } from 'react';

const translations = {
  de: {
    // Navigation
    nav: {
      home: 'Startseite',
      about: 'Über uns',
      services: 'Leistungen',
      portfolio: 'Portfolio',
      contact: 'Kontakt',
      cta: 'Projekt starten'
    },
    // Hero
    hero: {
      headline: 'Professionelle Videoproduktion & Webdesign im Allgäu',
      subheadline: 'Wir erstellen Videos, Websites und digitale Lösungen für Ihr Unternehmen im Allgäu und darüber hinaus.',
      ctaPrimary: 'Kontakt aufnehmen',
      ctaSecondary: 'Portfolio ansehen'
    },
    // About
    about: {
      badge: 'Über uns',
      title: 'Ihr Partner für Videoproduktion im Allgäu',
      description1: 'Allgau Media ist eine kreative Agentur, spezialisiert auf professionelle Videoproduktion, Videobearbeitung und die Erstellung moderner Websites für Unternehmen und Marken in der gesamten Allgäu-Region.',
      description2: 'Wir arbeiten mit kleinen und mittelständischen Unternehmen, die sich durch hochwertigen visuellen Content auf dem Markt abheben möchten. Wir kombinieren technisches Know-how, Erfahrung und einen kreativen Ansatz, um Ihre Geschichte authentisch und wirkungsvoll zu erzählen.',
      description3: 'Ob Sie ein Werbevideo, Content für Social Media oder eine komplette Webpräsentation benötigen – wir begleiten Sie durch den gesamten Prozess, von der Idee und Planung bis zur finalen Umsetzung.',
      description4: 'Unser Ziel ist einfach: Ihr Business soll professionell und modern aussehen und einen starken ersten Eindruck bei Ihren Kunden hinterlassen.'
    },
    // Services
    services: {
      badge: 'Unsere Leistungen',
      title: 'Videoproduktion & Webdesign aus dem Allgäu',
      subtitle: 'Umfassende digitale Lösungen für Ihr Unternehmen',
      videoproduction: {
        title: 'Videoproduktion',
        description: 'Professionelle Werbevideos, Imagefilme und Business Videos für Ihr Unternehmen. Wir erzählen Ihre Geschichte visuell ansprechend und wirkungsvoll.',
        features: ['Werbevideos', 'Imagefilme', 'Produktvideos', 'Event-Dokumentation']
      },
      videoediting: {
        title: 'Video Editing',
        description: 'Professioneller Videoschnitt und Postproduktion. Wir verwandeln Ihr Rohmaterial in polierte, eindrucksvolle Videos.',
        features: ['Professioneller Schnitt', 'Color Grading', 'Motion Graphics', 'Sound Design']
      },
      webdesign: {
        title: 'Webdesign & Entwicklung',
        description: 'Moderne, responsive Websites die konvertieren. Vom Design bis zur technischen Umsetzung – alles aus einer Hand.',
        features: ['Responsive Design', 'SEO-Optimierung', 'E-Commerce', 'CMS-Integration']
      },
      hosting: {
        title: 'Hosting & Domains',
        description: 'Zuverlässiges Webhosting und Domain-Management. Wir kümmern uns um die technische Infrastruktur Ihrer Online-Präsenz.',
        features: ['Schnelles Hosting', 'SSL-Zertifikate', 'Domainregistrierung', 'E-Mail-Hosting']
      },
      cta: 'Mehr erfahren'
    },
    // Portfolio
    portfolio: {
      badge: 'Portfolio',
      title: 'Unsere Arbeiten',
      subtitle: 'Ausgewählte Projekte aus den Bereichen Videoproduktion und Webdesign',
      categories: {
        all: 'Alle',
        fitness: 'Fitness',
        business: 'Business',
        socialMedia: 'Social Media'
      },
      viewProject: 'Projekt ansehen'
    },
    // Why Choose Us
    whyUs: {
      badge: 'Warum Allgau Media',
      title: 'Ihr Vorteil mit uns',
      subtitle: 'Was uns von anderen unterscheidet',
      items: {
        fast: {
          title: 'Schnelle Lieferung',
          description: 'Effiziente Workflows garantieren termingerechte Fertigstellung Ihrer Projekte.'
        },
        quality: {
          title: 'Höchste Qualität',
          description: 'Modernste Ausrüstung und kreatives Know-how für erstklassige Ergebnisse.'
        },
        modern: {
          title: 'Moderne Umsetzung',
          description: 'Aktuelle Technologien und Trends für zeitgemäße digitale Lösungen.'
        },
        support: {
          title: 'Zuverlässiger Support',
          description: 'Persönliche Betreuung und schnelle Reaktionszeiten – auch nach Projektabschluss.'
        }
      }
    },
    // Contact
    contact: {
      badge: 'Kontakt',
      title: 'Starten Sie Ihr Projekt',
      subtitle: 'Wir freuen uns auf Ihre Nachricht. Erzählen Sie uns von Ihrem Projekt und wir melden uns zeitnah bei Ihnen.',
      form: {
        name: 'Ihr Name',
        email: 'E-Mail Adresse',
        phone: 'Telefon (optional)',
        company: 'Unternehmen (optional)',
        service: 'Interessierte Leistung',
        serviceOptions: {
          select: 'Bitte wählen...',
          videoproduction: 'Videoproduktion',
          videoediting: 'Video Editing',
          webdesign: 'Webdesign & Entwicklung',
          hosting: 'Hosting & Domains'
        },
        message: 'Ihre Nachricht',
        submit: 'Nachricht senden',
        sending: 'Wird gesendet...',
        success: 'Vielen Dank! Wir melden uns in Kürze bei Ihnen.',
        error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.'
      },
      info: {
        address: 'Adresse',
        phone: 'Telefon',
        email: 'E-Mail'
      }
    },
    // Footer
    footer: {
      description: 'Professionelle Videoproduktion, Video Editing und Webdesign in Memmingen und dem Allgäu.',
      services: 'Leistungen',
      contact: 'Kontakt',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      imprint: 'Impressum',
      copyright: '© 2025 Allgau Media. Alle Rechte vorbehalten.'
    },
    // Admin
    admin: {
      title: 'Admin Dashboard',
      contacts: 'Kontaktanfragen',
      total: 'Gesamt',
      unread: 'Ungelesen',
      read: 'Gelesen',
      markRead: 'Als gelesen markieren',
      delete: 'Löschen',
      noContacts: 'Keine Kontaktanfragen vorhanden.',
      confirmDelete: 'Möchten Sie diese Anfrage wirklich löschen?'
    }
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      cta: 'Start Project'
    },
    // Hero
    hero: {
      headline: 'Professional Video Production & Web Design in Allgäu',
      subheadline: 'We create videos, websites, and digital solutions for your business in the Allgäu region and beyond.',
      ctaPrimary: 'Get in Touch',
      ctaSecondary: 'View Portfolio'
    },
    // About
    about: {
      badge: 'About Us',
      title: 'Your Partner for Video Production in Allgäu',
      description1: 'Allgau Media is a creative agency specialized in professional video production, video editing, and creating modern websites for companies and brands throughout the Allgäu region.',
      description2: 'We work with small and medium-sized businesses that want to stand out in the market through quality visual content. We combine technical knowledge, experience, and a creative approach to tell your story in an authentic and effective way.',
      description3: 'Whether you need a promotional video, social media content, or a complete web presentation – we accompany you through the entire process, from idea and planning to final realization.',
      description4: 'Our goal is simple: to make your business look professional, modern, and leave a strong first impression on your clients.'
    },
    // Services
    services: {
      badge: 'Our Services',
      title: 'Video Production & Web Design from Allgäu',
      subtitle: 'Comprehensive digital solutions for your business',
      videoproduction: {
        title: 'Video Production',
        description: 'Professional commercials, corporate films, and business videos for your company. We tell your story visually appealing and effectively.',
        features: ['Commercials', 'Corporate Films', 'Product Videos', 'Event Documentation']
      },
      videoediting: {
        title: 'Video Editing',
        description: 'Professional video editing and post-production. We transform your raw footage into polished, impressive videos.',
        features: ['Professional Editing', 'Color Grading', 'Motion Graphics', 'Sound Design']
      },
      webdesign: {
        title: 'Web Design & Development',
        description: 'Modern, responsive websites that convert. From design to technical implementation – everything from one source.',
        features: ['Responsive Design', 'SEO Optimization', 'E-Commerce', 'CMS Integration']
      },
      hosting: {
        title: 'Hosting & Domains',
        description: 'Reliable web hosting and domain management. We take care of the technical infrastructure of your online presence.',
        features: ['Fast Hosting', 'SSL Certificates', 'Domain Registration', 'Email Hosting']
      },
      cta: 'Learn More'
    },
    // Portfolio
    portfolio: {
      badge: 'Portfolio',
      title: 'Our Work',
      subtitle: 'Selected projects from video production and web design',
      categories: {
        all: 'All',
        fitness: 'Fitness',
        business: 'Business',
        socialMedia: 'Social Media'
      },
      viewProject: 'View Project'
    },
    // Why Choose Us
    whyUs: {
      badge: 'Why Allgau Media',
      title: 'Your Advantage with Us',
      subtitle: 'What sets us apart from others',
      items: {
        fast: {
          title: 'Fast Delivery',
          description: 'Efficient workflows guarantee on-time completion of your projects.'
        },
        quality: {
          title: 'Highest Quality',
          description: 'State-of-the-art equipment and creative know-how for first-class results.'
        },
        modern: {
          title: 'Modern Implementation',
          description: 'Current technologies and trends for contemporary digital solutions.'
        },
        support: {
          title: 'Reliable Support',
          description: 'Personal care and fast response times – even after project completion.'
        }
      }
    },
    // Contact
    contact: {
      badge: 'Contact',
      title: 'Start Your Project',
      subtitle: 'We look forward to hearing from you. Tell us about your project and we will get back to you shortly.',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone (optional)',
        company: 'Company (optional)',
        service: 'Service of Interest',
        serviceOptions: {
          select: 'Please select...',
          videoproduction: 'Video Production',
          videoediting: 'Video Editing',
          webdesign: 'Web Design & Development',
          hosting: 'Hosting & Domains'
        },
        message: 'Your Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Thank you! We will get back to you shortly.',
        error: 'Something went wrong. Please try again.'
      },
      info: {
        address: 'Address',
        phone: 'Phone',
        email: 'Email'
      }
    },
    // Footer
    footer: {
      description: 'Professional video production, video editing, and web design in Memmingen and the Allgäu region.',
      services: 'Services',
      contact: 'Contact',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      imprint: 'Imprint',
      copyright: '© 2025 Allgau Media. All rights reserved.'
    },
    // Admin
    admin: {
      title: 'Admin Dashboard',
      contacts: 'Contact Requests',
      total: 'Total',
      unread: 'Unread',
      read: 'Read',
      markRead: 'Mark as Read',
      delete: 'Delete',
      noContacts: 'No contact requests available.',
      confirmDelete: 'Are you sure you want to delete this request?'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('de');

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  }, []);

  const t = useCallback((key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
