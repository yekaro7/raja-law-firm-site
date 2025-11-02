import React from 'react';
import { useLocalization } from '../../hooks/useLocalization';

const AdminCases: React.FC = () => {
    const { t, language } = useLocalization();

    return (
        <div className="p-8 fade-in">
            <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl font-bold text-navy-blue dark:text-white`}>
                {t('admin_nav_cases')}
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
                {language === 'en' ? 'Case management interface will be displayed here.' : 'کیس کے انتظام کا انٹرفیس یہاں دکھایا جائے گا۔'}
            </p>
        </div>
    );
};

export default AdminCases;
