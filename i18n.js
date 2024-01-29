import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import enTranslation from "./locales/en/common.json"
import ruTranslation from "./locales/ru/common.json"
import uzTranslation from "./locales/uz/common.json"

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: enTranslation,
			},
			ru: {
				translation: ruTranslation,
			},
			uz: {
				translation: uzTranslation,
			},
		},
		fallbackLng: "ru",
		debug: process.env.NODE_ENV === "development",
		interpolation: {
			escapeValue: false, 
		},
	})

export default i18n
