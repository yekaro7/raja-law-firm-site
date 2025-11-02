import React from 'react';
import { useLocalization } from '../../hooks/useLocalization';
import { BilingualContent } from '../../types';

interface LegalResource {
  title: BilingualContent;
  description: BilingualContent;
  url: string;
}

const resources: LegalResource[] = [
    {
        title: { en: 'Guide to Pakistani Labour Laws', ur: 'پاکستانی لیبر قوانین کی رہنمائی' },
        description: { en: 'A comprehensive overview of employee rights, working hours, and termination procedures.', ur: 'ملازمین کے حقوق، کام کے اوقات، اور برطرفی کے طریقہ کار کا ایک جامع جائزہ۔' },
        url: '#blogPost/1'
    },
    {
        title: { en: 'Understanding Employment Contracts', ur: 'ملازمت کے معاہدوں کو سمجھنا' },
        description: { en: 'Key elements to look for in your employment contract to protect your rights.', ur: 'اپنے حقوق کے تحفظ کے لیے اپنے ملازمت کے معاہدے میں تلاش کرنے کے لیے اہم عناصر۔' },
        url: '#blogPost/3'
    },
    {
        title: { en: 'Punjab Employees Social Security Institution (PESSI)', ur: 'پنجاب ایمپلائز سوشل سیکیورٹی انسٹی ٹیوشن (PESSI)' },
        description: { en: 'Official website for information on social security benefits for employees in Punjab.', ur: 'پنجاب میں ملازمین کے لیے سماجی تحفظ کے فوائد کے بارے میں معلومات کے لیے سرکاری ویب سائٹ۔' },
        url: 'http://www.pessi.gop.pk/'
    },
    {
        title: { en: 'National Industrial Relations Commission (NIRC)', ur: 'نیشنل انڈسٹریل ریلیشنز کمیشن (NIRC)' },
        description: { en: 'Federal body for resolving industrial disputes and protecting trade union rights.', ur: 'صنعتی تنازعات کو حل کرنے اور ٹریڈ یونین کے حقوق کے تحفظ کے لیے وفاقی ادارہ۔' },
        url: 'http://www.nirc.gov.pk/'
    }
];


const PortalResources: React.FC = () => {
    const { t, tb, language } = useLocalization();

    return (
        <div className="p-4 sm:p-6 lg:p-8 fade-in">
            <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl sm:text-3xl font-bold text-navy-blue dark:text-white mb-8`}>
                {t('portal_nav_resources')}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                    <a 
                        key={index}
                        href={resource.url}
                        target={resource.url.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="block bg-white dark:bg-navy-blue p-6 rounded-lg shadow-md dark:shadow-gold/10 hover:shadow-xl dark:hover:shadow-gold/20 transition-shadow duration-300 transform hover:-translate-y-1"
                    >
                        <h3 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-xl font-bold text-navy-blue dark:text-white`}>{tb(resource.title)}</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{tb(resource.description)}</p>
                        <div className="mt-4 text-sm font-semibold text-gold">
                            {language === 'en' ? 'Learn More' : 'مزید جانیں'} &rarr;
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PortalResources;
