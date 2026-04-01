import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LOGO_WHITE = "https://customer-assets.emergentagent.com/job_d0828124-8795-483a-ac40-b8b706fba433/artifacts/djol97cf_LOGO%20Allgau%20Media.png";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/10" data-testid="footer">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img 
              src={LOGO_WHITE} 
              alt="Allgau Media" 
              className="h-10 mb-6"
              data-testid="footer-logo"
            />
            <p className="text-zinc-400 max-w-md mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">
              {t('footer.services')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/services#videoproduction" 
                  className="text-zinc-400 hover:text-white transition-colors"
                  data-testid="footer-link-videoproduction"
                >
                  {t('services.videoproduction.title')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#videoediting" 
                  className="text-zinc-400 hover:text-white transition-colors"
                  data-testid="footer-link-videoediting"
                >
                  {t('services.videoediting.title')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#webdesign" 
                  className="text-zinc-400 hover:text-white transition-colors"
                  data-testid="footer-link-webdesign"
                >
                  {t('services.webdesign.title')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#hosting" 
                  className="text-zinc-400 hover:text-white transition-colors"
                  data-testid="footer-link-hosting"
                >
                  {t('services.hosting.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-zinc-500 mt-0.5 flex-shrink-0" />
                <span className="text-zinc-400">
                  Goethestraße 13a<br />
                  87740 Buxheim
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                <a 
                  href="tel:+4983319966090" 
                  className="text-zinc-400 hover:text-white transition-colors"
                  data-testid="footer-phone"
                >
                  08331 9966090
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                <a 
                  href="mailto:info@allgaumedia.de" 
                  className="text-zinc-400 hover:text-white transition-colors"
                  data-testid="footer-email"
                >
                  info@allgaumedia.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-zinc-500 text-sm" data-testid="footer-copyright">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/privacy" 
              className="text-zinc-500 hover:text-white transition-colors text-sm"
              data-testid="footer-privacy-link"
            >
              {t('footer.privacy')}
            </Link>
            <Link 
              to="/imprint" 
              className="text-zinc-500 hover:text-white transition-colors text-sm"
              data-testid="footer-imprint-link"
            >
              {t('footer.imprint')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
