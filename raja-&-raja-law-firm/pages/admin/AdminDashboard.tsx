import React from 'react';
import { useLocalization } from '../../hooks/useLocalization';
import { adminStats, recentConsultations, caseStatusData } from '../../constants/adminData';
import { 
    ConsultationsIcon, ClientsIcon, PaymentsIcon, CasesIcon, RevenueIcon
} from '../../components/AdminIcons';

const StatCard: React.FC<{ titleKey: string; value: string | number; icon: React.ReactNode }> = ({ titleKey, value, icon }) => {
  const { t } = useLocalization();
  return (
    <div className="bg-white dark:bg-navy-blue p-5 rounded-lg shadow flex items-start space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gold/10 text-gold">
            {icon}
        </div>
        <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{t(titleKey)}</h3>
            <p className="mt-1 text-3xl font-bold text-charcoal dark:text-white">{value}</p>
        </div>
    </div>
  );
};

const StatusBadge: React.FC<{ status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled' }> = ({ status }) => {
    const statusMap = {
        Pending: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
        Confirmed: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
        Completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
        Cancelled: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    };
    const textMap = {
        Pending: { en: 'Pending', ur: 'زیر التواء' },
        Confirmed: { en: 'Confirmed', ur: 'تصدیق شدہ' },
        Completed: { en: 'Completed', ur: 'مکمل' },
        Cancelled: { en: 'Cancelled', ur: 'منسوخ' },
    }
    const { language } = useLocalization();
    return <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusMap[status]}`}>{textMap[status][language]}</span>;
}

const AdminDashboard: React.FC = () => {
    const { t, language } = useLocalization();

    const icons: { [key: string]: React.ReactNode } = {
        admin_card_active_clients: <ClientsIcon className="h-6 w-6" />,
        admin_card_pending_consultations: <ConsultationsIcon className="h-6 w-6" />,
        admin_card_verified_case_payments: <PaymentsIcon className="h-6 w-6" />,
        admin_card_total_revenue: <RevenueIcon className="h-6 w-6" />,
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 fade-in">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {adminStats.map((stat) => (
                    <StatCard key={stat.key} titleKey={stat.key} value={stat.value} icon={icons[stat.key]} />
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Consultations Table */}
                <div className="lg:col-span-2 bg-white dark:bg-navy-blue p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-charcoal dark:text-white mb-4">{t('admin_recent_consultations_title')}</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-charcoal dark:text-gray-300">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Client</th>
                                    <th scope="col" className="px-6 py-3">Lawyer</th>
                                    <th scope="col" className="px-6 py-3">Date</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentConsultations.map(c => (
                                    <tr key={c.id} className="bg-white dark:bg-navy-blue border-b dark:border-gold/10 hover:bg-gray-50 dark:hover:bg-charcoal/50">
                                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{c.clientName}</td>
                                        <td className="px-6 py-4">{c.lawyer}</td>
                                        <td className="px-6 py-4">{new Date(c.dateTime).toLocaleDateString()}</td>
                                        <td className="px-6 py-4"><StatusBadge status={c.status} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Cases by Status Chart */}
                <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-charcoal dark:text-white mb-4">{t('admin_cases_by_status_title')}</h2>
                    <div className="space-y-4">
                        <div className="flex items-end h-40 space-x-2 rtl:space-x-reverse justify-around border-b border-gray-200 dark:border-gray-600 pb-2">
                            {caseStatusData.map(item => (
                                <div key={item.name} className="flex-1 flex flex-col items-center">
                                    <div className={`w-full ${item.color} rounded-t-md`} style={{ height: `${item.value / 1.2}%` }}></div>
                                    <span className="text-xs mt-1 text-gray-500 dark:text-gray-400">{item.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
                             {caseStatusData.map(item => (
                                <div key={item.name} className="flex items-center space-x-1.5 rtl:space-x-reverse">
                                    <span className={`h-2.5 w-2.5 rounded-full ${item.color}`}></span>
                                    <span className="text-gray-600 dark:text-gray-300">{item.name} ({item.value})</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
