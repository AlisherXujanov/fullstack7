import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


i18n.use(initReactI18next).init({
    resources: {}, // Where we're gonna put translations' files
    lng: "en",     // Set the initial language of the App
    fallbackLng: "en", // If the language detector fails, it will use this language
});