
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { content } from '../constants/content';
import { BilingualContent } from '../types';

export const useLocalization = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const t = (key: keyof typeof content) => {
    return content[key][language];
  };
  
  const tb = (bilingualItem: BilingualContent) => {
    return bilingualItem[language];
  };

  return { language, setLanguage, t, tb };
};
