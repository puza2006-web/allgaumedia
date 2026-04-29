import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import axios from 'axios';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post('/api/contact', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service_interest: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 md:py-32 bg-[#050505]"
      data-testid="contact-section"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 block"
            data-testid="contact-badge"
          >
            {t('contact.badge')}
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4"
            data-testid="contact-title"
          >
            {t('contact.title')}
          </h2>
          <p 
            className="text-zinc-400 max-w-2xl mx-auto"
            data-testid="contact-subtitle"
          >
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name')}
                  required
                  className="input-dark"
                  data-testid="contact-input-name"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email')}
                  required
                  className="input-dark"
                  data-testid="contact-input-email"
                />
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.form.phone')}
                  className="input-dark"
                  data-testid="contact-input-phone"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('contact.form.company')}
                  className="input-dark"
                  data-testid="contact-input-company"
                />
              </div>

              {/* Service Interest */}
              <div>
                <select
                  name="service_interest"
                  value={formData.service_interest}
                  onChange={handleChange}
                  className="input-dark appearance-none cursor-pointer"
                  data-testid="contact-select-service"
                >
                  <option value="">{t('contact.form.serviceOptions.select')}</option>
                  <option value="videoproduction">{t('contact.form.serviceOptions.videoproduction')}</option>
                  <option value="videoediting">{t('contact.form.serviceOptions.videoediting')}</option>
                  <option value="webdesign">{t('contact.form.serviceOptions.webdesign')}</option>
                  <option value="hosting">{t('contact.form.serviceOptions.hosting')}</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message')}
                  required
                  rows={5}
                  className="input-dark resize-none"
                  data-testid="contact-input-message"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="contact-submit-button"
              >
                {isSubmitting ? (
                  <span>{t('contact.form.sending')}</span>
                ) : submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>{t('contact.form.success')}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t('contact.form.submit')}</span>
                  </>
                )}
              </button>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center" data-testid="contact-error-message">
                  {t('contact.form.error')}
                </p>
              )}
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4" data-testid="contact-info-address">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{t('contact.info.address')}</h4>
                  <p className="text-zinc-400">
                    Allgau Media - Sladjana Puzigaca<br />
                    Goethestraße 13a<br />
                    87740 Buxheim
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="contact-info-phone">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{t('contact.info.phone')}</h4>
                  <a 
                    href="tel:+4983319966090" 
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    08331 9966090
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4" data-testid="contact-info-email">
                <div className="w-12 h-12 flex items-center justify-center bg-white/5 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">{t('contact.info.email')}</h4>
                  <a 
                    href="mailto:info@allgaumedia.de" 
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    info@allgaumedia.de
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div 
              className="aspect-video bg-zinc-900 border border-white/10 overflow-hidden"
              data-testid="contact-map"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.123!2d10.1366!3d48.0283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c7e5b6b8b8b8b%3A0x1234567890abcdef!2sGoethestra%C3%9Fe%2013a%2C%2087740%20Buxheim!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Allgau Media Location"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;