import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { Page } from '../types';
import { testimonials } from '../constants/testimonials';
import { blogPosts } from '../constants/blog';
import { services } from '../constants/services';

interface HomePageProps {
  onNavigate: (page: Page, postId?: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t, tb, language } = useLocalization();

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-navy-blue text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/justice/1600/900?grayscale&blur=2')" }}>
        <div className="bg-navy-blue/90">
          <div className="max-w-screen-xl mx-auto px-4 py-24 sm:py-32 lg:py-48 text-center">
            <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-4xl md:text-6xl font-bold text-gold`}>
              {t('hero_tagline')}
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
              {t('hero_subtitle')}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => onNavigate('paidConsultation')}
                className="bg-gold text-navy-blue font-bold py-3 px-8 rounded-lg text-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105"
              >
                {t('hero_cta_main')}
              </button>
              <button
                onClick={() => onNavigate('paidConsultation')}
                className="bg-transparent border-2 border-gold text-gold font-bold py-3 px-8 rounded-lg text-lg hover:bg-gold hover:text-navy-blue transition-colors duration-300"
              >
                {t('hero_cta_secondary')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-navy-blue">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-3xl md:text-4xl font-bold text-navy-blue dark:text-white`}>{t('why_choose_us_title')}</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t('why_choose_us_subtitle')}</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8">
              <span className="text-5xl font-bold text-gold">{t('metric_experience_value')}</span>
              <h3 className="mt-2 text-xl font-semibold text-navy-blue dark:text-white">{t('metric_experience_label')}</h3>
            </div>
            <div className="p-8">
              <span className="text-5xl font-bold text-gold">{t('metric_cases_value')}</span>
              <h3 className="mt-2 text-xl font-semibold text-navy-blue dark:text-white">{t('metric_cases_label')}</h3>
            </div>
            <div className="p-8">
              <span className="text-5xl font-bold text-gold">{t('metric_registered_value')}</span>
              <h3 className="mt-2 text-xl font-semibold text-navy-blue dark:text-white">{t('metric_registered_label')}</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Highlight */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-charcoal">
          <div className="max-w-screen-xl mx-auto px-4 text-center">
              <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-3xl md:text-4xl font-bold text-navy-blue dark:text-white`}>{t('services_title')}</h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.slice(0, 3).map((service) => (
                      <div key={service.id} className="bg-white dark:bg-navy-blue p-8 rounded-lg shadow-md dark:shadow-gold/10 hover:shadow-xl dark:hover:shadow-gold/20 transition-shadow duration-300 transform hover:-translate-y-2">
                          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gold/10 text-gold mx-auto mb-6">
                              <service.icon className="h-8 w-8" />
                          </div>
                          <h3 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white`}>{tb(service.title)}</h3>
                          <p className="mt-4 text-gray-600 dark:text-gray-300">{tb(service.description).split(' ').slice(0, 20).join(' ')}...</p>
                          <button onClick={() => onNavigate('paidConsultation')} className="mt-6 bg-gold/10 text-gold font-semibold py-2 px-4 rounded-md hover:bg-gold hover:text-white transition-colors duration-300">
                              {t('nav_booking')} &rarr;
                          </button>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Consultation Process Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-navy-blue">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-3xl md:text-4xl font-bold text-navy-blue dark:text-white`}>{t('process_title')}</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left rtl:text-right">
                <div className="p-6">
                    <h3 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white`}>{t('process_step1_title')}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{t('process_step1_desc')}</p>
                </div>
                <div className="p-6">
                    <h3 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white`}>{t('process_step2_title')}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{t('process_step2_desc')}</p>
                </div>
                <div className="p-6">
                    <h3 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white`}>{t('process_step3_title')}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{t('process_step3_desc')}</p>
                </div>
            </div>
            <button onClick={() => onNavigate('paidConsultation')} className="mt-8 bg-gold text-navy-blue font-bold py-3 px-8 rounded-lg text-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105">
                {t('hero_cta_main')}
            </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-charcoal">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-3xl md:text-4xl font-bold text-navy-blue dark:text-white`}>{t('testimonials_title')}</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial) => (
              <figure key={testimonial.id} className="bg-white dark:bg-navy-blue p-8 rounded-lg shadow-md dark:shadow-gold/10 text-center">
                <blockquote className="text-lg text-gray-700 dark:text-gray-200 italic">
                  <p>"{tb(testimonial.quote)}"</p>
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-bold text-navy-blue dark:text-white">{tb(testimonial.author)}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{tb(testimonial.company)}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
       <section className="py-16 sm:py-24 bg-white dark:bg-navy-blue">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
            <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-3xl md:text-4xl font-bold text-navy-blue dark:text-white`}>{t('blog_title')}</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="bg-white dark:bg-charcoal rounded-lg shadow-md dark:shadow-gold/10 overflow-hidden text-left rtl:text-right transform hover:-translate-y-2 transition-transform duration-300">
                        <img loading="lazy" decoding="async" className="h-56 w-full object-cover" src={post.image} alt={tb(post.title)} />
                        <div className="p-6">
                            <h3 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white`}>{tb(post.title)}</h3>
                            <p className="mt-3 text-gray-600 dark:text-gray-300">{tb(post.excerpt)}</p>
                            <button onClick={() => onNavigate('blogPost', post.id)} className="mt-6 text-gold font-semibold hover:underline">
                                {t('read_more')} &rarr;
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;