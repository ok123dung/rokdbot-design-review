import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import vi from './locales/vi.json';
import en from './locales/en.json';
import zh from './locales/zh.json';
import ko from './locales/ko.json';

const resources = {
  vi: { translation: vi },
  en: { translation: en },
  zh: { translation: zh },
  ko: { translation: ko },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi',
    // Strip region (e.g. `vi-VN` → `vi`) so detector matches our language-only resources.
    // Without this, a fresh visitor with browser locale `vi-VN` falls through every
    // `currentLang === "vi"` check in SEO.tsx and gets the zh_CN fallback.
    load: 'languageOnly',
    supportedLngs: ['vi', 'en', 'ko', 'zh'],
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
