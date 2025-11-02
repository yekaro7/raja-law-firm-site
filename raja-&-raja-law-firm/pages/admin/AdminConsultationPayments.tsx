import React, { useState, useMemo } from 'react';
import { useLocalization } from '../../hooks/useLocalization';
import { consultationPaymentsData } from '../../constants/adminData';
import { ConsultationPayment } from '../../types';

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

const AdminConsultationPayments: React.FC = () => {
    const { t, language } = useLocalization();
    const [payments, setPayments] = useState<ConsultationPayment[]>(consultationPaymentsData);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const handleVerify = (id: string) => {
        setPayments(payments.map(p => p.id === id ? { ...p, status: 'Verified' } : p));
    };
    
    const filteredPayments = useMemo(() => {
        return payments.filter(p => {
            const matchesSearch = p.clientName.toLowerCase().includes(searchTerm.toLowerCase()) || p.tid.includes(searchTerm);
            const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [payments, searchTerm, statusFilter]);

    return (
        <div className="p-4 sm:p-6 lg:p-8 fade-in">
            <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl font-bold text-navy-blue dark:text-white mb-6`}>
                {t('admin_nav_consultation_payments')}
            </h1>
            
            <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow">
                {/* Filter and Search Bar */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <input
                        type="text"
                        placeholder={language === 'en' ? 'Search by name or TID...' : 'نام یا TID سے تلاش کریں...'}
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="flex-grow block py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold dark:bg-charcoal/50 dark:border-gray-600 dark:text-white"
                    />
                    <select
                        value={statusFilter}
                        onChange={e => setStatusFilter(e.target.value)}
                        className="block py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold dark:bg-charcoal/50 dark:border-gray-600 dark:text-white"
                    >
                        <option value="All">{language === 'en' ? 'All Statuses' : 'تمام حالتیں'}</option>
                        <option value="Pending">{language === 'en' ? 'Pending' : 'زیر التواء'}</option>
                        <option value="Verified">{language === 'en' ? 'Verified' : 'تصدیق شدہ'}</option>
                    </select>
                </div>

                {/* Payments Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-charcoal dark:text-gray-300">
                            <tr>
                                <th scope="col" className="px-6 py-3">Client Name</th>
                                <th scope="col" className="px-6 py-3">Payment Date</th>
                                <th scope="col" className="px-6 py-3">Amount</th>
                                <th scope="col" className="px-6 py-3">TID</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPayments.map(p => (
                                <tr key={p.id} className="bg-white dark:bg-navy-blue border-b dark:border-gold/10 hover:bg-gray-50 dark:hover:bg-charcoal/50">
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{p.clientName}</td>
                                    <td className="px-6 py-4">{new Date(p.paymentDate).toLocaleDateString()}</td>
                                    <td className="px-6 py-4">PKR {p.amount.toLocaleString()}</td>
                                    <td className="px-6 py-4 font-mono">{p.tid}</td>
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

export default AdminConsultationPayments;
