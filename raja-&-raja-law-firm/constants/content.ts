import { Language } from '../types';

type ContentTree = {
  [key: string]: {
    [lang in Language]: string;
  };
};

export const content: ContentTree = {
  // Navigation
  nav_home: { en: 'Home', ur: 'مرکزی صفحہ' },
  nav_about: { en: 'About Us', ur: 'ہمارے بارے میں' },
  nav_services: { en: 'Services', ur: 'خدمات' },
  nav_team: { en: 'Our Team', ur: 'ہماری ٹیم' },
  nav_blog: { en: 'Blog & News', ur: 'بلاگ اور خبریں' },
  nav_faq: { en: 'FAQ', ur: 'اکثر پوچھے گئے سوالات' },
  nav_contact: { en: 'Contact Us', ur: 'ہم سے رابطہ کریں' },
  nav_booking: { en: 'Book Consultation', ur: 'مشاورت بُک کریں' },
  nav_privacy: { en: 'Privacy Policy', ur: 'رازداری کی پالیسی' },
  nav_portal: { en: 'Case Client Portal', ur: 'کیس کلائنٹ پورٹل' },

  // Hero Section
  hero_tagline: { en: "Pakistan’s Most Trusted Experts in Service & Labour Law", ur: "پاکستان کے سب سے قابل اعتماد ماہرینِ سروس اور لیبر لاء" },
  hero_subtitle: { en: "Providing trusted legal solutions for employees, employers, and organizations.", ur: "ملازمین، آجروں اور تنظیموں کے لیے قابل اعتماد قانونی حل فراہم کرنا۔" },
  hero_cta_main: { en: 'Book a Paid Consultation', ur: 'معاوضہ مشاورت بک کریں' },
  hero_cta_secondary: { en: 'Get Expert Legal Advice', ur: 'ماہرانہ قانونی مشورہ حاصل کریں' },
  hero_whatsapp: { en: 'Contact on WhatsApp', ur: 'واٹس ایپ پر رابطہ کریں' },

  // Why Choose Us
  why_choose_us_title: { en: 'Why Trust Raja & Raja?', ur: 'راجہ اینڈ راجہ پر بھروسہ کیوں؟' },
  why_choose_us_subtitle: { en: 'Decades of experience, a history of success, and a commitment to our clients.', ur: 'دہائیوں کا تجربہ، کامیابی کی تاریخ، اور اپنے مؤکلوں سے وابستگی۔' },
  metric_experience_value: { en: '20+', ur: '۲۰+' },
  metric_experience_label: { en: 'Years of Experience', ur: 'سال کا تجربہ' },
  metric_cases_value: { en: '500+', ur: '۵۰۰+' },
  metric_cases_label: { en: 'Successful Cases', ur: 'کامیاب کیسز' },
  metric_registered_value: { en: 'Verified', ur: 'تصدیق شدہ' },
  metric_registered_label: { en: 'Bar Council Registered', ur: 'بار کونسل رجسٹرڈ' },
  
  // Process Section
  process_title: { en: 'Our Simple 3-Step Consultation Process', ur: 'ہمارا سادہ 3 قدمی مشاورتی عمل' },
  process_step1_title: { en: '1. Book & Pay Securely', ur: '۱. محفوظ طریقے سے بک اور ادائیگی کریں' },
  process_step1_desc: { en: 'Fill out our simple form and complete the payment through our secure options.', ur: 'ہمارا سادہ فارم پُر کریں اور ہمارے محفوظ اختیارات کے ذریعے ادائیگی مکمل کریں۔' },
  process_step2_title: { en: '2. Expert Case Review', ur: '۲. ماہر کیس کا جائزہ' },
  process_step2_desc: { en: 'Our legal team will review your submitted details to prepare for your session.', ur: 'ہماری قانونی ٹیم آپ کے سیشن کی تیاری کے لیے آپ کی جمع کرائی گئی تفصیلات کا جائزہ لے گی۔' },
  process_step3_title: { en: '3. Private Consultation', ur: '۳. نجی مشاورت' },
  process_step3_desc: { en: 'You will have a one-on-one confidential consultation with a specialist lawyer.', ur: 'آپ کی ایک ماہر وکیل کے ساتھ ون ٹو ون خفیہ مشاورت ہوگی۔' },

  // About Page
  about_title: { en: 'Pioneering Legal Excellence in Lahore', ur: 'لاہور میں قانونی فضیلت کے علمبردار' },
  about_p1: { en: 'Founded on the principles of integrity, dedication, and unparalleled legal expertise, Raja & Raja Law Firm has established itself as a cornerstone of the legal community in Lahore, Pakistan. Our firm is built on a legacy of success, providing comprehensive legal solutions with a primary focus on Service and Labour Law.', ur: 'دیانت، لگن اور بے مثال قانونی مہارت کے اصولوں پر قائم، راجہ اینڈ راجہ لاء فرم نے خود کو لاہور، پاکستان کی قانونی برادری کا ایک سنگ میل ثابت کیا ہے۔ ہماری فرم کامیابی کی میراث پر قائم ہے، جو سروس اور لیبر لاء پر بنیادی توجہ کے ساتھ جامع قانونی حل فراہم کرتی ہے۔' },
  about_p2: { en: 'Our mission is to empower our clients—be they individuals, employees, employers, or businesses—with the knowledge, representation, and support they need to navigate the complexities of the legal system. We believe in building lasting relationships based on trust and achieving the best possible outcomes for those we serve.', ur: 'ہمارا مشن اپنے مؤکلوں کو—چاہے وہ افراد ہوں، ملازمین ہوں، آجر ہوں یا کاروبار—علم، نمائندگی اور مدد سے بااخ tätig بنانا ہے تاکہ وہ قانونی نظام کی پیچیدگیوں سے نمٹ سکیں۔ ہم اعتماد پر مبنی دیرپا تعلقات استوار کرنے اور اپنے مؤکلوں کے لیے بہترین ممکنہ نتائج حاصل کرنے پر یقین رکھتے ہیں۔' },
  
  // Services
  services_title: { en: 'Our Core Expertise', ur: 'ہماری بنیادی مہارت' },

  // Team
  team_title: { en: 'Our Professional Legal Team', ur: 'ہماری پیشہ ور قانونی ٹیم' },
  team_subtitle: { en: 'Meet the experts dedicated to your legal success.', ur: 'آپ کی قانونی کامیابی کے لیے وقف ماہرین سے ملیں۔' },

  // Blog
  blog_title: { en: 'Legal Insights & Firm News', ur: 'قانونی بصیرت اور فرم کی خبریں' },
  read_more: { en: 'Read More', ur: 'مزید پڑھیں' },

  // Blog Post Page CTA
  blog_cta_heading: { en: 'Need expert advice on your legal matter? Book a private consultation with our Service & Labour Law experts.', ur: 'کیا آپ کو اپنے قانونی مسئلے پر ماہر مشورے کی ضرورت ہے؟ ہمارے سروس اور لیبر لاء کے ماہرین سے نجی مشاورت بُک کریں۔' },

  // FAQ
  faq_title: { en: 'Frequently Asked Questions', ur: 'اکثر پوچھے گئے سوالات' },

  // Testimonials
  testimonials_title: { en: 'What Our Clients Say', ur: 'ہمارے مؤکل کیا کہتے ہیں' },
  
  // Contact
  contact_title: { en: 'Get In Touch', ur: 'رابطہ کریں' },
  contact_subtitle: { en: 'We are here to help. Reach out to us for any legal inquiries or to schedule a consultation.', ur: 'ہم مدد کے لیے حاضر ہیں۔ کسی بھی قانونی پوچھ گچھ یا مشاورت کے لیے ہم سے رابطہ کریں۔' },
  form_name: { en: 'Full Name', ur: 'پورا نام' },
  form_email: { en: 'Email Address', ur: 'ای میل ایڈریس' },
  form_phone: { en: 'Phone Number', ur: 'فون نمبر' },
  form_subject: { en: 'Subject', ur: 'موضوع' },
  form_message: { en: 'Your Message', ur: 'آپ کا پیغام' },
  form_submit: { en: 'Send Message', ur: 'پیغام بھیجیں' },
  contact_info: { en: 'Contact Information', ur: 'رابطے کی معلومات' },
  our_office: { en: 'Our Office', ur: 'ہمارا دفتر' },

  // Paid Consultation Page
  consult_title: { en: 'Book a Paid Legal Consultation', ur: 'معاوضہ قانونی مشاورت بُک کریں' },
  consult_subtitle: { en: 'Secure a confidential session with one of Pakistan’s leading Service & Labour Law experts. Get clarity and a strategic roadmap for your legal matter.', ur: 'پاکستان کے معروف سروس اور لیبر لاء ماہرین میں سے ایک کے ساتھ ایک خفیہ سیشن محفوظ بنائیں۔ اپنے قانونی معاملے کے لیے وضاحت اور ایک اسٹریٹجک روڈ میپ حاصل کریں۔' },
  consult_why_book: { en: 'Why Book a Private Consultation?', ur: 'نجی مشاورت کیوں بُک کریں؟' },
  consult_value_1_title: { en: 'Confidential & Private', ur: 'خفیہ اور نجی' },
  consult_value_1_desc: { en: 'Your discussion is fully protected by attorney-client privilege.', ur: 'آپ کی گفتگو مکمل طور پر اٹارنی کلائنٹ استحقاق کے تحت محفوظ ہے۔' },
  consult_value_2_title: { en: 'Expert Strategic Advice', ur: 'ماہرانہ اسٹریٹجک مشورہ' },
  consult_value_2_desc: { en: 'Receive guidance tailored to the specifics of your unique situation.', ur: 'اپنی منفرد صورتحال کی تفصیلات کے مطابق رہنمائی حاصل کریں۔' },
  consult_value_3_title: { en: 'Clear Next Steps', ur: 'واضح اگلے اقدامات' },
  consult_value_3_desc: { en: 'Understand your legal options and the best course of action to take.', ur: 'اپنے قانونی اختیارات اور بہترین لائحہ عمل کو سمجھیں۔' },
  consult_form_title: { en: 'Secure Your Appointment in 3 Simple Steps', ur: '3 سادہ مراحل میں اپنی اپائنٹمنٹ محفوظ بنائیں' },
  consult_progress_step1: { en: 'Case Details', ur: 'کیس کی تفصیلات' },
  consult_progress_step2: { en: 'Scheduling', ur: 'شیڈولنگ' },
  consult_progress_step3: { en: 'Payment', ur: 'ادائیگی' },
  consult_step1_title: { en: 'Step 1: Provide Your Case Details', ur: 'مرحلہ 1: اپنے کیس کی تفصیلات فراہم کریں' },
  consult_step1_desc: { en: 'Please provide some basic information about yourself and your legal matter.', ur: 'براہ کرم اپنے اور اپنے قانونی معاملے کے بارے میں کچھ بنیادی معلومات فراہم کریں۔' },
  consult_form_case_details: { en: 'Briefly describe your legal issue...', ur: 'مختصراً اپنا قانونی مسئلہ بیان کریں...' },
  consult_step2_title: { en: 'Step 2: Schedule Your Session', ur: 'مرحلہ 2: اپنا سیشن شیڈول کریں' },
  consult_step2_desc: { en: 'Select a lawyer, a preferred date, and a time slot for your consultation.', ur: 'اپنی مشاورت کے لیے ایک وکیل، ایک ترجیحی تاریخ، اور ایک ٹائم سلاٹ منتخب کریں۔' },
  consult_form_select_lawyer: { en: 'Select a Lawyer', ur: 'ایک وکیل منتخب کریں' },
  consult_form_select_date: { en: 'Select a Date', ur: 'ایک تاریخ منتخب کریں' },
  consult_form_select_time: { en: 'Select a Time', ur: 'ایک وقت منتخب کریں' },
  consult_step3_title: { en: 'Step 3: Confirm & Pay', ur: 'مرحلہ 3: تصدیق اور ادائیگی کریں' },
  consult_step3_desc: { en: 'Review your booking details and complete the payment to confirm your appointment.', ur: 'اپنی بکنگ کی تفصیلات کا جائزہ لیں اور اپنی اپائنٹمنٹ کی تصدیق کے لیے ادائیگی مکمل کریں۔' },
  consult_payment_method: { en: 'Choose Payment Method', ur: 'ادائیگی کا طریقہ منتخب کریں' },
  consult_payment_jc_tagline: { en: "Pakistan's #1 Mobile Wallet", ur: 'پاکستان کا نمبر 1 موبائل والیٹ' },
  consult_payment_ep_tagline: { en: 'Easy & Instant Payments', ur: 'آسان اور فوری ادائیگیاں' },
  consult_payment_bank_tagline: { en: 'Direct Bank Deposit', ur: 'براہ راست بینک ڈپازٹ' },
  consult_payment_card_tagline: { en: 'Visa, Mastercard & more', ur: 'ویزا، ماسٹر کارڈ وغیرہ' },
  consult_secure_payment_badge: { en: 'SSL Secure Payment', ur: 'SSL محفوظ ادائیگی' },
  consult_secure_payment_desc: { en: 'All transactions are secure and encrypted.', ur: 'تمام لین دین محفوظ اور خفیہ ہیں۔' },
  consult_form_tid: { en: 'Transaction ID (TID)', ur: 'ٹرانزیکشن آئی ڈی (TID)' },
  consult_tid_placeholder: { en: 'Enter 12-digit Transaction ID', ur: '12 ہندسوں کی ٹرانزیکشن آئی ڈی درج کریں۔' },
  consult_summary_title: { en: 'Booking Summary', ur: 'بکنگ کا خلاصہ' },
  consult_summary_fee: { en: 'Consultation Fee', ur: 'مشاورت کی فیس' },
  consult_summary_lawyer: { en: 'Lawyer', ur: 'وکیل' },
  consult_summary_date_time: { en: 'Date & Time', ur: 'تاریخ اور وقت' },
  consult_summary_not_selected: { en: 'Not Selected', ur: 'منتخب نہیں' },
  consult_confirm_button: { en: 'Pay & Confirm Booking', ur: 'ادائیگی اور بکنگ کی تصدیق کریں' },
  consult_next_button: { en: 'Next Step', ur: 'اگلا مرحلہ' },
  consult_back_button: { en: 'Go Back', ur: 'واپس جائیں' },
  consult_faq_title: { en: 'Questions About Consultations?', ur: 'مشاورت کے بارے میں سوالات؟' },
  consult_processing_payment: { en: 'Processing your payment...', ur: 'آپ کی ادائیگی پر کارروائی ہو رہی ہے...' },
  consult_payment_error: { en: 'Payment failed. Please try another method or contact support.', ur: 'ادائیگی ناکام ہوگئی۔ براہ کرم دوسرا طریقہ آزمائیں یا سپورٹ سے رابطہ کریں۔' },
  consult_success_title: { en: 'Appointment Confirmed!', ur: 'اپائنٹمنٹ کی تصدیق ہو گئی!' },
  consult_success_message: { en: "Your appointment is booked! We have received your payment details. A confirmation with your session details will be sent to you via WhatsApp shortly. For full case representation, our team will contact you directly after verification.", ur: "آپ کی اپائنٹمنٹ بک ہو گئی ہے! ہمیں آپ کی ادائیگی کی تفصیلات موصول ہو گئی ہیں اور ٹرانزیکشن کی تصدیق کے بعد ہم واٹس ایپ کے ذریعے آپ کے سیشن کی تفصیلات بھیجیں گے۔ مکمل کیس کی نمائندگی کے لیے، ہماری ٹیم تصدیق کے بعد آپ سے براہ راست رابطہ کرے گی۔" },
  consult_success_btn_home: { en: 'Back to Home', ur: 'مرکزی صفحہ پر واپس' },
  consult_success_btn_dashboard: { en: 'Go to Dashboard', ur: 'ڈیش بورڈ پر جائیں' },

  // TID Modal
  consult_modal_title: { en: 'Enter Your Transaction ID to Confirm Payment', ur: 'ادائیگی کی تصدیق کے لیے اپنی ٹرانزیکشن ID درج کریں' },
  consult_modal_upload_label: { en: 'Upload Payment Proof (Optional)', ur: 'ادائیگی کا ثبوت اپ لوڈ کریں (اختیاری)' },
  consult_modal_upload_cta: { en: 'Click to upload', ur: 'اپ لوڈ کرنے کے لیے کلک کریں' },
  consult_modal_upload_desc: { en: 'PNG, JPG, PDF up to 5MB', ur: 'PNG, JPG, PDF (5MB تک)' },
  consult_modal_info_note: { en: 'Your information is secure and will only be used for payment verification.', ur: 'آپ کی معلومات محفوظ ہیں اور صرف ادائیگی کی تصدیق کے لیے استعمال کی جائیں گی۔' },
  consult_modal_verify_button: { en: 'Verify & Continue', ur: 'تصدیق کریں اور جاری رکھیں' },
  consult_modal_verifying_button: { en: 'Verifying...', ur: 'تصدیق ہو رہی ہے...' },
  consult_modal_error: { en: 'Invalid TID or transaction not found. Please double-check and try again.', ur: 'غلط TID یا ٹرانزیکشن نہیں ملی۔ براہ کرم دوبارہ چیک کریں اور کوشش کریں۔' },

  // Privacy
  privacy_title: { en: 'Privacy Policy', ur: 'رازداری کی پالیسی' },

  // Chatbot
  chatbot_greeting: { en: 'Hello! I can provide general information on Pakistani law. For legal advice specific to your situation, a paid consultation with our expert lawyers is required. How can I assist you today?', ur: 'خوش آمدید! میں پاکستانی قانون پر عمومی معلومات فراہم کر سکتا ہوں۔ آپ کی صورتحال کے لیے مخصوص قانونی مشورے کے لیے، ہمارے ماہر وکلاء کے ساتھ معاوضہ مشاورت ضروری ہے۔ آج میں آپ کی کیا مدد کر سکتا ہوں؟' },
  chatbot_disclaimer: { en: 'This is general information, not legal advice. For advice on your specific case, please book a paid consultation with our expert lawyers.', ur: 'یہ عمومی معلومات ہے، قانونی مشورہ نہیں۔ اپنے مخصوص کیس پر مشورے کے لیے، براہ کرم ہمارے ماہر وکلاء سے معاوضہ مشاورت بک کریں۔' },
  chatbot_placeholder: { en: 'Type your question here...', ur: 'اپنا سوال یہاں ٹائپ کریں...' },
  
  // Footer
  footer_rights: { en: 'All Rights Reserved.', ur: 'جملہ حقوق محفوظ ہیں' },
  footer_tagline: { en: 'Experts in Service & Labour Law — Trusted Legal Consultancy in Pakistan.', ur: 'سروس اور لیبر لاء کے ماہرین — پاکستان میں قابلِ اعتماد قانونی مشاورت۔' },
  footer_col_firm: { en: 'Firm', ur: 'فرم' },
  footer_col_practice: { en: 'Practice Areas', ur: 'پریکٹس کے شعبے' },
  footer_col_resources: { en: 'Resources', ur: 'وسائل' },
  footer_col_connect: { en: 'Connect', ur: 'رابطہ کریں' },
  footer_link_careers: { en: 'Careers', ur: 'ملازمتیں' },
  footer_link_corporate_civil: { en: 'Corporate & Civil Law', ur: 'کارپوریٹ اور سول لاء' },
  footer_link_family_property: { en: 'Family & Property Law', ur: 'فیملی اور پراپرٹی لاء' },
  footer_link_criminal: { en: 'Criminal Defense', ur: 'فوجداری دفاع' },
  footer_link_news: { en: 'Legal News', ur: 'قانونی خبریں' },
  footer_address_value: { en: '123 Main Boulevard, Gulberg, Lahore, Pakistan', ur: '123 مین بلیوارڈ، گلبرگ، لاہور، پاکستان' },
  footer_email_value: { en: 'info@rajaandrajalaw.com', ur: 'info@rajaandrajalaw.com' },
  footer_terms: { en: 'Terms of Service', ur: 'سروس کی شرائط' },

  // --- Client Portal ---
  // Login Page
  login_title: { en: 'Client Portal Access', ur: 'کلائنٹ پورٹل تک رسائی' },
  login_subtitle: { en: 'Securely access your case details and communicate with our team.', ur: 'اپنے کیس کی تفصیلات تک محفوظ طریقے سے رسائی حاصل کریں اور ہماری ٹیم سے رابطہ کریں۔' },
  login_access_restriction: { en: 'Access restricted to verified service clients only. Please contact our office for activation.', ur: 'رسائی صرف تصدیق شدہ سروس کلائنٹس تک محدود ہے۔ ایکٹیویشن کے لیے براہ کرم ہمارے دفتر سے رابطہ کریں۔' },
  login_email_cnic: { en: 'Email / CNIC', ur: 'ای میل / شناختی کارڈ نمبر' },
  login_password: { en: 'Password', ur: 'پاس ورڈ' },
  login_button: { en: 'Login Securely', ur: 'محفوظ طریقے سے لاگ ان کریں' },
  login_forgot_password: { en: 'Forgot Password?', ur: 'پاس ورڈ بھول گئے؟' },
  login_support: { en: 'Contact Support', ur: 'سپورٹ سے رابطہ کریں' },
  login_back_to_home: { en: 'Back to Main Site', ur: 'مرکزی سائٹ پر واپس' },
  login_error: { en: 'Invalid credentials. Please try again.', ur: 'غلط تفصیلات۔ براہ مہربانی دوبارہ کوشش کریں.' },
  login_error_expired: { en: 'Your temporary password has expired. Please contact support.', ur: 'آپ کا عارضی پاس ورڈ ختم ہو گیا ہے۔ براہ کرم سپورٹ سے رابطہ کریں۔' },
  login_demo_title: { en: 'Demo Credentials', ur: 'ڈیمو کی تفصیلات' },

  // Password Change Modal
  pw_change_title: { en: 'Secure Your Account', ur: 'اپنا اکاؤنٹ محفوظ کریں' },
  pw_change_subtitle: { en: 'This is your first login. For your security, please create a new password to continue.', ur: 'یہ آپ کا پہلا لاگ ان ہے۔ اپنی سیکیورٹی کے لیے، براہ کرم جاری رکھنے کے لیے ایک نیا پاس ورڈ بنائیں۔' },
  pw_change_new: { en: 'New Password', ur: 'نیا پاس ورڈ' },
  pw_change_confirm: { en: 'Confirm New Password', ur: 'نئے پاس ورڈ کی تصدیق کریں' },
  pw_change_button: { en: 'Set Password & Continue', ur: 'پاس ورڈ سیٹ کریں اور جاری رکھیں' },
  pw_change_error_match: { en: 'Passwords do not match.', ur: 'پاس ورڈ مماثل نہیں ہیں۔' },
  pw_change_success: { en: 'Password updated successfully!', ur: 'پاس ورڈ کامیابی سے اپ ڈیٹ ہو گیا!' },
  
  // Portal Navigation
  portal_nav_dashboard: { en: 'Dashboard', ur: 'ڈیش بورڈ' },
  portal_nav_case_status: { en: 'My Case Status', ur: 'میرے کیس کی حیثیت' },
  portal_nav_hearings: { en: 'Hearings & Schedule', ur: 'سماعت اور شیڈول' },
  portal_nav_payments: { en: 'Payments & Invoices', ur: 'ادائیگی اور انوائس' },
  portal_nav_documents: { en: 'Documents', ur: 'دستاویزات' },
  portal_nav_messages: { en: 'Messages', ur: 'پیغامات' },
  portal_nav_ai_assistant: { en: 'AI Case Assistant', ur: 'AI کیس اسسٹنٹ' },
  portal_nav_resources: { en: 'Legal Resources', ur: 'قانونی وسائل' },
  portal_nav_settings: { en: 'Settings', ur: 'ترتیبات' },
  portal_nav_logout: { en: 'Logout', ur: 'لاگ آؤٹ' },
  
  // Portal Header
  portal_header_welcome: { en: 'Welcome', ur: 'خوش آمدید' },
  portal_header_notifications: { en: 'Notifications', ur: 'اطلاعات' },

  // Portal Dashboard
  portal_dashboard_title: { en: 'Case Dashboard', ur: 'کیس ڈیش بورڈ' },
  card_case_status: { en: 'Case Status', ur: 'کیس کی حیثیت' },
  card_next_hearing: { en: 'Next Hearing', ur: 'اگلی سماعت' },
  card_no_hearing_scheduled: { en: 'None Scheduled', ur: 'کوئی شیڈول نہیں' },
  card_assigned_lawyer: { en: 'Assigned Lawyer', ur: 'مقرر وکیل' },
  card_fee_status: { en: 'Fee Status', ur: 'فیس کی حیثیت' },
  card_fees_total: { en: 'Total', ur: 'کل' },
  card_fees_paid: { en: 'Paid', ur: 'ادا شدہ' },
  card_fees_remaining: { en: 'Remaining', ur: 'باقی' },
  
  // Portal Case Status Page
  case_status_title: { en: 'My Case Status', ur: 'میرے کیس کی حیثیت' },
  case_timeline_title: { en: 'Case Timeline', ur: 'کیس ٹائم لائن' },
  
  // Portal Payments Page
  payments_title: { en: 'Payments & Invoices', ur: 'ادائیگی اور انوائس' },
  fee_summary: { en: 'Fee Summary', ur: 'فیس کا خلاصہ' },
  payment_history: { en: 'Payment History', ur: 'ادائیگی کی تاریخ' },
  invoice_id: { en: 'Invoice ID', ur: 'انوائس آئی ڈی' },
  date: { en: 'Date', ur: 'تاریخ' },
  amount: { en: 'Amount', ur: 'رقم' },
  method: { en: 'Method', ur: 'طریقہ' },
  receipt: { en: 'Receipt', ur: 'رسید' },
  download: { en: 'Download', ur: 'ڈاؤن لوڈ' },
  pay_next_installment: { en: 'Pay Next Installment', ur: 'اگلی قسط ادا کریں' },

  // Portal Documents Page
  documents_title: { en: 'Document Management', ur: 'دستاویزات کا انتظام' },
  client_uploads: { en: 'My Uploaded Documents', ur: 'میری اپ لوڈ کردہ دستاویزات' },
  firm_documents: { en: 'Documents from the Firm', ur: 'فرم سے دستاویزات' },
  upload_new_document: { en: 'Upload New Document', ur: 'نئی دستاویز اپ لوڈ کریں' },
  doc_name: { en: 'Document Name', ur: 'دستاویز کا نام' },
  uploaded_by: { en: 'Uploaded By', ur: 'اپ لوڈ کنندہ' },
  
  // Portal Messages Page
  messages_title: { en: 'Secure Messaging', ur: 'محفوظ پیغام رسانی' },
  messages_placeholder: { en: 'Type your message to your lawyer...', ur: 'اپنے وکیل کو اپنا پیغام ٹائپ کریں...' },
  send: { en: 'Send', ur: 'بھیجیں' },
  
  // Portal AI Assistant
  ai_title: { en: 'AI Case Assistant', ur: 'AI کیس اسسٹنٹ' },
  ai_greeting: { en: 'Hello! I am your AI Case Assistant. I can provide updates on your case status, hearing schedule, and payment summary. How can I help you today?', ur: 'خوش آمدید! میں آپ کا AI کیس اسسٹنٹ ہوں۔ میں آپ کے کیس کی حیثیت، سماعت کے شیڈول، اور ادائیگی کے خلاصے پر اپ ڈیٹس فراہم کر سکتا ہوں۔ آج میں آپ کی کیا مدد کر سکتا ہوں؟' },
  ai_disclaimer: { en: 'For legal advice, please consult your lawyer directly in the messages tab.', ur: 'قانونی مشورے کے لیے، براہ کرم میسجز ٹیب میں اپنے وکیل سے براہ راست مشورہ کریں۔' },
  ai_placeholder: { en: 'Ask about your case...', ur: 'اپنے کیس کے بارے میں پوچھیں...' },

  // --- Admin Dashboard ---
  admin_nav_dashboard: { en: 'Dashboard', ur: 'ڈیش بورڈ' },
  admin_nav_consultations: { en: 'Consultations', ur: 'مشاورتیں' },
  admin_nav_clients: { en: 'Clients', ur: 'کلائنٹس' },
  admin_nav_payments: { en: 'Payments', ur: 'ادائیگیاں' },
  admin_nav_consultation_payments: { en: 'Consultation Payments', ur: 'مشاورتی ادائیگیاں' },
  admin_nav_case_payments: { en: 'Case Payments', ur: 'کیس کی ادائیگیاں' },
  admin_nav_cases: { en: 'Cases', ur: 'کیسز' },
  admin_nav_documents: { en: 'Documents', ur: 'دستاویزات' },
  admin_nav_messages: { en: 'Messages', ur: 'پیغامات' },
  admin_nav_notifications: { en: 'Notifications', ur: 'اطلاعات' },
  admin_nav_settings: { en: 'Settings', ur: 'ترتیبات' },
  admin_nav_logout: { en: 'Logout', ur: 'لاگ آؤٹ' },
  admin_search_placeholder: { en: 'Search clients, cases...', ur: 'کلائنٹس، کیسز تلاش کریں...' },
  admin_card_pending_consultations: { en: 'Pending Consultations', ur: 'زیر التواء مشاورتیں' },
  admin_card_active_clients: { en: 'Total Active Clients', ur: 'کل فعال کلائنٹس' },
  admin_card_verified_payments: { en: 'Verified Payments (Month)', ur: 'تصدیق شدہ ادائیگیاں (ماہ)' },
  admin_card_upcoming_hearings: { en: 'Upcoming Hearings (7 days)', ur: 'آئندہ سماعتیں (7 دن)' },
  admin_card_total_revenue: { en: 'Total Revenue', ur: 'کل آمدنی' },
  admin_card_verified_case_payments: { en: 'Verified Case Payments', ur: 'تصدیق شدہ کیس ادائیگیاں' },
  admin_recent_consultations_title: { en: 'Recent Consultations', ur: 'حالیہ مشاورتیں' },
  admin_cases_by_status_title: { en: 'Cases by Status', ur: 'حیثیت کے لحاظ سے کیسز' },
};
