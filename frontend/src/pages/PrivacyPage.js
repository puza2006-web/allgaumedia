import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPage = () => {
  const { language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>Datenschutz | Allgau Media</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-[#050505] pt-32 pb-24" data-testid="privacy-page">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-12">
            {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
          </h1>

          <div className="prose prose-invert prose-zinc max-w-none">
            <div className="space-y-8 text-zinc-400 leading-relaxed">
              <section>
                <h2 className="text-2xl font-medium text-white mb-4">
                  {language === 'de' ? '1. Datenschutz auf einen Blick' : '1. Privacy at a Glance'}
                </h2>
                <p>
                  {language === 'de' 
                    ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.'
                    : 'The following notes provide a simple overview of what happens to your personal data when you visit this website.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-white mb-4">
                  {language === 'de' ? '2. Datenerfassung auf dieser Website' : '2. Data Collection on This Website'}
                </h2>
                <h3 className="text-xl text-white mb-2">
                  {language === 'de' ? 'Kontaktformular' : 'Contact Form'}
                </h3>
                <p>
                  {language === 'de'
                    ? 'Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.'
                    : 'When you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provided, will be stored by us for the purpose of processing the inquiry and for possible follow-up questions.'}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-medium text-white mb-4">
                  {language === 'de' ? '3. Verantwortliche Stelle' : '3. Responsible Party'}
                </h2>
                <p>
                  Allgau Media<br />
                  Goethestraße 13a<br />
                  87740 Buxheim<br />
                  {language === 'de' ? 'Telefon' : 'Phone'}: 08331 9966090<br />
                  E-Mail: info@allgaumedia.de
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPage;
