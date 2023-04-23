import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-locize-backend';
import { locizePlugin } from 'locize';

const locizeOptions = {
  projectId: process.env.REACT_APP_LOCIZE_PROJECTID,
  apiKey: process.env.REACT_APP_LOCIZE_APIKEY,
  referenceLng: process.env.REACT_APP_LOCIZE_REFLNG,
  version: process.env.REACT_APP_LOCIZE_VERTSION,
};

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(locizePlugin)
  .init({
    debug: false,
    fallbackLng: ['en', 'bg'],
    backend: locizeOptions,
    saveMissing: true,
  });

export default i18n;
