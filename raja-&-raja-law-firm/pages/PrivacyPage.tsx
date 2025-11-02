
import React from 'react';
import PageContainer from '../components/PageContainer';
import { useLocalization } from '../hooks/useLocalization';

const PrivacyPage: React.FC = () => {
  const { language } = useLocalization();

  const privacyContent = {
    en: {
      p1: 'Your privacy is important to us. It is Raja & Raja Law Firm\'s policy to respect your privacy regarding any information we may collect from you across our website.',
      h2_1: 'Information We Collect',
      p2: 'We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.',
      h2_2: 'How We Use Your Information',
      p3: 'We use the information we collect in various ways, including to: provide, operate, and maintain our website; improve, personalize, and expand our website; understand and analyze how you use our website; develop new products, services, features, and functionality; communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.',
      h2_3: 'Security',
      p4: 'The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.',
    },
    ur: {
      p1: 'آپ کی رازداری ہمارے لیے اہم ہے۔ راجہ اینڈ راجہ لاء فرم کی پالیسی ہے کہ ہم اپنی ویب سائٹ پر آپ سے جمع کی گئی کسی بھی معلومات کے حوالے سے آپ کی رازداری کا احترام کریں۔',
      h2_1: 'معلومات جو ہم جمع کرتے ہیں',
      p2: 'ہم صرف اس وقت ذاتی معلومات طلب کرتے ہیں جب ہمیں آپ کو کوئی خدمت فراہم کرنے کے لیے واقعی اس کی ضرورت ہوتی ہے۔ ہم اسے منصفانہ اور قانونی طریقوں سے، آپ کے علم اور رضامندی سے جمع کرتے ہیں۔ ہم آپ کو یہ بھی بتاتے ہیں کہ ہم اسے کیوں جمع کر رہے ہیں اور اسے کیسے استعمال کیا جائے گا۔',
      h2_2: 'ہم آپ کی معلومات کیسے استعمال کرتے ہیں',
      p3: 'ہم جمع کردہ معلومات کو مختلف طریقوں سے استعمال کرتے ہیں، بشمول: اپنی ویب سائٹ فراہم کرنا، چلانا اور برقرار رکھنا؛ اپنی ویب سائٹ کو بہتر بنانا، ذاتی بنانا اور پھیلانا؛ یہ سمجھنا اور تجزیہ کرنا کہ آپ ہماری ویب سائٹ کیسے استعمال کرتے ہیں؛ نئی مصنوعات، خدمات، خصوصیات اور فعالیت تیار کرنا؛ آپ سے براہ راست یا ہمارے شراکت داروں میں سے کسی کے ذریعے رابطہ کرنا، بشمول کسٹمر سروس کے لیے، آپ کو ویب سائٹ سے متعلق اپ ڈیٹس اور دیگر معلومات فراہم کرنے کے لیے، اور مارکیٹنگ اور پروموشنل مقاصد کے لیے۔',
      h2_3: 'سیکورٹی',
      p4: 'آپ کی ذاتی معلومات کی حفاظت ہمارے لیے اہم ہے، لیکن یاد رکھیں کہ انٹرنیٹ پر ترسیل کا کوئی طریقہ، یا الیکٹرانک اسٹوریج کا کوئی طریقہ، 100% محفوظ نہیں ہے۔ جب کہ ہم آپ کی ذاتی معلومات کی حفاظت کے لیے تجارتی طور پر قابل قبول ذرائع استعمال کرنے کی کوشش کرتے ہیں، ہم اس کی مکمل حفاظت کی ضمانت نہیں دے سکتے۔',
    }
  };

  const content = privacyContent[language];

  return (
    <PageContainer titleKey="privacy_title">
      <div className="max-w-4xl mx-auto bg-white dark:bg-navy-blue p-8 rounded-lg shadow-md dark:shadow-gold/10 text-gray-700 dark:text-gray-200 space-y-6">
        <p>{content.p1}</p>

        <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl font-bold text-navy-blue dark:text-white`}>{content.h2_1}</h2>
        <p>{content.p2}</p>

        <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl font-bold text-navy-blue dark:text-white`}>{content.h2_2}</h2>
        <p>{content.p3}</p>
        
        <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl font-bold text-navy-blue dark:text-white`}>{content.h2_3}</h2>
        <p>{content.p4}</p>
      </div>
    </PageContainer>
  );
};

export default PrivacyPage;