import React, { useState, useMemo } from 'react';
import { useLocalization } from '../../hooks/useLocalization';
import { casePaymentsData } from '../../constants/adminData';
import { CasePayment } from '../../types';

const StatusBadge: React.FC<{ status: 'Pending' | 'Verified' }> = ({ status }) => {
    const statusMap = {
        Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
        Verified: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    };
    const textMap = {
        Pending: { en: 'Pending', ur: 'زیر التواء' },
        Verified: { en: 'Verified', ur: 'تصدیق شدہ' },
    }
    const { language } = useLocalization();
    return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusMap[status]}`}>{textMap[status][language]}</span>;
}

const AdminCasePayments: React.FC = () => {
    const { t, language } = useLocalization();
    const [payments, setPayments] = useState<CasePayment[]>(casePaymentsData);
    
    const handleVerify = (id: string) => {
        setPayments(payments.map(p => p.id === id ? { ...p, status: 'Verified' } : p));
    };

    const totalVerifiedPayments = useMemo(() => {
        return payments.filter(p => p.status === 'Verified').reduce((sum, p) => sum + p.amount, 0);
    }, [payments]);

    return (
        <div className="p-4 sm:p-6 lg:p-8 fade-in">
            <div className="flex justify-between items-start mb-6">
                <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl font-bold text-navy-blue dark:text-white`}>
                    {t('admin_nav_case_payments')}
                </h1>
                <div className="text-right rtl:text-left">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{language === 'en' ? 'Total Verified' : 'کل تصدیق شدہ'}</h3>
                    <p className="mt-1 text-2xl font-bold text-charcoal dark:text-white">PKR {totalVerifiedPayments.toLocaleString()}</p>
                </div>
            </div>
            
            <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-charcoal dark:text-gray-300">
                            <tr>
                                <th scope="col" className="px-6 py-3">Client / Case</th>
                                <th scope="col" className="px-6 py-3">Installment</th>
                                <th scope="col" className="px-6 py-3">Amount</th>
                                <th scope="col" className="px-6 py-3">Remaining</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map(p => (
                                <tr key={p.id} className="bg-white dark:bg-navy-blue border-b dark:border-gold/10 hover:bg-gray-50 dark:hover:bg-charcoal/50">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900 dark:text-white">{p.clientName}</div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">{p.caseTitle}</div>
                                    </td>
                                    <td className="px-6 py-4">#{p.installment}</td>
                                    <td className="px-6 py-4 font-semibold">PKR {p.amount.toLocaleString()}</td>
                                    <td className="px-6 py-4">PKR {p.remainingBalance.toLocaleString()}</td>
                                    <td className="px-6 py-4"><StatusBadge status={p.status} /></td>
                                    <td className="px-6 py-4">
                                        {p.status === 'Pending' && (
                                            <button onClick={() => handleVerify(p.id)} className="bg-gold/20 text-gold-800 dark:text-gold-200 text-xs font-bold py-1 px-3 rounded-md hover:bg-gold hover:text-navy-blue transition-colors">
                                                {language === 'en' ? 'Verify' : 'تصدیق کریں'}
                                            </button>
                                        )}
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

export default AdminCasePayments;
