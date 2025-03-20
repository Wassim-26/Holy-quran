import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import frTranslation from "./locales/fr.json";
import arTranslation from "./locales/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: frTranslation },
    ar: { translation: arTranslation },
  },
  lng: "ar", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
