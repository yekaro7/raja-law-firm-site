// Fix: Import React to enable JSX syntax for icon components.
import React from 'react';
import { Service } from '../types';

// Fix: Replaced JSX with React.createElement to be valid in a .ts file.
const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25H5.92a2.25 2.25 0 01-2.25-2.25v-4.07a2.25 2.25 0 01.92-1.75l.22-.16a2.25 2.25 0 00-1.74-4.28V5.92a2.25 2.25 0 012.25-2.25h13.5a2.25 2.25 0 012.25 2.25v.22a2.25 2.25 0 00-1.74 4.28l.22.16a2.25 2.25 0 01.92 1.75z" })
  )
);

// Fix: Replaced JSX with React.createElement to be valid in a .ts file.
const ScaleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.153.24c-1.119 0-2.233-.254-3.285-.745M5.25 4.97c-1.01.143-2.01.317-3 .52m3-.52l-2.62 10.726c-.122.499.106 1.028.589 1.202a5.988 5.988 0 002.153.24c1.119 0 2.233-.254 3.285-.745m8.25-7.45h-1.5m-1.5 0h-1.5m-1.5 0h-1.5m-1.5 0h-1.5M12 6.75v.008v.008v.008v.008v.008" })
  )
);

// Fix: Replaced JSX with React.createElement to be valid in a .ts file.
const BuildingLibraryIcon = (props: React.SVGProps<SVGSVGElement>) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" })
    )
);

// Fix: Replaced JSX with React.createElement to be valid in a .ts file.
const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.663l.001.001M12 14.25a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" })
    )
);

// Fix: Replaced JSX with React.createElement to be valid in a .ts file.
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m-3-1l-3 1.091M15.75 4.5l-3 1.091m0 0l-3-1.091m3 1.091v11.182" })
    )
);


export const services: Service[] = [
  {
    id: 'service-labour',
    title: { en: 'Service & Labour Law', ur: 'سروس اور لیبر لاء' },
    description: {
      en: "Our firm's cornerstone practice is Service & Labour Law, where we have established a reputation as one of Pakistan's leading authorities. We provide comprehensive legal services to employees, employers, trade unions, and organizations across all sectors. Our expertise covers the full spectrum of employment-related matters, from initial contract drafting to complex litigation. We meticulously draft and review **Employment Contracts** to ensure they are compliant with Pakistani law and protect our clients' interests, clearly defining terms of employment, compensation, and termination clauses. We are staunch advocates for employees who have faced **Wrongful Termination**, building robust cases to challenge unlawful dismissals and secure rightful compensation. Our team is highly experienced in resolving **Industrial Disputes**, representing clients before Labour Courts and Tribunals, and engaging in effective negotiation and mediation to settle conflicts over wages, working conditions, and collective bargaining agreements. We are passionate about upholding **Workplace Rights**, advising on issues such as discrimination, harassment, workplace safety, and wage and hour laws. For our corporate clients, we offer critical guidance on **HR Compliance**, helping them navigate the intricate web of labour regulations to develop compliant policies, conduct internal audits, and avoid costly legal challenges. Our proactive approach ensures that your organization remains a fair and lawful workplace.",
      ur: "ہماری فرم کا بنیادی پریکٹس ایریا سروس اور لیبر لاء ہے، جہاں ہم نے پاکستان کے معروف ترین اداروں میں سے ایک کے طور پر شہرت قائم کی ہے۔ ہم تمام شعبوں میں ملازمین، آجروں، ٹریڈ یونینوں اور تنظیموں کو جامع قانونی خدمات فراہم کرتے ہیں۔ ہماری مہارت ملازمت سے متعلق تمام معاملات پر محیط ہے، ابتدائی معاہدے کی تشکیل سے لے کر پیچیدہ قانونی چارہ جوئی تک۔ ہم **ملازمت کے معاہدوں** کا بغور جائزہ لیتے اور تیار کرتے ہیں تاکہ یہ یقینی بنایا جا سکے کہ وہ پاکستانی قانون کے مطابق ہیں اور ہمارے مؤکلوں کے مفادات کا تحفظ کرتے ہیں، جس میں ملازمت کی شرائط، معاوضہ، اور برطرفی کی شقوں کو واضح طور پر بیان کیا جاتا ہے۔ ہم ان ملازمین کے مضبوط حامی ہیں جنہیں **غلط برطرفی** کا سامنا کرنا پڑا ہے، غیر قانونی برطرفیوں کو چیلنج کرنے اور صحیح معاوضہ حاصل کرنے کے لیے مضبوط کیس بناتے ہیں۔ ہماری ٹیم **صنعتی تنازعات** کو حل کرنے میں انتہائی تجربہ کار ہے، لیبر کورٹس اور ٹربیونلز کے سامنے مؤکلوں کی نمائندگی کرتی ہے، اور اجرت، کام کے حالات، اور اجتماعی سودے بازی کے معاہدوں پر تنازعات کو حل کرنے کے لیے مؤثر مذاکرات اور ثالثی میں مشغول رہتی ہے۔ ہم **کام کی جگہ پر حقوق** کو برقرار رکھنے کے بارے میں پرجوش ہیں، امتیازی سلوک، ہراسانی، کام کی جگہ کی حفاظت، اور اجرت اور اوقات کے قوانین جیسے مسائل پر مشورہ دیتے ہیں۔ اپنے کارپوریٹ کلائنٹس کے لیے، ہم **ایچ آر کمپلائنس** پر اہم رہنمائی پیش کرتے ہیں، جس سے انہیں لیبر کے ضوابط کے پیچیدہ جال کو نیویگیٹ کرنے، مطابق پالیسیاں تیار کرنے، داخلی آڈٹ کرنے، اور مہنگے قانونی چیلنجوں سے بچنے میں مدد ملتی ہے۔ ہمارا فعال نقطہ نظر اس بات کو یقینی بناتا ہے کہ آپ کی تنظیم ایک منصفانہ اور قانونی کام کی جگہ بنی رہے۔"
    },
    icon: BriefcaseIcon
  },
  {
    id: 'civil-law',
    title: { en: 'Civil Law', ur: 'سول لاء' },
    description: {
      en: 'We provide comprehensive consultancy and litigation services in civil matters, including contract law, torts, and personal disputes. Our team is skilled in negotiation, mediation, and courtroom representation to resolve conflicts efficiently and effectively.',
      ur: 'ہم سول معاملات میں جامع مشاورت اور قانونی چارہ جوئی کی خدمات فراہم کرتے ہیں، بشمول معاہدہ قانون، ٹارٹس، اور ذاتی تنازعات۔ ہماری ٹیم تنازعات کو مؤثر اور مؤثر طریقے سے حل کرنے کے لیے مذاکرات، ثالثی، اور عدالتی نمائندگی میں ماہر ہے۔'
    },
    icon: ScaleIcon
  },
  {
    id: 'corporate-law',
    title: { en: 'Corporate Law', ur: 'کارپوریٹ لاء' },
    description: {
      en: 'We assist businesses of all sizes with their legal needs, from incorporation and governance to mergers, acquisitions, and regulatory compliance. Our proactive approach helps clients mitigate risks and achieve their business objectives within the legal framework.',
      ur: 'ہم ہر سائز کے کاروبار کو ان کی قانونی ضروریات میں مدد کرتے ہیں، کارپوریشن اور گورننس سے لے کر انضمام، حصول، اور ریگولیٹری تعمیل تک۔ ہمارا فعال نقطہ نظر مؤکلوں کو خطرات کو کم کرنے اور قانونی فریم ورک کے اندر اپنے کاروباری مقاصد حاصل کرنے میں مدد کرتا ہے۔'
    },
    icon: BuildingLibraryIcon
  },
  {
    id: 'family-law',
    title: { en: 'Family Law', ur: 'فیملی لاء' },
    description: {
      en: 'Our firm handles sensitive family law cases with compassion and professionalism. We provide legal support for matters such as divorce, child custody, guardianship, and inheritance, always prioritizing the well-being of the family.',
      ur: 'ہماری فرم حساس فیملی لاء کیسز کو ہمدردی اور پیشہ ورانہ مہارت سے سنبھالتی ہے۔ ہم طلاق، بچوں کی تحویل، سرپرستی، اور وراثت جیسے معاملات کے لیے قانونی مدد فراہم کرتے ہیں، ہمیشہ خاندان کی فلاح و بہبود کو ترجیح دیتے ہیں۔'
    },
    icon: UsersIcon
  },
  {
    id: 'property-law',
    title: { en: 'Property & Criminal Law', ur: 'پراپرٹی اور فوجداری قانون' },
    description: {
      en: 'We offer expert advice on all aspects of property law, including sales, purchases, leases, and disputes. Additionally, our experienced criminal defense lawyers provide robust representation for clients facing criminal charges, ensuring their rights are protected throughout the legal process.',
      ur: 'ہم پراپرٹی قانون کے تمام پہلوؤں پر ماہرانہ مشورہ پیش کرتے ہیں، بشمول فروخت، خریداری، لیز، اور تنازعات۔ مزید برآں، ہمارے تجربہ کار فوجداری دفاعی وکلاء فوجداری الزامات کا سامنا کرنے والے مؤکلوں کے لیے مضبوط نمائندگی فراہم کرتے ہیں، اس بات کو یقینی بناتے ہوئے کہ ان کے حقوق پورے قانونی عمل میں محفوظ رہیں۔'
    },
    icon: HomeIcon
  }
];