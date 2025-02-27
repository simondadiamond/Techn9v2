import { useState, useEffect, createContext, useContext } from 'react';
import enTranslations from './en.json';
import frTranslations from './fr.json';

type Language = 'en' | 'fr';
type Translations = typeof enTranslations;

interface I18nContextType {
  language: Language;
  t: (key: string) => string;
  changeLanguage: (lang: Language) => void;
}

const translations: Record<Language, Translations> = {
  en: enTranslations,
  fr: frTranslations,
};

const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  return (browserLang === 'fr' ? 'fr' : 'en') as Language;
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    setLanguage(getBrowserLanguage());
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];

    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }

    return value || key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
  };

  return (
    <I18nContext.Provider value={{ language, t, changeLanguage } as any}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
