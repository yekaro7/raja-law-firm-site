
import React from 'react';
import PageContainer from '../components/PageContainer';
import { useLocalization } from '../hooks/useLocalization';

const ContactPage: React.FC = () => {
  const { t, language } = useLocalization();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(language === 'en' ? 'Thank you for your message! We will get back to you shortly.' : 'آپ کے پیغام کا شکریہ! ہم جلد ہی آپ سے رابطہ کریں گے۔');
  };

  return (
    <PageContainer titleKey="contact_title" subtitleKey="contact_subtitle">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white dark:bg-navy-blue p-8 rounded-lg shadow-md dark:shadow-gold/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('form_name')}</label>
                <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold dark:bg-charcoal/50 dark:border-gray-600 dark:text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('form_email')}</label>
                <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold dark:bg-charcoal/50 dark:border-gray-600 dark:text-white" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('form_subject')}</label>
              <input type="text" id="subject" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold dark:bg-charcoal/50 dark:border-gray-600 dark:text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('form_message')}</label>
              <textarea id="message" rows={5} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold dark:bg-charcoal/50 dark:border-gray-600 dark:text-white"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-gold text-white py-3 px-6 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                {t('form_submit')}
              </button>
            </div>
          </form>
        </div>
        
        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-navy-blue p-8 rounded-lg shadow-md dark:shadow-gold/10">
            <h3 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl font-bold text-navy-blue dark:text-white mb-4`}>{t('contact_info')}</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p><strong>{t('our_office')}:</strong> 123 Main Boulevard, Gulberg, Lahore, Pakistan</p>
              <p><strong>Email:</strong> contact@rajalaw.pk</p>
              <p><strong>Phone:</strong> +92 300 1234567</p>
            </div>
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block w-full text-center bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors">
              {t('hero_whatsapp')}
            </a>
          </div>
          <div className="rounded-lg shadow-md dark:shadow-gold/10 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435521.6496468725!2d74.05419998185592!3d31.48263522525139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1678886478912!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Raja & Raja Law Firm Location"
              className="dark:grayscale dark:invert"
            ></iframe>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ContactPage;