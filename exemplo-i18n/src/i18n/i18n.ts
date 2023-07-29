import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { pt } from './pt'
import { en } from './en'
import { es } from './es'
import { fr } from './fr'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
    resources: { pt, en, fr, es },
  })

export default i18n
