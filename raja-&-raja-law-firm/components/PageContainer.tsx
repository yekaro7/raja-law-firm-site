
import React from 'react';
import { useLocalization } from '../hooks/useLocalization';

interface PageContainerProps {
  titleKey: keyof typeof import('../constants/content').content;
  subtitleKey?: keyof typeof import('../constants/content').content;
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ titleKey, subtitleKey, children }) => {
  const { t, language } = useLocalization();

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 fade-in">
      <div className="text-center mb-12">
        <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-4xl md:text-5xl font-bold text-navy-blue dark:text-white`}>
          {t(titleKey)}
        </h1>
        {subtitleKey && (
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t(subtitleKey)}
          </p>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PageContainer;