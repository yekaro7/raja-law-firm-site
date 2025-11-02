import React, { useState, ReactNode } from 'react';
import { useLocalization } from '../../hooks/useLocalization';
import { useTheme } from '../../hooks/useTheme';
import {
  DashboardIcon, ConsultationsIcon, ClientsIcon, PaymentsIcon, CasesIcon, DocumentsIcon,
  MessagesIcon, NotificationsIcon, SettingsIcon, LogoutIcon, ChevronDownIcon
} from '../../components/AdminIcons';

import AdminDashboard from './AdminDashboard';
import AdminConsultations from './AdminConsultations';
import AdminClients from './AdminClients';
import AdminCases from './AdminCases';
import AdminDocuments from './AdminDocuments';
import AdminMessages from './AdminMessages';
import AdminNotifications from './AdminNotifications';
import AdminSettings from './AdminSettings';
import AdminConsultationPayments from './AdminConsultationPayments';
import AdminCasePayments from './AdminCasePayments';


type AdminPage = 'dashboard' | 'consultations' | 'clients' | 'consultationPayments' | 'casePayments' | 'cases' | 'documents' | 'messages' | 'notifications' | 'settings';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLocalization();
  return (
    <div className={`relative flex items-center bg-gray-200 dark:bg-navy-blue/50 rounded-full p-1 w-[100px] h-8 ${language === 'ur' ? 'flex-row-reverse' : ''}`}>
      <span
        className={`absolute bg-white dark:bg-navy-blue shadow-md rounded-full h-6 w-[45px] transition-transform duration-300 ease-in-out`}
        style={{ transform: language === 'en' ? 'translateX(2px)' : 'translateX(52px)' }}
      />
      <button onClick={() => setLanguage('en')} className={`relative z-10 w-1/2 text-xs font-semibold transition-colors duration-300 ${language === 'en' ? 'text-navy-blue' : 'text-gray-600 dark:text-gray-300'}`}>EN</button>
      <button onClick={() => setLanguage('ur')} className={`relative z-10 w-1/2 text-xs font-urdu transition-colors duration-300 ${language === 'ur' ? 'text-navy-blue' : 'text-gray-600 dark:text-gray-300'}`}>اردو</button>
    </div>
  );
};

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="text-gray-500 dark:text-gray-400 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-navy-blue/50 transition-colors duration-300">
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm-.707 10.607a1 1 0 011.414 0l.707-.707a1 1 0 11-1.414-1.414l-.707.707zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" /></svg>
      )}
    </button>
  );
};

const AdminLayout: React.FC = () => {
    const [activePage, setActivePage] = useState<AdminPage>('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isPaymentsOpen, setPaymentsOpen] = useState(false);
    const { t, language } = useLocalization();

    const navItems = [
        { id: 'dashboard', label: t('admin_nav_dashboard'), icon: DashboardIcon },
        { id: 'consultations', label: t('admin_nav_consultations'), icon: ConsultationsIcon },
        { id: 'clients', label: t('admin_nav_clients'), icon: ClientsIcon },
        { id: 'cases', label: t('admin_nav_cases'), icon: CasesIcon },
        { id: 'documents', label: t('admin_nav_documents'), icon: DocumentsIcon },
        { id: 'messages', label: t('admin_nav_messages'), icon: MessagesIcon },
        { id: 'notifications', label: t('admin_nav_notifications'), icon: NotificationsIcon },
    ];
    
    const renderContent = () => {
        switch (activePage) {
            case 'dashboard': return <AdminDashboard />;
            case 'consultations': return <AdminConsultations />;
            case 'clients': return <AdminClients />;
            case 'consultationPayments': return <AdminConsultationPayments />;
            case 'casePayments': return <AdminCasePayments />;
            case 'cases': return <AdminCases />;
            case 'documents': return <AdminDocuments />;
            case 'messages': return <AdminMessages />;
            case 'notifications': return <AdminNotifications />;
            case 'settings': return <AdminSettings />;
            default: return <AdminDashboard />;
        }
    };
    
    const isPaymentsActive = activePage === 'consultationPayments' || activePage === 'casePayments';

    return (
        <div className={`flex h-screen bg-gray-100 dark:bg-charcoal ${language === 'ur' ? 'font-urdu' : 'font-sans'}`}>
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 ${language === 'en' ? 'left-0' : 'right-0'} z-30 w-64 bg-navy-blue text-white flex-col transform ${isSidebarOpen ? 'translate-x-0' : (language === 'en' ? '-translate-x-full' : 'translate-x-full')} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex`}>
                <div className="flex items-center justify-center p-4 border-b border-gold/20 h-16">
                     <span className="font-serif text-xl font-semibold whitespace-nowrap text-white">R&R Admin Panel</span>
                </div>
                <nav className="flex-1 px-2 py-4 space-y-1">
                    {navItems.map(item => (
                        <button key={item.id} onClick={() => { setActivePage(item.id as AdminPage); setPaymentsOpen(false); }}
                            className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 ${activePage === item.id ? 'bg-gold text-navy-blue' : 'hover:bg-gold/10'}`}>
                            <item.icon className="h-5 w-5 mr-3 rtl:ml-3 rtl:mr-0" />
                            {item.label}
                        </button>
                    ))}
                    {/* Payments Dropdown */}
                    <div>
                        <button onClick={() => setPaymentsOpen(!isPaymentsOpen)}
                            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 ${isPaymentsActive ? 'bg-gold/10 text-white' : 'hover:bg-gold/10'}`}>
                            <div className="flex items-center">
                                <PaymentsIcon className="h-5 w-5 mr-3 rtl:ml-3 rtl:mr-0" />
                                {t('admin_nav_payments')}
                            </div>
                            <ChevronDownIcon className={`h-4 w-4 transition-transform ${isPaymentsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isPaymentsOpen && (
                            <div className="pl-8 rtl:pr-8 py-1 space-y-1">
                                <button onClick={() => setActivePage('consultationPayments')}
                                    className={`w-full text-left rtl:text-right flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${activePage === 'consultationPayments' ? 'bg-gold text-navy-blue' : 'hover:bg-gold/10'}`}>
                                    {t('admin_nav_consultation_payments')}
                                </button>
                                <button onClick={() => setActivePage('casePayments')}
                                    className={`w-full text-left rtl:text-right flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${activePage === 'casePayments' ? 'bg-gold text-navy-blue' : 'hover:bg-gold/10'}`}>
                                    {t('admin_nav_case_payments')}
                                </button>
                            </div>
                        )}
                    </div>
                </nav>
                <div className="px-2 py-4 border-t border-gold/20">
                    <button onClick={() => setActivePage('settings')} className="w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-md hover:bg-gold/10">
                        <SettingsIcon className="h-5 w-5 mr-3 rtl:ml-3 rtl:mr-0" />
                        {t('admin_nav_settings')}
                    </button>
                    <button onClick={() => window.location.hash = '#home'} className="w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-md text-red-400 hover:bg-red-500/20">
                        <LogoutIcon className="h-5 w-5 mr-3 rtl:ml-3 rtl:mr-0" />
                        {t('admin_nav_logout')}
                    </button>
                </div>
            </aside>
            
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white dark:bg-navy-blue shadow-sm dark:border-b dark:border-gold/20 flex items-center justify-between p-4 h-16">
                    <div className="flex items-center">
                        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-500 dark:text-gray-300 focus:outline-none md:hidden">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                        <div className="relative hidden md:block ml-4 rtl:mr-4">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3"><svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg></span>
                            <input type="text" placeholder={t('admin_search_placeholder')} className="w-full md:w-72 block py-2 pl-10 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-gold focus:border-gold dark:bg-charcoal/50 dark:border-gray-600 dark:text-white" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <LanguageToggle />
                        <ThemeToggle />
                        <div className="w-px h-6 bg-gray-300 dark:bg-gold/30"></div>
                        <img className="h-9 w-9 rounded-full object-cover" src="https://picsum.photos/seed/admin/100/100" alt="Admin Avatar" />
                    </div>
                </header>
                {/* Main Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
