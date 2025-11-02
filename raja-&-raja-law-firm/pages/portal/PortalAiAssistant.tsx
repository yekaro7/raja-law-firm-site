import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLocalization } from '../../hooks/useLocalization';
import { ChatMessage } from '../../types';

const PortalAiAssistant: React.FC = () => {
    const { user } = useAuth();
    const { t, tb, language } = useLocalization();
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMessages([{ role: 'model', text: t('ai_greeting') }]);
    }, [t]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    
    const handleSend = async () => {
        if (input.trim() === '' || isLoading || !user) return;

        const userMessage: ChatMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // --- Mock AI Logic ---
        // In a real app, this would call the Gemini API with specific context about the user's case.
        setTimeout(() => {
            let responseText = "I'm sorry, I can only provide information about your case status, hearings, or payments. For legal advice, please use the 'Messages' tab to speak with your lawyer.";
            if (language === 'ur') {
                responseText = "معذرت، میں صرف آپ کے کیس کی حیثیت، سماعتوں، یا ادائیگیوں کے بارے میں معلومات فراہم کر سکتا ہوں۔ قانونی مشورے کے لیے، براہ کرم اپنے وکیل سے بات کرنے کے لیے 'پیغامات' ٹیب کا استعمال کریں۔";
            }
            
            const lowerInput = input.toLowerCase();
            
            if (lowerInput.includes('status')) {
                 const lastCompletedItem = user.caseDetails.timeline.filter(i => i.completed).pop();
                 responseText = `${language === 'en' ? 'Your current case status is:' : 'آپ کے کیس کی موجودہ حیثیت ہے:'} "${user.caseDetails.status}".`;
                 if (lastCompletedItem) {
                    responseText += ` ${language === 'en' ? 'The last update was the completion of the' : 'آخری اپ ڈیٹ کی تکمیل تھی'} "${tb(lastCompletedItem.stage)}" ${language === 'en' ? 'stage.' : 'مرحلہ۔'}`;
                 }
            } else if (lowerInput.includes('hearing') || lowerInput.includes('date')) {
                if (user.caseDetails.nextHearingDate) {
                     responseText = `${language === 'en' ? 'Your next hearing is scheduled for:' : 'آپ کی اگلی سماعت اس تاریخ کو مقرر ہے:'} ${new Date(user.caseDetails.nextHearingDate).toLocaleString(language === 'en' ? 'en-US' : 'ur-PK', { dateStyle: 'full', timeStyle: 'short' })}`;
                } else {
                    responseText = language === 'en' ? 'There is no hearing currently scheduled for your case.' : 'آپ کے کیس کے لیے فی الحال کوئی سماعت مقرر نہیں ہے۔';
                }
            } else if (lowerInput.includes('payment') || lowerInput.includes('fees') || lowerInput.includes('balance')) {
                 responseText = `${language === 'en' ? 'Your fee summary is as follows:' : 'آپ کی فیس کا خلاصہ درج ذیل ہے:'}\n- ${t('card_fees_total')}: PKR ${user.fees.total.toLocaleString()}\n- ${t('card_fees_paid')}: PKR ${user.fees.paid.toLocaleString()}\n- ${t('card_fees_remaining')}: PKR ${user.fees.remaining.toLocaleString()}`;
            }

            const modelMessage: ChatMessage = { role: 'model', text: responseText };
            setMessages(prev => [...prev, modelMessage]);
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="h-full flex flex-col fade-in bg-white dark:bg-navy-blue">
            <header className="p-4 border-b dark:border-gold/20 text-center">
                 <h1 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-2xl font-bold text-navy-blue dark:text-white`}>
                    {t('ai_title')}
                </h1>
            </header>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-charcoal/50">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex my-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`rounded-lg px-4 py-2 max-w-lg whitespace-pre-wrap ${msg.role === 'user' ? 'bg-gold text-white' : 'bg-white dark:bg-navy-blue text-charcoal dark:text-white shadow-sm'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start my-2">
                    <div className="rounded-lg px-4 py-2 bg-white dark:bg-navy-blue text-charcoal dark:text-white shadow-sm">
                      <span className="animate-pulse">...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <footer className="p-4 border-t dark:border-gold/20">
                 <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' && handleSend()}
                        placeholder={t('ai_placeholder')}
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold dark:bg-charcoal dark:border-gray-600 dark:text-white"
                        disabled={isLoading}
                    />
                    <button onClick={handleSend} disabled={isLoading} className="bg-navy-blue dark:bg-gold text-white dark:text-navy-blue p-2.5 rounded-lg hover:opacity-90 disabled:opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">{t('ai_disclaimer')}</p>
            </footer>
        </div>
    );
};

export default PortalAiAssistant;