
import { createContext } from 'react';
import { Language } from '../types';

interface ILanguageContext {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<ILanguageContext>({
  language: 'en',
  setLanguage: () => {},
});
