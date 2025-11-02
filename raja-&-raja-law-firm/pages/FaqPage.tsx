
import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';
import { useLocalization } from '../hooks/useLocalization';
import { faqs } from '../constants/faq';
import { FAQItem } from '../types';

const FaqItemComponent: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  const { tb, language } = useLocalization();
  return (
    <div className="border-b border-gray-200 dark:border-gold/20">
      <button
        className="w-full flex justify-between items-center text-left rtl:text-right py-5 px-6 focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-navy-blue dark:text-white">{tb(item.question)}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="p-6 pt-0 text-gray-700 dark:text-gray-200">{tb(item.answer)}</div>
      </div>
    </div>
  );
};

const FaqPage: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <PageContainer titleKey="faq_title">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-navy-blue shadow-lg dark:shadow-gold/10 rounded-lg">
          {faqs.map((faq) => (
            <FaqItemComponent
              key={faq.id}
              item={faq}
              isOpen={openFaqId === faq.id}
              onClick={() => toggleFaq(faq.id)}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  );
};

export default FaqPage;