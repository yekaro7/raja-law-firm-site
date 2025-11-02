import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLocalization } from '../../hooks/useLocalization';

const PortalCaseStatus: React.FC = () => {
    const { user } = useAuth();
    const { t, tb, language } = useLocalization();

    if (!user) return null;
    const { timeline, title } = user.caseDetails;

    return (
        <div className="p-4 sm:p-6 lg:p-8 fade-in">
            <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl sm:text-3xl font-bold text-navy-blue dark:text-white mb-2`}>
                {t('case_status_title')}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">{tb(title)}</p>

            <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow-md dark:shadow-gold/10">
                <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white mb-6`}>
                    {t('case_timeline_title')}
                </h2>
                <div className="relative">
                    {/* The vertical line */}
                    <div className={`absolute ${language === 'en' ? 'left-4' : 'right-4'} h-full border-l-2 border-gray-200 dark:border-gold/20`}></div>

                    <ul className="space-y-8">
                        {timeline.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center z-10 ${item.completed ? 'bg-gold text-navy-blue' : 'bg-gray-300 dark:bg-charcoal'}`}>
                                    {item.completed ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <div className="w-3 h-3 bg-white dark:bg-gray-400 rounded-full"></div>
                                    )}
                                </div>
                                <div className={`w-full ${language === 'en' ? 'ml-6' : 'mr-6'}`}>
                                    <h4 className="font-semibold text-charcoal dark:text-white">{tb(item.stage)}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PortalCaseStatus;
