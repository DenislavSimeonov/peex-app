import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-locize-backend';
import enTranslation from './locales/en/translation.json';
import bgTranslation from './locales/bg/translation.json';
// import { locizePlugin } from 'locize';

// const locizeOptions = {
//   projectId: process.env.REACT_APP_LOCIZE_PROJECTID,
//   apiKey: process.env.REACT_APP_LOCIZE_APIKEY,
//   referenceLng: process.env.REACT_APP_LOCIZE_REFLNG,
//   version: process.env.REACT_APP_LOCIZE_VERTSION,
// };

const i18nConfig = {
  fallbackLng: ['en', 'bg'],
  resources: {
    en: {
      translation: enTranslation, // Use imported JSON
    },
    bg: {
      translation: bgTranslation, // Use imported JSON
    },
  },
  saveMissing: true,
  debug: false,
};

i18n.use(initReactI18next).use(Backend).init(i18nConfig);
// .use(locizePlugin)
// .init({
//   debug: false,
//   fallbackLng: ['en', 'bg'],
//   backend: locizeOptions,
//   saveMissing: true,
// });

export default i18n;
