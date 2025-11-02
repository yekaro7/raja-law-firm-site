import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import { useLocalization } from '../hooks/useLocalization';
import { services } from '../constants/services';
import { Service, Page } from '../types';

const ServiceItem: React.FC<{ service: Service; isOpen: boolean; onClick: () => void; onNavigate: (page: Page) => void; }> = ({ service, isOpen, onClick, onNavigate }) => {
  const { tb, t, language } = useLocalization();
  return (
    <div className="border-b border-gray-200 dark:border-gold/20">
      <button
        className="w-full flex justify-between items-center text-left rtl:text-right py-5 px-6 focus:outline-none"
        onClick={onClick}
      >
        <span className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-semibold text-navy-blue dark:text-white`}>
          {tb(service.title)}
        </span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="p-6 pt-0 text-gray-700 dark:text-gray-200 leading-relaxed">
          <p>{tb(service.description)}</p>
           <button 
                onClick={() => onNavigate('paidConsultation')}
                className="mt-6 bg-gold text-navy-blue font-bold py-2 px-6 rounded-lg text-md hover:bg-gold/90 transition-all duration-300 transform hover:scale-105"
            >
                {t('nav_booking')}
            </button>
        </div>
      </div>
    </div>
  );
};

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [openServiceId, setOpenServiceId] = useState<string | null>(services[0].id);

  const toggleService = (id: string) => {
    setOpenServiceId(openServiceId === id ? null : id);
  };

  return (
    <PageContainer titleKey="services_title">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-navy-blue shadow-lg dark:shadow-gold/10 rounded-lg">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              isOpen={openServiceId === service.id}
              onClick={() => toggleService(service.id)}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default ServicesPage;