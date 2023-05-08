import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';

i18n 
  .use(Backend) 
  .use(LanguageDetector)  
  .use(initReactI18next)  
  .use(XHR)
  .init({        
    debug: true,
    detection: { 
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      aches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'], 
    },
    backend: {
      loadPath: '/game-store-course_work/locales/{{lng}}/translation.json'
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

export default i18n;