import { LANG } from '../constant'
import { getItem, setItem } from '@/utils/storage'
import { ref } from 'vue'
const language = ref(getItem(LANG) || 'zh')
export const useLanguage = () => {
  const setLanguage = (lang) => {
    setItem(LANG, lang)
    language.value = lang
  }
  const getLanguage = () => {
    return localStorage.getItem(LANG) || language.value
  }
  return {
    language,
    setLanguage,
    getLanguage
  }
}
