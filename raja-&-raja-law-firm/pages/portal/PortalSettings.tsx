import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLocalization } from '../../hooks/useLocalization';

const InputField: React.FC<{ label: string; id: string; type: string; value: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; disabled?: boolean }> = 
({ label, id, type, value, onChange, disabled }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold dark:bg-charcoal/50 dark:border-gray-600 dark:text-white disabled:opacity-50"
        />
    </div>
);

const ToggleSwitch: React.FC<{ label: string; enabled: boolean; setEnabled: (enabled: boolean) => void }> = ({ label, enabled, setEnabled }) => (
    <div className="flex items-center justify-between">
        <span className="text-gray-700 dark:text-gray-300">{label}</span>
        <button
            onClick={() => setEnabled(!enabled)}
            className={`${enabled ? 'bg-gold' : 'bg-gray-300 dark:bg-charcoal'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
        >
            <span className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`} />
        </button>
    </div>
);

const PortalSettings: React.FC = () => {
    const { user } = useAuth();
    const { t, language } = useLocalization();

    // Mock states for settings
    const [profile, setProfile] = useState({ name: user?.name || '', email: user?.email || '', cnic: user?.cnic || '' });
    const [password, setPassword] = useState({ current: '', new: '', confirm: '' });
    const [notifications, setNotifications] = useState({
        messages: true,
        documents: true,
        hearings: false,
    });
    
    if (!user) return null;

    const handleProfileUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        alert(language === 'en' ? 'Profile updated successfully!' : 'پروفائل کامیابی سے اپ ڈیٹ ہو گیا!');
    };
    
    const handlePasswordChange = (e: React.FormEvent) => {
        e.preventDefault();
        if(password.new !== password.confirm) {
             alert(language === 'en' ? 'New passwords do not match.' : 'نئے پاس ورڈ مماثل نہیں ہیں۔');
             return;
        }
        alert(language === 'en' ? 'Password changed successfully!' : 'پاس ورڈ کامیابی سے تبدیل ہو گیا!');
        setPassword({ current: '', new: '', confirm: '' });
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 fade-in">
            <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl sm:text-3xl font-bold text-navy-blue dark:text-white mb-8`}>
                {t('portal_nav_settings')}
            </h1>

            <div className="max-w-4xl mx-auto space-y-8">
                {/* Profile Settings */}
                <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow-md dark:shadow-gold/10">
                    <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white mb-4`}>{language === 'en' ? 'Profile Information' : 'پروفائل کی معلومات'}</h2>
                    <form onSubmit={handleProfileUpdate} className="space-y-4">
                        <InputField label={t('form_name')} id="name" type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
                        <InputField label={t('form_email')} id="email" type="email" value={profile.email} disabled />
                        <InputField label={t('login_email_cnic')} id="cnic" type="text" value={profile.cnic} disabled />
                        <div className="text-right rtl:text-left">
                            <button type="submit" className="bg-gold text-navy-blue font-semibold py-2 px-5 rounded-md hover:bg-gold/90 transition-colors">
                                {language === 'en' ? 'Save Changes' : 'تبدیلیاں محفوظ کریں'}
                            </button>
                        </div>
                    </form>
                </div>
                
                 {/* Password Settings */}
                <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow-md dark:shadow-gold/10">
                    <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white mb-4`}>{language === 'en' ? 'Change Password' : 'پاس ورڈ تبدیل کریں'}</h2>
                     <form onSubmit={handlePasswordChange} className="space-y-4">
                        <InputField label={language === 'en' ? 'Current Password' : 'موجودہ پاس ورڈ'} id="current-password" type="password" value={password.current} onChange={e => setPassword({...password, current: e.target.value})} />
                        <InputField label={language === 'en' ? 'New Password' : 'نیا پاس ورڈ'} id="new-password" type="password" value={password.new} onChange={e => setPassword({...password, new: e.target.value})} />
                        <InputField label={language === 'en' ? 'Confirm New Password' : 'نئے پاس ورڈ کی تصدیق کریں'} id="confirm-password" type="password" value={password.confirm} onChange={e => setPassword({...password, confirm: e.target.value})} />
                        <div className="text-right rtl:text-left">
                           <button type="submit" className="bg-gold text-navy-blue font-semibold py-2 px-5 rounded-md hover:bg-gold/90 transition-colors">
                                {language === 'en' ? 'Update Password' : 'پاس ورڈ اپ ڈیٹ کریں'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Notification Settings */}
                <div className="bg-white dark:bg-navy-blue p-6 rounded-lg shadow-md dark:shadow-gold/10">
                    <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white mb-4`}>{language === 'en' ? 'Notification Preferences' : 'اطلاعات کی ترجیحات'}</h2>
                    <div className="space-y-4">
                        <ToggleSwitch label={language === 'en' ? 'New Message Alerts' : 'نئے پیغام کے انتباہات'} enabled={notifications.messages} setEnabled={val => setNotifications({...notifications, messages: val})} />
                        <ToggleSwitch label={language === 'en' ? 'New Document Uploads' : 'نئی دستاویزات کی اپ لوڈز'} enabled={notifications.documents} setEnabled={val => setNotifications({...notifications, documents: val})} />
                        <ToggleSwitch label={language === 'en' ? 'Hearing Reminders' : 'سماعت کی یاددہانی'} enabled={notifications.hearings} setEnabled={val => setNotifications({...notifications, hearings: val})} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortalSettings;
