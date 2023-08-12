import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import moment from 'moment'

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
      format: (value, format, lng) => {
        if (format === 'uppercase') {
          return value.toUpperCase()
        }

        if (value instanceof Date) {
          return moment(value).format(format)
        }
      },
    },
    resources: { pt, en, fr, es },
  })

export default i18n
