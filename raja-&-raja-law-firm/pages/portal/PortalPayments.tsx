import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLocalization } from '../../hooks/useLocalization';
import { DownloadIcon } from '../../components/Icons';

const PortalPayments: React.FC = () => {
    const { user } = useAuth();
    const { t, language } = useLocalization();

    if (!user) return null;
    const { fees } = user;
    const feeProgress = fees.total > 0 ? (fees.paid / fees.total) * 100 : 0;

    return (
        <div className="p-4 sm:p-6 lg:p-8 fade-in">
            <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl sm:text-3xl font-bold text-navy-blue dark:text-white mb-8`}>
                {t('payments_title')}
            </h1>

            {/* Fee Summary */}
            <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow-md dark:shadow-gold/10 mb-8">
                <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white mb-4`}>{t('fee_summary')}</h2>
                <div className="w-full bg-gray-200 dark:bg-charcoal rounded-full h-4 mb-2">
                    <div className="bg-gold h-4 rounded-full text-xs text-white flex items-center justify-center" style={{ width: `${feeProgress}%` }}>
                        {feeProgress.toFixed(0)}%
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-4">
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('card_fees_total')}</p>
                        <p className="text-xl font-bold text-charcoal dark:text-white">PKR {fees.total.toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('card_fees_paid')}</p>
                        <p className="text-xl font-bold text-green-600 dark:text-green-400">PKR {fees.paid.toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{t('card_fees_remaining')}</p>
                        <p className="text-xl font-bold text-red-600 dark:text-red-400">PKR {fees.remaining.toLocaleString()}</p>
                    </div>
                </div>
                {fees.remaining > 0 && (
                    <div className="text-center mt-6">
                        <button className="bg-gold text-navy-blue font-bold py-2 px-6 rounded-lg hover:bg-gold/90 transition-colors">
                            {t('pay_next_installment')} (PKR 50,000)
                        </button>
                    </div>
                )}
            </div>

            {/* Payment History */}
            <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow-md dark:shadow-gold/10">
                <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white mb-4`}>{t('payment_history')}</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-charcoal dark:text-gray-300">
                            <tr>
                                <th scope="col" className="px-6 py-3">{t('invoice_id')}</th>
                                <th scope="col" className="px-6 py-3">{t('date')}</th>
                                <th scope="col" className="px-6 py-3">{t('amount')}</th>
                                <th scope="col" className="px-6 py-3">{t('method')}</th>
                                <th scope="col" className="px-6 py-3">{t('receipt')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fees.installments.map(payment => (
                                <tr key={payment.id} className="bg-white dark:bg-navy-blue border-b dark:border-gold/20 hover:bg-gray-50 dark:hover:bg-charcoal/50">
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{payment.id}</td>
                                    <td className="px-6 py-4">{new Date(payment.date).toLocaleDateString(language === 'en' ? 'en-CA' : 'ar-SA')}</td>
                                    <td className="px-6 py-4">PKR {payment.amount.toLocaleString()}</td>
                                    <td className="px-6 py-4">{payment.method}</td>
                                    <td className="px-6 py-4">
                                        <a href={payment.receiptUrl} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline flex items-center gap-1">
                                            <DownloadIcon className="w-4 h-4" />
                                            {t('download')}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PortalPayments;
