import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import pt from '@/locales/pt.json'

const defaultLocale = 'en'

export function i18nSetup () {
    const locale = getLocale()

    return createI18n({
      legacy: false,
      locale: locale,
      messages: {
        'en': en,
        'pt': pt,
      }
    })
}

const getLocale = () => {
  const savedLocale = localStorage.getItem('locale')

  if (!savedLocale) {
    localStorage.setItem('locale', defaultLocale)

    return defaultLocale
  }

  return savedLocale
}

export function setLocale(locale: string) {
  localStorage.setItem('locale', locale)
  location.reload()
}
