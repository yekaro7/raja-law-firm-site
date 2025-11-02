
import React from 'react';
import PageContainer from '../components/PageContainer';
import { useLocalization } from '../hooks/useLocalization';

const AboutPage: React.FC = () => {
  const { t, language } = useLocalization();

  return (
    <PageContainer titleKey="nav_about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className={`${language === 'ur' ? 'md:order-2' : ''}`}>
          <img
            src="https://picsum.photos/seed/lawfirm/600/400"
            alt="Raja & Raja Law Firm Office"
            className="rounded-lg shadow-2xl dark:shadow-gold/20 w-full"
          />
        </div>
        <div className={`${language === 'ur' ? 'md:order-1' : ''} text-lg text-gray-700 dark:text-gray-200 space-y-6`}>
          <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-3xl font-bold text-navy-blue dark:text-white`}>
            {t('about_title')}
          </h2>
          <p>{t('about_p1')}</p>
          <p>{t('about_p2')}</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;