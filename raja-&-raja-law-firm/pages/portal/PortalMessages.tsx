import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useLocalization } from '../../hooks/useLocalization';
import { PortalMessage } from '../../types';

const PortalMessages: React.FC = () => {
    const { user } = useAuth();
    const { t, language } = useLocalization();
    const [messages, setMessages] = useState<PortalMessage[]>(user?.messages || []);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    if (!user) return null;
    const { assignedLawyer } = user.caseDetails;

    const handleSend = () => {
        if (input.trim() === '') return;
        const newMessage: PortalMessage = {
            id: `MSG-${Date.now()}`,
            sender: 'client',
            text: input,
            timestamp: new Date().toISOString(),
            read: false,
        };
        setMessages([...messages, newMessage]);
        setInput('');
        
        // Simulate lawyer reply
        setTimeout(() => {
            const reply: PortalMessage = {
                 id: `MSG-${Date.now()+1}`,
                 sender: 'lawyer',
                 text: language === 'en' ? 'Thank you for your message. I will review this and get back to you shortly.' : 'آپ کے پیغام کا شکریہ۔ میں اس کا جائزہ لے کر جلد ہی آپ سے رابطہ کروں گا۔',
                 timestamp: new Date().toISOString(),
                 read: false,
            };
            setMessages(prev => [...prev, reply]);
        }, 2000);
    };

    return (
        <div className="h-full flex flex-col fade-in">
            <header className="bg-white dark:bg-navy-blue p-4 border-b dark:border-gold/20 flex items-center space-x-4 rtl:space-x-reverse">
                <img src={assignedLawyer.avatar} alt={assignedLawyer.name} className="w-12 h-12 rounded-full"/>
                <div>
                    <h2 className={`${language === 'ur' ? 'font-urdu' : 'font-serif'} text-lg font-bold text-navy-blue dark:text-white`}>
                        {assignedLawyer.name}
                    </h2>
                    <p className="text-sm text-green-500">{language === 'en' ? 'Online' : 'آن لائن'}</p>
                </div>
            </header>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'client' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${msg.sender === 'client' ? 'bg-gold text-white rounded-br-none rtl:rounded-bl-none rtl:rounded-br-lg' : 'bg-gray-200 dark:bg-charcoal text-charcoal dark:text-white rounded-bl-none rtl:rounded-br-none rtl:rounded-bl-lg'}`}>
                            <p className="text-sm">{msg.text}</p>
                            <p className={`text-xs mt-1 ${msg.sender === 'client' ? 'text-gray-200/70' : 'text-gray-500/70'} text-right rtl:text-left`}>
                                {new Date(msg.timestamp).toLocaleTimeString(language === 'en' ? 'en-US' : 'ar-SA', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <footer className="bg-white dark:bg-navy-blue p-4 border-t dark:border-gold/20">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' && handleSend()}
                        placeholder={t('messages_placeholder')}
                        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold dark:bg-charcoal dark:border-gray-600 dark:text-white"
                    />
                    <button onClick={handleSend} className="bg-gold text-white p-2.5 rounded-lg hover:bg-gold/90">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform rotate-90 rtl:-rotate-90" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default PortalMessages;
