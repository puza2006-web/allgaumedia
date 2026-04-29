import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const ImprintPage = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Impressum | Allgau Media</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-[#050505] pt-32 pb-24" data-testid="imprint-page">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-12">
            {language === 'de' ? 'Impressum' : 'Imprint'}
          </h1>

          <div className="space-y-8 text-zinc-400 leading-relaxed">
            <section>
              <h2 className="text-2xl font-medium text-white mb-4">
                {language === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}
              </h2>
              <p>
                Allgau Media - Sladjana Puzigaca<br />
                Goethestraße 13a<br />
                87740 Buxheim
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-4">
                {language === 'de' ? 'Kontakt' : 'Contact'}
              </h2>
              <p>
                {language === 'de' ? 'Telefon' : 'Phone'}: 08331 9966090<br />
                E-Mail: info@allgaumedia.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-4">
                {language === 'de' ? 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV' : 'Responsible for content according to § 55 Abs. 2 RStV'}
              </h2>
              <p>
                Sladjana Puzigaca<br />
                Allgau Media<br />
                Goethestraße 13a<br />
                87740 Buxheim
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium text-white mb-4">
                {language === 'de' ? 'Haftungsausschluss' : 'Disclaimer'}
              </h2>
              <h3 className="text-xl text-white mb-2">
                {language === 'de' ? 'Haftung für Inhalte' : 'Liability for Content'}
              </h3>
              <p>
                {language === 'de'
                  ? 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.'
                  : 'The contents of our pages have been created with the greatest care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.'}
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default ImprintPage;
