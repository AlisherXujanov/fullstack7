import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from './locale/en.json'
import ruJSON from './locale/ru.json'

i18n.use(initReactI18next).init({
    // The parameters below are optional
    // 1. resources are needed to store the translations
    // 2. lng is the default language
    // 3. fallbackLng is the fallback language in case the default language is not found
    resources: {
        en: { ...enJSON },
        ru: { ...ruJSON },
    },
    lng: "en",
    fallbackLng: "en",
});
export default i18n;