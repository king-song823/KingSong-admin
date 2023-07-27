import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useLanguage } from '@/hooks/useLanguage'
const { language } = useLanguage()
export default (app) => {
  app.use(ElementPlus, {
    locale: language.value === 'zh' ? zhCn : en
  })
}
