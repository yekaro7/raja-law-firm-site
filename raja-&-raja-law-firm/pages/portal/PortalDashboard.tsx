import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLocalization } from '../../hooks/useLocalization';
import { CalendarIcon, CaseStatusIcon, PaymentIcon } from '../../components/Icons';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow-md dark:shadow-gold/10 flex items-start space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gold/10 text-gold">
            {icon}
        </div>
        <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{title}</h3>
            <div className="mt-1">{children}</div>
        </div>
    </div>
);

const PortalDashboard: React.FC = () => {
  const { user } = useAuth();
  const { t, tb, language } = useLocalization();

  if (!user) return null;

  const { caseDetails, fees } = user;
  const feeProgress = fees.total > 0 ? (fees.paid / fees.total) * 100 : 0;
  
  const formattedDate = caseDetails.nextHearingDate
    ? new Date(caseDetails.nextHearingDate).toLocaleDateString(language === 'en' ? 'en-US' : 'ar-SA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : t('card_no_hearing_scheduled');

  return (
    <div className="p-4 sm:p-6 lg:p-8 fade-in">
      <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl sm:text-3xl font-bold text-navy-blue dark:text-white mb-6`}>
        {t('portal_dashboard_title')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
        {/* Case Status Card */}
        <InfoCard title={t('card_case_status')} icon={<CaseStatusIcon className="w-6 h-6" />}>
           <p className="text-2xl font-bold text-charcoal dark:text-white">{caseDetails.status}</p>
           <p className="text-sm text-gray-600 dark:text-gray-300">{tb(caseDetails.title)}</p>
        </InfoCard>

        {/* Next Hearing Card */}
        <InfoCard title={t('card_next_hearing')} icon={<CalendarIcon className="w-6 h-6" />}>
           <p className="text-xl font-semibold text-charcoal dark:text-white">{formattedDate}</p>
        </InfoCard>

        {/* Assigned Lawyer Card */}
        <InfoCard title={t('card_assigned_lawyer')} icon={
             <img src={caseDetails.assignedLawyer.avatar} alt="Lawyer" className="w-12 h-12 rounded-full" />
        }>
            <p className="text-lg font-semibold text-charcoal dark:text-white">{caseDetails.assignedLawyer.name}</p>
        </InfoCard>
        
         {/* Fee Status Card */}
        <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow-md dark:shadow-gold/10 md:col-span-2 lg:col-span-3 xl:col-span-1">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t('card_fee_status')}</h3>
            <div className="mt-4">
                <div className="w-full bg-gray-200 dark:bg-charcoal rounded-full h-2.5">
                    <div className="bg-gold h-2.5 rounded-full" style={{ width: `${feeProgress}%` }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-300">
                    <span>{t('card_fees_paid')}: {fees.paid.toLocaleString()}</span>
                    <span>{t('card_fees_total')}: {fees.total.toLocaleString()}</span>
                </div>
                <p className="text-center mt-2 font-bold text-lg text-charcoal dark:text-white">{t('card_fees_remaining')}: {fees.remaining.toLocaleString()} PKR</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default PortalDashboard;
