import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLocalization } from '../../hooks/useLocalization';
import { CalendarIcon } from '../../components/Icons';
import { CaseDetails } from '../../types';

const PortalHearings: React.FC = () => {
    const { user } = useAuth();
    const { t, tb, language } = useLocalization();

    if (!user) return null;
    
    const { timeline } = user.caseDetails;
    
    // Filter timeline for events that are hearings
    const hearingEvents = timeline.filter(event => 
        tb(event.stage).toLowerCase().includes('hearing') || tb(event.stage).toLowerCase().includes('سماعت')
    );

    const upcomingHearings = hearingEvents.filter(h => !h.completed);
    const pastHearings = hearingEvents.filter(h => h.completed);

    const HearingCard: React.FC<{ hearing: CaseDetails['timeline'][0] }> = ({ hearing }) => {
        const hearingDate = new Date(hearing.date);
        const formattedDate = hearingDate.toLocaleDateString(language === 'en' ? 'en-US' : 'ar-SA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        const formattedTime = user.caseDetails.nextHearingDate && !hearing.completed
            ? new Date(user.caseDetails.nextHearingDate).toLocaleTimeString(language === 'en' ? 'en-US' : 'ar-SA', {
                hour: '2-digit',
                minute: '2-digit',
            })
            : 'N/A';
        
        return (
             <div className="bg-white dark:bg-navy-blue p-5 rounded-lg shadow-md dark:shadow-gold/10 flex items-start space-x-4 rtl:space-x-reverse">
                <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${hearing.completed ? 'bg-gray-400/10 text-gray-500' : 'bg-gold/10 text-gold'}`}>
                    <CalendarIcon className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="font-bold text-charcoal dark:text-white">{tb(hearing.stage)}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{formattedDate} {hearing.completed ? '' : `@ ${formattedTime}`}</p>
                     <p className={`mt-1 text-xs font-semibold px-2 py-0.5 rounded-full inline-block ${hearing.completed ? 'bg-gray-200 text-gray-700 dark:bg-charcoal dark:text-gray-300' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}>
                        {hearing.completed ? (language === 'en' ? 'Completed' : 'مکمل') : (language === 'en' ? 'Scheduled' : 'طے شدہ')}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 fade-in">
            <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl sm:text-3xl font-bold text-navy-blue dark:text-white mb-8`}>
                {t('portal_nav_hearings')}
            </h1>

            <div className="space-y-8">
                <div>
                    <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white mb-4`}>
                        {language === 'en' ? 'Upcoming Hearings' : 'آئندہ سماعتیں'}
                    </h2>
                    {upcomingHearings.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {upcomingHearings.map((hearing, index) => <HearingCard key={index} hearing={hearing} />)}
                        </div>
                    ) : (
                        <p className="text-gray-600 dark:text-gray-400">{language === 'en' ? 'No upcoming hearings scheduled.' : 'کوئی آئندہ سماعت طے نہیں ہے۔'}</p>
                    )}
                </div>

                <div>
                    <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white mb-4`}>
                        {language === 'en' ? 'Past Hearings' : 'گزشتہ سماعتیں'}
                    </h2>
                     {pastHearings.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {pastHearings.map((hearing, index) => <HearingCard key={index} hearing={hearing} />)}
                        </div>
                    ) : (
                        <p className="text-gray-600 dark:text-gray-400">{language === 'en' ? 'No past hearings on record.' : 'ریکارڈ پر کوئی گزشتہ سماعت نہیں ہے۔'}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortalHearings;
