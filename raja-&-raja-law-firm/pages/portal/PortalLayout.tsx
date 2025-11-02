import React, { useState, ReactNode } from 'react';
import { useLocalization } from '../../hooks/useLocalization';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../contexts/AuthContext';
import {
  DashboardIcon, CaseStatusIcon, CalendarIcon, PaymentIcon, DocumentIcon,
  MessageIcon, AiIcon, ResourcesIcon, SettingsIcon, LogoutIcon
} from '../../components/Icons';
import PasswordChangeModal from '../../components/PasswordChangeModal';

import PortalDashboard from './PortalDashboard';
import PortalCaseStatus from './PortalCaseStatus';
import PortalPayments from './PortalPayments';
import PortalDocuments from './PortalDocuments';
import PortalMessages from './PortalMessages';
import PortalAiAssistant from './PortalAiAssistant';
import PortalHearings from './PortalHearings';
import PortalResources from './PortalResources';
import PortalSettings from './PortalSettings';

type PortalPage = 'dashboard' | 'case' | 'hearings' | 'payments' | 'documents' | 'messages' | 'ai' | 'resources' | 'settings';

// --- Language/Theme Toggles (Portal Version) ---
const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLocalization();
  return (
    <div className={`relative flex items-center bg-gray-700/50 dark:bg-navy-blue/50 rounded-full p-1 w-[100px] h-8 ${language === 'ur' ? 'flex-row-reverse' : ''}`}>
      <span
        className={`absolute bg-gold rounded-full h-6 w-[45px] transition-transform duration-300 ease-in-out`}
        style={{ transform: language === 'en' ? 'translateX(2px)' : 'translateX(52px)' }}
      />
      <button onClick={() => setLanguage('en')} className={`relative z-10 w-1/2 text-xs font-semibold transition-colors duration-300 ${language === 'en' ? 'text-navy-blue' : 'text-white'}`}>EN</button>
      <button onClick={() => setLanguage('ur')} className={`relative z-10 w-1/2 text-xs font-urdu transition-colors duration-300 ${language === 'ur' ? 'text-navy-blue' : 'text-white'}`}>اردو</button>
    </div>
  );
};
const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-700/50 dark:hover:bg-navy-blue/50 transition-colors duration-300">
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm-.707 10.607a1 1 0 011.414 0l.707-.707a1 1 0 11-1.414-1.414l-.707.707zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" /></svg>
      )}
    </button>
  );
};


const PortalLayout: React.FC = () => {
    const [activePage, setActivePage] = useState<PortalPage>('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const { user, logout, isLoading } = useAuth();
    const { t, language } = useLocalization();

    if (isLoading) {
        return (
            <div className="flex h-screen w-screen items-center justify-center bg-navy-blue">
                <svg className="animate-spin h-10 w-10 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
        );
    }

    if (user?.isTemporaryPassword) {
        return <PasswordChangeModal />;
    }

    const navItems = [
        { id: 'dashboard', label: t('portal_nav_dashboard'), icon: DashboardIcon },
        { id: 'case', label: t('portal_nav_case_status'), icon: CaseStatusIcon },
        { id: 'hearings', label: t('portal_nav_hearings'), icon: CalendarIcon },
        { id: 'payments', label: t('portal_nav_payments'), icon: PaymentIcon },
        { id: 'documents', label: t('portal_nav_documents'), icon: DocumentIcon },
        { id: 'messages', label: t('portal_nav_messages'), icon: MessageIcon },
        { id: 'ai', label: t('portal_nav_ai_assistant'), icon: AiIcon },
        { id: 'resources', label: t('portal_nav_resources'), icon: ResourcesIcon },
    ];

    const renderContent = () => {
        switch (activePage) {
            case 'dashboard': return <PortalDashboard />;
            case 'case': return <PortalCaseStatus />;
            case 'hearings': return <PortalHearings />;
            case 'payments': return <PortalPayments />;
            case 'documents': return <PortalDocuments />;
            case 'messages': return <PortalMessages />;
            case 'ai': return <PortalAiAssistant />;
            case 'resources': return <PortalResources />;
            case 'settings': return <PortalSettings />;
            default:
                return <PortalDashboard />;
        }
    };

    return (
        <div className={`flex h-screen bg-gray-100 dark:bg-charcoal ${language === 'ur' ? 'font-urdu' : 'font-sans'}`}>
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 ${language === 'en' ? 'left-0' : 'right-0'} z-30 w-64 bg-navy-blue text-white flex-col transform ${isSidebarOpen ? 'translate-x-0' : (language === 'en' ? '-translate-x-full' : 'translate-x-full')} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:flex`}>
                <div className="flex items-center justify-center p-4 border-b border-gold/20">
                     <span className="font-serif text-xl font-semibold whitespace-nowrap text-white">Raja & Raja Portal</span>
                </div>
                <nav className="flex-1 px-2 py-4 space-y-2">
                    {navItems.map(item => (
                        <button key={item.id} onClick={() => setActivePage(item.id as PortalPage)}
                            className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 ${activePage === item.id ? 'bg-gold text-navy-blue' : 'hover:bg-gold/10'}`}>
                            <item.icon className="h-5 w-5 mr-3 rtl:ml-3" />
                            {item.label}
                        </button>
                    ))}
                </nav>
                <div className="px-2 py-4 border-t border-gold/20">
                    <button onClick={() => setActivePage('settings')} className="w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-md hover:bg-gold/10">
                        <SettingsIcon className="h-5 w-5 mr-3 rtl:ml-3" />
                        {t('portal_nav_settings')}
                    </button>
                    <button onClick={logout} className="w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-md text-red-400 hover:bg-red-500/20">
                        <LogoutIcon className="h-5 w-5 mr-3 rtl:ml-3" />
                        {t('portal_nav_logout')}
                    </button>
                </div>
            </aside>
            
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                 <header className="bg-white dark:bg-navy-blue shadow-sm dark:border-b dark:border-gold/20 flex items-center justify-between p-4">
                    <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-500 dark:text-gray-300 focus:outline-none md:hidden">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="text-lg font-semibold text-charcoal dark:text-white hidden md:block">
                        {t('portal_header_welcome')}, {user?.name}
                    </div>
                    <div className="flex items-center space-x-4">
                        <LanguageToggle />
                        <ThemeToggle />
                         <div className="w-px h-6 bg-gray-300 dark:bg-gold/30"></div>
                        <button className="relative text-gray-500 dark:text-gray-300 hover:text-gold dark:hover:text-gold">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                             {user && user.notifications.filter(n => !n.read).length > 0 && 
                                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                                    {user.notifications.filter(n => !n.read).length}
                                </span>
                             }
                        </button>
                        <img className="h-9 w-9 rounded-full object-cover" src={`https://i.pravatar.cc/150?u=${user?.id}`} alt="Client Avatar" />
                    </div>
                </header>
                {/* Main Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-charcoal">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default PortalLayout;