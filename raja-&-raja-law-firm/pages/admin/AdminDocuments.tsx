import React from 'react';
import { useLocalization } from '../../hooks/useLocalization';

const AdminDocuments: React.FC = () => {
    const { t, language } = useLocalization();

    return (
        <div className="p-8 fade-in">
            <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl font-bold text-navy-blue dark:text-white`}>
                {t('admin_nav_documents')}
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
                {language === 'en' ? 'Document management interface will be displayed here.' : 'دستاویزات کے انتظام کا انٹرفیس یہاں دکھایا جائے گا۔'}
            </p>
        </div>
    );
};

export default AdminDocuments;
