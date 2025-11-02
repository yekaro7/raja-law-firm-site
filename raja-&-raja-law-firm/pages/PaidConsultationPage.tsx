import React, { useState, useMemo } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { teamMembers } from '../constants/team';
import { testimonials } from '../constants/testimonials';
import { faqs } from '../constants/faq';
import { FAQItem, Page } from '../types';

// --- Icons ---
const LockIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" /></svg>;
const GavelIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path d="M10 3.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z" /><path fillRule="evenodd" d="M5.013 7.33a.75.75 0 01.99-1.134l1.206 1.056a.75.75 0 01-.99 1.134l-1.206-1.056zM14.987 7.33a.75.75 0 01-.99 1.134l-1.206-1.056a.75.75 0 01.99-1.134l1.206 1.056z" /><path d="M7 11.25a3.5 3.5 0 006.465 2.138.75.75 0 011.366.626A5 5 0 015.5 12.634a.75.75 0 01.816-1.306A3.502 3.502 0 007 11.25zM12 15.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zM9.25 15.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zM6.5 15.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H7.25a.75.75 0 01-.75-.75v-.008z" /></svg>;
const CheckBadgeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>;
const SslLockIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm1.5 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd" /></svg>;

// --- Official Payment Logos ---
const JazzCashIcon = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M499.2 0H336L502.4 246.4L339.2 499.2H499.2L662.4 249.6L499.2 0Z" fill="#D41D24"></path><path d="M835.2 0H672L505.6 246.4L672 499.2H832L998.4 249.6L835.2 0Z" fill="#F58623"></path><path d="M166.4 0H0L249.6 499.2L166.4 662.4V0Z" fill="#A71C21"></path><path d="M854.4 0H1024L774.4 499.2L854.4 662.4V0Z" fill="#F99D2A"></path><path d="M166.4 662.4L249.6 499.2L416 745.6L499.2 912L166.4 662.4Z" fill="#92191E"></path><path d="M854.4 662.4L774.4 499.2L608 745.6L524.8 912L854.4 662.4Z" fill="#F89828"></path><path d="M499.2 912L416 745.6L502.4 582.4L499.2 912Z" fill="#A71C21"></path><path d="M524.8 912L608 745.6L521.6 582.4L524.8 912Z" fill="#F99D2A"></path><path d="M499.2 0L336 0L502.4 246.4L339.2 499.2H499.2L662.4 249.6L499.2 0ZM166.4 0H0L249.6 499.2L166.4 662.4V0Z" fill="#D41D24"></path><path d="M835.2 0H672L505.6 246.4L672 499.2H832L998.4 249.6L835.2 0ZM854.4 0H1024L774.4 499.2L854.4 662.4V0Z" fill="#F58623"></path><path d="M499.2 912L416 745.6L502.4 582.4L499.2 912Z" fill="#A71C21"></path><path d="M524.8 912L608 745.6L521.6 582.4L524.8 912Z" fill="#F99D2A"></path><path d="M166.4 662.4L249.6 499.2L416 745.6L499.2 912L166.4 662.4Z" fill="#92191E"></path><path d="M854.4 662.4L774.4 499.2L608 745.6L524.8 912L854.4 662.4Z" fill="#F89828"></path><path d="M339.2 499.2L502.4 246.4L416 416L339.2 499.2Z" fill="#ED1C24"></path><path d="M684.8 499.2L521.6 246.4L608 416L684.8 499.2Z" fill="#F7941E"></path><path d="M249.6 499.2L416 416V745.6L249.6 499.2Z" fill="#C41A21"></path><path d="M774.4 499.2L608 416V745.6L774.4 499.2Z" fill="#F89828"></path><path d="M416 416L502.4 246.4L499.2 0H336L416 416Z" fill="#ED1C24"></path><path d="M608 416L521.6 246.4L524.8 0H688L608 416Z" fill="#F7941E"></path><path d="M0 0H166.4V662.4L249.6 499.2L0 0Z" fill="#A71C21"></path><path d="M1024 0H854.4V662.4L774.4 499.2L1024 0Z" fill="#F99D2A"></path><path d="M502.4 246.4L416 416L502.4 582.4L505.6 246.4L502.4 246.4Z" fill="#D41D24"></path><path d="M521.6 246.4L608 416L521.6 582.4L518.4 246.4L521.6 246.4Z" fill="#F58623"></path></svg>;
const EasyPaisaIcon = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 148 148" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M74 148C114.866 148 148 114.866 148 74C148 33.134 114.866 0 74 0C33.134 0 0 33.134 0 74C0 114.866 33.134 148 74 148Z" fill="#00B44F"></path><path d="M129.5 74C129.5 98.79 112.51 119.5 92.5 126.31V21.69C112.51 28.49 129.5 49.21 129.5 74Z" fill="#00A148"></path><path d="M96.2 37L74 49.1L51.8 37L37 45.4V102.6L74 121L111 102.6V45.4L96.2 37Z" fill="white"></path><path d="M74 121V49.1L96.2 37L111 45.4V102.6L74 121Z" fill="#E6E6E6"></path><path d="M74 108.9L51.8 96.8V51.2L74 63.3V108.9Z" fill="#00A859"></path><path d="M74 108.9V63.3L96.2 51.2V96.8L74 108.9Z" fill="#009247"></path><path d="M51.8 44.1L37 51.2V96.8L51.8 89.7V44.1Z" fill="#00B44F"></path><path d="M96.2 44.1V89.7L111 96.8V51.2L96.2 44.1Z" fill="#00A148"></path></svg>;
const BankIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path d="M3.5 4.5a.5.5 0 000 1h13a.5.5 0 000-1h-13zM16.5 6.5a.5.5 0 00-.5-.5h-13a.5.5 0 000 1h13a.5.5 0 00.5-.5zM18 9a2 2 0 00-2-2H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9zM5 12a1 1 0 112 0 1 1 0 01-2 0zM9 12a1 1 0 112 0 1 1 0 01-2 0zm4 1a1 1 0 100-2 1 1 0 000 2z" /></svg>;
const CardIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...props}><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" /><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zm-7.5 3.5a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z" clipRule="evenodd" /></svg>;

type PaymentStatus = 'idle' | 'processing' | 'success' | 'error';
interface PaidConsultationPageProps {
  onNavigate: (page: Page) => void;
}

// --- Calendar Component ---
const Calendar: React.FC<{ selectedDate: Date; onDateSelect: (date: Date) => void; }> = ({ selectedDate, onDateSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate.getFullYear(), selectedDate.getMonth()));

    const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

    const changeMonth = (offset: number) => {
        setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + offset));
    };

    const calendarGrid = useMemo(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const numDays = daysInMonth(year, month);
        const firstDay = firstDayOfMonth(year, month);
        
        const blanks = Array(firstDay).fill(null);
        const days = Array.from({ length: numDays }, (_, i) => i + 1);

        return [...blanks, ...days];
    }, [currentMonth]);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
        <div className="bg-white dark:bg-navy-blue/50 p-4 rounded-lg shadow-inner">
            <div className="flex justify-between items-center mb-4">
                <button onClick={() => changeMonth(-1)} className="p-1 rounded-full hover:bg-gold/10">&lt;</button>
                <span className="font-bold text-lg text-navy-blue dark:text-white">
                    {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </span>
                <button onClick={() => changeMonth(1)} className="p-1 rounded-full hover:bg-gold/10">&gt;</button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="font-semibold text-gray-500 dark:text-gray-400">{day.slice(0,1)}</div>)}
                {calendarGrid.map((day, index) => {
                    if (!day) return <div key={`blank-${index}`}></div>;
                    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                    const isSelected = selectedDate.toDateString() === date.toDateString();
                    const isPast = date < today;
                    return (
                        <button
                            key={day}
                            disabled={isPast}
                            onClick={() => onDateSelect(date)}
                            className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors ${
                                isSelected ? 'bg-gold text-navy-blue font-bold' :
                                isPast ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' :
                                'hover:bg-gold/20 text-charcoal dark:text-white'
                            }`}
                        >
                            {day}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

// --- FAQ Item Component ---
const FaqItemComponent: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    const { tb } = useLocalization();
    return (
      <div className="border-t border-gold/20">
        <button
          className="w-full flex justify-between items-center text-left rtl:text-right py-4"
          onClick={onClick}
        >
          <span className="font-semibold text-charcoal dark:text-white">{tb(item.question)}</span>
          <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </span>
        </button>
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
          <div className="pb-4 text-gray-600 dark:text-gray-300">{tb(item.answer)}</div>
        </div>
      </div>
    );
};

// --- TID Verification Modal Component (Refactored) ---
interface TIDVerificationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (e: React.FormEvent) => void;
    tid: string;
    onTidChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    paymentProof: File | null;
    paymentStatus: PaymentStatus;
    paymentError: string;
    language: string;
    t: (key: string) => string;
}

const TIDVerificationModal: React.FC<TIDVerificationModalProps> = ({
    isOpen, onClose, onSubmit, tid, onTidChange, onFileChange,
    paymentProof, paymentStatus, paymentError, language, t
}) => {
    return (
        <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="bg-white dark:bg-navy-blue w-full max-w-md m-4 p-8 rounded-xl shadow-2xl border border-gold/20 transform transition-all duration-300"
                 role="dialog" aria-modal="true"
                 style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)' }}
                 onClick={(e) => e.stopPropagation()}
            >
                <div className="text-center">
                    <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl font-bold text-navy-blue dark:text-white`}>{t('consult_modal_title')}</h2>
                </div>
                <form onSubmit={onSubmit} className="mt-6 space-y-5">
                    <div>
                        <label htmlFor="tid-modal" className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('consult_form_tid')}</label>
                        <input
                            type="text"
                            id="tid-modal"
                            value={tid}
                            onChange={onTidChange}
                            required
                            placeholder={t('consult_tid_placeholder')}
                            maxLength={12}
                            inputMode="numeric"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50 transition dark:bg-charcoal/50 dark:border-gray-600 dark:text-white"
                        />
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{t('consult_modal_upload_label')}</label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gold/30 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-gold hover:text-gold/80 focus-within:outline-none"><span className="">{t('consult_modal_upload_cta')}</span><input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={onFileChange} /></label>
                                    <p className="pl-1 rtl:pr-1">{paymentProof ? paymentProof.name : 'or drag and drop'}</p>
                                </div>
                                <p className="text-xs text-gray-500">{t('consult_modal_upload_desc')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 flex gap-2 items-center">
                        <LockIcon className="h-4 w-4 flex-shrink-0" />
                        <span>{t('consult_modal_info_note')}</span>
                    </div>
                    {paymentError && <p className="text-red-500 text-sm text-center">{paymentError}</p>}
                    <div className="flex gap-4 pt-2">
                       <button type="button" onClick={onClose} className="w-1/2 bg-gray-200 text-charcoal font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">{t('consult_back_button')}</button>
                       <button type="submit" className="w-1/2 bg-gold text-navy-blue font-bold py-3 px-6 rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 flex items-center justify-center" disabled={paymentStatus === 'processing'}>
                           {paymentStatus === 'processing' ? (
                               <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-navy-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                {t('consult_modal_verifying_button')}
                               </>
                           ) : (
                               t('consult_modal_verify_button')
                           )}
                       </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


const PaidConsultationPage: React.FC<PaidConsultationPageProps> = ({ onNavigate }) => {
    const { t, tb, language } = useLocalization();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' });
    const [selectedLawyer, setSelectedLawyer] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [tid, setTid] = useState('');
    const [paymentProof, setPaymentProof] = useState<File | null>(null);
    const [openFaqId, setOpenFaqId] = useState<number | null>(null);
    const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('idle');
    const [paymentError, setPaymentError] = useState('');
    const [isTidModalOpen, setIsTidModalOpen] = useState(false);

    const consultationFaqs = faqs.filter(f => f.id >= 5);

    const mockProcessPayment = (currentTid: string) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (currentTid && currentTid.length > 5) { 
                    resolve('Payment details received!');
                } else {
                    reject(t('consult_modal_error'));
                }
            }, 2500);
        });
    };
    
    const handleTidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (/^\d*$/.test(value) && value.length <= 12) {
            setTid(value);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPaymentProof(e.target.files[0]);
        }
    };

    const handleTidSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPaymentError('');
        setPaymentStatus('processing');
        try {
            await mockProcessPayment(tid);
            setPaymentStatus('success');
            setIsTidModalOpen(false);
        } catch (error: any) {
            setPaymentStatus('error');
            setPaymentError(error);
        }
    };
    
    const handlePaymentMethodSelect = (method: string) => {
        setPaymentMethod(method);
        if (method !== 'Credit/Debit Card') {
            setIsTidModalOpen(true);
        } else {
            setPaymentStatus('processing');
            setTimeout(() => setPaymentStatus('success'), 2000);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const timeSlots = ["10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];
    const selectedLawyerName = teamMembers.find(m => m.id.toString() === selectedLawyer)?.name;

    const paymentMethods = [
        { name: 'JazzCash', icon: <JazzCashIcon className="h-10 mx-auto" />, tagline: t('consult_payment_jc_tagline') },
        { name: 'EasyPaisa', icon: <EasyPaisaIcon className="h-10 mx-auto" />, tagline: t('consult_payment_ep_tagline') },
        { name: 'Bank Transfer', icon: <BankIcon className="h-10 mx-auto text-charcoal dark:text-white" />, tagline: t('consult_payment_bank_tagline') },
        { name: 'Credit/Debit Card', icon: <CardIcon className="h-10 mx-auto text-charcoal dark:text-white" />, tagline: t('consult_payment_card_tagline') }
    ];
    
    const ConfirmationScreen: React.FC = () => {
        return (
            <div className="text-center py-10 fade-in">
                <CheckBadgeIcon className="h-20 w-20 text-green-500 mx-auto" />
                <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-3xl font-bold text-navy-blue dark:text-white mt-4`}>
                    {t('consult_success_title')}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
                    {t('consult_success_message')}
                </p>
                
                <div className="mt-8 bg-gray-50 dark:bg-charcoal/50 p-6 rounded-lg max-w-md mx-auto text-left rtl:text-right">
                     <h3 className="text-lg font-bold text-navy-blue dark:text-white border-b border-gold/20 pb-2 mb-4">{t('consult_summary_title')}</h3>
                     <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">{t('consult_summary_lawyer')}</span>
                            <span className="font-semibold text-charcoal dark:text-white">{selectedLawyerName ? tb(selectedLawyerName) : t('consult_summary_not_selected')}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-300">{t('consult_summary_date_time')}</span>
                            <span className="font-semibold text-charcoal dark:text-white text-right rtl:text-left">
                                {selectedDate.toLocaleDateString(language === 'en' ? 'en-CA' : 'ar-SA')} @ {selectedTime || t('consult_summary_not_selected')}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                  <button onClick={() => onNavigate('home')} className="bg-gold text-navy-blue font-bold py-3 px-8 rounded-lg text-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105">
                    {t('consult_success_btn_home')}
                  </button>
                </div>
            </div>
        );
    };

    return (
        <div className="fade-in">
            <TIDVerificationModal
                isOpen={isTidModalOpen}
                onClose={() => { setIsTidModalOpen(false); setPaymentStatus('idle'); setPaymentError(''); }}
                onSubmit={handleTidSubmit}
                tid={tid}
                onTidChange={handleTidChange}
                paymentProof={paymentProof}
                onFileChange={handleFileChange}
                paymentStatus={paymentStatus}
                paymentError={paymentError}
                language={language}
                t={t}
            />
            {/* Hero Section */}
            <section className="bg-navy-blue text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/consult/1600/900?grayscale&blur=2')" }}>
                <div className="bg-navy-blue/90">
                    <div className="max-w-screen-xl mx-auto px-4 py-16 sm:py-24 text-center">
                        <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-4xl md:text-5xl font-bold text-gold`}>{t('consult_title')}</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">{t('consult_subtitle')}</p>
                    </div>
                </div>
            </section>

            {/* Value Props Section */}
            <section className="py-16 bg-gray-50 dark:bg-charcoal">
                <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-3xl font-bold text-navy-blue dark:text-white`}>{t('consult_why_book')}</h2>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6">
                            <LockIcon className="h-12 w-12 text-gold mx-auto" />
                            <h3 className="mt-4 text-xl font-semibold text-navy-blue dark:text-white">{t('consult_value_1_title')}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{t('consult_value_1_desc')}</p>
                        </div>
                         <div className="p-6">
                            <GavelIcon className="h-12 w-12 text-gold mx-auto" />
                            <h3 className="mt-4 text-xl font-semibold text-navy-blue dark:text-white">{t('consult_value_2_title')}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{t('consult_value_2_desc')}</p>
                        </div>
                         <div className="p-6">
                            <CheckBadgeIcon className="h-12 w-12 text-gold mx-auto" />
                            <h3 className="mt-4 text-xl font-semibold text-navy-blue dark:text-white">{t('consult_value_3_title')}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{t('consult_value_3_desc')}</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Main Booking Section */}
            <section className="py-16 sm:py-24 bg-white dark:bg-navy-blue/95">
                <div className="max-w-screen-xl mx-auto px-4">
                    {paymentStatus !== 'success' && (
                        <div className="text-center mb-12">
                            <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-3xl font-bold text-navy-blue dark:text-white`}>{t('consult_form_title')}</h2>
                        </div>
                    )}

                    <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 relative">
                             {paymentStatus === 'processing' && !isTidModalOpen && (
                                <div className="absolute inset-0 bg-white/70 dark:bg-navy-blue/80 backdrop-blur-sm flex flex-col items-center justify-center z-20">
                                    <svg className="animate-spin h-10 w-10 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    <p className="mt-4 font-semibold text-navy-blue dark:text-white">{t('consult_processing_payment')}</p>
                                </div>
                             )}
                             {paymentStatus === 'success' ? <ConfirmationScreen /> : (
                                <>
                                    {/* Progress Bar */}
                                    <div className="mb-8">
                                        <div className="flex justify-between items-center text-sm font-semibold">
                                            <span className={step >= 1 ? 'text-gold' : 'text-gray-400'}>{t('consult_progress_step1')}</span>
                                            <span className={step >= 2 ? 'text-gold' : 'text-gray-400'}>{t('consult_progress_step2')}</span>
                                            <span className={step >= 3 ? 'text-gold' : 'text-gray-400'}>{t('consult_progress_step3')}</span>
                                        </div>
                                        <div className="mt-2 bg-gray-200 dark:bg-charcoal h-1.5 rounded-full">
                                            <div className="bg-gold h-1.5 rounded-full transition-all duration-500" style={{ width: `${(step - 1) * 50}%` }}></div>
                                        </div>
                                    </div>

                                    {step === 1 && (
                                        <div className="fade-in space-y-6">
                                            <h3 className="text-xl font-bold text-navy-blue dark:text-white">{t('consult_step1_title')}</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder={t('form_name')} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold dark:bg-charcoal/50 dark:border-gray-600 dark:text-white" />
                                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder={t('form_phone')} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold dark:bg-charcoal/50 dark:border-gray-600 dark:text-white" />
                                            </div>
                                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder={t('form_email')} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold dark:bg-charcoal/50 dark:border-gray-600 dark:text-white" />
                                            <textarea name="details" rows={5} value={formData.details} onChange={handleInputChange} required placeholder={t('consult_form_case_details')} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold dark:bg-charcoal/50 dark:border-gray-600 dark:text-white"></textarea>
                                            <button onClick={() => setStep(2)} className="w-full bg-navy-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-navy-blue/90 transition-colors">{t('consult_next_button')}</button>
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <div className="fade-in space-y-6">
                                            <h3 className="text-xl font-bold text-navy-blue dark:text-white">{t('consult_step2_title')}</h3>
                                            <select value={selectedLawyer} onChange={e => setSelectedLawyer(e.target.value)} required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold dark:bg-charcoal/50 dark:border-gray-600 dark:text-white">
                                                <option value="" disabled>{t('consult_form_select_lawyer')}</option>
                                                {teamMembers.map(member => <option key={member.id} value={member.id}>{tb(member.name)}</option>)}
                                            </select>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                 <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
                                                 <div className="grid grid-cols-2 gap-2 content-start">
                                                    {timeSlots.map(time => (
                                                        <button key={time} onClick={() => setSelectedTime(time)} className={`p-2 rounded-md border text-sm font-semibold transition-colors ${selectedTime === time ? 'bg-gold text-navy-blue border-gold' : 'border-gray-300 dark:border-gray-600 hover:bg-gold/10 hover:border-gold/50'}`}>{time}</button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <button onClick={() => setStep(1)} className="w-1/2 bg-gray-200 text-charcoal font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">{t('consult_back_button')}</button>
                                                <button onClick={() => setStep(3)} className="w-1/2 bg-navy-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-navy-blue/90 transition-colors">{t('consult_next_button')}</button>
                                            </div>
                                        </div>
                                    )}

                                    {step === 3 && (
                                        <div className="fade-in space-y-6">
                                             <h3 className="text-xl font-bold text-navy-blue dark:text-white">{t('consult_step3_title')}</h3>
                                            <div className="bg-gray-50 dark:bg-charcoal/50 p-4 rounded-lg flex items-center gap-3">
                                                <SslLockIcon className="h-5 w-5 text-green-500" />
                                                <div>
                                                    <p className="font-semibold text-green-700 dark:text-green-400">{t('consult_secure_payment_badge')}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('consult_secure_payment_desc')}</p>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('consult_payment_method')}</label>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {paymentMethods.map(method => (
                                                        <button type="button" key={method.name} onClick={() => handlePaymentMethodSelect(method.name)} className={`p-4 rounded-lg border-2 text-center transition-all duration-200 transform hover:-translate-y-1 ${paymentMethod === method.name ? 'border-gold bg-gold/10 shadow-lg' : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-charcoal/20 hover:border-gold/50'}`}>
                                                            {method.icon}
                                                            <p className="text-xs mt-2 font-semibold text-charcoal dark:text-white">{method.tagline}</p>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <button type="button" onClick={() => setStep(2)} className="w-full bg-gray-200 text-charcoal font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">{t('consult_back_button')}</button>
                                            </div>
                                        </div>
                                    )}
                                </>
                             )}
                        </div>
                        
                        {paymentStatus !== 'success' && (
                            <div className="lg:col-span-1">
                                <div className="sticky top-28 bg-gray-50 dark:bg-charcoal p-6 rounded-lg shadow-lg dark:shadow-gold/10">
                                    <h3 className="text-xl font-bold text-navy-blue dark:text-white border-b border-gold/20 pb-3 mb-4">{t('consult_summary_title')}</h3>
                                    <div className="space-y-4 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-300">{t('consult_summary_fee')}</span>
                                            <span className="font-semibold text-charcoal dark:text-white">PKR 5,000</span>
                                        </div>
                                         <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-300">{t('consult_summary_lawyer')}</span>
                                            <span className="font-semibold text-charcoal dark:text-white">{selectedLawyerName ? tb(selectedLawyerName) : t('consult_summary_not_selected')}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600 dark:text-gray-300">{t('consult_summary_date_time')}</span>
                                            <span className="font-semibold text-charcoal dark:text-white text-right rtl:text-left">
                                                {selectedDate.toLocaleDateString(language === 'en' ? 'en-CA' : 'ar-SA')}
                                                <br />
                                                {selectedTime || t('consult_summary_not_selected')}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-gold/20">
                                        <div className="flex justify-between text-lg font-bold">
                                            <span className="text-navy-blue dark:text-white">Total</span>
                                            <span className="text-gold">PKR 5,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            
             {/* Testimonials & FAQ Section */}
            <section className="py-16 bg-gray-50 dark:bg-charcoal">
                <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">
                    <div className="text-center">
                        <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-3xl font-bold text-navy-blue dark:text-white`}>{t('testimonials_title')}</h2>
                        <figure className="mt-8 bg-white dark:bg-navy-blue p-8 rounded-lg shadow-lg dark:shadow-gold/10 text-center">
                            <blockquote className="text-lg text-gray-700 dark:text-gray-200 italic"><p>"{tb(testimonials[1].quote)}"</p></blockquote>
                            <figcaption className="mt-6">
                                <div className="font-bold text-navy-blue dark:text-white">{tb(testimonials[1].author)}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{tb(testimonials[1].company)}</div>
                            </figcaption>
                        </figure>
                    </div>
                     <div>
                        <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-3xl font-bold text-navy-blue dark:text-white text-center mb-8`}>{t('consult_faq_title')}</h2>
                        <div>
                            {consultationFaqs.map((faq) => (
                                <FaqItemComponent key={faq.id} item={faq} isOpen={openFaqId === faq.id} onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaidConsultationPage;