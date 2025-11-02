import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLocalization } from '../hooks/useLocalization';

const PasswordChangeModal: React.FC = () => {
    const { changePassword } = useAuth();
    const { t, language } = useLocalization();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (newPassword !== confirmPassword) {
            setError(t('pw_change_error_match'));
            return;
        }
        if (newPassword.length < 8) {
             setError(language === 'en' ? 'Password must be at least 8 characters long.' : 'پاس ورڈ کم از کم 8 حروف کا ہونا چاہیے۔');
             return;
        }

        setIsLoading(true);
        const success = await changePassword(newPassword);
        setIsLoading(false);

        if (success) {
            setIsSuccess(true);
            // The AuthContext state will update, causing PortalLayout to re-render and hide this modal.
        } else {
            setError(language === 'en' ? 'An unknown error occurred. Please try again.' : 'ایک نامعلوم خرابی پیش آگئی۔ براہ مہربانی دوبارہ کوشش کریں.');
        }
    };

    return (
        <div className="fixed inset-0 bg-navy-blue/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 fade-in">
            <div className="w-full max-w-md bg-white dark:bg-charcoal rounded-xl shadow-2xl border border-gold/20 p-8 sm:p-10" role="dialog" aria-modal="true">
                <div className="text-center">
                    <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-3xl font-bold text-gold`}>
                        {t('pw_change_title')}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                        {t('pw_change_subtitle')}
                    </p>
                </div>
                
                {isSuccess ? (
                    <div className="text-center mt-6">
                        <p className="text-green-600 dark:text-green-400 font-semibold">{t('pw_change_success')}</p>
                        <p className="text-gray-600 dark:text-gray-300 mt-2">{language === 'en' ? 'Redirecting to your dashboard...' : 'آپ کو اپنے ڈیش بورڈ پر منتقل کیا جا رہا ہے...'}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 mt-8">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 text-red-500 dark:text-red-400 p-3 rounded-md text-sm" role="alert">
                                {error}
                            </div>
                        )}
                        <div>
                            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('pw_change_new')}</label>
                            <input
                                id="new-password"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold bg-white dark:bg-navy-blue/50 dark:border-gray-600 text-charcoal dark:text-white transition-all"
                            />
                        </div>
                         <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('pw_change_confirm')}</label>
                            <input
                                id="confirm-password"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold bg-white dark:bg-navy-blue/50 dark:border-gray-600 text-charcoal dark:text-white transition-all"
                            />
                        </div>
                        <div className="!mt-8">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-bold tracking-wider uppercase text-navy-blue bg-gold hover:bg-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-charcoal focus:ring-gold transition-all disabled:opacity-50"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                        <span>{language === 'en' ? 'Saving...' : 'محفوظ کیا جا رہا ہے...'}</span>
                                    </>
                                ) : (
                                    <span>{t('pw_change_button')}</span>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PasswordChangeModal;
