import { useTranslation } from 'react-i18next'

import styles from './App.module.css'
import Header from './components/Header'
import i18n from './i18n/i18n'

const foodsMap = new Map<string, string>([
  ['pt', 'arroz e feijão'],
  ['en', 'fish and chips'],
  ['es', 'paella'],
  ['fr', 'ratatouille'],
])

const App = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header />

      <div className={styles.container}>
        <span className={styles.slogan}>{t('appTitle.slogan')}</span>
        <span className={styles.slogan}>
          {t('content.foodSentence', { bestFood: foodsMap.get(i18n.language) })}
        </span>
        <span className={styles.slogan}>
          {t('content.currentDatetime', { date: new Date() })}
        </span>
      </div>
    </>
  )
}

export default App
