import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLocalization } from '../hooks/useLocalization';
import { Page } from '../types';

interface LoginPageProps {
  onNavigate: (page: Page) => void;
}

// --- Helper Icons for improved UI ---
const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.41-1.412a6.998 6.998 0 00-12.274 0z" />
    </svg>
);
const LockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
    </svg>
);
const InfoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
);
const AlertIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M8.257 3.099c.636-1.214 2.85-1.214 3.486 0l5.58 10.622c.636 1.214-.46 2.779-1.743 2.779H4.42c-1.283 0-2.379-1.565-1.743-2.779L8.257 3.099zM9 13a1 1 0 112 0 1 1 0 01-2 0zm1-5a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
);
const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
    </svg>
);


const LoginPage: React.FC<LoginPageProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { t, language } = useLocalization();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    const result = await login(email, password);
    setIsLoading(false);
    
    if (result === 'success') {
      window.location.hash = '#portal';
    } else if (result === 'expired') {
      setError(t('login_error_expired'));
    } else {
      setError(t('login_error'));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-charcoal p-4 overflow-hidden" style={{ backgroundImage: "url('https://picsum.photos/seed/courthouse/1920/1080?grayscale&blur=3')" }}>
       <div className="absolute inset-0 bg-navy-blue/80"></div>
       
       <header className="relative z-10 mb-6 text-center">
            <button onClick={() => onNavigate('home')} className="inline-flex items-center gap-3 text-gold transition-opacity hover:opacity-80 group">
                <svg className="h-10 w-10 text-gold transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 2a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5z" /><path d="M1 4.5a.5.5 0 01.5-.5h17a.5.5 0 010 1h-17a.5.5 0 01-.5-.5z" /><path fillRule="evenodd" d="M10 5.5a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11a.5.5 0 01.5-.5z" clipRule="evenodd" /><path d="M3.5 6a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5z" /><path d="M16.5 6a.5.5 0 01.5.5v1a.5.5 0 01-1 0v-1a.5.5 0 01.5-.5z" /><path d="M4 8.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" /><path d="M11 8.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" /><path fillRule="evenodd" d="M2.5 10.854l1.525-.915A.5.5 0 014.5 10v4.5a.5.5 0 01-.5-.5h-3a.5.5 0 01-.5-.5V10a.5.5 0 01.447-.492l1.553-.414zM3 11v3h2v-3H3z" clipRule="evenodd" /><path fillRule="evenodd" d="M15.5 10.854l1.525-.915A.5.5 0 0117.5 10v4.5a.5.5 0 01-.5-.5h-3a.5.5 0 01-.5-.5V10a.5.5 0 01.447-.492l1.553-.414zM16 11v3h2v-3h-2z" clipRule="evenodd" />
                </svg>
                <span className="font-serif text-3xl font-semibold text-white">Raja & Raja Law Firm</span>
            </button>
       </header>

      <div className="relative w-full max-w-md bg-white/5 dark:bg-navy-blue/50 backdrop-blur-lg rounded-xl shadow-2xl border border-gold/20 p-8 sm:p-10 space-y-6 z-10 fade-in">
        <div className="text-center">
          <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-3xl font-bold text-gold`}>{t('login_title')}</h2>
          <p className="text-gray-300 mt-2">{t('login_subtitle')}</p>
        </div>

        <div className="bg-blue-500/10 text-blue-300 p-3 rounded-md text-sm flex gap-3 items-start">
            <InfoIcon className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <span>{t('login_access_restriction')}</span>
        </div>

        <div className="bg-gold/10 text-gray-200 p-4 rounded-md text-sm flex gap-4">
            <InfoIcon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
                <p className="font-bold text-gold mb-1">{t('login_demo_title')}</p>
                <p><strong>{t('login_email_cnic')}:</strong> ahmed.hassan@example.com / 35202-1234567-1</p>
                <p><strong>{t('login_password')}:</strong> password123</p>
            </div>
        </div>

        {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-300 p-3 rounded-md text-sm flex items-center gap-3" role="alert">
                <AlertIcon className="w-5 h-5 flex-shrink-0" />
                <span>{error}</span>
            </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{t('login_email_cnic')}</label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full px-3 py-2 pl-10 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold bg-charcoal/50 text-white placeholder:text-gray-500 transition-all"
                />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">{t('login_password')}</label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <LockIcon className="h-5 w-5 text-gray-400" />
                </span>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full px-3 py-2 pl-10 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold bg-charcoal/50 text-white placeholder:text-gray-500 transition-all"
                />
            </div>
          </div>
          <div className="flex items-center justify-between text-sm pt-1">
            <button type="button" className="font-medium text-gold/80 hover:text-gold hover:underline focus:outline-none">{t('login_forgot_password')}</button>
            <button type="button" onClick={() => onNavigate('contact')} className="font-medium text-gold/80 hover:text-gold hover:underline focus:outline-none">{t('login_support')}</button>
          </div>
          <div className="!mt-8">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-bold tracking-wider uppercase text-navy-blue bg-gold hover:bg-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-blue/50 focus:ring-gold transition-all transform hover:scale-[1.02] disabled:opacity-50"
            >
              {isLoading ? (
                <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-navy-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    <span>{language === 'en' ? 'Logging in...' : 'لاگ ان ہو رہا ہے...'}</span>
                </>
              ) : (
                t('login_button')
              )}
            </button>
          </div>
        </form>
         <div className="text-center !mt-8">
            <button onClick={() => onNavigate('home')} className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 group">
                <ArrowLeftIcon className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                {t('login_back_to_home')}
            </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;