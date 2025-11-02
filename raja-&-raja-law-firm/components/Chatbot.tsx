import React, { useState, useRef, useEffect } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { ChatMessage } from '../types';
import { getChatbotResponse } from '../services/geminiService';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t, language } = useLocalization();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([{ role: 'model', text: t('chatbot_greeting') }]);
    }
  }, [isOpen, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getChatbotResponse([...messages, userMessage]);
      const modelMessage: ChatMessage = { role: 'model', text: response };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { role: 'model', text: "Sorry, something went wrong." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 end-6 bg-gold text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-gold/90 transition-transform transform hover:scale-110 z-50"
        aria-label="Open Chatbot"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
            <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.15l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.15 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div className={`fixed bottom-24 end-6 w-full max-w-sm h-[70vh] max-h-[500px] bg-white dark:bg-charcoal rounded-xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right z-50 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <header className="bg-navy-blue text-white p-4 rounded-t-xl flex justify-between items-center">
            <h3 className={`font-semibold text-lg ${language === 'ur' ? 'font-urdu' : 'font-serif'}`}>{language === 'en' ? 'AI Legal Assistant' : 'اے آئی قانونی معاون'}</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">&times;</button>
          </header>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-navy-blue/20">
            {messages.map((msg, index) => (
              <div key={index} className={`flex my-2 ${msg.role === 'user' ? `justify-end ${language === 'ur' ? 'text-right' : ''}` : `justify-start ${language === 'ur' ? 'text-right' : ''}`}`}>
                <div className={`rounded-lg px-4 py-2 max-w-[80%] whitespace-pre-wrap ${msg.role === 'user' ? 'bg-gold text-white' : 'bg-gray-200 dark:bg-gray-700 text-charcoal dark:text-gray-200'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start my-2">
                <div className="rounded-lg px-4 py-2 bg-gray-200 dark:bg-gray-700 text-charcoal dark:text-gray-200">
                  <span className="animate-pulse">...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <footer className="p-4 border-t border-gray-200 dark:border-gold/20">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('chatbot_placeholder')}
                className={`flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold dark:bg-charcoal dark:border-gray-600 dark:text-white ${language === 'ur' ? 'text-right' : ''}`}
                disabled={isLoading}
              />
              <button onClick={handleSend} disabled={isLoading} className="ms-2 bg-navy-blue text-white p-2 rounded-lg hover:bg-navy-blue/90 disabled:bg-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                 </svg>
              </button>
            </div>
             <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">{t('chatbot_disclaimer')}</p>
          </footer>
        </div>
      )}
    </>
  );
};

export default Chatbot;